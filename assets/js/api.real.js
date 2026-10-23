/* ==========================================================================
 * ROBOFORGE 机甲工场 · api.real.js —— 真实接口版（Real API Layer）
 * --------------------------------------------------------------------------
 * 说明：
 *   1. 本文件只做「接口定义 + 请求封装」，不含任何业务数据；
 *      模拟数据请见 api.mock.js，通过 window.API_MODE 切换：
 *        window.API_MODE = 'mock'  → 走 window.MOCK 本地数据（离线演示）
 *        window.API_MODE = 'real'  → 走本文件的 REST 接口（部署联调）
 *   2. 统一约定：
 *      - 网关基址 BASE，所有路径以 /api/v1 开头；
 *      - 认证：Authorization: Bearer <token>（登录/注册接口除外）；
 *      - 请求体：application/json；文件上传：multipart/form-data；
 *      - 统一响应包装：{ code:number, message:string, data:T, traceId:string }
 *        code=0 成功；code=401 未登录；code=403 无权限；code=4xx/5xx 业务/服务异常；
 *      - 分页参数统一：{ page:number=1, pageSize:number=20, sort?:string, order?:'asc'|'desc' }
 *        分页返回统一：{ list:T[], total:number, page:number, pageSize:number, hasMore:boolean }
 *      - 时间格式：ISO8601 字符串（服务端返回），前端按 locale 格式化；
 *      - 金额：单位「分」（integer），前端展示时 /100；
 *   3. 前端接入方式（示例）：
 *        RF.api.setMode('real');
 *        const res = await RF.api.news.list({ page:1, pageSize:20, cat:'新品发布' });
 *        if (res.code === 0) render(res.data.list);
 *   4. 后端实现要求：所有接口需支持 CORS、幂等（写操作需 Idempotency-Key）、
 *      列表接口需支持字段筛选与关键字检索，写接口需记录操作日志。
 * ========================================================================== */
(function (global) {
  'use strict';

  var BASE = (global.RF_CONFIG && global.RF_CONFIG.apiBase) || '/api/v1';
  var TOKEN_KEY = 'rf_token';

  /* ---------- 基础请求封装 ------------------------------------------------ */
  /**
   * 统一请求方法
   * @param {string} path 接口路径（不含 BASE）
   * @param {Object} opt
   * @param {'GET'|'POST'|'PUT'|'PATCH'|'DELETE'} [opt.method=GET]
   * @param {Object} [opt.query] URL 查询参数（自动过滤 undefined/null/''）
   * @param {Object|FormData} [opt.body] 请求体
   * @param {boolean} [opt.auth=true] 是否携带 Token
   * @param {string} [opt.idemKey] 写操作幂等键
   * @param {number} [opt.timeout=15000] 超时毫秒
   * @returns {Promise<{code:number,message:string,data:*,traceId:string}>}
   */
  async function request(path, opt) {
    opt = opt || {};
    var method = (opt.method || 'GET').toUpperCase();
    var url = BASE + path;
    var qs = [];
    if (opt.query) {
      Object.keys(opt.query).forEach(function (k) {
        var v = opt.query[k];
        if (v !== undefined && v !== null && v !== '') qs.push(encodeURIComponent(k) + '=' + encodeURIComponent(v));
      });
    }
    if (qs.length) url += (url.indexOf('?') > -1 ? '&' : '?') + qs.join('&');

    var headers = { Accept: 'application/json' };
    var body;
    if (opt.body instanceof FormData) {
      body = opt.body; // 上传场景，不设置 Content-Type，由浏览器自动带 boundary
    } else if (opt.body) {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(opt.body);
    }
    if (opt.auth !== false) {
      var tk = global.localStorage.getItem(TOKEN_KEY);
      if (tk) headers.Authorization = 'Bearer ' + tk;
    }
    if (opt.idemKey) headers['Idempotency-Key'] = opt.idemKey;

    var ctrl = new AbortController();
    var timer = setTimeout(function () { ctrl.abort(); }, opt.timeout || 15000);
    try {
      var resp = await fetch(url, { method: method, headers: headers, body: body, signal: ctrl.signal });
      var json = await resp.json().catch(function () { return { code: -1, message: '响应解析失败' }; });
      if (json.code === 401) { global.dispatchEvent(new CustomEvent('rf:unauthorized', { detail: json })); }
      return json;
    } catch (e) {
      return { code: -1, message: (e && e.name === 'AbortError') ? '请求超时' : '网络异常', data: null, traceId: '' };
    } finally {
      clearTimeout(timer);
    }
  }

  var get = function (p, q, o) { return request(p, Object.assign({ method: 'GET', query: q }, o)); };
  var post = function (p, b, o) { return request(p, Object.assign({ method: 'POST', body: b }, o)); };
  var put = function (p, b, o) { return request(p, Object.assign({ method: 'PUT', body: b }, o)); };
  var del = function (p, b, o) { return request(p, Object.assign({ method: 'DELETE', body: b }, o)); };

  /* =============== 1. 认证 / 用户 Auth ================================== */
  var auth = {
    /** 账号密码登录 POST /auth/login
     * @param {{account:string,password:string,captcha?:string}} body
     * @returns {Promise<{code,data:{token:string,refreshToken:string,user:User}}>} */
    login: function (body) { return post('/auth/login', body, { auth: false }); },
    /** 手机验证码登录 POST /auth/login-sms
     * @param {{phone:string,code:string}} body */
    loginSms: function (body) { return post('/auth/login-sms', body, { auth: false }); },
    /** 注册 POST /auth/register
     * @param {{account:string,phone:string,password:string,code:string,type:'personal'|'brand'|'integrator'|'org'}} body */
    register: function (body) { return post('/auth/register', body, { auth: false }); },
    /** 发送短信验证码 POST /auth/sms-code {phone,scene} */
    smsCode: function (body) { return post('/auth/sms-code', body, { auth: false }); },
    /** 找回密码 POST /auth/reset-password {phone,code,password} */
    resetPwd: function (body) { return post('/auth/reset-password', body, { auth: false }); },
    /** 退出登录 POST /auth/logout */
    logout: function () { return post('/auth/logout', {}); },
    /** 当前登录用户 GET /auth/me → {user:User} */
    me: function () { return get('/auth/me'); },
    /** 更新资料 PUT /auth/profile {nickname,avatar,desc,tags,type} */
    updateProfile: function (body) { return put('/auth/profile', body); },
    /** 实名/企业认证 POST /auth/verify {type,realName,idNo|licenseNo,files:string[]} */
    verify: function (body) { return post('/auth/verify', body); }
  };

  /* =============== 2. 新闻宣发 News ====================================== */
  var news = {
    /** 资讯列表 GET /news
     * @param {{page?,pageSize?,cat?,brandId?,keyword?,tag?,top?:0|1,sort?:'latest'|'hot'}} q
     * @returns {Promise<{code,data:{list:NewsItem[],total,page,pageSize,hasMore}}>} */
    list: function (q) { return get('/news', q); },
    /** 资讯详情 GET /news/:id → {news:NewsItem,related:NewsItem[],brand:Brand} */
    detail: function (id) { return get('/news/' + id); },
    /** 分类列表 GET /news/categories → {list:{id,name,nameEn,count}[]} */
    categories: function () { return get('/news/categories'); },
    /** 发布宣发 POST /news {title,cat,cover,content,attachments,tags,publishAt,lang} */
    publish: function (body) { return post('/news', body, { idemKey: 'news-' + Date.now() }); },
    /** 草稿箱 GET /news/drafts */
    drafts: function (q) { return get('/news/drafts', q); },
    /** 提交审核 POST /news/:id/submit {level:1|2|3,remark} */
    submitReview: function (id, body) { return post('/news/' + id + '/submit', body); },
    /** 审核记录 GET /news/:id/reviews → {list:ReviewLog[]} */
    reviews: function (id) { return get('/news/' + id + '/reviews'); },
    /** 我的宣发 GET /news/mine {status} */
    mine: function (q) { return get('/news/mine', q); },
    /** 专题聚合 GET /news/topics → {list:Topic[]} */
    topics: function () { return get('/news/topics'); },
    /** 热榜 GET /news/rank {range:'day'|'week'|'month'} */
    rank: function (q) { return get('/news/rank', q); },
    /** 搜索 GET /news/search {keyword,page} */
    search: function (q) { return get('/news/search', q); },
    /** 订阅/关注 POST /news/:brandId/subscribe */
    subscribe: function (brandId) { return post('/news/' + brandId + '/subscribe', {}); },
    /** 宣发数据效果 GET /news/:id/stats → {views,likes,comments,shares,trend:[]} */
    stats: function (id) { return get('/news/' + id + '/stats'); },
    /** 点赞 POST /news/:id/like */
    like: function (id) { return post('/news/' + id + '/like', {}); },
    /** 评论 GET /news/:id/comments | POST /news/:id/comments {content,replyTo} */
    comments: function (id, q) { return get('/news/' + id + '/comments', q); },
    comment: function (id, body) { return post('/news/' + id + '/comments', body); }
  };

  /* =============== 3. 产品 / 分类索引 Products =========================== */
  var products = {
    /** 产品列表 GET /products {cat,subCat,brandId,keyword,priceMin,priceMax,tags,sort,page,pageSize} */
    list: function (q) { return get('/products', q); },
    /** 产品详情 GET /products/:id → {product:Product,specs:Spec[],docs:Doc[],reviews:Review[],similar:Product[]} */
    detail: function (id) { return get('/products/' + id); },
    /** 分类树 GET /products/categories → {list:Category[]}（商用/具身/定制/模块/组件/配件/五金/3D打印/外壳/玩具） */
    categories: function () { return get('/products/categories'); },
    /** 搜索（含联想） GET /products/search {keyword,page} → {list,hints:string[]} */
    search: function (q) { return get('/products/search', q); },
    /** 高级筛选 GET /products/filter（参数同 list，支持多维组合） */
    filter: function (q) { return get('/products/filter', q); },
    /** 对比 GET /products/compare?ids=a,b,c → {list:Product[],diff:CompareRow[]} */
    compare: function (ids) { return get('/products/compare', { ids: ids }); },
    /** 评价 GET /products/:id/reviews | POST /products/:id/reviews {rating,content,images} */
    reviews: function (id, q) { return get('/products/' + id + '/reviews', q); },
    review: function (id, body) { return post('/products/' + id + '/reviews', body); },
    /** 收藏 POST /products/:id/favorite | DELETE /products/:id/favorite */
    favorite: function (id) { return post('/products/' + id + '/favorite', {}); },
    unfavorite: function (id) { return del('/products/' + id + '/favorite'); },
    /** 发布产品 POST /products {name,cat,price,images,specs,docs,desc} */
    publish: function (body) { return post('/products', body); }
  };

  /* =============== 4. 模块 / 组件 / 配件 / 五金 / 3D打印 / 外壳 ========== */
  var modules = {
    /** 模块列表 GET /modules {subCat:'感知'|'驱动'|'控制'|'电源'|'通信'|'结构',page,pageSize,sort} */
    list: function (q) { return get('/modules', q); },
    /** 模块详情 GET /modules/:id → {module:Module,interfaces:IfRow[],docs:Doc[],plays:Play[]} */
    detail: function (id) { return get('/modules/' + id); },
    /** 子组件表 GET /modules/sub-categories */
    subCategories: function () { return get('/modules/sub-categories'); },
    /** 模块对比 GET /modules/compare?ids= */
    compare: function (ids) { return get('/modules/compare', { ids: ids }); },
    /** 搭配方案 GET /modules/schemes {scene} → {list:Scheme[]} */
    schemes: function (q) { return get('/modules/schemes', q); },
    /** 玩法列表 GET /modules/plays {moduleId,page} | 详情 GET /modules/plays/:id */
    plays: function (q) { return get('/modules/plays', q); },
    playDetail: function (id) { return get('/modules/plays/' + id); },
    /** 资料中心 GET /modules/resources {type:'3d'|'hw'|'sw'|'video',moduleId} */
    resources: function (q) { return get('/modules/resources', q); },
    /** 资料下载（换取临时下载令牌） POST /files/download-token {fileId} → {url,expireAt} */
    download: function (fileId) { return post('/files/download-token', { fileId: fileId }); },
    /** 组件/配件/五金/3D打印/外壳：同构接口，仅 path 前缀不同 */
    components: function (q) { return get('/components', q); },
    accessories: function (q) { return get('/accessories', q); },
    hardwares: function (q) { return get('/hardwares', q); },
    prints: function (q) { return get('/prints', q); },
    shells: function (q) { return get('/shells', q); }
  };

  /* =============== 5. 玩具机器人 Toy ==================================== */
  var toys = {
    /** 玩具列表 GET /toys {age,difficulty,priceMax,sort,page} */
    list: function (q) { return get('/toys', q); },
    /** 详情 GET /toys/:id → {toy:Toy,steps:Step[],files:Doc[],shows:Show[]} */
    detail: function (id) { return get('/toys/' + id); },
    /** 小型定制下单 POST /toys/custom {baseId,color,engraving,quantity,contact} */
    custom: function (body) { return post('/toys/custom', body); },
    /** DIY 玩法 GET /toys/diy | 详情 GET /toys/diy/:id */
    diy: function (q) { return get('/toys/diy', q); },
    diyDetail: function (id) { return get('/toys/diy/' + id); },
    /** 排行榜 GET /toys/rank {range} */
    rank: function (q) { return get('/toys/rank', q); },
    /** 作品秀 GET /toys/shows | 发布 POST /toys/shows {title,images,desc,toyId} */
    shows: function (q) { return get('/toys/shows', q); },
    publishShow: function (body) { return post('/toys/shows', body); },
    /** 赛事 GET /toys/contests | 报名 POST /toys/contests/:id/join */
    contests: function (q) { return get('/toys/contests', q); },
    joinContest: function (id, body) { return post('/toys/contests/' + id + '/join', body || {}); }
  };

  /* =============== 6. AI 智造 AI Manufacturing ========================== */
  var ai = {
    /** 会话列表 GET /ai/sessions → {list:{id,title,updatedAt}[]} */
    sessions: function () { return get('/ai/sessions'); },
    /** 会话消息 GET /ai/sessions/:id/messages */
    messages: function (id) { return get('/ai/sessions/' + id + '/messages'); },
    /** 发送对话（SSE 流式，接口需在 headers 加 Accept:text/event-stream）
     *  POST /ai/chat {sessionId,content,llmId,attachments} → {delta,message,split?,project?} */
    chat: function (body) { return post('/ai/chat', body); },
    /** 需求提交 POST /ai/requirements {title,scene,budget,deadline,detail,attachments} → {requirementId} */
    requirement: function (body) { return post('/ai/requirements', body); },
    /** 需求拆分 GET /ai/requirements/:id/split → {items:{name,match,status}[]} */
    split: function (id) { return get('/ai/requirements/' + id + '/split'); },
    /** 生成项目 POST /ai/requirements/:id/project → {projectId,nodes:Node[]} */
    genProject: function (id, body) { return post('/ai/requirements/' + id + '/project', body || {}); },
    /** 资源匹配 GET /ai/requirements/:id/match → {matched:Product[],custom:Item[],missing:Item[]} */
    match: function (id) { return get('/ai/requirements/' + id + '/match'); },
    /** 缺资源转工单 POST /ai/requirements/:id/ticket {items,level} → {ticketId} */
    toTicket: function (id, body) { return post('/ai/requirements/' + id + '/ticket', body); },
    /** 集成明细 GET /ai/integrations/:id → {bom:BomRow[],steps:Step[],risk:string[]} */
    integration: function (id) { return get('/ai/integrations/' + id); },
    /** 三方大模型账号 GET /ai/llms | 绑定 POST /ai/llms | 测试 POST /ai/llms/:id/test */
    llms: function () { return get('/ai/llms'); },
    bindLlm: function (body) { return post('/ai/llms', body); },
    testLlm: function (id) { return post('/ai/llms/' + id + '/test', {}); },
    removeLlm: function (id) { return del('/ai/llms/' + id); },
    /** 提示词模板 GET /ai/templates | 用量计费 GET /ai/usage {range} */
    templates: function () { return get('/ai/templates'); },
    usage: function (q) { return get('/ai/usage', q); }
  };

  /* =============== 7. 论坛 / 学习 Forum & Learn ========================= */
  var forum = {
    /** 板块 GET /forum/boards */
    boards: function () { return get('/forum/boards'); },
    /** 帖子列表 GET /forum/posts {board,keyword,sort:'latest'|'hot'|'top',page} */
    list: function (q) { return get('/forum/posts', q); },
    /** 帖子详情 GET /forum/posts/:id → {post:Post,replies:Reply[]} */
    detail: function (id) { return get('/forum/posts/' + id); },
    /** 发帖 POST /forum/posts {board,title,content,images,tags} */
    publish: function (body) { return post('/forum/posts', body); },
    /** 回帖 POST /forum/posts/:id/replies {content,replyTo} */
    reply: function (id, body) { return post('/forum/posts/' + id + '/replies', body); },
    /** 点赞 / 收藏 / 置顶 / 加精 */
    like: function (id) { return post('/forum/posts/' + id + '/like', {}); },
    favorite: function (id) { return post('/forum/posts/' + id + '/favorite', {}); },
    top: function (id, body) { return post('/forum/posts/' + id + '/top', body || {}); },
    essence: function (id, body) { return post('/forum/posts/' + id + '/essence', body || {}); },
    /** 搜索 GET /forum/search {keyword,board} */
    search: function (q) { return get('/forum/search', q); },
    /** 我的帖子 GET /forum/mine */
    mine: function (q) { return get('/forum/mine', q); }
  };
  var learn = {
    /** 学习资料列表 GET /learn {cat,level,free,page} */
    list: function (q) { return get('/learn', q); },
    /** 资料详情 GET /learn/:id → {doc:LearnDoc,chapters:Chapter[],files:Doc[]} */
    detail: function (id) { return get('/learn/' + id); },
    /** 课程 GET /learn/courses | 课程详情 GET /learn/courses/:id */
    courses: function (q) { return get('/learn/courses', q); },
    courseDetail: function (id) { return get('/learn/courses/' + id); },
    /** 学习路径 GET /learn/paths | 报名 POST /learn/:id/enroll | 进度 GET /learn/:id/progress */
    paths: function () { return get('/learn/paths'); },
    enroll: function (id) { return post('/learn/' + id + '/enroll', {}); },
    progress: function (id) { return get('/learn/' + id + '/progress'); },
    /** 问答 GET /learn/qa | 提问 POST /learn/qa */
    qa: function (q) { return get('/learn/qa', q); },
    ask: function (body) { return post('/learn/qa', body); }
  };

  /* =============== 8. 需求 / 项目 / 集成 / 测试 ========================= */
  var biz = {
    /** 需求大厅 GET /demands {cat,budgetMin,budgetMax,status,sort,page} */
    demands: function (q) { return get('/demands', q); },
    demandDetail: function (id) { return get('/demands/' + id); },
    publishDemand: function (body) { return post('/demands', body); },
    bidDemand: function (id, body) { return post('/demands/' + id + '/bids', body); },
    myDemands: function (q) { return get('/demands/mine', q); },

    /** 项目大厅 GET /projects {status,keyword,page} | 详情 GET /projects/:id */
    projects: function (q) { return get('/projects', q); },
    projectDetail: function (id) { return get('/projects/' + id); },
    publishProject: function (body) { return post('/projects', body); },
    /** 进度明细 GET /projects/:id/progress → {nodes:Node[],logs:Log[]} */
    progress: function (id) { return get('/projects/' + id + '/progress'); },
    /** 节点分组 GET /projects/:id/nodes | 更新节点 PUT /projects/:id/nodes/:nodeId */
    nodes: function (id) { return get('/projects/' + id + '/nodes'); },
    updateNode: function (id, nodeId, body) { return put('/projects/' + id + '/nodes/' + nodeId, body); },
    /** 成员与分组 GET /projects/:id/members | 邀请 POST /projects/:id/members */
    members: function (id) { return get('/projects/' + id + '/members'); },
    inviteMember: function (id, body) { return post('/projects/' + id + '/members', body); },
    myProjects: function (q) { return get('/projects/mine', q); },

    /** 集成需求 GET /integrations | POST /integrations | 详情 GET /integrations/:id */
    integrations: function (q) { return get('/integrations', q); },
    integrationDetail: function (id) { return get('/integrations/' + id); },
    publishIntegration: function (body) { return post('/integrations', body); },

    /** 测试需求 GET /tests | POST /tests | 详情 GET /tests/:id | 报告 GET /tests/:id/report */
    tests: function (q) { return get('/tests', q); },
    testDetail: function (id) { return get('/tests/' + id); },
    publishTest: function (body) { return post('/tests', body); },
    testReport: function (id) { return get('/tests/' + id + '/report'); }
  };

  /* =============== 9. 用户 / 排行 / 主页 ================================= */
  var users = {
    /** 用户列表（检索浏览） GET /users {keyword,type,sort,page} */
    list: function (q) { return get('/users', q); },
    /** 个人主页 GET /users/:id → {user:User,products:Product[],projects:Project[],stats:Stat[]} */
    detail: function (id) { return get('/users/' + id); },
    /** 排行榜 GET /users/rank {type:'exp'|'products'|'likes'|'projects',range} */
    rank: function (q) { return get('/users/rank', q); },
    /** 关注 / 取关 POST /users/:id/follow | DELETE */
    follow: function (id) { return post('/users/' + id + '/follow', {}); },
    unfollow: function (id) { return del('/users/' + id + '/follow'); },
    /** 关注与粉丝 GET /users/:id/relations {type:'following'|'followers'} */
    relations: function (id, q) { return get('/users/' + id + '/relations', q); },
    /** 收藏夹 GET /users/me/collections {type} */
    collections: function (q) { return get('/users/me/collections', q); },
    /** 信用等级 GET /users/me/credit */
    credit: function () { return get('/users/me/credit'); }
  };

  /* =============== 10. 沟通 / 消息 ====================================== */
  var messages = {
    /** 会话列表 GET /messages/conversations → {list:Conversation[],unread:number} */
    conversations: function () { return get('/messages/conversations'); },
    /** 单聊消息 GET /messages/conversations/:id/messages {page} */
    history: function (id, q) { return get('/messages/conversations/' + id + '/messages', q); },
    /** 发送消息 POST /messages/conversations/:id/messages {type:'text'|'image'|'file'|'order',content,fileId} */
    send: function (id, body) { return post('/messages/conversations/' + id + '/messages', body); },
    /** 分组沟通 GET /messages/groups | 项目沟通 GET /messages/projects/:id | 资金专项 GET /messages/funds/:id */
    groups: function () { return get('/messages/groups'); },
    groupMessages: function (id, q) { return get('/messages/groups/' + id + '/messages', q); },
    projectRoom: function (pid, q) { return get('/messages/projects/' + pid, q); },
    fundRoom: function (fid, q) { return get('/messages/funds/' + fid, q); },
    /** 通知 GET /messages/notifications | 已读 POST /messages/notifications/read */
    notifications: function (q) { return get('/messages/notifications', q); },
    readNotification: function (body) { return post('/messages/notifications/read', body || {}); }
  };

  /* =============== 11. 工单 / 资金 ====================================== */
  var tickets = {
    /** 提交工单 POST /tickets {type,level,title,content,attachments,relatedId} → {ticketId} */
    submit: function (body) { return post('/tickets', body, { idemKey: 'tk-' + Date.now() }); },
    /** 我的工单 GET /tickets/mine {status,page} */
    mine: function (q) { return get('/tickets/mine', q); },
    /** 工单详情 GET /tickets/:id → {ticket:Ticket,flow:FlowNode[],replies:Reply[]} */
    detail: function (id) { return get('/tickets/' + id); },
    /** 工单回复 POST /tickets/:id/replies | 关闭 PUT /tickets/:id/close | 评价 POST /tickets/:id/rate */
    reply: function (id, body) { return post('/tickets/' + id + '/replies', body); },
    close: function (id, body) { return put('/tickets/' + id + '/close', body || {}); },
    rate: function (id, body) { return post('/tickets/' + id + '/rate', body); }
  };
  var funds = {
    /** 资金概览 GET /funds/overview → {balance,escrow,income,expense,monthTrend:[]} */
    overview: function () { return get('/funds/overview'); },
    /** 明细 GET /funds/records {type,range,page} */
    records: function (q) { return get('/funds/records', q); },
    /** 支付 / 托管 POST /funds/pay {orderId,amount,method:'wechat'|'alipay'|'bank'} */
    pay: function (body) { return post('/funds/pay', body, { idemKey: 'pay-' + Date.now() }); },
    /** 提现 POST /funds/withdraw {amount,account} */
    withdraw: function (body) { return post('/funds/withdraw', body); },
    /** 发票 GET /funds/invoices | 申请 POST /funds/invoices */
    invoices: function (q) { return get('/funds/invoices', q); },
    applyInvoice: function (body) { return post('/funds/invoices', body); }
  };

  /* =============== 12. 文件 / 上传 ====================================== */
  var files = {
    /** 上传（multipart） POST /files/upload
     * @param {File} file @param {{biz?:'news'|'product'|'avatar'|'ticket'|'show'}} extra
     * @returns {Promise<{code,data:{fileId:string,url:string,size:number,name:string}}>} */
    upload: function (file, extra) {
      var fd = new FormData();
      fd.append('file', file);
      Object.keys(extra || {}).forEach(function (k) { fd.append(k, extra[k]); });
      return request('/files/upload', { method: 'POST', body: fd });
    },
    /** 下载令牌 POST /files/download-token {fileId} */
    token: function (fileId) { return post('/files/download-token', { fileId: fileId }); }
  };

  /* =============== 13. 后台管理 Admin（需管理员权限） ================== */
  var admin = {
    /** 仪表盘 GET /admin/dashboard → {kpis:Kpi[],trend:[],pending:{review,ticket,content}} */
    dashboard: function () { return get('/admin/dashboard'); },
    /** 用户管理 GET /admin/users | 启停 PUT /admin/users/:id/status | 角色 PUT /admin/users/:id/role */
    users: function (q) { return get('/admin/users', q); },
    setUserStatus: function (id, body) { return put('/admin/users/' + id + '/status', body); },
    setUserRole: function (id, body) { return put('/admin/users/' + id + '/role', body); },
    /** 权限管理 GET /admin/roles | 新建 POST /admin/roles | 权限矩阵 PUT /admin/roles/:id/perms */
    roles: function () { return get('/admin/roles'); },
    createRole: function (body) { return post('/admin/roles', body); },
    savePerms: function (id, body) { return put('/admin/roles/' + id + '/perms', body); },
    /** 审核管理（多级） GET /admin/reviews {level,status} | 通过 PUT /admin/reviews/:id/approve | 驳回 PUT /admin/reviews/:id/reject */
    reviews: function (q) { return get('/admin/reviews', q); },
    approve: function (id, body) { return put('/admin/reviews/' + id + '/approve', body || {}); },
    reject: function (id, body) { return put('/admin/reviews/' + id + '/reject', body); },
    /** 审核流程配置 GET /admin/review-flow | PUT /admin/review-flow */
    reviewFlow: function () { return get('/admin/review-flow'); },
    saveReviewFlow: function (body) { return put('/admin/review-flow', body); },
    /** 发布管理 GET /admin/contents | 上下架 PUT /admin/contents/:id/status | 删除 DELETE */
    contents: function (q) { return get('/admin/contents', q); },
    setContentStatus: function (id, body) { return put('/admin/contents/' + id + '/status', body); },
    deleteContent: function (id) { return del('/admin/contents/' + id); },
    /** 评论管理 GET /admin/comments | 删除 DELETE /admin/comments/:id | 屏蔽 PUT */
    comments: function (q) { return get('/admin/comments', q); },
    deleteComment: function (id) { return del('/admin/comments/' + id); },
    blockComment: function (id, body) { return put('/admin/comments/' + id + '/block', body || {}); },
    /** 工单管理 GET /admin/tickets | 分派 PUT /admin/tickets/:id/assign | 关闭 PUT */
    tickets: function (q) { return get('/admin/tickets', q); },
    assignTicket: function (id, body) { return put('/admin/tickets/' + id + '/assign', body); },
    closeTicket: function (id, body) { return put('/admin/tickets/' + id + '/close', body || {}); },
    /** 项目管理 GET /admin/projects | 资金管理 GET /admin/funds | 沟通管理 GET /admin/messages */
    projects: function (q) { return get('/admin/projects', q); },
    funds: function (q) { return get('/admin/funds', q); },
    auditFund: function (id, body) { return put('/admin/funds/' + id + '/audit', body || {}); },
    messages: function (q) { return get('/admin/messages', q); },
    /** 分类管理 GET /admin/categories | POST | PUT | DELETE */
    categories: function () { return get('/admin/categories'); },
    saveCategory: function (body) { return post('/admin/categories', body); },
    deleteCategory: function (id) { return del('/admin/categories/' + id); },
    /** 产品管理 / 新闻管理 / 论坛管理 / LLM 配置 / 广告位 / 日志 / 设置 / 统计 */
    products: function (q) { return get('/admin/products', q); },
    news: function (q) { return get('/admin/news', q); },
    forum: function (q) { return get('/admin/forum', q); },
    llms: function () { return get('/admin/llms'); },
    saveLlm: function (body) { return put('/admin/llms', body); },
    ads: function (q) { return get('/admin/ads', q); },
    saveAd: function (body) { return post('/admin/ads', body); },
    logs: function (q) { return get('/admin/logs', q); },
    settings: function () { return get('/admin/settings'); },
    saveSettings: function (body) { return put('/admin/settings', body); },
    statistics: function (q) { return get('/admin/statistics', q); }
  };


  /* ---------- 发布中心 ----------------------------------------------------
   * 覆盖页面：module_publish / product_publish / toy_publish / news_edit
   * --------------------------------------------------------------------- */
  var publish = {
    /**
     * 发布草稿（模块 / 组件 / 五金 / 外壳 / 配件 / 3D打印 通用）
     * @param {Object} body
     * @param {'module'|'component'|'hardware'|'shell'|'accessory'|'print3d'} body.cat 品类
     * @param {string} body.name            名称（必填，2-60 字）
     * @param {string} body.brand           品牌
     * @param {string} body.model           型号
     * @param {number} body.price           单价（单位：分）
     * @param {number} body.stock           库存件数
     * @param {string} body.license         开源协议
     * @param {string} body.intro           简介
     * @param {Array<{k:string,v:string}>} body.specs  技术参数表
     * @param {string[]} body.fileIds       已上传资料 ID（先调 files.upload）
     * @param {boolean} body.public         是否公开
     * @returns {Promise<{code:number,message:string,data:{id:string,status:'reviewing',reviewEta:string},traceId:string}>}
     */
    module: function (body) { return post('/publish/module', body); },

    /**
     * 发布整机产品（商用 / 具身 / 定制 / 玩具）
     * @param {Object} body
     * @param {'commercial'|'embodied'|'custom'|'toy'} body.type 产品类型
     * @param {string} body.name            产品名称（必填）
     * @param {string} body.brand           品牌（必填）
     * @param {number} body.price           整机售价（分）
     * @param {string} body.leadTime        交付周期
     * @param {string} body.application     应用领域
     * @param {string} body.intro           产品简介（必填）
     * @param {Array<{k:string,v:string}>} body.specs  整机参数
     * @param {string[]} body.fileIds       资料 ID
     * @returns {Promise<{code:number,message:string,data:{id:string,status:'reviewing'},traceId:string}>}
     */
    product: function (body) { return post('/publish/product', body); },

    /**
     * 发布玩具作品
     * @param {Object} body
     * @param {'diy'|'print'|'custom'|'guide'} body.type 作品类型
     * @param {string} body.title           作品名称（必填）
     * @param {string} body.tagline         一句话介绍
     * @param {'入门（1-2 天）'|'进阶（3-7 天）'|'硬核（1 周以上）'} body.difficulty 难度
     * @param {number} body.cost            成本估算（分）
     * @param {string} body.buildLog        制作说明（必填）
     * @param {string} body.sharing         开源方式
     * @param {Array<{k:string,v:string}>} body.bom   零件清单
     * @param {boolean} body.joinShowcase   参加作品秀
     * @returns {Promise<{code:number,message:string,data:{id:string,showcaseRank?:number},traceId:string}>}
     */
    toy: function (body) { return post('/publish/toy', body); },

    /**
     * 编辑已有稿件（新闻 / 产品 / 作品通用），编辑后重新进入审核队列
     * @param {string} id      稿件 ID
     * @param {Object} body    字段同 publish.*，支持部分更新
     * @returns {Promise<{code:number,message:string,data:{id:string,version:string,status:'reviewing'},traceId:string}>}
     */
    edit: function (id, body) { return put('/publish/' + id, body); },

    /**
     * 稿件修订历史
     * @param {string} id
     * @returns {Promise<{code:number,message:string,data:{list:Array<{version:string,note:string,date:string}>},traceId:string}>}
     */
    revisions: function (id) { return get('/publish/' + id + '/revisions'); },

    /**
     * 发布表单可选项（分类 / 协议 / 应用领域 / 难度 / 开源方式）
     * @returns {Promise<{code:number,message:string,data:{cats:Array,licenses:string[],applications:string[],difficulties:string[],shares:string[]},traceId:string}>}
     */
    options: function () { return get('/publish/options'); }
  };

  /* ---------- 申请与承接 --------------------------------------------------
   * 覆盖页面：project_apply / project_invite / demand_apply /
   *           integration_apply / test_apply
   * --------------------------------------------------------------------- */
  var apply = {
    /**
     * 申请加入项目
     * @param {Object} body
     * @param {string} body.projectId   项目 ID（必填）
     * @param {'mech'|'algo'|'embed'|'test'|'supply'|'pm'} body.role 申请角色
     * @param {string} body.availability 可投入时间（必填）
     * @param {number} [body.expectPay]  期望报酬（分）
     * @param {string} body.experience   相关经验（必填）
     * @param {string} body.resources    可提供资源
     * @param {string} body.contact      联系方式（必填）
     * @returns {Promise<{code:number,message:string,data:{applyId:string,status:'pending',etaHours:48},traceId:string}>}
     */
    project: function (body) { return post('/apply/project', body); },

    /**
     * 邀请成员加入项目
     * @param {Object} body
     * @param {string} body.projectId    项目 ID
     * @param {string[]} body.invitees   被邀请人（用户名或邮箱）
     * @param {string} body.role         邀请角色
     * @param {string} [body.message]    邀请留言
     * @param {number} [body.validDays]  有效期天数
     * @param {boolean} [body.toGroup]   是否同时拉入项目群
     * @returns {Promise<{code:number,message:string,data:{sent:number,failed:Array<{invitee:string,reason:string}>},traceId:string}>}
     */
    invite: function (body) { return post('/apply/invite', body); },

    /**
     * 已发出的邀请列表
     * @param {string} projectId
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,name:string,avatar:string,status:string,date:string}>},traceId:string}>}
     */
    invites: function (projectId) { return get('/apply/invites', { projectId: projectId }); },

    /**
     * 撤回 / 催办邀请
     * @param {string} inviteId
     * @param {'withdraw'|'remind'} action
     * @returns {Promise<{code:number,message:string,data:{ok:boolean},traceId:string}>}
     */
    inviteAction: function (inviteId, action) { return post('/apply/invites/' + inviteId + '/' + action); },

    /**
     * 应征需求
     * @param {Object} body
     * @param {string} body.demandId     需求 ID（必填）
     * @param {string} body.title        方案标题（必填）
     * @param {string} body.solution     技术方案（必填）
     * @param {number} body.quote        报价（分，必填）
     * @param {number} body.leadDays     交付周期天数（必填）
     * @param {string} [body.deliverables] 交付物清单
     * @param {string} [body.warranty]   质保期
     * @returns {Promise<{code:number,message:string,data:{bidId:string,rank:number},traceId:string}>}
     */
    demand: function (body) { return post('/apply/demand', body); },

    /**
     * 承接集成需求
     * @param {Object} body
     * @param {string} body.integrationId 集成需求 ID
     * @param {string} body.title          方案标题
     * @param {string} body.moduleBom      模块选型清单（必填）
     * @param {string} body.gapHandling    缺失项处理方式
     * @param {number} body.quote          集成报价（分）
     * @param {number} body.leadDays       集成周期
     * @param {string} body.acceptance     验收标准
     * @returns {Promise<{code:number,message:string,data:{applyId:string,matched:number,missing:number},traceId:string}>}
     */
    integration: function (body) { return post('/apply/integration', body); },

    /**
     * 承接测试任务
     * @param {Object} body
     * @param {string} body.testId       测试需求 ID
     * @param {string[]} body.caps       测试能力标签
     * @param {string} body.plan         测试方案（必填）
     * @param {number} body.quote        报价（分）
     * @param {number} body.turnaround   周期天数
     * @param {string} body.equipment    设备清单
     * @param {string} [body.reportForm] 报告形式
     * @returns {Promise<{code:number,message:string,data:{applyId:string},traceId:string}>}
     */
    test: function (body) { return post('/apply/test', body); },

    /**
     * 能力匹配度（用于申请页展示匹配条）
     * @param {string} targetId 项目 / 需求 ID
     * @returns {Promise<{code:number,message:string,data:{list:Array<{zh:string,en:string,icon:string,pct:number}>},traceId:string}>}
     */
    matching: function (targetId) { return get('/apply/matching', { targetId: targetId }); },

    /**
     * 同类应征参考报价
     * @param {string} demandId
     * @returns {Promise<{code:number,message:string,data:{list:Array<{name:string,avatar:string,quote:string,days:number}>},traceId:string}>}
     */
    bidRefs: function (demandId) { return get('/apply/bid-refs', { demandId: demandId }); }
  };

  /* ---------- 报名 --------------------------------------------------------
   * 覆盖页面：learn_enroll / toy_contest_apply
   * --------------------------------------------------------------------- */
  var enroll = {
    /**
     * 课程报名
     * @param {Object} body
     * @param {string} body.courseId   课程 ID（必填）
     * @param {string} body.name       姓名（必填）
     * @param {string} body.phone      手机号（必填）
     * @param {string} [body.email]    邮箱
     * @param {'零基础'|'有基础'|'熟练'} body.level 基础水平
     * @param {string} [body.goal]     学习目的
     * @param {string} [body.couponId] 优惠券 ID
     * @returns {Promise<{code:number,message:string,data:{orderId:string,payable:number,expireAt:string},traceId:string}>}
     */
    course: function (body) { return post('/enroll/course', body); },

    /**
     * 赛事报名
     * @param {Object} body
     * @param {string} body.contestId  赛事 ID（必填）
     * @param {'creative'|'eng'|'edu'|'oss'} body.track 参赛组别
     * @param {string} body.workTitle  作品名称（必填）
     * @param {string} body.team       队伍名称（必填）
     * @param {string[]} [body.members] 成员昵称
     * @param {string} body.description 作品说明（必填）
     * @param {string} [body.repoUrl]   开源地址
     * @param {boolean} [body.exhibit]  是否同意展出
     * @returns {Promise<{code:number,message:string,data:{signupId:string,workNo:string},traceId:string}>}
     */
    contest: function (body) { return post('/enroll/contest', body); },

    /**
     * 赛事详情与规则
     * @param {string} contestId
     * @returns {Promise<{code:number,message:string,data:{info:Array<{k:string,v:string}>,tracks:Array,rules:Array<{q:string,a:string}>},traceId:string}>}
     */
    contestInfo: function (contestId) { return get('/enroll/contest/' + contestId); }
  };

  /* ---------- 资源与下载 --------------------------------------------------
   * 覆盖页面：resource_download_all / resource_token / fund_withdraw / fund_pay_result
   * --------------------------------------------------------------------- */
  var resource = {
    /**
     * 创建打包任务
     * @param {Object} body
     * @param {string[]} body.fileIds   资料 ID 列表（必填）
     * @param {'zip'|'7z'|'tar.gz'} [body.format='zip'] 压缩格式
     * @param {'original'|'prefix'|'group'} [body.naming='original'] 命名方式
     * @param {boolean} [body.includeReadme=true] 是否生成 README 与校验码
     * @param {'original'|'720p'|'audio'} [body.transcode='original'] 视频转码
     * @returns {Promise<{code:number,message:string,data:{jobId:string,files:number,rawSize:number,estSize:number,etaSec:number,expireDays:7},traceId:string}>}
     */
    pack: function (body) { return post('/resource/pack', body); },

    /**
     * 打包任务进度与结果
     * @param {string} jobId
     * @returns {Promise<{code:number,message:string,data:{jobId:string,status:'queued'|'packing'|'done'|'expired',progress:number,size:string,url?:string},traceId:string}>}
     */
    packStatus: function (jobId) { return get('/resource/pack/' + jobId); },

    /**
     * 历史打包任务
     * @param {Object} [q] 分页参数
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:number,status:string,date:string,size:string}>,total:number},traceId:string}>}
     */
    packHistory: function (q) { return get('/resource/pack/history', q); },

    /**
     * 创建下载令牌
     * @param {Object} body
     * @param {string} body.name        令牌名称（必填）
     * @param {'3d'|'code'|'all'|'project'} body.scope 授权范围
     * @param {'1h'|'24h'|'7d'|'30d'|'forever'} body.validity 有效期
     * @param {string[]} [body.ipAllowlist] IP 白名单
     * @param {number} [body.maxDownloads] 下载次数上限
     * @returns {Promise<{code:number,message:string,data:{token:string,expireAt:string},traceId:string}>}
     */
    createToken: function (body) { return post('/resource/tokens', body); },

    /**
     * 令牌列表
     * @returns {Promise<{code:number,message:string,data:{list:Array<{zh:string,en:string,used:number,left:string}>},traceId:string}>}
     */
    tokens: function () { return get('/resource/tokens'); },

    /**
     * 吊销令牌
     * @param {string} tokenId
     * @returns {Promise<{code:number,message:string,data:{ok:boolean},traceId:string}>}
     */
    revokeToken: function (tokenId) { return del('/resource/tokens/' + tokenId); },

    /**
     * 提现
     * @param {Object} body
     * @param {number} body.amount    提现金额（分，必填，>=10000）
     * @param {string} body.accountId 到账账户 ID（必填）
     * @param {string} [body.remark]  备注
     * @returns {Promise<{code:number,message:string,data:{withdrawId:string,fee:number,net:number,eta:'T+1'},traceId:string}>}
     */
    withdraw: function (body) { return post('/funds/withdraw', body); },

    /**
     * 到账账户列表
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,zh:string,en:string,sub:string,on:boolean}>},traceId:string}>}
     */
    accounts: function () { return get('/funds/accounts'); },

    /**
     * 支付结果查询
     * @param {string} orderId
     * @returns {Promise<{code:number,message:string,data:{info:Array<{k:string,v:string}>,flow:Array<{t:string,te:string,d:string,on:boolean}>},traceId:string}>}
     */
    payResult: function (orderId) { return get('/funds/pay/' + orderId + '/result'); }
  };

  /* ---------- 评价 --------------------------------------------------------
   * 覆盖页面：product_review_write
   * --------------------------------------------------------------------- */
  var review = {
    /**
     * 可评价订单列表
     * @returns {Promise<{code:number,message:string,data:{list:Array<{productId:string,name:string,brand:string,order:string}>},traceId:string}>}
     */
    targets: function () { return get('/reviews/targets'); },

    /**
     * 提交评价
     * @param {Object} body
     * @param {string} body.productId      产品 ID（必填）
     * @param {number} body.overall        总体评分 1-5（必填）
     * @param {Array<{zh:string,star:number}>} body.items 分项评分
     * @param {string} body.title          评价标题（必填）
     * @param {string} body.content        详细评价（必填）
     * @param {string} body.duration       使用时长
     * @param {string[]} [body.photos]     晒图文件 ID
     * @param {boolean} [body.anonymous]   是否匿名
     * @param {boolean} [body.crossPost]   是否同步论坛
     * @returns {Promise<{code:number,message:string,data:{reviewId:string,editableUntil:string},traceId:string}>}
     */
    create: function (body) { return post('/reviews', body); }
  };


  /* ---------- 设计中心 ----------------------------------------------------
   * 覆盖页面：design_home / design_demand / design_demand_detail /
   *           design_demand_publish / design_task / design_collab /
   *           design_drawing / design_review / design_version / design_bom
   * --------------------------------------------------------------------- */
  var design = {
    /**
     * 设计需求列表
     * @param {Object} [q]
     * @param {string} [q.cat]    分类（整机设计 / 结构设计 / 电控设计 / 嵌入式 / 算法设计 / 工业设计）
     * @param {string} [q.status] 状态（招募中 / 设计中 / 评审中 / 已完成）
     * @param {string} [q.kw]     关键字
     * @param {number} [q.page=1]
     * @param {number} [q.pageSize=20]
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,title:string,titleEn:string,cat:string,budget:string,deadline:string,bids:number,status:string,img:string}>,total:number,page:number,pageSize:number,hasMore:boolean},traceId:string}>}
     */
    demands: function (q) { return get('/design/demands', q); },

    /**
     * 设计需求详情
     * @param {string} id
     * @returns {Promise<{code:number,message:string,data:{id:string,title:string,cat:string,budget:string,deadline:string,status:string,desc:string,deliverables:Array,bidders:Array},traceId:string}>}
     */
    demandDetail: function (id) { return get('/design/demands/' + id); },

    /**
     * 发布设计需求
     * @param {Object} body
     * @param {string} body.title       需求标题（必填）
     * @param {string} body.cat         设计分类（必填）
     * @param {number} body.budget      预算（分，必填）
     * @param {string} body.deadline    期望完成日期（必填）
     * @param {string} body.description 需求描述（必填）
     * @param {boolean} [body.needPrototype] 是否需要打样
     * @param {string[]} [body.deliverables] 交付物清单
     * @returns {Promise<{code:number,message:string,data:{id:string,status:'open'},traceId:string}>}
     */
    publishDemand: function (body) { return post('/design/demands', body); },

    /**
     * 应征设计需求
     * @param {Object} body
     * @param {string} body.demandId  需求 ID（必填）
     * @param {string} body.plan      设计方案（必填）
     * @param {number} body.quote     报价（分，必填）
     * @param {number} body.leadDays  周期天数（必填）
     * @returns {Promise<{code:number,message:string,data:{bidId:string},traceId:string}>}
     */
    bidDemand: function (body) { return post('/design/demands/' + body.demandId + '/bids', body); },

    /**
     * 设计任务列表（在研）
     * @param {Object} [q] 分页参数
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,name:string,progress:number,status:string,due:string,img:string}>,total:number},traceId:string}>}
     */
    tasks: function (q) { return get('/design/tasks', q); },

    /**
     * 图纸库列表
     * @param {Object} [q]
     * @param {string} [q.format] STEP / DWG / PDF / Gerber
     * @param {string} [q.kw]     关键字
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,name:string,format:string,version:string,size:string,img:string}>,total:number},traceId:string}>}
     */
    drawings: function (q) { return get('/design/drawings', q); },

    /**
     * 图纸版本历史
     * @param {string} drawingId
     * @returns {Promise<{code:number,message:string,data:{list:Array<{v:string,note:string,author:string,date:string}>},traceId:string}>}
     */
    versions: function (drawingId) { return get('/design/drawings/' + drawingId + '/versions'); },

    /**
     * 设计评审列表
     * @param {Object} [q] 分页参数
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,title:string,result:string,reviewers:number,date:string,opinions:Array}>,total:number},traceId:string}>}
     */
    reviews: function (q) { return get('/design/reviews', q); },

    /**
     * 发起设计评审
     * @param {Object} body
     * @param {string} body.target    评审对象（图纸或任务 ID，必填）
     * @param {'concept'|'detailed'|'drawing'|'prototype'} body.type 评审类型
     * @param {string[]} body.experts 评审专家 ID
     * @param {string} [body.due]     评审截止
     * @returns {Promise<{code:number,message:string,data:{reviewId:string},traceId:string}>}
     */
    startReview: function (body) { return post('/design/reviews', body); },

    /**
     * 提交评审判定
     * @param {string} reviewId
     * @param {Object} body
     * @param {'pass'|'revise'|'reject'} body.verdict 判定结果
     * @param {string} [body.comments] 评审意见
     * @returns {Promise<{code:number,message:string,data:{ok:boolean,frozenVersion?:string},traceId:string}>}
     */
    reviewVerdict: function (reviewId, body) { return post('/design/reviews/' + reviewId + '/verdict', body); },

    /**
     * 设计 BOM 列表
     * @param {Object} [q] 分页参数
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,name:string,total:number,ready:number,missing:number,risk:string,items:Array}>,total:number},traceId:string}>}
     */
    boms: function (q) { return get('/design/boms', q); },

    /**
     * 协作成员列表
     * @param {string} demandId
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,name:string,avatar:string,role:string,status:string}>},traceId:string}>}
     */
    members: function (demandId) { return get('/design/demands/' + demandId + '/members'); },

    /**
     * 设计阶段与指标（首页用）
     * @returns {Promise<{code:number,message:string,data:{stages:Array,metrics:Array,cats:Array},traceId:string}>}
     */
    overview: function () { return get('/design/overview'); }
  };

  /* ---------- 流水线生产 --------------------------------------------------
   * 覆盖页面：production_home / line_list / line_detail / capacity / booking /
   *           schedule / gantt / order_* / progress / bom* / procurement /
   *           supplier* / smt / assembly / burnin / qc* / yield / process /
   *           tooling / cost / warehouse / logistics / delivery /
   *           equipment / worker / cert / case
   * --------------------------------------------------------------------- */
  var production = {
    /**
     * 产线列表
     * @param {Object} [q]
     * @param {string} [q.type]   组装线 / SMT 线 / 测试线 / 包装线 / 机加线 / 注塑线
     * @param {string} [q.region] 地区
     * @param {string} [q.kw]     关键字
     * @param {number} [q.page=1]
     * @param {number} [q.pageSize=20]
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,name:string,type:string,vendor:string,city:string,monthCapacity:number,utilization:number,moq:number,leadDays:number,status:string,img:string}>,total:number,page:number,pageSize:number,hasMore:boolean},traceId:string}>}
     */
    lines: function (q) { return get('/production/lines', q); },

    /**
     * 产线详情
     * @param {string} id
     * @returns {Promise<{code:number,message:string,data:{id:string,name:string,type:string,vendor:string,city:string,dailyCapacity:number,monthCapacity:number,utilization:number,automation:number,workers:number,moq:number,leadDays:number,certs:string[],rating:number},traceId:string}>}
     */
    lineDetail: function (id) { return get('/production/lines/' + id); },

    /**
     * 产能查询（按月）
     * @param {Object} q
     * @param {string} [q.month] 月份 YYYY-MM
     * @param {string} [q.lineId]
     * @returns {Promise<{code:number,message:string,data:{list:Array<{line:string,month:string,total:number,booked:number,free:number,rate:number}>,total:number},traceId:string}>}
     */
    capacity: function (q) { return get('/production/capacity', q); },

    /**
     * 预约产能
     * @param {Object} body
     * @param {string} body.lineId    产线 ID（必填）
     * @param {number} body.quantity  需求数量（必填）
     * @param {string} [body.startDate] 期望开工
     * @param {string} [body.dueDate]   期望完工
     * @param {string} [body.productId] 关联产品
     * @returns {Promise<{code:number,message:string,data:{bookingId:string,slot:string,freeCancelUntil:string},traceId:string}>}
     */
    bookCapacity: function (body) { return post('/production/capacity/book', body); },

    /**
     * 生产工单列表
     * @param {Object} [q]
     * @param {string} [q.status] 待排产 / 备料中 / 生产中 / 质检中 / 已完工 / 已发货
     * @param {string} [q.lineId]
     * @param {number} [q.page=1]
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,title:string,line:string,qty:number,done:number,progress:number,startDate:string,dueDate:string,status:string}>,total:number},traceId:string}>}
     */
    orders: function (q) { return get('/production/orders', q); },

    /**
     * 生产工单详情（含节点）
     * @param {string} id
     * @returns {Promise<{code:number,message:string,data:{id:string,title:string,line:string,qty:number,done:number,progress:number,budget:string,status:string,nodes:Array<{name:string,status:string,date:string}>},traceId:string}>}
     */
    orderDetail: function (id) { return get('/production/orders/' + id); },

    /**
     * 发布量产需求
     * @param {Object} body
     * @param {string} body.product   产品名称（必填）
     * @param {number} body.quantity  数量（必填）
     * @param {string} body.dueDate   期望交期（必填）
     * @param {number} [body.targetPrice] 目标单价（分）
     * @param {string} [body.process]     工艺要求
     * @param {boolean} [body.needPilot]  是否需要试产
     * @param {string[]} [body.fileIds]   图纸 / BOM / 验收标准
     * @returns {Promise<{code:number,message:string,data:{orderId:string,matchedLines:number},traceId:string}>}
     */
    publishOrder: function (body) { return post('/production/orders', body); },

    /**
     * 上报生产日报
     * @param {string} orderId
     * @param {Object} body
     * @param {string} body.date    日期（必填）
     * @param {number} body.output  当日产量（必填）
     * @param {number} body.good    良品数（必填）
     * @param {string} [body.issues] 异常说明
     * @returns {Promise<{code:number,message:string,data:{ok:boolean,yield:number},traceId:string}>}
     */
    dailyReport: function (orderId, body) { return post('/production/orders/' + orderId + '/daily', body); },

    /**
     * 排产计划
     * @param {Object} [q]
     * @param {string} [q.lineId]
     * @param {string} [q.month]
     * @returns {Promise<{code:number,message:string,data:{list:Array<{orderId:string,line:string,start:string,end:string,status:string}>,total:number},traceId:string}>}
     */
    schedule: function (q) { return get('/production/schedule', q); },

    /**
     * BOM 齐套状态
     * @param {string} [orderId]
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,name:string,total:number,ready:number,missing:number,risk:string,items:Array<{k:string,qty:string,stock:string,lead:string,status:string}>}>,total:number},traceId:string}>}
     */
    boms: function (orderId) { return get('/production/boms', { orderId: orderId }); },

    /**
     * 齐套检查
     * @param {string} bomId
     * @returns {Promise<{code:number,message:string,data:{ready:number,total:number,missing:number,items:Array,alternatives:Array},traceId:string}>}
     */
    bomCheck: function (bomId) { return get('/production/boms/' + bomId + '/check'); },

    /**
     * 发起物料采购
     * @param {Object} body
     * @param {string} body.item        物料名称（必填）
     * @param {number} body.quantity    数量（必填）
     * @param {number} [body.targetPrice] 目标单价（分）
     * @param {string} [body.needBy]    期望到料
     * @param {boolean} [body.allowAlt] 是否接受替代料
     * @returns {Promise<{code:number,message:string,data:{requestId:string,quotes:number},traceId:string}>}
     */
    procurement: function (body) { return post('/production/procurement', body); },

    /**
     * 供应商列表
     * @param {Object} [q]
     * @param {string} [q.tag]   代工厂 / 模具厂 / PCBA / 钣金 / 注塑 / 电机
     * @param {string} [q.region]
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,name:string,tag:string,city:string,rating:number,orders:number,onTime:number,moq:number,leadDays:number,certs:string[]}>,total:number},traceId:string}>}
     */
    suppliers: function (q) { return get('/production/suppliers', q); },

    /**
     * 供应商详情
     * @param {string} id
     * @returns {Promise<{code:number,message:string,data:{id:string,name:string,tag:string,city:string,rating:number,certs:string[],cases:Array,reviews:Array},traceId:string}>}
     */
    supplierDetail: function (id) { return get('/production/suppliers/' + id); },

    /**
     * 工艺清单
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,name:string,stdHours:number,yield:number,equip:string}>,total:number},traceId:string}>}
     */
    processes: function () { return get('/production/processes'); },

    /**
     * 质检批次列表
     * @param {Object} [q] 分页参数
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,order:string,sampled:number,passed:number,failed:number,yield:number,result:string,date:string}>,total:number},traceId:string}>}
     */
    qc: function (q) { return get('/production/qc', q); },

    /**
     * 质检报告详情
     * @param {string} id
     * @returns {Promise<{code:number,message:string,data:{id:string,order:string,sampled:number,passed:number,yield:number,result:string,items:Array<{k:string,v:string,ok:boolean}>,defects:Array},traceId:string}>}
     */
    qcReport: function (id) { return get('/production/qc/' + id); },

    /**
     * 申请批次质检
     * @param {Object} body
     * @param {string} body.orderId  工单 ID（必填）
     * @param {string} [body.batch]  批次
     * @param {number} [body.sampleSize] 抽检数量
     * @param {string} [body.standard]   检验标准
     * @returns {Promise<{code:number,message:string,data:{qcId:string},traceId:string}>}
     */
    requestQc: function (body) { return post('/production/qc', body); },

    /**
     * 良率分析
     * @param {Object} [q]
     * @param {string} [q.lineId]
     * @param {string} [q.month]
     * @returns {Promise<{code:number,message:string,data:{overall:number,trend:number[],defects:Array<{name:string,rate:number,stage:string}>,actions:Array},traceId:string}>}
     */
    yield: function (q) { return get('/production/yield', q); },

    /**
     * 模具工装台账
     * @param {Object} [q] 分页参数
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,name:string,life:string,status:string,img:string}>,total:number},traceId:string}>}
     */
    tooling: function (q) { return get('/production/tooling', q); },

    /**
     * 开模询价
     * @param {Object} body
     * @param {string} body.part      零件名称（必填）
     * @param {number} [body.volume]  预计批量
     * @param {string} [body.material] 材质
     * @param {string} [body.tolerance] 精度要求
     * @returns {Promise<{code:number,message:string,data:{quoteId:string},traceId:string}>}
     */
    toolingQuote: function (body) { return post('/production/tooling/quote', body); },

    /**
     * 成本核算
     * @param {string} orderId
     * @returns {Promise<{code:number,message:string,data:{breakdown:Array<{k:string,v:string}>,total:number,perUnit:number,share:Array,suggestions:Array},traceId:string}>}
     */
    cost: function (orderId) { return get('/production/orders/' + orderId + '/cost'); },

    /**
     * 仓储列表
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,name:string,stock:number,used:number}>,total:number},traceId:string}>}
     */
    warehouses: function () { return get('/production/warehouses'); },

    /**
     * 创建发货单
     * @param {Object} body
     * @param {string} body.orderId  工单 ID（必填）
     * @param {number} body.quantity 数量（必填）
     * @param {string} body.address  收货地址（必填）
     * @param {string} [body.carrier] 物流方式
     * @param {boolean} [body.insured] 是否保价
     * @param {string} [body.eta]    期望到达
     * @returns {Promise<{code:number,message:string,data:{shipmentId:string,trackingNo:string},traceId:string}>}
     */
    createShipment: function (body) { return post('/production/logistics', body); },

    /**
     * 物流轨迹
     * @param {string} shipmentId
     * @returns {Promise<{code:number,message:string,data:{list:Array<{time:string,event:string}>,status:string},traceId:string}>}
     */
    tracking: function (shipmentId) { return get('/production/logistics/' + shipmentId + '/tracking'); },

    /**
     * 设备台账
     * @param {Object} [q]
     * @param {string} [q.lineId]
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,name:string,line:string,status:string,utilization:number,nextService:string}>,total:number},traceId:string}>}
     */
    equipment: function (q) { return get('/production/equipment', q); },

    /**
     * 班组列表
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,name:string,count:number,shift:string,output:number,qualified:number,skills:string[]}>,total:number},traceId:string}>}
     */
    workers: function () { return get('/production/workers'); },

    /**
     * 产线与产品资质
     * @returns {Promise<{code:number,message:string,data:{lineCerts:Array,productCerts:Array},traceId:string}>}
     */
    certs: function () { return get('/production/certs'); },

    /**
     * 量产案例
     * @param {Object} [q] 分页参数
     * @returns {Promise<{code:number,message:string,data:{list:Array<{id:string,title:string,qty:number,days:number,yield:number,cost:string,vendor:string,line:string,img:string}>,total:number},traceId:string}>}
     */
    cases: function (q) { return get('/production/cases', q); },

    /**
     * 生产板块总览（首页用）
     * @returns {Promise<{code:number,message:string,data:{metrics:Array,stages:Array,hotLines:Array,runningOrders:Array,cases:Array},traceId:string}>}
     */
    overview: function () { return get('/production/overview'); }
  };

  /* ---------- 全流程 -------------------------------------------------------
   * 覆盖页面：flow_overview / flow_stage / flow_gate / flow_handover /
   *           flow_timeline
   * --------------------------------------------------------------------- */
  var flow = {
    /**
     * 全流程阶段定义
     * @returns {Promise<{code:number,message:string,data:{stages:Array<{key:string,zh:string,en:string,desc:string,href:string,img:string}>},traceId:string}>}
     */
    stages: function () { return get('/flow/stages'); },

    /**
     * 阶段详情
     * @param {string} key demand / design / integration / test / production
     * @returns {Promise<{code:number,message:string,data:{key:string,zh:string,en:string,desc:string,tasks:Array,cycle:string,gate:string,href:string},traceId:string}>}
     */
    stage: function (key) { return get('/flow/stages/' + key); },

    /**
     * 阶段门禁列表
     * @returns {Promise<{code:number,message:string,data:{list:Array<{key:string,zh:string,en:string,items:string[],status:string}>,levels:Array},traceId:string}>}
     */
    gates: function () { return get('/flow/gates'); },

    /**
     * 提交门禁判定
     * @param {string} gateId
     * @param {Object} body
     * @param {'pass'|'revise'|'reject'} body.verdict 判定结果
     * @param {string} [body.comments] 评审意见
     * @returns {Promise<{code:number,message:string,data:{ok:boolean,nextStage?:string},traceId:string}>}
     */
    gateVerdict: function (gateId, body) { return post('/flow/gates/' + gateId + '/verdict', body); },

    /**
     * 阶段交接清单
     * @returns {Promise<{code:number,message:string,data:{list:Array<{from:string,to:string,items:string[],status:string}>,history:Array},traceId:string}>}
     */
    handovers: function () { return get('/flow/handovers'); },

    /**
     * 确认阶段交接
     * @param {Object} body
     * @param {string} body.from     来源阶段（必填）
     * @param {string} body.to       目标阶段（必填）
     * @param {string[]} body.items  交接物清单（必填）
     * @param {string} body.receiver 接收方（必填）
     * @returns {Promise<{code:number,message:string,data:{handoverId:string},traceId:string}>}
     */
    confirmHandover: function (body) { return post('/flow/handovers', body); },

    /**
     * 项目全流程时间线（阶段 + 节点分组 + 里程碑）
     * @param {string} projectId
     * @returns {Promise<{code:number,message:string,data:{timeline:Array<{name:string,status:string,date:string,desc:string}>,groups:Array,milestones:Array},traceId:string}>}
     */
    timeline: function (projectId) { return get('/flow/timeline', { projectId: projectId }); }
  };

  global.REAL_API = {
    BASE: BASE, request: request, setBase: function (b) { BASE = b; },
    auth: auth, news: news, products: products, modules: modules, toys: toys,
    ai: ai, forum: forum, learn: learn, biz: biz, users: users, messages: messages,
    tickets: tickets, funds: funds, files: files, admin: admin,
    publish: publish, apply: apply, enroll: enroll, resource: resource, review: review,
    design: design, production: production, flow: flow
  };
})(window);

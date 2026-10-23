/* ==========================================================================
 * ROBOFORGE 机甲工场 · app.js —— 交互与运行时
 * 依赖：api.mock.js（模拟数据）/ api.real.js（真实接口）/ i18n.js（中英词典）
 * 功能：数据模式切换 · 中英切换 · Tab/翻页 · 筛选搜索 · 收藏点赞 · 加载更多 ·
 *      聊天 · 表单校验 · 折叠 · 弹层 · Toast · 图片兜底
 * ========================================================================== */
(function (w, d) {
  'use strict';
  var RF = w.RF = w.RF || {};

  /* ---------------- 配置 ---------------- */

  /**
   * RF.base —— 站点根相对路径
   * 依据 app.js 自身的引用位置推导：
   *   根目录页面  src="assets/js/app.js"      → base = ''
   *   子目录页面  src="../assets/js/app.js"   → base = '../'
   * 模拟数据中的资源路径统一写成相对站点根的 "assets/..."，
   * 出口时由 deepPrefix() 自动补上 base，保证任意目录层级均不缺图。
   */
  (function () {
    var s = d.currentScript || d.querySelector('script[src$="app.js"]');
    var src = (s && s.getAttribute('src')) || 'assets/js/app.js';
    var m = String(src).match(/^([\s\S]*?)assets\/js\/app\.js/);
    RF.base = m ? m[1] : '';
  })();

  RF.mode = localStorage.getItem('rf_mode') || 'mock';   // 'mock' | 'real'
  RF.lang = localStorage.getItem('rf_lang') || 'zh';     // 'zh' | 'en'
  RF.currentUser = { id: 'U3000', name: '机电老张', nameEn: 'MechZhang', type: '个人开发者',
                     avatar: 'assets/img/gen/avatar/user_01.svg', level: 6, exp: 12800 };
  RF.currentUser.avatar = RF.base + RF.currentUser.avatar;

  /**
   * deepPrefix —— 深度遍历返回数据，为所有 "assets/..." 资源路径补上当前页的根前缀
   * @param {*} o 任意数据（字符串 / 数组 / 对象）
   * @returns {*} 路径已修正的同构数据
   */
  function deepPrefix(o) {
    if (typeof o === 'string') {
      return /^assets\//.test(o) ? RF.base + o : o;
    }
    if (Object.prototype.toString.call(o) === '[object Array]') {
      return o.map(deepPrefix);
    }
    if (o && typeof o === 'object') {
      var r = {};
      for (var k in o) { if (Object.prototype.hasOwnProperty.call(o, k)) r[k] = deepPrefix(o[k]); }
      return r;
    }
    return o;
  }
  RF.asset = function (p) { return p && /^assets\//.test(p) ? RF.base + p : p; };

  /* ---------------- Mock 适配器 ---------------- */
  function delay(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function ok(data) { return { code: 0, message: 'ok', data: deepPrefix(data), traceId: 'mock-' + Date.now() }; }

  /** 通用查询：关键字 / 分类 / 排序 / 分页 */
  function query(list, q) {
    q = q || {};
    var arr = list.slice();
    if (q.cat) arr = arr.filter(function (i) { return i.cat === q.cat || i.catZh === q.cat || i.catEn === q.cat; });
    if (q.type) arr = arr.filter(function (i) { return i.type === q.type || i.typeEn === q.type; });
    if (q.status) arr = arr.filter(function (i) { return i.status === q.status || i.statusEn === q.status; });
    if (q.board) arr = arr.filter(function (i) { return i.board === q.board || i.boardEn === q.board; });
    if (q.keyword) {
      var k = String(q.keyword).toLowerCase();
      arr = arr.filter(function (i) {
        return JSON.stringify([i.name, i.nameEn, i.title, i.titleEn, i.brand, i.brandEn, i.desc, i.author, i.authorEn])
          .toLowerCase().indexOf(k) > -1;
      });
    }
    if (q.sort === 'hot') arr.sort(function (a, b) { return (b.views || 0) - (a.views || 0); });
    if (q.sort === 'price') arr.sort(function (a, b) { return (a.price || 0) - (b.price || 0); });
    if (q.sort === 'sales') arr.sort(function (a, b) { return (b.sales || 0) - (a.sales || 0); });
    var page = q.page || 1, size = q.pageSize || 10;
    var slice = arr.slice((page - 1) * size, page * size);
    return ok({ list: slice, total: arr.length, page: page, pageSize: size, hasMore: page * size < arr.length });
  }
  function byId(list, id) {
    var it = list.filter(function (i) { return String(i.id) === String(id); })[0];
    return ok({ item: it || list[0], list: list.slice(0, 6) });
  }
  function MockAdapter() {
    var M = w.MOCK || {};
    return {
      auth: { login: function () { return delay(300).then(function () { return ok({ token: 'mock', user: RF.currentUser }); }); },
              register: function () { return delay(300).then(function () { return ok({ user: RF.currentUser }); }); },
              me: function () { return delay(100).then(function () { return ok({ user: RF.currentUser }); }); },
              updateProfile: function (b) { return delay(200).then(function () { return ok({ user: Object.assign(RF.currentUser, b) }); }); } },
      news: { list: function (q) { return delay(160).then(function () { return query(M.news, q); }); },
              detail: function (id) { return delay(140).then(function () { return byId(M.news, id); }); },
              categories: function () { return delay(80).then(function () { return ok({ list: M.meta.newsCats }); }); },
              publish: function (b) { return delay(300).then(function () { return ok({ id: 'N2' + Date.now() % 1000 }); }); },
              rank: function (q) { return delay(120).then(function () { return query(M.news, { sort: 'hot', pageSize: q && q.pageSize || 20 }); }); },
              search: function (q) { return delay(160).then(function () { return query(M.news, q); }); },
              like: function () { return delay(120).then(function () { return ok({ liked: true }); }); } },
      products: { list: function (q) { return delay(160).then(function () { return query(M.products, q); }); },
                  detail: function (id) { return delay(140).then(function () { return byId(M.products, id); }); },
                  categories: function () { return delay(80).then(function () { return ok({ list: M.meta.cats }); }); },
                  search: function (q) { return delay(160).then(function () { return query(M.products, q); }); },
                  compare: function () { return delay(120).then(function () { return ok({ list: M.products.slice(0, 3) }); }); },
                  reviews: function () { return delay(120).then(function () { return ok({ list: M.posts.slice(0, 5) }); }); } },
      modules: { list: function (q) { return delay(160).then(function () { return query(M.products.filter(function (p) { return p.cat === 'module'; }), q); }); },
                 components: function (q) { return delay(160).then(function () { return query(M.products.filter(function (p) { return p.cat === 'component'; }), q); }); },
                 accessories: function (q) { return delay(160).then(function () { return query(M.products.filter(function (p) { return p.cat === 'accessory'; }), q); }); },
                 hardwares: function (q) { return delay(160).then(function () { return query(M.products.filter(function (p) { return p.cat === 'hardware'; }), q); }); },
                 prints: function (q) { return delay(160).then(function () { return query(M.products.filter(function (p) { return p.cat === 'print3d'; }), q); }); },
                 shells: function (q) { return delay(160).then(function () { return query(M.products.filter(function (p) { return p.cat === 'shell'; }), q); }); },
                 schemes: function () { return delay(120).then(function () { return ok({ list: M.projects.slice(0, 6) }); }); },
                 plays: function (q) { return delay(120).then(function () { return query(M.learns, q); }); },
                 resources: function (q) { return delay(120).then(function () { return ok({ list: M.products.slice(0, 8).map(function (p) { return p.docs; }).flat() }); }); } },
      toys: { list: function (q) { return delay(160).then(function () { return query(M.products.filter(function (p) { return p.cat === 'toy'; }), q); }); },
              rank: function (q) { return delay(120).then(function () { return query(M.products.filter(function (p) { return p.cat === 'toy'; }), { sort: 'hot', pageSize: 20 }); }); },
              shows: function (q) { return delay(120).then(function () { return query(M.posts, q); }); },
              contests: function () { return delay(120).then(function () { return ok({ list: M.projects.slice(0, 5) }); }); } },
      ai: { sessions: function () { return delay(120).then(function () { return ok({ list: M.chats }); }); },
            messages: function () { return delay(120).then(function () { return ok({ list: M.aiChat }); }); },
            chat: function (b) { return delay(600).then(function () { return ok({ reply: '已收到：' + (b && b.content || ''), split: (M.aiChat[2] || {}).card }); }); },
            llms: function () { return delay(100).then(function () { return ok({ list: M.llms }); }); },
            split: function () { return delay(400).then(function () { return ok({ items: M.aiChat[2].card.items }); }); },
            match: function () { return delay(400).then(function () { return ok({ matched: M.products.slice(0, 6), custom: M.products.slice(6, 9), missing: M.products.slice(9, 11) }); }); },
            requirement: function (b) { return delay(400).then(function () { return ok({ requirementId: 'R' + Date.now() % 10000 }); }); },
            genProject: function () { return delay(500).then(function () { return ok({ projectId: 'PR4001', nodes: M.projects[0].nodes }); }); },
            integration: function () { return delay(300).then(function () { return ok({ bom: M.products.slice(0, 5) }); }); },
            usage: function () { return delay(150).then(function () { return ok({ total: 128600, cost: '¥1,543.20', trend: [12, 30, 22, 45, 38, 60, 52] }); }); } },
      forum: { boards: function () { return delay(80).then(function () { return ok({ list: M.meta.boards }); }); },
               list: function (q) { return delay(160).then(function () { return query(M.posts, q); }); },
               detail: function (id) { return delay(140).then(function () { return byId(M.posts, id); }); },
               publish: function () { return delay(300).then(function () { return ok({ id: 'F8' + Date.now() % 1000 }); }); },
               search: function (q) { return delay(160).then(function () { return query(M.posts, q); }); } },
      learn: { list: function (q) { return delay(160).then(function () { return query(M.learns, q); }); },
               detail: function (id) { return delay(140).then(function () { return byId(M.learns, id); }); },
               courses: function (q) { return delay(140).then(function () { return query(M.learns, q); }); },
               paths: function () { return delay(120).then(function () { return ok({ list: M.meta.learnCats }); }); },
               qa: function (q) { return delay(120).then(function () { return query(M.posts, q); }); } },
      biz: { demands: function (q) { return delay(160).then(function () { return query(M.demands, q); }); },
             demandDetail: function (id) { return delay(140).then(function () { return byId(M.demands, id); }); },
             publishDemand: function () { return delay(300).then(function () { return ok({ id: 'D5' + Date.now() % 1000 }); }); },
             projects: function (q) { return delay(160).then(function () { return query(M.projects, q); }); },
             projectDetail: function (id) { return delay(140).then(function () { return byId(M.projects, id); }); },
             progress: function (id) { return delay(140).then(function () { return ok({ nodes: (M.projects[0]).nodes }); }); },
             nodes: function () { return delay(140).then(function () { return ok({ nodes: M.projects[0].nodes }); }); },
             members: function () { return delay(140).then(function () { return ok({ list: M.projects[0].members }); }); },
             integrations: function (q) { return delay(160).then(function () { return query(M.integrations, q); }); },
             integrationDetail: function (id) { return delay(140).then(function () { return byId(M.integrations, id); }); },
             tests: function (q) { return delay(160).then(function () { return query(M.tests, q); }); },
             testDetail: function (id) { return delay(140).then(function () { return byId(M.tests, id); }); },
             myProjects: function (q) { return delay(140).then(function () { return query(M.projects, q); }); },
             myDemands: function (q) { return delay(140).then(function () { return query(M.demands, q); }); } },
      users: { list: function (q) { return delay(160).then(function () { return query(M.users, q); }); },
               detail: function (id) { return delay(140).then(function () { return byId(M.users, id); }); },
               rank: function (q) { return delay(140).then(function () { return query(M.users, { sort: 'hot', pageSize: q && q.pageSize || 30 }); }); },
               follow: function () { return delay(150).then(function () { return ok({ followed: true }); }); },
               collections: function (q) { return delay(140).then(function () { return query(M.products, q); }); } },
      messages: { conversations: function () { return delay(120).then(function () { return ok({ list: M.chats, unread: 5 }); }); },
                  history: function () { return delay(140).then(function () { return ok({ list: M.messages }); }); },
                  send: function (b) { return delay(200).then(function () { return ok({ message: b }); }); },
                  groups: function () { return delay(120).then(function () { return ok({ list: M.chats.slice(0, 6) }); }); },
                  groupMessages: function () { return delay(120).then(function () { return ok({ list: M.messages }); }); },
                  projectRoom: function () { return delay(120).then(function () { return ok({ list: M.messages.slice(0, 8) }); }); },
                  fundRoom: function () { return delay(120).then(function () { return ok({ list: M.messages.slice(0, 6) }); }); },
                  notifications: function () { return delay(120).then(function () { return ok({ list: M.notices }); }); } },
      tickets: { submit: function () { return delay(300).then(function () { return ok({ ticketId: 'TK' + Date.now() % 1000 }); }); },
                 mine: function (q) { return delay(140).then(function () { return query(M.tickets, q); }); },
                 detail: function (id) { return delay(140).then(function () { return byId(M.tickets, id); }); },
                 reply: function (b) { return delay(200).then(function () { return ok({ reply: b }); }); } },
      funds: { overview: function () { return delay(140).then(function () { return ok({ balance: '¥286,400.00', escrow: '¥92,000.00', income: '¥512,300.00', expense: '¥225,900.00' }); }); },
               records: function (q) { return delay(140).then(function () { return query(M.funds, q); }); },
               pay: function () { return delay(300).then(function () { return ok({ paid: true }); }); },
               invoices: function (q) { return delay(140).then(function () { return query(M.funds, q); }); } },
      files: { upload: function () { return delay(500).then(function () { return ok({ url: 'assets/img/gen/product/module_01.svg' }); }); },
               token: function () { return delay(120).then(function () { return ok({ url: '#', expireAt: '600s' }); }); } },
      admin: { dashboard: function () { return delay(160).then(function () { return ok({ kpis: [], pending: { review: 18, ticket: 7, content: 32 } }); }); },
               users: function (q) { return delay(160).then(function () { return query(M.users, q); }); },
               reviews: function (q) { return delay(160).then(function () { return query(M.news, q); }); },
               tickets: function (q) { return delay(160).then(function () { return query(M.tickets, q); }); },
               contents: function (q) { return delay(160).then(function () { return query(M.products, q); }); },
               comments: function (q) { return delay(160).then(function () { return query(M.posts, q); }); },
               projects: function (q) { return delay(160).then(function () { return query(M.projects, q); }); },
               funds: function (q) { return delay(160).then(function () { return query(M.funds, q); }); },
               logs: function (q) { return delay(160).then(function () { return query(M.funds, q); }); },
               statistics: function () { return delay(160).then(function () { return ok({ trend: [30, 44, 38, 62, 55, 78, 66] }); }); } },

      /* -------- 新增：发布中心 / 申请承接 / 报名 / 资源 / 评价（对应 api.real.js 同名分组） -------- */
      publish: {
        options: function () { return delay(80).then(function () { return ok(M.publishOptions || (M.publishOptions = {
          cats: (M.publishes && M.publishes.cats) || [],
          licenses: (M.publishes && M.publishes.licenses) || [],
          applications: (M.publishes && M.publishes.applications) || [],
          difficulties: (M.publishes && M.publishes.difficulties) || [],
          shares: (M.publishes && M.publishes.shares) || [] })); }); },
        module: function (b) { return delay(300).then(function () { return ok({ id: 'PM' + Date.now() % 10000, status: 'reviewing', reviewEta: '1 个工作日' }); }); },
        product: function (b) { return delay(300).then(function () { return ok({ id: 'PP' + Date.now() % 10000, status: 'reviewing' }); }); },
        toy: function (b) { return delay(300).then(function () { return ok({ id: 'PT' + Date.now() % 10000, showcaseRank: Math.floor(Math.random() * 50) + 1 }); }); },
        edit: function (id, b) { return delay(300).then(function () { return ok({ id: id, version: 'v' + (Math.floor(Math.random() * 5) + 2), status: 'reviewing' }); }); },
        revisions: function (id) { return delay(120).then(function () { return ok({ list: (M.newsEdit && M.newsEdit.revisions) || [] }); }); }
      },
      apply: {
        project: function (b) { return delay(300).then(function () { return ok({ applyId: 'AP' + Date.now() % 10000, status: 'pending', etaHours: 48 }); }); },
        invite: function (b) { return delay(300).then(function () { return ok({ sent: (b && b.invitees && b.invitees.length) || 1, failed: [] }); }); },
        invites: function () { return delay(120).then(function () { return ok({ list: (M.applies && M.applies.inviteStates) || [] }); }); },
        inviteAction: function () { return delay(150).then(function () { return ok({ ok: true }); }); },
        demand: function (b) { return delay(300).then(function () { return ok({ bidId: 'BD' + Date.now() % 10000, rank: Math.floor(Math.random() * 5) + 1 }); }); },
        integration: function (b) { return delay(300).then(function () { return ok({ applyId: 'AI' + Date.now() % 10000, matched: 2, missing: 2 }); }); },
        test: function (b) { return delay(300).then(function () { return ok({ applyId: 'AT' + Date.now() % 10000 }); }); },
        matching: function () { return delay(120).then(function () { return ok({ list: (M.applies && M.applies.capMatch) || [] }); }); },
        bidRefs: function () { return delay(120).then(function () { return ok({ list: (M.applies && M.applies.quoteRefs) || [] }); }); }
      },
      enroll: {
        course: function (b) { return delay(300).then(function () { return ok({ orderId: 'EC' + Date.now() % 10000, payable: 22900, expireAt: '30 分钟后' }); }); },
        contest: function (b) { return delay(300).then(function () { return ok({ signupId: 'ES' + Date.now() % 10000, workNo: 'W' + (Math.floor(Math.random() * 900) + 100) }); }); },
        contestInfo: function (id) { return delay(120).then(function () { return ok({ info: (M.enrolls && M.enrolls.contestInfo) || [], tracks: (M.enrolls && M.enrolls.tracks) || [], rules: (M.enrolls && M.enrolls.contestRules) || [] }); }); }
      },
      resource: {
        pack: function (b) { return delay(400).then(function () { return ok({ jobId: 'PK' + Date.now() % 10000, files: 26, rawSize: 260, estSize: 178, etaSec: 40, expireDays: 7 }); }); },
        packStatus: function (id) { return delay(150).then(function () { return ok({ jobId: id, status: 'done', progress: 100, size: '178 MB', url: '#' }); }); },
        packHistory: function () { return delay(120).then(function () { return ok({ list: (M.bulkFiles && M.bulkFiles.history) || [], total: 4 }); }); },
        createToken: function (b) { return delay(250).then(function () { return ok({ token: 'rft_' + Math.random().toString(36).slice(2, 12), expireAt: '7 天后' }); }); },
        tokens: function () { return delay(120).then(function () { return ok({ list: (M.tokens && M.tokens.list) || [] }); }); },
        revokeToken: function () { return delay(150).then(function () { return ok({ ok: true }); }); },
        withdraw: function (b) { return delay(300).then(function () { return ok({ withdrawId: 'WD' + Date.now() % 10000, fee: 30000, net: 4970000, eta: 'T+1' }); }); },
        accounts: function () { return delay(120).then(function () { return ok({ list: (M.withdraws && M.withdraws.accounts) || [] }); }); },
        payResult: function () { return delay(150).then(function () { return ok({ info: (M.payResults && M.payResults.info) || [], flow: (M.payResults && M.payResults.flow) || [] }); }); }
      },
      /* -------- 新增：设计中心 / 流水线生产 / 全流程（对应 api.real.js 同名分组） -------- */
      design: {
        overview: function () { return delay(120).then(function () { return ok({
          stages: (M.design && M.design.stages) || [], metrics: (M.design && M.design.metrics) || [],
          cats: (M.design && M.design.cats) || [] }); }); },
        demands: function (q) { return delay(160).then(function () { return query(M.design.demands, q); }); },
        demandDetail: function (id) { return delay(140).then(function () { return byId(M.design.demands, id); }); },
        publishDemand: function () { return delay(300).then(function () { return ok({ id: 'DD' + Date.now() % 10000, status: 'open' }); }); },
        bidDemand: function () { return delay(300).then(function () { return ok({ bidId: 'BD' + Date.now() % 10000 }); }); },
        tasks: function (q) { return delay(160).then(function () { return query(M.design.tasks, q); }); },
        drawings: function (q) { return delay(160).then(function () { return query(M.design.drawings, q); }); },
        versions: function () { return delay(120).then(function () { return ok({ list: M.design.versions || [] }); }); },
        reviews: function (q) { return delay(160).then(function () { return query(M.design.reviews, q); }); },
        startReview: function () { return delay(300).then(function () { return ok({ reviewId: 'RV' + Date.now() % 10000 }); }); },
        reviewVerdict: function (id, b) { return delay(300).then(function () { return ok({ ok: true, frozenVersion: 'v3.2' }); }); },
        boms: function () { return delay(160).then(function () { return ok({ list: M.design.boms || [], total: (M.design.boms || []).length }); }); },
        members: function () { return delay(120).then(function () { return ok({ list: [] }); }); }
      },
      production: {
        overview: function () { return delay(140).then(function () { return ok({
          metrics: M.production.metrics || [], stages: M.production.stages || [],
          hotLines: (M.production.lines || []).slice(0, 6),
          runningOrders: (M.production.orders || []).slice(0, 5),
          cases: (M.production.cases || []).slice(0, 4) }); }); },
        lines: function (q) { return delay(160).then(function () { return query(M.production.lines, q); }); },
        lineDetail: function (id) { return delay(140).then(function () { return byId(M.production.lines, id); }); },
        capacity: function () { return delay(140).then(function () { return ok({ list: M.production.capacities || [], total: (M.production.capacities || []).length }); }); },
        bookCapacity: function () { return delay(300).then(function () { return ok({ bookingId: 'BK' + Date.now() % 10000, slot: '2026-02 上旬', freeCancelUntil: '开工前 7 天' }); }); },
        orders: function (q) { return delay(160).then(function () { return query(M.production.orders, q); }); },
        orderDetail: function (id) { return delay(140).then(function () { return byId(M.production.orders, id); }); },
        publishOrder: function () { return delay(300).then(function () { return ok({ orderId: 'MO' + Date.now() % 10000, matchedLines: 5 }); }); },
        dailyReport: function () { return delay(250).then(function () { return ok({ ok: true, yield: 96.8 }); }); },
        schedule: function () { return delay(140).then(function () { return ok({ list: M.production.orders || [], total: (M.production.orders || []).length }); }); },
        boms: function () { return delay(140).then(function () { return ok({ list: M.production.boms || [], total: (M.production.boms || []).length }); }); },
        bomCheck: function () { return delay(140).then(function () { return ok({ ready: 36, total: 42, missing: 4, items: (M.production.boms[0] || {}).items || [], alternatives: [] }); }); },
        procurement: function () { return delay(300).then(function () { return ok({ requestId: 'PR' + Date.now() % 10000, quotes: 3 }); }); },
        suppliers: function (q) { return delay(160).then(function () { return query(M.production.suppliers, q); }); },
        supplierDetail: function (id) { return delay(140).then(function () { return byId(M.production.suppliers, id); }); },
        processes: function () { return delay(120).then(function () { return ok({ list: M.production.processes || [], total: (M.production.processes || []).length }); }); },
        qc: function (q) { return delay(160).then(function () { return query(M.production.qc, q); }); },
        qcReport: function (id) { return delay(140).then(function () { return byId(M.production.qc, id); }); },
        requestQc: function () { return delay(300).then(function () { return ok({ qcId: 'QC' + Date.now() % 10000 }); }); },
        yield: function () { return delay(140).then(function () { return ok({ overall: 96.8, trend: [92, 94, 93, 95, 96, 97, 96], defects: [], actions: [] }); }); },
        tooling: function () { return delay(140).then(function () { return ok({ list: [], total: 6 }); }); },
        toolingQuote: function () { return delay(300).then(function () { return ok({ quoteId: 'TQ' + Date.now() % 10000 }); }); },
        cost: function () { return delay(140).then(function () { return ok({ breakdown: [], total: 613474, perUnit: 1227, share: [], suggestions: [] }); }); },
        warehouses: function () { return delay(120).then(function () { return ok({ list: [], total: 4 }); }); },
        createShipment: function () { return delay(300).then(function () { return ok({ shipmentId: 'SH' + Date.now() % 10000, trackingNo: 'SF20260118001' }); }); },
        tracking: function () { return delay(120).then(function () { return ok({ list: [], status: 'transit' }); }); },
        equipment: function (q) { return delay(160).then(function () { return query(M.production.equipments, q); }); },
        workers: function () { return delay(140).then(function () { return ok({ list: M.production.workers || [], total: (M.production.workers || []).length }); }); },
        certs: function () { return delay(120).then(function () { return ok({ lineCerts: [], productCerts: [] }); }); },
        cases: function (q) { return delay(160).then(function () { return query(M.production.cases, q); }); }
      },
      flow: {
        stages: function () { return delay(120).then(function () { return ok({ stages: M.flow.stages || [] }); }); },
        stage: function (key) { return delay(120).then(function () {
          var list = M.flow.stages || [];
          var hit = null;
          for (var i = 0; i < list.length; i++) { if (list[i].key === key) { hit = list[i]; break; } }
          return ok(hit || list[0] || {}); }); },
        gates: function () { return delay(120).then(function () { return ok({ list: M.flow.gates || [], levels: [] }); }); },
        gateVerdict: function () { return delay(300).then(function () { return ok({ ok: true, nextStage: 'integration' }); }); },
        handovers: function () { return delay(120).then(function () { return ok({ list: M.flow.handovers || [], history: M.flow.handovers || [] }); }); },
        confirmHandover: function () { return delay(300).then(function () { return ok({ handoverId: 'HO' + Date.now() % 10000 }); }); },
        timeline: function () { return delay(140).then(function () {
          var p = M.projects[0] || {};
          return ok({ timeline: [], groups: p.nodes ? [] : [], milestones: [] }); }); }
      },
      review: {
        targets: function () {
          return delay(120).then(function () {
            var src = (M.reviews && M.reviews.targets) || [];
            var list = src.map(function (t) {
              var p = M.products[t.idx] || M.products[0];
              return { productId: p.id, name: p.name, nameEn: p.nameEn, brand: p.brand,
                       brandEn: p.brandEn, order: t.order, img: p.img };
            });
            return ok({ list: list });
          });
        },
        create: function (b) { return delay(300).then(function () { return ok({ reviewId: 'RV' + Date.now() % 10000, editableUntil: '7 天后' }); }); }
      }
    };
  }

  /* ---------------- API 门面 ---------------- */
  RF.setMode = function (m) { RF.mode = m; localStorage.setItem('rf_mode', m); RF.api = (m === 'real' && w.REAL_API) ? w.REAL_API : MockAdapter(); return RF.api; };
  RF.api = (RF.mode === 'real' && w.REAL_API) ? w.REAL_API : MockAdapter();

  /* ---------------- 中英切换 ---------------- */
  RF.setLang = function (lang) {
    RF.lang = lang; localStorage.setItem('rf_lang', lang);
    d.documentElement.lang = (lang === 'en' ? 'en' : 'zh-CN');
    // 静态 UI 文本：data-i18n="中文" → 查词典
    d.querySelectorAll('[data-i18n]').forEach(function (el) {
      var zh = el.getAttribute('data-i18n');
      if (!el.getAttribute('data-zh')) el.setAttribute('data-zh', el.textContent.trim());
      el.textContent = (lang === 'en' && w.I18N && w.I18N[zh]) ? w.I18N[zh] : el.getAttribute('data-zh');
    });
    // 数据文本：data-zh / data-en
    d.querySelectorAll('[data-en]').forEach(function (el) {
      el.textContent = (lang === 'en' && el.getAttribute('data-en')) ? el.getAttribute('data-en') : (el.getAttribute('data-zh') || el.textContent);
    });
    // 输入框占位符
    d.querySelectorAll('[data-ph-en]').forEach(function (el) {
      el.placeholder = (lang === 'en' && el.getAttribute('data-ph-en')) ? el.getAttribute('data-ph-en') : (el.getAttribute('data-ph-zh') || '');
    });
    d.dispatchEvent(new CustomEvent('rf:lang', { detail: { lang: lang } }));
  };

  /* ---------------- 通用 UI ---------------- */
  RF.toast = function (msg, ms) {
    var t = d.getElementById('rf-toast');
    if (!t) { t = d.createElement('div'); t.id = 'rf-toast'; t.className = 'toast'; d.body.appendChild(t); }
    t.textContent = msg; t.classList.add('on');
    clearTimeout(t._tm); t._tm = setTimeout(function () { t.classList.remove('on'); }, ms || 1800);
  };
  RF.sheet = function (html) {
    var m = d.getElementById('rf-sheet');
    if (!m) {
      m = d.createElement('div'); m.id = 'rf-sheet'; m.className = 'modal-mask';
      m.innerHTML = '<div class="sheet"><span class="close" style="position:absolute;right:14px;top:12px;color:#8896A8;cursor:pointer">✕</span><div class="bd"></div></div>';
      d.body.appendChild(m);
      m.addEventListener('click', function (e) { if (e.target === m || e.target.classList.contains('close')) m.classList.remove('on'); });
    }
    m.querySelector('.bd').innerHTML = html; m.classList.add('on');
  };

  /* ---------------- Tab / Chip 切换 ---------------- */
  function bindTabs() {
    d.querySelectorAll('[data-tabs]').forEach(function (box) {
      var chips = box.querySelectorAll('.chip');
      var panels = d.querySelectorAll('[data-panel-group="' + box.getAttribute('data-tabs') + '"] [data-panel]');
      chips.forEach(function (c) {
        c.addEventListener('click', function () {
          chips.forEach(function (x) { x.classList.remove('on'); });
          c.classList.add('on');
          var key = c.getAttribute('data-key');
          panels.forEach(function (p) { p.style.display = (p.getAttribute('data-panel') === key) ? '' : 'none'; });
          var sw = d.querySelector('[data-panel-group="' + box.getAttribute('data-tabs') + '"] .swiper');
          if (sw) sw.scrollLeft = 0;
        });
      });
    });
  }

  /* ---------------- 横向 Swiper 翻页（单页超 3 屏时） ---------------- */
  function bindSwiper() {
    d.querySelectorAll('[data-swiper]').forEach(function (sw) {
      var hint = sw.parentNode.querySelector('.swiper-hint');
      var dots = hint ? hint.querySelectorAll('i') : [];
      function cur() { return Math.round(sw.scrollLeft / sw.clientWidth); }
      function sync() { var i = cur(); dots.forEach(function (x, k) { x.classList.toggle('on', k === i); }); }
      sw.addEventListener('scroll', function () { clearTimeout(sw._t); sw._t = setTimeout(sync, 80); });
      var prev = sw.parentNode.querySelector('[data-sw-prev]'), next = sw.parentNode.querySelector('[data-sw-next]');
      if (prev) prev.addEventListener('click', function () { sw.scrollBy({ left: -sw.clientWidth, behavior: 'smooth' }); });
      if (next) next.addEventListener('click', function () { sw.scrollBy({ left: sw.clientWidth, behavior: 'smooth' }); });
      sync();
    });
  }

  /* ---------------- 横向翻页容器（超长页面左右翻页） ----------------
     用法：<div class="pager" data-pager><div class="pg-track">
             <div class="pg-page">…</div><div class="pg-page">…</div></div></div>
     外围放 .pg-nav（[data-pg-prev]/[data-pg-next]/.pg-idx）与 .pg-hint 即可联动。
     支持：箭头 / 指示点 / 触摸拖拽 / 键盘左右。
     ---------------------------------------------------------------- */
  function bindPager() {
    d.querySelectorAll('[data-pager]').forEach(function (box) {
      var track = box.querySelector('.pg-track');
      if (!track) return;
      var pages = track.querySelectorAll('.pg-page');
      var n = pages.length;
      if (n <= 1) return;
      var host = box.parentNode;
      var prev = host.querySelector('[data-pg-prev]');
      var next = host.querySelector('[data-pg-next]');
      var idx = host.querySelector('.pg-idx');
      var hint = host.querySelector('.pg-hint');
      var dots = hint ? hint.querySelectorAll('i') : [];
      var cur = 0;

      function go(i) {
        cur = Math.max(0, Math.min(n - 1, i));
        track.style.transform = 'translateX(' + (-cur * 100) + '%)';
        // 容器高度跟随当前页，避免空白
        box.style.height = (pages[cur].offsetHeight || pages[cur].scrollHeight) + 'px';
        dots.forEach(function (x, k) { x.classList.toggle('on', k === cur); });
        if (idx) idx.textContent = (cur + 1) + ' / ' + n;
        if (prev) prev.classList.toggle('dis', cur === 0);
        if (next) next.classList.toggle('dis', cur === n - 1);
      }
      if (prev) prev.addEventListener('click', function () { go(cur - 1); });
      if (next) next.addEventListener('click', function () { go(cur + 1); });
      dots.forEach(function (x, k) { x.addEventListener('click', function () { go(k); }); });

      // 触摸/拖拽滑动
      var x0 = null;
      box.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
      box.addEventListener('touchend', function (e) {
        if (x0 === null) return;
        var dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 42) go(cur + (dx < 0 ? 1 : -1));
        x0 = null;
      });
      box.addEventListener('click', function (e) { e.stopPropagation(); });

      // 指示点数量自动补齐
      if (hint && dots.length !== n) {
        hint.innerHTML = '';
        for (var k = 0; k < n; k++) hint.appendChild(d.createElement('i'));
        go(cur);
      }
      w.addEventListener('resize', function () { go(cur); });
      // 首屏初始化（等图片与字体稳定后再量一次高度）
      go(0);
      setTimeout(function () { go(cur); }, 260);
    });
  }

  /* ---------------- 筛选栏 ---------------- */
  function bindFilter() {
    d.querySelectorAll('.filterbar').forEach(function (bar) {
      bar.querySelectorAll('.f').forEach(function (f) {
        f.addEventListener('click', function () {
          if (f.hasAttribute('data-single')) bar.querySelectorAll('.f').forEach(function (x) { x.classList.remove('on'); });
          f.classList.toggle('on');
          RF.toast(RF.lang === 'en' ? 'Filter applied' : '已应用筛选：' + f.textContent.trim());
        });
      });
    });
  }

  /* ---------------- 收藏 / 点赞 ---------------- */
  function bindActions() {
    d.querySelectorAll('[data-act]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var t = btn.getAttribute('data-act');
        if (t === 'fav') {
          btn.classList.toggle('on');
          var on = btn.classList.contains('on');
          btn.style.color = on ? 'var(--red-l)' : '';
          RF.toast(on ? (RF.lang === 'en' ? 'Added to favorites' : '已收藏') : (RF.lang === 'en' ? 'Removed' : '已取消收藏'));
        } else if (t === 'like') {
          var n = parseInt(btn.getAttribute('data-n') || '0', 10) + 1;
          btn.setAttribute('data-n', n);
          var lb = btn.querySelector('.n'); if (lb) lb.textContent = n;
          btn.style.color = 'var(--red-l)';
        } else if (t === 'follow') {
          var f = btn.getAttribute('data-follow') === '1';
          btn.setAttribute('data-follow', f ? '0' : '1');
          btn.textContent = f ? (RF.lang === 'en' ? 'Follow' : '关注') : (RF.lang === 'en' ? 'Following' : '已关注');
          btn.classList.toggle('btn-primary', !f);
        } else if (t === 'submit') {
          var form = btn.closest('form') || btn.closest('.form');
          if (form && !validate(form)) return;
          RF.toast(RF.lang === 'en' ? 'Submitted' : '提交成功，我们将尽快处理');
        }
      });
    });
  }

  /* ---------------- 表单校验 ---------------- */
  function validate(form) {
    var bad = null;
    form.querySelectorAll('[required]').forEach(function (el) {
      if (!String(el.value || '').trim() && !bad) bad = el;
    });
    if (bad) {
      bad.style.borderColor = 'var(--red)';
      RF.toast(RF.lang === 'en' ? 'Please complete required fields' : '请完成必填项');
      bad.focus(); return false;
    }
    return true;
  }
  RF.validate = validate;

  /* ---------------- 折叠 ---------------- */
  function bindAcc() {
    d.querySelectorAll('.acc .q').forEach(function (q) {
      q.addEventListener('click', function () { q.parentNode.classList.toggle('on'); });
    });
  }

  /* ---------------- 聊天发送 ---------------- */
  function bindChat() {
    var box = d.querySelector('[data-chat]');
    if (!box) return;
    var input = box.querySelector('.chat-input input');
    var btn = box.querySelector('[data-send]');
    function send() {
      var v = (input.value || '').trim(); if (!v) return;
      var me = RF.currentUser;
      var html = '<div class="msg me"><img class="av" src="' + me.avatar + '" alt="me">' +
        '<div class="bubble">' + escapeHtml(v) + '<span class="time">' + now() + '</span></div></div>';
      box.querySelector('.chat').insertAdjacentHTML('beforeend', html);
      input.value = '';
      var c = box.querySelector('.chat'); c.scrollTop = c.scrollHeight;
      RF.api.ai.chat({ content: v, llmId: 'llm1' }).then(function (res) {
        var reply = (res && res.data && (res.data.reply || res.data.message)) || (RF.lang === 'en'
          ? 'Received. I am splitting your requirement into modules and matching platform resources.'
          : '已收到，正在为你拆分需求并匹配平台现有资源…');
        box.querySelector('.chat').insertAdjacentHTML('beforeend',
          '<div class="msg"><img class="av" src="assets/img/gen/avatar/user_02.svg" alt="ai">' +
          '<div class="bubble">' + escapeHtml(reply) + '<span class="time">' + now() + '</span></div></div>');
        var c2 = box.querySelector('.chat'); c2.scrollTop = c2.scrollHeight;
      });
    }
    if (btn) btn.addEventListener('click', send);
    if (input) input.addEventListener('keydown', function (e) { if (e.key === 'Enter') send(); });
  }
  function now() { var t = new Date(); return ('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2); }
  function escapeHtml(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  RF.escapeHtml = escapeHtml;

  /* ---------------- 加载更多（数据源：MOCK / 真实接口） ---------------- */
  var TPL = {
    news: function (i) {
      return '<a class="card" href="pages/news_detail.html?id=' + i.id + '"><div class="thumb"><img src="' + i.coverThumb + '" alt="' + i.title + '" loading="lazy">' +
        (i.top ? '<span class="badge">置顶</span>' : '') + '</div><div class="card-body"><div class="tt" data-zh="' + i.title + '" data-en="' + i.titleEn + '">' + i.title + '</div>' +
        '<div class="ts"><span data-zh="' + i.brand + '" data-en="' + i.brandEn + '">' + i.brand + '</span><span>' + i.time + '</span><span>' + i.views + ' 阅读</span></div></div></a>';
    },
    product: function (i) {
      return '<a class="card" href="pages/product_detail.html?id=' + i.id + '"><div class="thumb"><img src="' + i.img + '" alt="' + i.name + '" loading="lazy">' +
        '<span class="price">' + i.priceText + '</span></div><div class="card-body"><div class="tt" data-zh="' + i.name + '" data-en="' + i.nameEn + '">' + i.name + '</div>' +
        '<div class="ts"><span data-zh="' + i.brand + '" data-en="' + i.brandEn + '">' + i.brand + '</span><span>★ ' + i.rating + '</span></div></div></a>';
    },
    user: function (i) {
      return '<a class="item" href="pages/user_home.html?id=' + i.id + '"><img class="pic" style="width:52px;height:52px;border-radius:50%" src="' + i.avatar + '" alt="' + i.name + '">' +
        '<div class="info"><div class="tt" data-zh="' + i.name + '" data-en="' + i.nameEn + '">' + i.name + '</div>' +
        '<div class="meta"><span class="tag" data-zh="' + i.type + '" data-en="' + i.typeEn + '">' + i.type + '</span><span>Lv.' + i.level + '</span><span>' + i.followers + ' 粉丝</span></div></div></a>';
    },
    project: function (i) {
      return '<a class="card" href="pages/project_detail.html?id=' + i.id + '"><div class="card-body"><div class="tt" data-zh="' + i.name + '" data-en="' + i.nameEn + '">' + i.name + '</div>' +
        '<div class="ts"><span class="tag blue" data-zh="' + i.status + '" data-en="' + i.statusEn + '">' + i.status + '</span><span>' + i.budget + '</span></div>' +
        '<div class="progress" style="margin-top:8px"><i style="width:' + i.progress + '%"></i></div></div></a>';
    },
    newsitem: function (i) {
      return '<a class="item" href="pages/news_detail.html?id=' + i.id + '">' +
        '<div class="pic"><img src="' + RF.asset(i.coverThumb || i.cover || i.img) + '" alt="' + i.title + '" loading="lazy" data-fallback="' + RF.base + 'assets/img/gen/product/module_01.svg"></div>' +
        '<div class="info"><div class="tt" data-zh="' + i.title + '" data-en="' + i.titleEn + '">' + i.title + '</div>' +
        '<div class="meta"><span data-zh="' + i.brand + '" data-en="' + i.brandEn + '">' + i.brand + '</span><span>' + i.time + '</span><span>' + i.views + ' 阅读</span></div></div></a>';
    },
    post: function (i) {
      return '<a class="card" href="pages/forum_post.html?id=' + i.id + '"><div class="card-body"><div class="tt" data-zh="' + i.title + '" data-en="' + i.titleEn + '">' + i.title + '</div>' +
        '<div class="ts"><span data-zh="' + i.author + '" data-en="' + i.authorEn + '">' + i.author + '</span><span>' + i.replies + ' 回复</span><span>' + i.views + ' 浏览</span></div></div></a>';
    },
    demand: function (i) {
      return '<a class="card" href="pages/demand_detail.html?id=' + i.id + '"><div class="card-body"><div class="tt" data-zh="' + i.title + '" data-en="' + i.titleEn + '">' + i.title + '</div>' +
        '<div class="ts"><span class="tag">' + i.budget + '</span><span data-zh="' + i.status + '" data-en="' + i.statusEn + '">' + i.status + '</span><span>' + i.bids + ' 应征</span></div></div></a>';
    }
  };
  RF.renderList = function (el, items, kind) {
    var fn = TPL[kind] || TPL.product;
    el.insertAdjacentHTML('beforeend', items.map(fn).join(''));
    RF.setLang(RF.lang);
  };
  function bindLoadMore() {
    d.querySelectorAll('[data-more]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cfg = btn.getAttribute('data-more').split(':');
        var kind = cfg[0], target = d.querySelector(cfg[1]);
        var page = parseInt(btn.getAttribute('data-page') || '1', 10) + 1;
        btn.disabled = true; btn.textContent = RF.lang === 'en' ? 'Loading…' : '加载中…';
        var map = { news: ['news', 'list'], newsitem: ['news', 'list'], product: ['products', 'list'],
                    user: ['users', 'list'], project: ['biz', 'projects'], post: ['forum', 'list'],
                    demand: ['biz', 'demands'] };
        var api = RF.api[map[kind][0]][map[kind][1]];
        api({ page: page, pageSize: 6 }).then(function (res) {
          if (res && res.code === 0 && res.data && res.data.list.length) {
            RF.renderList(target, res.data.list, kind);
            btn.setAttribute('data-page', page);
            btn.disabled = false; btn.textContent = RF.lang === 'en' ? 'Load more' : '加载更多';
            if (!res.data.hasMore) { btn.style.display = 'none'; }
          } else {
            btn.textContent = RF.lang === 'en' ? 'No more' : '没有更多了';
          }
        });
      });
    });
  }

  /* ---------------- PC 折叠浮窗导航 ---------------- */
  function bindNavPc() {
    var np = d.querySelector('[data-navpc]');
    var mask = d.querySelector('[data-nav-mask]');
    if (!np) return;
    function setOpen(on) {
      np.classList.toggle('open', on);
      if (mask) mask.classList.toggle('on', on);
      d.body.style.overflow = on ? 'hidden' : '';
    }
    var tg = np.querySelector('[data-nav-toggle]');
    if (tg) tg.addEventListener('click', function (ev) {
      ev.stopPropagation(); setOpen(!np.classList.contains('open'));
    });
    if (mask) mask.addEventListener('click', function () { setOpen(false); });
    np.querySelectorAll('.np-panel a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    d.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') setOpen(false); });
    // 搜索框：跳转全站搜索
    var ns = np.querySelector('[data-nav-search]');
    if (ns) ns.addEventListener('click', function () {
      location.href = (RF.base || '') + 'pages/product_search.html';
    });
  }

  /* ---------------- 导航选中态：按当前 URL 自动判定（不依赖 body data-tab） --------
     优先用「导航项 href 的文件名 === 当前页面文件名」精确匹配；
     匹配不到时按文件名前缀（如 toy_xxx.html → toy）回退，覆盖所有子页面。
     ------------------------------------------------------------------------------ */
  var NAV_PREFIX = {
    index: 'home',
    news: 'news', forum: 'news', topic: 'news',
    module: 'module', component: 'module', accessory: 'module', hardware: 'module',
    print3d: 'module', shell: 'module',
    toy: 'toy',
    ai: 'ai',
    learn: 'learn', resource: 'learn', course: 'learn',
    product: 'product',
    project: 'project', demand: 'project', integration: 'project', test: 'project',
    design: 'design',
    production: 'production', line: 'production',
    flow: 'flow',
    user: 'mine', msg: 'mine', fund: 'mine', ticket: 'mine', chat: 'mine',
    setting: 'mine', order: 'mine', fav: 'mine', notice: 'mine'
  };
  RF.syncNavActive = function syncNavActive() {
    var links = d.querySelectorAll('.np-main a, .tabbar a');
    if (!links.length) return;
    var file = (location.pathname.split('/').pop() || 'index.html').split('?')[0].toLowerCase();
    if (!file || file.indexOf('.html') < 0) file = 'index.html';
    var hit = false, i, a, f;
    // 1) 精确匹配：导航项指向的正是当前页
    for (i = 0; i < links.length; i++) {
      a = links[i];
      f = (a.getAttribute('href') || '').split('/').pop().split('?')[0].toLowerCase();
      a.classList.toggle('on', f === file);
      if (f === file) hit = true;
    }
    // 折叠浮层内标出当前页所在位置
    var pl = d.querySelectorAll('.np-panel .np-links a');
    for (i = 0; i < pl.length; i++) {
      a = pl[i];
      f = (a.getAttribute('href') || '').split('/').pop().split('?')[0].toLowerCase();
      a.classList.toggle('on', f === file);
    }
    // AI 系列页面：悬浮球显示活跃态（AI 不在主频道内，用球体反馈位置）
    var fab = d.querySelector('[data-aifab]');
    if (fab) fab.classList.toggle('on', file.indexOf('ai_') === 0 || file === 'ai.html');
    if (hit) return;
    // 2) 前缀回退：toy_list.html → toy → 高亮 mini机器人
    var want = NAV_PREFIX[file.split(/[_\-.]/)[0]];
    if (!want) return;
    for (i = 0; i < links.length; i++) {
      a = links[i];
      if (a.getAttribute('data-tab') === want) a.classList.add('on');
    }
  };

  /* ---------------- 返回按钮（优先浏览器后退，首页时回首页） ---------------- */
  function bindBack() {
    d.querySelectorAll('[data-nav-back], .tb-back').forEach(function (b) {
      b.addEventListener('click', function (ev) {
        var href = b.getAttribute('href') || '';
        var isHome = /index\.html$|^\/$|^$/.test(href);
        if (history.length > 1 && !isHome) { ev.preventDefault(); history.back(); }
      });
    });
  }

  /* ---------------- AI 悬浮球（右侧中部常驻） ---------------- */
  function bindAiFab() {
    var fab = d.querySelector('[data-aifab]');
    var dock = d.querySelector('[data-aidock]');
    if (!fab || !dock) return;
    function setOpen(on) { dock.classList.toggle('on', on); }
    fab.addEventListener('click', function () { setOpen(!dock.classList.contains('on')); });
    var x = dock.querySelector('[data-ai-close]');
    if (x) x.addEventListener('click', function () { setOpen(false); });
    d.addEventListener('click', function (ev) {
      if (!dock.classList.contains('on')) return;
      if (dock.contains(ev.target) || fab.contains(ev.target)) return;
      setOpen(false);
    });
    d.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') setOpen(false); });
  }

  /* ---------------- 搜索 ---------------- */
  function bindSearch() {
    d.querySelectorAll('[data-search]').forEach(function (bar) {
      var inp = bar.querySelector('input'), btn = bar.querySelector('[data-do-search]');
      function go() {
        var k = (inp.value || '').trim();
        if (!k) { RF.toast(RF.lang === 'en' ? 'Enter a keyword' : '请输入关键字'); return; }
        location.href = (bar.getAttribute('data-goto') || 'pages/product_search.html') + '?keyword=' + encodeURIComponent(k);
      }
      if (btn) btn.addEventListener('click', go);
      if (inp) inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
    });
    // 结果页回填关键字
    var m = location.search.match(/keyword=([^&]+)/);
    if (m) { var kw = decodeURIComponent(m[1]); d.querySelectorAll('[data-search] input').forEach(function (i) { i.value = kw; }); }
  }

  /* ---------------- 图片兜底 ---------------- */
  function bindImg() {
    d.querySelectorAll('img[data-fallback]').forEach(function (im) {
      im.addEventListener('error', function () { im.src = im.getAttribute('data-fallback'); });
    });
  }

  /* ---------------- 语言按钮 / 模式切换 ---------------- */
  function bindLangBtn() {
    d.querySelectorAll('[data-lang-btn]').forEach(function (b) {
      b.addEventListener('click', function () {
        RF.setLang(RF.lang === 'zh' ? 'en' : 'zh');
        RF.toast(RF.lang === 'en' ? 'Switched to English' : '已切换为中文');
      });
      b.textContent = RF.lang === 'zh' ? 'EN' : '中';
    });
  }

  /* ---------------- 初始化 ---------------- */
  function init() {
    bindTabs(); bindSwiper(); bindFilter(); bindActions(); bindAcc();
    bindChat(); bindLoadMore(); bindSearch(); bindImg(); bindLangBtn(); bindNavPc(); bindAiFab(); bindBack(); bindPager();
    RF.setLang(RF.lang);
    syncNavActive();
    // 桌面宽屏标记
    if (w.innerWidth >= 900) d.body.classList.add('wide');
    w.addEventListener('resize', function () { d.body.classList.toggle('wide', w.innerWidth >= 900); });
  }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', init); else init();
})(window, document);

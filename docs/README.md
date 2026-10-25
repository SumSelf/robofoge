# ROBOFORGE · 接口与数据库对接说明

> 站点：**234 页**（前台 204 + 后台 29 + 首页） · **193** 个接口 · **106** 张表


| 文件 | 内容 |
|---|---|
| `README.md` | 本文件：前端接入方式、JS 使用点、后端实现规范 |
| `API.md` | 193 个接口清单（方法 / 路径 / JS 调用 / 关联表） |
| `DATABASE.md` | 106 张表的对象形式设计（字段 / 类型 / 约束 / 关系） |
| `schema.sql` | MySQL 8 建表脚本（含初始化数据，可整文件执行） |
| `mock_requests.md` | **965 条**原始 HTTP 请求（193 接口 × 5 条）+ 转换后的后台数据结构 + 对应 SQL |
| `mock_seed.sql` | 上述请求落地为 **1140 条** INSERT，按外键拓扑排序可直接执行 |
| `mock_audit.md` | 走查报告：1140 条 SQL 对表结构的 8 项校验结果 |

---

## 一、前端现状

### 1.1 双数据层

站点采用**动静态彻底分离**，前端只有静态模板 + 两版数据层：

| 文件 | 作用 | 体积 |
|---|---|---|
| `assets/js/api.mock.js` | 模拟数据层 `window.MOCK`，离线演示用 | ~810 KB |
| `assets/js/api.real.js` | 真实接口层 `window.REAL_API`，REST 调用 | ~68 KB |
| `assets/js/app.js` | 适配层 `MockAdapter()`，与 `api.real.js` **方法签名完全一致** | ~53 KB |

### 1.2 切换方式

```js
// 方式一：全局配置（放在 index.html 的 RF_CONFIG 里）
window.RF_CONFIG = { apiBase: 'https://api.example.com/api/v1' };
window.API_MODE = 'real';

// 方式二：运行时切换（会写入 localStorage 键 rf_mode）
RF.setMode('real');    // 走 api.real.js 的 REST 接口
RF.setMode('mock');    // 走本地模拟数据（默认）

// 查看当前模式
console.log(RF.mode);
```

切换逻辑在 `app.js` 第 314 行：

```js
RF.setMode = function (m) {
  RF.mode = m;
  localStorage.setItem('rf_mode', m);
  RF.api = (m === 'real' && w.REAL_API) ? w.REAL_API : MockAdapter();
  return RF.api;
};
```

**关键点**：`MockAdapter()` 与 `REAL_API` 的方法名、参数、返回结构一一对应，
所以业务代码写 `RF.api.news.list({page:1})` 即可，无需关心当前是 mock 还是 real。

### 1.3 统一响应结构

```ts
interface ApiResp<T> {
  code: number;       // 0=成功 401=未登录 403=无权限 4xx/5xx=异常
  message: string;    // 提示文案
  data: T;            // 业务数据
  traceId: string;    // 链路追踪 ID
}

interface Page<T> {   // 分页统一包装
  list: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
```

---

## 二、JS 使用点

### 2.1 直接调用（业务代码）

```js
// 列表
const res = await RF.api.news.list({ page: 1, pageSize: 20, cat: '新品发布' });
if (res.code === 0) render(res.data.list);

// 详情
const d = await RF.api.products.detail('P1000');

// 写操作（需登录）
await RF.api.publish.product({ name, cat: 'module', price: 398000 });

// AI 对话
await RF.api.ai.chat({ sessionId, content: '我要做一台酒店配送机器人' });
```

调用一律走 `RF.api.<分组>.<方法>()`，**分组名与方法名与 `api.real.js` 完全同名**，
共 193 个接口，其中 **193 个已同步实现 Mock 版本**（`MockAdapter` 中同名方法）。

### 2.2 声明式绑定（页面 HTML 属性）

页面不写 JS，通过 `data-*` 属性由 `app.js` 统一接管：

| 属性 | 作用 | 绑定的 API | 绑定函数 |
|---|---|---|---|
| `data-more="news:#newsFeed"` | 加载更多 | `RF.api.news.list` | `bindLoadMore()` |
| `data-more="product:#prodGrid"` | 加载更多 | `RF.api.products.list` | `bindLoadMore()` |
| `data-more="post:#postList"` | 加载更多 | `RF.api.forum.list` | `bindLoadMore()` |
| `data-more="demand:#dmList"` | 加载更多 | `RF.api.biz.demands` | `bindLoadMore()` |
| `data-more="project:#pjList"` | 加载更多 | `RF.api.biz.projects` | `bindLoadMore()` |
| `data-more="user:#userList"` | 加载更多 | `RF.api.users.list` | `bindLoadMore()` |
| `data-act="submit"` | 表单提交 | 各 `publish.*` / `apply.*` | `bindActions()` |
| `data-act="fav"` | 收藏 | `RF.api.products.favorite` | `bindActions()` |
| `data-act="like"` | 点赞 | `RF.api.news.like` | `bindActions()` |
| `data-act="follow"` | 关注 | `RF.api.users.follow` | `bindActions()` |
| `data-act="dlpack"` | 打包下载 | `RF.api.resource.pack` | `bindActions()` |
| `data-act="revoke"` | 吊销令牌 | `RF.api.resource.revokeToken` | `bindActions()` |
| `data-act="invite:U3007"` | 邀请成员 | `RF.api.apply.invite` | `bindActions()` |
| `data-swiper` | 横向轮播 | —（纯前端） | `bindSwiper()` |
| `data-pager` | 左右翻页 | —（纯前端） | `bindPager()` |
| `data-tab` | 频道切换 | —（纯前端） | `bindTabs()` |
| `data-navpc` | PC 折叠导航 | —（纯前端） | `bindNavPc()` |
| `data-aifab` | AI 悬浮球 | `RF.api.ai.*` | `bindAiFab()` |
| `data-i18n` / `data-zh` / `data-en` | 中英切换 | —（i18n.js） | `RF.applyI18n()` |

`data-more` 的映射表在 `app.js` 的 `bindLoadMore()` 内：

```js
var map = {
  news:     ['news', 'list'],      newsitem: ['news', 'list'],
  product:  ['products', 'list'],  user:     ['users', 'list'],
  project:  ['biz', 'projects'],   post:     ['forum', 'list'],
  demand:   ['biz', 'demands']
};
var api = RF.api[map[kind][0]][map[kind][1]];
```

**后端只要实现 `API.md` 中的接口，前端所有 `data-more` / `data-act` 即自动生效，无需改页面。**

### 2.3 全站绑定函数清单（`assets/js/app.js`）

| 函数 | 职责 | 是否触达接口 |
|---|---|---|
| `bindTabs()` | 频道/Tab 切换 | 否 |
| `bindSwiper()` | 横向轮播与指示点 | 否 |
| `bindPager()` | 超长页左右翻页（15 页已接入） | 否 |
| `bindFilter()` | 筛选栏 | 否（前端筛选） |
| `bindActions()` | `data-act` 动作（收藏/点赞/关注/提交/打包） | **是** |
| `bindAcc()` | 折叠面板 | 否 |
| `bindChat()` | 聊天与 AI 对话框 | **是**（`ai.chat` / `messages.send`） |
| `bindLoadMore()` | 分页加载 | **是** |
| `bindNavPc()` | PC 折叠浮窗导航 | 否 |
| `bindBack()` | 返回按钮（优先 `history.back()`） | 否 |
| `bindAiFab()` | AI 右侧悬浮球面板 | **是**（`ai.sessions` / `ai.chat`） |
| `bindSearch()` | 搜索框跳转 | 否（跳转搜索页） |
| `bindImg()` | 图片失败兜底 | 否 |
| `bindLangBtn()` | 中英切换 | 否 |

---

## 三、后端实现规范

### 3.1 必须实现的约定

| 项 | 要求 |
|---|---|
| 基址 | `/api/v1`，支持 `window.RF_CONFIG.apiBase` 覆盖 |
| 认证 | `Authorization: Bearer <token>`；`code=401` 时前端会派发 `rf:unauthorized` 事件 |
| CORS | 需允许前端域名，带 `Authorization` / `Idempotency-Key` 头 |
| 幂等 | 所有写接口支持 `Idempotency-Key` 请求头 |
| 分页 | 入参 `page` / `pageSize` / `sort` / `order`；出参 `list` / `total` / `hasMore` |
| 金额 | 整数「分」，与数据库 `INT` 一致 |
| 时间 | ISO8601 字符串 |
| 日志 | 写接口须写 `rf_operation_log` |
| 软删 | 用 `deleted_at`，列表默认过滤 |

### 3.2 错误码

| code | 含义 | 前端行为 |
|---|---|---|
| 0 | 成功 | 正常渲染 |
| 401 | 未登录 | 派发 `rf:unauthorized`，跳转登录 |
| 403 | 无权限 | Toast 提示 |
| 404 | 资源不存在 | 显示空态 |
| 422 | 参数校验失败 | 展示 `message` |
| 429 | 限流 | Toast 提示 |
| 500 | 服务异常 | Toast + `traceId` |
| -1 | 网络/超时（前端本地生成） | Toast 提示 |

### 3.3 建议的实现顺序

1. **认证**：`/auth/*`（9 个）—— 所有功能前置
2. **内容**：`/news`（15）、`/forum`（8）、`/learn`（5）
3. **产品**：`/products`（9）、`/modules`（9）、`/toys`（7）
4. **业务**：`/demands` `/projects` `/integrations` `/tests`（`biz` 7 个）、`/apply`（9）
5. **AI**：`/ai`（11）—— 依赖 LLM 三方接入
6. **制造**：`/design`（13）、`/production`（30）、`/flow`（7）
7. **支撑**：`/users` `/messages` `/tickets` `/funds` `/files` `/resource` `/publish` `/enroll` `/reviews`
8. **后台**：`/admin`（11）—— 需独立鉴权 + 双因子 + IP 白名单

---

## 四、数据库部署

### 4.1 执行方式

```bash
# MySQL 8.0+
mysql -u root -p < docs/schema.sql
```

脚本会：
1. 建库 `roboforge`（utf8mb4 / utf8mb4_0900_ai_ci）
2. 建 **106 张表**（按外键依赖拓扑排序，可直接整文件执行）
3. 写入初始化数据：8 个角色、25 个权限点、5 个流程阶段、4 条学习路径、
   8 个论坛板块、10 个产品分类、11 项系统设置

### 4.2 表分布

| 域 | 表数 | 代表表 |
|---|---|---|

| A. 用户与权限 | 14 | `rf_user`, `rf_user_credential`, `rf_sms_code`… |
| B. 内容宣发 | 11 | `rf_category`, `rf_brand`, `rf_news`… |
| C. 论坛社区 | 3 | `rf_board`, `rf_post`, `rf_post_reply` |
| D. 学习平台 | 5 | `rf_learn`, `rf_learn_lesson`, `rf_learn_path`… |
| E. 产品与模块 | 6 | `rf_product`, `rf_product_spec`, `rf_product_interface`… |
| F. 需求与项目 | 8 | `rf_demand`, `rf_demand_bid`, `rf_project`… |
| G. 设计中心 | 6 | `rf_design_demand`, `rf_design_task`, `rf_design_drawing`… |
| H. 流水线生产 | 21 | `rf_production_line`, `rf_production_order`, `rf_production_progress`… |
| I. 全流程管控 | 4 | `rf_flow_stage`, `rf_flow_gate`, `rf_flow_handover`… |
| J. AI 智造 | 8 | `rf_ai_session`, `rf_ai_message`, `rf_llm_config`… |
| K. 沟通与通知 | 5 | `rf_conversation`, `rf_message`, `rf_message_group`… |
| L. 资金 | 6 | `rf_fund_account`, `rf_fund_flow`, `rf_payment`… |
| M. 工单 | 3 | `rf_ticket`, `rf_ticket_reply`, `rf_ticket_log` |
| N. 文件与资源 | 4 | `rf_file`, `rf_download_token`, `rf_download_pack`… |
| O. 系统与配置 | 2 | `rf_setting`, `rf_dict` |

### 4.3 关键设计

| 设计点 | 说明 |
|---|---|
| 金额 | 全部 `INT` 单位「分」，避免浮点误差（`price` / `budget` / `amount` / `balance`） |
| 双语 | 内容表中英并列（`name` / `name_en`），接口按 `Accept-Language` 返回 |
| 软删 | `deleted_at DATETIME`，列表查询默认 `WHERE deleted_at IS NULL` |
| 计数器 | 冗余计数（`views` / `likes` / `comment_count`）与日统计表（`*_stats`）分离 |
| 通用关联 | `rf_comment` / `rf_like` / `rf_favorite` 用 `target_type + target_id` 泛化 |
| 审核流 | 发布类走 `audit_status` + `rf_news_audit` 多级留痕；设计走 `rf_design_review` |
| 阶段门禁 | `rf_flow_gate` 记录阶段间评审，`rf_flow_handover` 记录交接物 |
| AI 链路 | `rf_ai_requirement` → `rf_ai_split` → `rf_ai_match`，缺项落 `rf_ticket` |

---

## 五、接口 ↔ 表 速查

| 路径前缀 | 分组 | 接口数 | 数据表 |
|---|---|---|---|

| `/admin` | `admin` | 11 | `rf_user`, `rf_role`, `rf_permission`, `rf_user_role`, `rf_role_permission`, `rf_login_log`, `rf_ip_whitelist`, `rf_2fa_secret`, `rf_api_key`, `rf_operation_log`, `rf_comment`, `rf_design_review`, `rf_category`, `rf_product`, `rf_news`, `rf_ticket`, `rf_project`, `rf_ad_slot` |
| `/ai` | `ai` | 11 | `rf_ai_session`, `rf_ai_message`, `rf_llm_config`, `rf_ai_requirement`, `rf_ai_split`, `rf_ai_match`, `rf_ai_usage`, `rf_ai_template` |
| `/apply` | `apply` | 9 | `rf_apply`, `rf_project_member`, `rf_demand_bid` |
| `/auth` | `auth` | 9 | `rf_user`, `rf_user_credential`, `rf_sms_code`, `rf_verify_apply`, `rf_login_log` |
| `/components` | `` | 0 | `rf_product` |
| `/demands` | `biz` | 7 | `rf_demand`, `rf_demand_bid` |
| `/design` | `design` | 13 | `rf_design_demand`, `rf_design_task`, `rf_design_drawing`, `rf_design_version`, `rf_design_review`, `rf_design_bom` |
| `/enroll` | `enroll` | 3 | `rf_learn_enroll` |
| `/files` | `files` | 2 | `rf_file`, `rf_download_token` |
| `/flow` | `flow` | 7 | `rf_flow_stage`, `rf_flow_gate`, `rf_flow_handover`, `rf_flow_timeline` |
| `/forum` | `forum` | 8 | `rf_board`, `rf_post`, `rf_post_reply` |
| `/funds` | `funds` | 5 | `rf_fund_account`, `rf_fund_flow`, `rf_payment`, `rf_withdraw`, `rf_withdraw_account`, `rf_invoice` |
| `/integrations` | `` | 0 | `rf_integration` |
| `/learn` | `learn` | 5 | `rf_learn`, `rf_learn_lesson`, `rf_learn_path`, `rf_learn_path_item`, `rf_learn_enroll` |
| `/messages` | `messages` | 5 | `rf_conversation`, `rf_message`, `rf_message_group`, `rf_group_member`, `rf_notification` |
| `/modules` | `modules` | 9 | `rf_product`, `rf_product_interface`, `rf_product_file` |
| `/news` | `news` | 15 | `rf_news`, `rf_news_audit`, `rf_news_stats`, `rf_comment`, `rf_like`, `rf_subscribe` |
| `/production` | `production` | 30 | `rf_production_line`, `rf_production_order`, `rf_production_progress`, `rf_capacity`, `rf_capacity_booking`, `rf_bom`, `rf_bom_item`, `rf_procurement`, `rf_supplier`, `rf_equipment`, `rf_worker`, `rf_qc_report`, `rf_yield_stat`, `rf_process`, `rf_tooling`, `rf_warehouse`, `rf_logistics`, `rf_delivery`, `rf_cert`, `rf_production_case`, `rf_production_cost` |
| `/products` | `products` | 9 | `rf_product`, `rf_product_spec`, `rf_product_file`, `rf_product_review`, `rf_favorite`, `rf_product_compare` |
| `/projects` | `` | 0 | `rf_project`, `rf_project_node`, `rf_project_member` |
| `/publish` | `publish` | 6 | `rf_product`, `rf_news`, `rf_product_spec`, `rf_product_file` |
| `/resource` | `resource` | 9 | `rf_file`, `rf_download_pack`, `rf_download_token`, `rf_download_log`, `rf_fund_account`, `rf_withdraw` |
| `/reviews` | `review` | 2 | `rf_product_review`, `rf_design_review`, `rf_comment` |
| `/tests` | `` | 0 | `rf_test` |
| `/tickets` | `tickets` | 4 | `rf_ticket`, `rf_ticket_reply`, `rf_ticket_log` |
| `/toys` | `toys` | 7 | `rf_product`, `rf_product_spec`, `rf_learn_enroll` |
| `/users` | `users` | 7 | `rf_user`, `rf_user_follow`, `rf_favorite` |

---

## 五之二、模拟请求与种子数据

`docs/mock_requests.md` 为 **193 个接口各生成 5 条**原始 HTTP 请求报文（共 965 条），
每条请求下方给出「转换后的后台数据结构（JSON）」与「对应 SQL」。
全部请求落地为 `docs/mock_seed.sql` 的 **1140 条 INSERT**
（965 条业务行 + 35 张无接口关联表的 175 行种子，保证外键可引用）。

生成链路：

```
接口 @param 注释 → 请求参数/请求体 → 原始 HTTP 报文
                                   ↓
                          后台数据结构（对齐表字段）
                                   ↓
                          INSERT 语句（按外键拓扑排序）
                                   ↓
                          8 项校验（见 mock_audit.md）
```

请求体按接口 `@param` 字段级注释生成（如 `/auth/login` 只带 `account/password/captcha`，
`/production/capacity/book` 只带 `lineId/quantity/startDate/dueDate`），
不是整表字段的堆砌。

走查 8 项（结果见 `mock_audit.md`）：表存在 / 字段存在 / 字段无遗漏 / 非空不为 NULL /
类型匹配 / 不超长 / **外键不悬空** / **枚举不越界** / 唯一键不重复 / 主键连续。

开发联调时可直接：

```bash
mysql -u root -p roboforge < docs/schema.sql
mysql -u root -p roboforge < docs/mock_seed.sql
```

即可得到一个装满真实感数据的可运行环境。

---

## 六、联调检查清单

- [ ] 部署 `schema.sql`，确认 106 张表创建成功
- [ ] 后端实现 `/api/v1` 前缀，配置 CORS 允许 `Authorization` / `Idempotency-Key`
- [ ] 前端设置 `window.RF_CONFIG.apiBase` 指向后端网关
- [ ] 执行 `RF.setMode('real')`（或设 `window.API_MODE='real'`）
- [ ] 验证登录链路：`/auth/login` → token 写入 `localStorage.rf_token`
- [ ] 验证列表分页：`/news?page=1&pageSize=20` 返回 `{list,total,hasMore}`
- [ ] 验证 `data-more` 加载更多能持续翻页
- [ ] 验证 `data-act="submit"` 发布类表单能提交成功
- [ ] 后台独立入口：`admin/login.html` 强制双因子 + IP 白名单
- [ ] 金额字段确认单位为「分」，前端展示 `/100`
- [ ] 时间字段确认返回 ISO8601 字符串

---

## 七、文件位置

```
roboforge/
├── docs/
│   ├── README.md          本文件
│   ├── API.md             193 个接口清单
│   ├── DATABASE.md        106 张表设计
│   ├── schema.sql         MySQL 8 建表脚本
│   ├── mock_requests.md   965 条原始 HTTP 请求 + 数据结构转换
│   ├── mock_seed.sql      1140 条 INSERT 种子数据
│   └── mock_audit.md      走查报告（8 项校验）
├── assets/js/
│   ├── api.mock.js      模拟数据（离线演示）
│   ├── api.real.js      真实接口（REST 定义）
│   ├── app.js           适配层 + 交互绑定
│   └── i18n.js          中英词典
└── data/
    └── mock_data.json   模拟数据源（与 api.mock.js 同源）
```

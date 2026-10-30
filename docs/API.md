# SUMFORGE · API 接口清单

> 基于 `assets/js/api.real.js` 自动生成 · 共 **193** 个接口 · 网关基址 `/api/v1`

配套文件：`schema.sql`（建表脚本） · `DATABASE.md`（表结构设计） · `README.md`（接入说明）


## 一、分组总览

| # | 分组 | 中文名 | 路径前缀 | 接口数 | 主要数据表 |
|---|------|--------|----------|--------|-----------|
| 1 | `production` | 流水线生产 | `/production` | 30 | `rf_bom`, `rf_bom_item`, `rf_capacity`, `rf_capacity_booking`… |
| 2 | `news` | 新闻宣发 | `/news` | 15 | `rf_comment`, `rf_like`, `rf_news`, `rf_news_audit`… |
| 3 | `design` | 设计中心 | `/design` | 13 | `rf_design_bom`, `rf_design_demand`, `rf_design_drawing`, `rf_design_review`… |
| 4 | `ai` | AI 智造 | `/ai` | 11 | `rf_ai_match`, `rf_ai_message`, `rf_ai_requirement`, `rf_ai_session`… |
| 5 | `admin` | 后台管理 | `/admin` | 11 | `rf_2fa_secret`, `rf_ad_slot`, `rf_api_key`, `rf_category`… |
| 6 | `auth` | 认证与用户 | `/auth` | 9 | `rf_login_log`, `rf_sms_code`, `rf_user`, `rf_user_credential`… |
| 7 | `products` | 产品中心 | `/products` | 9 | `rf_favorite`, `rf_product`, `rf_product_compare`, `rf_product_file`… |
| 8 | `modules` | 模块与组件 | `/modules` | 9 | `rf_download_token`, `rf_file`, `rf_product`, `rf_product_file`… |
| 9 | `apply` | 申请承接 | `/apply` | 9 | `rf_apply`, `rf_demand_bid`, `rf_project_member` |
| 10 | `resource` | 资源中心 | `/resource` | 9 | `rf_download_log`, `rf_download_pack`, `rf_download_token`, `rf_file`… |
| 11 | `forum` | 论坛社区 | `/forum` | 8 | `rf_board`, `rf_post`, `rf_post_reply` |
| 12 | `toys` | mini机器人 | `/toys` | 7 | `rf_learn_enroll`, `rf_product`, `rf_product_spec` |
| 13 | `biz` | 需求与项目 | `/demands,/projects,/integrations,/tests` | 7 | `rf_demand`, `rf_demand_bid`, `rf_integration`, `rf_project`… |
| 14 | `users` | 用户中心 | `/users` | 7 | `rf_favorite`, `rf_user`, `rf_user_follow` |
| 15 | `flow` | 全流程 | `/flow` | 7 | `rf_flow_gate`, `rf_flow_handover`, `rf_flow_stage`, `rf_flow_timeline` |
| 16 | `publish` | 发布中心 | `/publish` | 6 | `rf_news`, `rf_product`, `rf_product_file`, `rf_product_spec` |
| 17 | `learn` | 学习平台 | `/learn` | 5 | `rf_learn`, `rf_learn_enroll`, `rf_learn_lesson`, `rf_learn_path`… |
| 18 | `messages` | 沟通消息 | `/messages` | 5 | `rf_conversation`, `rf_group_member`, `rf_message`, `rf_message_group`… |
| 19 | `funds` | 资金 | `/funds` | 5 | `rf_fund_account`, `rf_fund_flow`, `rf_invoice`, `rf_payment`… |
| 20 | `tickets` | 工单 | `/tickets` | 4 | `rf_ticket`, `rf_ticket_log`, `rf_ticket_reply` |
| 21 | `enroll` | 报名 | `/enroll` | 3 | `rf_learn_enroll` |
| 22 | `files` | 文件 | `/files` | 2 | `rf_download_token`, `rf_file` |
| 23 | `review` | 评价审核 | `/reviews` | 2 | `rf_comment`, `rf_design_review`, `rf_product_review` |

### 约定

- **基址**：`BASE = /api/v1`（可由 `window.RF_CONFIG.apiBase` 覆盖）
- **认证**：`Authorization: Bearer <token>`，登录/注册类接口 `auth:false`
- **响应包装**：`{ code:number, message:string, data:T, traceId:string }`，`code=0` 为成功
- **分页入参**：`{ page=1, pageSize=20, sort?, order? }`；**分页返回**：`{ list:T[], total, page, pageSize, hasMore }`
- **金额**：整数，单位「分」，前端展示 `/100`
- **时间**：ISO8601 字符串
- **写操作**：需带 `Idempotency-Key` 头做幂等


## 二、接口明细


### 流水线生产 `production` （30 个）

- **路径前缀**：`/production` · **说明**：产线、工单、产能、排产、BOM、采购、供应商、SMT、装配、质检、良率、仓储、物流、交付
- **关联数据表**：`rf_bom`, `rf_bom_item`, `rf_capacity`, `rf_capacity_booking`, `rf_cert`, `rf_delivery`, `rf_equipment`, `rf_logistics`, `rf_process`, `rf_procurement`, `rf_production_case`, `rf_production_cost`, `rf_production_line`, `rf_production_order`, `rf_production_progress`, `rf_qc_report`, `rf_supplier`, `rf_tooling`, `rf_warehouse`, `rf_worker`, `rf_yield_stat`
- **相关页面**：`production_assembly.html`, `production_bom.html`, `production_bom_check.html`, `production_booking.html`, `production_burnin.html`, `production_capacity.html`, `production_case.html`, `production_cert.html`, `production_cost.html`, `production_delivery.html` …等 32 个

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `GET` | `/production/lines` | `RF.api.production.lines()` | 是 | 产线列表 |
| `GET` | `/production/lines/:id` | `RF.api.production.lineDetail()` | 是 | 产线详情 |
| `GET` | `/production/capacity` | `RF.api.production.capacity()` | 是 | 产能查询（按月） |
| `POST` | `/production/capacity/book` | `RF.api.production.bookCapacity()` | 是 | 预约产能 |
| `GET` | `/production/orders` | `RF.api.production.orders()` | 是 | 生产工单列表 |
| `GET` | `/production/orders/:id` | `RF.api.production.orderDetail()` | 是 | 生产工单详情（含节点） |
| `POST` | `/production/orders` | `RF.api.production.publishOrder()` | 是 | 发布量产需求 |
| `POST` | `/production/orders/:orderId` | `RF.api.production.dailyReport()` | 是 | 上报生产日报 |
| `GET` | `/production/schedule` | `RF.api.production.schedule()` | 是 | 排产计划 |
| `GET` | `/production/boms` | `RF.api.production.boms()` | 是 | BOM 齐套状态 |
| `GET` | `/production/boms/:bomId` | `RF.api.production.bomCheck()` | 是 | 齐套检查 |
| `POST` | `/production/procurement` | `RF.api.production.procurement()` | 是 | 发起物料采购 |
| `GET` | `/production/suppliers` | `RF.api.production.suppliers()` | 是 | 供应商列表 |
| `GET` | `/production/suppliers/:id` | `RF.api.production.supplierDetail()` | 是 | 供应商详情 |
| `GET` | `/production/processes` | `RF.api.production.processes()` | 是 | 工艺清单 |
| `GET` | `/production/qc` | `RF.api.production.qc()` | 是 | 质检批次列表 |
| `GET` | `/production/qc/:id` | `RF.api.production.qcReport()` | 是 | 质检报告详情 |
| `POST` | `/production/qc` | `RF.api.production.requestQc()` | 是 | 申请批次质检 |
| `GET` | `/production/yield` | `RF.api.production.yield()` | 是 | 良率分析 |
| `GET` | `/production/tooling` | `RF.api.production.tooling()` | 是 | 模具工装台账 |
| `POST` | `/production/tooling/quote` | `RF.api.production.toolingQuote()` | 是 | 开模询价 |
| `GET` | `/production/orders/:orderId` | `RF.api.production.cost()` | 是 | 成本核算 |
| `GET` | `/production/warehouses` | `RF.api.production.warehouses()` | 是 | 仓储列表 |
| `POST` | `/production/logistics` | `RF.api.production.createShipment()` | 是 | 创建发货单 |
| `GET` | `/production/logistics/:shipmentId` | `RF.api.production.tracking()` | 是 | 物流轨迹 |
| `GET` | `/production/equipment` | `RF.api.production.equipment()` | 是 | 设备台账 |
| `GET` | `/production/workers` | `RF.api.production.workers()` | 是 | 班组列表 |
| `GET` | `/production/certs` | `RF.api.production.certs()` | 是 | 产线与产品资质 |
| `GET` | `/production/cases` | `RF.api.production.cases()` | 是 | 量产案例 |
| `GET` | `/production/overview` | `RF.api.production.overview()` | 是 | 生产板块总览（首页用） |

### 新闻宣发 `news` （15 个）

- **路径前缀**：`/news` · **说明**：资讯列表/详情/分类/发布/审核/排行/搜索/订阅/统计
- **关联数据表**：`rf_comment`, `rf_like`, `rf_news`, `rf_news_audit`, `rf_news_stats`, `rf_subscribe`
- **相关页面**：`forum_home.html`, `news_brand.html`, `news_brand_list.html`, `news_category.html`, `news_detail.html`, `news_draft.html`, `news_edit.html`, `news_list.html`, `news_manage.html`, `news_publish.html` …等 17 个

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `GET` | `/news` | `RF.api.news.list()` | 是 | 资讯列表 |
| `GET` | `/news/:id` | `RF.api.news.detail()` | 是 | 资讯详情 → |
| `GET` | `/news/categories` | `RF.api.news.categories()` | 是 | 分类列表 → {list:{id,name,nameEn,count}[]} |
| `POST` | `/news` | `RF.api.news.publish()` | 是 | 发布宣发 |
| `GET` | `/news/drafts` | `RF.api.news.drafts()` | 是 | 草稿箱 |
| `POST` | `/news/:id/submit` | `RF.api.news.submitReview()` | 是 | 提交审核 |
| `GET` | `/news/:id/reviews` | `RF.api.news.reviews()` | 是 | 审核记录 → |
| `GET` | `/news/mine` | `RF.api.news.mine()` | 是 | 我的宣发 |
| `GET` | `/news/topics` | `RF.api.news.topics()` | 是 | 专题聚合 → |
| `GET` | `/news/rank` | `RF.api.news.rank()` | 是 | 热榜 |
| `GET` | `/news/search` | `RF.api.news.search()` | 是 | 搜索 |
| `POST` | `/news/:brandId/subscribe` | `RF.api.news.subscribe()` | 是 | 订阅/关注 |
| `GET` | `/news/:id/stats` | `RF.api.news.stats()` | 是 | 宣发数据效果 → |
| `POST` | `/news/:id/like` | `RF.api.news.like()` | 是 | 点赞 |
| `GET` | `/news/:id/comments` | `RF.api.news.comments()` | 是 | 评论 \| |

### 设计中心 `design` （13 个）

- **路径前缀**：`/design` · **说明**：设计需求、任务、图纸、版本、评审、BOM
- **关联数据表**：`rf_design_bom`, `rf_design_demand`, `rf_design_drawing`, `rf_design_review`, `rf_design_task`, `rf_design_version`
- **相关页面**：`design_bom.html`, `design_collab.html`, `design_demand.html`, `design_demand_detail.html`, `design_demand_publish.html`, `design_drawing.html`, `design_home.html`, `design_review.html`, `design_task.html`, `design_version.html`

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `GET` | `/design/demands` | `RF.api.design.demands()` | 是 | 设计需求列表 |
| `GET` | `/design/demands/:id` | `RF.api.design.demandDetail()` | 是 | 设计需求详情 |
| `POST` | `/design/demands` | `RF.api.design.publishDemand()` | 是 | 发布设计需求 |
| `POST` | `/design/demands/:demandId` | `RF.api.design.bidDemand()` | 是 | 应征设计需求 |
| `GET` | `/design/tasks` | `RF.api.design.tasks()` | 是 | 设计任务列表（在研） |
| `GET` | `/design/drawings` | `RF.api.design.drawings()` | 是 | 图纸库列表 |
| `GET` | `/design/drawings/:drawingId` | `RF.api.design.versions()` | 是 | 图纸版本历史 |
| `GET` | `/design/reviews` | `RF.api.design.reviews()` | 是 | 设计评审列表 |
| `POST` | `/design/reviews` | `RF.api.design.startReview()` | 是 | 发起设计评审 |
| `POST` | `/design/reviews/:reviewId` | `RF.api.design.reviewVerdict()` | 是 | 提交评审判定 |
| `GET` | `/design/boms` | `RF.api.design.boms()` | 是 | 设计 BOM 列表 |
| `GET` | `/design/demands/:demandId` | `RF.api.design.members()` | 是 | 协作成员列表 |
| `GET` | `/design/overview` | `RF.api.design.overview()` | 是 | 设计阶段与指标（首页用） |

### AI 智造 `ai` （11 个）

- **路径前缀**：`/ai` · **说明**：会话、消息、对话、需求提交、拆分、匹配、模型配置
- **关联数据表**：`rf_ai_match`, `rf_ai_message`, `rf_ai_requirement`, `rf_ai_session`, `rf_ai_split`, `rf_ai_template`, `rf_ai_usage`, `rf_llm_config`
- **相关页面**：`ai_chat.html`, `ai_cost.html`, `ai_history.html`, `ai_home.html`, `ai_integration.html`, `ai_llm.html`, `ai_llm_add.html`, `ai_match.html`, `ai_project.html`, `ai_requirement.html` …等 13 个

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `GET` | `/ai/sessions` | `RF.api.ai.sessions()` | 是 | 会话列表 → {list:{id,title,updatedAt}[]} |
| `GET` | `/ai/sessions/:id/messages` | `RF.api.ai.messages()` | 是 | 会话消息 |
| `POST` | `/ai/chat` | `RF.api.ai.chat()` | 是 | 发送对话（SSE 流式，接口需在 headers 加 Accept:text/event-stream） {sessionId,content,llmId,attachments} → |
| `POST` | `/ai/requirements` | `RF.api.ai.requirement()` | 是 | 需求提交 {title,scene,budget,deadline,detail,attachments} → |
| `GET` | `/ai/requirements/:id/split` | `RF.api.ai.split()` | 是 | 需求拆分 → {items:{name,match,status}[]} |
| `POST` | `/ai/requirements/:id/project` | `RF.api.ai.genProject()` | 是 | 生成项目 → |
| `GET` | `/ai/requirements/:id/match` | `RF.api.ai.match()` | 是 | 资源匹配 → |
| `POST` | `/ai/requirements/:id/ticket` | `RF.api.ai.toTicket()` | 是 | 缺资源转工单 {items,level} → |
| `GET` | `/ai/integrations/:id` | `RF.api.ai.integration()` | 是 | 集成明细 → |
| `GET` | `/ai/llms` | `RF.api.ai.llms()` | 是 | 三方大模型账号 \| 绑定 \| 测试 |
| `GET` | `/ai/templates` | `RF.api.ai.templates()` | 是 | 提示词模板 \| 用量计费 |

### 后台管理 `admin` （11 个）

- **路径前缀**：`/admin` · **说明**：仪表盘、用户、权限、审核、发布、评论、工单、项目、分类、产品
- **关联数据表**：`rf_2fa_secret`, `rf_ad_slot`, `rf_api_key`, `rf_category`, `rf_comment`, `rf_design_review`, `rf_ip_whitelist`, `rf_login_log`, `rf_news`, `rf_operation_log`, `rf_permission`, `rf_product`, `rf_project`, `rf_role`, `rf_role_permission`, `rf_ticket`, `rf_user`, `rf_user_role`
- **相关页面**：`admin/2fa.html`, `admin/ads.html`, `admin/apikey.html`, `admin/categories.html`, `admin/comments.html`, `admin/content.html`, `admin/design.html`, `admin/forum.html`, `admin/funds.html`, `admin/index.html` …等 29 个

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `GET` | `/admin/dashboard` | `RF.api.admin.dashboard()` | 是 | 仪表盘 → {kpis:Kpi[],trend:[],pending:{review,ticket,content}} |
| `GET` | `/admin/users` | `RF.api.admin.users()` | 是 | 用户管理 \| 启停 \| 角色 |
| `GET` | `/admin/roles` | `RF.api.admin.roles()` | 是 | 权限管理 \| 新建 \| 权限矩阵 |
| `GET` | `/admin/reviews` | `RF.api.admin.reviews()` | 是 | 审核管理（多级） {level,status} \| 通过 \| 驳回 |
| `GET` | `/admin/review-flow` | `RF.api.admin.reviewFlow()` | 是 | 审核流程配置 \| |
| `GET` | `/admin/contents` | `RF.api.admin.contents()` | 是 | 发布管理 \| 上下架 \| 删除 DELETE |
| `GET` | `/admin/comments` | `RF.api.admin.comments()` | 是 | 评论管理 \| 删除 \| 屏蔽 PUT |
| `GET` | `/admin/tickets` | `RF.api.admin.tickets()` | 是 | 工单管理 \| 分派 \| 关闭 PUT |
| `GET` | `/admin/projects` | `RF.api.admin.projects()` | 是 | 项目管理 \| 资金管理 \| 沟通管理 |
| `GET` | `/admin/categories` | `RF.api.admin.categories()` | 是 | 分类管理 \| POST \| PUT \| DELETE |
| `GET` | `/admin/products` | `RF.api.admin.products()` | 是 | 产品管理 / 新闻管理 / 论坛管理 / LLM 配置 / 广告位 / 日志 / 设置 / 统计 |

### 认证与用户 `auth` （9 个）

- **路径前缀**：`/auth` · **说明**：登录、注册、验证码、实名认证、资料维护
- **关联数据表**：`rf_login_log`, `rf_sms_code`, `rf_user`, `rf_user_credential`, `rf_verify_apply`
- **相关页面**：`login.html`, `register.html`, `user_edit.html`, `user_verify.html`

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `POST` | `/auth/login` | `RF.api.auth.login()` | 是 | 账号密码登录 |
| `POST` | `/auth/login-sms` | `RF.api.auth.loginSms()` | 是 | 手机验证码登录 |
| `POST` | `/auth/register` | `RF.api.auth.register()` | 是 | 注册 |
| `POST` | `/auth/sms-code` | `RF.api.auth.smsCode()` | 是 | 发送短信验证码 |
| `POST` | `/auth/reset-password` | `RF.api.auth.resetPwd()` | 是 | 找回密码 |
| `POST` | `/auth/logout` | `RF.api.auth.logout()` | 是 | 退出登录 |
| `GET` | `/auth/me` | `RF.api.auth.me()` | 是 | 当前登录用户 → |
| `PUT` | `/auth/profile` | `RF.api.auth.updateProfile()` | 是 | 更新资料 |
| `POST` | `/auth/verify` | `RF.api.auth.verify()` | 是 | 实名/企业认证 |

### 产品中心 `products` （9 个）

- **路径前缀**：`/products` · **说明**：产品列表/详情/分类/搜索/筛选/对比/评价/收藏
- **关联数据表**：`rf_favorite`, `rf_product`, `rf_product_compare`, `rf_product_file`, `rf_product_review`, `rf_product_spec`
- **相关页面**：`product_category.html`, `product_compare.html`, `product_detail.html`, `product_favorite.html`, `product_filter.html`, `product_index.html`, `product_list.html`, `product_publish.html`, `product_review.html`, `product_review_write.html` …等 14 个

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `GET` | `/products` | `RF.api.products.list()` | 是 | 产品列表 |
| `GET` | `/products/:id` | `RF.api.products.detail()` | 是 | 产品详情 → |
| `GET` | `/products/categories` | `RF.api.products.categories()` | 是 | 分类树 → {list:Category[]}（商用/具身/定制/模块/组件/配件/五金/3D打印/外壳/玩具） |
| `GET` | `/products/search` | `RF.api.products.search()` | 是 | 搜索（含联想） {keyword,page} → |
| `GET` | `/products/filter（参数同` | `RF.api.products.filter()` | 是 | 高级筛选 list，支持多维组合） |
| `GET` | `/products/compare?ids=a,b,c` | `RF.api.products.compare()` | 是 | 对比 → |
| `GET` | `/products/:id/reviews` | `RF.api.products.reviews()` | 是 | 评价 \| |
| `POST` | `/products/:id/favorite` | `RF.api.products.favorite()` | 是 | 收藏 \| |
| `POST` | `/products` | `RF.api.products.publish()` | 是 | 发布产品 |

### 模块与组件 `modules` （9 个）

- **路径前缀**：`/modules` · **说明**：模块、组件、配件、五金、3D打印、外壳、玩法、资料
- **关联数据表**：`rf_download_token`, `rf_file`, `rf_product`, `rf_product_file`, `rf_product_interface`
- **相关页面**：`accessory_detail.html`, `accessory_list.html`, `component_detail.html`, `component_list.html`, `hardware_detail.html`, `hardware_list.html`, `module_compare.html`, `module_detail.html`, `module_home.html`, `module_list.html` …等 19 个

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `GET` | `/modules` | `RF.api.modules.list()` | 是 | 模块列表 |
| `GET` | `/modules/:id` | `RF.api.modules.detail()` | 是 | 模块详情 → |
| `GET` | `/modules/sub-categories` | `RF.api.modules.subCategories()` | 是 | 子组件表 |
| `GET` | `/modules/compare?ids=` | `RF.api.modules.compare()` | 是 | 模块对比 |
| `GET` | `/modules/schemes` | `RF.api.modules.schemes()` | 是 | 搭配方案 {scene} → |
| `GET` | `/modules/plays` | `RF.api.modules.plays()` | 是 | 玩法列表 {moduleId,page} \| 详情 |
| `GET` | `/modules/resources` | `RF.api.modules.resources()` | 是 | 资料中心 |
| `POST` | `/files/download-token` | `RF.api.modules.download()` | 是 | 资料下载（换取临时下载令牌） {fileId} → |
| `GET` | `/components` | `RF.api.modules.components()` | 是 | 组件/配件/五金/3D打印/外壳：同构接口，仅 path 前缀不同 |

### 申请承接 `apply` （9 个）

- **路径前缀**：`/apply` · **说明**：加入项目、邀请成员、应征需求、承接集成与测试
- **关联数据表**：`rf_apply`, `rf_demand_bid`, `rf_project_member`
- **相关页面**：`demand_apply.html`, `integration_apply.html`, `project_apply.html`, `project_invite.html`, `test_apply.html`

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `POST` | `/apply/project` | `RF.api.apply.project()` | 是 | 申请加入项目 |
| `POST` | `/apply/invite` | `RF.api.apply.invite()` | 是 | 邀请成员加入项目 |
| `GET` | `/apply/invites` | `RF.api.apply.invites()` | 是 | 已发出的邀请列表 |
| `POST` | `/apply/invites/:inviteId` | `RF.api.apply.inviteAction()` | 是 | 撤回 / 催办邀请 |
| `POST` | `/apply/demand` | `RF.api.apply.demand()` | 是 | 应征需求 |
| `POST` | `/apply/integration` | `RF.api.apply.integration()` | 是 | 承接集成需求 |
| `POST` | `/apply/test` | `RF.api.apply.test()` | 是 | 承接测试任务 |
| `GET` | `/apply/matching` | `RF.api.apply.matching()` | 是 | 能力匹配度（用于申请页展示匹配条） |
| `GET` | `/apply/bid-refs` | `RF.api.apply.bidRefs()` | 是 | 同类应征参考报价 |

### 资源中心 `resource` （9 个）

- **路径前缀**：`/resource` · **说明**：打包下载、令牌管理、提现、支付结果
- **关联数据表**：`rf_download_log`, `rf_download_pack`, `rf_download_token`, `rf_file`, `rf_fund_account`, `rf_fund_flow`, `rf_invoice`, `rf_payment`, `rf_withdraw`, `rf_withdraw_account`
- **相关页面**：`resource_center.html`, `resource_download.html`, `resource_download_all.html`, `resource_token.html`

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `POST` | `/resource/pack` | `RF.api.resource.pack()` | 是 | 创建打包任务 |
| `GET` | `/resource/pack/:jobId` | `RF.api.resource.packStatus()` | 是 | 打包任务进度与结果 |
| `GET` | `/resource/pack/history` | `RF.api.resource.packHistory()` | 是 | 历史打包任务 |
| `POST` | `/resource/tokens` | `RF.api.resource.createToken()` | 是 | 创建下载令牌 |
| `GET` | `/resource/tokens` | `RF.api.resource.tokens()` | 是 | 令牌列表 |
| `DELETE` | `/resource/tokens/:tokenId` | `RF.api.resource.revokeToken()` | 是 | 吊销令牌 |
| `POST` | `/funds/withdraw` | `RF.api.resource.withdraw()` | 是 | 提现 |
| `GET` | `/funds/accounts` | `RF.api.resource.accounts()` | 是 | 到账账户列表 |
| `GET` | `/funds/pay/:orderId` | `RF.api.resource.payResult()` | 是 | 支付结果查询 |

### 论坛社区 `forum` （8 个）

- **路径前缀**：`/forum` · **说明**：板块、帖子、回复、搜索
- **关联数据表**：`rf_board`, `rf_post`, `rf_post_reply`
- **相关页面**：`forum_board.html`, `forum_home.html`, `forum_my.html`, `forum_post.html`, `forum_publish.html`, `forum_search.html`, `forum_top.html`

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `GET` | `/forum/boards` | `RF.api.forum.boards()` | 是 | 板块 |
| `GET` | `/forum/posts` | `RF.api.forum.list()` | 是 | 帖子列表 |
| `GET` | `/forum/posts/:id` | `RF.api.forum.detail()` | 是 | 帖子详情 → |
| `POST` | `/forum/posts` | `RF.api.forum.publish()` | 是 | 发帖 |
| `POST` | `/forum/posts/:id/replies` | `RF.api.forum.reply()` | 是 | 回帖 |
| `POST` | `/forum/posts/:id` | `RF.api.forum.like()` | 是 | 点赞 / 收藏 / 置顶 / 加精 |
| `GET` | `/forum/search` | `RF.api.forum.search()` | 是 | 搜索 |
| `GET` | `/forum/mine` | `RF.api.forum.mine()` | 是 | 我的帖子 |

### mini机器人 `toys` （7 个）

- **路径前缀**：`/toys` · **说明**：玩具列表/详情/定制/DIY/排行/作品秀/赛事
- **关联数据表**：`rf_learn_enroll`, `rf_product`, `rf_product_spec`
- **相关页面**：`toy_contest.html`, `toy_contest_apply.html`, `toy_contest_detail.html`, `toy_custom.html`, `toy_detail.html`, `toy_diy.html`, `toy_home.html`, `toy_list.html`, `toy_print.html`, `toy_publish.html` …等 13 个

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `GET` | `/toys` | `RF.api.toys.list()` | 是 | 玩具列表 |
| `GET` | `/toys/:id` | `RF.api.toys.detail()` | 是 | 详情 → |
| `POST` | `/toys/custom` | `RF.api.toys.custom()` | 是 | 小型定制下单 |
| `GET` | `/toys/diy` | `RF.api.toys.diy()` | 是 | DIY 玩法 \| 详情 |
| `GET` | `/toys/rank` | `RF.api.toys.rank()` | 是 | 排行榜 |
| `GET` | `/toys/shows` | `RF.api.toys.shows()` | 是 | 作品秀 \| 发布 |
| `GET` | `/toys/contests` | `RF.api.toys.contests()` | 是 | 赛事 \| 报名 |

### 需求与项目 `biz` （7 个）

- **路径前缀**：`/demands,/projects,/integrations,/tests` · **说明**：需求大厅、项目、进度、节点、成员、集成、测试
- **关联数据表**：`rf_demand`, `rf_demand_bid`, `rf_integration`, `rf_project`, `rf_project_member`, `rf_project_node`, `rf_test`
- **相关页面**：`demand_apply.html`, `demand_detail.html`, `demand_hall.html`, `demand_my.html`, `demand_publish.html`, `integration_apply.html`, `integration_detail.html`, `integration_hall.html`, `integration_publish.html`, `project_apply.html` …等 23 个

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `GET` | `/demands` | `RF.api.biz.demands()` | 是 | 需求大厅 |
| `GET` | `/projects` | `RF.api.biz.projects()` | 是 | 项目大厅 {status,keyword,page} \| 详情 |
| `GET` | `/projects/:id/progress` | `RF.api.biz.progress()` | 是 | 进度明细 → |
| `GET` | `/projects/:id/nodes` | `RF.api.biz.nodes()` | 是 | 节点分组 \| 更新节点 |
| `GET` | `/projects/:id/members` | `RF.api.biz.members()` | 是 | 成员与分组 \| 邀请 |
| `GET` | `/integrations` | `RF.api.biz.integrations()` | 是 | 集成需求 \| \| 详情 |
| `GET` | `/tests` | `RF.api.biz.tests()` | 是 | 测试需求 \| \| 详情 \| 报告 |

### 用户中心 `users` （7 个）

- **路径前缀**：`/users` · **说明**：用户列表/详情/排行/关注/关系/收藏/信用
- **关联数据表**：`rf_favorite`, `rf_user`, `rf_user_follow`
- **相关页面**：`user_collect.html`, `user_credit.html`, `user_edit.html`, `user_follow.html`, `user_home.html`, `user_list.html`, `user_products.html`, `user_projects.html`, `user_rank.html`, `user_settings.html` …等 11 个

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `GET` | `/users` | `RF.api.users.list()` | 是 | 用户列表（检索浏览） |
| `GET` | `/users/:id` | `RF.api.users.detail()` | 是 | 个人主页 → |
| `GET` | `/users/rank` | `RF.api.users.rank()` | 是 | 排行榜 |
| `POST` | `/users/:id/follow` | `RF.api.users.follow()` | 是 | 关注 / 取关 \| DELETE |
| `GET` | `/users/:id/relations` | `RF.api.users.relations()` | 是 | 关注与粉丝 |
| `GET` | `/users/me/collections` | `RF.api.users.collections()` | 是 | 收藏夹 |
| `GET` | `/users/me/credit` | `RF.api.users.credit()` | 是 | 信用等级 |

### 全流程 `flow` （7 个）

- **路径前缀**：`/flow` · **说明**：阶段、门禁、交接物、时间线
- **关联数据表**：`rf_flow_gate`, `rf_flow_handover`, `rf_flow_stage`, `rf_flow_timeline`
- **相关页面**：`flow_gate.html`, `flow_handover.html`, `flow_overview.html`, `flow_stage.html`, `flow_timeline.html`

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `GET` | `/flow/stages` | `RF.api.flow.stages()` | 是 | 全流程阶段定义 |
| `GET` | `/flow/stages/:key` | `RF.api.flow.stage()` | 是 | 阶段详情 |
| `GET` | `/flow/gates` | `RF.api.flow.gates()` | 是 | 阶段门禁列表 |
| `POST` | `/flow/gates/:gateId` | `RF.api.flow.gateVerdict()` | 是 | 提交门禁判定 |
| `GET` | `/flow/handovers` | `RF.api.flow.handovers()` | 是 | 阶段交接清单 |
| `POST` | `/flow/handovers` | `RF.api.flow.confirmHandover()` | 是 | 确认阶段交接 |
| `GET` | `/flow/timeline` | `RF.api.flow.timeline()` | 是 | 项目全流程时间线（阶段 + 节点分组 + 里程碑） |

### 发布中心 `publish` （6 个）

- **路径前缀**：`/publish` · **说明**：模块/产品/玩具/资讯发布与草稿、修订
- **关联数据表**：`rf_news`, `rf_product`, `rf_product_file`, `rf_product_spec`
- **相关页面**：`module_publish.html`, `news_edit.html`, `news_publish.html`, `product_publish.html`, `toy_publish.html`

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `POST` | `/publish/module` | `RF.api.publish.module()` | 是 | 发布草稿（模块 / 组件 / 五金 / 外壳 / 配件 / 3D打印 通用） |
| `POST` | `/publish/product` | `RF.api.publish.product()` | 是 | 发布整机产品（商用 / 具身 / 定制 / 玩具） |
| `POST` | `/publish/toy` | `RF.api.publish.toy()` | 是 | 发布玩具作品 |
| `PUT` | `/publish/:id` | `RF.api.publish.edit()` | 是 | 编辑已有稿件（新闻 / 产品 / 作品通用），编辑后重新进入审核队列 |
| `GET` | `/publish/:id` | `RF.api.publish.revisions()` | 是 | 稿件修订历史 |
| `GET` | `/publish/options` | `RF.api.publish.options()` | 是 | 发布表单可选项（分类 / 协议 / 应用领域 / 难度 / 开源方式） |

### 学习平台 `learn` （5 个）

- **路径前缀**：`/learn` · **说明**：资料、课程、路径、问答
- **关联数据表**：`rf_learn`, `rf_learn_enroll`, `rf_learn_lesson`, `rf_learn_path`, `rf_learn_path_item`
- **相关页面**：`learn_course.html`, `learn_detail.html`, `learn_enroll.html`, `learn_home.html`, `learn_list.html`, `learn_path.html`, `learn_qa.html`

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `GET` | `/learn` | `RF.api.learn.list()` | 是 | 学习资料列表 |
| `GET` | `/learn/:id` | `RF.api.learn.detail()` | 是 | 资料详情 → |
| `GET` | `/learn/courses` | `RF.api.learn.courses()` | 是 | 课程 \| 课程详情 |
| `GET` | `/learn/paths` | `RF.api.learn.paths()` | 是 | 学习路径 \| 报名 \| 进度 |
| `GET` | `/learn/qa` | `RF.api.learn.qa()` | 是 | 问答 \| 提问 |

### 沟通消息 `messages` （5 个）

- **路径前缀**：`/messages` · **说明**：会话、单聊、群聊、项目沟通、资金专项、通知
- **关联数据表**：`rf_conversation`, `rf_group_member`, `rf_message`, `rf_message_group`, `rf_notification`
- **相关页面**：`msg_chat.html`, `msg_fund.html`, `msg_group.html`, `msg_list.html`, `msg_notify.html`, `msg_project.html`

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `GET` | `/messages/conversations` | `RF.api.messages.conversations()` | 是 | 会话列表 → |
| `GET` | `/messages/conversations/:id/messages` | `RF.api.messages.history()` | 是 | 单聊消息 |
| `POST` | `/messages/conversations/:id/messages` | `RF.api.messages.send()` | 是 | 发送消息 |
| `GET` | `/messages/groups` | `RF.api.messages.groups()` | 是 | 分组沟通 \| 项目沟通 \| 资金专项 |
| `GET` | `/messages/notifications` | `RF.api.messages.notifications()` | 是 | 通知 \| 已读 |

### 资金 `funds` （5 个）

- **路径前缀**：`/funds` · **说明**：总览、流水、支付、提现、发票
- **关联数据表**：`rf_fund_account`, `rf_fund_flow`, `rf_invoice`, `rf_payment`, `rf_withdraw`, `rf_withdraw_account`
- **相关页面**：`fund_detail.html`, `fund_invoice.html`, `fund_overview.html`, `fund_pay.html`, `fund_pay_result.html`, `fund_withdraw.html`

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `GET` | `/funds/overview` | `RF.api.funds.overview()` | 是 | 资金概览 → |
| `GET` | `/funds/records` | `RF.api.funds.records()` | 是 | 明细 |
| `POST` | `/funds/pay` | `RF.api.funds.pay()` | 是 | 支付 / 托管 |
| `POST` | `/funds/withdraw` | `RF.api.funds.withdraw()` | 是 | 提现 |
| `GET` | `/funds/invoices` | `RF.api.funds.invoices()` | 是 | 发票 \| 申请 |

### 工单 `tickets` （4 个）

- **路径前缀**：`/tickets` · **说明**：提交、我的工单、详情、回复
- **关联数据表**：`rf_ticket`, `rf_ticket_log`, `rf_ticket_reply`
- **相关页面**：`ticket_close.html`, `ticket_detail.html`, `ticket_flow.html`, `ticket_list.html`, `ticket_resolve.html`, `ticket_submit.html`

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `POST` | `/tickets` | `RF.api.tickets.submit()` | 是 | 提交工单 {type,level,title,content,attachments,relatedId} → |
| `GET` | `/tickets/mine` | `RF.api.tickets.mine()` | 是 | 我的工单 |
| `GET` | `/tickets/:id` | `RF.api.tickets.detail()` | 是 | 工单详情 → |
| `POST` | `/tickets/:id/replies` | `RF.api.tickets.reply()` | 是 | 工单回复 \| 关闭 \| 评价 |

### 报名 `enroll` （3 个）

- **路径前缀**：`/enroll` · **说明**：课程报名、赛事报名
- **关联数据表**：`rf_learn_enroll`
- **相关页面**：`learn_enroll.html`, `toy_contest.html`, `toy_contest_apply.html`, `toy_contest_detail.html`

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `POST` | `/enroll/course` | `RF.api.enroll.course()` | 是 | 课程报名 |
| `POST` | `/enroll/contest` | `RF.api.enroll.contest()` | 是 | 赛事报名 |
| `GET` | `/enroll/contest/:contestId` | `RF.api.enroll.contestInfo()` | 是 | 赛事详情与规则 |

### 文件 `files` （2 个）

- **路径前缀**：`/files` · **说明**：上传、下载令牌
- **关联数据表**：`rf_download_token`, `rf_file`
- **相关页面**：`download_app.html`, `resource_center.html`, `resource_download.html`, `resource_download_all.html`, `resource_token.html`

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `POST` | `/files/upload` | `RF.api.files.upload()` | 是 | 上传（multipart） |
| `POST` | `/files/download-token` | `RF.api.files.token()` | 是 | 下载令牌 |

### 评价审核 `review` （2 个）

- **路径前缀**：`/reviews` · **说明**：评价对象、提交评价
- **关联数据表**：`rf_comment`, `rf_design_review`, `rf_product_review`
- **相关页面**：`design_review.html`, `news_review.html`, `news_review_flow.html`, `product_review.html`, `product_review_write.html`

| 方法 | 路径 | JS 调用 | Mock 实现 | 说明 |
|------|------|---------|-----------|------|
| `GET` | `/reviews/targets` | `RF.api.review.targets()` | 是 | 可评价订单列表 |
| `POST` | `/reviews` | `RF.api.review.create()` | 是 | 提交评价 |

## 三、接口 ↔ 数据表 对照

| 路径前缀 | 数据表 |
|----------|--------|
| `/admin` | `rf_user`, `rf_role`, `rf_permission`, `rf_user_role`, `rf_role_permission`, `rf_login_log`, `rf_ip_whitelist`, `rf_2fa_secret`, `rf_api_key`, `rf_operation_log`, `rf_comment`, `rf_design_review`, `rf_category`, `rf_product`, `rf_news`, `rf_ticket`, `rf_project`, `rf_ad_slot` |
| `/ai` | `rf_ai_session`, `rf_ai_message`, `rf_llm_config`, `rf_ai_requirement`, `rf_ai_split`, `rf_ai_match`, `rf_ai_usage`, `rf_ai_template` |
| `/apply` | `rf_apply`, `rf_project_member`, `rf_demand_bid` |
| `/auth` | `rf_user`, `rf_user_credential`, `rf_sms_code`, `rf_verify_apply`, `rf_login_log` |
| `/components` | `rf_product` |
| `/demands` | `rf_demand`, `rf_demand_bid` |
| `/design` | `rf_design_demand`, `rf_design_task`, `rf_design_drawing`, `rf_design_version`, `rf_design_review`, `rf_design_bom` |
| `/enroll` | `rf_learn_enroll` |
| `/files` | `rf_file`, `rf_download_token` |
| `/flow` | `rf_flow_stage`, `rf_flow_gate`, `rf_flow_handover`, `rf_flow_timeline` |
| `/forum` | `rf_board`, `rf_post`, `rf_post_reply` |
| `/funds` | `rf_fund_account`, `rf_fund_flow`, `rf_payment`, `rf_withdraw`, `rf_withdraw_account`, `rf_invoice` |
| `/integrations` | `rf_integration` |
| `/learn` | `rf_learn`, `rf_learn_lesson`, `rf_learn_path`, `rf_learn_path_item`, `rf_learn_enroll` |
| `/messages` | `rf_conversation`, `rf_message`, `rf_message_group`, `rf_group_member`, `rf_notification` |
| `/modules` | `rf_product`, `rf_product_interface`, `rf_product_file` |
| `/news` | `rf_news`, `rf_news_audit`, `rf_news_stats`, `rf_comment`, `rf_like`, `rf_subscribe` |
| `/production` | `rf_production_line`, `rf_production_order`, `rf_production_progress`, `rf_capacity`, `rf_capacity_booking`, `rf_bom`, `rf_bom_item`, `rf_procurement`, `rf_supplier`, `rf_equipment`, `rf_worker`, `rf_qc_report`, `rf_yield_stat`, `rf_process`, `rf_tooling`, `rf_warehouse`, `rf_logistics`, `rf_delivery`, `rf_cert`, `rf_production_case`, `rf_production_cost` |
| `/products` | `rf_product`, `rf_product_spec`, `rf_product_file`, `rf_product_review`, `rf_favorite`, `rf_product_compare` |
| `/projects` | `rf_project`, `rf_project_node`, `rf_project_member` |
| `/publish` | `rf_product`, `rf_news`, `rf_product_spec`, `rf_product_file` |
| `/resource` | `rf_file`, `rf_download_pack`, `rf_download_token`, `rf_download_log`, `rf_fund_account`, `rf_withdraw` |
| `/reviews` | `rf_product_review`, `rf_design_review`, `rf_comment` |
| `/tests` | `rf_test` |
| `/tickets` | `rf_ticket`, `rf_ticket_reply`, `rf_ticket_log` |
| `/toys` | `rf_product`, `rf_product_spec`, `rf_learn_enroll` |
| `/users` | `rf_user`, `rf_user_follow`, `rf_favorite` |
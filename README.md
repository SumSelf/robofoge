# ROBOFORGE 机甲工场 · 机器人聚合开源平台（前端静态站）

> 人类帮助 AI 以机器人方式进入现实世界的桥梁 —— 从商业需求到定向机器人**设计 → 集成 → 测试 → 流水线生产**的全流程互联网化。

## 一、项目概览

| 项 | 说明 |
|---|---|
| 站点名称 | ROBOFORGE 机甲工场 |
| 交付形态 | 纯前端静态站（HTML + CSS + JS），可直接部署发布 |
| 页面规模 | **234 页** = 首页 1 + 前台 204 + 后台 29 |
| 图片资源 | **全部 WebP**（264 张，8.9 MB）+ 矢量图标 599 个（0.6 MB），图片目录合计 **9.7 MB** |
| 数据模式 | `mock`（内置模拟数据，零后端可跑）/ `real`（真实 HTTP 接口）双版本，一键切换 |
| 语言 | 中 / 英双语，全站 `data-i18n` + `data-zh/data-en` 双轨，实时切换（词典 2583 条） |
| 适配 | PC 顶部折叠浮窗导航（≥900px）+ 移动底部 Tab（<900px），导航统一抽离为 `assets/css/nav.css` |
| 风格 | 前台：工业 50% + 科技 20% + 玩具 20% + 社交 10%；**四种风格共享同一张全站背景**，差异只体现在前景组件（圆角/描边/按钮/发光） |

## 〇·补、图片资源

| 类别 | 格式 | 数量 | 体积 |
|---|---|---|---|
| AI 主视觉 / 品类实拍 / 场景图 | WebP | 264 张 | 8.9 MB |
| 图标 / 品牌标识 / 背景纹理 | SVG | 599 个 | 0.6 MB |
| 保留 PNG（WebP 反而更大） | PNG | 4 张 | 0.1 MB |

切图规格统一 7 种：16:9 原图 / 卡片 4:3 / 方图 1:1 / 缩略 16:9 / 长条 / 9:16 竖版 / 横幅条，
命名 `{pagename}_{id}`，按 `pagename_id` 方式嵌入。

> 原 PNG 94.7 MB 已全量转 WebP（**省 91%**），原文件已删除。
> design_hero / flow_hero / production_hero / nav_preview_pc 四张为纯色示意图，
> WebP 编码后反而更大，故保留 PNG。

---

## 一·补、本次增量：设计 / 集成 / 测试 / 流水线生产闭环

主流程由「需求 → 生产」扩展为五段链路，每段均有独立页面与前后台管理：

```
商业需求 → 设计 → 集成 → 测试 → 流水线生产
   │        │       │       │          │
  Gate1   Gate2   Gate3   Gate4      Gate5
（需求冻结）（设计冻结）（集成验收）（测试放行）（量产放行）
```

| 板块 | 页数 | 代表页面 |
|---|---|---|
| 设计中心 | 10 | design_home / design_demand(_detail/_publish) / design_task / design_collab / design_drawing / design_review / design_version / design_bom |
| 智造产线 | 32 | production_home / line_* / capacity / booking / schedule / gantt / order_* / progress / bom* / procurement / supplier* / smt / assembly / burnin / qc* / yield / process / tooling / cost / warehouse / logistics / delivery / equipment / worker / cert / case |
| 全流程 | 5 | flow_overview / flow_stage / flow_gate / flow_handover / flow_timeline |
| 后台增量 | 8 | design / production / production_line / production_order / login_log / ip_whitelist / 2fa / apikey |

**后台独立化**：与前台账号体系完全隔离，独立登录入口、强制双因子认证、IP 白名单、来源 IP 显示、登录留痕与失败锁定策略说明。

## 一·再补、导航与频道调整（本次）

### 1. 统一导航（抽离为独立层）
| 端 | 形态 | 说明 |
|---|---|---|
| PC（≥900px） | **顶部折叠浮窗** | 固定顶部 56px，**实色不透明**（#0A1526），全尺寸唯一的顶部条：返回按钮 + Logo + 主频道（首页/论坛/模块/mini机器人/学习）+ 全站搜索 + 中英 + 消息/我的 + 「全部分类」折叠开关；点击展开全频道索引浮层（8 大分组 + 快捷发布入口），带遮罩与 Esc 关闭 |
| 移动（<900px） | **底部 Tab** | 6 项：首页 / 论坛 / 模块 / **mini机器人** / 学习 / 我的；顶部条与 PC 同一套（实色），窄屏自动隐藏搜索框 |

实现文件：`assets/css/nav.css` + `build_lib.nav_pc()` / `TABBAR`，全站 231 页共用同一份骨架。

### 2. 导航单一化 + 返回上移 + 抬头移除

- PC 端返回按钮集成进顶部悬浮栏最左侧（优先 `history.back()`，无历史时回首页）。
- 各页面原有的 `.topbar` 抬头（标题文字）**全部移除**；PC 端整条 topbar 隐藏由悬浮栏接管，移动端保留精简条（44px，仅返回 + Logo + 语言 + 消息 + 我的）。
- **旧的 `.topbar` 已从全部 231 页移除**（此前 PC/窄屏两套顶部条并存，窄屏回落到的半透明 topbar 正是「透明导航」的根因）。
- 折叠浮层同步实色。
- **导航选中态改为按 URL 自动判定**（`RF.syncNavActive`）：先用「导航项 href 文件名 == 当前页文件名」精确匹配，再用文件名前缀回退（如 `toy_list.html` → `toy`）。此前 104 页的 `data-tab` 是生成期写死的错误值（例如 `toy_home.html` 写成了 `module`），导致点进 mini机器人 却高亮「模块」；现改为运行时判定，重新生成也不会复发。
- 主频道精简为 5 项（首页/论坛/模块/mini机器人/学习），「我的」由右上角头像入口承担，避免右侧拥挤。
- 折叠浮层内会用红框标出当前页位置；访问 AI 系列页面时右侧悬浮球显示活跃态。

### 3. AI 智造 → 右侧悬浮球
- 底部 Tab 不再占用 AI 位置，**AI 改为主导航外的常驻悬浮球**，固定在屏幕右侧垂直居中，PC/移动均显示。
- 独立专属图标：`assets/img/gen/brand/ai_orb.svg`（机器人芯片头 + 电路天线 + 红色波形嘴，与站内其它图标完全区分）。
- 点击弹出 AI 面板：快捷提问、开始对话、AI 首页；移动端改为底部上浮面板。
- AI 原 Tab 位置由 **学习平台** 接管。

### 4. 新闻 × 论坛 合并为「论坛」频道
- 原「资讯宣发」与「论坛」合并为一个频道，导航命名为 **论坛**，入口 `pages/forum_home.html`。
- 频道首页同时承载：头条宣发 → 最新资讯（列表 + 加载更多）→ 论坛板块 → 置顶精华 → 最新帖子 → 活跃用户。
- 首页新增**快讯滚动条**（横向滚动跑马灯）与**论坛·资讯列表栏目**，加载更多统一走 `data-more="newsitem:#newsFeed"` 行式模板，杜绝插入大图卡片导致格式不一。

### 5. 渲染一致性修复
- 社交主题（论坛/学习/用户）原为浅白底，与全站蓝黑不一致，**已改为深蓝黑底**并保留社交化圆角与气泡元素；个人主页不再变白。
- 全站 231 页 HTML 结构校验通过（无未闭合/孤立标签）。

## 一·末、全站统一背景

**所有前台页面共享同一张背景**：深蓝黑底 `#0B1420` + 统一底纹 `assets/img/gen/bg/bg_unified.svg`（工业网格 + 电路走线 + 齿轮/六边形机械轮廓 + 微光点 + 红色点缀 + 暗角）。

| 层 | 规则 |
|---|---|
| `body` | `#0B1420 url(bg_unified.svg) center/cover fixed` |
| `.app` | 与 body **完全相同**的定位与底图 → 内容区与页面背景视觉连续，看不出边界 |
| `.app::before` | 统一叠加一层极淡电路纹理（opacity .16），增强工业感但不改变底色 |
| `.stage` | 改为 `transparent`（原先压了一层半透明黑，是各页底色偏暗不一的元凶之一） |
| hero | 保留题材主视觉图，但遮罩统一为 `rgba(11,20,32,…) → #0B1420`，主视觉自然融进页面底 |

**四种风格不再各自定义背景**，只保留前景差异：
- 工业风：直角卡片、红蓝描边（默认基调）
- 玩具风：22px 大圆角、鲜艳红蓝胶囊按钮、亮色卡片（前景已由浅色改为深色，与底图统一）
- 科技风：青蓝发光边、内投影、渐变进度条
- 社交风：18px 圆角、气泡容器、头像优先

**后台独立**：`body.admin` 仍为纯素浅色（`--a-bg`），与前台完全分离，符合"纯素、严谨、独立管理"要求。

## 一·终、本轮增量（翻页 / 闪马主打产品 / 备案 / 第二批实拍）

### 1. 左右翻页（原始需求缺项，已补齐）
新增 `.pager` 横向翻页容器 + `RF.bindPager()`：支持左右箭头、页码指示、指示点、触摸滑动，容器高度自动跟随当前页。
- **15 个页面接入**（原估 12 个超长页，自动分页函数额外覆盖了 3 个临界页）：首页 4 页、产线详情 6 页、工单详情 6 页、论坛 6 页、模块/产线/设计中心 5 页等。
- 实现方式：`build_lib.auto_pager()` 按区块预估高度自动分组；首页通过 `paged_sec()` 手动分为「资讯 / 产品 / 制造 / 社区」4 页。
- 每页内容控制在约一屏，解决「单页超过 3 屏」的问题。

### 2. 闪马 AI 嵌入式极速运行平台 SM-H7（主打产品）
新增 3 个页面：

| 页面 | 内容 |
|---|---|
| `pages/product_shanma_h7.html` | 产品宣传：核心参数、图册（4 图翻页）、硬件规格 14 项、外设接口 11 类、4 路步进电机、3D 尺寸与结构文件、软件平台 6 项、应用场景、宣发报道 |
| `pages/product_shanma_h7_docs.html` | 使用资料一套：快速上手 4 步、文档手册 8 份、教学视频 8 讲、3D/工程文件 4 份、软件下载 6 项、打包下载 |
| `pages/product_shanma_h7_case.html` | 应用案例：性能实测 6 项、典型案例 4 个、客户评价 3 条 |

产品已置顶进入 `products` 列表，并在首页横幅、导航浮层「产品与项目」组、网站地图同时露出；配套 3 条厂商宣发新闻。

### 3. 页脚备案与联系信息
全站页脚新增联系卡片：**蜀ICP备18013136号**、Made by 闪马科技个人工作室、联系人 万三（SumSelf）、电话 +86 18683379773、微信 sumstc 及二维码 `assets/img/gen/brand/wx_qr.webp`。

### 4. 第二批 AI 实拍图（6 张 × 7 规格）
产品实拍：闪马 SM-H7 主板 / 商用清洁机器人 / 具身人形机器人；产线实拍：SMT 贴片线 / 装配工位 / 质检台。
每张切出 7 种规格（16:9 原图、card、方图、缩略图、长条、9:16 竖版、横幅），已接入产品主图、宣发配图与产线页横幅。

## 一·校、模拟数据真实化（发布前清洗）

保留全部数据结构与数量，仅重写模板化文案，使其具备真实站点的内容特征。

| 清洗项 | 处理前 | 处理后 |
|---|---|---|
| 产品描述 | 101 条共用 1 套模板 | 按 10 大品类各 6 套句式轮转，**101/101 唯一** |
| 新闻标题/摘要 | 63 条仅 11 种 | 15 类事件句式 × 品牌 × 产品名，**63/63 唯一** |
| 项目名 | `XX #1…#30` | 30 个真实项目名 +（一期/二期/试点/量产/改款/A 型/B 型）后缀 |
| 用户名 | `机电老张00`…`打印狂魔05` 等编号后缀 | 30 个真实昵称 + 个性简介（1332 处后缀清除） |
| 需求/集成/测试标题 | 24 条仅 2 种、18 条仅 10/5 种 | 全部重写为专业条目名，**24/24、18/18、18/18 唯一** |
| 产线名 | `蓝鲸智造 组装线 #1` | `蓝鲸智造 深圳一号总装线` 等 14 种厂线命名 |
| 产品文档名 | 8 份文档名全站重复 ×100 | 按品类差异化（STEP/PDF/URDF/STL/BOM 等） |
| 评论/帖子摘要 | 1 句重复 40 次 | 50 条素材池，最大重复 2 次 |
| 帖子正文 | 4 句固定数组 | 5 套情境化正文 + 每帖更新时间 |
| 数值字段 | 等距递增（200+371i） | 业务化离散值（8,000h / ±0.03mm / 3% 故障率 等） |
| 日期 | `2026-01-01…12-12` 机械递增 | 分散随机日期（月≠日） |
| 品牌分布 | 8 家均分（13/13/13…） | 长尾形态（5:4:3:3:2:2:2:2:1:1:1:1） |

**保留项（按需求不动）**：`assets/js/api.mock.js` 模拟数据与 `api.real.js` 真实接口双版本、`data/mock_data.json` 完整数据、全部页面数量与结构。


## 九、接口与数据库文档（后端对接）

站点已完成前后端分离，配套提供完整的接口与数据库设计文档，位于 `docs/`：

| 文件 | 内容 |
|---|---|
| `docs/README.md` | 前端接入方式（mock/real 切换）、JS 使用点清单、后端实现规范、联调检查清单 |
| `docs/API.md` | **193 个接口**清单：方法 / 路径 / JS 调用 / Mock 实现状态 / 关联数据表 |
| `docs/DATABASE.md` | **106 张表**的对象形式设计：字段 / 类型 / 约束 / 索引 / 核心对象关系 |
| `docs/schema.sql` | MySQL 8 建表脚本，含初始化数据，按外键拓扑排序可直接整文件执行 |
| `docs/mock_requests.md` | **965 条**原始 HTTP 请求（193 接口 × 5）+ 数据结构转换 + 对应 SQL |
| `docs/mock_seed.sql` | 上述请求落地为 **1140 条** INSERT（含外键种子），可直接执行 |
| `docs/mock_audit.md` | 走查报告：1140 条 SQL 的 8 项校验，当前 **0 问题** |
| `docs/mock_responses.md` | **965 条**响应报文（193 接口 × 5，含异常场景） |
| `docs/response_audit.md` | 响应数据检查报告：22 项校验，当前 **0 问题** |

### 快速对接

```bash
# 1. 建库 + 灌入模拟数据（得到一个装满数据的可运行环境）
mysql -u root -p < docs/schema.sql
mysql -u root -p roboforge < docs/mock_seed.sql

# 2. 前端指向后端网关
window.RF_CONFIG = { apiBase: 'https://api.example.com/api/v1' };

# 3. 切换到真实接口
RF.setMode('real');
```

接口分组（23 个）：`production`(30) `news`(15) `design`(13) `ai`(11) `admin`(11)
`auth`(9) `products`(9) `modules`(9) `apply`(9) `resource`(9) `forum`(8) `toys`(7)
`biz`(7) `users`(7) `flow`(7) `publish`(6) `learn`(5) `messages`(5) `funds`(5)
`tickets`(4) `enroll`(3) `files`(2) `review`(2)

数据库域（15 个）：用户权限(14) 内容宣发(11) 论坛(3) 学习(5) 产品(6) 需求项目(8)
设计(6) 生产(21) 全流程(4) AI(8) 沟通(5) 资金(6) 工单(3) 文件(4) 系统(2)


## 二、目录结构

```
roboforge/
├── index.html                 # 首页（门户）
├── pages/                     # 前台 201 页
├── admin/                     # 后台 29 页
├── assets/
│   ├── css/
│   │   ├── base.css           # 基础重置 / 栅格 / 排版
│   │   ├── theme.css          # 工业·玩具·科技·社交 四套主题变量 + 后台素色主题
│   │   ├── components.css     # 卡片/列表/表单/对话框/步骤条/标签/分页等组件
│   │   └── admin.css          # 后台专用（纯素、严谨、高密度）
│   ├── js/
│   │   ├── api.mock.js        # 【模拟数据】全量业务数据（644KB，19 大数据集，含全部图片路径）
│   │   ├── api.real.js        # 【真实接口】23 个分组、带完整 @param / @returns 类型注释
│   │   ├── app.js             # 运行时：数据模式切换 / 双语 / Tab / 筛选 / 加载更多
│   │   ├── i18n.js            # 1561 条中英词典
│   │   └── admin.js           # 后台交互
│   └── img/
│       ├── design/            # AI 主视觉及切图（pagename_id 命名）
│       └── gen/               # 程序化贴图库（product/avatar/icon/bg/ui/cover/brand/illu/ad，含 _b/_r/_w/_p 四色图标）
└── data/
    ├── mock_data.json         # 模拟数据原始字典（后端建表参考）
    └── img_index.json         # 贴图索引（设计图 → 切图映射）
```

### 链接走查补充页（19 页）
对全站 4688 处链接做走查后，为原本 `href="#"` 的按钮补齐落地页：

| 类别 | 页面 |
|---|---|
| 发布类 | module_publish、product_publish、toy_publish、news_edit |
| 申请承接类 | project_apply、project_invite、demand_apply、integration_apply、test_apply |
| 报名类 | learn_enroll、toy_contest_apply |
| 资金类 | fund_withdraw、fund_pay_result |
| 互动与资源 | product_review_write、resource_download_all、resource_token |
| 工单类 | ticket_resolve、ticket_close |
| 搜索类 | toy_search |

配套：新增 11 组模拟数据（publishes / applies / enrolls / withdraws / payResults / reviews / bulkFiles / tokens / ticketOps / hotwords / newsEdit），api.real.js 新增 publish / apply / enroll / resource / review 五个接口分组。

走查结果：站内页面互链 0 缺失、图片引用 5597 处 0 缺失；剩余 `href="#"` 仅 8 处（AI 快捷提问与聊天快捷回复，由 `data-quick` 交给 JS 填入输入框）。

## 三、页面清单

### 前台（按主次排序）
1. **新闻宣发 / 浏览**（13 页）：列表、详情、分类、品牌、专题、排行榜、搜索、发布、草稿箱、我的发布、审核、审核流程、订阅、数据统计
2. **模块与组件**（14 页）：模块首页、列表、详情、对比、搜索、玩法、玩法详情、方案、硬件列表/详情、3D 打印、外壳、配件
3. **玩具机器人**（9 页）：玩具首页、列表、详情、DIY、定制、3D 打印、赛事、赛事详情、作品秀、排行榜
4. **AI 智造**（12 页）：AI 首页、对话、需求提交、需求拆分、项目生成、资源匹配、集成方案、LLM 配置、新增 LLM、模板、历史、成本、工单
5. **学习资料 / 论坛**（12 页）：论坛首页、板块、帖子、发布、搜索、我的、学习首页、课程、课程详情、学习路径、问答、资料列表
6. **产品**（11 页）：产品首页、分类索引、列表、详情、搜索、筛选、对比、评价、收藏、下载中心、资源中心
7. **需求 / 项目 / 集成 / 测试**（15 页）：需求大厅、需求详情、发布、我的需求；项目大厅、详情、发布、我的、成员、节点、进度；集成大厅、详情、发布；测试大厅、详情、发布、报告
8. **用户**（12 页）：注册、登录、找回密码、个人主页、用户列表、排行、编辑、认证、关注、收藏、信用、设置、我的产品、我的项目
9. **沟通 / 工单 / 资金**（11 页）：消息列表、单聊、群聊、项目沟通、资金沟通、通知；工单列表、详情、提交、流程；资金总览、明细、支付托管、发票
10. **其他**（15 页）：关于、联系、帮助、反馈、协议、隐私、站点地图、App 下载、频道等

### 后台（21 页）
登录、控制台、用户管理、角色权限、内容管理、发布管理、评论管理、工单管理、项目管理、资金管理、沟通管理、审核、审核流程、新闻、产品、分类、论坛、LLM 配置、广告位、统计、日志、设置

## 四、部署

站点为纯静态资源，任意静态服务器均可：

```bash
# 方式一：本地预览
cd roboforge && python3 -m http.server 8080

# 方式二：Nginx（推荐）

```nginx
server {
  listen 80;
  server_name roboforge.com;
  root /var/www/roboforge;
  index index.html;

  # 只压文本类，WebP/PNG 已压缩过，再压是白耗 CPU
  gzip on;
  gzip_types text/html text/css application/javascript
             application/json image/svg+xml;
  gzip_min_length 1024;
  gzip_comp_level 6;

  # 图片长缓存（WebP 文件名不变，可放心 immutable）
  location ~* \.(webp|png|svg)$ {
    expires 30d;
    add_header Cache-Control "public, immutable";
    sendfile on;
    tcp_nopush on;
  }

  # HTML 不缓存，保证发版即时生效
  location ~* \.html$ {
    expires -1;
    add_header Cache-Control "no-cache";
  }

  location / {
    try_files $uri $uri/ =404;
  }
}
```

> WebP 现代浏览器全支持（覆盖率 >97%），未做 `<picture>` 回退。
> 若要兼容极旧浏览器，可在 `assets/img/` 保留一份 PNG 副本并加 `<picture>` 标签。

# 方式三：Node.js 静态服务（仅应急，不建议生产）
server {
    listen 80;
    server_name roboforge.example.com;
    root /var/www/roboforge;
    index index.html;
    location / { try_files $uri $uri.html $uri/ /index.html; }
    location ~* \.(js|css|png|svg|jpg)$ { expires 30d; add_header Cache-Control "public"; }
}

# 方式三：对象存储 / CDN（腾讯云 COS、Vercel、Netlify 等）直接上传 roboforge/ 目录
```

注意：站点根目录为 `roboforge/`，必须整目录上传，保持 `assets/` 与 `pages/`、`admin/` 的相对层级。

## 五、前后端对接

1. **默认 mock 模式**：打开即用，无需后端。所有数据来自 `assets/js/api.mock.js`。
2. **切到真实接口**：在浏览器控制台执行 `RF.setMode('real')`（或写入 `localStorage.rf_mode = 'real'`）。
3. **配置后端地址**：编辑 `assets/js/api.real.js` 顶部的 `BASE_URL` 与 `TOKEN_KEY`。
4. **接口契约**：`api.real.js` 中每个方法均带有：
   - `@param` 请求参数说明
   - `@returns` 返回结构（TypeScript 风格类型注释）
   - 统一的响应包装 `{ code, message, data, traceId }`
5. **资源路径**：后端返回的图片若使用相对路径，请以站点根为基准（如 `assets/img/...`），前端 `RF.asset()` / `deepPrefix()` 会自动按当前页面层级补全前缀；也可直接返回完整绝对 URL。

## 六、设计规范

- **主色**：蓝 `#2E7CF6` / 深蓝 `#1B3A6B`；**辅色**：红 `#E23B3B`；**中性**：钢灰 `#8896A8`、深底 `#0B1F35`
- **四套前台主题**（`theme.css`）：`industrial` 工业（金属栅格 + 铆钉 + 冷光）、`toy` 玩具（圆角 + 明快 + 波点）、`tech` 科技（发光边 + 网格 + 深色）、`social` 社交（轻快 + 头像 + 圆卡）；后台统一素色 `admin`
- **切图命名**：`{pagename}_{id}`（如 `news_hero_card.png`、`module_hero_m.png`），索引见 `data/img_index.json`
- **单页长度**：每屏内容控制在 3 屏以内，超出部分采用左右翻页 / Tab 分段承载

## 七、二次开发提示

- 页面为静态骨架 + 数据驱动，列表/详情的增量渲染走 `app.js` 的 `data-more` 与 `data-act` 事件委托。
- 新增页面只需复制同类型页面、替换 `page_shell()` 的标题与 body，样式自动继承。
- 双语文案统一写入 `i18n.js`（UI 文案 `data-i18n`）与节点 `data-zh/data-en`（业务数据）。

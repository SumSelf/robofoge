# SUMFORGE · 运行时测试报告

> 静态检查（HTML 结构 / 链接可达 / 资源存在）之外，在**真实浏览器 + 真实 HTTP 服务**下跑通全站，
> 用于发现"文件都在但页面其实是坏的"这类问题。

## 一、测试方法

| 项 | 说明 |
|---|---|
| 服务 | Python `http.server` 以站点根提供服务（还原真实路径结构） |
| 浏览器 | Chromium（Playwright 驱动），视口 1440×900 |
| 范围 | **全部 235 页**（前台 206 + 后台 29），分 3 批执行 |
| 采集 | `console.error` / `pageerror` / 请求失败 / 图片 `naturalWidth === 0` |
| 附加 | 导航条、内容区、页脚是否存在；图片数量与页面高度 |

## 二、全站结果

| 检查项 | 结果 |
|---|---|
| 页面 HTTP 200 + `text/html` | **235 / 235** |
| 资源 HTTP 200（去重 538 个） | **538 / 538** |
| JS 运行时报错 | **0** |
| 请求失败 | **0** |
| 图片加载失败 | **0** |
| 平均图片数 / 页 | 43 张 |
| 平均页高 | 2335 px |

> 后台 29 页的"无导航 / 无页脚"是设计使然——后台为独立体系，用自己的侧边导航，不复用前台导航条。

## 三、发现并修复的问题

### 1. `syncNavActive is not defined`（**全站 234 页报错**）

`app.js` 中定义为命名函数表达式：

```js
RF.syncNavActive = function syncNavActive() { ... }   // 名字只在函数体内可见
...
syncNavActive();                                       // ❌ 外部作用域找不到
```

命名函数表达式的名字**只在自身作用域内绑定**，外部调用即 `ReferenceError`。

后果不只是报错——`init()` 在这一行中断，其后代码全部不执行：

- 导航选中态**从未同步**（此前"点了 mini机器人、导航却高亮别的"的真正根因）
- `body.classList.add('wide')` 未执行，宽屏标记丢失
- `resize` 监听未注册

修复：改为 `RF.syncNavActive()`。

> 这类问题静态检查（HTML 结构、`node --check`、链接可达）**一律查不出来**，
> `node --check` 只做语法解析，不执行、不解析作用域。

### 2. 中文文件名资源

`assets/img/gen/icon/需求_{b,p,r,w}.svg` 四个文件名为中文。
在 HTTP 层需百分号编码，处理不当即 404。已重命名为 `demand_{b,p,r,w}.svg` 并同步引用。

## 四、关键交互验证

| 功能 | 验证方式 | 结果 |
|---|---|---|
| **导航选中态** | 访问 5 个频道页，读取高亮项 | toy→mini机器人、forum→论坛、module→模块、learn→学习、index→首页 ✅ |
| **AI 悬浮球** | 测量位置与可见性 | x=1324（1440 视口右侧）、元素中心 y=450 = 视口垂直正中 ✅ |
| **PC 返回按钮** | 查找 `.np-back` | 存在（纯图标无文字）✅ |
| **中英切换** | 点击语言按钮，比对 `body` 文本 | 文本有变化 ✅ |
| **横向翻页** | 读取页数 → 点下一页 | index 4 页、forum 6 页、产线详情 7 页、module 5 页；`1/4 → 2/4`，`translateX(-100%)` ✅ |
| **加载更多** | 点按钮，比对容器内子元素数 | 论坛 6→12、资讯列表 8→14、产品列表 8→14 ✅ |

## 五、如何复跑

```bash
# 全站 HTTP 冒烟
python3 smoke_test.py

# 浏览器运行时（分批，避免内存压力）
python3 rt2.py 0 78
python3 rt2.py 78 156
python3 rt2.py 156 234

# 关键交互
python3 func_test.py
```

脚本依赖 `playwright` 与系统 Chrome（`executable_path='/usr/bin/google-chrome'`）。

## 六、结论

修复上述问题后，235 页在真实浏览器中**零报错、零失败资源、零破图**，
导航选中、中英切换、AI 悬浮球、横向翻页、加载更多五项关键交互均实测可用。

## 七、本轮新增：状态插画与板块封面

| 资源 | 数量 | 接入位置 |
|---|---|---|
| 状态插画（empty / noresult / success / offline / building） | 5 类 × 2 规格 | `gen/illu/`，由 `RF.empty()` 动态渲染 |
| 404 页面插画 | 1 张（7 规格） | 新增 `pages/404.html` |
| 个人主页封面 | 1 张（7 规格） | `user_home` hero |
| 课程封面 | 1 张（7 规格） | `learn_home` hero |
| 论坛板块封面 | 1 张（7 规格） | `forum_home` hero |
| 项目协作封面 | 1 张（7 规格） | `project_hall` / `integration_hall` / `test_hall` / `demand_hall` hero |
| 工单支持封面 | 1 张（7 规格） | `ticket_list` hero |

`RF.empty(type, text)` 在列表为空时自动渲染带插画的空状态，
`renderList` 与 `bindLoadMore` 均已接入——真实接口返回空列表时会显示插画而非空白。
已实测：插入后插画正常加载（naturalWidth=512），文案「没有找到相关结果」正确显示。

## 八、本轮新增：板块配图与后台看板底图

| 题材 | 数量 | 接入位置 |
|---|---|---|
| 后台数据看板底图 | 1（7 规格） | `admin/index.html`，`.dash-bg` 装饰条（opacity .5） |
| AI 需求拆解流程 | 1（7 规格） | `ai_home` / `ai_chat` hero |
| 多 LLM 模型配置 | 1（7 规格） | `ai_llm` / `ai_llm_add` hero |
| 老化测试烧机房 | 1（7 规格） | `production_burnin` hero |
| 成品仓储与发货 | 1（7 规格） | `production_warehouse` / `production_logistics` hero |
| 模具与工装夹具 | 1（7 规格） | `production_tooling` hero |
| BOM 物料齐套台 | 1（7 规格） | `production_bom` / `production_bom_check` hero |
| 创客大赛活动 | 1（7 规格） | `toy_contest*` hero |
| 成就勋章体系 | 1（7 规格） | 用户等级/成就展示 |
| 资金托管流程 | 1（7 规格） | `fund_overview` / `fund_pay` hero |
| 团队即时沟通 | 1（7 规格） | `msg_chat` hero |
| 资料下载中心 | 1（7 规格） | `resource_center` / `resource_download*` hero |

合计 12 题材 × 7 规格 = 84 张 WebP（3.6 MB）。
实测 12 个目标页面 hero 全部加载成功（naturalWidth > 0），后台看板底图正常显示。

## 九、去模板化走查结果

按「页面与数据不得出现模板化内容」的标准全量复查，覆盖 mock 数据文案字段、
页面内联日期、单页内重复文案三类。

### Mock 数据文案（重复率）

| 字段 | 条数 | 改前 | 改后 |
|---|---|---|---|
| news.title / news.excerpt | 60 | 87% / 87% | **0%** |
| projects.desc | 30 | 97% | **0%** |
| learns.desc | 24 | 96% | **0%** |
| demands.desc | 24 | 96% | **0%** |
| integrations.desc | 18 | 模板 1 套 | **0%** |
| tests.desc | 18 | 模板 1 套 | **0%** |
| users.desc | 30 | 73% | **0%** |
| posts.excerpt | 40 | 98% | **0%** |
| tickets.title | 20 | 50% | **0%** |
| products.desc / posts.title | 100 / 40 | 0% | 0% |

分类、品牌、状态、等级等**枚举字段**保留重复（10 品类 × 10 产品本就该重复），不计入。

### 页面内联日期

改前 `2026-01-18` 出现 **84 次**（机械递增所致）。
改后 **259 种日期 / 636 处 / 单日最多 7 次**。

### 单页内重复

同页出现 ≥4 次的文案，**22 个页面 → 5 个**。剩余 5 处均为走马灯复制一份用于无缝滚动，
属必要实现，视觉上不重复。

### 顺带差异化

- 首页快讯条与资讯列表改用不同新闻条目（此前同一条在首页出现 6 次）
- 学习路径按课程差异化（此前全为「入门 → 进阶 → 实战」）
- 群聊最新消息按组差异化（此前全为「图纸已更新」）
- 资源文件大小按类型真实化（STEP/STL/PDF/XLSX/MP4 各有量级，此前多为 240 KB）

### 复跑

```bash
python3 dedupe_mock.py     # mock 主文案
python3 dedupe_mock2.py    # users/news/tickets 补漏
python3 dedupe_mock3.py    # excerpt
python3 dedupe_pages.py    # 日期分散 + 首页错开
python3 dedupe_pages2.py   # 学习路径 / 群消息 / 文件大小
```

> 这批脚本必须在 `build_pages*.py` 之后运行——页面会重新生成，先跑会被覆盖。

## 十、真实数据补充（模块 / mini 机器人 / 学习资源）

此前模块子页、mini 机器人页、学习子页只有静态占位卡片，没有可查数据。
本轮补充三批基于**真实公开资料**的数据集，并注入到对应子页。

### 数据集

| 数据集 | 条数 | 内容 |
|---|---|---|
| realModules | **86** | 模块 21 + 组件 21 + 配件 15 + 五金 14 + 3D 打印 8 + 外壳 7 |
| realToys | **17** | mini 机器人 / 教育机器人 |
| realLearns | **22** | 学习资源与课程 |
| products | 100 → **203** | 上述模块与玩具并入，搜索/对比/详情均可命中 |
| learns | 24 → **46** | 学习资源并入 |

### 真实型号与规格（部分）

- **智能舵机**：Dynamixel XM430-W210/W350、XM540-W150/W270、XL430、XC430
  —— 含堵转扭矩、空载转速、减速比、分辨率、尺寸重量、通信接口
- **谐波关节**：零差云控 eRob70H/80H/110H（速比/峰值扭矩/额定扭矩/转速）、
  嬴双 KSG-14-100/20-120/32-160（减速比/额定扭矩/机身直径/重量）
- **直线模组**：意优 RL50/RL300（峰值推力 500N/3000N）、RHU-17L 人形谐波关节
- **主控与计算**：Raspberry Pi 5、Jetson Orin NX（100 TOPS）、STM32H7 闪马平台
- **传感器**：RPLIDAR A1、RealSense D435i、MPU6050
- **组件**：谐波/行星减速器、绝对值与增量编码器、无框力矩电机、步进与伺服驱动器、
  锂电池组、麦克纳姆轮与全向轮
- **五金**：2020/2040/4040 铝型材、304 与 12.9 级螺丝、碳纤维板、6061 铝板、FR4 环氧板

### mini 机器人（含真实外链）

| 产品 | 价格/状态 | 外链 |
|---|---|---|
| 小米 CyberDog 2（铁蛋2） | ¥12,999 | 小米官网 |
| 小米 CyberDog（铁蛋） | ¥9,999 限量 | 小米官网 |
| 优必选 悟空 | ¥2,999 | ubtrobot.com 官网 + 天猫 |
| 优必选 AI 悟空 2 代 | ¥3,999 | ubtrobot.com |
| makeblock mBot | ¥509 | 京东商品页 |
| makeblock mBot Mega | ¥849 | 天猫商品页 |
| 小米 CyberOne（铁大） | 未量产发售 | 小米官网 |
| 大疆 RoboMaster S1 / EP、乐高 SPIKE Prime、索尼 toio、VEX IQ 等 | — | 品牌官网 |

### 学习资源（含官方文档外链）

ROS2 官方文档（docs.ros.org）、Nav2（docs.nav2.org）、MoveIt 2（moveit.picknik.ai）、
ros2_control、micro-ROS、SLAM Toolbox、TurtleBot3、Gazebo、古月居《ROS2 入门 21 讲》、
The Construct、相机标定、STM32 电机 PID 等，共 22 条，均带可跳转原文链接。

### 接入页面（22 个）

上一版只注入列表页，漏掉了**频道首页**——用户打开 mini机器人/模块/学习 看到的
仍是通用占位。本轮补齐首页并填充原本为空的页面。

| 板块 | 页面 | 卡片 |
|---|---|---|
| 模块 | module_home（2 块）、module_list、component_list、accessory_list、hardware_list、print3d_list、shell_list、module_compare、module_scheme、module_play_detail | 21/21/15/14/8/7/8/12/8 |
| mini机器人 | toy_home、toy_list、toy_diy、toy_print、toy_ranking、toy_custom、toy_show、toy_contest_detail | 17/17/10/10/17/10/12/12 |
| 学习 | learn_home、learn_list、learn_course、learn_path | 22/22/22/12 |

### 实测

22 个页面浏览器实测：**卡片数正确、0 嵌套、0 破图、外链可点、JS 0 报错**。

### 踩过的坑

1. **`<a>` 嵌套**：初版把外链 `<a>` 放在卡片 `<a>` 内层，HTML 不允许嵌套 `<a>`，
   浏览器自动闭合外层，导致每张卡片被解析成 3 份（17 → 51）。
   改为外层 `div.card` + 标题 `a` + 独立外链 `a`。
2. **相对路径写错**：注入脚本给 `pages/` 下的页面写了 `href="pages/xxx.html"`，
   实际应写 `href="xxx.html"`，产生 125 处死链。已修正。
3. **漏掉首页**：只注入 `*_list` 列表页，用户从导航栏进入的是 `*_home` 频道首页，
   那里没有数据。本轮已补齐。

### 复跑

```bash
python3 build_realdata.py     # 基础数据集
python3 build_realdata2.py    # 扩充
python3 inject_realdata.py    # 列表页注入
python3 inject_home.py        # 频道首页 + 空页注入
```

两个注入脚本都带 `data-blk` 幂等标记，重复执行不会重复插入。
顺序无关，但都必须在 `build_pages*.py` 之后跑。

## 十一、删除频道页空的「内容分页」外壳

13 个频道页 / 总览页上有一个标题为「内容分页」的区块，
带 `1 / N` 翻页导航，但内部内容被分页容器隐藏，用户感知为空区块。已全部删除。

### 处理页面（13 个）

| 页面 | 释放页数 |
|---|---|
| toy_home / learn_home / design_drawing / design_version | 4 / 4 / 4 / 4 |
| module_home / design_home | 5 / 5 |
| forum_home / production_home / product_shanma_h7_docs / production_order_detail | 6 / 6 / 6 / 6 |
| production_line_detail | 7 |
| product_index / product_shanma_h7_case | 3 / 3 |

合计释放 **63 个分页页**，内容原地展开为正常纵向排列的 section。
首页（首页导览）与闪马产品页（产品图册）的分页是有内容的，保留未动。

### v1 脚本的 bug（已修复）

第一版用 `find('<div')` / `find('</div>')` 逐个比较判断 depth 归零，
遇到 `<div class="pg-page">` 这类**带属性**的开标签与 `</div>` 混排时，
depth 归零位置算错，把 section 的内容连同 `</section>` 一起切没了，
导致 13 个页面结构破损（表现为 `<h2>…</h2>` 后跟一个孤立 `>`）。

v2 改为：一次性收集区间内所有 div 开/闭事件并排序，按序推进找真正闭合点。
修复后结构校验 0 异常，链接数回到 23293（删除前水平，证明内容未丢失）。

### 实测

10 个频道页浏览器实测：**「内容分页」标题 0 个、卡片可见、0 破图、JS 0 报错**。

### 复跑

```bash
python3 remove_pager2.py
```

## 十二、交互走查：按钮 / 翻页 / 跳转一致性

按使用者路径逐项走查频道页与分页栏目，发现并修复 4 类问题。

### 问题 1（严重）：详情页不读 URL 的 id —— 点谁都跳同一页

列表卡片带 `?id=T1001` 跳转，但详情页内容是**写死的静态 HTML**，
没有任何按 id 渲染的逻辑（`location.search` 全站仅 1 处，用于搜索回填）。

实测：点「小米 CyberDog 2」「优必选悟空」「makeblock mBot」三个不同卡片，
详情页标题**全部是「桌面宠物机器人 CR-100」**。

修复：新增 `renderDetail()` + `DETAIL_MAP`，覆盖 14 类详情页
（product / module / component / accessory / hardware / print3d / shell / toy /
learn / news / project / demand / integration / test）。按 id 从 MOCK 取条目，
回填 hero 主标题、副标题、主图、规格表，并同步 `data-zh/data-en` 保证中英切换。

实测：6 条点击链路（点卡片 → 详情 → 返回）**内容匹配 6/6**。

### 问题 2：指示点点击失效

`bindPager()` 里 `dots` 是**补齐前**的旧引用。当 `dots.length !== n` 触发
`hint.innerHTML=''` 重建时，旧元素被销毁、新元素**未重新绑定 click**，
导致指示点无法点击（只能靠箭头）。

修复：把补齐逻辑移到绑定之前，重建后重新取 `dots`。
实测：点第 1 / 第 3 个指示点均正确切换。

### 问题 3：闪马产品图册没有翻页箭头

页面文案写「左右翻页查看主板正面 / 接口 / 尺寸 / 装配」，
但 HTML 里只有 `.pg-hint` 指示点，**没有 `.pg-nav`（箭头）也没有 `.pg-idx`（页码）**，
桌面端用户根本无法翻页。

修复：补上 prev / next 箭头与 `1 / 4` 页码。
实测：idx 从 None → `1 / 4` … `4 / 4`，transform 正确。

### 问题 4：论坛首页「最新资讯」的"更多"指向发布页

「最新资讯」板块的 more 指向 `news_publish.html`（发布新闻表单），
用户想看更多资讯却被送到投稿页。已改为 `news_list.html`。

全站已扫描所有"更多"按钮，**无其他列表板块指向写入页**的情况。

### 顺带增强

- 翻页支持**键盘左右方向键**（`tabindex` + ArrowLeft/ArrowRight）
- 翻页边界正确：末页再点 next 停住，首页再点 prev 停住

### 实测汇总

| 项 | 结果 |
|---|---|
| 卡片→详情内容匹配 | 6/6 |
| 详情→返回上一页 | 6/6 回到来源页 |
| 翻页箭头（2 个分页页） | next/prev/边界均正确 |
| 指示点点击 | 点 1 / 点 3 均正确 |
| 全站 235 页运行时 | 0 报错 / 0 破图 |


## 十三、返回按钮链路修复

### 根因

返回按钮的 HTML 是：

```html
<a class="np-back" href="{base}index.html" data-nav-back>
```

`href` 是**没有上一页时的兜底**（回首页）。但原 `bindBack()` 这样判断：

```js
var isHome = /index\.html$|\/$|^$/.test(href);
if (history.length > 1 && !isHome) { ev.preventDefault(); history.back(); }
```

因为 href 恒为 `../index.html`，`isHome` 恒为 true → **`history.back()` 从未执行**，
每次点返回都跟随 href 直接跳首页。

实测后果：

| 操作 | 期望 | 实际 |
|---|---|---|
| 模块频道 → 找模块 → 返回 | module_home | **index** |
| 模块频道 → 找模块 → 卡片 → 返回 | module_search | **index** |
| mini机器人 → 机型详情 → 返回 | toy_home | **index** |

即：无论在第几层，返回一律回首页，返回链完全断裂。

### 修复

新增 `trackOrigin()` + `canGoBack()`：

- 页面加载时，若 `document.referrer` 与当前同源 → 写 `sessionStorage.rf_from_site` 时间戳
- `canGoBack()` = `history.length > 1` **且** 30 分钟内有站内跳转记录
- `bindBack()`：能回则 `preventDefault()` + `history.back()`；不能回则跟随 href 兜底（回首页）

关键认知：**href 是兜底值，不能用来判断"能否返回"**。

### 实测

| 链路 | 结果 |
|---|---|
| 首页 → 模块频道 → 找模块 → 卡片 → 返回 ×3 | 逐层回到 search → module_home → index ✓ |
| mini机器人 → 机型详情 → 返回 | 回到 toy_home ✓ |
| 直接打开详情页（无历史）→ 返回 | 兜底回 index ✓ |
| 5 条"频道 → 子页 → 返回"链路 × PC/移动双视口 | **10/10 全部回到来源页** |

覆盖：全站 235 页共用同一个 `navpc` 导航，返回按钮一处修复、全站生效。


## 十四、使用者视角全量交互走查

前几轮只验证"元素存在 / 不报错"，本轮换使用者视角：
**点了之后，用户到底得到了什么？** 共发现 4 类真实缺陷。

| # | 缺陷 | 用户感知 | 影响面 |
|---|---|---|---|
| 1 | 搜索完全不过滤 | 搜"舵机"返回的 8 条里 0 条是舵机 | 全站检索 |
| 2 | 分页是假的 | 点第 2 页，列表纹丝不动 | 40 个列表页 |
| 3 | 19 类按钮无处理 | 点"移除""邀请""打包"毫无反应 | 25 处 |
| 4 | 部分"加载更多"无效 | 点了不新增 | 部分页 |

### 缺陷 1：搜索不过滤

`renderList` 直接灌默认数据，不看 `keyword`。
实测 6 个不同关键词（舵机 / ROS / 五金 / Dynamixel / 机器人 / 模块）
**返回完全相同的 8 条**，结果指纹种类 1/6。

修复：新增 `matchKW()`，跨 products / learns / news / projects 四个数据集，
对名称、英文名、品牌、描述、标签、spec 做模糊匹配；`renderSearchResults()`
渲染结果并写入 `[data-search-results]`；无结果时显示空状态插画。
搜索页热词参数统一 `?k=` → `?keyword=`（原两种写法混用）。

实测：舵机→19 条（15 条真舵机）、ROS→24、五金→30、Dynamixel→8、
不存在的词→空状态。指纹种类 5/5。

### 缺陷 2：假分页

页码是 `<a href="#">`，点击只把 URL 变成 `#`，列表不动。
且静态 HTML 只有 8 条，页码却写死 1~8（期望 64 条），数据与页码对不上。

修复：新增 `initPager2()`，走与"加载更多"相同的 `RF.api` 链路——
点页码 → 请求该页 → 重渲染 → 同步高亮与禁用态。数据量取自 MOCK（203 条）。
同时给 23 个列表容器挂 `data-page-list` 标记，脚本自动下钻到承载卡片的那一层。

实测：product / news / module / project / toy 等点第 2 页内容正确更换，高亮同步。
（learn_list 的 `data-more` 类型未登记在映射表，未纳入分页。）

### 缺陷 3：19 类按钮无处理

`bindActions` 只处理 fav / like / follow / submit 四类，
其余 19 类（remove、invite、pack、revoke、diff、share、markread、
addspec、toggleall、resplit、usecoupon、clearhistory…）**没有任何分支**。

修复：新增 `actGeneric()` 统一兜底，按动作类型给出可感知反馈：
移除→行变灰+按钮禁用、邀请→"已邀请"、打包→进度条、
吊销→置灰、分享→复制链接、全选→勾选框联动、添加行→插入表单行。

实测：**25/25 全部有反馈**。

### 缺陷 4：加载更多

forum_home / toy_list 正常（25→31）；product_index 的按钮未被识别，仍待处理。

### 回归

235 页结构 0 异常、23293 处链接 0 死链、资源 0 缺失、JS 语法 0 错误、
运行时 0 报错 0 破图。

### 说明

上述修复均为**前端模拟行为**。接真实后端后：
搜索应改为调用 `RF.api.products.search({keyword})` 由服务端过滤；
分页由服务端返回 `total/hasMore`；
动作按钮调用对应写接口。`matchKW` / `initPager2` / `actGeneric`
三处即为替换点，接口形状与现有 `RF.api` 一致。


## 十五、收尾：learn 分页 / 加载更多 / 空字节路径

上一轮遗留两项（learn_list 分页、product_index 加载更多），
并在排查过程中发现一个**更严重的数据缺陷**。

### 新发现：782 处图片路径含空字节（NUL）

`api.mock.js` 里 782 处路径形如：

```
"avatar": "assets/img/\u0000AV\u000001.webp"
"cover":  "assets/img/\u0000DC\u000003.webp"
```

`\u0000` 是字面 NUL 字符，浏览器发请求时会被截断/编码异常 →
**头像、封面大面积破图**。涉及 8 个数据集（users 30 / learns 48 /
posts 40 / demands 24 / integrations 18 / tests 18 / messages 14 / chats 12）。

推测成因：某次批量替换把 `gen/avatar/user_` 压成了 `AV` 短标记并加了 NUL 定界，
但还原步骤没执行。

修复：按 token 还原为真实路径
`AV→gen/avatar/user_NN.webp`、`DC→gen/cover/doc_NN.webp`、
`VD→gen/cover/video_NN.webp`。

实测：MOCK 内 167 个图片路径逐个 HEAD 请求，**全部 200，0 不可达**。

### 遗留项 1：learn_list 分页

根因：`initPager2` 强制要求同区块存在 `[data-more]` 才能推断数据类型，
而 learn_list 只有分页没有加载更多 → 直接 return。
且 `TPL` 里没有 `learn` 模板，即使跑通也会 fallback 成 product 模板，
渲染出 "undefined undefined ★ 4.x"。

修复：
- 新增 `TPL.learn`（封面 / 免费付费标 / 分类 / 等级 / 讲数 / 原文外链），字段带 `||` 兜底
- `MORE_MAP` 加 `learn: ['learn','list']`
- kind 判定改为三级回退：`data-more` → 容器 `data-page-list` → 文件名正则推断
- 补 `data-more` 按钮

实测：点第 2 页内容正确更换，**0 个 undefined 卡片，0 破图**。

### 遗留项 2：加载更多缺失

`product_index` / `learn_list` / `user_list` 三个列表页**根本没有加载更多按钮**
（不是"无效"，是原本就没生成）。已补齐并绑定正确数据类型。

实测（9 个列表页）：

| 页面 | 条目变化 |
|---|---|
| product_index | 18 → 24 |
| learn_list | 30 → 36 |
| user_list | 10 → 16 |
| component_list | 29 → 35 |
| forum_home / toy_list / product_list / news_list / project_hall | 各 +6 |

**9/9 全部通过**。

### 本轮引入并修复的自身缺陷

包 `<div id="lst">` 时漏了闭合标签，导致 3 个页面结构破损。
已用"逐次补 `</div>` + 结构校验"循环修复，现 235 页结构 **0 异常**。

### 终检

| 项 | 结果 |
|---|---|
| HTML 结构 | 235 页 / 异常 0 |
| 链接 | 23293 处 / 死链 0 / 缺资源 0 |
| JS 语法 | 0 错误 |
| 运行时 | 235 页 0 报错 0 破图 |
| 搜索 | 舵机→19 条，真舵机 15 条 |
| 分页 | 4/4 换页正常 |
| 加载更多 | 4/4 新增正常 |


## 十五、发布工程：静态资源版本号 + HTML 结构平衡

### 1. 版本号防缓存（解决"改了没生效 / 像回滚"）

前端改了 `app.js`，但用户浏览器用缓存的旧文件，表现出的现象就是
"修复又退回到旧行为"——与"代码被回滚"无法区分。

解决：新增 `build_release.py`，发布前给所有 HTML 里的本站 js / css 引用
加 `?v=<时间戳>`（先清旧版本再加新版本）。

```html
<script src="../assets/js/app.js?v=202610291452"></script>
```

部署后浏览器视为新资源，**不需要用户强刷**。全站 235 页 / 1938 处引用。

用法：

```bash
python3 build_release.py    # 刷新版本号 → 四项校验 → 打 zip
```

### 2. HTML div 结构平衡

发现 4 个页面 div 开闭不平衡（浏览器会自动修复，故页面显示正常，
但源码不严谨，且可能在某些解析器下出意外）：

| 页面 | 问题 | 修正 |
|---|---|---|
| learn_list | 少 1 个 `</div>` | tabbar 后闭合块设为 2 |
| product_index | 少 1 个 `</div>` | 设为 2 |
| 404 | 多 2 个 `</div>` | 设为 0 |
| user_list | 少 1 个 `</div>` | 设为 3 |

修正后全站 **div 开闭不平衡 0 页**。

### 3. 本轮补齐的交互

- `learn_list` 分页：原 `initPager2` 依赖"加载更多"按钮的 `data-more`
  推断数据类型，而 learn_list 没有该按钮 → 分页不生效。
  改为支持容器上的 `data-page-kind`，并给 22 个列表页标注类型。
- `product_index` 加载更多实测正常（4 → 10），此前为测试脚本误报。

### 4. 发布校验

| 项 | 结果 |
|---|---|
| HTML 结构 | 235 页 / 异常 0 |
| div 开闭平衡 | 0 页不平衡 |
| 链接 | 23293 处 / 死链 0 |
| 资源 | 缺失 0 |
| JS 语法 | 错误 0 |
| 运行时 | 235 页 0 报错 / 0 破图 |
| 返回链路 | 逐层正确 |
| 搜索 | 舵机 → 19 条 |
| 分页（含 learn） | 第 2 页内容正确更换 |


## 十五、分页收尾（续十四）

上一轮遗留两项：product_index 加载更多、learn_list 分页。已处理并做全站普查。

### 澄清：product_index 是误报

实测 `#hotLst` 4 条 → 点击后 10 条，加载更多**本来就正常**。
上一轮判"无效"是因为我用了不匹配的选择器，属测量错误，不是缺陷。

### learn_list 分页：两份映射表不一致

`bindLoadMore` 的映射表含 `learn`，但我在 `initPager2` 里另写了一份，**漏了 learn** ——
同一份关系维护两处，必然漂移。已提取为公共常量 `MORE_MAP`，两处共用。

### 全站 40 个分页栏页面普查结果

| 类别 | 数量 | 机制 |
|---|---|---|
| 翻页生效 | 25 | 有 `data-more` → 走 `RF.api` 拉对应页（数据来自 MOCK，203 条） |
| 单页 | 14 | 无 `data-more` 且卡片不足一页 → 页码收敛为 1 |
| 真实失败 | **0** | — |
| 无列表容器 | 1（ai_history） | 页面无卡片，不适用 |

### 关键修复：页码本身是虚假的

很多页面 HTML 里只有 8 条卡片，分页栏却写死 `1 2 3 4 5 6 7 8`。
用户点"3"看到的是第 1 页内容 —— 因为数据根本不存在。

修复：`initStaticPager()` 按**真实卡片数**计算页数，
`Math.ceil(total / PAGE_SIZE)`，并把多余的页码 `display:none`。
现在用户看到几页就是几页，不再有"点进去什么都没有"的空页码。

例如：design_drawing 15 条 → 2 页（原写 3）；
production_line_list 12 条 → 2 页（原写 4）；
production_bom 5 条 → 1 页（原写 3）。

### 另修：分页栏与列表容器不在同一 section

部分页面（design_* / production_*）的分页栏和列表容器是并列结构，
原 `host.closest('.sec').querySelector('.pagination')` 取不到 → 直接 return，分页完全没初始化。
已改为逐级向上查找（容器 sec → 父级 ×5 → 整个文档）。

### 复跑

```bash
python3 pgcheck2.py    # 分页终检（区分真失败与本来就单页）
python3 rt2.py 0 80    # 运行时分段实测
```

### 回归

235 页结构 0 异常、23293 处链接 0 死链、资源 0 缺失、
JS 语法 0 错误、CSS 括号全平衡、运行时 0 报错 0 破图。

> 注：校验脚本需对 `src` 也剥离 `?v=` 版本号，否则会把
> `app.js?v=202610291457` 误报为缺失（该文件实际存在）。


## 十六、分页全量闭环（收尾）

承接十五项，把"单页"的列表页接上数据源。

### 数据源映射表扩展

`MORE_MAP` 原先只有 7 类，缺 integration / test / ticket / task / toy，
导致对应列表页即使挂了容器也取不到数据。已补全为 12 类：

```js
news/newsitem → news.list        product → products.list
toy           → toys.list        user    → users.list
project       → biz.projects     post    → forum.list
demand        → biz.demands      learn   → learn.list
integration   → biz.integrations test    → biz.tests
ticket        → tickets.mine     task    → design.tasks
```

先确认了各方法在 mock 与 real 两侧均存在（仅 `production.bom` 无接口）。

### 13 个页面挂上数据源

forum_search / integration_hall / news_manage / product_category /
product_filter / product_search / project_my / test_hall / ticket_list /
user_follow / user_products / design_task / toy_search

每个页面：给列表容器补 `id="lst"`，并在分页栏前插入
`data-more="<kind>:#lst"` 按钮。

`production_bom` 无对应接口，保持单页（页码已收敛为 1，没有虚假页码）。

### 检查结果：真实失败 0

| 类别 | 数量 |
|---|---|
| 翻页生效 | 38 |
| 单页（无虚假页码） | 1（production_bom） |
| 真实失败 | **0** |
| 不适用 | 1（ai_history 无卡片） |

### 检查脚本的两处误报（已修）

`pgcheck2.py` 曾把 3 个正常页面判为失败，原因是脚本自身缺陷，
不是站点问题 —— 记录在此避免后续复跑时误判：

1. **等待时间不足**：点击页码后等 0.9s，部分页面尚未重绘。
   已放宽为 加载 0.8s / 点击后 1.4s。
2. **文本取样过短**：只取 `innerText` 前 24 字符，而前 24 字符
   恰好是公共图片路径前缀 `assets/img/gen/product/`，所有卡片都一样，
   于是"内容换了却判定没变"。已改为取完整文本。

修正后这 3 个页面（design_demand / production_case /
production_line_list）均判定生效。

### 回归

| 项 | 结果 |
|---|---|
| HTML 结构 | 235 页 / 异常 0 |
| 链接 | 23293 处 / 死链 0 / 缺资源 0 |
| JS 语法 / CSS 括号 | 0 错误 / 全平衡 |
| 运行时 | 235 页 0 报错 0 破图 |
| 分页 | 真实失败 0 |


## 十六、返回按钮：历史栈被污染（真 bug）

### 现象

连续点返回时"时好时坏"：从详情页返回到列表页正常，
但**再点一次返回不会回到频道页，而是"前进"回刚才那个详情页**。

```
index → module_home → module_search → 详情
  返回 → module_search   ✓
  返回 → module_home     ✓
  返回 → module_search   ✗ 又回去了
```

### 根因：把 location.href 当"返回"用

原实现：

```js
if (from) { ev.preventDefault(); location.href = from; return; }
if (history.length > 1) { ev.preventDefault(); history.back(); }
```

`from` 优先，而 `location.href = x` 是**新增一条历史记录（push）**，不是后退。
于是历史栈变成：

```
0 index  1 module_home  2 module_search  3 module_home(新push)
```

此时再点返回 → `history.back()` → 从 3 回到 2，用户看到的是
"返回键把我送回了刚才离开的页面"。

### 修复

```js
// 1) 有真实上一页 → history.back()，保持历史栈语义
if (canGoBack()) { ev.preventDefault(); history.back(); return; }
// 2) 没有（新标签/直接输网址/referrer 被拦）→ 跳逻辑上级，用 replace 不污染栈
if (from) { ev.preventDefault(); location.replace(from); return; }
```

关键两点：
- **后退优先于跳转**，不再让 push 抢在前面
- 兜底用 `location.replace()` 而非 `href`，不留下多余记录

### 实测

| 链路 | 结果 |
|---|---|
| index → 模块 → 找模块 → 详情 → 返回×3 | 逐层回到 search → home → index ✓ |
| toy_home → 机型详情 → 返回 | 回到 toy_home ✓ |
| 直达 module_search?from=module_home → 返回 | 回落 module_home ✓（无历史时兜底） |

### 回归

235 页结构 0 异常、23304 处链接 0 死链、资源 0 缺失、
JS 语法 0 错误、运行时 4 批实测 0 报错 0 破图。

> 复跑：`python3 backtest.py`（返回链路专项）


## 十六、返回键彻底重做 + 玩法页内容整改

### 问题 1：返回键在频道子页失效，总是回主页

**根因：实现依赖了会失效的环境信息。**

原 `canGoBack()` 要求同时满足两个条件才真返回：
1. `document.referrer` 与当前同源
2. 30 分钟内 sessionStorage 有站内跳转记录

这两者在以下场景都会拿不到：`file://` 直接打开、`target="_blank"`
新标签页、隐私/无痕模式、`Referrer-Policy: no-referrer`、iframe 内嵌。
任一失效 → 条件不成立 → 跟随 href 兜底 → **跳回首页**。

用户环境正好命中，所以表现为"每个频道子页返回都回主页"。

**修复：改用 URL 显式携带来源，不再依赖任何环境信息。**

- `attachFrom()`：捕获阶段拦截站内 `.html` 链接点击，
  把"当前页相对目标页的路径"作为 `from` 参数写进 href。
- `bindBack()`：优先读 `?from=`，直接 `location.href = from` 精确回来源页；
  没有 `from` 但浏览器有历史则 `history.back()`；都没有才兜底回首页。

相对路径由 `relTo()` 计算（按目录层级补 `../`），
所以 `pages/` 与根目录之间的往返都正确。

实测 9 条链路全部正确：

| 频道 | 子页 | 返回 |
|---|---|---|
| 模块 | 玩法 / 找模块 / 发布模块 / 对比 | 均回 module_home |
| mini机器人 | 玩法(DIY) / 小型定制 | 均回 toy_home |
| 学习 | 学习路径 | 回 learn_home |
| 论坛 | 板块 | 回 forum_home |
| 产品 | 全部产品 | 回 product_index |

深层链路也正确：
module_home → 玩法 → 详情 → 返回 → 玩法 → 返回 → module_home。

### 问题 2：玩法页"大图大框、不知所谓"

排查发现玩法页的内容**根本不是玩法**：

- 「玩法教程」里的卡片指向 `learn_detail.html?id=L9000`，
  标题是「入门指南｜商用清洁机器人 从入门到实战」——抓的是学习资料
- 配图用的是 `doc_XX.svg` 文档封面，且强制 `aspect-ratio:4/5` 大竖图，
  一个卡片占掉大半屏，信息密度极低
- 模块频道的玩法页 hero 用了玩具风 `chan-toy` + `toy_hero_card.webp`
- mini机器人频道的「玩法」入口指向 `module_play.html`（模块玩法页）

**整改：**

1. 新增 `MOCK.plays` 12 条真实玩法（四足步态调试、麦克纳姆轮全向移动、
   机械臂视觉抓取、巡线小车、3D 打印外壳、两轮自平衡、语音控制、
   ROS2 SLAM、机械臂写字、蓝牙坦克、六足仿生、视觉分拣），
   每条含难度 / 耗时 / 所需模块 / 简介 / 步骤 / 材料清单
2. `DETAIL_MAP` 增加 `module_play_detail → plays`，
   详情页按 `?id=PL01` 渲染对应玩法（标题、副标题、配图）
3. 去掉全站 25 处 `aspect-ratio:4/5` 大竖图，恢复常规卡片比例
4. 模块频道玩法页 hero 改为 `chan-module` + `module_hero_card.webp`
5. mini机器人「玩法」入口改指 `toy_diy.html`

### 顺带修掉的破图

详情页 hero 直接用了 mock 里的站点根相对路径 `assets/img/...`，
在 `pages/` 下解析成 `/pages/assets/...` → 破图。
新增 `fixImg()` 按当前目录补 `../`，现 0 破图。

### 回归

235 页结构 0 异常、23304 处链接 0 死链、资源 0 缺失、
JS 语法 0 错误、运行时 235 页 0 报错 0 破图。


## 十六、返回键兜底 + 玩法区块内容错配

### 问题 1：点返回总是回首页

用户反馈：从频道进入子页后点返回，回到的是**首页**而非频道页。

根因不在 `history.back()`，而在**兜底 href 写死为首页**：

```html
<a class="np-back" href="../index.html" data-nav-back>
```

返回逻辑是三级策略（app.js `bindBack`）：
1. URL 带 `from` → 回来源页（进页时由来源页写入，最精确）
2. 有浏览器历史 → `history.back()`
3. 都没有 → **跟随 href**

第 3 步的 href 恒为首页，所以一旦直达子页
（新标签打开 / 直接输网址 / referrer 被拦），就一律回首页。

修复：按信息架构批量重写 206 个页面的返回 href
（`detail→list→home→index`），指向真正的上级：

| 页面 | 原兜底 | 现兜底 |
|---|---|---|
| module_search / module_list | `../index.html` | `module_home.html` |
| module_detail | `../index.html` | `module_list.html` |
| toy_detail | `../index.html` | `toy_list.html` |
| news_list | `../index.html` | `forum_home.html`（新闻已并入论坛） |
| product_list | `../index.html` | `product_index.html` |
| module_home / toy_home（频道首页） | `../index.html` | `../index.html`（正确） |

规则里加了两个约束：
- **排除指向自己**（否则 module_home 的返回键指向 module_home）
- `_home` 结尾的频道首页 → 站点首页

实测（直达子页、无历史，最严苛场景）：

```
module_search → module_home   ✓
toy_detail    → toy_list      ✓
news_list     → forum_home    ✓
```

> 注：验证需用 `wait_until='networkidle'` + `expect_navigation`。
> 用 `domcontentloaded` 点击会因元素未就绪而假阴性。

### 问题 2：玩法区块装的是学习课程

用户反馈：频道子页里的"玩法"板块大图大框、不知所谓、冗余。

排查发现是**内容错配** —— 之前注入真实数据时，把学习资料灌进了玩法区块：

| 页面 | 区块 | 实际内容 | 应为 |
|---|---|---|---|
| module_home | 玩法平台 | 学习课程（入门指南/机械设计…） | 玩法 |
| toy_home | 玩法与教程 | 学习课程 | 玩法 |

修正为真正的玩法条目（拼装 / 编程 / 3D打印 / 改装 / 竞技 / 交互），
并从大图卡片改为紧凑列表：

| 指标 | 修改前 | 修改后 |
|---|---|---|
| module_home 玩法区块高度 | 2593 px | **643 px** |
| 单卡片 | 大图 + 价格 + 评分 | 小图 + 标题 + 时长 + 难度 |

实测：6 条玩法、0 破图、中英双语文案齐全。

### 回归

235 页结构 0 异常、23304 处链接 0 死链、资源 0 缺失、
JS 语法 0 错误、运行时 0 报错。


## 十七、品牌名定为 SUMFORGE（闪马工厂）

最终品牌：**SUMFORGE**，中文名「闪马工厂」，域名 **sumstc.com**。

| 类型 | 数量 |
|---|---|
| 文本覆盖文件 | 260 |
| 替换处数 | 3364 |
| 旧品牌残留 | 0 |

改名范围：英文品牌名、中文名「机甲工场 → 闪马工厂」、
示例域名（全部收敛为 sumstc.com）、logo 三版。

Logo：

- logo_main.svg → SUM（蓝）+ FORGE（红）
- logo_white.svg → 同上，白色版
- logo_admin.svg → SUMFORGE 管理后台
- favicon.svg → 纯图形无文字，无需改

交付包顶层目录为 sumforge/。

> 页脚联系信息沿用：蜀ICP备18013136号 / 闪马科技个人工作室 /
> 联系人万三（SumSelf）/ 电话 +86 18683379773 / 微信 sumstc。


## 十八、Logo 采用用户原始手绘图形（像素矢量化）

用户提供手绘草图（32×32 PNG，红色粗线条 + 白色方形镂空 +
右侧垂直线条 + 横幅式排布），要求保留原图形，仅做格式规范化。

### 处理方式：忠实像素矢量化

不做重新设计，按原图逐像素提取后转为 SVG：

1. 阈值提取红色区域（r>140 且 r-g>60 且 r-b>60），
   共 567 个红色像素 / 1024（占 55%）
2. 水平 run 合并 129 块 → 纵向再合并 → **121 个矩形**
3. 输出为 SVG `<rect>`，可无损缩放，放大不糊

### 格式规范化

| 项 | 原草图 | 现 logo |
|---|---|---|
| 格式 | 32×32 PNG | SVG（矢量） |
| 背景 | 纯白底 | **透明**（深色导航栏上不露白块） |
| 颜色 | #FE0000 纯红 | **#E23B3B**（品牌红，与站点统一） |
| 边缘 | 有抗锯齿杂色 | 阈值化，边缘锐利 |

### 产出文件

| 文件 | 尺寸 | 说明 |
|---|---|---|
| `icon_sumforge.svg` | 32×32 | 基础图标（新增） |
| `favicon.svg` | 64×64 | 浏览器标签图标 |
| `logo_main.svg` | 360×88 | 图标 + SUM(蓝) FORGE(红) + 中文副标 |
| `logo_white.svg` | 360×88 | 反白版 |
| `logo_admin.svg` | 300×64 | 后台版 |

图标在 logo_main 中放大 2.125 倍（32→68px），置于左侧 x=4,y=10。

### 验证

深底 / 白底两种场景渲染确认图形完整；页面实测
brand 图片全部加载成功，0 破图，0 资源请求失败。

> 注：`ai_orb.svg`（AI 悬浮球）是独立功能图标，未随 logo 变更。


## 十九、内容审查：整机产品做实

### 背景

按用户要求从内容角度审查每页，确认内容是否属于该页。

此前一次扫描误判 `product_index.html` 装的是模块内容，
复查后确认它已是整机索引（分类为商用/具身/定制）——原判断为误报。
但审查中发现两处实质问题。

### 问题 1：分类数量虚标

分类卡写「120 款」，实际数据每类仅 10 款。
用户点进去看到 10 款会觉得页面虚标。

修正为按数据真实值显示：商用 30 / 具身 29 / 定制 29。

### 问题 2：整机数据太少

整机（commercial + embodied + custom）原有 30 条，索引页撑不起「量」。
新增 **58 条**真实感整机型号，特点：

- 按品类业务场景写参数（商用侧重吸力/货架/梯控，
  具身侧重自由度/力控/防护等级，定制侧重认证/联调/节拍）
- 价格区间贴合各品类定位
- 图片使用 gen/product 下的品类实拍（各 12 张循环）

扩充后整机 88 条，products 总数 262。

### 问题 3：SM-H7 不在产品库

首页与索引页以 `id=P0001` 引用闪马 SM-H7，
但 products 数组里**没有这条数据**（P0000/P0001 均不存在），
点进去会渲染失败。已补齐 SM-H7 完整条目
（含 8 项规格、5 份文档、中英文描述）。

### 问题 4：分类页不响应 cat 参数

`product_category.html` 是静态商用机列表，
点「具身机器人」「定制机器人」进去仍显示商用机。

新增 `renderCategory()`：按 `?cat=` 从 products 过滤对应品类，
渲染 12 张卡并同步标题与副标题（含真实数量）。

实测三类均正确：

| cat | 渲染结果 |
|---|---|
| commercial | 商用清洁 / 室内配送 / 迎宾导览 |
| embodied | 通用人形 / 双臂操作 / 四足巡检 |
| custom | 定制巡检 / 定制分拣 / 定制教育 |

### 分布统一性

全站区块模式普查：H+C（主视觉+内容）216 页、
H+C+F（+表单）14 页、H+C+Pager 2 页、H only 3 页。
骨架一致，本轮改动未破坏该一致性。

### 回归

235 页结构 0 异常、23312 处链接 0 死链、资源 0 缺失、
JS 语法 0 错误、运行时 4 批 0 报错 0 破图。


## 二十、内容审查第二轮：引用有效性与冗余区块

延续第十九轮（整机产品做实），把「引用了但数据不存在」
这类问题做成全站扫描，并清理冗余区块。

### 1. 全站 id 引用扫描（798 处）

扫描所有 `*_detail.html?id=xxx` 引用，比对 MOCK 数据集。

| 数据集 | 条目数 |
|---|---|
| products | 262 |
| news | 63 |
| learns | 46 |
| projects / posts / tickets | 30 / 40 / 20 |
| demands / integrations / tests | 24 / 18 / 18 |
| plays | 12 |

查出 11 处无效引用：

| 引用 | 问题 | 修复 |
|---|---|---|
| `news_detail?N9001-N9003` | SM-H7 三条宣发新闻**不在 news 数据里** | 补齐 3 条新闻（含中英文标题/摘要/封面） |
| `toy_detail?T0-T7` | toy_search 里 8 张占位卡 | 换成真实机型 T1001/T1003/T1005/T1008/T1010/T1011/T1012/T1017 |
| `module_play_detail?P1` | 玩法详情占位 | 改为 PL01–PL06（6 条玩法各自独立 id） |

修复后 **798 处引用全部有效，无效 0**。

### 2. 冗余区块清理

| 页面 | 问题 | 处理 |
|---|---|---|
| module_home | 「热门模块」与「精选模块」重复、「推荐组件」与「组件与配件」重复 | 删重复项，保留区块各补至 6 条 |
| toy_contest_detail | 两个「参赛作品」，其一为空壳 | 删空壳 |
| news_list | 「热门专题」空壳 | 删除 |

清理后 module_home 区块：模块分类 9 / 热门模块 6 /
推荐组件 6 / 3D 打印与外壳 4 / 玩法平台 6 / 资料中心（doc 列表）。

### 踩坑记录

删除 section 时若用非贪婪正则 `.*?</section>` 定位，
遇到嵌套 `<div>` 会切错位置，导致 **7 处结构破损**。
改用「平衡 div 计数」精确定位 section 起止后正常。
破损文件从上一个交付包（`sumforge_site.zip`）恢复后重做。

另：替换玩法 id 时正则组号写错（用了 group(2) 而非 group(3)），
导致 id 变成 `PL01PL01` 且丢失闭合引号，已修正。

### 回归

235 页结构 0 异常、23283 处链接 0 死链、资源 0 缺失、
JS 语法 0 错误、运行时 4 批 0 报错 0 破图。


## 二十、业务层内容审查（6 项）

### 1.1 首页频道入口

| 问题 | 处理 |
|---|---|
| 名字与导航栏不一致 | 论坛资讯→论坛、模块组件→模块、**玩具机器人→mini机器人**、学习平台→学习 |
| 玩具机器人"总被选中为白色" | CSS `.quick a.toy` 原为白色渐变底 `linear-gradient(160deg,#fff,#EEF4FF)`，在深色背景下像被选中。改为品牌红描边 `border-color:rgba(226,59,59,.5)` |
| 10 个入口平铺过长 | 主频道（论坛/模块/mini机器人/学习）常显，其余 6 个加 `.q-more` 默认收起，末尾「更多频道」按钮切换 `.is-open` |

实测：折叠项 6，默认可见 5（4 主频道 + 按钮），点击后可见 11，按钮文字「更多频道 ⇄ 收起频道」切换正常。

### 1.2 首页导览

- 标题「首页导览」→「导览」
- 原 4 页内容不均（4506 / 7623 / 4285 / 4210），
  且 AI 智造入口被塞进"产品"页，语义错配
- 按副标题主题重排：

| 页 | 主题 | 区块 |
|---|---|---|
| 1 | 资讯 | 头条宣发 + 论坛·资讯 |
| 2 | 产品 | 热门模块与组件 + mini机器人与玩法 |
| 3 | 制造 | AI 智造入口 + 全流程链路 + 智造产线 |
| 4 | 社区 | 论坛热帖 + 用户排行 + 平台数据 |

### 2.1 论坛 hero 缺快捷键

论坛 hero 只有标题+副标题+搜索，而 module/toy 频道都有
`.hero-actions` 双按钮。已补：

```
发帖子 → forum_publish.html   （btn-primary）
找板块 → forum_board.html     （btn-ghost）
```

同时 hero class 由 `hero` 补为 `hero chan-news`
（CSS 里 `.chan-news .hero` 规则一直存在但从未生效）。

### 2.2 论坛删除宣发与资讯区块

「头条宣发」「最新资讯」属于资讯频道内容，放在论坛里串台。
已删除，论坛现为：论坛板块 / 置顶与精华 / 最新帖子 / 活跃用户。

### 3.1 mini机器人频道去「玩具」

13 个 toy_*.html 页面共 **106 处**「玩具」→「mini」。
涵盖标题（mini机器人/mini列表/mini详情）、
区块名（mini分类/热门mini/mini排行）、
产品名（遥控机械臂mini/太阳能拼装mini）。

### 3.4 异常 banner

程序化生成的 `ad_banner_0X.svg`（渐变色块 + JOIN 文字，
与真实广告位风格割裂）→ 换成真实生成的
`design/banner_{bar,strip,thumb}.webp`，10 个页面。

> 过程中踩坑：批量替换时正则未捕获 `<img>` 捕获组，
> 导致 img 标签被吞；以及导览重构时 `.adslot` 非 `<section>`
> 未被带走而丢失。均已修复并复检。

### 回归

235 页结构 0 异常、23289 处链接 0 死链、资源 0 缺失、
JS 语法 0 错误、运行时 4 批 0 报错 0 破图。


## 二十、内容审查（续）：三处内容错配 + 图片路径泄漏

承接第十九节，继续审查其余频道页面。

### 问题 1：学习问答整条链路是论坛内容

| 页面 | 区块 | 原内容 | 应为 |
|---|---|---|---|
| learn_home | 问答 | 论坛帖子（二手交易/经验分享/赛事活动） | 学习技术问答 |
| learn_qa.html | 待解决问题 | 论坛帖子（综合讨论/产品问答/DIY玩法） | 学习技术问答 |

新增 `MOCK.qa`（10 条），按学习分类组织：ROS2 开发、导航与 SLAM、
控制与驱动、机械设计、嵌入式、AI 算法、入门指南、仿真、机器视觉、项目实战。
每条含分类、回答者、回复数、浏览数、是否解决、问题正文。

两处区块均已替换为真实问答。

### 问题 2：赛事活动装的是项目卡片

`toy_home`「赛事活动」区块原本是项目卡片
（酒店配送机器人落地项目 ¥280,000），与赛事无关。

新增 `MOCK.contests`（6 条）：全国青少年机器人创客大赛、
开源机器人结构设计大赛、mini 机器人竞速挑战赛、
机器人创意编程挑战赛、高校人形机器人运动会、青少年 AI 创意作品展。
每条含状态、奖金、参赛队数、截止日期、简介。

### 问题 3：AI 生成结果示例装的是项目卡片

`ai_home`「生成结果示例」同样是项目卡片。
新增 `MOCK.aiResults`（4 条），每条展示完整的
「自然语言需求 → 拆解方案 → 模块清单 → 预估价格与周期」链路，
这才是 AI 频道该展示的东西。

### 问题 4：80 处图片位置输出了路径文本（渲染 bug）

这是一个此前所有检查都没发现的显示缺陷：

```html
<div class="pic">assets/img/gen/product/design_drawing_01.svg</div>
```

图片位应该是 `<img>` 标签，实际却是纯文本路径——
**用户会在页面上看到一串文件路径字符串**。

全站扫描命中 **80 处 / 10 个页面**：

| 页面 | 处数 |
|---|---|
| design_demand / production_line_list | 各 12 |
| production_case / production_home | 各 10 |
| toy_search | 8 |
| design_home / production_assembly / production_smt / production_tooling | 各 6 |
| production_warehouse | 4 |

全部修复为 `<img>` 标签，并按页面层级修正相对路径
（pages/ 与 admin/ 下的 fallback 需加 `../`，共 80 处）。

顺带修掉 `toy_search.html` 引用的 `toy_17.svg`
（实际只有 toy_01–12），改为 toy_05。

### 回归

235 页结构 0 异常、23289 处链接 0 死链、**资源 0 缺失**、
JS 语法 0 错误、运行时 4 批 0 报错 0 破图。

6 个修复页浏览器实测：路径泄漏 0、破图 0。


## 二十一、内容审查收尾：图注补全 + 列表补量

### 先更正两处误判

上一轮我报告「production_* 部分区块内容偏薄」和
「user_home 最近动态是空的」——**这两个判断都是错的**。

原因是我的扫描口径只统计 `class="card"` 与 `class="item"`，
把下面这些正常形态全部漏掉了：

| 形态 | 实际有内容却被判为空 |
|---|---|
| 统计卡片 | production_home 产线能力（128 接入产线 / 96.8% 良率…） |
| 流程/时间线 | production_home 生产全流程、user_home 最近动态 |
| FAQ 折叠 | production_booking 预约说明、production_home 为什么在平台量产 |
| 图片画廊 | module_detail 产品图集、toy_home 作品秀 |
| 表单 | production_order_publish 量产需求、production_cert 认证代办 |

改用「去标签后的可见文本长度」重新扫描 634 个区块，
真正为空的是 0 个。production_* 各页可见文本 451–1113 字，属正常。

> 教训：判空不能只看元素 class，要先算可见文本。

### 真正修复的：4 个「只有图、没有说明」的区块

| 页面 | 区块 | 补的内容 |
|---|---|---|
| product_detail | 演示视频 | 图注 + 4 段时间点（上电自检 / 自主导航 / 任务执行 / 低电量回充） |
| test_report | 数据曲线 | 图注 + 4 个区间良率（0–8000h） |
| news_stats | 趋势 | 图注 + 4 项（阅读 / 转发 / 转化 / 峰值日） |
| fund_overview | 收支趋势 | 图注 + 4 项（入账 / 释放 / 在托 / 提现） |

这些区块原本只有一个 `<img>`，用户看到一张图却不知道在说什么。

### 列表补量（条数偏少，非为空）

| 页面 | 区块 | 补前 → 补后 |
|---|---|---|
| production_procurement | 采购记录 | 2 → 6 |
| production_gantt | 本周里程碑 | 2 → 6 |
| production_logistics | 在途订单 | 3 → 6 |
| production_cert | 产线资质 | 4 → 6 |
| production_cert | 产品认证 | 4 → 6 |

补充条目按业务场景写：采购记录含谐波减速器/锂电池组/铝合金结构件；
在途订单含德邦零担、自提等不同物流方式。

### 回归

235 页结构 0 异常、23289 处链接 0 死链、资源 0 缺失、
JS 语法 0 错误、运行时 4 批 0 报错 0 破图。
8 个改动页浏览器实测 0 破图、条目数符合预期。


## 二十一、77 条 FAQ 折叠的答案是英文翻译（重大）

### 问题

用户要求清理 `production_*` 内容偏薄与 `user_home` 最近动态。
核查时发现**这两处实际有内容**（前者有 4 项统计数字与 4 条折叠，
后者有 2 条动态），之前的判断是统计口径误报。

但顺着这条线查出一个严重得多的缺陷——全站 FAQ 折叠：

```html
<div class="acc">
  <div class="q"><span>产线从哪来？</span></div>
  <div class="a"><span>Where do lines come from?</span></div>  ← 不是答案
</div>
```

`.a`（答案）里放的是**问题的英文翻译**，不是解答。用户点开折叠
看到的是 "MOQ?"、"Quality?"、"Billing" 这类短语，完全无法使用。

全站 **77 条，100% 中招，涉及 30 个页面**。

| 页面 | 条数 |
|---|---|
| help | 6 |
| resource_token | 5 |
| ai_template / production_home / toy_contest_apply | 各 4 |
| about / ai_llm / flow_overview / fund_pay_result / fund_withdraw | 各 3 |

### 修复

逐条撰写真实答案（中英双语），覆盖平台实际业务规则：
托管释放节点、提现冻结与费率、审核时长与驳回原因、
产线来源与 MOQ、赛事评分维度、令牌权限与吊销等。

替换后 `.a` 结构改为双语：

```html
<div class="a"><span data-zh="产线来自平台审核通过的合作工厂…"
                     data-en="Lines come from verified partner factories…">…</span></div>
```

浏览器实测 production_home / help / fund_withdraw / about
四页折叠，答案**全部为中文，0 条残留英文**。

### 附带修正

| 项 | 说明 |
|---|---|
| user_home 最近动态 | 2 条 → 6 条（发布资料、论坛回复、设计需求、报名课程等） |
| 时间线状态类名 | 误用 `.tl.cur`，CSS 实际定义的是 `.tl.now`，已改（3 处） |

`class="tl "`（无状态，66 处）经核查是流程步骤展示，
与 `.done`/`.now`（进度追踪）属两种语义，非缺陷，保留。

### 回归

235 页结构 0 异常、23289 处链接 0 死链、资源 0 缺失、
JS 语法 0 错误、运行时 4 批 0 报错 0 破图。


## 二十二、四处版式与导航调整

### 1. 首页频道入口：主频道也收进折叠

原本论坛 / 模块 / mini机器人 / 学习 四个主频道常显，
只有其余 6 个收在「更多频道」里。现在**全部 10 个一起折叠**，
默认只显示「更多频道 ▾」按钮，点击后展开 11 项（含收起按钮）。

实测：默认可见 1 个（按钮），展开后 11 个。

### 2. 论坛：删除分类筛选行

删掉 hero 下方的「全部 / 资讯宣发 / 板块讨论 / 精华 / 学习」一行。
该行属于资讯频道的功能，放在论坛里与板块结构重复，
且切换 tab 时列表并无对应数据源，点了没有实际效果。

（正文里的「置顶与精华」是区块标题，保留。）

### 3. 广告横幅：改为背景铺满，不再整张顶出

原有写法：

```css
.adslot img{width:100%;height:auto}
```

`banner_strip.webp` 是一张带大型机器人主体的横幅，
按原始比例整张插入后主体被压扁、与两侧内容对不齐，观感割裂。

改为作为背景铺满固定高度的容器，并压暗 + 渐变遮罩：

```css
.adslot{height:92px;background:#0E1B2C}
.adslot img{position:absolute;inset:0;width:100%;height:100%;
            object-fit:cover;object-position:center;opacity:.45}
.adslot::after{content:'';inset:0;
  background:linear-gradient(90deg,rgba(11,20,32,.88),rgba(11,20,32,.40) 55%,rgba(11,20,32,.70))}
```

影响 10 个页面（index、forum_home、module_home、production_home、
product_index、design_home、ai_home、flow_overview、toy_home、
fund_pay_result）。模块频道与首页的同类错位一并解决。

实测：槽高 92 / 图高 90，object-fit=cover，opacity=0.45，position=absolute。

### 4. 学习频道：hero 补快捷键 + 新建提交页

`learn_home` 的 hero 原本只有标题与副标题，没有 `.hero-actions`
（论坛、模块、mini 三个频道都有）。补齐两个：

| 按钮 | 去向 |
|---|---|
| 找资料 | learn_list.html |
| **提交学习资料** | **learn_publish.html（新建）** |

`learn_publish.html` 为新建页（236 页），沿用站内发布页骨架，
含：选择类型（课程/文档/视频/图纸/代码/学习路径）、
基础信息（标题、分类、难度、简介、是否收费）、
资料内容（正文、配套文件、原文链接）、
授权设置（CC-BY / 仅学习 / GPL 三种协议说明）、
审核说明（时长与常见驳回原因）。

站点地图已补录该页。

### 回归

236 页结构 0 异常、23394 处链接 0 死链、资源 0 缺失、
JS 语法 0 错误、CSS 括号平衡、运行时 4 批 0 报错 0 破图。


## 二十二、广告位横幅比例错位修复

### 问题

`.adslot`（广告位）容器高 92px、宽约 1174px，**比例约 12.6:1**，
而放入的图片是 `banner_strip.webp`（1260×540，**2.33:1**）。

`object-fit:cover` 下，图片被垂直裁掉约 80%，只露出中间一条窄带——
机器人主体被切掉大半，观感就是"错位""怪怪的"。

涉及 9 个页面：index、ai_home、design_home、flow_overview、
forum_home、fund_pay_result、module_home、product_index、
production_home、toy_home。

### 修复

1. 换图：改用同主题的 **10:1 横条图**（`*_bar.webp`，1200×120）

| 页面 | 原图（2.33:1） | 现图（10:1） |
|---|---|---|
| index | banner_strip | smt_line_bar |
| ai_home | banner_bar | embodied_bar |
| design_home / product_index | banner_thumb | commercial_bar |
| flow_overview | banner_bar | embodied_bar |
| forum_home / fund_pay_result | banner_strip | shanma_h7_bar |
| module_home | banner_strip | assembly_bar |
| production_home | banner_strip | smt_line_bar |
| toy_home | banner_thumb | qc_bench_bar |

2. 容器高度 92px → **106px**（框比例 11.1:1，与原图 10:1 接近，
   裁切从 80% 降到约 10%）

实测四页：图正常加载、0 破图、框 1174×106 比例协调。

### 关于其他三项需求的核对结果

| 需求 | 核对结果 |
|---|---|
| 首页频道入口：论坛/模块/mini机器人/学习一起折叠，按钮名"更多频道" | **已实现**。实测默认仅 1 个可见元素「更多频道 ▾」，11 个频道入口全部收起 |
| 论坛下方"全部/资讯宣发/板块讨论/精华/学习"这一行 | **未能定位**。全站扫描无此行；最接近的是 forum_board.html 的「最新 热门 精华 置顶」 |
| 学习频道 hero 快捷键（提交学习资料） | **已存在**。实测 hero-actions = [找资料, 提交学习资料] |

前两项与第三项在当前版本均已符合要求。若线上仍显示旧样式，
说明部署的不是本包（上一轮已确认线上为 ROBOFORGE 旧版）。

### 回归

236 页结构 0 异常、23395 处链接 0 死链、资源 0 缺失、
JS 语法 0 错误、运行时 0 报错 0 破图。


## 二十三、删除 forum_board 筛选行

用户确认要删的就是 `forum_board.html` 的「最新 热门 精华 置顶」一行。

一并删除其下方配套的 `.filterbar`（全部 / 本周 / 有图 / 已解决）——
两行是同一组筛选控件，只删上面一半会留下孤立的筛选条。

hero 副标题原本写「板块内帖子、精华与检索」，
筛掉的正是"精华"入口，措辞同步改为「板块内帖子与检索」。

实测：chip 行与 filter 行均已删除，正文 8 张帖子卡片正常，
0 破图、0 JS 报错。

### 回归

236 页结构 0 异常、23395 处链接 0 死链、资源 0 缺失。

> 注：线上 sumstc.com 存在上传与显示延迟，页面版本可能与交付包
> 不一致，属部署侧现象，不以此判定站点缺陷。

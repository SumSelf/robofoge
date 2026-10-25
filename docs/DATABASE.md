# ROBOFORGE · 数据库设计（对象形式）

> 共 **106** 张表 · **15** 个域 · 建表脚本见 `schema.sql`

## 通用约定

| 项 | 约定 |
|---|---|
| 前缀 | 全部表以 `rf_` 开头（ROBOFORGE） |
| 主键 | `id BIGINT UNSIGNED AUTO_INCREMENT`，业务编号另存 `xxx_no VARCHAR(32) UNIQUE` |
| 时间 | `created_at` / `updated_at` / `deleted_at`（软删） |
| 金额 | `INT`，单位「分」，前端 `/100` |
| 双语 | 中文字段 + `_en` 英文并列（如 `name` / `name_en`） |
| 状态 | `TINYINT` 枚举，取值见各表注释 |
| 图片 | 存 URL 字符串，多图用 `JSON` 数组 |
| 引擎 | InnoDB / utf8mb4 |


## 一、域划分

| 域 | 名称 | 表数 | 主要表 |
|----|------|------|--------|
| `user` | A. 用户与权限 | 14 | `rf_user`, `rf_user_credential`, `rf_sms_code`… |
| `content` | B. 内容宣发 | 11 | `rf_category`, `rf_brand`, `rf_news`… |
| `forum` | C. 论坛社区 | 3 | `rf_board`, `rf_post`, `rf_post_reply` |
| `learn` | D. 学习平台 | 5 | `rf_learn`, `rf_learn_lesson`, `rf_learn_path`… |
| `product` | E. 产品与模块 | 6 | `rf_product`, `rf_product_spec`, `rf_product_interface`… |
| `biz` | F. 需求与项目 | 8 | `rf_demand`, `rf_demand_bid`, `rf_project`… |
| `design` | G. 设计中心 | 6 | `rf_design_demand`, `rf_design_task`, `rf_design_drawing`… |
| `production` | H. 流水线生产 | 21 | `rf_production_line`, `rf_production_order`, `rf_production_progress`… |
| `flow` | I. 全流程管控 | 4 | `rf_flow_stage`, `rf_flow_gate`, `rf_flow_handover`… |
| `ai` | J. AI 智造 | 8 | `rf_ai_session`, `rf_ai_message`, `rf_llm_config`… |
| `msg` | K. 沟通与通知 | 5 | `rf_conversation`, `rf_message`, `rf_message_group`… |
| `fund` | L. 资金 | 6 | `rf_fund_account`, `rf_fund_flow`, `rf_payment`… |
| `ticket` | M. 工单 | 3 | `rf_ticket`, `rf_ticket_reply`, `rf_ticket_log` |
| `file` | N. 文件与资源 | 4 | `rf_file`, `rf_download_token`, `rf_download_pack`… |
| `sys` | O. 系统与配置 | 2 | `rf_setting`, `rf_dict` |

## 二、表结构


### A. 用户与权限（14 张）


#### `rf_user` 用户主表

> 平台所有注册用户（个人/厂商/集成商/机构）

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `user_no` | `VARCHAR(32)` | UNQ NN | 用户编号 U3000 |
| `account` | `VARCHAR(64)` | UNQ NN | 登录账号 |
| `phone` | `VARCHAR(20)` | UNQ | 手机号 |
| `email` | `VARCHAR(128)` | — | 邮箱 |
| `nickname` | `VARCHAR(64)` | NN | 昵称 |
| `avatar` | `VARCHAR(255)` | — | 头像URL |
| `user_type` | `TINYINT` | NN DEF:1 | 1个人 2厂商 3集成商 4机构 |
| `level` | `TINYINT` | NN DEF:1 | 等级 1-9 |
| `exp` | `INT` | NN DEF:0 | 经验值 |
| `credit_score` | `INT` | NN DEF:100 | 信用分 |
| `verify_status` | `TINYINT` | NN DEF:0 | 0未认证 1审核中 2已认证 3驳回 |
| `verify_type` | `TINYINT` | — | 1个人实名 2企业 |
| `status` | `TINYINT` | NN DEF:1 | 1正常 2冻结 3注销 |
| `city` | `VARCHAR(64)` | — | 城市 |
| `intro` | `VARCHAR(500)` | — | 简介 |
| `intro_en` | `VARCHAR(500)` | — | 简介(英) |
| `tags` | `VARCHAR(255)` | — | 标签 逗号分隔 |
| `followers` | `INT` | NN DEF:0 | 粉丝数 |
| `following` | `INT` | NN DEF:0 | 关注数 |
| `product_count` | `INT` | NN DEF:0 | 发布产品数 |
| `project_count` | `INT` | NN DEF:0 | 参与项目数 |
| `like_count` | `INT` | NN DEF:0 | 获赞数 |
| `last_login_at` | `DATETIME` | — | 最后登录 |
| `last_login_ip` | `VARCHAR(64)` | — | 最后登录IP |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |
| `updated_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | 更新时间 |
| `deleted_at` | `DATETIME` | — | 软删 |

**索引**：`(user_type,status)`；`(exp DESC)`

#### `rf_user_credential` 登录凭证

> 密码哈希与登录密钥，与用户一对一

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `user_id` | `BIGINT UNSIGNED` | NN UNQ FK:rf_user.id | 用户ID |
| `password_hash` | `VARCHAR(128)` | NN | 密码哈希 bcrypt |
| `pwd_salt` | `VARCHAR(64)` | — | 盐 |
| `pwd_updated_at` | `DATETIME` | — | 密码更新时间 |
| `login_fail_count` | `TINYINT` | NN DEF:0 | 连续失败次数 |
| `locked_until` | `DATETIME` | — | 锁定到期 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_sms_code` 短信验证码

> 注册/登录/找回密码验证码

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `phone` | `VARCHAR(20)` | NN IDX | 手机号 |
| `scene` | `TINYINT` | NN | 1注册 2登录 3找回密码 4换绑 |
| `code` | `VARCHAR(8)` | NN | 验证码 |
| `ip` | `VARCHAR(64)` | — | 请求IP |
| `used` | `TINYINT` | NN DEF:0 | 是否已用 |
| `expire_at` | `DATETIME` | NN | 过期时间 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

**索引**：`(phone,scene)`

#### `rf_verify_apply` 认证申请

> 个人实名/企业认证材料与审核结果

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `apply_no` | `VARCHAR(32)` | UNQ NN | 申请编号 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 用户ID |
| `verify_type` | `TINYINT` | NN | 1个人实名 2企业 |
| `real_name` | `VARCHAR(64)` | — | 真实姓名 |
| `id_no` | `VARCHAR(64)` | — | 身份证号(加密) |
| `license_no` | `VARCHAR(64)` | — | 营业执照号 |
| `company` | `VARCHAR(128)` | — | 企业名称 |
| `files` | `JSON` | — | 证明材料URL数组 |
| `status` | `TINYINT` | NN DEF:0 | 0待审 1通过 2驳回 |
| `reviewer_id` | `BIGINT UNSIGNED` | — | 审核人 |
| `review_at` | `DATETIME` | — | 审核时间 |
| `remark` | `VARCHAR(255)` | — | 审核意见 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_role` 角色

> 后台角色定义

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `role_code` | `VARCHAR(32)` | UNQ NN | 角色编码 |
| `role_name` | `VARCHAR(64)` | NN | 角色名 |
| `role_name_en` | `VARCHAR(64)` | — | 角色名(英) |
| `scope` | `TINYINT` | NN DEF:2 | 1前台 2后台 |
| `remark` | `VARCHAR(255)` | — | 说明 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_permission` 权限点

> 细粒度权限，对应菜单与按钮

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `perm_code` | `VARCHAR(64)` | UNQ NN | 权限编码 |
| `perm_name` | `VARCHAR(64)` | NN | 权限名 |
| `group_code` | `VARCHAR(32)` | — | 权限组 |
| `perm_type` | `TINYINT` | NN DEF:1 | 1菜单 2按钮 3接口 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_user_role` 用户角色关联

> 用户与角色多对多

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 用户ID |
| `role_id` | `BIGINT UNSIGNED` | NN FK:rf_role.id | 角色ID |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

**索引**：`UNIQUE (user_id,role_id)`

#### `rf_role_permission` 角色权限关联

> 角色与权限多对多

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `role_id` | `BIGINT UNSIGNED` | NN FK:rf_role.id | 角色ID |
| `perm_id` | `BIGINT UNSIGNED` | NN FK:rf_permission.id | 权限ID |

**索引**：`UNIQUE (role_id,perm_id)`

#### `rf_login_log` 登录日志

> 含后台独立登录审计（IP/UA/结果）

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `user_id` | `BIGINT UNSIGNED` | IDX | 用户ID |
| `account` | `VARCHAR(64)` | — | 登录账号 |
| `login_type` | `TINYINT` | NN DEF:1 | 1密码 2短信 3令牌 |
| `entry` | `TINYINT` | NN DEF:1 | 1前台 2后台 |
| `ip` | `VARCHAR(64)` | — | IP |
| `ip_location` | `VARCHAR(128)` | — | IP归属地 |
| `ua` | `VARCHAR(500)` | — | UserAgent |
| `result` | `TINYINT` | NN DEF:1 | 1成功 0失败 |
| `fail_reason` | `VARCHAR(128)` | — | 失败原因 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 登录时间 |

**索引**：`(entry,created_at)`

#### `rf_ip_whitelist` IP白名单

> 后台访问来源IP管控

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `ip` | `VARCHAR(64)` | NN | IP或CIDR |
| `scope` | `TINYINT` | NN DEF:2 | 1前台 2后台 |
| `remark` | `VARCHAR(255)` | — | 说明 |
| `status` | `TINYINT` | NN DEF:1 | 1启用 0停用 |
| `operator_id` | `BIGINT UNSIGNED` | — | 操作人 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_2fa_secret` 双因子密钥

> 后台强制双因子认证

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `user_id` | `BIGINT UNSIGNED` | NN UNQ FK:rf_user.id | 用户ID |
| `secret` | `VARCHAR(128)` | NN | TOTP密钥 |
| `backup_codes` | `JSON` | — | 备用码 |
| `enabled` | `TINYINT` | NN DEF:1 | 是否启用 |
| `last_used_at` | `DATETIME` | — | 最后使用 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_api_key` API密钥

> 开放接口密钥，供三方系统调用

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `key_id` | `VARCHAR(32)` | UNQ NN | KeyId |
| `key_secret` | `VARCHAR(128)` | NN | KeySecret |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 归属用户 |
| `name` | `VARCHAR(64)` | NN | 名称 |
| `scopes` | `VARCHAR(500)` | — | 授权范围 |
| `status` | `TINYINT` | NN DEF:1 | 1启用 0吊销 |
| `last_used_at` | `DATETIME` | — | 最后调用 |
| `expire_at` | `DATETIME` | — | 过期时间 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_operation_log` 操作日志

> 后台所有写操作留痕

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `operator_id` | `BIGINT UNSIGNED` | IDX | 操作人 |
| `module` | `VARCHAR(64)` | — | 模块 |
| `action` | `VARCHAR(64)` | — | 动作 |
| `target_type` | `VARCHAR(32)` | — | 对象类型 |
| `target_id` | `VARCHAR(64)` | — | 对象ID |
| `detail` | `JSON` | — | 变更明细 |
| `ip` | `VARCHAR(64)` | — | IP |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 操作时间 |

**索引**：`(module,created_at)`

#### `rf_user_follow` 用户关注

> 用户之间关注关系

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `follower_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 关注者 |
| `followee_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 被关注者 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 关注时间 |

**索引**：`UNIQUE (follower_id,followee_id)`

### B. 内容宣发（11 张）


#### `rf_category` 分类字典

> 产品/资讯/资料统一分类树

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `cat_code` | `VARCHAR(32)` | UNQ NN | 分类编码 commercial/module/toy |
| `cat_name` | `VARCHAR(64)` | NN | 分类名 |
| `cat_name_en` | `VARCHAR(64)` | — | 分类名(英) |
| `parent_id` | `BIGINT UNSIGNED` | NN DEF:0 | 父分类 |
| `cat_type` | `TINYINT` | NN | 1产品 2资讯 3资料 4论坛 |
| `icon` | `VARCHAR(255)` | — | 图标 |
| `sort` | `INT` | NN DEF:0 | 排序 |
| `status` | `TINYINT` | NN DEF:1 | 1启用 0停用 |

**索引**：`(cat_type,parent_id)`

#### `rf_brand` 品牌厂商

> 厂商号主体

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `brand_name` | `VARCHAR(64)` | NN | 品牌名 |
| `brand_name_en` | `VARCHAR(64)` | — | 品牌名(英) |
| `logo` | `VARCHAR(255)` | — | Logo |
| `owner_user_id` | `BIGINT UNSIGNED` | FK:rf_user.id | 绑定用户 |
| `company` | `VARCHAR(128)` | — | 企业主体 |
| `city` | `VARCHAR(64)` | — | 所在城市 |
| `intro` | `VARCHAR(1000)` | — | 品牌介绍 |
| `intro_en` | `VARCHAR(1000)` | — | 品牌介绍(英) |
| `subscriber_count` | `INT` | NN DEF:0 | 订阅数 |
| `verify_status` | `TINYINT` | NN DEF:0 | 认证状态 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_news` 资讯宣发

> 厂商/个人产品新闻宣发主表

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `news_no` | `VARCHAR(32)` | UNQ NN | 资讯编号 N9001 |
| `title` | `VARCHAR(200)` | NN | 标题 |
| `title_en` | `VARCHAR(200)` | — | 标题(英) |
| `brand_id` | `BIGINT UNSIGNED` | FK:rf_brand.id | 品牌 |
| `publisher_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 发布者 |
| `cat_code` | `VARCHAR(32)` | IDX | 分类编码 |
| `cover` | `VARCHAR(255)` | — | 封面图 |
| `cover_thumb` | `VARCHAR(255)` | — | 缩略图 |
| `summary` | `VARCHAR(500)` | — | 摘要 |
| `summary_en` | `VARCHAR(500)` | — | 摘要(英) |
| `content` | `MEDIUMTEXT` | — | 正文富文本 |
| `content_en` | `MEDIUMTEXT` | — | 正文(英) |
| `tags` | `VARCHAR(255)` | — | 标签 |
| `is_top` | `TINYINT` | NN DEF:0 | 是否置顶 |
| `is_featured` | `TINYINT` | NN DEF:0 | 是否头条 |
| `is_hot` | `TINYINT` | NN DEF:0 | 是否热门 |
| `audit_status` | `TINYINT` | NN DEF:0 | 0草稿 1待初审 2待复审 3已发布 4驳回 |
| `audit_level` | `TINYINT` | NN DEF:1 | 当前审核级别 |
| `views` | `INT` | NN DEF:0 | 阅读数 |
| `likes` | `INT` | NN DEF:0 | 点赞数 |
| `comment_count` | `INT` | NN DEF:0 | 评论数 |
| `shares` | `INT` | NN DEF:0 | 分享数 |
| `publish_at` | `DATETIME` | — | 发布时间 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |
| `updated_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | 更新时间 |
| `deleted_at` | `DATETIME` | — | 软删 |

**索引**：`(audit_status,is_top,publish_at)`；`(brand_id,publish_at)`

#### `rf_news_audit` 资讯审核记录

> 多级审核流程留痕

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `news_id` | `BIGINT UNSIGNED` | NN FK:rf_news.id | 资讯ID |
| `level` | `TINYINT` | NN | 审核级别 1初审 2复审 3终审 |
| `reviewer_id` | `BIGINT UNSIGNED` | — | 审核人 |
| `result` | `TINYINT` | NN | 1通过 2驳回 |
| `remark` | `VARCHAR(500)` | — | 审核意见 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 审核时间 |

**索引**：`(news_id,level)`

#### `rf_news_stats` 资讯日统计

> 按天聚合的阅读/点赞数据

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `news_id` | `BIGINT UNSIGNED` | NN FK:rf_news.id | 资讯ID |
| `stat_date` | `DATE` | NN | 统计日 |
| `views` | `INT` | NN DEF:0 | 阅读 |
| `likes` | `INT` | NN DEF:0 | 点赞 |
| `comments` | `INT` | NN DEF:0 | 评论 |

**索引**：`UNIQUE (news_id,stat_date)`

#### `rf_comment` 通用评论

> 资讯/产品/帖子/课程统一评论表

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `target_type` | `VARCHAR(32)` | NN | news/product/post/learn/project |
| `target_id` | `BIGINT UNSIGNED` | NN | 对象ID |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 评论人 |
| `parent_id` | `BIGINT UNSIGNED` | NN DEF:0 | 父评论 |
| `content` | `VARCHAR(2000)` | NN | 内容 |
| `images` | `JSON` | — | 图片 |
| `likes` | `INT` | NN DEF:0 | 点赞 |
| `status` | `TINYINT` | NN DEF:1 | 1正常 2屏蔽 3待审 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

**索引**：`(target_type,target_id,status)`

#### `rf_like` 点赞记录

> 统一点赞，防重复

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `target_type` | `VARCHAR(32)` | NN | 对象类型 |
| `target_id` | `BIGINT UNSIGNED` | NN | 对象ID |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 点赞人 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 时间 |

**索引**：`UNIQUE (target_type,target_id,user_id)`

#### `rf_favorite` 收藏

> 产品/资料/帖子收藏

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 用户 |
| `target_type` | `VARCHAR(32)` | NN | 对象类型 |
| `target_id` | `BIGINT UNSIGNED` | NN | 对象ID |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 收藏时间 |

**索引**：`UNIQUE (user_id,target_type,target_id)`

#### `rf_subscribe` 厂商号订阅

> 用户订阅品牌宣发

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 用户 |
| `brand_id` | `BIGINT UNSIGNED` | NN FK:rf_brand.id | 品牌 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 订阅时间 |

**索引**：`UNIQUE (user_id,brand_id)`

#### `rf_hotword` 搜索热词

> 各频道搜索热词

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `channel` | `VARCHAR(32)` | NN | 频道 news/product/module/toy/learn |
| `word` | `VARCHAR(64)` | NN | 热词 |
| `word_en` | `VARCHAR(64)` | — | 热词(英) |
| `search_count` | `INT` | NN DEF:0 | 搜索次数 |
| `sort` | `INT` | NN DEF:0 | 排序 |

**索引**：`(channel,search_count)`

#### `rf_ad_slot` 广告推荐位

> 各页面广告位与投放内容

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `slot_code` | `VARCHAR(32)` | UNQ NN | 位编码 |
| `slot_name` | `VARCHAR(64)` | NN | 位名称 |
| `page` | `VARCHAR(64)` | — | 所在页面 |
| `image` | `VARCHAR(255)` | — | 图片 |
| `link` | `VARCHAR(255)` | — | 跳转 |
| `size` | `VARCHAR(32)` | — | 尺寸 |
| `status` | `TINYINT` | NN DEF:1 | 1启用 0停用 |
| `start_at` | `DATETIME` | — | 开始 |
| `end_at` | `DATETIME` | — | 结束 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

### C. 论坛社区（3 张）


#### `rf_board` 论坛板块

> 分类论坛板块

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `board_name` | `VARCHAR(64)` | NN | 板块名 |
| `board_name_en` | `VARCHAR(64)` | — | 板块名(英) |
| `cat_code` | `VARCHAR(32)` | — | 关联分类 |
| `icon` | `VARCHAR(255)` | — | 图标 |
| `intro` | `VARCHAR(500)` | — | 简介 |
| `post_count` | `INT` | NN DEF:0 | 帖子数 |
| `sort` | `INT` | NN DEF:0 | 排序 |
| `status` | `TINYINT` | NN DEF:1 | 状态 |

#### `rf_post` 论坛帖子

> 帖子主表（综合/产品/学习/二手）

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `post_no` | `VARCHAR(32)` | UNQ NN | 帖子编号 |
| `board_id` | `BIGINT UNSIGNED` | NN FK:rf_board.id | 板块 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 发帖人 |
| `title` | `VARCHAR(200)` | NN | 标题 |
| `title_en` | `VARCHAR(200)` | — | 标题(英) |
| `content` | `MEDIUMTEXT` | NN | 正文 |
| `content_en` | `MEDIUMTEXT` | — | 正文(英) |
| `excerpt` | `VARCHAR(300)` | — | 摘要 |
| `excerpt_en` | `VARCHAR(300)` | — | 摘要(英) |
| `cover` | `VARCHAR(255)` | — | 封面 |
| `tags` | `VARCHAR(255)` | — | 标签 |
| `is_top` | `TINYINT` | NN DEF:0 | 置顶 |
| `is_essence` | `TINYINT` | NN DEF:0 | 精华 |
| `views` | `INT` | NN DEF:0 | 浏览 |
| `likes` | `INT` | NN DEF:0 | 点赞 |
| `reply_count` | `INT` | NN DEF:0 | 回复数 |
| `status` | `TINYINT` | NN DEF:1 | 1正常 2屏蔽 3待审 |
| `last_reply_at` | `DATETIME` | — | 最后回复 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |
| `updated_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | 更新时间 |

**索引**：`(board_id,is_top,last_reply_at)`

#### `rf_post_reply` 帖子回复

> 楼层回复，支持楼中楼

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `post_id` | `BIGINT UNSIGNED` | NN FK:rf_post.id | 帖子 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 回复人 |
| `parent_id` | `BIGINT UNSIGNED` | NN DEF:0 | 父回复 |
| `content` | `VARCHAR(2000)` | NN | 内容 |
| `floor_no` | `INT` | — | 楼层 |
| `likes` | `INT` | NN DEF:0 | 点赞 |
| `status` | `TINYINT` | NN DEF:1 | 状态 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

**索引**：`(post_id,floor_no)`

### D. 学习平台（5 张）


#### `rf_learn` 学习资料

> 课程/文档/视频主表

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `learn_no` | `VARCHAR(32)` | UNQ NN | 资料编号 |
| `title` | `VARCHAR(200)` | NN | 标题 |
| `title_en` | `VARCHAR(200)` | — | 标题(英) |
| `cat_code` | `VARCHAR(32)` | IDX | 分类 |
| `author_id` | `BIGINT UNSIGNED` | FK:rf_user.id | 作者 |
| `cover` | `VARCHAR(255)` | — | 封面 |
| `desc` | `VARCHAR(1000)` | — | 简介 |
| `desc_en` | `VARCHAR(1000)` | — | 简介(英) |
| `level` | `TINYINT` | NN DEF:1 | 1入门 2进阶 3高级 |
| `media_type` | `TINYINT` | NN DEF:1 | 1视频 2文档 3代码 4课程 |
| `lessons` | `INT` | NN DEF:0 | 课时数 |
| `hours` | `DECIMAL(6,1)` | — | 总时长 |
| `students` | `INT` | NN DEF:0 | 学习人数 |
| `rating` | `DECIMAL(2,1)` | NN DEF:0 | 评分 |
| `is_free` | `TINYINT` | NN DEF:1 | 是否免费 |
| `price` | `INT` | NN DEF:0 | 价格(分) |
| `status` | `TINYINT` | NN DEF:1 | 1上架 0下架 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_learn_lesson` 课时

> 课程章节明细

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `learn_id` | `BIGINT UNSIGNED` | NN FK:rf_learn.id | 课程 |
| `title` | `VARCHAR(200)` | NN | 课时标题 |
| `title_en` | `VARCHAR(200)` | — | 课时标题(英) |
| `sort` | `INT` | NN DEF:0 | 排序 |
| `duration` | `INT` | — | 时长(秒) |
| `video_url` | `VARCHAR(255)` | — | 视频 |
| `doc_url` | `VARCHAR(255)` | — | 文档 |
| `is_free` | `TINYINT` | NN DEF:0 | 是否免费试看 |

**索引**：`(learn_id,sort)`

#### `rf_learn_path` 学习路径

> 入门→进阶→实战路径

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `path_name` | `VARCHAR(64)` | NN | 路径名 |
| `path_name_en` | `VARCHAR(64)` | — | 路径名(英) |
| `desc` | `VARCHAR(500)` | — | 说明 |
| `stages` | `INT` | NN DEF:0 | 阶段数 |
| `cover` | `VARCHAR(255)` | — | 封面 |
| `sort` | `INT` | NN DEF:0 | 排序 |

#### `rf_learn_path_item` 路径节点

> 路径与课程关联

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `path_id` | `BIGINT UNSIGNED` | NN FK:rf_learn_path.id | 路径 |
| `learn_id` | `BIGINT UNSIGNED` | NN FK:rf_learn.id | 课程 |
| `stage_no` | `INT` | NN | 阶段序号 |
| `sort` | `INT` | NN DEF:0 | 排序 |

#### `rf_learn_enroll` 学习报名

> 课程与赛事报名记录

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `enroll_no` | `VARCHAR(32)` | UNQ NN | 报名编号 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 用户 |
| `target_type` | `TINYINT` | NN | 1课程 2赛事 |
| `target_id` | `BIGINT UNSIGNED` | NN | 对象ID |
| `contact` | `VARCHAR(64)` | — | 联系人 |
| `phone` | `VARCHAR(20)` | — | 电话 |
| `remark` | `VARCHAR(500)` | — | 备注 |
| `status` | `TINYINT` | NN DEF:1 | 1待确认 2已确认 3取消 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 报名时间 |

**索引**：`(target_type,target_id)`

### E. 产品与模块（6 张）


#### `rf_product` 产品主表

> 商用/具身/定制/模块/组件/配件/五金/3D打印/外壳/玩具

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `product_no` | `VARCHAR(32)` | UNQ NN | 产品编号 P1000 |
| `sku` | `VARCHAR(64)` | — | SKU |
| `name` | `VARCHAR(200)` | NN | 产品名 |
| `name_en` | `VARCHAR(200)` | — | 产品名(英) |
| `cat_code` | `VARCHAR(32)` | NN IDX | 分类编码 |
| `brand_id` | `BIGINT UNSIGNED` | FK:rf_brand.id | 品牌 |
| `publisher_id` | `BIGINT UNSIGNED` | FK:rf_user.id | 发布者 |
| `cover` | `VARCHAR(255)` | — | 主图 |
| `images` | `JSON` | — | 图集 |
| `price` | `INT` | NN DEF:0 | 价格(分) |
| `price_text` | `VARCHAR(32)` | — | 价格展示 |
| `stock` | `INT` | NN DEF:0 | 库存 |
| `sales` | `INT` | NN DEF:0 | 销量 |
| `views` | `INT` | NN DEF:0 | 浏览 |
| `rating` | `DECIMAL(2,1)` | NN DEF:0 | 评分 |
| `review_count` | `INT` | NN DEF:0 | 评价数 |
| `is_featured` | `TINYINT` | NN DEF:0 | 是否主打 |
| `is_open_source` | `TINYINT` | NN DEF:0 | 是否开源 |
| `tags` | `VARCHAR(255)` | — | 标签 |
| `tags_en` | `VARCHAR(255)` | — | 标签(英) |
| `desc` | `TEXT` | — | 描述 |
| `desc_en` | `TEXT` | — | 描述(英) |
| `status` | `TINYINT` | NN DEF:0 | 0草稿 1待审 2在售 3下架 4驳回 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |
| `updated_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | 更新时间 |
| `deleted_at` | `DATETIME` | — | 软删 |

**索引**：`(cat_code,status,sales)`

#### `rf_product_spec` 产品规格

> 参数名/值/英文名键值对

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `product_id` | `BIGINT UNSIGNED` | NN FK:rf_product.id | 产品 |
| `spec_name` | `VARCHAR(64)` | NN | 参数名 |
| `spec_value` | `VARCHAR(500)` | NN | 参数值 |
| `spec_name_en` | `VARCHAR(64)` | — | 参数名(英) |
| `spec_value_en` | `VARCHAR(500)` | — | 参数值(英) |
| `sort` | `INT` | NN DEF:0 | 排序 |

**索引**：`(product_id,sort)`

#### `rf_product_interface` 外设接口

> 主控板类产品的接口清单

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `product_id` | `BIGINT UNSIGNED` | NN FK:rf_product.id | 产品 |
| `iface_name` | `VARCHAR(64)` | NN | 接口名 |
| `iface_name_en` | `VARCHAR(64)` | — | 接口名(英) |
| `iface_type` | `VARCHAR(32)` | — | 类型 输入/输出/总线/通信 |
| `qty` | `INT` | NN DEF:1 | 数量 |
| `note` | `VARCHAR(255)` | — | 说明 |
| `note_en` | `VARCHAR(255)` | — | 说明(英) |

**索引**：`(product_id)`

#### `rf_product_file` 产品资料

> 3D尺寸/硬件资料/软件资料/演示视频

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `product_id` | `BIGINT UNSIGNED` | NN FK:rf_product.id | 产品 |
| `file_name` | `VARCHAR(200)` | NN | 文件名 |
| `file_name_en` | `VARCHAR(200)` | — | 文件名(英) |
| `file_type` | `VARCHAR(16)` | — | 格式 STEP/PDF/STL/ZIP/XLSX |
| `file_size` | `VARCHAR(32)` | — | 大小 |
| `file_url` | `VARCHAR(255)` | — | 地址 |
| `doc_kind` | `TINYINT` | NN DEF:1 | 1三维 2硬件 3软件 4视频 5文档 |
| `downloads` | `INT` | NN DEF:0 | 下载数 |
| `need_token` | `TINYINT` | NN DEF:0 | 是否需令牌 |

**索引**：`(product_id,doc_kind)`

#### `rf_product_review` 产品评价

> 评分与评价内容

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `product_id` | `BIGINT UNSIGNED` | NN FK:rf_product.id | 产品 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 评价人 |
| `order_id` | `BIGINT UNSIGNED` | — | 订单 |
| `rating` | `TINYINT` | NN | 总分1-5 |
| `rating_detail` | `JSON` | — | 分项评分 |
| `content` | `VARCHAR(2000)` | — | 内容 |
| `content_en` | `VARCHAR(2000)` | — | 内容(英) |
| `images` | `JSON` | — | 图片 |
| `status` | `TINYINT` | NN DEF:1 | 1显示 2隐藏 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

**索引**：`(product_id,status)`

#### `rf_product_compare` 对比记录

> 用户对比操作留痕

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `user_id` | `BIGINT UNSIGNED` | IDX | 用户 |
| `product_ids` | `VARCHAR(255)` | NN | 产品ID列表 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 时间 |

### F. 需求与项目（8 张）


#### `rf_demand` 定制需求

> 商业需求发布主表

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `demand_no` | `VARCHAR(32)` | UNQ NN | 需求编号 |
| `title` | `VARCHAR(200)` | NN | 标题 |
| `title_en` | `VARCHAR(200)` | — | 标题(英) |
| `owner_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 发布者 |
| `cat_code` | `VARCHAR(32)` | — | 分类 |
| `budget` | `INT` | NN DEF:0 | 预算(分) |
| `deadline` | `DATE` | — | 截止 |
| `cover` | `VARCHAR(255)` | — | 封面 |
| `desc` | `TEXT` | — | 描述 |
| `desc_en` | `TEXT` | — | 描述(英) |
| `attach_files` | `JSON` | — | 附件 |
| `bid_count` | `INT` | NN DEF:0 | 应征数 |
| `status` | `TINYINT` | NN DEF:1 | 1招募中 2对接中 3已成交 4关闭 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

**索引**：`(status,deadline)`

#### `rf_demand_bid` 需求应征

> 集成商/开发者对需求的应征

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `demand_id` | `BIGINT UNSIGNED` | NN FK:rf_demand.id | 需求 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 应征人 |
| `quote` | `INT` | NN DEF:0 | 报价(分) |
| `days` | `INT` | — | 周期(天) |
| `proposal` | `VARCHAR(2000)` | — | 方案说明 |
| `proposal_en` | `VARCHAR(2000)` | — | 方案说明(英) |
| `status` | `TINYINT` | NN DEF:1 | 1待查看 2已查看 3已选标 4未中标 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 应征时间 |

**索引**：`(demand_id,status)`

#### `rf_project` 项目

> AI拆分生成或用户创建的项目

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `project_no` | `VARCHAR(32)` | UNQ NN | 项目编号 |
| `name` | `VARCHAR(200)` | NN | 项目名 |
| `name_en` | `VARCHAR(200)` | — | 项目名(英) |
| `owner_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 负责人 |
| `demand_id` | `BIGINT UNSIGNED` | FK:rf_demand.id | 来源需求 |
| `ai_requirement_id` | `BIGINT UNSIGNED` | — | 来源AI需求 |
| `cover` | `VARCHAR(255)` | — | 封面 |
| `desc` | `TEXT` | — | 描述 |
| `desc_en` | `TEXT` | — | 描述(英) |
| `budget` | `INT` | NN DEF:0 | 预算(分) |
| `progress` | `TINYINT` | NN DEF:0 | 进度百分比 |
| `stage_code` | `VARCHAR(32)` | — | 当前阶段 |
| `status` | `TINYINT` | NN DEF:1 | 1需求确认 2方案设计 3集成开发 4测试验证 5交付完成 |
| `deadline` | `DATE` | — | 交付日期 |
| `member_count` | `INT` | NN DEF:0 | 成员数 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |
| `updated_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | 更新时间 |

**索引**：`(status,deadline)`

#### `rf_project_node` 项目节点

> 节点分组与进度明细

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `project_id` | `BIGINT UNSIGNED` | NN FK:rf_project.id | 项目 |
| `node_name` | `VARCHAR(128)` | NN | 节点名 |
| `node_name_en` | `VARCHAR(128)` | — | 节点名(英) |
| `group_name` | `VARCHAR(64)` | — | 分组 |
| `owner_id` | `BIGINT UNSIGNED` | FK:rf_user.id | 负责人 |
| `progress` | `TINYINT` | NN DEF:0 | 进度 |
| `status` | `TINYINT` | NN DEF:1 | 1待开始 2进行中 3已完成 |
| `deliverable` | `VARCHAR(500)` | — | 交付物说明 |
| `plan_start` | `DATE` | — | 计划开始 |
| `plan_end` | `DATE` | — | 计划结束 |
| `actual_end` | `DATE` | — | 实际完成 |
| `sort` | `INT` | NN DEF:0 | 排序 |

**索引**：`(project_id,sort)`

#### `rf_project_member` 项目成员

> 成员分工与角色

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `project_id` | `BIGINT UNSIGNED` | NN FK:rf_project.id | 项目 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 成员 |
| `role_name` | `VARCHAR(64)` | NN | 角色 项目经理/结构工程师 |
| `role_name_en` | `VARCHAR(64)` | — | 角色(英) |
| `node_id` | `BIGINT UNSIGNED` | — | 负责节点 |
| `status` | `TINYINT` | NN DEF:1 | 1在岗 2退出 |
| `joined_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 加入时间 |

**索引**：`UNIQUE (project_id,user_id)`

#### `rf_integration` 集成需求

> 模块与第三方硬件打通需求

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `integ_no` | `VARCHAR(32)` | UNQ NN | 编号 |
| `title` | `VARCHAR(200)` | NN | 标题 |
| `title_en` | `VARCHAR(200)` | — | 标题(英) |
| `owner_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 发布者 |
| `desc` | `TEXT` | — | 描述 |
| `desc_en` | `TEXT` | — | 描述(英) |
| `module_count` | `INT` | NN DEF:0 | 涉及模块数 |
| `budget` | `INT` | NN DEF:0 | 预算(分) |
| `status` | `TINYINT` | NN DEF:1 | 1待接单 2集成中 3已交付 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_test` 测试需求

> 整机/部件测试需求

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `test_no` | `VARCHAR(32)` | UNQ NN | 编号 |
| `title` | `VARCHAR(200)` | NN | 标题 |
| `title_en` | `VARCHAR(200)` | — | 标题(英) |
| `owner_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 发布者 |
| `desc` | `TEXT` | — | 描述 |
| `desc_en` | `TEXT` | — | 描述(英) |
| `test_type` | `VARCHAR(32)` | — | 测试类型 |
| `budget` | `INT` | NN DEF:0 | 预算(分) |
| `status` | `TINYINT` | NN DEF:1 | 1待接单 2测试中 3已完成 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_apply` 申请承接

> 加入项目/应征需求/承接集成测试的统一申请

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `apply_no` | `VARCHAR(32)` | UNQ NN | 申请编号 |
| `apply_type` | `TINYINT` | NN | 1项目 2需求 3集成 4测试 5邀请 |
| `target_id` | `BIGINT UNSIGNED` | NN | 对象ID |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 申请人 |
| `inviter_id` | `BIGINT UNSIGNED` | — | 邀请人 |
| `role_name` | `VARCHAR(64)` | — | 申请角色 |
| `quote` | `INT` | — | 报价(分) |
| `days` | `INT` | — | 周期 |
| `message` | `VARCHAR(1000)` | — | 留言 |
| `attach` | `JSON` | — | 附件 |
| `status` | `TINYINT` | NN DEF:1 | 1待处理 2已同意 3已拒绝 4已撤回 |
| `handler_id` | `BIGINT UNSIGNED` | — | 处理人 |
| `handle_at` | `DATETIME` | — | 处理时间 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 申请时间 |

**索引**：`(apply_type,target_id,status)`

### G. 设计中心（6 张）


#### `rf_design_demand` 设计需求

> 结构与电控设计需求

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `demand_no` | `VARCHAR(32)` | UNQ NN | 编号 |
| `title` | `VARCHAR(200)` | NN | 标题 |
| `title_en` | `VARCHAR(200)` | — | 标题(英) |
| `owner_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 发布者 |
| `project_id` | `BIGINT UNSIGNED` | FK:rf_project.id | 关联项目 |
| `design_type` | `TINYINT` | NN DEF:1 | 1结构 2电控 3外观 4算法 |
| `desc` | `TEXT` | — | 描述 |
| `desc_en` | `TEXT` | — | 描述(英) |
| `budget` | `INT` | NN DEF:0 | 预算(分) |
| `deadline` | `DATE` | — | 交付日期 |
| `status` | `TINYINT` | NN DEF:1 | 1招募 2设计中 3评审中 4已完成 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_design_task` 设计任务

> 设计需求拆解出的任务项

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `demand_id` | `BIGINT UNSIGNED` | NN FK:rf_design_demand.id | 需求 |
| `task_name` | `VARCHAR(128)` | NN | 任务名 |
| `task_name_en` | `VARCHAR(128)` | — | 任务名(英) |
| `owner_id` | `BIGINT UNSIGNED` | FK:rf_user.id | 负责人 |
| `status` | `TINYINT` | NN DEF:1 | 1待开始 2进行中 3已完成 |
| `progress` | `TINYINT` | NN DEF:0 | 进度 |
| `due_date` | `DATE` | — | 截止 |

**索引**：`(demand_id,status)`

#### `rf_design_drawing` 图纸

> 设计图纸与版本文件

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `drawing_no` | `VARCHAR(32)` | UNQ NN | 图号 |
| `demand_id` | `BIGINT UNSIGNED` | FK:rf_design_demand.id | 需求 |
| `project_id` | `BIGINT UNSIGNED` | FK:rf_project.id | 项目 |
| `name` | `VARCHAR(200)` | NN | 图名 |
| `name_en` | `VARCHAR(200)` | — | 图名(英) |
| `file_url` | `VARCHAR(255)` | — | 文件 |
| `format` | `VARCHAR(16)` | — | 格式 STEP/PDF/DXF |
| `version` | `VARCHAR(16)` | NN DEF:v1.0 | 版本 |
| `status` | `TINYINT` | NN DEF:1 | 1草稿 2评审中 3已发布 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_design_version` 设计版本

> 图纸版本变更记录

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `drawing_id` | `BIGINT UNSIGNED` | NN FK:rf_design_drawing.id | 图纸 |
| `version` | `VARCHAR(16)` | NN | 版本号 |
| `note` | `VARCHAR(500)` | — | 变更说明 |
| `operator_id` | `BIGINT UNSIGNED` | — | 操作人 |
| `is_frozen` | `TINYINT` | NN DEF:0 | 是否冻结 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

**索引**：`UNIQUE (drawing_id,version)`

#### `rf_design_review` 设计评审

> 多级评审流程与结论

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `review_no` | `VARCHAR(32)` | UNQ NN | 评审编号 |
| `target_type` | `VARCHAR(32)` | NN | drawing/demand/project |
| `target_id` | `BIGINT UNSIGNED` | NN | 对象ID |
| `level` | `TINYINT` | NN DEF:1 | 评审级别 |
| `reviewer_ids` | `JSON` | — | 评审人 |
| `status` | `TINYINT` | NN DEF:1 | 1待评审 2通过 3驳回 4待修改 |
| `conclusion` | `VARCHAR(1000)` | — | 结论 |
| `conclusion_en` | `VARCHAR(1000)` | — | 结论(英) |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

**索引**：`(target_type,target_id)`

#### `rf_design_bom` 设计BOM

> 设计阶段物料清单

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `demand_id` | `BIGINT UNSIGNED` | FK:rf_design_demand.id | 需求 |
| `project_id` | `BIGINT UNSIGNED` | FK:rf_project.id | 项目 |
| `part_name` | `VARCHAR(128)` | NN | 物料名 |
| `part_name_en` | `VARCHAR(128)` | — | 物料名(英) |
| `spec` | `VARCHAR(255)` | — | 规格 |
| `qty` | `INT` | NN DEF:1 | 数量 |
| `unit` | `VARCHAR(16)` | — | 单位 |
| `ref_product_id` | `BIGINT UNSIGNED` | — | 关联平台产品 |
| `source` | `TINYINT` | NN DEF:1 | 1平台在售 2外购 3自制 |

**索引**：`(project_id)`

### H. 流水线生产（21 张）


#### `rf_production_line` 产线

> SMT/组装/测试/包装等产线

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `line_no` | `VARCHAR(32)` | UNQ NN | 产线编号 |
| `name` | `VARCHAR(128)` | NN | 产线名 |
| `name_en` | `VARCHAR(128)` | — | 产线名(英) |
| `line_type` | `VARCHAR(32)` | IDX | 类型 SMT/组装/测试/包装 |
| `vendor_id` | `BIGINT UNSIGNED` | FK:rf_supplier.id | 所属厂商 |
| `city` | `VARCHAR(64)` | — | 城市 |
| `cover` | `VARCHAR(255)` | — | 图片 |
| `daily_capacity` | `INT` | NN DEF:0 | 日产能 |
| `month_capacity` | `INT` | NN DEF:0 | 月产能 |
| `utilization` | `TINYINT` | NN DEF:0 | 稼动率% |
| `moq` | `INT` | NN DEF:1 | 最小起订 |
| `lead_days` | `INT` | NN DEF:0 | 交付周期 |
| `price_per_unit` | `INT` | NN DEF:0 | 单价(分) |
| `worker_count` | `INT` | NN DEF:0 | 人数 |
| `automation` | `TINYINT` | NN DEF:0 | 自动化率% |
| `certs` | `VARCHAR(255)` | — | 资质 |
| `rating` | `DECIMAL(2,1)` | NN DEF:0 | 评分 |
| `orders` | `INT` | NN DEF:0 | 累计订单 |
| `status` | `VARCHAR(32)` | — | 状态 空闲/生产中/满产 |
| `desc` | `TEXT` | — | 说明 |
| `desc_en` | `TEXT` | — | 说明(英) |

**索引**：`(line_type,city)`

#### `rf_production_order` 生产工单

> 从试产到量产的工单

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `order_no` | `VARCHAR(32)` | UNQ NN | 工单号 |
| `line_id` | `BIGINT UNSIGNED` | NN FK:rf_production_line.id | 产线 |
| `project_id` | `BIGINT UNSIGNED` | FK:rf_project.id | 项目 |
| `product_id` | `BIGINT UNSIGNED` | FK:rf_product.id | 产品 |
| `owner_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 下单人 |
| `qty` | `INT` | NN DEF:0 | 数量 |
| `progress` | `TINYINT` | NN DEF:0 | 进度 |
| `stage` | `VARCHAR(32)` | — | 当前工序 |
| `status` | `TINYINT` | NN DEF:1 | 1待排产 2备料 3生产中 4质检 5已交付 6已取消 |
| `plan_start` | `DATE` | — | 计划开始 |
| `plan_end` | `DATE` | — | 计划完成 |
| `actual_end` | `DATE` | — | 实际完成 |
| `amount` | `INT` | NN DEF:0 | 金额(分) |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

**索引**：`(line_id,status)`

#### `rf_production_progress` 生产进度日报

> 工单每日进度上报

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `order_id` | `BIGINT UNSIGNED` | NN FK:rf_production_order.id | 工单 |
| `report_date` | `DATE` | NN | 日期 |
| `stage` | `VARCHAR(32)` | — | 工序 |
| `completed_qty` | `INT` | NN DEF:0 | 完成数 |
| `defect_qty` | `INT` | NN DEF:0 | 不良数 |
| `progress` | `TINYINT` | NN DEF:0 | 进度 |
| `worker_count` | `INT` | — | 出勤人数 |
| `remark` | `VARCHAR(500)` | — | 备注 |
| `reporter_id` | `BIGINT UNSIGNED` | — | 上报人 |

**索引**：`UNIQUE (order_id,report_date)`

#### `rf_capacity` 产能

> 产线可用产能时段

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `line_id` | `BIGINT UNSIGNED` | NN FK:rf_production_line.id | 产线 |
| `capacity_date` | `DATE` | NN | 日期 |
| `total_qty` | `INT` | NN DEF:0 | 总产能 |
| `used_qty` | `INT` | NN DEF:0 | 已占用 |
| `status` | `TINYINT` | NN DEF:1 | 1可预约 2已满 3停机 |

**索引**：`UNIQUE (line_id,capacity_date)`

#### `rf_capacity_booking` 产能预约

> 用户预约产线时段

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `booking_no` | `VARCHAR(32)` | UNQ NN | 预约号 |
| `line_id` | `BIGINT UNSIGNED` | NN FK:rf_production_line.id | 产线 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 预约人 |
| `start_date` | `DATE` | NN | 开始 |
| `end_date` | `DATE` | NN | 结束 |
| `qty` | `INT` | NN DEF:0 | 预约产能 |
| `status` | `TINYINT` | NN DEF:1 | 1待确认 2已确认 3已取消 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_bom` 生产BOM

> 生产用料清单

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `bom_no` | `VARCHAR(32)` | UNQ NN | BOM编号 |
| `order_id` | `BIGINT UNSIGNED` | FK:rf_production_order.id | 工单 |
| `product_id` | `BIGINT UNSIGNED` | FK:rf_product.id | 产品 |
| `version` | `VARCHAR(16)` | NN DEF:v1.0 | 版本 |
| `status` | `TINYINT` | NN DEF:1 | 1草稿 2已确认 3已齐套 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_bom_item` BOM明细

> 物料行与齐套状态

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `bom_id` | `BIGINT UNSIGNED` | NN FK:rf_bom.id | BOM |
| `part_name` | `VARCHAR(128)` | NN | 物料名 |
| `part_name_en` | `VARCHAR(128)` | — | 物料名(英) |
| `spec` | `VARCHAR(255)` | — | 规格 |
| `qty` | `INT` | NN DEF:1 | 需求数 |
| `stock_qty` | `INT` | NN DEF:0 | 库存数 |
| `unit` | `VARCHAR(16)` | — | 单位 |
| `ref_product_id` | `BIGINT UNSIGNED` | — | 平台产品 |
| `supplier_id` | `BIGINT UNSIGNED` | FK:rf_supplier.id | 供应商 |
| `ready` | `TINYINT` | NN DEF:0 | 是否齐套 |

**索引**：`(bom_id)`

#### `rf_procurement` 采购单

> 缺料采购

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `purchase_no` | `VARCHAR(32)` | UNQ NN | 采购号 |
| `bom_id` | `BIGINT UNSIGNED` | FK:rf_bom.id | BOM |
| `supplier_id` | `BIGINT UNSIGNED` | NN FK:rf_supplier.id | 供应商 |
| `part_name` | `VARCHAR(128)` | NN | 物料 |
| `qty` | `INT` | NN DEF:0 | 数量 |
| `amount` | `INT` | NN DEF:0 | 金额(分) |
| `status` | `TINYINT` | NN DEF:1 | 1待下单 2已下单 3已到货 4已取消 |
| `eta` | `DATE` | — | 预计到货 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_supplier` 供应商

> 物料与代工厂商

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `supplier_no` | `VARCHAR(32)` | UNQ NN | 编号 |
| `name` | `VARCHAR(128)` | NN | 名称 |
| `name_en` | `VARCHAR(128)` | — | 名称(英) |
| `supplier_type` | `VARCHAR(32)` | — | 类型 物料/代工/设备 |
| `city` | `VARCHAR(64)` | — | 城市 |
| `contact` | `VARCHAR(64)` | — | 联系人 |
| `phone` | `VARCHAR(20)` | — | 电话 |
| `logo` | `VARCHAR(255)` | — | Logo |
| `tags` | `VARCHAR(255)` | — | 标签 |
| `rating` | `DECIMAL(2,1)` | NN DEF:0 | 评分 |
| `lead_days` | `INT` | NN DEF:0 | 交期 |
| `moq` | `INT` | NN DEF:1 | 起订 |
| `certs` | `VARCHAR(255)` | — | 资质 |
| `status` | `TINYINT` | NN DEF:1 | 状态 |

**索引**：`(supplier_type,city)`

#### `rf_equipment` 设备台账

> 产线设备资产

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `equip_no` | `VARCHAR(32)` | UNQ NN | 设备编号 |
| `name` | `VARCHAR(128)` | NN | 设备名 |
| `name_en` | `VARCHAR(128)` | — | 设备名(英) |
| `line_id` | `BIGINT UNSIGNED` | FK:rf_production_line.id | 所属产线 |
| `model` | `VARCHAR(64)` | — | 型号 |
| `status` | `TINYINT` | NN DEF:1 | 1运行 2停机 3维修 4报废 |
| `next_maintain` | `DATE` | — | 下次保养 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_worker` 班组人员

> 产线人员与排班

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `line_id` | `BIGINT UNSIGNED` | NN FK:rf_production_line.id | 产线 |
| `name` | `VARCHAR(64)` | NN | 姓名 |
| `role_name` | `VARCHAR(64)` | — | 岗位 |
| `shift` | `VARCHAR(32)` | — | 班次 |
| `skill_level` | `TINYINT` | — | 技能等级 |
| `status` | `TINYINT` | NN DEF:1 | 1在岗 2休假 |

#### `rf_qc_report` 质检报告

> 各工序质检结果

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `report_no` | `VARCHAR(32)` | UNQ NN | 报告号 |
| `order_id` | `BIGINT UNSIGNED` | NN FK:rf_production_order.id | 工单 |
| `stage` | `VARCHAR(32)` | — | 工序 |
| `check_qty` | `INT` | NN DEF:0 | 抽检数 |
| `pass_qty` | `INT` | NN DEF:0 | 合格数 |
| `defect_qty` | `INT` | NN DEF:0 | 不良数 |
| `pass_rate` | `DECIMAL(5,2)` | — | 合格率% |
| `items` | `JSON` | — | 检验项明细 |
| `result` | `TINYINT` | NN DEF:1 | 1合格 2不合格 3让步接收 |
| `checker_id` | `BIGINT UNSIGNED` | — | 检验员 |
| `files` | `JSON` | — | 报告文件 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

**索引**：`(order_id,stage)`

#### `rf_yield_stat` 良率统计

> 按产线/日期的良率

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `line_id` | `BIGINT UNSIGNED` | NN FK:rf_production_line.id | 产线 |
| `stat_date` | `DATE` | NN | 日期 |
| `total_qty` | `INT` | NN DEF:0 | 总数 |
| `pass_qty` | `INT` | NN DEF:0 | 合格数 |
| `yield_rate` | `DECIMAL(5,2)` | — | 良率% |

**索引**：`UNIQUE (line_id,stat_date)`

#### `rf_process` 生产工艺

> 标准工艺路线

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `process_no` | `VARCHAR(32)` | UNQ NN | 工艺编号 |
| `name` | `VARCHAR(128)` | NN | 工艺名 |
| `name_en` | `VARCHAR(128)` | — | 工艺名(英) |
| `steps` | `JSON` | — | 工序步骤 |
| `line_type` | `VARCHAR(32)` | — | 适用产线 |
| `status` | `TINYINT` | NN DEF:1 | 状态 |

#### `rf_tooling` 模具工装

> 模具与夹具台账及报价

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `tooling_no` | `VARCHAR(32)` | UNQ NN | 编号 |
| `name` | `VARCHAR(128)` | NN | 名称 |
| `name_en` | `VARCHAR(128)` | — | 名称(英) |
| `product_id` | `BIGINT UNSIGNED` | FK:rf_product.id | 适用产品 |
| `supplier_id` | `BIGINT UNSIGNED` | FK:rf_supplier.id | 供应商 |
| `cost` | `INT` | NN DEF:0 | 费用(分) |
| `lead_days` | `INT` | NN DEF:0 | 周期 |
| `life_count` | `INT` | — | 寿命次数 |
| `used_count` | `INT` | NN DEF:0 | 已用次数 |
| `status` | `TINYINT` | NN DEF:1 | 1正常 2维修 3报废 |

#### `rf_warehouse` 仓储

> 原料与成品库存

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `warehouse_name` | `VARCHAR(64)` | NN | 仓库名 |
| `city` | `VARCHAR(64)` | — | 城市 |
| `part_name` | `VARCHAR(128)` | — | 物料名 |
| `stock_qty` | `INT` | NN DEF:0 | 库存 |
| `safe_qty` | `INT` | NN DEF:0 | 安全库存 |
| `location` | `VARCHAR(64)` | — | 库位 |

#### `rf_logistics` 物流发货

> 发运单与轨迹

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `logistics_no` | `VARCHAR(32)` | UNQ NN | 运单号 |
| `order_id` | `BIGINT UNSIGNED` | FK:rf_production_order.id | 工单 |
| `carrier` | `VARCHAR(64)` | — | 承运商 |
| `tracking_no` | `VARCHAR(64)` | — | 快递单号 |
| `status` | `TINYINT` | NN DEF:1 | 1待发 2在途 3已签收 |
| `ship_at` | `DATETIME` | — | 发货时间 |
| `receive_at` | `DATETIME` | — | 签收时间 |

#### `rf_delivery` 量产交付

> 交付批次与验收

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `delivery_no` | `VARCHAR(32)` | UNQ NN | 交付号 |
| `order_id` | `BIGINT UNSIGNED` | NN FK:rf_production_order.id | 工单 |
| `batch_no` | `VARCHAR(32)` | — | 批次 |
| `qty` | `INT` | NN DEF:0 | 交付数量 |
| `accept_status` | `TINYINT` | NN DEF:1 | 1待验收 2已验收 3拒收 |
| `files` | `JSON` | — | 验收文件 |
| `deliver_at` | `DATETIME` | — | 交付时间 |

#### `rf_cert` 资质认证

> 产品与产线认证证书

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `cert_no` | `VARCHAR(64)` | UNQ NN | 证书号 |
| `name` | `VARCHAR(128)` | NN | 认证名 |
| `name_en` | `VARCHAR(128)` | — | 认证名(英) |
| `target_type` | `VARCHAR(32)` | — | product/line/supplier |
| `target_id` | `BIGINT UNSIGNED` | — | 对象ID |
| `issuer` | `VARCHAR(128)` | — | 发证机构 |
| `valid_until` | `DATE` | — | 有效期至 |
| `file_url` | `VARCHAR(255)` | — | 证书文件 |

#### `rf_production_case` 量产案例

> 客户量产落地案例

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `title` | `VARCHAR(200)` | NN | 标题 |
| `title_en` | `VARCHAR(200)` | — | 标题(英) |
| `line_id` | `BIGINT UNSIGNED` | FK:rf_production_line.id | 产线 |
| `customer` | `VARCHAR(128)` | — | 客户 |
| `cover` | `VARCHAR(255)` | — | 封面 |
| `summary` | `VARCHAR(1000)` | — | 摘要 |
| `summary_en` | `VARCHAR(1000)` | — | 摘要(英) |
| `qty` | `INT` | — | 数量 |
| `cycle_days` | `INT` | — | 周期 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_production_cost` 成本核算

> 工单成本构成

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `order_id` | `BIGINT UNSIGNED` | NN FK:rf_production_order.id | 工单 |
| `material_cost` | `INT` | NN DEF:0 | 物料(分) |
| `labor_cost` | `INT` | NN DEF:0 | 人工(分) |
| `equip_cost` | `INT` | NN DEF:0 | 设备(分) |
| `overhead_cost` | `INT` | NN DEF:0 | 制造费用(分) |
| `total_cost` | `INT` | NN DEF:0 | 合计(分) |
| `unit_cost` | `INT` | NN DEF:0 | 单件(分) |

**索引**：`UNIQUE (order_id)`

### I. 全流程管控（4 张）


#### `rf_flow_stage` 流程阶段

> 需求→设计→集成→测试→生产五阶段定义

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `stage_code` | `VARCHAR(32)` | UNQ NN | 阶段编码 requirement/design/integration/test/production |
| `stage_name` | `VARCHAR(64)` | NN | 阶段名 |
| `stage_name_en` | `VARCHAR(64)` | — | 阶段名(英) |
| `sort` | `INT` | NN DEF:0 | 顺序 |
| `desc` | `VARCHAR(500)` | — | 说明 |
| `desc_en` | `VARCHAR(500)` | — | 说明(英) |
| `entry_page` | `VARCHAR(128)` | — | 入口页面 |
| `icon` | `VARCHAR(255)` | — | 图标 |

#### `rf_flow_gate` 阶段门禁

> 阶段间 Gate 评审关卡

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `gate_no` | `VARCHAR(32)` | UNQ NN | 门禁号 |
| `project_id` | `BIGINT UNSIGNED` | NN FK:rf_project.id | 项目 |
| `from_stage` | `VARCHAR(32)` | NN | 起始阶段 |
| `to_stage` | `VARCHAR(32)` | NN | 目标阶段 |
| `level` | `TINYINT` | NN DEF:1 | 门禁级别 |
| `check_items` | `JSON` | — | 检查项 |
| `status` | `TINYINT` | NN DEF:1 | 1待评审 2通过 3驳回 |
| `verdict` | `VARCHAR(1000)` | — | 评审结论 |
| `verdict_en` | `VARCHAR(1000)` | — | 结论(英) |
| `reviewer_id` | `BIGINT UNSIGNED` | — | 评审人 |
| `review_at` | `DATETIME` | — | 评审时间 |

**索引**：`(project_id,from_stage)`

#### `rf_flow_handover` 阶段交接物

> 阶段间交付物清单

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `project_id` | `BIGINT UNSIGNED` | NN FK:rf_project.id | 项目 |
| `from_stage` | `VARCHAR(32)` | NN | 交出阶段 |
| `to_stage` | `VARCHAR(32)` | NN | 接收阶段 |
| `item_name` | `VARCHAR(128)` | NN | 交接物 |
| `item_name_en` | `VARCHAR(128)` | — | 交接物(英) |
| `file_url` | `VARCHAR(255)` | — | 文件 |
| `status` | `TINYINT` | NN DEF:1 | 1待提交 2已提交 3已确认 |
| `hander_id` | `BIGINT UNSIGNED` | — | 交接人 |
| `receiver_id` | `BIGINT UNSIGNED` | — | 接收人 |
| `confirm_at` | `DATETIME` | — | 确认时间 |

**索引**：`(project_id,from_stage)`

#### `rf_flow_timeline` 流程时间线

> 项目全链路节点轨迹

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `project_id` | `BIGINT UNSIGNED` | NN FK:rf_project.id | 项目 |
| `stage_code` | `VARCHAR(32)` | NN | 阶段 |
| `event_name` | `VARCHAR(128)` | NN | 事件 |
| `event_name_en` | `VARCHAR(128)` | — | 事件(英) |
| `status` | `TINYINT` | NN DEF:1 | 1完成 2进行中 3待开始 |
| `operator_id` | `BIGINT UNSIGNED` | — | 操作人 |
| `occur_at` | `DATETIME` | — | 发生时间 |

**索引**：`(project_id,occur_at)`

### J. AI 智造（8 张）


#### `rf_ai_session` AI会话

> 用户与AI的对话会话

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `session_no` | `VARCHAR(32)` | UNQ NN | 会话号 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 用户 |
| `llm_id` | `BIGINT UNSIGNED` | FK:rf_llm_config.id | 使用模型 |
| `title` | `VARCHAR(200)` | — | 标题 |
| `message_count` | `INT` | NN DEF:0 | 消息数 |
| `status` | `TINYINT` | NN DEF:1 | 1进行中 2已归档 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_ai_message` AI消息

> 会话消息明细，支持卡片结构化

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `session_id` | `BIGINT UNSIGNED` | NN FK:rf_ai_session.id | 会话 |
| `role` | `TINYINT` | NN | 1用户 2AI 3系统 |
| `content` | `MEDIUMTEXT` | NN | 内容 |
| `card` | `JSON` | — | 结构化卡片(拆分/匹配结果) |
| `tokens` | `INT` | NN DEF:0 | 消耗token |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

**索引**：`(session_id,created_at)`

#### `rf_llm_config` LLM配置

> 三方大模型账号与参数

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `llm_name` | `VARCHAR(64)` | NN | 模型名 |
| `provider` | `VARCHAR(64)` | — | 厂商 OpenAI/DeepSeek/通义 |
| `user_id` | `BIGINT UNSIGNED` | FK:rf_user.id | 归属用户 |
| `api_base` | `VARCHAR(255)` | — | 接口地址 |
| `model_code` | `VARCHAR(64)` | — | 模型编码 |
| `max_tokens` | `INT` | — | 最大token |
| `temperature` | `DECIMAL(3,2)` | — | 温度 |
| `is_default` | `TINYINT` | NN DEF:0 | 默认模型 |
| `status` | `TINYINT` | NN DEF:1 | 1启用 0停用 |

#### `rf_ai_requirement` AI需求

> 用户提交的原始商业需求

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `requirement_no` | `VARCHAR(32)` | UNQ NN | 需求编号 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 提交人 |
| `session_id` | `BIGINT UNSIGNED` | FK:rf_ai_session.id | 来源会话 |
| `raw_text` | `TEXT` | NN | 原始描述 |
| `scene` | `VARCHAR(64)` | — | 应用场景 |
| `budget` | `INT` | — | 预算(分) |
| `deadline` | `DATE` | — | 期望交付 |
| `status` | `TINYINT` | NN DEF:1 | 1待拆分 2已拆分 3已生成项目 4已关闭 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_ai_split` 需求拆分项

> AI拆分出的子需求条目

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `requirement_id` | `BIGINT UNSIGNED` | NN FK:rf_ai_requirement.id | 需求 |
| `item_name` | `VARCHAR(128)` | NN | 条目名 |
| `item_name_en` | `VARCHAR(128)` | — | 条目名(英) |
| `item_type` | `VARCHAR(32)` | — | 类型 模块/定制/服务 |
| `qty` | `INT` | NN DEF:1 | 数量 |
| `spec` | `VARCHAR(500)` | — | 规格要求 |
| `spec_en` | `VARCHAR(500)` | — | 规格要求(英) |
| `sort` | `INT` | NN DEF:0 | 排序 |

**索引**：`(requirement_id,sort)`

#### `rf_ai_match` 资源匹配结果

> 拆分项与平台资源的匹配结论

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `requirement_id` | `BIGINT UNSIGNED` | NN FK:rf_ai_requirement.id | 需求 |
| `split_id` | `BIGINT UNSIGNED` | FK:rf_ai_split.id | 拆分项 |
| `match_type` | `TINYINT` | NN | 1现有可匹配 2需定制 3平台暂缺 |
| `product_id` | `BIGINT UNSIGNED` | FK:rf_product.id | 匹配产品 |
| `score` | `DECIMAL(4,2)` | — | 匹配度 |
| `reason` | `VARCHAR(500)` | — | 匹配说明 |
| `ticket_id` | `BIGINT UNSIGNED` | FK:rf_ticket.id | 生成工单 |

**索引**：`(requirement_id,match_type)`

#### `rf_ai_usage` AI用量

> 按用户/模型的token与费用统计

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 用户 |
| `llm_id` | `BIGINT UNSIGNED` | FK:rf_llm_config.id | 模型 |
| `stat_date` | `DATE` | NN | 日期 |
| `call_count` | `INT` | NN DEF:0 | 调用次数 |
| `tokens` | `INT` | NN DEF:0 | token数 |
| `cost` | `INT` | NN DEF:0 | 费用(分) |

**索引**：`UNIQUE (user_id,llm_id,stat_date)`

#### `rf_ai_template` 提示模板

> 内置快捷提问与提示词模板

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `title` | `VARCHAR(200)` | NN | 模板标题 |
| `title_en` | `VARCHAR(200)` | — | 模板标题(英) |
| `content` | `TEXT` | NN | 提示词 |
| `content_en` | `TEXT` | — | 提示词(英) |
| `scene` | `VARCHAR(32)` | — | 场景 |
| `sort` | `INT` | NN DEF:0 | 排序 |

### K. 沟通与通知（5 张）


#### `rf_conversation` 会话

> 单聊/群聊/项目房/资金房统一会话

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `conv_no` | `VARCHAR(32)` | UNQ NN | 会话号 |
| `conv_type` | `TINYINT` | NN | 1单聊 2群聊 3项目 4资金 |
| `title` | `VARCHAR(128)` | — | 标题 |
| `owner_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 创建人 |
| `target_id` | `BIGINT UNSIGNED` | — | 关联对象(项目/工单) |
| `last_message` | `VARCHAR(500)` | — | 最后消息 |
| `last_at` | `DATETIME` | — | 最后时间 |
| `unread` | `INT` | NN DEF:0 | 未读数 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

**索引**：`(conv_type,last_at)`

#### `rf_message` 消息

> 会话内消息

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `conv_id` | `BIGINT UNSIGNED` | NN FK:rf_conversation.id | 会话 |
| `sender_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 发送人 |
| `msg_type` | `TINYINT` | NN DEF:1 | 1文本 2图片 3文件 4系统 |
| `content` | `VARCHAR(4000)` | NN | 内容 |
| `attach` | `JSON` | — | 附件 |
| `read_status` | `TINYINT` | NN DEF:0 | 0未读 1已读 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 发送时间 |

**索引**：`(conv_id,created_at)`

#### `rf_message_group` 群组

> 分组沟通的群

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `group_name` | `VARCHAR(128)` | NN | 群名 |
| `owner_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 群主 |
| `project_id` | `BIGINT UNSIGNED` | FK:rf_project.id | 关联项目 |
| `member_count` | `INT` | NN DEF:0 | 成员数 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_group_member` 群成员

> 群与成员关联

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `group_id` | `BIGINT UNSIGNED` | NN FK:rf_message_group.id | 群 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 成员 |
| `role` | `TINYINT` | NN DEF:2 | 1群主 2成员 |
| `joined_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 加入时间 |

**索引**：`UNIQUE (group_id,user_id)`

#### `rf_notification` 通知

> 系统通知与消息提醒

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 接收人 |
| `notif_type` | `VARCHAR(32)` | — | 类型 系统/评论/工单/资金 |
| `title` | `VARCHAR(200)` | NN | 标题 |
| `title_en` | `VARCHAR(200)` | — | 标题(英) |
| `content` | `VARCHAR(1000)` | — | 内容 |
| `content_en` | `VARCHAR(1000)` | — | 内容(英) |
| `link` | `VARCHAR(255)` | — | 跳转 |
| `read_status` | `TINYINT` | NN DEF:0 | 0未读 1已读 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

**索引**：`(user_id,read_status)`

### L. 资金（6 张）


#### `rf_fund_account` 资金账户

> 用户平台账户与余额

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `user_id` | `BIGINT UNSIGNED` | NN UNQ FK:rf_user.id | 用户 |
| `balance` | `INT` | NN DEF:0 | 余额(分) |
| `frozen` | `INT` | NN DEF:0 | 冻结(分) |
| `total_in` | `INT` | NN DEF:0 | 累计收入(分) |
| `total_out` | `INT` | NN DEF:0 | 累计支出(分) |
| `updated_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | 更新时间 |

#### `rf_fund_flow` 资金流水

> 收支明细

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `flow_no` | `VARCHAR(32)` | UNQ NN | 流水号 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 用户 |
| `direction` | `TINYINT` | NN | 1收入 2支出 |
| `amount` | `INT` | NN | 金额(分) |
| `balance_after` | `INT` | NN | 变动后余额(分) |
| `biz_type` | `VARCHAR(32)` | — | 业务类型 订单/提现/退款 |
| `biz_id` | `VARCHAR(64)` | — | 业务单号 |
| `remark` | `VARCHAR(500)` | — | 备注 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 时间 |

**索引**：`(user_id,created_at)`

#### `rf_payment` 支付单

> 订单支付记录

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `pay_no` | `VARCHAR(32)` | UNQ NN | 支付号 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 用户 |
| `biz_type` | `VARCHAR(32)` | NN | 业务类型 |
| `biz_id` | `VARCHAR(64)` | NN | 业务单号 |
| `amount` | `INT` | NN | 金额(分) |
| `channel` | `VARCHAR(32)` | — | 渠道 微信/支付宝/银行卡 |
| `status` | `TINYINT` | NN DEF:1 | 1待支付 2已支付 3已退款 4已关闭 |
| `paid_at` | `DATETIME` | — | 支付时间 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_withdraw` 提现申请

> 提现到银行卡的记录

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `withdraw_no` | `VARCHAR(32)` | UNQ NN | 提现号 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 用户 |
| `amount` | `INT` | NN | 金额(分) |
| `fee` | `INT` | NN DEF:0 | 手续费(分) |
| `account_id` | `BIGINT UNSIGNED` | NN FK:rf_withdraw_account.id | 收款账户 |
| `status` | `TINYINT` | NN DEF:1 | 1待审 2已打款 3已驳回 |
| `remark` | `VARCHAR(500)` | — | 备注 |
| `handler_id` | `BIGINT UNSIGNED` | — | 处理人 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 申请时间 |

#### `rf_withdraw_account` 提现账户

> 银行卡/支付宝账户

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 用户 |
| `account_type` | `TINYINT` | NN DEF:1 | 1银行卡 2支付宝 3微信 |
| `account_no` | `VARCHAR(64)` | NN | 账号(加密) |
| `account_name` | `VARCHAR(64)` | — | 户名 |
| `bank_name` | `VARCHAR(64)` | — | 开户行 |
| `is_default` | `TINYINT` | NN DEF:0 | 默认 |

#### `rf_invoice` 发票

> 开票申请与记录

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `invoice_no` | `VARCHAR(32)` | UNQ NN | 发票号 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 用户 |
| `pay_id` | `BIGINT UNSIGNED` | FK:rf_payment.id | 支付单 |
| `title` | `VARCHAR(128)` | NN | 抬头 |
| `tax_no` | `VARCHAR(64)` | — | 税号 |
| `amount` | `INT` | NN | 金额(分) |
| `invoice_type` | `TINYINT` | NN DEF:1 | 1普票 2专票 |
| `status` | `TINYINT` | NN DEF:1 | 1待开 2已开 3作废 |
| `file_url` | `VARCHAR(255)` | — | 电子发票 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 申请时间 |

### M. 工单（3 张）


#### `rf_ticket` 工单

> 缺料/定制/故障等各类工单

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `ticket_no` | `VARCHAR(32)` | UNQ NN | 工单号 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 提交人 |
| `ticket_type` | `TINYINT` | NN | 1资源缺料 2技术咨询 3售后 4举报 5其它 |
| `title` | `VARCHAR(200)` | NN | 标题 |
| `title_en` | `VARCHAR(200)` | — | 标题(英) |
| `content` | `TEXT` | NN | 内容 |
| `content_en` | `TEXT` | — | 内容(英) |
| `attach` | `JSON` | — | 附件 |
| `priority` | `TINYINT` | NN DEF:2 | 1低 2中 3高 4紧急 |
| `status` | `TINYINT` | NN DEF:1 | 1待受理 2处理中 3待确认 4已解决 5已关闭 |
| `handler_id` | `BIGINT UNSIGNED` | — | 处理人 |
| `source_type` | `VARCHAR(32)` | — | 来源 ai/product/project |
| `source_id` | `VARCHAR(64)` | — | 来源ID |
| `resolve_at` | `DATETIME` | — | 解决时间 |
| `close_reason` | `VARCHAR(255)` | — | 关闭原因 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

**索引**：`(status,priority)`

#### `rf_ticket_reply` 工单回复

> 工单沟通记录

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `ticket_id` | `BIGINT UNSIGNED` | NN FK:rf_ticket.id | 工单 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 回复人 |
| `is_staff` | `TINYINT` | NN DEF:0 | 是否客服 |
| `content` | `VARCHAR(2000)` | NN | 内容 |
| `attach` | `JSON` | — | 附件 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 回复时间 |

**索引**：`(ticket_id,created_at)`

#### `rf_ticket_log` 工单操作日志

> 状态变更与操作留痕

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `ticket_id` | `BIGINT UNSIGNED` | NN FK:rf_ticket.id | 工单 |
| `action` | `VARCHAR(64)` | NN | 动作 受理/解决/关闭 |
| `from_status` | `TINYINT` | — | 原状态 |
| `to_status` | `TINYINT` | — | 新状态 |
| `operator_id` | `BIGINT UNSIGNED` | — | 操作人 |
| `remark` | `VARCHAR(500)` | — | 说明 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 时间 |

### N. 文件与资源（4 张）


#### `rf_file` 文件

> 上传文件统一登记

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `file_no` | `VARCHAR(32)` | UNQ NN | 文件号 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 上传者 |
| `file_name` | `VARCHAR(255)` | NN | 文件名 |
| `file_url` | `VARCHAR(512)` | NN | 存储地址 |
| `file_size` | `BIGINT` | NN DEF:0 | 字节 |
| `mime_type` | `VARCHAR(64)` | — | MIME |
| `biz_type` | `VARCHAR(32)` | — | 业务类型 avatar/product/doc |
| `biz_id` | `VARCHAR(64)` | — | 业务ID |
| `storage` | `TINYINT` | NN DEF:1 | 1本地 2OSS 3COS |
| `status` | `TINYINT` | NN DEF:1 | 1正常 2待审 3违规 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 上传时间 |

#### `rf_download_token` 下载令牌

> 资料下载授权令牌

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `token` | `VARCHAR(64)` | UNQ NN | 令牌 rft_xxx |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 用户 |
| `file_ids` | `JSON` | — | 授权文件 |
| `scope` | `VARCHAR(64)` | — | 授权范围 |
| `max_use` | `INT` | NN DEF:1 | 可用次数 |
| `used_count` | `INT` | NN DEF:0 | 已用次数 |
| `status` | `TINYINT` | NN DEF:1 | 1有效 2已吊销 3已过期 |
| `expire_at` | `DATETIME` | NN | 过期时间 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_download_pack` 打包下载

> 批量打包任务

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `pack_no` | `VARCHAR(32)` | UNQ NN | 任务号 |
| `user_id` | `BIGINT UNSIGNED` | NN FK:rf_user.id | 用户 |
| `file_ids` | `JSON` | NN | 文件列表 |
| `status` | `TINYINT` | NN DEF:1 | 1排队 2打包中 3完成 4失败 |
| `progress` | `TINYINT` | NN DEF:0 | 进度 |
| `pack_url` | `VARCHAR(512)` | — | 包地址 |
| `pack_size` | `BIGINT` | — | 包大小 |
| `expire_at` | `DATETIME` | — | 链接有效期 |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 创建时间 |

#### `rf_download_log` 下载记录

> 文件下载审计

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `user_id` | `BIGINT UNSIGNED` | IDX | 用户 |
| `file_id` | `BIGINT UNSIGNED` | FK:rf_file.id | 文件 |
| `token_id` | `BIGINT UNSIGNED` | FK:rf_download_token.id | 令牌 |
| `ip` | `VARCHAR(64)` | — | IP |
| `created_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP | 下载时间 |

### O. 系统与配置（2 张）


#### `rf_setting` 系统设置

> 平台级开关与参数

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `setting_key` | `VARCHAR(64)` | UNQ NN | 键 |
| `setting_value` | `TEXT` | — | 值 |
| `group_name` | `VARCHAR(32)` | — | 分组 |
| `remark` | `VARCHAR(255)` | — | 说明 |
| `updated_at` | `DATETIME` | NN DEF:CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | 更新时间 |

#### `rf_dict` 数据字典

> 枚举与下拉项

| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| `id` | `BIGINT UNSIGNED` | PK AI | 主键 |
| `dict_type` | `VARCHAR(32)` | NN | 类型 |
| `dict_code` | `VARCHAR(32)` | NN | 编码 |
| `dict_label` | `VARCHAR(64)` | NN | 中文 |
| `dict_label_en` | `VARCHAR(64)` | — | 英文 |
| `sort` | `INT` | NN DEF:0 | 排序 |

**索引**：`UNIQUE (dict_type,dict_code)`


## 三、核心对象关系

```
rf_user ──┬──< rf_user_credential      登录凭证（1:1）
          ├──< rf_verify_apply         实名/企业认证
          ├──< rf_user_follow          关注关系
          ├──< rf_brand ──< rf_product 厂商发布产品
          ├──< rf_news                 宣发资讯
          ├──< rf_post ──< rf_post_reply   论坛帖子与回复
          ├──< rf_project ──┬──< rf_project_node    项目节点
          │                 ├──< rf_project_member  项目成员
          │                 └──< rf_flow_gate       阶段门禁
          ├──< rf_demand ──< rf_demand_bid   需求与应征
          ├──< rf_ticket ──< rf_ticket_reply  工单与回复
          ├──< rf_fund_account ──< rf_fund_flow  账户与流水
          └──< rf_ai_session ──< rf_ai_message    AI 会话与消息

rf_ai_requirement ──< rf_ai_split ──< rf_ai_match ──> rf_product
        │                                    └──> rf_ticket（平台暂缺时）

rf_project ──< rf_design_demand ──< rf_design_drawing ──< rf_design_version
          └──< rf_production_order ──< rf_production_progress
                     │                    └──< rf_qc_report
                     └──< rf_bom ──< rf_bom_item ──> rf_supplier

rf_production_line ──< rf_capacity ──< rf_capacity_booking
                   └──< rf_equipment
```

## 四、主流程与数据落点

| 流程阶段 | 入口页面 | 产生的数据表 |
|---|---|---|
| 商业需求提交 | `pages/ai_requirement.html` | `rf_ai_requirement`、`rf_ai_session`、`rf_ai_message` |
| AI 拆分 | `pages/ai_split.html` | `rf_ai_split` |
| 资源匹配 | `pages/ai_match.html` | `rf_ai_match`、`rf_product` |
| 缺项提工单 | `pages/ticket_submit.html` | `rf_ticket`、`rf_ticket_reply` |
| 生成项目 | `pages/ai_project.html` | `rf_project`、`rf_project_node`、`rf_project_member` |
| 设计 | `pages/design_home.html` | `rf_design_demand`、`rf_design_task`、`rf_design_drawing`、`rf_design_review` |
| 集成 | `pages/integration_hall.html` | `rf_integration`、`rf_apply` |
| 测试 | `pages/test_hall.html` | `rf_test`、`rf_qc_report` |
| 流水线生产 | `pages/production_home.html` | `rf_production_line`、`rf_production_order`、`rf_bom`、`rf_capacity_booking` |
| 阶段门禁 | `pages/flow_gate.html` | `rf_flow_gate`、`rf_flow_handover`、`rf_flow_timeline` |

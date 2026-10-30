-- =============================================================================
-- SUMFORGE 闪马工厂 · 机器人聚合开源平台 —— 数据库建表脚本 schema.sql
-- -----------------------------------------------------------------------------
-- 版本    : v1.0
-- 引擎    : MySQL 8.0+ / MariaDB 10.6+
-- 字符集  : utf8mb4 / utf8mb4_0900_ai_ci
-- 表数量  : 106 张
-- 说明    :
--   1. 所有金额字段单位为「分」（INT），前端展示时 /100；
--   2. 所有时间字段为 DATETIME，服务端返回 ISO8601 字符串；
--   3. 软删统一用 deleted_at；物理外键可按部署需要关闭（见文末开关）；
--   4. 每张表均含 created_at，写表含 updated_at；
--   5. 建表顺序已处理外键依赖，可直接整文件执行。
-- =============================================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

CREATE DATABASE IF NOT EXISTS `sumforge`
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_0900_ai_ci;
USE `sumforge`;




-- ==========================================================================
-- 全部 106 张表（按外键依赖拓扑排序，可直接整文件执行）
-- ==========================================================================

-- 用户主表 · 平台所有注册用户（个人/厂商/集成商/机构）
-- ------------------------------------------------------------
-- rf_user 用户主表 · 平台所有注册用户（个人/厂商/集成商/机构）
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_user`;
CREATE TABLE `rf_user` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `user_no` VARCHAR(32) NOT NULL COMMENT '用户编号 U3000',
  `account` VARCHAR(64) NOT NULL COMMENT '登录账号',
  `phone` VARCHAR(20) COMMENT '手机号',
  `email` VARCHAR(128) COMMENT '邮箱',
  `nickname` VARCHAR(64) NOT NULL COMMENT '昵称',
  `avatar` VARCHAR(255) COMMENT '头像URL',
  `user_type` TINYINT NOT NULL DEFAULT '1' COMMENT '1个人 2厂商 3集成商 4机构',
  `level` TINYINT NOT NULL DEFAULT '1' COMMENT '等级 1-9',
  `exp` INT NOT NULL DEFAULT '0' COMMENT '经验值',
  `credit_score` INT NOT NULL DEFAULT '100' COMMENT '信用分',
  `verify_status` TINYINT NOT NULL DEFAULT '0' COMMENT '0未认证 1审核中 2已认证 3驳回',
  `verify_type` TINYINT COMMENT '1个人实名 2企业',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1正常 2冻结 3注销',
  `city` VARCHAR(64) COMMENT '城市',
  `intro` VARCHAR(500) COMMENT '简介',
  `intro_en` VARCHAR(500) COMMENT '简介(英)',
  `tags` VARCHAR(255) COMMENT '标签 逗号分隔',
  `followers` INT NOT NULL DEFAULT '0' COMMENT '粉丝数',
  `following` INT NOT NULL DEFAULT '0' COMMENT '关注数',
  `product_count` INT NOT NULL DEFAULT '0' COMMENT '发布产品数',
  `project_count` INT NOT NULL DEFAULT '0' COMMENT '参与项目数',
  `like_count` INT NOT NULL DEFAULT '0' COMMENT '获赞数',
  `last_login_at` DATETIME COMMENT '最后登录',
  `last_login_ip` VARCHAR(64) COMMENT '最后登录IP',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `deleted_at` DATETIME COMMENT '软删',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_user_user_no` (`user_no`),
  UNIQUE KEY `uk_rf_user_account` (`account`),
  UNIQUE KEY `uk_rf_user_phone` (`phone`),
  KEY `idx_rf_user_user_type_status` (user_type,status),
  KEY `idx_rf_user_expDESC` (exp DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户主表';

-- 登录凭证 · 密码哈希与登录密钥，与用户一对一
-- ------------------------------------------------------------
-- rf_user_credential 登录凭证 · 密码哈希与登录密钥，与用户一对一
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_user_credential`;
CREATE TABLE `rf_user_credential` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '用户ID',
  `password_hash` VARCHAR(128) NOT NULL COMMENT '密码哈希 bcrypt',
  `pwd_salt` VARCHAR(64) COMMENT '盐',
  `pwd_updated_at` DATETIME COMMENT '密码更新时间',
  `login_fail_count` TINYINT NOT NULL DEFAULT '0' COMMENT '连续失败次数',
  `locked_until` DATETIME COMMENT '锁定到期',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_user_credential_user_id` (`user_id`),
  CONSTRAINT `fk_rf_user_credential_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='登录凭证';

-- 短信验证码 · 注册/登录/找回密码验证码
-- ------------------------------------------------------------
-- rf_sms_code 短信验证码 · 注册/登录/找回密码验证码
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_sms_code`;
CREATE TABLE `rf_sms_code` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `phone` VARCHAR(20) NOT NULL COMMENT '手机号',
  `scene` TINYINT NOT NULL COMMENT '1注册 2登录 3找回密码 4换绑',
  `code` VARCHAR(8) NOT NULL COMMENT '验证码',
  `ip` VARCHAR(64) COMMENT '请求IP',
  `used` TINYINT NOT NULL DEFAULT '0' COMMENT '是否已用',
  `expire_at` DATETIME NOT NULL COMMENT '过期时间',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `idx_rf_sms_code_phone` (`phone`),
  KEY `idx_rf_sms_code_phone_scene` (phone,scene)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='短信验证码';

-- 认证申请 · 个人实名/企业认证材料与审核结果
-- ------------------------------------------------------------
-- rf_verify_apply 认证申请 · 个人实名/企业认证材料与审核结果
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_verify_apply`;
CREATE TABLE `rf_verify_apply` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `apply_no` VARCHAR(32) NOT NULL COMMENT '申请编号',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '用户ID',
  `verify_type` TINYINT NOT NULL COMMENT '1个人实名 2企业',
  `real_name` VARCHAR(64) COMMENT '真实姓名',
  `id_no` VARCHAR(64) COMMENT '身份证号(加密)',
  `license_no` VARCHAR(64) COMMENT '营业执照号',
  `company` VARCHAR(128) COMMENT '企业名称',
  `files` JSON COMMENT '证明材料URL数组',
  `status` TINYINT NOT NULL DEFAULT '0' COMMENT '0待审 1通过 2驳回',
  `reviewer_id` BIGINT UNSIGNED COMMENT '审核人',
  `review_at` DATETIME COMMENT '审核时间',
  `remark` VARCHAR(255) COMMENT '审核意见',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_verify_apply_apply_no` (`apply_no`),
  CONSTRAINT `fk_rf_verify_apply_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='认证申请';

-- 角色 · 后台角色定义
-- ------------------------------------------------------------
-- rf_role 角色 · 后台角色定义
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_role`;
CREATE TABLE `rf_role` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `role_code` VARCHAR(32) NOT NULL COMMENT '角色编码',
  `role_name` VARCHAR(64) NOT NULL COMMENT '角色名',
  `role_name_en` VARCHAR(64) COMMENT '角色名(英)',
  `scope` TINYINT NOT NULL DEFAULT '2' COMMENT '1前台 2后台',
  `remark` VARCHAR(255) COMMENT '说明',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_role_role_code` (`role_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='角色';

-- 权限点 · 细粒度权限，对应菜单与按钮
-- ------------------------------------------------------------
-- rf_permission 权限点 · 细粒度权限，对应菜单与按钮
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_permission`;
CREATE TABLE `rf_permission` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `perm_code` VARCHAR(64) NOT NULL COMMENT '权限编码',
  `perm_name` VARCHAR(64) NOT NULL COMMENT '权限名',
  `group_code` VARCHAR(32) COMMENT '权限组',
  `perm_type` TINYINT NOT NULL DEFAULT '1' COMMENT '1菜单 2按钮 3接口',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_permission_perm_code` (`perm_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='权限点';

-- 用户角色关联 · 用户与角色多对多
-- ------------------------------------------------------------
-- rf_user_role 用户角色关联 · 用户与角色多对多
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_user_role`;
CREATE TABLE `rf_user_role` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '用户ID',
  `role_id` BIGINT UNSIGNED NOT NULL COMMENT '角色ID',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_rf_user_role_user_id_role_id` (user_id,role_id),
  CONSTRAINT `fk_rf_user_role_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`),
  CONSTRAINT `fk_rf_user_role_role_id` FOREIGN KEY (`role_id`) REFERENCES `rf_role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户角色关联';

-- 角色权限关联 · 角色与权限多对多
-- ------------------------------------------------------------
-- rf_role_permission 角色权限关联 · 角色与权限多对多
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_role_permission`;
CREATE TABLE `rf_role_permission` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `role_id` BIGINT UNSIGNED NOT NULL COMMENT '角色ID',
  `perm_id` BIGINT UNSIGNED NOT NULL COMMENT '权限ID',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_rf_role_permission_role_id_perm_id` (role_id,perm_id),
  CONSTRAINT `fk_rf_role_permission_role_id` FOREIGN KEY (`role_id`) REFERENCES `rf_role` (`id`),
  CONSTRAINT `fk_rf_role_permission_perm_id` FOREIGN KEY (`perm_id`) REFERENCES `rf_permission` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='角色权限关联';

-- 登录日志 · 含后台独立登录审计（IP/UA/结果）
-- ------------------------------------------------------------
-- rf_login_log 登录日志 · 含后台独立登录审计（IP/UA/结果）
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_login_log`;
CREATE TABLE `rf_login_log` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `user_id` BIGINT UNSIGNED COMMENT '用户ID',
  `account` VARCHAR(64) COMMENT '登录账号',
  `login_type` TINYINT NOT NULL DEFAULT '1' COMMENT '1密码 2短信 3令牌',
  `entry` TINYINT NOT NULL DEFAULT '1' COMMENT '1前台 2后台',
  `ip` VARCHAR(64) COMMENT 'IP',
  `ip_location` VARCHAR(128) COMMENT 'IP归属地',
  `ua` VARCHAR(500) COMMENT 'UserAgent',
  `result` TINYINT NOT NULL DEFAULT '1' COMMENT '1成功 0失败',
  `fail_reason` VARCHAR(128) COMMENT '失败原因',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '登录时间',
  PRIMARY KEY (`id`),
  KEY `idx_rf_login_log_user_id` (`user_id`),
  KEY `idx_rf_login_log_entry_created_at` (entry,created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='登录日志';

-- IP白名单 · 后台访问来源IP管控
-- ------------------------------------------------------------
-- rf_ip_whitelist IP白名单 · 后台访问来源IP管控
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_ip_whitelist`;
CREATE TABLE `rf_ip_whitelist` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `ip` VARCHAR(64) NOT NULL COMMENT 'IP或CIDR',
  `scope` TINYINT NOT NULL DEFAULT '2' COMMENT '1前台 2后台',
  `remark` VARCHAR(255) COMMENT '说明',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1启用 0停用',
  `operator_id` BIGINT UNSIGNED COMMENT '操作人',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='IP白名单';

-- 双因子密钥 · 后台强制双因子认证
-- ------------------------------------------------------------
-- rf_2fa_secret 双因子密钥 · 后台强制双因子认证
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_2fa_secret`;
CREATE TABLE `rf_2fa_secret` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '用户ID',
  `secret` VARCHAR(128) NOT NULL COMMENT 'TOTP密钥',
  `backup_codes` JSON COMMENT '备用码',
  `enabled` TINYINT NOT NULL DEFAULT '1' COMMENT '是否启用',
  `last_used_at` DATETIME COMMENT '最后使用',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_2fa_secret_user_id` (`user_id`),
  CONSTRAINT `fk_rf_2fa_secret_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='双因子密钥';

-- API密钥 · 开放接口密钥，供三方系统调用
-- ------------------------------------------------------------
-- rf_api_key API密钥 · 开放接口密钥，供三方系统调用
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_api_key`;
CREATE TABLE `rf_api_key` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `key_id` VARCHAR(32) NOT NULL COMMENT 'KeyId',
  `key_secret` VARCHAR(128) NOT NULL COMMENT 'KeySecret',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '归属用户',
  `name` VARCHAR(64) NOT NULL COMMENT '名称',
  `scopes` VARCHAR(500) COMMENT '授权范围',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1启用 0吊销',
  `last_used_at` DATETIME COMMENT '最后调用',
  `expire_at` DATETIME COMMENT '过期时间',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_api_key_key_id` (`key_id`),
  CONSTRAINT `fk_rf_api_key_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='API密钥';

-- 操作日志 · 后台所有写操作留痕
-- ------------------------------------------------------------
-- rf_operation_log 操作日志 · 后台所有写操作留痕
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_operation_log`;
CREATE TABLE `rf_operation_log` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `operator_id` BIGINT UNSIGNED COMMENT '操作人',
  `module` VARCHAR(64) COMMENT '模块',
  `action` VARCHAR(64) COMMENT '动作',
  `target_type` VARCHAR(32) COMMENT '对象类型',
  `target_id` VARCHAR(64) COMMENT '对象ID',
  `detail` JSON COMMENT '变更明细',
  `ip` VARCHAR(64) COMMENT 'IP',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '操作时间',
  PRIMARY KEY (`id`),
  KEY `idx_rf_operation_log_operator_id` (`operator_id`),
  KEY `idx_rf_operation_log_module_created_at` (module,created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='操作日志';

-- 用户关注 · 用户之间关注关系
-- ------------------------------------------------------------
-- rf_user_follow 用户关注 · 用户之间关注关系
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_user_follow`;
CREATE TABLE `rf_user_follow` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `follower_id` BIGINT UNSIGNED NOT NULL COMMENT '关注者',
  `followee_id` BIGINT UNSIGNED NOT NULL COMMENT '被关注者',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '关注时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_rf_user_follow_follower_id_followee_id` (follower_id,followee_id),
  CONSTRAINT `fk_rf_user_follow_follower_id` FOREIGN KEY (`follower_id`) REFERENCES `rf_user` (`id`),
  CONSTRAINT `fk_rf_user_follow_followee_id` FOREIGN KEY (`followee_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户关注';

-- 分类字典 · 产品/资讯/资料统一分类树
-- ------------------------------------------------------------
-- rf_category 分类字典 · 产品/资讯/资料统一分类树
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_category`;
CREATE TABLE `rf_category` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `cat_code` VARCHAR(32) NOT NULL COMMENT '分类编码 commercial/module/toy',
  `cat_name` VARCHAR(64) NOT NULL COMMENT '分类名',
  `cat_name_en` VARCHAR(64) COMMENT '分类名(英)',
  `parent_id` BIGINT UNSIGNED NOT NULL DEFAULT '0' COMMENT '父分类',
  `cat_type` TINYINT NOT NULL COMMENT '1产品 2资讯 3资料 4论坛',
  `icon` VARCHAR(255) COMMENT '图标',
  `sort` INT NOT NULL DEFAULT '0' COMMENT '排序',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1启用 0停用',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_category_cat_code` (`cat_code`),
  KEY `idx_rf_category_cat_type_parent_id` (cat_type,parent_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='分类字典';

-- 品牌厂商 · 厂商号主体
-- ------------------------------------------------------------
-- rf_brand 品牌厂商 · 厂商号主体
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_brand`;
CREATE TABLE `rf_brand` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `brand_name` VARCHAR(64) NOT NULL COMMENT '品牌名',
  `brand_name_en` VARCHAR(64) COMMENT '品牌名(英)',
  `logo` VARCHAR(255) COMMENT 'Logo',
  `owner_user_id` BIGINT UNSIGNED COMMENT '绑定用户',
  `company` VARCHAR(128) COMMENT '企业主体',
  `city` VARCHAR(64) COMMENT '所在城市',
  `intro` VARCHAR(1000) COMMENT '品牌介绍',
  `intro_en` VARCHAR(1000) COMMENT '品牌介绍(英)',
  `subscriber_count` INT NOT NULL DEFAULT '0' COMMENT '订阅数',
  `verify_status` TINYINT NOT NULL DEFAULT '0' COMMENT '认证状态',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_rf_brand_owner_user_id` FOREIGN KEY (`owner_user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='品牌厂商';

-- 资讯宣发 · 厂商/个人产品新闻宣发主表
-- ------------------------------------------------------------
-- rf_news 资讯宣发 · 厂商/个人产品新闻宣发主表
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_news`;
CREATE TABLE `rf_news` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `news_no` VARCHAR(32) NOT NULL COMMENT '资讯编号 N9001',
  `title` VARCHAR(200) NOT NULL COMMENT '标题',
  `title_en` VARCHAR(200) COMMENT '标题(英)',
  `brand_id` BIGINT UNSIGNED COMMENT '品牌',
  `publisher_id` BIGINT UNSIGNED NOT NULL COMMENT '发布者',
  `cat_code` VARCHAR(32) COMMENT '分类编码',
  `cover` VARCHAR(255) COMMENT '封面图',
  `cover_thumb` VARCHAR(255) COMMENT '缩略图',
  `summary` VARCHAR(500) COMMENT '摘要',
  `summary_en` VARCHAR(500) COMMENT '摘要(英)',
  `content` MEDIUMTEXT COMMENT '正文富文本',
  `content_en` MEDIUMTEXT COMMENT '正文(英)',
  `tags` VARCHAR(255) COMMENT '标签',
  `is_top` TINYINT NOT NULL DEFAULT '0' COMMENT '是否置顶',
  `is_featured` TINYINT NOT NULL DEFAULT '0' COMMENT '是否头条',
  `is_hot` TINYINT NOT NULL DEFAULT '0' COMMENT '是否热门',
  `audit_status` TINYINT NOT NULL DEFAULT '0' COMMENT '0草稿 1待初审 2待复审 3已发布 4驳回',
  `audit_level` TINYINT NOT NULL DEFAULT '1' COMMENT '当前审核级别',
  `views` INT NOT NULL DEFAULT '0' COMMENT '阅读数',
  `likes` INT NOT NULL DEFAULT '0' COMMENT '点赞数',
  `comment_count` INT NOT NULL DEFAULT '0' COMMENT '评论数',
  `shares` INT NOT NULL DEFAULT '0' COMMENT '分享数',
  `publish_at` DATETIME COMMENT '发布时间',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `deleted_at` DATETIME COMMENT '软删',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_news_news_no` (`news_no`),
  KEY `idx_rf_news_cat_code` (`cat_code`),
  KEY `idx_rf_news_audit_status_is_top_publish_at` (audit_status,is_top,publish_at),
  KEY `idx_rf_news_brand_id_publish_at` (brand_id,publish_at),
  CONSTRAINT `fk_rf_news_brand_id` FOREIGN KEY (`brand_id`) REFERENCES `rf_brand` (`id`),
  CONSTRAINT `fk_rf_news_publisher_id` FOREIGN KEY (`publisher_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='资讯宣发';

-- 资讯审核记录 · 多级审核流程留痕
-- ------------------------------------------------------------
-- rf_news_audit 资讯审核记录 · 多级审核流程留痕
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_news_audit`;
CREATE TABLE `rf_news_audit` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `news_id` BIGINT UNSIGNED NOT NULL COMMENT '资讯ID',
  `level` TINYINT NOT NULL COMMENT '审核级别 1初审 2复审 3终审',
  `reviewer_id` BIGINT UNSIGNED COMMENT '审核人',
  `result` TINYINT NOT NULL COMMENT '1通过 2驳回',
  `remark` VARCHAR(500) COMMENT '审核意见',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '审核时间',
  PRIMARY KEY (`id`),
  KEY `idx_rf_news_audit_news_id_level` (news_id,level),
  CONSTRAINT `fk_rf_news_audit_news_id` FOREIGN KEY (`news_id`) REFERENCES `rf_news` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='资讯审核记录';

-- 资讯日统计 · 按天聚合的阅读/点赞数据
-- ------------------------------------------------------------
-- rf_news_stats 资讯日统计 · 按天聚合的阅读/点赞数据
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_news_stats`;
CREATE TABLE `rf_news_stats` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `news_id` BIGINT UNSIGNED NOT NULL COMMENT '资讯ID',
  `stat_date` DATE NOT NULL COMMENT '统计日',
  `views` INT NOT NULL DEFAULT '0' COMMENT '阅读',
  `likes` INT NOT NULL DEFAULT '0' COMMENT '点赞',
  `comments` INT NOT NULL DEFAULT '0' COMMENT '评论',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_rf_news_stats_news_id_stat_date` (news_id,stat_date),
  CONSTRAINT `fk_rf_news_stats_news_id` FOREIGN KEY (`news_id`) REFERENCES `rf_news` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='资讯日统计';

-- 通用评论 · 资讯/产品/帖子/课程统一评论表
-- ------------------------------------------------------------
-- rf_comment 通用评论 · 资讯/产品/帖子/课程统一评论表
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_comment`;
CREATE TABLE `rf_comment` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `target_type` VARCHAR(32) NOT NULL COMMENT 'news/product/post/learn/project',
  `target_id` BIGINT UNSIGNED NOT NULL COMMENT '对象ID',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '评论人',
  `parent_id` BIGINT UNSIGNED NOT NULL DEFAULT '0' COMMENT '父评论',
  `content` VARCHAR(2000) NOT NULL COMMENT '内容',
  `images` JSON COMMENT '图片',
  `likes` INT NOT NULL DEFAULT '0' COMMENT '点赞',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1正常 2屏蔽 3待审',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `idx_rf_comment_target_type_target_id_status` (target_type,target_id,status),
  CONSTRAINT `fk_rf_comment_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='通用评论';

-- 点赞记录 · 统一点赞，防重复
-- ------------------------------------------------------------
-- rf_like 点赞记录 · 统一点赞，防重复
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_like`;
CREATE TABLE `rf_like` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `target_type` VARCHAR(32) NOT NULL COMMENT '对象类型',
  `target_id` BIGINT UNSIGNED NOT NULL COMMENT '对象ID',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '点赞人',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_rf_like_target_type_target_id_user_id` (target_type,target_id,user_id),
  CONSTRAINT `fk_rf_like_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='点赞记录';

-- 收藏 · 产品/资料/帖子收藏
-- ------------------------------------------------------------
-- rf_favorite 收藏 · 产品/资料/帖子收藏
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_favorite`;
CREATE TABLE `rf_favorite` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '用户',
  `target_type` VARCHAR(32) NOT NULL COMMENT '对象类型',
  `target_id` BIGINT UNSIGNED NOT NULL COMMENT '对象ID',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '收藏时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_rf_favorite_user_id_target_type_target_id` (user_id,target_type,target_id),
  CONSTRAINT `fk_rf_favorite_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='收藏';

-- 厂商号订阅 · 用户订阅品牌宣发
-- ------------------------------------------------------------
-- rf_subscribe 厂商号订阅 · 用户订阅品牌宣发
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_subscribe`;
CREATE TABLE `rf_subscribe` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '用户',
  `brand_id` BIGINT UNSIGNED NOT NULL COMMENT '品牌',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '订阅时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_rf_subscribe_user_id_brand_id` (user_id,brand_id),
  CONSTRAINT `fk_rf_subscribe_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`),
  CONSTRAINT `fk_rf_subscribe_brand_id` FOREIGN KEY (`brand_id`) REFERENCES `rf_brand` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='厂商号订阅';

-- 搜索热词 · 各频道搜索热词
-- ------------------------------------------------------------
-- rf_hotword 搜索热词 · 各频道搜索热词
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_hotword`;
CREATE TABLE `rf_hotword` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `channel` VARCHAR(32) NOT NULL COMMENT '频道 news/product/module/toy/learn',
  `word` VARCHAR(64) NOT NULL COMMENT '热词',
  `word_en` VARCHAR(64) COMMENT '热词(英)',
  `search_count` INT NOT NULL DEFAULT '0' COMMENT '搜索次数',
  `sort` INT NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`),
  KEY `idx_rf_hotword_channel_search_count` (channel,search_count)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='搜索热词';

-- 广告推荐位 · 各页面广告位与投放内容
-- ------------------------------------------------------------
-- rf_ad_slot 广告推荐位 · 各页面广告位与投放内容
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_ad_slot`;
CREATE TABLE `rf_ad_slot` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `slot_code` VARCHAR(32) NOT NULL COMMENT '位编码',
  `slot_name` VARCHAR(64) NOT NULL COMMENT '位名称',
  `page` VARCHAR(64) COMMENT '所在页面',
  `image` VARCHAR(255) COMMENT '图片',
  `link` VARCHAR(255) COMMENT '跳转',
  `size` VARCHAR(32) COMMENT '尺寸',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1启用 0停用',
  `start_at` DATETIME COMMENT '开始',
  `end_at` DATETIME COMMENT '结束',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_ad_slot_slot_code` (`slot_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='广告推荐位';

-- 论坛板块 · 分类论坛板块
-- ------------------------------------------------------------
-- rf_board 论坛板块 · 分类论坛板块
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_board`;
CREATE TABLE `rf_board` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `board_name` VARCHAR(64) NOT NULL COMMENT '板块名',
  `board_name_en` VARCHAR(64) COMMENT '板块名(英)',
  `cat_code` VARCHAR(32) COMMENT '关联分类',
  `icon` VARCHAR(255) COMMENT '图标',
  `intro` VARCHAR(500) COMMENT '简介',
  `post_count` INT NOT NULL DEFAULT '0' COMMENT '帖子数',
  `sort` INT NOT NULL DEFAULT '0' COMMENT '排序',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='论坛板块';

-- 论坛帖子 · 帖子主表（综合/产品/学习/二手）
-- ------------------------------------------------------------
-- rf_post 论坛帖子 · 帖子主表（综合/产品/学习/二手）
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_post`;
CREATE TABLE `rf_post` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `post_no` VARCHAR(32) NOT NULL COMMENT '帖子编号',
  `board_id` BIGINT UNSIGNED NOT NULL COMMENT '板块',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '发帖人',
  `title` VARCHAR(200) NOT NULL COMMENT '标题',
  `title_en` VARCHAR(200) COMMENT '标题(英)',
  `content` MEDIUMTEXT NOT NULL COMMENT '正文',
  `content_en` MEDIUMTEXT COMMENT '正文(英)',
  `excerpt` VARCHAR(300) COMMENT '摘要',
  `excerpt_en` VARCHAR(300) COMMENT '摘要(英)',
  `cover` VARCHAR(255) COMMENT '封面',
  `tags` VARCHAR(255) COMMENT '标签',
  `is_top` TINYINT NOT NULL DEFAULT '0' COMMENT '置顶',
  `is_essence` TINYINT NOT NULL DEFAULT '0' COMMENT '精华',
  `views` INT NOT NULL DEFAULT '0' COMMENT '浏览',
  `likes` INT NOT NULL DEFAULT '0' COMMENT '点赞',
  `reply_count` INT NOT NULL DEFAULT '0' COMMENT '回复数',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1正常 2屏蔽 3待审',
  `last_reply_at` DATETIME COMMENT '最后回复',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_post_post_no` (`post_no`),
  KEY `idx_rf_post_board_id_is_top_last_reply_at` (board_id,is_top,last_reply_at),
  CONSTRAINT `fk_rf_post_board_id` FOREIGN KEY (`board_id`) REFERENCES `rf_board` (`id`),
  CONSTRAINT `fk_rf_post_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='论坛帖子';

-- 帖子回复 · 楼层回复，支持楼中楼
-- ------------------------------------------------------------
-- rf_post_reply 帖子回复 · 楼层回复，支持楼中楼
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_post_reply`;
CREATE TABLE `rf_post_reply` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `post_id` BIGINT UNSIGNED NOT NULL COMMENT '帖子',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '回复人',
  `parent_id` BIGINT UNSIGNED NOT NULL DEFAULT '0' COMMENT '父回复',
  `content` VARCHAR(2000) NOT NULL COMMENT '内容',
  `floor_no` INT COMMENT '楼层',
  `likes` INT NOT NULL DEFAULT '0' COMMENT '点赞',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '状态',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `idx_rf_post_reply_post_id_floor_no` (post_id,floor_no),
  CONSTRAINT `fk_rf_post_reply_post_id` FOREIGN KEY (`post_id`) REFERENCES `rf_post` (`id`),
  CONSTRAINT `fk_rf_post_reply_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='帖子回复';

-- 学习资料 · 课程/文档/视频主表
-- ------------------------------------------------------------
-- rf_learn 学习资料 · 课程/文档/视频主表
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_learn`;
CREATE TABLE `rf_learn` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `learn_no` VARCHAR(32) NOT NULL COMMENT '资料编号',
  `title` VARCHAR(200) NOT NULL COMMENT '标题',
  `title_en` VARCHAR(200) COMMENT '标题(英)',
  `cat_code` VARCHAR(32) COMMENT '分类',
  `author_id` BIGINT UNSIGNED COMMENT '作者',
  `cover` VARCHAR(255) COMMENT '封面',
  `desc` VARCHAR(1000) COMMENT '简介',
  `desc_en` VARCHAR(1000) COMMENT '简介(英)',
  `level` TINYINT NOT NULL DEFAULT '1' COMMENT '1入门 2进阶 3高级',
  `media_type` TINYINT NOT NULL DEFAULT '1' COMMENT '1视频 2文档 3代码 4课程',
  `lessons` INT NOT NULL DEFAULT '0' COMMENT '课时数',
  `hours` DECIMAL(6,1) COMMENT '总时长',
  `students` INT NOT NULL DEFAULT '0' COMMENT '学习人数',
  `rating` DECIMAL(2,1) NOT NULL DEFAULT '0' COMMENT '评分',
  `is_free` TINYINT NOT NULL DEFAULT '1' COMMENT '是否免费',
  `price` INT NOT NULL DEFAULT '0' COMMENT '价格(分)',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1上架 0下架',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_learn_learn_no` (`learn_no`),
  KEY `idx_rf_learn_cat_code` (`cat_code`),
  CONSTRAINT `fk_rf_learn_author_id` FOREIGN KEY (`author_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='学习资料';

-- 课时 · 课程章节明细
-- ------------------------------------------------------------
-- rf_learn_lesson 课时 · 课程章节明细
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_learn_lesson`;
CREATE TABLE `rf_learn_lesson` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `learn_id` BIGINT UNSIGNED NOT NULL COMMENT '课程',
  `title` VARCHAR(200) NOT NULL COMMENT '课时标题',
  `title_en` VARCHAR(200) COMMENT '课时标题(英)',
  `sort` INT NOT NULL DEFAULT '0' COMMENT '排序',
  `duration` INT COMMENT '时长(秒)',
  `video_url` VARCHAR(255) COMMENT '视频',
  `doc_url` VARCHAR(255) COMMENT '文档',
  `is_free` TINYINT NOT NULL DEFAULT '0' COMMENT '是否免费试看',
  PRIMARY KEY (`id`),
  KEY `idx_rf_learn_lesson_learn_id_sort` (learn_id,sort),
  CONSTRAINT `fk_rf_learn_lesson_learn_id` FOREIGN KEY (`learn_id`) REFERENCES `rf_learn` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='课时';

-- 学习路径 · 入门→进阶→实战路径
-- ------------------------------------------------------------
-- rf_learn_path 学习路径 · 入门→进阶→实战路径
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_learn_path`;
CREATE TABLE `rf_learn_path` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `path_name` VARCHAR(64) NOT NULL COMMENT '路径名',
  `path_name_en` VARCHAR(64) COMMENT '路径名(英)',
  `desc` VARCHAR(500) COMMENT '说明',
  `stages` INT NOT NULL DEFAULT '0' COMMENT '阶段数',
  `cover` VARCHAR(255) COMMENT '封面',
  `sort` INT NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='学习路径';

-- 路径节点 · 路径与课程关联
-- ------------------------------------------------------------
-- rf_learn_path_item 路径节点 · 路径与课程关联
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_learn_path_item`;
CREATE TABLE `rf_learn_path_item` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `path_id` BIGINT UNSIGNED NOT NULL COMMENT '路径',
  `learn_id` BIGINT UNSIGNED NOT NULL COMMENT '课程',
  `stage_no` INT NOT NULL COMMENT '阶段序号',
  `sort` INT NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_rf_learn_path_item_path_id` FOREIGN KEY (`path_id`) REFERENCES `rf_learn_path` (`id`),
  CONSTRAINT `fk_rf_learn_path_item_learn_id` FOREIGN KEY (`learn_id`) REFERENCES `rf_learn` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='路径节点';

-- 学习报名 · 课程与赛事报名记录
-- ------------------------------------------------------------
-- rf_learn_enroll 学习报名 · 课程与赛事报名记录
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_learn_enroll`;
CREATE TABLE `rf_learn_enroll` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `enroll_no` VARCHAR(32) NOT NULL COMMENT '报名编号',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '用户',
  `target_type` TINYINT NOT NULL COMMENT '1课程 2赛事',
  `target_id` BIGINT UNSIGNED NOT NULL COMMENT '对象ID',
  `contact` VARCHAR(64) COMMENT '联系人',
  `phone` VARCHAR(20) COMMENT '电话',
  `remark` VARCHAR(500) COMMENT '备注',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待确认 2已确认 3取消',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '报名时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_learn_enroll_enroll_no` (`enroll_no`),
  KEY `idx_rf_learn_enroll_target_type_target_id` (target_type,target_id),
  CONSTRAINT `fk_rf_learn_enroll_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='学习报名';

-- 产品主表 · 商用/具身/定制/模块/组件/配件/五金/3D打印/外壳/玩具
-- ------------------------------------------------------------
-- rf_product 产品主表 · 商用/具身/定制/模块/组件/配件/五金/3D打印/外壳/玩具
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_product`;
CREATE TABLE `rf_product` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `product_no` VARCHAR(32) NOT NULL COMMENT '产品编号 P1000',
  `sku` VARCHAR(64) COMMENT 'SKU',
  `name` VARCHAR(200) NOT NULL COMMENT '产品名',
  `name_en` VARCHAR(200) COMMENT '产品名(英)',
  `cat_code` VARCHAR(32) NOT NULL COMMENT '分类编码',
  `brand_id` BIGINT UNSIGNED COMMENT '品牌',
  `publisher_id` BIGINT UNSIGNED COMMENT '发布者',
  `cover` VARCHAR(255) COMMENT '主图',
  `images` JSON COMMENT '图集',
  `price` INT NOT NULL DEFAULT '0' COMMENT '价格(分)',
  `price_text` VARCHAR(32) COMMENT '价格展示',
  `stock` INT NOT NULL DEFAULT '0' COMMENT '库存',
  `sales` INT NOT NULL DEFAULT '0' COMMENT '销量',
  `views` INT NOT NULL DEFAULT '0' COMMENT '浏览',
  `rating` DECIMAL(2,1) NOT NULL DEFAULT '0' COMMENT '评分',
  `review_count` INT NOT NULL DEFAULT '0' COMMENT '评价数',
  `is_featured` TINYINT NOT NULL DEFAULT '0' COMMENT '是否主打',
  `is_open_source` TINYINT NOT NULL DEFAULT '0' COMMENT '是否开源',
  `tags` VARCHAR(255) COMMENT '标签',
  `tags_en` VARCHAR(255) COMMENT '标签(英)',
  `desc` TEXT COMMENT '描述',
  `desc_en` TEXT COMMENT '描述(英)',
  `status` TINYINT NOT NULL DEFAULT '0' COMMENT '0草稿 1待审 2在售 3下架 4驳回',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `deleted_at` DATETIME COMMENT '软删',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_product_product_no` (`product_no`),
  KEY `idx_rf_product_cat_code` (`cat_code`),
  KEY `idx_rf_product_cat_code_status_sales` (cat_code,status,sales),
  CONSTRAINT `fk_rf_product_brand_id` FOREIGN KEY (`brand_id`) REFERENCES `rf_brand` (`id`),
  CONSTRAINT `fk_rf_product_publisher_id` FOREIGN KEY (`publisher_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='产品主表';

-- 产品规格 · 参数名/值/英文名键值对
-- ------------------------------------------------------------
-- rf_product_spec 产品规格 · 参数名/值/英文名键值对
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_product_spec`;
CREATE TABLE `rf_product_spec` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `product_id` BIGINT UNSIGNED NOT NULL COMMENT '产品',
  `spec_name` VARCHAR(64) NOT NULL COMMENT '参数名',
  `spec_value` VARCHAR(500) NOT NULL COMMENT '参数值',
  `spec_name_en` VARCHAR(64) COMMENT '参数名(英)',
  `spec_value_en` VARCHAR(500) COMMENT '参数值(英)',
  `sort` INT NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`),
  KEY `idx_rf_product_spec_product_id_sort` (product_id,sort),
  CONSTRAINT `fk_rf_product_spec_product_id` FOREIGN KEY (`product_id`) REFERENCES `rf_product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='产品规格';

-- 外设接口 · 主控板类产品的接口清单
-- ------------------------------------------------------------
-- rf_product_interface 外设接口 · 主控板类产品的接口清单
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_product_interface`;
CREATE TABLE `rf_product_interface` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `product_id` BIGINT UNSIGNED NOT NULL COMMENT '产品',
  `iface_name` VARCHAR(64) NOT NULL COMMENT '接口名',
  `iface_name_en` VARCHAR(64) COMMENT '接口名(英)',
  `iface_type` VARCHAR(32) COMMENT '类型 输入/输出/总线/通信',
  `qty` INT NOT NULL DEFAULT '1' COMMENT '数量',
  `note` VARCHAR(255) COMMENT '说明',
  `note_en` VARCHAR(255) COMMENT '说明(英)',
  PRIMARY KEY (`id`),
  KEY `idx_rf_product_interface_product_id` (product_id),
  CONSTRAINT `fk_rf_product_interface_product_id` FOREIGN KEY (`product_id`) REFERENCES `rf_product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='外设接口';

-- 产品资料 · 3D尺寸/硬件资料/软件资料/演示视频
-- ------------------------------------------------------------
-- rf_product_file 产品资料 · 3D尺寸/硬件资料/软件资料/演示视频
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_product_file`;
CREATE TABLE `rf_product_file` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `product_id` BIGINT UNSIGNED NOT NULL COMMENT '产品',
  `file_name` VARCHAR(200) NOT NULL COMMENT '文件名',
  `file_name_en` VARCHAR(200) COMMENT '文件名(英)',
  `file_type` VARCHAR(16) COMMENT '格式 STEP/PDF/STL/ZIP/XLSX',
  `file_size` VARCHAR(32) COMMENT '大小',
  `file_url` VARCHAR(255) COMMENT '地址',
  `doc_kind` TINYINT NOT NULL DEFAULT '1' COMMENT '1三维 2硬件 3软件 4视频 5文档',
  `downloads` INT NOT NULL DEFAULT '0' COMMENT '下载数',
  `need_token` TINYINT NOT NULL DEFAULT '0' COMMENT '是否需令牌',
  PRIMARY KEY (`id`),
  KEY `idx_rf_product_file_product_id_doc_kind` (product_id,doc_kind),
  CONSTRAINT `fk_rf_product_file_product_id` FOREIGN KEY (`product_id`) REFERENCES `rf_product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='产品资料';

-- 产品评价 · 评分与评价内容
-- ------------------------------------------------------------
-- rf_product_review 产品评价 · 评分与评价内容
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_product_review`;
CREATE TABLE `rf_product_review` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `product_id` BIGINT UNSIGNED NOT NULL COMMENT '产品',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '评价人',
  `order_id` BIGINT UNSIGNED COMMENT '订单',
  `rating` TINYINT NOT NULL COMMENT '总分1-5',
  `rating_detail` JSON COMMENT '分项评分',
  `content` VARCHAR(2000) COMMENT '内容',
  `content_en` VARCHAR(2000) COMMENT '内容(英)',
  `images` JSON COMMENT '图片',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1显示 2隐藏',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `idx_rf_product_review_product_id_status` (product_id,status),
  CONSTRAINT `fk_rf_product_review_product_id` FOREIGN KEY (`product_id`) REFERENCES `rf_product` (`id`),
  CONSTRAINT `fk_rf_product_review_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='产品评价';

-- 对比记录 · 用户对比操作留痕
-- ------------------------------------------------------------
-- rf_product_compare 对比记录 · 用户对比操作留痕
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_product_compare`;
CREATE TABLE `rf_product_compare` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `user_id` BIGINT UNSIGNED COMMENT '用户',
  `product_ids` VARCHAR(255) NOT NULL COMMENT '产品ID列表',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '时间',
  PRIMARY KEY (`id`),
  KEY `idx_rf_product_compare_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='对比记录';

-- 定制需求 · 商业需求发布主表
-- ------------------------------------------------------------
-- rf_demand 定制需求 · 商业需求发布主表
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_demand`;
CREATE TABLE `rf_demand` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `demand_no` VARCHAR(32) NOT NULL COMMENT '需求编号',
  `title` VARCHAR(200) NOT NULL COMMENT '标题',
  `title_en` VARCHAR(200) COMMENT '标题(英)',
  `owner_id` BIGINT UNSIGNED NOT NULL COMMENT '发布者',
  `cat_code` VARCHAR(32) COMMENT '分类',
  `budget` INT NOT NULL DEFAULT '0' COMMENT '预算(分)',
  `deadline` DATE COMMENT '截止',
  `cover` VARCHAR(255) COMMENT '封面',
  `desc` TEXT COMMENT '描述',
  `desc_en` TEXT COMMENT '描述(英)',
  `attach_files` JSON COMMENT '附件',
  `bid_count` INT NOT NULL DEFAULT '0' COMMENT '应征数',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1招募中 2对接中 3已成交 4关闭',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_demand_demand_no` (`demand_no`),
  KEY `idx_rf_demand_status_deadline` (status,deadline),
  CONSTRAINT `fk_rf_demand_owner_id` FOREIGN KEY (`owner_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='定制需求';

-- 需求应征 · 集成商/开发者对需求的应征
-- ------------------------------------------------------------
-- rf_demand_bid 需求应征 · 集成商/开发者对需求的应征
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_demand_bid`;
CREATE TABLE `rf_demand_bid` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `demand_id` BIGINT UNSIGNED NOT NULL COMMENT '需求',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '应征人',
  `quote` INT NOT NULL DEFAULT '0' COMMENT '报价(分)',
  `days` INT COMMENT '周期(天)',
  `proposal` VARCHAR(2000) COMMENT '方案说明',
  `proposal_en` VARCHAR(2000) COMMENT '方案说明(英)',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待查看 2已查看 3已选标 4未中标',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '应征时间',
  PRIMARY KEY (`id`),
  KEY `idx_rf_demand_bid_demand_id_status` (demand_id,status),
  CONSTRAINT `fk_rf_demand_bid_demand_id` FOREIGN KEY (`demand_id`) REFERENCES `rf_demand` (`id`),
  CONSTRAINT `fk_rf_demand_bid_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='需求应征';

-- 项目 · AI拆分生成或用户创建的项目
-- ------------------------------------------------------------
-- rf_project 项目 · AI拆分生成或用户创建的项目
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_project`;
CREATE TABLE `rf_project` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `project_no` VARCHAR(32) NOT NULL COMMENT '项目编号',
  `name` VARCHAR(200) NOT NULL COMMENT '项目名',
  `name_en` VARCHAR(200) COMMENT '项目名(英)',
  `owner_id` BIGINT UNSIGNED NOT NULL COMMENT '负责人',
  `demand_id` BIGINT UNSIGNED COMMENT '来源需求',
  `ai_requirement_id` BIGINT UNSIGNED COMMENT '来源AI需求',
  `cover` VARCHAR(255) COMMENT '封面',
  `desc` TEXT COMMENT '描述',
  `desc_en` TEXT COMMENT '描述(英)',
  `budget` INT NOT NULL DEFAULT '0' COMMENT '预算(分)',
  `progress` TINYINT NOT NULL DEFAULT '0' COMMENT '进度百分比',
  `stage_code` VARCHAR(32) COMMENT '当前阶段',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1需求确认 2方案设计 3集成开发 4测试验证 5交付完成',
  `deadline` DATE COMMENT '交付日期',
  `member_count` INT NOT NULL DEFAULT '0' COMMENT '成员数',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_project_project_no` (`project_no`),
  KEY `idx_rf_project_status_deadline` (status,deadline),
  CONSTRAINT `fk_rf_project_owner_id` FOREIGN KEY (`owner_id`) REFERENCES `rf_user` (`id`),
  CONSTRAINT `fk_rf_project_demand_id` FOREIGN KEY (`demand_id`) REFERENCES `rf_demand` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='项目';

-- 项目节点 · 节点分组与进度明细
-- ------------------------------------------------------------
-- rf_project_node 项目节点 · 节点分组与进度明细
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_project_node`;
CREATE TABLE `rf_project_node` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `project_id` BIGINT UNSIGNED NOT NULL COMMENT '项目',
  `node_name` VARCHAR(128) NOT NULL COMMENT '节点名',
  `node_name_en` VARCHAR(128) COMMENT '节点名(英)',
  `group_name` VARCHAR(64) COMMENT '分组',
  `owner_id` BIGINT UNSIGNED COMMENT '负责人',
  `progress` TINYINT NOT NULL DEFAULT '0' COMMENT '进度',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待开始 2进行中 3已完成',
  `deliverable` VARCHAR(500) COMMENT '交付物说明',
  `plan_start` DATE COMMENT '计划开始',
  `plan_end` DATE COMMENT '计划结束',
  `actual_end` DATE COMMENT '实际完成',
  `sort` INT NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`),
  KEY `idx_rf_project_node_project_id_sort` (project_id,sort),
  CONSTRAINT `fk_rf_project_node_project_id` FOREIGN KEY (`project_id`) REFERENCES `rf_project` (`id`),
  CONSTRAINT `fk_rf_project_node_owner_id` FOREIGN KEY (`owner_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='项目节点';

-- 项目成员 · 成员分工与角色
-- ------------------------------------------------------------
-- rf_project_member 项目成员 · 成员分工与角色
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_project_member`;
CREATE TABLE `rf_project_member` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `project_id` BIGINT UNSIGNED NOT NULL COMMENT '项目',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '成员',
  `role_name` VARCHAR(64) NOT NULL COMMENT '角色 项目经理/结构工程师',
  `role_name_en` VARCHAR(64) COMMENT '角色(英)',
  `node_id` BIGINT UNSIGNED COMMENT '负责节点',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1在岗 2退出',
  `joined_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '加入时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_rf_project_member_project_id_user_id` (project_id,user_id),
  CONSTRAINT `fk_rf_project_member_project_id` FOREIGN KEY (`project_id`) REFERENCES `rf_project` (`id`),
  CONSTRAINT `fk_rf_project_member_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='项目成员';

-- 集成需求 · 模块与第三方硬件打通需求
-- ------------------------------------------------------------
-- rf_integration 集成需求 · 模块与第三方硬件打通需求
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_integration`;
CREATE TABLE `rf_integration` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `integ_no` VARCHAR(32) NOT NULL COMMENT '编号',
  `title` VARCHAR(200) NOT NULL COMMENT '标题',
  `title_en` VARCHAR(200) COMMENT '标题(英)',
  `owner_id` BIGINT UNSIGNED NOT NULL COMMENT '发布者',
  `desc` TEXT COMMENT '描述',
  `desc_en` TEXT COMMENT '描述(英)',
  `module_count` INT NOT NULL DEFAULT '0' COMMENT '涉及模块数',
  `budget` INT NOT NULL DEFAULT '0' COMMENT '预算(分)',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待接单 2集成中 3已交付',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_integration_integ_no` (`integ_no`),
  CONSTRAINT `fk_rf_integration_owner_id` FOREIGN KEY (`owner_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='集成需求';

-- 测试需求 · 整机/部件测试需求
-- ------------------------------------------------------------
-- rf_test 测试需求 · 整机/部件测试需求
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_test`;
CREATE TABLE `rf_test` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `test_no` VARCHAR(32) NOT NULL COMMENT '编号',
  `title` VARCHAR(200) NOT NULL COMMENT '标题',
  `title_en` VARCHAR(200) COMMENT '标题(英)',
  `owner_id` BIGINT UNSIGNED NOT NULL COMMENT '发布者',
  `desc` TEXT COMMENT '描述',
  `desc_en` TEXT COMMENT '描述(英)',
  `test_type` VARCHAR(32) COMMENT '测试类型',
  `budget` INT NOT NULL DEFAULT '0' COMMENT '预算(分)',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待接单 2测试中 3已完成',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_test_test_no` (`test_no`),
  CONSTRAINT `fk_rf_test_owner_id` FOREIGN KEY (`owner_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='测试需求';

-- 申请承接 · 加入项目/应征需求/承接集成测试的统一申请
-- ------------------------------------------------------------
-- rf_apply 申请承接 · 加入项目/应征需求/承接集成测试的统一申请
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_apply`;
CREATE TABLE `rf_apply` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `apply_no` VARCHAR(32) NOT NULL COMMENT '申请编号',
  `apply_type` TINYINT NOT NULL COMMENT '1项目 2需求 3集成 4测试 5邀请',
  `target_id` BIGINT UNSIGNED NOT NULL COMMENT '对象ID',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '申请人',
  `inviter_id` BIGINT UNSIGNED COMMENT '邀请人',
  `role_name` VARCHAR(64) COMMENT '申请角色',
  `quote` INT COMMENT '报价(分)',
  `days` INT COMMENT '周期',
  `message` VARCHAR(1000) COMMENT '留言',
  `attach` JSON COMMENT '附件',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待处理 2已同意 3已拒绝 4已撤回',
  `handler_id` BIGINT UNSIGNED COMMENT '处理人',
  `handle_at` DATETIME COMMENT '处理时间',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '申请时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_apply_apply_no` (`apply_no`),
  KEY `idx_rf_apply_apply_type_target_id_status` (apply_type,target_id,status),
  CONSTRAINT `fk_rf_apply_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='申请承接';

-- 设计需求 · 结构与电控设计需求
-- ------------------------------------------------------------
-- rf_design_demand 设计需求 · 结构与电控设计需求
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_design_demand`;
CREATE TABLE `rf_design_demand` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `demand_no` VARCHAR(32) NOT NULL COMMENT '编号',
  `title` VARCHAR(200) NOT NULL COMMENT '标题',
  `title_en` VARCHAR(200) COMMENT '标题(英)',
  `owner_id` BIGINT UNSIGNED NOT NULL COMMENT '发布者',
  `project_id` BIGINT UNSIGNED COMMENT '关联项目',
  `design_type` TINYINT NOT NULL DEFAULT '1' COMMENT '1结构 2电控 3外观 4算法',
  `desc` TEXT COMMENT '描述',
  `desc_en` TEXT COMMENT '描述(英)',
  `budget` INT NOT NULL DEFAULT '0' COMMENT '预算(分)',
  `deadline` DATE COMMENT '交付日期',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1招募 2设计中 3评审中 4已完成',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_design_demand_demand_no` (`demand_no`),
  CONSTRAINT `fk_rf_design_demand_owner_id` FOREIGN KEY (`owner_id`) REFERENCES `rf_user` (`id`),
  CONSTRAINT `fk_rf_design_demand_project_id` FOREIGN KEY (`project_id`) REFERENCES `rf_project` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='设计需求';

-- 设计任务 · 设计需求拆解出的任务项
-- ------------------------------------------------------------
-- rf_design_task 设计任务 · 设计需求拆解出的任务项
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_design_task`;
CREATE TABLE `rf_design_task` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `demand_id` BIGINT UNSIGNED NOT NULL COMMENT '需求',
  `task_name` VARCHAR(128) NOT NULL COMMENT '任务名',
  `task_name_en` VARCHAR(128) COMMENT '任务名(英)',
  `owner_id` BIGINT UNSIGNED COMMENT '负责人',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待开始 2进行中 3已完成',
  `progress` TINYINT NOT NULL DEFAULT '0' COMMENT '进度',
  `due_date` DATE COMMENT '截止',
  PRIMARY KEY (`id`),
  KEY `idx_rf_design_task_demand_id_status` (demand_id,status),
  CONSTRAINT `fk_rf_design_task_demand_id` FOREIGN KEY (`demand_id`) REFERENCES `rf_design_demand` (`id`),
  CONSTRAINT `fk_rf_design_task_owner_id` FOREIGN KEY (`owner_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='设计任务';

-- 图纸 · 设计图纸与版本文件
-- ------------------------------------------------------------
-- rf_design_drawing 图纸 · 设计图纸与版本文件
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_design_drawing`;
CREATE TABLE `rf_design_drawing` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `drawing_no` VARCHAR(32) NOT NULL COMMENT '图号',
  `demand_id` BIGINT UNSIGNED COMMENT '需求',
  `project_id` BIGINT UNSIGNED COMMENT '项目',
  `name` VARCHAR(200) NOT NULL COMMENT '图名',
  `name_en` VARCHAR(200) COMMENT '图名(英)',
  `file_url` VARCHAR(255) COMMENT '文件',
  `format` VARCHAR(16) COMMENT '格式 STEP/PDF/DXF',
  `version` VARCHAR(16) NOT NULL DEFAULT 'v1.0' COMMENT '版本',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1草稿 2评审中 3已发布',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_design_drawing_drawing_no` (`drawing_no`),
  CONSTRAINT `fk_rf_design_drawing_demand_id` FOREIGN KEY (`demand_id`) REFERENCES `rf_design_demand` (`id`),
  CONSTRAINT `fk_rf_design_drawing_project_id` FOREIGN KEY (`project_id`) REFERENCES `rf_project` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='图纸';

-- 设计版本 · 图纸版本变更记录
-- ------------------------------------------------------------
-- rf_design_version 设计版本 · 图纸版本变更记录
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_design_version`;
CREATE TABLE `rf_design_version` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `drawing_id` BIGINT UNSIGNED NOT NULL COMMENT '图纸',
  `version` VARCHAR(16) NOT NULL COMMENT '版本号',
  `note` VARCHAR(500) COMMENT '变更说明',
  `operator_id` BIGINT UNSIGNED COMMENT '操作人',
  `is_frozen` TINYINT NOT NULL DEFAULT '0' COMMENT '是否冻结',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_rf_design_version_drawing_id_version` (drawing_id,version),
  CONSTRAINT `fk_rf_design_version_drawing_id` FOREIGN KEY (`drawing_id`) REFERENCES `rf_design_drawing` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='设计版本';

-- 设计评审 · 多级评审流程与结论
-- ------------------------------------------------------------
-- rf_design_review 设计评审 · 多级评审流程与结论
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_design_review`;
CREATE TABLE `rf_design_review` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `review_no` VARCHAR(32) NOT NULL COMMENT '评审编号',
  `target_type` VARCHAR(32) NOT NULL COMMENT 'drawing/demand/project',
  `target_id` BIGINT UNSIGNED NOT NULL COMMENT '对象ID',
  `level` TINYINT NOT NULL DEFAULT '1' COMMENT '评审级别',
  `reviewer_ids` JSON COMMENT '评审人',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待评审 2通过 3驳回 4待修改',
  `conclusion` VARCHAR(1000) COMMENT '结论',
  `conclusion_en` VARCHAR(1000) COMMENT '结论(英)',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_design_review_review_no` (`review_no`),
  KEY `idx_rf_design_review_target_type_target_id` (target_type,target_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='设计评审';

-- 设计BOM · 设计阶段物料清单
-- ------------------------------------------------------------
-- rf_design_bom 设计BOM · 设计阶段物料清单
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_design_bom`;
CREATE TABLE `rf_design_bom` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `demand_id` BIGINT UNSIGNED COMMENT '需求',
  `project_id` BIGINT UNSIGNED COMMENT '项目',
  `part_name` VARCHAR(128) NOT NULL COMMENT '物料名',
  `part_name_en` VARCHAR(128) COMMENT '物料名(英)',
  `spec` VARCHAR(255) COMMENT '规格',
  `qty` INT NOT NULL DEFAULT '1' COMMENT '数量',
  `unit` VARCHAR(16) COMMENT '单位',
  `ref_product_id` BIGINT UNSIGNED COMMENT '关联平台产品',
  `source` TINYINT NOT NULL DEFAULT '1' COMMENT '1平台在售 2外购 3自制',
  PRIMARY KEY (`id`),
  KEY `idx_rf_design_bom_project_id` (project_id),
  CONSTRAINT `fk_rf_design_bom_demand_id` FOREIGN KEY (`demand_id`) REFERENCES `rf_design_demand` (`id`),
  CONSTRAINT `fk_rf_design_bom_project_id` FOREIGN KEY (`project_id`) REFERENCES `rf_project` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='设计BOM';

-- 供应商 · 物料与代工厂商
-- ------------------------------------------------------------
-- rf_supplier 供应商 · 物料与代工厂商
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_supplier`;
CREATE TABLE `rf_supplier` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `supplier_no` VARCHAR(32) NOT NULL COMMENT '编号',
  `name` VARCHAR(128) NOT NULL COMMENT '名称',
  `name_en` VARCHAR(128) COMMENT '名称(英)',
  `supplier_type` VARCHAR(32) COMMENT '类型 物料/代工/设备',
  `city` VARCHAR(64) COMMENT '城市',
  `contact` VARCHAR(64) COMMENT '联系人',
  `phone` VARCHAR(20) COMMENT '电话',
  `logo` VARCHAR(255) COMMENT 'Logo',
  `tags` VARCHAR(255) COMMENT '标签',
  `rating` DECIMAL(2,1) NOT NULL DEFAULT '0' COMMENT '评分',
  `lead_days` INT NOT NULL DEFAULT '0' COMMENT '交期',
  `moq` INT NOT NULL DEFAULT '1' COMMENT '起订',
  `certs` VARCHAR(255) COMMENT '资质',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '状态',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_supplier_supplier_no` (`supplier_no`),
  KEY `idx_rf_supplier_supplier_type_city` (supplier_type,city)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='供应商';

-- 产线 · SMT/组装/测试/包装等产线
-- ------------------------------------------------------------
-- rf_production_line 产线 · SMT/组装/测试/包装等产线
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_production_line`;
CREATE TABLE `rf_production_line` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `line_no` VARCHAR(32) NOT NULL COMMENT '产线编号',
  `name` VARCHAR(128) NOT NULL COMMENT '产线名',
  `name_en` VARCHAR(128) COMMENT '产线名(英)',
  `line_type` VARCHAR(32) COMMENT '类型 SMT/组装/测试/包装',
  `vendor_id` BIGINT UNSIGNED COMMENT '所属厂商',
  `city` VARCHAR(64) COMMENT '城市',
  `cover` VARCHAR(255) COMMENT '图片',
  `daily_capacity` INT NOT NULL DEFAULT '0' COMMENT '日产能',
  `month_capacity` INT NOT NULL DEFAULT '0' COMMENT '月产能',
  `utilization` TINYINT NOT NULL DEFAULT '0' COMMENT '稼动率%',
  `moq` INT NOT NULL DEFAULT '1' COMMENT '最小起订',
  `lead_days` INT NOT NULL DEFAULT '0' COMMENT '交付周期',
  `price_per_unit` INT NOT NULL DEFAULT '0' COMMENT '单价(分)',
  `worker_count` INT NOT NULL DEFAULT '0' COMMENT '人数',
  `automation` TINYINT NOT NULL DEFAULT '0' COMMENT '自动化率%',
  `certs` VARCHAR(255) COMMENT '资质',
  `rating` DECIMAL(2,1) NOT NULL DEFAULT '0' COMMENT '评分',
  `orders` INT NOT NULL DEFAULT '0' COMMENT '累计订单',
  `status` VARCHAR(32) COMMENT '状态 空闲/生产中/满产',
  `desc` TEXT COMMENT '说明',
  `desc_en` TEXT COMMENT '说明(英)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_production_line_line_no` (`line_no`),
  KEY `idx_rf_production_line_line_type` (`line_type`),
  KEY `idx_rf_production_line_line_type_city` (line_type,city),
  CONSTRAINT `fk_rf_production_line_vendor_id` FOREIGN KEY (`vendor_id`) REFERENCES `rf_supplier` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='产线';

-- 生产工单 · 从试产到量产的工单
-- ------------------------------------------------------------
-- rf_production_order 生产工单 · 从试产到量产的工单
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_production_order`;
CREATE TABLE `rf_production_order` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `order_no` VARCHAR(32) NOT NULL COMMENT '工单号',
  `line_id` BIGINT UNSIGNED NOT NULL COMMENT '产线',
  `project_id` BIGINT UNSIGNED COMMENT '项目',
  `product_id` BIGINT UNSIGNED COMMENT '产品',
  `owner_id` BIGINT UNSIGNED NOT NULL COMMENT '下单人',
  `qty` INT NOT NULL DEFAULT '0' COMMENT '数量',
  `progress` TINYINT NOT NULL DEFAULT '0' COMMENT '进度',
  `stage` VARCHAR(32) COMMENT '当前工序',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待排产 2备料 3生产中 4质检 5已交付 6已取消',
  `plan_start` DATE COMMENT '计划开始',
  `plan_end` DATE COMMENT '计划完成',
  `actual_end` DATE COMMENT '实际完成',
  `amount` INT NOT NULL DEFAULT '0' COMMENT '金额(分)',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_production_order_order_no` (`order_no`),
  KEY `idx_rf_production_order_line_id_status` (line_id,status),
  CONSTRAINT `fk_rf_production_order_line_id` FOREIGN KEY (`line_id`) REFERENCES `rf_production_line` (`id`),
  CONSTRAINT `fk_rf_production_order_project_id` FOREIGN KEY (`project_id`) REFERENCES `rf_project` (`id`),
  CONSTRAINT `fk_rf_production_order_product_id` FOREIGN KEY (`product_id`) REFERENCES `rf_product` (`id`),
  CONSTRAINT `fk_rf_production_order_owner_id` FOREIGN KEY (`owner_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='生产工单';

-- 生产进度日报 · 工单每日进度上报
-- ------------------------------------------------------------
-- rf_production_progress 生产进度日报 · 工单每日进度上报
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_production_progress`;
CREATE TABLE `rf_production_progress` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `order_id` BIGINT UNSIGNED NOT NULL COMMENT '工单',
  `report_date` DATE NOT NULL COMMENT '日期',
  `stage` VARCHAR(32) COMMENT '工序',
  `completed_qty` INT NOT NULL DEFAULT '0' COMMENT '完成数',
  `defect_qty` INT NOT NULL DEFAULT '0' COMMENT '不良数',
  `progress` TINYINT NOT NULL DEFAULT '0' COMMENT '进度',
  `worker_count` INT COMMENT '出勤人数',
  `remark` VARCHAR(500) COMMENT '备注',
  `reporter_id` BIGINT UNSIGNED COMMENT '上报人',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_rf_production_progress_order_id_report_date` (order_id,report_date),
  CONSTRAINT `fk_rf_production_progress_order_id` FOREIGN KEY (`order_id`) REFERENCES `rf_production_order` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='生产进度日报';

-- 产能 · 产线可用产能时段
-- ------------------------------------------------------------
-- rf_capacity 产能 · 产线可用产能时段
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_capacity`;
CREATE TABLE `rf_capacity` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `line_id` BIGINT UNSIGNED NOT NULL COMMENT '产线',
  `capacity_date` DATE NOT NULL COMMENT '日期',
  `total_qty` INT NOT NULL DEFAULT '0' COMMENT '总产能',
  `used_qty` INT NOT NULL DEFAULT '0' COMMENT '已占用',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1可预约 2已满 3停机',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_rf_capacity_line_id_capacity_date` (line_id,capacity_date),
  CONSTRAINT `fk_rf_capacity_line_id` FOREIGN KEY (`line_id`) REFERENCES `rf_production_line` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='产能';

-- 产能预约 · 用户预约产线时段
-- ------------------------------------------------------------
-- rf_capacity_booking 产能预约 · 用户预约产线时段
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_capacity_booking`;
CREATE TABLE `rf_capacity_booking` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `booking_no` VARCHAR(32) NOT NULL COMMENT '预约号',
  `line_id` BIGINT UNSIGNED NOT NULL COMMENT '产线',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '预约人',
  `start_date` DATE NOT NULL COMMENT '开始',
  `end_date` DATE NOT NULL COMMENT '结束',
  `qty` INT NOT NULL DEFAULT '0' COMMENT '预约产能',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待确认 2已确认 3已取消',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_capacity_booking_booking_no` (`booking_no`),
  CONSTRAINT `fk_rf_capacity_booking_line_id` FOREIGN KEY (`line_id`) REFERENCES `rf_production_line` (`id`),
  CONSTRAINT `fk_rf_capacity_booking_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='产能预约';

-- 生产BOM · 生产用料清单
-- ------------------------------------------------------------
-- rf_bom 生产BOM · 生产用料清单
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_bom`;
CREATE TABLE `rf_bom` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `bom_no` VARCHAR(32) NOT NULL COMMENT 'BOM编号',
  `order_id` BIGINT UNSIGNED COMMENT '工单',
  `product_id` BIGINT UNSIGNED COMMENT '产品',
  `version` VARCHAR(16) NOT NULL DEFAULT 'v1.0' COMMENT '版本',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1草稿 2已确认 3已齐套',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_bom_bom_no` (`bom_no`),
  CONSTRAINT `fk_rf_bom_order_id` FOREIGN KEY (`order_id`) REFERENCES `rf_production_order` (`id`),
  CONSTRAINT `fk_rf_bom_product_id` FOREIGN KEY (`product_id`) REFERENCES `rf_product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='生产BOM';

-- BOM明细 · 物料行与齐套状态
-- ------------------------------------------------------------
-- rf_bom_item BOM明细 · 物料行与齐套状态
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_bom_item`;
CREATE TABLE `rf_bom_item` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `bom_id` BIGINT UNSIGNED NOT NULL COMMENT 'BOM',
  `part_name` VARCHAR(128) NOT NULL COMMENT '物料名',
  `part_name_en` VARCHAR(128) COMMENT '物料名(英)',
  `spec` VARCHAR(255) COMMENT '规格',
  `qty` INT NOT NULL DEFAULT '1' COMMENT '需求数',
  `stock_qty` INT NOT NULL DEFAULT '0' COMMENT '库存数',
  `unit` VARCHAR(16) COMMENT '单位',
  `ref_product_id` BIGINT UNSIGNED COMMENT '平台产品',
  `supplier_id` BIGINT UNSIGNED COMMENT '供应商',
  `ready` TINYINT NOT NULL DEFAULT '0' COMMENT '是否齐套',
  PRIMARY KEY (`id`),
  KEY `idx_rf_bom_item_bom_id` (bom_id),
  CONSTRAINT `fk_rf_bom_item_bom_id` FOREIGN KEY (`bom_id`) REFERENCES `rf_bom` (`id`),
  CONSTRAINT `fk_rf_bom_item_supplier_id` FOREIGN KEY (`supplier_id`) REFERENCES `rf_supplier` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='BOM明细';

-- 采购单 · 缺料采购
-- ------------------------------------------------------------
-- rf_procurement 采购单 · 缺料采购
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_procurement`;
CREATE TABLE `rf_procurement` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `purchase_no` VARCHAR(32) NOT NULL COMMENT '采购号',
  `bom_id` BIGINT UNSIGNED COMMENT 'BOM',
  `supplier_id` BIGINT UNSIGNED NOT NULL COMMENT '供应商',
  `part_name` VARCHAR(128) NOT NULL COMMENT '物料',
  `qty` INT NOT NULL DEFAULT '0' COMMENT '数量',
  `amount` INT NOT NULL DEFAULT '0' COMMENT '金额(分)',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待下单 2已下单 3已到货 4已取消',
  `eta` DATE COMMENT '预计到货',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_procurement_purchase_no` (`purchase_no`),
  CONSTRAINT `fk_rf_procurement_bom_id` FOREIGN KEY (`bom_id`) REFERENCES `rf_bom` (`id`),
  CONSTRAINT `fk_rf_procurement_supplier_id` FOREIGN KEY (`supplier_id`) REFERENCES `rf_supplier` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='采购单';

-- 设备台账 · 产线设备资产
-- ------------------------------------------------------------
-- rf_equipment 设备台账 · 产线设备资产
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_equipment`;
CREATE TABLE `rf_equipment` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `equip_no` VARCHAR(32) NOT NULL COMMENT '设备编号',
  `name` VARCHAR(128) NOT NULL COMMENT '设备名',
  `name_en` VARCHAR(128) COMMENT '设备名(英)',
  `line_id` BIGINT UNSIGNED COMMENT '所属产线',
  `model` VARCHAR(64) COMMENT '型号',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1运行 2停机 3维修 4报废',
  `next_maintain` DATE COMMENT '下次保养',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_equipment_equip_no` (`equip_no`),
  CONSTRAINT `fk_rf_equipment_line_id` FOREIGN KEY (`line_id`) REFERENCES `rf_production_line` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='设备台账';

-- 班组人员 · 产线人员与排班
-- ------------------------------------------------------------
-- rf_worker 班组人员 · 产线人员与排班
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_worker`;
CREATE TABLE `rf_worker` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `line_id` BIGINT UNSIGNED NOT NULL COMMENT '产线',
  `name` VARCHAR(64) NOT NULL COMMENT '姓名',
  `role_name` VARCHAR(64) COMMENT '岗位',
  `shift` VARCHAR(32) COMMENT '班次',
  `skill_level` TINYINT COMMENT '技能等级',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1在岗 2休假',
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_rf_worker_line_id` FOREIGN KEY (`line_id`) REFERENCES `rf_production_line` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='班组人员';

-- 质检报告 · 各工序质检结果
-- ------------------------------------------------------------
-- rf_qc_report 质检报告 · 各工序质检结果
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_qc_report`;
CREATE TABLE `rf_qc_report` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `report_no` VARCHAR(32) NOT NULL COMMENT '报告号',
  `order_id` BIGINT UNSIGNED NOT NULL COMMENT '工单',
  `stage` VARCHAR(32) COMMENT '工序',
  `check_qty` INT NOT NULL DEFAULT '0' COMMENT '抽检数',
  `pass_qty` INT NOT NULL DEFAULT '0' COMMENT '合格数',
  `defect_qty` INT NOT NULL DEFAULT '0' COMMENT '不良数',
  `pass_rate` DECIMAL(5,2) COMMENT '合格率%',
  `items` JSON COMMENT '检验项明细',
  `result` TINYINT NOT NULL DEFAULT '1' COMMENT '1合格 2不合格 3让步接收',
  `checker_id` BIGINT UNSIGNED COMMENT '检验员',
  `files` JSON COMMENT '报告文件',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_qc_report_report_no` (`report_no`),
  KEY `idx_rf_qc_report_order_id_stage` (order_id,stage),
  CONSTRAINT `fk_rf_qc_report_order_id` FOREIGN KEY (`order_id`) REFERENCES `rf_production_order` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='质检报告';

-- 良率统计 · 按产线/日期的良率
-- ------------------------------------------------------------
-- rf_yield_stat 良率统计 · 按产线/日期的良率
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_yield_stat`;
CREATE TABLE `rf_yield_stat` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `line_id` BIGINT UNSIGNED NOT NULL COMMENT '产线',
  `stat_date` DATE NOT NULL COMMENT '日期',
  `total_qty` INT NOT NULL DEFAULT '0' COMMENT '总数',
  `pass_qty` INT NOT NULL DEFAULT '0' COMMENT '合格数',
  `yield_rate` DECIMAL(5,2) COMMENT '良率%',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_rf_yield_stat_line_id_stat_date` (line_id,stat_date),
  CONSTRAINT `fk_rf_yield_stat_line_id` FOREIGN KEY (`line_id`) REFERENCES `rf_production_line` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='良率统计';

-- 生产工艺 · 标准工艺路线
-- ------------------------------------------------------------
-- rf_process 生产工艺 · 标准工艺路线
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_process`;
CREATE TABLE `rf_process` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `process_no` VARCHAR(32) NOT NULL COMMENT '工艺编号',
  `name` VARCHAR(128) NOT NULL COMMENT '工艺名',
  `name_en` VARCHAR(128) COMMENT '工艺名(英)',
  `steps` JSON COMMENT '工序步骤',
  `line_type` VARCHAR(32) COMMENT '适用产线',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '状态',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_process_process_no` (`process_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='生产工艺';

-- 模具工装 · 模具与夹具台账及报价
-- ------------------------------------------------------------
-- rf_tooling 模具工装 · 模具与夹具台账及报价
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_tooling`;
CREATE TABLE `rf_tooling` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `tooling_no` VARCHAR(32) NOT NULL COMMENT '编号',
  `name` VARCHAR(128) NOT NULL COMMENT '名称',
  `name_en` VARCHAR(128) COMMENT '名称(英)',
  `product_id` BIGINT UNSIGNED COMMENT '适用产品',
  `supplier_id` BIGINT UNSIGNED COMMENT '供应商',
  `cost` INT NOT NULL DEFAULT '0' COMMENT '费用(分)',
  `lead_days` INT NOT NULL DEFAULT '0' COMMENT '周期',
  `life_count` INT COMMENT '寿命次数',
  `used_count` INT NOT NULL DEFAULT '0' COMMENT '已用次数',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1正常 2维修 3报废',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_tooling_tooling_no` (`tooling_no`),
  CONSTRAINT `fk_rf_tooling_product_id` FOREIGN KEY (`product_id`) REFERENCES `rf_product` (`id`),
  CONSTRAINT `fk_rf_tooling_supplier_id` FOREIGN KEY (`supplier_id`) REFERENCES `rf_supplier` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='模具工装';

-- 仓储 · 原料与成品库存
-- ------------------------------------------------------------
-- rf_warehouse 仓储 · 原料与成品库存
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_warehouse`;
CREATE TABLE `rf_warehouse` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `warehouse_name` VARCHAR(64) NOT NULL COMMENT '仓库名',
  `city` VARCHAR(64) COMMENT '城市',
  `part_name` VARCHAR(128) COMMENT '物料名',
  `stock_qty` INT NOT NULL DEFAULT '0' COMMENT '库存',
  `safe_qty` INT NOT NULL DEFAULT '0' COMMENT '安全库存',
  `location` VARCHAR(64) COMMENT '库位',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='仓储';

-- 物流发货 · 发运单与轨迹
-- ------------------------------------------------------------
-- rf_logistics 物流发货 · 发运单与轨迹
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_logistics`;
CREATE TABLE `rf_logistics` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `logistics_no` VARCHAR(32) NOT NULL COMMENT '运单号',
  `order_id` BIGINT UNSIGNED COMMENT '工单',
  `carrier` VARCHAR(64) COMMENT '承运商',
  `tracking_no` VARCHAR(64) COMMENT '快递单号',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待发 2在途 3已签收',
  `ship_at` DATETIME COMMENT '发货时间',
  `receive_at` DATETIME COMMENT '签收时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_logistics_logistics_no` (`logistics_no`),
  CONSTRAINT `fk_rf_logistics_order_id` FOREIGN KEY (`order_id`) REFERENCES `rf_production_order` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='物流发货';

-- 量产交付 · 交付批次与验收
-- ------------------------------------------------------------
-- rf_delivery 量产交付 · 交付批次与验收
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_delivery`;
CREATE TABLE `rf_delivery` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `delivery_no` VARCHAR(32) NOT NULL COMMENT '交付号',
  `order_id` BIGINT UNSIGNED NOT NULL COMMENT '工单',
  `batch_no` VARCHAR(32) COMMENT '批次',
  `qty` INT NOT NULL DEFAULT '0' COMMENT '交付数量',
  `accept_status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待验收 2已验收 3拒收',
  `files` JSON COMMENT '验收文件',
  `deliver_at` DATETIME COMMENT '交付时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_delivery_delivery_no` (`delivery_no`),
  CONSTRAINT `fk_rf_delivery_order_id` FOREIGN KEY (`order_id`) REFERENCES `rf_production_order` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='量产交付';

-- 资质认证 · 产品与产线认证证书
-- ------------------------------------------------------------
-- rf_cert 资质认证 · 产品与产线认证证书
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_cert`;
CREATE TABLE `rf_cert` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `cert_no` VARCHAR(64) NOT NULL COMMENT '证书号',
  `name` VARCHAR(128) NOT NULL COMMENT '认证名',
  `name_en` VARCHAR(128) COMMENT '认证名(英)',
  `target_type` VARCHAR(32) COMMENT 'product/line/supplier',
  `target_id` BIGINT UNSIGNED COMMENT '对象ID',
  `issuer` VARCHAR(128) COMMENT '发证机构',
  `valid_until` DATE COMMENT '有效期至',
  `file_url` VARCHAR(255) COMMENT '证书文件',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_cert_cert_no` (`cert_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='资质认证';

-- 量产案例 · 客户量产落地案例
-- ------------------------------------------------------------
-- rf_production_case 量产案例 · 客户量产落地案例
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_production_case`;
CREATE TABLE `rf_production_case` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `title` VARCHAR(200) NOT NULL COMMENT '标题',
  `title_en` VARCHAR(200) COMMENT '标题(英)',
  `line_id` BIGINT UNSIGNED COMMENT '产线',
  `customer` VARCHAR(128) COMMENT '客户',
  `cover` VARCHAR(255) COMMENT '封面',
  `summary` VARCHAR(1000) COMMENT '摘要',
  `summary_en` VARCHAR(1000) COMMENT '摘要(英)',
  `qty` INT COMMENT '数量',
  `cycle_days` INT COMMENT '周期',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_rf_production_case_line_id` FOREIGN KEY (`line_id`) REFERENCES `rf_production_line` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='量产案例';

-- 成本核算 · 工单成本构成
-- ------------------------------------------------------------
-- rf_production_cost 成本核算 · 工单成本构成
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_production_cost`;
CREATE TABLE `rf_production_cost` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `order_id` BIGINT UNSIGNED NOT NULL COMMENT '工单',
  `material_cost` INT NOT NULL DEFAULT '0' COMMENT '物料(分)',
  `labor_cost` INT NOT NULL DEFAULT '0' COMMENT '人工(分)',
  `equip_cost` INT NOT NULL DEFAULT '0' COMMENT '设备(分)',
  `overhead_cost` INT NOT NULL DEFAULT '0' COMMENT '制造费用(分)',
  `total_cost` INT NOT NULL DEFAULT '0' COMMENT '合计(分)',
  `unit_cost` INT NOT NULL DEFAULT '0' COMMENT '单件(分)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_rf_production_cost_order_id` (order_id),
  CONSTRAINT `fk_rf_production_cost_order_id` FOREIGN KEY (`order_id`) REFERENCES `rf_production_order` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='成本核算';

-- 流程阶段 · 需求→设计→集成→测试→生产五阶段定义
-- ------------------------------------------------------------
-- rf_flow_stage 流程阶段 · 需求→设计→集成→测试→生产五阶段定义
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_flow_stage`;
CREATE TABLE `rf_flow_stage` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `stage_code` VARCHAR(32) NOT NULL COMMENT '阶段编码 requirement/design/integration/test/production',
  `stage_name` VARCHAR(64) NOT NULL COMMENT '阶段名',
  `stage_name_en` VARCHAR(64) COMMENT '阶段名(英)',
  `sort` INT NOT NULL DEFAULT '0' COMMENT '顺序',
  `desc` VARCHAR(500) COMMENT '说明',
  `desc_en` VARCHAR(500) COMMENT '说明(英)',
  `entry_page` VARCHAR(128) COMMENT '入口页面',
  `icon` VARCHAR(255) COMMENT '图标',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_flow_stage_stage_code` (`stage_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='流程阶段';

-- 阶段门禁 · 阶段间 Gate 评审关卡
-- ------------------------------------------------------------
-- rf_flow_gate 阶段门禁 · 阶段间 Gate 评审关卡
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_flow_gate`;
CREATE TABLE `rf_flow_gate` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `gate_no` VARCHAR(32) NOT NULL COMMENT '门禁号',
  `project_id` BIGINT UNSIGNED NOT NULL COMMENT '项目',
  `from_stage` VARCHAR(32) NOT NULL COMMENT '起始阶段',
  `to_stage` VARCHAR(32) NOT NULL COMMENT '目标阶段',
  `level` TINYINT NOT NULL DEFAULT '1' COMMENT '门禁级别',
  `check_items` JSON COMMENT '检查项',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待评审 2通过 3驳回',
  `verdict` VARCHAR(1000) COMMENT '评审结论',
  `verdict_en` VARCHAR(1000) COMMENT '结论(英)',
  `reviewer_id` BIGINT UNSIGNED COMMENT '评审人',
  `review_at` DATETIME COMMENT '评审时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_flow_gate_gate_no` (`gate_no`),
  KEY `idx_rf_flow_gate_project_id_from_stage` (project_id,from_stage),
  CONSTRAINT `fk_rf_flow_gate_project_id` FOREIGN KEY (`project_id`) REFERENCES `rf_project` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='阶段门禁';

-- 阶段交接物 · 阶段间交付物清单
-- ------------------------------------------------------------
-- rf_flow_handover 阶段交接物 · 阶段间交付物清单
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_flow_handover`;
CREATE TABLE `rf_flow_handover` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `project_id` BIGINT UNSIGNED NOT NULL COMMENT '项目',
  `from_stage` VARCHAR(32) NOT NULL COMMENT '交出阶段',
  `to_stage` VARCHAR(32) NOT NULL COMMENT '接收阶段',
  `item_name` VARCHAR(128) NOT NULL COMMENT '交接物',
  `item_name_en` VARCHAR(128) COMMENT '交接物(英)',
  `file_url` VARCHAR(255) COMMENT '文件',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待提交 2已提交 3已确认',
  `hander_id` BIGINT UNSIGNED COMMENT '交接人',
  `receiver_id` BIGINT UNSIGNED COMMENT '接收人',
  `confirm_at` DATETIME COMMENT '确认时间',
  PRIMARY KEY (`id`),
  KEY `idx_rf_flow_handover_project_id_from_stage` (project_id,from_stage),
  CONSTRAINT `fk_rf_flow_handover_project_id` FOREIGN KEY (`project_id`) REFERENCES `rf_project` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='阶段交接物';

-- 流程时间线 · 项目全链路节点轨迹
-- ------------------------------------------------------------
-- rf_flow_timeline 流程时间线 · 项目全链路节点轨迹
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_flow_timeline`;
CREATE TABLE `rf_flow_timeline` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `project_id` BIGINT UNSIGNED NOT NULL COMMENT '项目',
  `stage_code` VARCHAR(32) NOT NULL COMMENT '阶段',
  `event_name` VARCHAR(128) NOT NULL COMMENT '事件',
  `event_name_en` VARCHAR(128) COMMENT '事件(英)',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1完成 2进行中 3待开始',
  `operator_id` BIGINT UNSIGNED COMMENT '操作人',
  `occur_at` DATETIME COMMENT '发生时间',
  PRIMARY KEY (`id`),
  KEY `idx_rf_flow_timeline_project_id_occur_at` (project_id,occur_at),
  CONSTRAINT `fk_rf_flow_timeline_project_id` FOREIGN KEY (`project_id`) REFERENCES `rf_project` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='流程时间线';

-- LLM配置 · 三方大模型账号与参数
-- ------------------------------------------------------------
-- rf_llm_config LLM配置 · 三方大模型账号与参数
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_llm_config`;
CREATE TABLE `rf_llm_config` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `llm_name` VARCHAR(64) NOT NULL COMMENT '模型名',
  `provider` VARCHAR(64) COMMENT '厂商 OpenAI/DeepSeek/通义',
  `user_id` BIGINT UNSIGNED COMMENT '归属用户',
  `api_base` VARCHAR(255) COMMENT '接口地址',
  `model_code` VARCHAR(64) COMMENT '模型编码',
  `max_tokens` INT COMMENT '最大token',
  `temperature` DECIMAL(3,2) COMMENT '温度',
  `is_default` TINYINT NOT NULL DEFAULT '0' COMMENT '默认模型',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1启用 0停用',
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_rf_llm_config_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='LLM配置';

-- AI会话 · 用户与AI的对话会话
-- ------------------------------------------------------------
-- rf_ai_session AI会话 · 用户与AI的对话会话
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_ai_session`;
CREATE TABLE `rf_ai_session` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `session_no` VARCHAR(32) NOT NULL COMMENT '会话号',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '用户',
  `llm_id` BIGINT UNSIGNED COMMENT '使用模型',
  `title` VARCHAR(200) COMMENT '标题',
  `message_count` INT NOT NULL DEFAULT '0' COMMENT '消息数',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1进行中 2已归档',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_ai_session_session_no` (`session_no`),
  CONSTRAINT `fk_rf_ai_session_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`),
  CONSTRAINT `fk_rf_ai_session_llm_id` FOREIGN KEY (`llm_id`) REFERENCES `rf_llm_config` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='AI会话';

-- AI消息 · 会话消息明细，支持卡片结构化
-- ------------------------------------------------------------
-- rf_ai_message AI消息 · 会话消息明细，支持卡片结构化
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_ai_message`;
CREATE TABLE `rf_ai_message` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `session_id` BIGINT UNSIGNED NOT NULL COMMENT '会话',
  `role` TINYINT NOT NULL COMMENT '1用户 2AI 3系统',
  `content` MEDIUMTEXT NOT NULL COMMENT '内容',
  `card` JSON COMMENT '结构化卡片(拆分/匹配结果)',
  `tokens` INT NOT NULL DEFAULT '0' COMMENT '消耗token',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `idx_rf_ai_message_session_id_created_at` (session_id,created_at),
  CONSTRAINT `fk_rf_ai_message_session_id` FOREIGN KEY (`session_id`) REFERENCES `rf_ai_session` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='AI消息';

-- AI需求 · 用户提交的原始商业需求
-- ------------------------------------------------------------
-- rf_ai_requirement AI需求 · 用户提交的原始商业需求
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_ai_requirement`;
CREATE TABLE `rf_ai_requirement` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `requirement_no` VARCHAR(32) NOT NULL COMMENT '需求编号',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '提交人',
  `session_id` BIGINT UNSIGNED COMMENT '来源会话',
  `raw_text` TEXT NOT NULL COMMENT '原始描述',
  `scene` VARCHAR(64) COMMENT '应用场景',
  `budget` INT COMMENT '预算(分)',
  `deadline` DATE COMMENT '期望交付',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待拆分 2已拆分 3已生成项目 4已关闭',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_ai_requirement_requirement_no` (`requirement_no`),
  CONSTRAINT `fk_rf_ai_requirement_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`),
  CONSTRAINT `fk_rf_ai_requirement_session_id` FOREIGN KEY (`session_id`) REFERENCES `rf_ai_session` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='AI需求';

-- 需求拆分项 · AI拆分出的子需求条目
-- ------------------------------------------------------------
-- rf_ai_split 需求拆分项 · AI拆分出的子需求条目
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_ai_split`;
CREATE TABLE `rf_ai_split` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `requirement_id` BIGINT UNSIGNED NOT NULL COMMENT '需求',
  `item_name` VARCHAR(128) NOT NULL COMMENT '条目名',
  `item_name_en` VARCHAR(128) COMMENT '条目名(英)',
  `item_type` VARCHAR(32) COMMENT '类型 模块/定制/服务',
  `qty` INT NOT NULL DEFAULT '1' COMMENT '数量',
  `spec` VARCHAR(500) COMMENT '规格要求',
  `spec_en` VARCHAR(500) COMMENT '规格要求(英)',
  `sort` INT NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`),
  KEY `idx_rf_ai_split_requirement_id_sort` (requirement_id,sort),
  CONSTRAINT `fk_rf_ai_split_requirement_id` FOREIGN KEY (`requirement_id`) REFERENCES `rf_ai_requirement` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='需求拆分项';

-- 工单 · 缺料/定制/故障等各类工单
-- ------------------------------------------------------------
-- rf_ticket 工单 · 缺料/定制/故障等各类工单
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_ticket`;
CREATE TABLE `rf_ticket` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `ticket_no` VARCHAR(32) NOT NULL COMMENT '工单号',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '提交人',
  `ticket_type` TINYINT NOT NULL COMMENT '1资源缺料 2技术咨询 3售后 4举报 5其它',
  `title` VARCHAR(200) NOT NULL COMMENT '标题',
  `title_en` VARCHAR(200) COMMENT '标题(英)',
  `content` TEXT NOT NULL COMMENT '内容',
  `content_en` TEXT COMMENT '内容(英)',
  `attach` JSON COMMENT '附件',
  `priority` TINYINT NOT NULL DEFAULT '2' COMMENT '1低 2中 3高 4紧急',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待受理 2处理中 3待确认 4已解决 5已关闭',
  `handler_id` BIGINT UNSIGNED COMMENT '处理人',
  `source_type` VARCHAR(32) COMMENT '来源 ai/product/project',
  `source_id` VARCHAR(64) COMMENT '来源ID',
  `resolve_at` DATETIME COMMENT '解决时间',
  `close_reason` VARCHAR(255) COMMENT '关闭原因',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_ticket_ticket_no` (`ticket_no`),
  KEY `idx_rf_ticket_status_priority` (status,priority),
  CONSTRAINT `fk_rf_ticket_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='工单';

-- 资源匹配结果 · 拆分项与平台资源的匹配结论
-- ------------------------------------------------------------
-- rf_ai_match 资源匹配结果 · 拆分项与平台资源的匹配结论
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_ai_match`;
CREATE TABLE `rf_ai_match` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `requirement_id` BIGINT UNSIGNED NOT NULL COMMENT '需求',
  `split_id` BIGINT UNSIGNED COMMENT '拆分项',
  `match_type` TINYINT NOT NULL COMMENT '1现有可匹配 2需定制 3平台暂缺',
  `product_id` BIGINT UNSIGNED COMMENT '匹配产品',
  `score` DECIMAL(4,2) COMMENT '匹配度',
  `reason` VARCHAR(500) COMMENT '匹配说明',
  `ticket_id` BIGINT UNSIGNED COMMENT '生成工单',
  PRIMARY KEY (`id`),
  KEY `idx_rf_ai_match_requirement_id_match_type` (requirement_id,match_type),
  CONSTRAINT `fk_rf_ai_match_requirement_id` FOREIGN KEY (`requirement_id`) REFERENCES `rf_ai_requirement` (`id`),
  CONSTRAINT `fk_rf_ai_match_split_id` FOREIGN KEY (`split_id`) REFERENCES `rf_ai_split` (`id`),
  CONSTRAINT `fk_rf_ai_match_product_id` FOREIGN KEY (`product_id`) REFERENCES `rf_product` (`id`),
  CONSTRAINT `fk_rf_ai_match_ticket_id` FOREIGN KEY (`ticket_id`) REFERENCES `rf_ticket` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='资源匹配结果';

-- AI用量 · 按用户/模型的token与费用统计
-- ------------------------------------------------------------
-- rf_ai_usage AI用量 · 按用户/模型的token与费用统计
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_ai_usage`;
CREATE TABLE `rf_ai_usage` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '用户',
  `llm_id` BIGINT UNSIGNED COMMENT '模型',
  `stat_date` DATE NOT NULL COMMENT '日期',
  `call_count` INT NOT NULL DEFAULT '0' COMMENT '调用次数',
  `tokens` INT NOT NULL DEFAULT '0' COMMENT 'token数',
  `cost` INT NOT NULL DEFAULT '0' COMMENT '费用(分)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_rf_ai_usage_user_id_llm_id_stat_date` (user_id,llm_id,stat_date),
  CONSTRAINT `fk_rf_ai_usage_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`),
  CONSTRAINT `fk_rf_ai_usage_llm_id` FOREIGN KEY (`llm_id`) REFERENCES `rf_llm_config` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='AI用量';

-- 提示模板 · 内置快捷提问与提示词模板
-- ------------------------------------------------------------
-- rf_ai_template 提示模板 · 内置快捷提问与提示词模板
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_ai_template`;
CREATE TABLE `rf_ai_template` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `title` VARCHAR(200) NOT NULL COMMENT '模板标题',
  `title_en` VARCHAR(200) COMMENT '模板标题(英)',
  `content` TEXT NOT NULL COMMENT '提示词',
  `content_en` TEXT COMMENT '提示词(英)',
  `scene` VARCHAR(32) COMMENT '场景',
  `sort` INT NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='提示模板';

-- 会话 · 单聊/群聊/项目房/资金房统一会话
-- ------------------------------------------------------------
-- rf_conversation 会话 · 单聊/群聊/项目房/资金房统一会话
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_conversation`;
CREATE TABLE `rf_conversation` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `conv_no` VARCHAR(32) NOT NULL COMMENT '会话号',
  `conv_type` TINYINT NOT NULL COMMENT '1单聊 2群聊 3项目 4资金',
  `title` VARCHAR(128) COMMENT '标题',
  `owner_id` BIGINT UNSIGNED NOT NULL COMMENT '创建人',
  `target_id` BIGINT UNSIGNED COMMENT '关联对象(项目/工单)',
  `last_message` VARCHAR(500) COMMENT '最后消息',
  `last_at` DATETIME COMMENT '最后时间',
  `unread` INT NOT NULL DEFAULT '0' COMMENT '未读数',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_conversation_conv_no` (`conv_no`),
  KEY `idx_rf_conversation_conv_type_last_at` (conv_type,last_at),
  CONSTRAINT `fk_rf_conversation_owner_id` FOREIGN KEY (`owner_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='会话';

-- 消息 · 会话内消息
-- ------------------------------------------------------------
-- rf_message 消息 · 会话内消息
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_message`;
CREATE TABLE `rf_message` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `conv_id` BIGINT UNSIGNED NOT NULL COMMENT '会话',
  `sender_id` BIGINT UNSIGNED NOT NULL COMMENT '发送人',
  `msg_type` TINYINT NOT NULL DEFAULT '1' COMMENT '1文本 2图片 3文件 4系统',
  `content` VARCHAR(4000) NOT NULL COMMENT '内容',
  `attach` JSON COMMENT '附件',
  `read_status` TINYINT NOT NULL DEFAULT '0' COMMENT '0未读 1已读',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '发送时间',
  PRIMARY KEY (`id`),
  KEY `idx_rf_message_conv_id_created_at` (conv_id,created_at),
  CONSTRAINT `fk_rf_message_conv_id` FOREIGN KEY (`conv_id`) REFERENCES `rf_conversation` (`id`),
  CONSTRAINT `fk_rf_message_sender_id` FOREIGN KEY (`sender_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='消息';

-- 群组 · 分组沟通的群
-- ------------------------------------------------------------
-- rf_message_group 群组 · 分组沟通的群
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_message_group`;
CREATE TABLE `rf_message_group` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `group_name` VARCHAR(128) NOT NULL COMMENT '群名',
  `owner_id` BIGINT UNSIGNED NOT NULL COMMENT '群主',
  `project_id` BIGINT UNSIGNED COMMENT '关联项目',
  `member_count` INT NOT NULL DEFAULT '0' COMMENT '成员数',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_rf_message_group_owner_id` FOREIGN KEY (`owner_id`) REFERENCES `rf_user` (`id`),
  CONSTRAINT `fk_rf_message_group_project_id` FOREIGN KEY (`project_id`) REFERENCES `rf_project` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='群组';

-- 群成员 · 群与成员关联
-- ------------------------------------------------------------
-- rf_group_member 群成员 · 群与成员关联
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_group_member`;
CREATE TABLE `rf_group_member` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `group_id` BIGINT UNSIGNED NOT NULL COMMENT '群',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '成员',
  `role` TINYINT NOT NULL DEFAULT '2' COMMENT '1群主 2成员',
  `joined_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '加入时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_rf_group_member_group_id_user_id` (group_id,user_id),
  CONSTRAINT `fk_rf_group_member_group_id` FOREIGN KEY (`group_id`) REFERENCES `rf_message_group` (`id`),
  CONSTRAINT `fk_rf_group_member_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='群成员';

-- 通知 · 系统通知与消息提醒
-- ------------------------------------------------------------
-- rf_notification 通知 · 系统通知与消息提醒
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_notification`;
CREATE TABLE `rf_notification` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '接收人',
  `notif_type` VARCHAR(32) COMMENT '类型 系统/评论/工单/资金',
  `title` VARCHAR(200) NOT NULL COMMENT '标题',
  `title_en` VARCHAR(200) COMMENT '标题(英)',
  `content` VARCHAR(1000) COMMENT '内容',
  `content_en` VARCHAR(1000) COMMENT '内容(英)',
  `link` VARCHAR(255) COMMENT '跳转',
  `read_status` TINYINT NOT NULL DEFAULT '0' COMMENT '0未读 1已读',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `idx_rf_notification_user_id_read_status` (user_id,read_status),
  CONSTRAINT `fk_rf_notification_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='通知';

-- 资金账户 · 用户平台账户与余额
-- ------------------------------------------------------------
-- rf_fund_account 资金账户 · 用户平台账户与余额
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_fund_account`;
CREATE TABLE `rf_fund_account` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '用户',
  `balance` INT NOT NULL DEFAULT '0' COMMENT '余额(分)',
  `frozen` INT NOT NULL DEFAULT '0' COMMENT '冻结(分)',
  `total_in` INT NOT NULL DEFAULT '0' COMMENT '累计收入(分)',
  `total_out` INT NOT NULL DEFAULT '0' COMMENT '累计支出(分)',
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_fund_account_user_id` (`user_id`),
  CONSTRAINT `fk_rf_fund_account_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='资金账户';

-- 资金流水 · 收支明细
-- ------------------------------------------------------------
-- rf_fund_flow 资金流水 · 收支明细
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_fund_flow`;
CREATE TABLE `rf_fund_flow` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `flow_no` VARCHAR(32) NOT NULL COMMENT '流水号',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '用户',
  `direction` TINYINT NOT NULL COMMENT '1收入 2支出',
  `amount` INT NOT NULL COMMENT '金额(分)',
  `balance_after` INT NOT NULL COMMENT '变动后余额(分)',
  `biz_type` VARCHAR(32) COMMENT '业务类型 订单/提现/退款',
  `biz_id` VARCHAR(64) COMMENT '业务单号',
  `remark` VARCHAR(500) COMMENT '备注',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_fund_flow_flow_no` (`flow_no`),
  KEY `idx_rf_fund_flow_user_id_created_at` (user_id,created_at),
  CONSTRAINT `fk_rf_fund_flow_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='资金流水';

-- 支付单 · 订单支付记录
-- ------------------------------------------------------------
-- rf_payment 支付单 · 订单支付记录
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_payment`;
CREATE TABLE `rf_payment` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `pay_no` VARCHAR(32) NOT NULL COMMENT '支付号',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '用户',
  `biz_type` VARCHAR(32) NOT NULL COMMENT '业务类型',
  `biz_id` VARCHAR(64) NOT NULL COMMENT '业务单号',
  `amount` INT NOT NULL COMMENT '金额(分)',
  `channel` VARCHAR(32) COMMENT '渠道 微信/支付宝/银行卡',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待支付 2已支付 3已退款 4已关闭',
  `paid_at` DATETIME COMMENT '支付时间',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_payment_pay_no` (`pay_no`),
  CONSTRAINT `fk_rf_payment_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='支付单';

-- 提现账户 · 银行卡/支付宝账户
-- ------------------------------------------------------------
-- rf_withdraw_account 提现账户 · 银行卡/支付宝账户
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_withdraw_account`;
CREATE TABLE `rf_withdraw_account` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '用户',
  `account_type` TINYINT NOT NULL DEFAULT '1' COMMENT '1银行卡 2支付宝 3微信',
  `account_no` VARCHAR(64) NOT NULL COMMENT '账号(加密)',
  `account_name` VARCHAR(64) COMMENT '户名',
  `bank_name` VARCHAR(64) COMMENT '开户行',
  `is_default` TINYINT NOT NULL DEFAULT '0' COMMENT '默认',
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_rf_withdraw_account_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='提现账户';

-- 提现申请 · 提现到银行卡的记录
-- ------------------------------------------------------------
-- rf_withdraw 提现申请 · 提现到银行卡的记录
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_withdraw`;
CREATE TABLE `rf_withdraw` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `withdraw_no` VARCHAR(32) NOT NULL COMMENT '提现号',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '用户',
  `amount` INT NOT NULL COMMENT '金额(分)',
  `fee` INT NOT NULL DEFAULT '0' COMMENT '手续费(分)',
  `account_id` BIGINT UNSIGNED NOT NULL COMMENT '收款账户',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待审 2已打款 3已驳回',
  `remark` VARCHAR(500) COMMENT '备注',
  `handler_id` BIGINT UNSIGNED COMMENT '处理人',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '申请时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_withdraw_withdraw_no` (`withdraw_no`),
  CONSTRAINT `fk_rf_withdraw_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`),
  CONSTRAINT `fk_rf_withdraw_account_id` FOREIGN KEY (`account_id`) REFERENCES `rf_withdraw_account` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='提现申请';

-- 发票 · 开票申请与记录
-- ------------------------------------------------------------
-- rf_invoice 发票 · 开票申请与记录
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_invoice`;
CREATE TABLE `rf_invoice` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `invoice_no` VARCHAR(32) NOT NULL COMMENT '发票号',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '用户',
  `pay_id` BIGINT UNSIGNED COMMENT '支付单',
  `title` VARCHAR(128) NOT NULL COMMENT '抬头',
  `tax_no` VARCHAR(64) COMMENT '税号',
  `amount` INT NOT NULL COMMENT '金额(分)',
  `invoice_type` TINYINT NOT NULL DEFAULT '1' COMMENT '1普票 2专票',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1待开 2已开 3作废',
  `file_url` VARCHAR(255) COMMENT '电子发票',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '申请时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_invoice_invoice_no` (`invoice_no`),
  CONSTRAINT `fk_rf_invoice_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`),
  CONSTRAINT `fk_rf_invoice_pay_id` FOREIGN KEY (`pay_id`) REFERENCES `rf_payment` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='发票';

-- 工单回复 · 工单沟通记录
-- ------------------------------------------------------------
-- rf_ticket_reply 工单回复 · 工单沟通记录
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_ticket_reply`;
CREATE TABLE `rf_ticket_reply` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `ticket_id` BIGINT UNSIGNED NOT NULL COMMENT '工单',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '回复人',
  `is_staff` TINYINT NOT NULL DEFAULT '0' COMMENT '是否客服',
  `content` VARCHAR(2000) NOT NULL COMMENT '内容',
  `attach` JSON COMMENT '附件',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '回复时间',
  PRIMARY KEY (`id`),
  KEY `idx_rf_ticket_reply_ticket_id_created_at` (ticket_id,created_at),
  CONSTRAINT `fk_rf_ticket_reply_ticket_id` FOREIGN KEY (`ticket_id`) REFERENCES `rf_ticket` (`id`),
  CONSTRAINT `fk_rf_ticket_reply_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='工单回复';

-- 工单操作日志 · 状态变更与操作留痕
-- ------------------------------------------------------------
-- rf_ticket_log 工单操作日志 · 状态变更与操作留痕
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_ticket_log`;
CREATE TABLE `rf_ticket_log` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `ticket_id` BIGINT UNSIGNED NOT NULL COMMENT '工单',
  `action` VARCHAR(64) NOT NULL COMMENT '动作 受理/解决/关闭',
  `from_status` TINYINT COMMENT '原状态',
  `to_status` TINYINT COMMENT '新状态',
  `operator_id` BIGINT UNSIGNED COMMENT '操作人',
  `remark` VARCHAR(500) COMMENT '说明',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '时间',
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_rf_ticket_log_ticket_id` FOREIGN KEY (`ticket_id`) REFERENCES `rf_ticket` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='工单操作日志';

-- 文件 · 上传文件统一登记
-- ------------------------------------------------------------
-- rf_file 文件 · 上传文件统一登记
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_file`;
CREATE TABLE `rf_file` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `file_no` VARCHAR(32) NOT NULL COMMENT '文件号',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '上传者',
  `file_name` VARCHAR(255) NOT NULL COMMENT '文件名',
  `file_url` VARCHAR(512) NOT NULL COMMENT '存储地址',
  `file_size` BIGINT NOT NULL DEFAULT '0' COMMENT '字节',
  `mime_type` VARCHAR(64) COMMENT 'MIME',
  `biz_type` VARCHAR(32) COMMENT '业务类型 avatar/product/doc',
  `biz_id` VARCHAR(64) COMMENT '业务ID',
  `storage` TINYINT NOT NULL DEFAULT '1' COMMENT '1本地 2OSS 3COS',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1正常 2待审 3违规',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '上传时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_file_file_no` (`file_no`),
  CONSTRAINT `fk_rf_file_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='文件';

-- 下载令牌 · 资料下载授权令牌
-- ------------------------------------------------------------
-- rf_download_token 下载令牌 · 资料下载授权令牌
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_download_token`;
CREATE TABLE `rf_download_token` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `token` VARCHAR(64) NOT NULL COMMENT '令牌 rft_xxx',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '用户',
  `file_ids` JSON COMMENT '授权文件',
  `scope` VARCHAR(64) COMMENT '授权范围',
  `max_use` INT NOT NULL DEFAULT '1' COMMENT '可用次数',
  `used_count` INT NOT NULL DEFAULT '0' COMMENT '已用次数',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1有效 2已吊销 3已过期',
  `expire_at` DATETIME NOT NULL COMMENT '过期时间',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_download_token_token` (`token`),
  CONSTRAINT `fk_rf_download_token_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='下载令牌';

-- 打包下载 · 批量打包任务
-- ------------------------------------------------------------
-- rf_download_pack 打包下载 · 批量打包任务
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_download_pack`;
CREATE TABLE `rf_download_pack` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `pack_no` VARCHAR(32) NOT NULL COMMENT '任务号',
  `user_id` BIGINT UNSIGNED NOT NULL COMMENT '用户',
  `file_ids` JSON NOT NULL COMMENT '文件列表',
  `status` TINYINT NOT NULL DEFAULT '1' COMMENT '1排队 2打包中 3完成 4失败',
  `progress` TINYINT NOT NULL DEFAULT '0' COMMENT '进度',
  `pack_url` VARCHAR(512) COMMENT '包地址',
  `pack_size` BIGINT COMMENT '包大小',
  `expire_at` DATETIME COMMENT '链接有效期',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_download_pack_pack_no` (`pack_no`),
  CONSTRAINT `fk_rf_download_pack_user_id` FOREIGN KEY (`user_id`) REFERENCES `rf_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='打包下载';

-- 下载记录 · 文件下载审计
-- ------------------------------------------------------------
-- rf_download_log 下载记录 · 文件下载审计
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_download_log`;
CREATE TABLE `rf_download_log` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `user_id` BIGINT UNSIGNED COMMENT '用户',
  `file_id` BIGINT UNSIGNED COMMENT '文件',
  `token_id` BIGINT UNSIGNED COMMENT '令牌',
  `ip` VARCHAR(64) COMMENT 'IP',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '下载时间',
  PRIMARY KEY (`id`),
  KEY `idx_rf_download_log_user_id` (`user_id`),
  CONSTRAINT `fk_rf_download_log_file_id` FOREIGN KEY (`file_id`) REFERENCES `rf_file` (`id`),
  CONSTRAINT `fk_rf_download_log_token_id` FOREIGN KEY (`token_id`) REFERENCES `rf_download_token` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='下载记录';

-- 系统设置 · 平台级开关与参数
-- ------------------------------------------------------------
-- rf_setting 系统设置 · 平台级开关与参数
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_setting`;
CREATE TABLE `rf_setting` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `setting_key` VARCHAR(64) NOT NULL COMMENT '键',
  `setting_value` TEXT COMMENT '值',
  `group_name` VARCHAR(32) COMMENT '分组',
  `remark` VARCHAR(255) COMMENT '说明',
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_rf_setting_setting_key` (`setting_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='系统设置';

-- 数据字典 · 枚举与下拉项
-- ------------------------------------------------------------
-- rf_dict 数据字典 · 枚举与下拉项
-- ------------------------------------------------------------
DROP TABLE IF EXISTS `rf_dict`;
CREATE TABLE `rf_dict` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT COMMENT '主键',
  `dict_type` VARCHAR(32) NOT NULL COMMENT '类型',
  `dict_code` VARCHAR(32) NOT NULL COMMENT '编码',
  `dict_label` VARCHAR(64) NOT NULL COMMENT '中文',
  `dict_label_en` VARCHAR(64) COMMENT '英文',
  `sort` INT NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_rf_dict_dict_type_dict_code` (dict_type,dict_code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='数据字典';



-- =============================================================================
-- 初始化数据
-- =============================================================================
SET FOREIGN_KEY_CHECKS = 0;

-- 角色
INSERT INTO `rf_role` (`role_code`,`role_name`,`role_name_en`,`scope`,`remark`) VALUES
 ('super_admin','超级管理员','Super Admin',2,'系统最高权限'),
 ('operator','运营','Operator',2,'内容与用户运营'),
 ('auditor','审核员','Auditor',2,'发布与认证审核'),
 ('finance','财务','Finance',2,'资金与发票'),
 ('personal','个人用户','Personal',1,'个人开发者'),
 ('brand','厂商','Brand',1,'品牌厂商号'),
 ('integrator','集成商','Integrator',1,'系统集成商'),
 ('org','机构','Organization',1,'高校与研究机构');

-- 权限点
INSERT INTO `rf_permission` (`perm_code`,`perm_name`,`group_code`,`perm_type`) VALUES
 ('admin:dashboard','仪表盘','admin',1),
 ('admin:user','用户管理','admin',1),
 ('admin:role','权限管理','admin',1),
 ('admin:review','审核管理','admin',1),
 ('admin:content','发布管理','admin',1),
 ('admin:comment','评论管理','admin',1),
 ('admin:ticket','工单管理','admin',1),
 ('admin:project','项目管理','admin',1),
 ('admin:design','设计管理','admin',1),
 ('admin:production','生产管理','admin',1),
 ('admin:funds','资金管理','admin',1),
 ('admin:message','沟通管理','admin',1),
 ('admin:category','分类管理','admin',1),
 ('admin:product','产品管理','admin',1),
 ('admin:news','新闻管理','admin',1),
 ('admin:forum','论坛管理','admin',1),
 ('admin:llm','LLM配置','admin',1),
 ('admin:ads','广告推荐位','admin',1),
 ('admin:logs','操作日志','admin',1),
 ('admin:loginlog','登录日志','admin',1),
 ('admin:ipwhitelist','IP 白名单','admin',1),
 ('admin:2fa','双因子认证','admin',1),
 ('admin:apikey','API 密钥','admin',1),
 ('admin:statistics','数据统计','admin',1),
 ('admin:settings','系统设置','admin',1);

-- 流程阶段（五段链路）
INSERT INTO `rf_flow_stage` (`stage_code`,`stage_name`,`stage_name_en`,`sort`,`desc`,`desc_en`,`entry_page`,`icon`) VALUES
 ('requirement','商业需求','Requirement',1,'提交商业需求，AI 拆解为可执行条目','Submit business needs; AI splits into actionable items','pages/ai_requirement.html','assets/img/gen/icon/requirement_b.svg'),
 ('design','设计','Design',2,'结构、电控、外观设计与图纸评审','Mechanical, electrical and appearance design with drawing review','pages/design_home.html','assets/img/gen/icon/design_b.svg'),
 ('integration','集成','Integration',3,'模块组装、电气线束与软件联调','Module assembly, harness wiring and software joint debug','pages/integration_hall.html','assets/img/gen/icon/integration_b.svg'),
 ('test','测试','Test',4,'功能、可靠性、环境与安全测试','Functional, reliability, environmental and safety tests','pages/test_hall.html','assets/img/gen/icon/test_b.svg'),
 ('production','流水线生产','Mass Production',5,'排产、SMT、装配、质检与批量交付','Scheduling, SMT, assembly, QC and volume delivery','pages/production_home.html','assets/img/gen/icon/production_b.svg');

-- 学习路径
INSERT INTO `rf_learn_path` (`path_name`,`path_name_en`,`desc`,`stages`,`sort`) VALUES
 ('机械设计路径','Mechanical path','从零件制图到整机结构','5',1),
 ('嵌入式路径','Embedded path','从 MCU 到实时控制','5',2),
 ('AI 算法路径','AI path','从视觉到具身智能','6',3),
 ('整机集成路径','Integration path','从模块选型到现场部署','4',4);

-- 论坛板块
INSERT INTO `rf_board` (`board_name`,`board_name_en`,`cat_code`,`intro`,`sort`) VALUES
 ('综合讨论','General','general','平台综合交流','1'),
 ('产品问答','Q&A','qa','产品使用与选型问答','2'),
 ('DIY 玩法','DIY','diy','玩法与改装分享','3'),
 ('开源项目','Open Source','opensource','开源协作与共建','4'),
 ('学习资料','Learning','learn','教程与资料分享','5'),
 ('二手交易','Marketplace','market','闲置设备与配件交易','6'),
 ('经验分享','Field Notes','notes','现场实施经验','7'),
 ('赛事活动','Contests','contest','赛事与活动','8');

-- 产品分类
INSERT INTO `rf_category` (`cat_code`,`cat_name`,`cat_name_en`,`parent_id`,`cat_type`,`sort`) VALUES
 ('commercial','商用机器人','Commercial Robot',0,1,1),
 ('embodied','具身机器人','Embodied Robot',0,1,2),
 ('custom','定制机器人','Custom Robot',0,1,3),
 ('module','机器人模块','Robot Module',0,1,4),
 ('component','机器人组件','Robot Component',0,1,5),
 ('accessory','模块配件','Module Accessory',0,1,6),
 ('hardware','五金','Hardware',0,1,7),
 ('print3d','塑料3D打印','3D Printing',0,1,8),
 ('shell','外壳','Enclosure',0,1,9),
 ('toy','mini机器人','Mini Bots',0,1,10);

-- 系统设置
INSERT INTO `rf_setting` (`setting_key`,`setting_value`,`group_name`,`remark`) VALUES
 ('site_name','SUMFORGE 闪马工厂','base','站点名称'),
 ('site_icp','蜀ICP备18013136号','base','备案号'),
 ('site_entity','闪马科技个人工作室','base','运营主体'),
 ('site_contact','万三（SumSelf）','contact','联系人'),
 ('site_phone','+86 18683379773','contact','联系电话'),
 ('site_wechat','sumstc','contact','微信号'),
 ('ai_enabled','1','ai','AI 智造开关'),
 ('ai_default_llm','1','ai','默认模型'),
 ('review_level','3','content','发布审核级别 1-3'),
 ('admin_2fa_required','1','security','后台强制双因子'),
 ('file_max_size','104857600','file','单文件上限(字节)');

SET FOREIGN_KEY_CHECKS = 1;

-- =============================================================================
-- 可选：关闭物理外键（分库分表 / 高并发写入场景）
-- SET GLOBAL FOREIGN_KEY_CHECKS = 0;
-- =============================================================================

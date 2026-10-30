# SUMFORGE · 模拟数据走查报告

> 走查对象：`mock_seed.sql`（由 965 条模拟请求转换而来）


## 一、总体结论

| 指标 | 数值 |
|------|------|
| INSERT 语句总数 | **1140** |
| 覆盖数据表 | **106** 张 / 共 106 张 |
| 问题总数 | **0** |
| 结论 | ⚠️ 见下方明细 |


## 二、校验项与结果

| 校验项 | 说明 | 问题数 |
|--------|------|--------|
| A 表不存在 | INSERT 的表在 schema 中有定义 | ✅ 0 |
| B 字段不存在 | 列名属于该表字段 | ✅ 0 |
| B 字段遗漏 | 表的所有字段都被赋值 | ✅ 0 |
| C 非空字段为NULL | NOT NULL 字段不得为 NULL | ✅ 0 |
| D 类型不匹配 | 值类型匹配 VARCHAR/INT/DECIMAL/DATE/JSON | ✅ 0 |
| D 超长 | 字符串不超出 VARCHAR(n) | ✅ 0 |
| D 列值数量不符 | 列数与值数一致 | ✅ 0 |
| E 外键悬空 | 外键值在被引用表中存在 | ✅ 0 |
| F 枚举越界 | 状态/类型取值在注释声明范围内 | ✅ 0 |
| G 唯一键重复 | UNIQUE 字段无重复值 | ✅ 0 |
| H 主键不连续 | 主键 id 从 1 连续 | ✅ 0 |

## 三、问题明细


## 四、数据分布

| 数据表 | 中文名 | 行数 |
|--------|--------|------|
| `rf_product` | 产品主表 | 130 |
| `rf_user` | 用户主表 | 90 |
| `rf_news` | 资讯宣发 | 45 |
| `rf_design_demand` | 设计需求 | 45 |
| `rf_apply` | 申请承接 | 40 |
| `rf_post` | 论坛帖子 | 35 |
| `rf_production_order` | 生产工单 | 30 |
| `rf_category` | 分类字典 | 20 |
| `rf_learn` | 学习资料 | 20 |
| `rf_learn_enroll` | 学习报名 | 20 |
| `rf_ticket` | 工单 | 20 |
| `rf_project` | 项目 | 15 |
| `rf_design_bom` | 设计BOM | 15 |
| `rf_production_line` | 产线 | 15 |
| `rf_qc_report` | 质检报告 | 15 |
| `rf_ai_session` | AI会话 | 15 |
| `rf_ai_requirement` | AI需求 | 15 |
| `rf_message` | 消息 | 15 |
| `rf_file` | 文件 | 15 |
| `rf_download_pack` | 打包下载 | 15 |
| `rf_user_follow` | 用户关注 | 10 |
| `rf_comment` | 通用评论 | 10 |
| `rf_favorite` | 收藏 | 10 |
| `rf_post_reply` | 帖子回复 | 10 |
| `rf_product_review` | 产品评价 | 10 |
| `rf_design_drawing` | 图纸 | 10 |
| `rf_supplier` | 供应商 | 10 |
| `rf_tooling` | 模具工装 | 10 |
| `rf_logistics` | 物流发货 | 10 |
| `rf_flow_stage` | 流程阶段 | 10 |
| `rf_flow_gate` | 阶段门禁 | 10 |
| `rf_flow_handover` | 阶段交接物 | 10 |
| `rf_ai_match` | 资源匹配结果 | 10 |
| `rf_payment` | 支付单 | 10 |
| `rf_withdraw` | 提现申请 | 10 |
| `rf_download_token` | 下载令牌 | 10 |
| `rf_user_credential` | 登录凭证 | 5 |
| `rf_sms_code` | 短信验证码 | 5 |
| `rf_verify_apply` | 认证申请 | 5 |
| `rf_role` | 角色 | 5 |
| `rf_permission` | 权限点 | 5 |
| `rf_user_role` | 用户角色关联 | 5 |
| `rf_role_permission` | 角色权限关联 | 5 |
| `rf_login_log` | 登录日志 | 5 |
| `rf_ip_whitelist` | IP白名单 | 5 |
| `rf_2fa_secret` | 双因子密钥 | 5 |
| `rf_api_key` | API密钥 | 5 |
| `rf_operation_log` | 操作日志 | 5 |
| `rf_brand` | 品牌厂商 | 5 |
| `rf_news_audit` | 资讯审核记录 | 5 |
| `rf_news_stats` | 资讯日统计 | 5 |
| `rf_like` | 点赞记录 | 5 |
| `rf_subscribe` | 厂商号订阅 | 5 |
| `rf_hotword` | 搜索热词 | 5 |
| `rf_ad_slot` | 广告推荐位 | 5 |
| `rf_board` | 论坛板块 | 5 |
| `rf_learn_lesson` | 课时 | 5 |
| `rf_learn_path` | 学习路径 | 5 |
| `rf_learn_path_item` | 路径节点 | 5 |
| `rf_product_spec` | 产品规格 | 5 |
| `rf_product_interface` | 外设接口 | 5 |
| `rf_product_file` | 产品资料 | 5 |
| `rf_product_compare` | 对比记录 | 5 |
| `rf_demand` | 定制需求 | 5 |
| `rf_demand_bid` | 需求应征 | 5 |
| `rf_project_node` | 项目节点 | 5 |
| `rf_project_member` | 项目成员 | 5 |
| `rf_integration` | 集成需求 | 5 |
| `rf_test` | 测试需求 | 5 |
| `rf_design_task` | 设计任务 | 5 |
| `rf_design_version` | 设计版本 | 5 |
| `rf_design_review` | 设计评审 | 5 |
| `rf_production_progress` | 生产进度日报 | 5 |
| `rf_capacity` | 产能 | 5 |
| `rf_capacity_booking` | 产能预约 | 5 |
| `rf_bom` | 生产BOM | 5 |
| `rf_bom_item` | BOM明细 | 5 |
| `rf_procurement` | 采购单 | 5 |
| `rf_equipment` | 设备台账 | 5 |
| `rf_worker` | 班组人员 | 5 |
| `rf_yield_stat` | 良率统计 | 5 |
| `rf_process` | 生产工艺 | 5 |
| `rf_warehouse` | 仓储 | 5 |
| `rf_delivery` | 量产交付 | 5 |
| `rf_cert` | 资质认证 | 5 |
| `rf_production_case` | 量产案例 | 5 |
| `rf_production_cost` | 成本核算 | 5 |
| `rf_flow_timeline` | 流程时间线 | 5 |
| `rf_llm_config` | LLM配置 | 5 |
| `rf_ai_message` | AI消息 | 5 |
| `rf_ai_split` | 需求拆分项 | 5 |
| `rf_ai_usage` | AI用量 | 5 |
| `rf_ai_template` | 提示模板 | 5 |
| `rf_conversation` | 会话 | 5 |
| `rf_message_group` | 群组 | 5 |
| `rf_group_member` | 群成员 | 5 |
| `rf_notification` | 通知 | 5 |
| `rf_fund_account` | 资金账户 | 5 |
| `rf_fund_flow` | 资金流水 | 5 |
| `rf_withdraw_account` | 提现账户 | 5 |
| `rf_invoice` | 发票 | 5 |
| `rf_ticket_reply` | 工单回复 | 5 |
| `rf_ticket_log` | 工单操作日志 | 5 |
| `rf_download_log` | 下载记录 | 5 |
| `rf_setting` | 系统设置 | 5 |
| `rf_dict` | 数据字典 | 5 |

## 五、校验方法说明

走查由 `audit_mock.py` 自动执行，逐条解析 INSERT 并对照 `db_schema.py` 的表定义：

1. **解析**：按 `INSERT INTO `表` (列) VALUES (值);` 切分，值切分跳过引号与嵌套括号，
   保证 JSON、含逗号文本不被误拆。
2. **结构校验**：表是否存在、列是否属于该表、表字段是否全部赋值。
3. **约束校验**：NOT NULL 不为 NULL；VARCHAR 不超长；唯一键无重复；主键 1..N 连续。
4. **类型校验**：INT 系列必须整数，DECIMAL 必须数值，DATE/DATETIME 匹配格式，
   JSON 必须是引号包裹的字符串。
5. **外键校验**：两遍扫描（先收集所有表 ID 集合，再复核引用），
   确保外键值在被引用表中真实存在，不受插入顺序影响。
6. **枚举校验**：从字段注释解析形如 `1待审 2在售 3下架` 的取值域，校验值落在其中。

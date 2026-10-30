# SUMFORGE · 响应报文数据检查报告

> 检查对象：`mock_responses.md` 中的 **965** 条响应报文（193 接口 × 5）


## 一、总体结论

| 指标 | 数值 |
|------|------|
| 响应报文总数 | **965** |
| 覆盖接口 | **193** 个 |
| 问题总数 | **0** |
| 结论 | ✅ 全部通过 |


## 二、检查项与结果

| 检查项 | 说明 | 问题数 |
|--------|------|--------|
| N JSON不可解析 | 响应体是可解析的 JSON | ✅ 0 |
| A 包装缺字段 | code / message / data / traceId 齐全 | ✅ 0 |
| B code非整数 | code 为整数 | ✅ 0 |
| B code不在码表 | code ∈ {0,401,403,404,422,429,500} | ✅ 0 |
| C 成功但data为空 | code=0 时 data 有内容 | ✅ 0 |
| D 失败但data非空 | code≠0 时 data 为 null | ✅ 0 |
| D 失败但无message | code≠0 时 message 非空 | ✅ 0 |
| E list非数组 | 分页的 list 是数组 | ✅ 0 |
| E 列表为空 | list 非空 | ✅ 0 |
| E 分页缺字段 | total/page/pageSize/hasMore 齐全 | ✅ 0 |
| E total非整数 | total 为整数 | ✅ 0 |
| E page非整数 | page 为整数 | ✅ 0 |
| E pageSize非整数 | pageSize 为整数 | ✅ 0 |
| E hasMore非布尔 | hasMore 为布尔 | ✅ 0 |
| F total小于列表长度 | total ≥ len(list) | ✅ 0 |
| F hasMore不自洽 | hasMore == (page*pageSize < total) | ✅ 0 |
| G traceId格式 | traceId 为 8-4-4 十六进制 | ✅ 0 |
| H 金额非整数分 | 价格/金额字段为整数（单位：分） | ✅ 0 |
| I 时间非ISO8601 | 时间字段符合 ISO8601 | ✅ 0 |
| J 双语不配对 | 中英字段成对且均为字符串 | ✅ 0 |
| K 列表元素不同构 | 同一列表内元素字段集合一致 | ✅ 0 |
| L data内含null | data 内部不出现 null | ✅ 0 |

## 四、检查方法说明

检查由 `audit_response.py` 自动执行：

1. **抽取**：从 `mock_responses.md` 按 ```` ```http ```` 块提取 JSON 响应体，逐个 `json.loads`。
2. **包装校验**：确认统一响应壳 `{code,message,data,traceId}` 四字段齐全，
   `code` 为整数且落在约定码表内。
3. **成功/失败语义**：`code=0` 时 data 必须有内容；`code≠0` 时 data 必须为 null
   且 message 非空——避免"报错了还返回数据"或"成功却是空壳"。
4. **分页校验**：分页接口必须带 `total/page/pageSize/hasMore`，类型正确；
   并做**自洽验算**——`total ≥ len(list)`，`hasMore == (page*pageSize < total)`，
   这是最容易写错的一处（后端常把 hasMore 写成 `list.length === pageSize`）。
5. **字段级扫描**：递归遍历 data，对字段名做模式匹配——
   金额类（`price/amount/cost/...`）不得为小数（单位必须是分）；
   时间类（`*At/*Time/*Date/_at`）必须匹配 ISO8601；
   双语字段（有 `x` 就该有 `xEn`/`x_en`）必须成对且同为字符串。
6. **结构同构**：同一 `list` 内所有元素的字段集合必须一致，
   防止后端对部分对象漏字段导致前端渲染错位。
7. **空值检查**：data 内部不允许出现 `null`，避免前端取值崩溃。

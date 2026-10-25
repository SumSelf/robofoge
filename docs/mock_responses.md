# ROBOFORGE · 接口反馈信息（响应报文）

> 共 **193** 个接口 × 5 条 = **965** 条响应
> 每条响应含：状态行 + 响应头 + JSON 体；第 5 条为异常场景。
> 数据检查见 `response_audit.md`


统一响应包装：`{ code, message, data, traceId }`，`code=0` 成功。


---


## auth `auth`


### `POST` login `/auth/login`

> 账号密码登录 POST /auth/login · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "data": {
  "token": "eyJhbGciOiJIUzI1NiJ9.000000000000000000000000000000005f3a91c7d2e4b680.00000000000000001a2b3c4d5e6f7081",
  "refreshToken": "eyJhbGciOiJIUzI1NiJ9.000000000000000000000000000000005f3a91c7d2e4b680.00000000000000001a2b3c4d5e6f7081",
  "user": {
   "id": "U3001",
   "userNo": "U3001",
   "nickname": "机电老张0",
   "avatar": "assets/img/gen/avatar/user_01.svg",
   "userType": 1,
   "level": 1,
   "verifyStatus": 0
  }
 },
 "message": "ok",
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "data": {
  "token": "eyJhbGciOiJIUzI1NiJ9.000000000000000000000000000000005f3a91c7d2e4d56f.00000000000000001a2b3c4d5e71099a",
  "refreshToken": "eyJhbGciOiJIUzI1NiJ9.000000000000000000000000000000005f3a91c7d2e4d56f.00000000000000001a2b3c4d5e71099a",
  "user": {
   "id": "U3002",
   "userNo": "U3002",
   "nickname": "开源阿凯1",
   "avatar": "assets/img/gen/avatar/user_02.svg",
   "userType": 2,
   "level": 2,
   "verifyStatus": 1
  }
 },
 "message": "ok",
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "data": {
  "token": "eyJhbGciOiJIUzI1NiJ9.000000000000000000000000000000005f3a91c7d2e4f45e.00000000000000001a2b3c4d5e72a2b3",
  "refreshToken": "eyJhbGciOiJIUzI1NiJ9.000000000000000000000000000000005f3a91c7d2e4f45e.00000000000000001a2b3c4d5e72a2b3",
  "user": {
   "id": "U3003",
   "userNo": "U3003",
   "nickname": "机电老张2",
   "avatar": "assets/img/gen/avatar/user_03.svg",
   "userType": 3,
   "level": 3,
   "verifyStatus": 2
  }
 },
 "message": "ok",
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "data": {
  "token": "eyJhbGciOiJIUzI1NiJ9.000000000000000000000000000000005f3a91c7d2e5134d.00000000000000001a2b3c4d5e743bcc",
  "refreshToken": "eyJhbGciOiJIUzI1NiJ9.000000000000000000000000000000005f3a91c7d2e5134d.00000000000000001a2b3c4d5e743bcc",
  "user": {
   "id": "U3004",
   "userNo": "U3004",
   "nickname": "开源阿凯3",
   "avatar": "assets/img/gen/avatar/user_04.svg",
   "userType": 4,
   "level": 1,
   "verifyStatus": 3
  }
 },
 "message": "ok",
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` loginSms `/auth/login-sms`

> 手机验证码登录 POST /auth/login-sms · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` register `/auth/register`

> 注册 POST /auth/register · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` smsCode `/auth/sms-code`

> 发送短信验证码 POST /auth/sms-code {phone,scene} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` resetPwd `/auth/reset-password`

> 找回密码 POST /auth/reset-password {phone,code,password} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` logout `/auth/logout`

> 退出登录 POST /auth/logout · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` me `/auth/me`

> 当前登录用户 GET /auth/me → {user:User} · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "user": {
   "id": "U3001",
   "userNo": "U3001",
   "nickname": "机电老张0",
   "avatar": "assets/img/gen/avatar/user_01.svg",
   "userType": 1,
   "level": 1,
   "verifyStatus": 0
  }
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "user": {
   "id": "U3002",
   "userNo": "U3002",
   "nickname": "开源阿凯1",
   "avatar": "assets/img/gen/avatar/user_02.svg",
   "userType": 2,
   "level": 2,
   "verifyStatus": 1
  }
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "user": {
   "id": "U3003",
   "userNo": "U3003",
   "nickname": "机电老张2",
   "avatar": "assets/img/gen/avatar/user_03.svg",
   "userType": 3,
   "level": 3,
   "verifyStatus": 2
  }
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "user": {
   "id": "U3004",
   "userNo": "U3004",
   "nickname": "开源阿凯3",
   "avatar": "assets/img/gen/avatar/user_04.svg",
   "userType": 4,
   "level": 1,
   "verifyStatus": 3
  }
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `PUT` updateProfile `/auth/profile`

> 更新资料 PUT /auth/profile {nickname,avatar,desc,tags,type} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` verify `/auth/verify`

> 实名/企业认证 POST /auth/verify {type,realName,idNo|licenseNo,file · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## news `news`


### `GET` list `/news`

> 资讯列表 GET /news · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "data": {
  "list": [
   {
    "id": "N9001",
    "title": "智元工场 发布新一代产品（1）",
    "titleEn": "ZhiYuan Works Unveils New-Gen Product (1)",
    "cat": "商用机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "智元工场",
    "author": "智元工场 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-01T09:00:00+08:00"
   },
   {
    "id": "N9002",
    "title": "开源纪元 发布新一代产品（2）",
    "titleEn": "OpenEpoch Unveils New-Gen Product (2)",
    "cat": "具身机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "开源纪元",
    "author": "开源纪元 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-02T10:07:13+08:00"
   },
   {
    "id": "N9003",
    "title": "星辰机甲 发布新一代产品（3）",
    "titleEn": "StarMech Unveils New-Gen Product (3)",
    "cat": "定制机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "星辰机甲",
    "author": "星辰机甲 官方",
    "views": 9600,
    "likes": 420,
    "publishAt": "2026-06-03T11:14:26+08:00"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "message": "ok",
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "data": {
  "list": [
   {
    "id": "N9004",
    "title": "极客造物 发布新一代产品（4）",
    "titleEn": "GeekMaker Unveils New-Gen Product (4)",
    "cat": "机器人模块",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "极客造物",
    "author": "极客造物 官方",
    "views": 21000,
    "likes": 960,
    "publishAt": "2026-06-04T12:21:39+08:00"
   },
   {
    "id": "N9005",
    "title": "灵犀机器人 发布新一代产品（5）",
    "titleEn": "LingXi Robotics Unveils New-Gen Product (5)",
    "cat": "机器人组件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "灵犀机器人",
    "author": "灵犀机器人 官方",
    "views": 53000,
    "likes": 2400,
    "publishAt": "2026-06-05T13:28:52+08:00"
   },
   {
    "id": "N9006",
    "title": "红蚁动力 发布新一代产品（6）",
    "titleEn": "RedAnt Dynamics Unveils New-Gen Product (6)",
    "cat": "模块配件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "红蚁动力",
    "author": "红蚁动力 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-06T14:35:05+08:00"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "message": "ok",
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "data": {
  "list": [
   {
    "id": "N9007",
    "title": "蓝鲸智造 发布新一代产品（7）",
    "titleEn": "BlueWhale MFG Unveils New-Gen Product (7)",
    "cat": "商用机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "蓝鲸智造",
    "author": "蓝鲸智造 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-07T15:42:18+08:00"
   },
   {
    "id": "N9008",
    "title": "铁甲开源 发布新一代产品（8）",
    "titleEn": "IronArmor Unveils New-Gen Product (8)",
    "cat": "具身机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "铁甲开源",
    "author": "铁甲开源 官方",
    "views": 9600,
    "likes": 420,
    "publishAt": "2026-06-08T16:49:31+08:00"
   },
   {
    "id": "N9009",
    "title": "智元工场 发布新一代产品（9）",
    "titleEn": "ZhiYuan Works Unveils New-Gen Product (9)",
    "cat": "定制机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "智元工场",
    "author": "智元工场 官方",
    "views": 21000,
    "likes": 960,
    "publishAt": "2026-06-09T17:56:44+08:00"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "message": "ok",
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "data": {
  "list": [
   {
    "id": "N9010",
    "title": "开源纪元 发布新一代产品（10）",
    "titleEn": "OpenEpoch Unveils New-Gen Product (10)",
    "cat": "机器人模块",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "开源纪元",
    "author": "开源纪元 官方",
    "views": 53000,
    "likes": 2400,
    "publishAt": "2026-06-10T18:03:57+08:00"
   },
   {
    "id": "N9011",
    "title": "星辰机甲 发布新一代产品（11）",
    "titleEn": "StarMech Unveils New-Gen Product (11)",
    "cat": "机器人组件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "星辰机甲",
    "author": "星辰机甲 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-11T19:10:10+08:00"
   },
   {
    "id": "N9012",
    "title": "极客造物 发布新一代产品（12）",
    "titleEn": "GeekMaker Unveils New-Gen Product (12)",
    "cat": "模块配件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "极客造物",
    "author": "极客造物 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-12T20:17:23+08:00"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "message": "ok",
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` detail `/news/:id`

> 资讯详情 GET /news/:id → {news:NewsItem,related:NewsItem[],brand · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "news": {
   "id": "N9001",
   "title": "智元工场 发布新一代产品（1）",
   "titleEn": "ZhiYuan Works Unveils New-Gen Product (1)",
   "cat": "商用机器人",
   "cover": "assets/img/design/news_hero_card.webp",
   "brand": "智元工场",
   "author": "智元工场 官方",
   "views": 1200,
   "likes": 60,
   "publishAt": "2026-06-01T09:00:00+08:00"
  },
  "related": [
   {
    "id": "N9001",
    "title": "智元工场 发布新一代产品（1）",
    "titleEn": "ZhiYuan Works Unveils New-Gen Product (1)",
    "cat": "商用机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "智元工场",
    "author": "智元工场 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-01T09:00:00+08:00"
   },
   {
    "id": "N9002",
    "title": "开源纪元 发布新一代产品（2）",
    "titleEn": "OpenEpoch Unveils New-Gen Product (2)",
    "cat": "具身机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "开源纪元",
    "author": "开源纪元 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-02T10:07:13+08:00"
   },
   {
    "id": "N9003",
    "title": "星辰机甲 发布新一代产品（3）",
    "titleEn": "StarMech Unveils New-Gen Product (3)",
    "cat": "定制机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "星辰机甲",
    "author": "星辰机甲 官方",
    "views": 9600,
    "likes": 420,
    "publishAt": "2026-06-03T11:14:26+08:00"
   }
  ],
  "brand": "智元工场"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "news": {
   "id": "N9002",
   "title": "开源纪元 发布新一代产品（2）",
   "titleEn": "OpenEpoch Unveils New-Gen Product (2)",
   "cat": "具身机器人",
   "cover": "assets/img/design/news_hero_card.webp",
   "brand": "开源纪元",
   "author": "开源纪元 官方",
   "views": 4800,
   "likes": 180,
   "publishAt": "2026-06-02T10:07:13+08:00"
  },
  "related": [
   {
    "id": "N9004",
    "title": "极客造物 发布新一代产品（4）",
    "titleEn": "GeekMaker Unveils New-Gen Product (4)",
    "cat": "机器人模块",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "极客造物",
    "author": "极客造物 官方",
    "views": 21000,
    "likes": 960,
    "publishAt": "2026-06-04T12:21:39+08:00"
   },
   {
    "id": "N9005",
    "title": "灵犀机器人 发布新一代产品（5）",
    "titleEn": "LingXi Robotics Unveils New-Gen Product (5)",
    "cat": "机器人组件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "灵犀机器人",
    "author": "灵犀机器人 官方",
    "views": 53000,
    "likes": 2400,
    "publishAt": "2026-06-05T13:28:52+08:00"
   },
   {
    "id": "N9006",
    "title": "红蚁动力 发布新一代产品（6）",
    "titleEn": "RedAnt Dynamics Unveils New-Gen Product (6)",
    "cat": "模块配件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "红蚁动力",
    "author": "红蚁动力 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-06T14:35:05+08:00"
   }
  ],
  "brand": "开源纪元"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "news": {
   "id": "N9003",
   "title": "星辰机甲 发布新一代产品（3）",
   "titleEn": "StarMech Unveils New-Gen Product (3)",
   "cat": "定制机器人",
   "cover": "assets/img/design/news_hero_card.webp",
   "brand": "星辰机甲",
   "author": "星辰机甲 官方",
   "views": 9600,
   "likes": 420,
   "publishAt": "2026-06-03T11:14:26+08:00"
  },
  "related": [
   {
    "id": "N9007",
    "title": "蓝鲸智造 发布新一代产品（7）",
    "titleEn": "BlueWhale MFG Unveils New-Gen Product (7)",
    "cat": "商用机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "蓝鲸智造",
    "author": "蓝鲸智造 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-07T15:42:18+08:00"
   },
   {
    "id": "N9008",
    "title": "铁甲开源 发布新一代产品（8）",
    "titleEn": "IronArmor Unveils New-Gen Product (8)",
    "cat": "具身机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "铁甲开源",
    "author": "铁甲开源 官方",
    "views": 9600,
    "likes": 420,
    "publishAt": "2026-06-08T16:49:31+08:00"
   },
   {
    "id": "N9009",
    "title": "智元工场 发布新一代产品（9）",
    "titleEn": "ZhiYuan Works Unveils New-Gen Product (9)",
    "cat": "定制机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "智元工场",
    "author": "智元工场 官方",
    "views": 21000,
    "likes": 960,
    "publishAt": "2026-06-09T17:56:44+08:00"
   }
  ],
  "brand": "星辰机甲"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "news": {
   "id": "N9004",
   "title": "极客造物 发布新一代产品（4）",
   "titleEn": "GeekMaker Unveils New-Gen Product (4)",
   "cat": "机器人模块",
   "cover": "assets/img/design/news_hero_card.webp",
   "brand": "极客造物",
   "author": "极客造物 官方",
   "views": 21000,
   "likes": 960,
   "publishAt": "2026-06-04T12:21:39+08:00"
  },
  "related": [
   {
    "id": "N9010",
    "title": "开源纪元 发布新一代产品（10）",
    "titleEn": "OpenEpoch Unveils New-Gen Product (10)",
    "cat": "机器人模块",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "开源纪元",
    "author": "开源纪元 官方",
    "views": 53000,
    "likes": 2400,
    "publishAt": "2026-06-10T18:03:57+08:00"
   },
   {
    "id": "N9011",
    "title": "星辰机甲 发布新一代产品（11）",
    "titleEn": "StarMech Unveils New-Gen Product (11)",
    "cat": "机器人组件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "星辰机甲",
    "author": "星辰机甲 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-11T19:10:10+08:00"
   },
   {
    "id": "N9012",
    "title": "极客造物 发布新一代产品（12）",
    "titleEn": "GeekMaker Unveils New-Gen Product (12)",
    "cat": "模块配件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "极客造物",
    "author": "极客造物 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-12T20:17:23+08:00"
   }
  ],
  "brand": "极客造物"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` categories `/news/categories`

> 分类列表 GET /news/categories → {list:{id,name,nameEn,count}[]} · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot Sample 1",
    "count": 120
   },
   {
    "id": "ID002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot Sample 2",
    "count": 486
   },
   {
    "id": "ID003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot Sample 3",
    "count": 1350
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module Sample 4",
    "count": 3200
   },
   {
    "id": "ID005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component Sample 5",
    "count": 8640
   },
   {
    "id": "ID006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory Sample 6",
    "count": 120
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "name": "五金 7",
    "nameEn": "Hardware Sample 7",
    "count": 486
   },
   {
    "id": "ID008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing Sample 8",
    "count": 1350
   },
   {
    "id": "ID009",
    "name": "外壳 9",
    "nameEn": "Enclosure Sample 9",
    "count": 3200
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots Sample 10",
    "count": 8640
   },
   {
    "id": "ID011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot Sample 11",
    "count": 120
   },
   {
    "id": "ID012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot Sample 12",
    "count": 486
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` publish `/news`

> 发布宣发 POST /news {title,cat,cover,content,attachments,tags,pu · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` drafts `/news/drafts`

> 草稿箱 GET /news/drafts · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9001",
    "title": "智元工场 发布新一代产品（1）",
    "titleEn": "ZhiYuan Works Unveils New-Gen Product (1)",
    "cat": "商用机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "智元工场",
    "author": "智元工场 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-01T09:00:00+08:00"
   },
   {
    "id": "N9002",
    "title": "开源纪元 发布新一代产品（2）",
    "titleEn": "OpenEpoch Unveils New-Gen Product (2)",
    "cat": "具身机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "开源纪元",
    "author": "开源纪元 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-02T10:07:13+08:00"
   },
   {
    "id": "N9003",
    "title": "星辰机甲 发布新一代产品（3）",
    "titleEn": "StarMech Unveils New-Gen Product (3)",
    "cat": "定制机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "星辰机甲",
    "author": "星辰机甲 官方",
    "views": 9600,
    "likes": 420,
    "publishAt": "2026-06-03T11:14:26+08:00"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9004",
    "title": "极客造物 发布新一代产品（4）",
    "titleEn": "GeekMaker Unveils New-Gen Product (4)",
    "cat": "机器人模块",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "极客造物",
    "author": "极客造物 官方",
    "views": 21000,
    "likes": 960,
    "publishAt": "2026-06-04T12:21:39+08:00"
   },
   {
    "id": "N9005",
    "title": "灵犀机器人 发布新一代产品（5）",
    "titleEn": "LingXi Robotics Unveils New-Gen Product (5)",
    "cat": "机器人组件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "灵犀机器人",
    "author": "灵犀机器人 官方",
    "views": 53000,
    "likes": 2400,
    "publishAt": "2026-06-05T13:28:52+08:00"
   },
   {
    "id": "N9006",
    "title": "红蚁动力 发布新一代产品（6）",
    "titleEn": "RedAnt Dynamics Unveils New-Gen Product (6)",
    "cat": "模块配件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "红蚁动力",
    "author": "红蚁动力 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-06T14:35:05+08:00"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9007",
    "title": "蓝鲸智造 发布新一代产品（7）",
    "titleEn": "BlueWhale MFG Unveils New-Gen Product (7)",
    "cat": "商用机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "蓝鲸智造",
    "author": "蓝鲸智造 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-07T15:42:18+08:00"
   },
   {
    "id": "N9008",
    "title": "铁甲开源 发布新一代产品（8）",
    "titleEn": "IronArmor Unveils New-Gen Product (8)",
    "cat": "具身机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "铁甲开源",
    "author": "铁甲开源 官方",
    "views": 9600,
    "likes": 420,
    "publishAt": "2026-06-08T16:49:31+08:00"
   },
   {
    "id": "N9009",
    "title": "智元工场 发布新一代产品（9）",
    "titleEn": "ZhiYuan Works Unveils New-Gen Product (9)",
    "cat": "定制机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "智元工场",
    "author": "智元工场 官方",
    "views": 21000,
    "likes": 960,
    "publishAt": "2026-06-09T17:56:44+08:00"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9010",
    "title": "开源纪元 发布新一代产品（10）",
    "titleEn": "OpenEpoch Unveils New-Gen Product (10)",
    "cat": "机器人模块",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "开源纪元",
    "author": "开源纪元 官方",
    "views": 53000,
    "likes": 2400,
    "publishAt": "2026-06-10T18:03:57+08:00"
   },
   {
    "id": "N9011",
    "title": "星辰机甲 发布新一代产品（11）",
    "titleEn": "StarMech Unveils New-Gen Product (11)",
    "cat": "机器人组件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "星辰机甲",
    "author": "星辰机甲 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-11T19:10:10+08:00"
   },
   {
    "id": "N9012",
    "title": "极客造物 发布新一代产品（12）",
    "titleEn": "GeekMaker Unveils New-Gen Product (12)",
    "cat": "模块配件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "极客造物",
    "author": "极客造物 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-12T20:17:23+08:00"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` submitReview `/news/:id/submit`

> 提交审核 POST /news/:id/submit {level:1|2|3,remark} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` reviews `/news/:id/reviews`

> 审核记录 GET /news/:id/reviews → {list:ReviewLog[]} · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "level": 1,
    "reviewer": "审核员1",
    "result": 1,
    "remark": "内容合规，同意发布（1）",
    "createdAt": "2026-06-01T09:00:00+08:00"
   },
   {
    "level": 2,
    "reviewer": "审核员2",
    "result": 2,
    "remark": "内容合规，同意发布（2）",
    "createdAt": "2026-06-02T10:07:13+08:00"
   },
   {
    "level": 3,
    "reviewer": "审核员3",
    "result": 1,
    "remark": "内容合规，同意发布（3）",
    "createdAt": "2026-06-03T11:14:26+08:00"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "level": 1,
    "reviewer": "审核员4",
    "result": 2,
    "remark": "内容合规，同意发布（4）",
    "createdAt": "2026-06-04T12:21:39+08:00"
   },
   {
    "level": 2,
    "reviewer": "审核员5",
    "result": 1,
    "remark": "内容合规，同意发布（5）",
    "createdAt": "2026-06-05T13:28:52+08:00"
   },
   {
    "level": 3,
    "reviewer": "审核员1",
    "result": 2,
    "remark": "内容合规，同意发布（6）",
    "createdAt": "2026-06-06T14:35:05+08:00"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "level": 1,
    "reviewer": "审核员2",
    "result": 1,
    "remark": "内容合规，同意发布（7）",
    "createdAt": "2026-06-07T15:42:18+08:00"
   },
   {
    "level": 2,
    "reviewer": "审核员3",
    "result": 2,
    "remark": "内容合规，同意发布（8）",
    "createdAt": "2026-06-08T16:49:31+08:00"
   },
   {
    "level": 3,
    "reviewer": "审核员4",
    "result": 1,
    "remark": "内容合规，同意发布（9）",
    "createdAt": "2026-06-09T17:56:44+08:00"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "level": 1,
    "reviewer": "审核员5",
    "result": 2,
    "remark": "内容合规，同意发布（10）",
    "createdAt": "2026-06-10T18:03:57+08:00"
   },
   {
    "level": 2,
    "reviewer": "审核员1",
    "result": 1,
    "remark": "内容合规，同意发布（11）",
    "createdAt": "2026-06-11T19:10:10+08:00"
   },
   {
    "level": 3,
    "reviewer": "审核员2",
    "result": 2,
    "remark": "内容合规，同意发布（12）",
    "createdAt": "2026-06-12T20:17:23+08:00"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` mine `/news/mine`

> 我的宣发 GET /news/mine {status} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9001",
    "title": "智元工场 发布新一代产品（1）",
    "titleEn": "ZhiYuan Works Unveils New-Gen Product (1)",
    "cat": "商用机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "智元工场",
    "author": "智元工场 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-01T09:00:00+08:00"
   },
   {
    "id": "N9002",
    "title": "开源纪元 发布新一代产品（2）",
    "titleEn": "OpenEpoch Unveils New-Gen Product (2)",
    "cat": "具身机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "开源纪元",
    "author": "开源纪元 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-02T10:07:13+08:00"
   },
   {
    "id": "N9003",
    "title": "星辰机甲 发布新一代产品（3）",
    "titleEn": "StarMech Unveils New-Gen Product (3)",
    "cat": "定制机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "星辰机甲",
    "author": "星辰机甲 官方",
    "views": 9600,
    "likes": 420,
    "publishAt": "2026-06-03T11:14:26+08:00"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9004",
    "title": "极客造物 发布新一代产品（4）",
    "titleEn": "GeekMaker Unveils New-Gen Product (4)",
    "cat": "机器人模块",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "极客造物",
    "author": "极客造物 官方",
    "views": 21000,
    "likes": 960,
    "publishAt": "2026-06-04T12:21:39+08:00"
   },
   {
    "id": "N9005",
    "title": "灵犀机器人 发布新一代产品（5）",
    "titleEn": "LingXi Robotics Unveils New-Gen Product (5)",
    "cat": "机器人组件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "灵犀机器人",
    "author": "灵犀机器人 官方",
    "views": 53000,
    "likes": 2400,
    "publishAt": "2026-06-05T13:28:52+08:00"
   },
   {
    "id": "N9006",
    "title": "红蚁动力 发布新一代产品（6）",
    "titleEn": "RedAnt Dynamics Unveils New-Gen Product (6)",
    "cat": "模块配件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "红蚁动力",
    "author": "红蚁动力 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-06T14:35:05+08:00"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9007",
    "title": "蓝鲸智造 发布新一代产品（7）",
    "titleEn": "BlueWhale MFG Unveils New-Gen Product (7)",
    "cat": "商用机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "蓝鲸智造",
    "author": "蓝鲸智造 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-07T15:42:18+08:00"
   },
   {
    "id": "N9008",
    "title": "铁甲开源 发布新一代产品（8）",
    "titleEn": "IronArmor Unveils New-Gen Product (8)",
    "cat": "具身机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "铁甲开源",
    "author": "铁甲开源 官方",
    "views": 9600,
    "likes": 420,
    "publishAt": "2026-06-08T16:49:31+08:00"
   },
   {
    "id": "N9009",
    "title": "智元工场 发布新一代产品（9）",
    "titleEn": "ZhiYuan Works Unveils New-Gen Product (9)",
    "cat": "定制机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "智元工场",
    "author": "智元工场 官方",
    "views": 21000,
    "likes": 960,
    "publishAt": "2026-06-09T17:56:44+08:00"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9010",
    "title": "开源纪元 发布新一代产品（10）",
    "titleEn": "OpenEpoch Unveils New-Gen Product (10)",
    "cat": "机器人模块",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "开源纪元",
    "author": "开源纪元 官方",
    "views": 53000,
    "likes": 2400,
    "publishAt": "2026-06-10T18:03:57+08:00"
   },
   {
    "id": "N9011",
    "title": "星辰机甲 发布新一代产品（11）",
    "titleEn": "StarMech Unveils New-Gen Product (11)",
    "cat": "机器人组件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "星辰机甲",
    "author": "星辰机甲 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-11T19:10:10+08:00"
   },
   {
    "id": "N9012",
    "title": "极客造物 发布新一代产品（12）",
    "titleEn": "GeekMaker Unveils New-Gen Product (12)",
    "cat": "模块配件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "极客造物",
    "author": "极客造物 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-12T20:17:23+08:00"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` topics `/news/topics`

> 专题聚合 GET /news/topics → {list:Topic[]} · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "商用机器人专题",
    "count": 12
   },
   {
    "id": 2,
    "name": "具身机器人专题",
    "count": 48
   },
   {
    "id": 3,
    "name": "定制机器人专题",
    "count": 136
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "机器人模块专题",
    "count": 320
   },
   {
    "id": 5,
    "name": "机器人组件专题",
    "count": 860
   },
   {
    "id": 6,
    "name": "模块配件专题",
    "count": 12
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "五金专题",
    "count": 48
   },
   {
    "id": 2,
    "name": "塑料3D打印专题",
    "count": 136
   },
   {
    "id": 3,
    "name": "外壳专题",
    "count": 320
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "mini机器人专题",
    "count": 860
   },
   {
    "id": 5,
    "name": "商用机器人专题",
    "count": 12
   },
   {
    "id": 6,
    "name": "具身机器人专题",
    "count": 48
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` rank `/news/rank`

> 热榜 GET /news/rank {range:'day'|'week'|'month'} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot 1",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot 2",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot 3",
    "cat": "定制机器人",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module 4",
    "cat": "机器人模块",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component 5",
    "cat": "机器人组件",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory 6",
    "cat": "模块配件",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1007",
    "name": "五金 7",
    "nameEn": "Hardware 7",
    "cat": "五金",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing 8",
    "cat": "塑料3D打印",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1009",
    "name": "外壳 9",
    "nameEn": "Enclosure 9",
    "cat": "外壳",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots 10",
    "cat": "mini机器人",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot 11",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot 12",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` search `/news/search`

> 搜索 GET /news/search {keyword,page} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot 1",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot 2",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot 3",
    "cat": "定制机器人",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module 4",
    "cat": "机器人模块",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component 5",
    "cat": "机器人组件",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory 6",
    "cat": "模块配件",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1007",
    "name": "五金 7",
    "nameEn": "Hardware 7",
    "cat": "五金",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing 8",
    "cat": "塑料3D打印",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1009",
    "name": "外壳 9",
    "nameEn": "Enclosure 9",
    "cat": "外壳",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots 10",
    "cat": "mini机器人",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot 11",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot 12",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` subscribe `/news/:brandId/subscribe`

> 订阅/关注 POST /news/:brandId/subscribe · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` stats `/news/:id/stats`

> 宣发数据效果 GET /news/:id/stats → {views,likes,comments,shares,tr · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "views": "views-1",
  "likes": "likes-1",
  "comments": "comments-1",
  "shares": "shares-1",
  "trend": [
   12,
   30,
   22,
   45,
   38,
   60,
   52
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "views": "views-2",
  "likes": "likes-2",
  "comments": "comments-2",
  "shares": "shares-2",
  "trend": [
   8,
   22,
   40,
   36,
   58,
   72,
   66
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "views": "views-3",
  "likes": "likes-3",
  "comments": "comments-3",
  "shares": "shares-3",
  "trend": [
   30,
   18,
   26,
   52,
   44,
   38,
   70
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "views": "views-4",
  "likes": "likes-4",
  "comments": "comments-4",
  "shares": "shares-4",
  "trend": [
   15,
   28,
   34,
   48,
   62,
   55,
   80
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` like `/news/:id/like`

> 点赞 POST /news/:id/like · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` comments `/news/:id/comments`

> 评论 GET /news/:id/comments | POST /news/:id/comments {content · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## products `products`


### `GET` list `/products`

> 产品列表 GET /products {cat,subCat,brandId,keyword,priceMin,pric · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot 1",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot 2",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot 3",
    "cat": "定制机器人",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module 4",
    "cat": "机器人模块",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component 5",
    "cat": "机器人组件",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory 6",
    "cat": "模块配件",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1007",
    "name": "五金 7",
    "nameEn": "Hardware 7",
    "cat": "五金",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing 8",
    "cat": "塑料3D打印",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1009",
    "name": "外壳 9",
    "nameEn": "Enclosure 9",
    "cat": "外壳",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots 10",
    "cat": "mini机器人",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot 11",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot 12",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` detail `/products/:id`

> 产品详情 GET /products/:id → {product:Product,specs:Spec[],docs: · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "product": {
   "id": 1,
   "name": "Product-1"
  },
  "specs": [
   {
    "id": 1,
    "name": "Spec-1"
   },
   {
    "id": 2,
    "name": "Spec-2"
   },
   {
    "id": 3,
    "name": "Spec-3"
   }
  ],
  "docs": [
   {
    "id": 1,
    "name": "Doc-1"
   },
   {
    "id": 2,
    "name": "Doc-2"
   },
   {
    "id": 3,
    "name": "Doc-3"
   }
  ],
  "reviews": [
   {
    "id": 1,
    "name": "Review-1"
   },
   {
    "id": 2,
    "name": "Review-2"
   },
   {
    "id": 3,
    "name": "Review-3"
   }
  ],
  "similar": [
   {
    "id": 1,
    "name": "Product-1"
   },
   {
    "id": 2,
    "name": "Product-2"
   },
   {
    "id": 3,
    "name": "Product-3"
   }
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "product": {
   "id": 2,
   "name": "Product-2"
  },
  "specs": [
   {
    "id": 4,
    "name": "Spec-4"
   },
   {
    "id": 5,
    "name": "Spec-5"
   },
   {
    "id": 6,
    "name": "Spec-6"
   }
  ],
  "docs": [
   {
    "id": 4,
    "name": "Doc-4"
   },
   {
    "id": 5,
    "name": "Doc-5"
   },
   {
    "id": 6,
    "name": "Doc-6"
   }
  ],
  "reviews": [
   {
    "id": 4,
    "name": "Review-4"
   },
   {
    "id": 5,
    "name": "Review-5"
   },
   {
    "id": 6,
    "name": "Review-6"
   }
  ],
  "similar": [
   {
    "id": 4,
    "name": "Product-4"
   },
   {
    "id": 5,
    "name": "Product-5"
   },
   {
    "id": 6,
    "name": "Product-6"
   }
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "product": {
   "id": 3,
   "name": "Product-3"
  },
  "specs": [
   {
    "id": 7,
    "name": "Spec-7"
   },
   {
    "id": 8,
    "name": "Spec-8"
   },
   {
    "id": 9,
    "name": "Spec-9"
   }
  ],
  "docs": [
   {
    "id": 7,
    "name": "Doc-7"
   },
   {
    "id": 8,
    "name": "Doc-8"
   },
   {
    "id": 9,
    "name": "Doc-9"
   }
  ],
  "reviews": [
   {
    "id": 7,
    "name": "Review-7"
   },
   {
    "id": 8,
    "name": "Review-8"
   },
   {
    "id": 9,
    "name": "Review-9"
   }
  ],
  "similar": [
   {
    "id": 7,
    "name": "Product-7"
   },
   {
    "id": 8,
    "name": "Product-8"
   },
   {
    "id": 9,
    "name": "Product-9"
   }
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "product": {
   "id": 4,
   "name": "Product-4"
  },
  "specs": [
   {
    "id": 10,
    "name": "Spec-10"
   },
   {
    "id": 11,
    "name": "Spec-11"
   },
   {
    "id": 12,
    "name": "Spec-12"
   }
  ],
  "docs": [
   {
    "id": 10,
    "name": "Doc-10"
   },
   {
    "id": 11,
    "name": "Doc-11"
   },
   {
    "id": 12,
    "name": "Doc-12"
   }
  ],
  "reviews": [
   {
    "id": 10,
    "name": "Review-10"
   },
   {
    "id": 11,
    "name": "Review-11"
   },
   {
    "id": 12,
    "name": "Review-12"
   }
  ],
  "similar": [
   {
    "id": 10,
    "name": "Product-10"
   },
   {
    "id": 11,
    "name": "Product-11"
   },
   {
    "id": 12,
    "name": "Product-12"
   }
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` categories `/products/categories`

> 分类树 GET /products/categories → {list:Category[]}（商用/具身/定制/模块 · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Category-1"
   },
   {
    "id": 2,
    "name": "Category-2"
   },
   {
    "id": 3,
    "name": "Category-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Category-4"
   },
   {
    "id": 5,
    "name": "Category-5"
   },
   {
    "id": 6,
    "name": "Category-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Category-7"
   },
   {
    "id": 8,
    "name": "Category-8"
   },
   {
    "id": 9,
    "name": "Category-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Category-10"
   },
   {
    "id": 11,
    "name": "Category-11"
   },
   {
    "id": 12,
    "name": "Category-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` search `/products/search`

> 搜索（含联想） GET /products/search {keyword,page} → {list,hints:st · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot 1",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot 2",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot 3",
    "cat": "定制机器人",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true,
  "hints": [
   "hints-1",
   "hints-2",
   "hints-3"
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module 4",
    "cat": "机器人模块",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component 5",
    "cat": "机器人组件",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory 6",
    "cat": "模块配件",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true,
  "hints": [
   "hints-4",
   "hints-5",
   "hints-6"
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1007",
    "name": "五金 7",
    "nameEn": "Hardware 7",
    "cat": "五金",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing 8",
    "cat": "塑料3D打印",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1009",
    "name": "外壳 9",
    "nameEn": "Enclosure 9",
    "cat": "外壳",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true,
  "hints": [
   "hints-7",
   "hints-8",
   "hints-9"
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots 10",
    "cat": "mini机器人",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot 11",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot 12",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true,
  "hints": [
   "hints-10",
   "hints-11",
   "hints-12"
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` filter `/products/filter（参数同`

> 高级筛选 GET /products/filter（参数同 list，支持多维组合） · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot 1",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot 2",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot 3",
    "cat": "定制机器人",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module 4",
    "cat": "机器人模块",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component 5",
    "cat": "机器人组件",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory 6",
    "cat": "模块配件",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1007",
    "name": "五金 7",
    "nameEn": "Hardware 7",
    "cat": "五金",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing 8",
    "cat": "塑料3D打印",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1009",
    "name": "外壳 9",
    "nameEn": "Enclosure 9",
    "cat": "外壳",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots 10",
    "cat": "mini机器人",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot 11",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot 12",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` compare `/products/compare?ids=a,b,c`

> 对比 GET /products/compare?ids=a,b,c → {list:Product[],diff:Co · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Product-1"
   },
   {
    "id": 2,
    "name": "Product-2"
   },
   {
    "id": 3,
    "name": "Product-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true,
  "diff": [
   {
    "id": 1,
    "name": "CompareRow-1"
   },
   {
    "id": 2,
    "name": "CompareRow-2"
   },
   {
    "id": 3,
    "name": "CompareRow-3"
   }
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Product-4"
   },
   {
    "id": 5,
    "name": "Product-5"
   },
   {
    "id": 6,
    "name": "Product-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true,
  "diff": [
   {
    "id": 4,
    "name": "CompareRow-4"
   },
   {
    "id": 5,
    "name": "CompareRow-5"
   },
   {
    "id": 6,
    "name": "CompareRow-6"
   }
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Product-7"
   },
   {
    "id": 8,
    "name": "Product-8"
   },
   {
    "id": 9,
    "name": "Product-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true,
  "diff": [
   {
    "id": 7,
    "name": "CompareRow-7"
   },
   {
    "id": 8,
    "name": "CompareRow-8"
   },
   {
    "id": 9,
    "name": "CompareRow-9"
   }
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Product-10"
   },
   {
    "id": 11,
    "name": "Product-11"
   },
   {
    "id": 12,
    "name": "Product-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true,
  "diff": [
   {
    "id": 10,
    "name": "CompareRow-10"
   },
   {
    "id": 11,
    "name": "CompareRow-11"
   },
   {
    "id": 12,
    "name": "CompareRow-12"
   }
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` reviews `/products/:id/reviews`

> 评价 GET /products/:id/reviews | POST /products/:id/reviews {r · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot 1",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot 2",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot 3",
    "cat": "定制机器人",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module 4",
    "cat": "机器人模块",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component 5",
    "cat": "机器人组件",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory 6",
    "cat": "模块配件",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1007",
    "name": "五金 7",
    "nameEn": "Hardware 7",
    "cat": "五金",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing 8",
    "cat": "塑料3D打印",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1009",
    "name": "外壳 9",
    "nameEn": "Enclosure 9",
    "cat": "外壳",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots 10",
    "cat": "mini机器人",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot 11",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot 12",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` favorite `/products/:id/favorite`

> 收藏 POST /products/:id/favorite | DELETE /products/:id/favori · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` publish `/products`

> 发布产品 POST /products {name,cat,price,images,specs,docs,desc} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## modules `modules`


### `GET` list `/modules`

> 模块列表 GET /modules {subCat:'感知'|'驱动'|'控制'|'电源'|'通信'|'结构',page · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot 1",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot 2",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot 3",
    "cat": "定制机器人",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module 4",
    "cat": "机器人模块",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component 5",
    "cat": "机器人组件",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory 6",
    "cat": "模块配件",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1007",
    "name": "五金 7",
    "nameEn": "Hardware 7",
    "cat": "五金",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing 8",
    "cat": "塑料3D打印",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1009",
    "name": "外壳 9",
    "nameEn": "Enclosure 9",
    "cat": "外壳",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots 10",
    "cat": "mini机器人",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot 11",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot 12",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` detail `/modules/:id`

> 模块详情 GET /modules/:id → {module:Module,interfaces:IfRow[],do · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "module": {
   "id": 1,
   "name": "Module-1"
  },
  "interfaces": [
   {
    "id": 1,
    "name": "IfRow-1"
   },
   {
    "id": 2,
    "name": "IfRow-2"
   },
   {
    "id": 3,
    "name": "IfRow-3"
   }
  ],
  "docs": [
   {
    "id": 1,
    "name": "Doc-1"
   },
   {
    "id": 2,
    "name": "Doc-2"
   },
   {
    "id": 3,
    "name": "Doc-3"
   }
  ],
  "plays": [
   {
    "id": 1,
    "name": "Play-1"
   },
   {
    "id": 2,
    "name": "Play-2"
   },
   {
    "id": 3,
    "name": "Play-3"
   }
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "module": {
   "id": 2,
   "name": "Module-2"
  },
  "interfaces": [
   {
    "id": 4,
    "name": "IfRow-4"
   },
   {
    "id": 5,
    "name": "IfRow-5"
   },
   {
    "id": 6,
    "name": "IfRow-6"
   }
  ],
  "docs": [
   {
    "id": 4,
    "name": "Doc-4"
   },
   {
    "id": 5,
    "name": "Doc-5"
   },
   {
    "id": 6,
    "name": "Doc-6"
   }
  ],
  "plays": [
   {
    "id": 4,
    "name": "Play-4"
   },
   {
    "id": 5,
    "name": "Play-5"
   },
   {
    "id": 6,
    "name": "Play-6"
   }
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "module": {
   "id": 3,
   "name": "Module-3"
  },
  "interfaces": [
   {
    "id": 7,
    "name": "IfRow-7"
   },
   {
    "id": 8,
    "name": "IfRow-8"
   },
   {
    "id": 9,
    "name": "IfRow-9"
   }
  ],
  "docs": [
   {
    "id": 7,
    "name": "Doc-7"
   },
   {
    "id": 8,
    "name": "Doc-8"
   },
   {
    "id": 9,
    "name": "Doc-9"
   }
  ],
  "plays": [
   {
    "id": 7,
    "name": "Play-7"
   },
   {
    "id": 8,
    "name": "Play-8"
   },
   {
    "id": 9,
    "name": "Play-9"
   }
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "module": {
   "id": 4,
   "name": "Module-4"
  },
  "interfaces": [
   {
    "id": 10,
    "name": "IfRow-10"
   },
   {
    "id": 11,
    "name": "IfRow-11"
   },
   {
    "id": 12,
    "name": "IfRow-12"
   }
  ],
  "docs": [
   {
    "id": 10,
    "name": "Doc-10"
   },
   {
    "id": 11,
    "name": "Doc-11"
   },
   {
    "id": 12,
    "name": "Doc-12"
   }
  ],
  "plays": [
   {
    "id": 10,
    "name": "Play-10"
   },
   {
    "id": 11,
    "name": "Play-11"
   },
   {
    "id": 12,
    "name": "Play-12"
   }
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` subCategories `/modules/sub-categories`

> 子组件表 GET /modules/sub-categories · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` compare `/modules/compare?ids=`

> 模块对比 GET /modules/compare?ids= · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot 1",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot 2",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot 3",
    "cat": "定制机器人",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module 4",
    "cat": "机器人模块",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component 5",
    "cat": "机器人组件",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory 6",
    "cat": "模块配件",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1007",
    "name": "五金 7",
    "nameEn": "Hardware 7",
    "cat": "五金",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing 8",
    "cat": "塑料3D打印",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1009",
    "name": "外壳 9",
    "nameEn": "Enclosure 9",
    "cat": "外壳",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots 10",
    "cat": "mini机器人",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot 11",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot 12",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` schemes `/modules/schemes`

> 搭配方案 GET /modules/schemes {scene} → {list:Scheme[]} · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Scheme-1"
   },
   {
    "id": 2,
    "name": "Scheme-2"
   },
   {
    "id": 3,
    "name": "Scheme-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Scheme-4"
   },
   {
    "id": 5,
    "name": "Scheme-5"
   },
   {
    "id": 6,
    "name": "Scheme-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Scheme-7"
   },
   {
    "id": 8,
    "name": "Scheme-8"
   },
   {
    "id": 9,
    "name": "Scheme-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Scheme-10"
   },
   {
    "id": 11,
    "name": "Scheme-11"
   },
   {
    "id": 12,
    "name": "Scheme-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` plays `/modules/plays`

> 玩法列表 GET /modules/plays {moduleId,page} | 详情 GET /modules/pl · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot 1",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot 2",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot 3",
    "cat": "定制机器人",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module 4",
    "cat": "机器人模块",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component 5",
    "cat": "机器人组件",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory 6",
    "cat": "模块配件",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1007",
    "name": "五金 7",
    "nameEn": "Hardware 7",
    "cat": "五金",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing 8",
    "cat": "塑料3D打印",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1009",
    "name": "外壳 9",
    "nameEn": "Enclosure 9",
    "cat": "外壳",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots 10",
    "cat": "mini机器人",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot 11",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot 12",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` resources `/modules/resources`

> 资料中心 GET /modules/resources {type:'3d'|'hw'|'sw'|'video',mod · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` download `/files/download-token`

> 资料下载（换取临时下载令牌） POST /files/download-token {fileId} → {url,ex · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "url": "assets/img/gen/product/commercial_01.svg",
  "expireAt": "2026-06-01T09:00:00+08:00"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "url": "assets/img/gen/product/module_02.svg",
  "expireAt": "2026-06-02T10:07:13+08:00"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "url": "assets/img/gen/product/toy_03.svg",
  "expireAt": "2026-06-03T11:14:26+08:00"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "url": "assets/img/gen/product/commercial_04.svg",
  "expireAt": "2026-06-04T12:21:39+08:00"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` components `/components`

> 组件/配件/五金/3D打印/外壳：同构接口，仅 path 前缀不同 · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot 1",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot 2",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot 3",
    "cat": "定制机器人",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module 4",
    "cat": "机器人模块",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component 5",
    "cat": "机器人组件",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory 6",
    "cat": "模块配件",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1007",
    "name": "五金 7",
    "nameEn": "Hardware 7",
    "cat": "五金",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing 8",
    "cat": "塑料3D打印",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1009",
    "name": "外壳 9",
    "nameEn": "Enclosure 9",
    "cat": "外壳",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots 10",
    "cat": "mini机器人",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot 11",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot 12",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## toys `toys`


### `GET` list `/toys`

> 玩具列表 GET /toys {age,difficulty,priceMax,sort,page} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot 1",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot 2",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot 3",
    "cat": "定制机器人",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module 4",
    "cat": "机器人模块",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component 5",
    "cat": "机器人组件",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory 6",
    "cat": "模块配件",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1007",
    "name": "五金 7",
    "nameEn": "Hardware 7",
    "cat": "五金",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing 8",
    "cat": "塑料3D打印",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1009",
    "name": "外壳 9",
    "nameEn": "Enclosure 9",
    "cat": "外壳",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots 10",
    "cat": "mini机器人",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot 11",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot 12",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` detail `/toys/:id`

> 详情 GET /toys/:id → {toy:Toy,steps:Step[],files:Doc[],shows:S · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "toy": {
   "id": 1,
   "name": "Toy-1"
  },
  "steps": [
   {
    "id": 1,
    "name": "Step-1"
   },
   {
    "id": 2,
    "name": "Step-2"
   },
   {
    "id": 3,
    "name": "Step-3"
   }
  ],
  "files": [
   {
    "id": 1,
    "name": "Doc-1"
   },
   {
    "id": 2,
    "name": "Doc-2"
   },
   {
    "id": 3,
    "name": "Doc-3"
   }
  ],
  "shows": [
   {
    "id": 1,
    "name": "Show-1"
   },
   {
    "id": 2,
    "name": "Show-2"
   },
   {
    "id": 3,
    "name": "Show-3"
   }
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "toy": {
   "id": 2,
   "name": "Toy-2"
  },
  "steps": [
   {
    "id": 4,
    "name": "Step-4"
   },
   {
    "id": 5,
    "name": "Step-5"
   },
   {
    "id": 6,
    "name": "Step-6"
   }
  ],
  "files": [
   {
    "id": 4,
    "name": "Doc-4"
   },
   {
    "id": 5,
    "name": "Doc-5"
   },
   {
    "id": 6,
    "name": "Doc-6"
   }
  ],
  "shows": [
   {
    "id": 4,
    "name": "Show-4"
   },
   {
    "id": 5,
    "name": "Show-5"
   },
   {
    "id": 6,
    "name": "Show-6"
   }
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "toy": {
   "id": 3,
   "name": "Toy-3"
  },
  "steps": [
   {
    "id": 7,
    "name": "Step-7"
   },
   {
    "id": 8,
    "name": "Step-8"
   },
   {
    "id": 9,
    "name": "Step-9"
   }
  ],
  "files": [
   {
    "id": 7,
    "name": "Doc-7"
   },
   {
    "id": 8,
    "name": "Doc-8"
   },
   {
    "id": 9,
    "name": "Doc-9"
   }
  ],
  "shows": [
   {
    "id": 7,
    "name": "Show-7"
   },
   {
    "id": 8,
    "name": "Show-8"
   },
   {
    "id": 9,
    "name": "Show-9"
   }
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "toy": {
   "id": 4,
   "name": "Toy-4"
  },
  "steps": [
   {
    "id": 10,
    "name": "Step-10"
   },
   {
    "id": 11,
    "name": "Step-11"
   },
   {
    "id": 12,
    "name": "Step-12"
   }
  ],
  "files": [
   {
    "id": 10,
    "name": "Doc-10"
   },
   {
    "id": 11,
    "name": "Doc-11"
   },
   {
    "id": 12,
    "name": "Doc-12"
   }
  ],
  "shows": [
   {
    "id": 10,
    "name": "Show-10"
   },
   {
    "id": 11,
    "name": "Show-11"
   },
   {
    "id": 12,
    "name": "Show-12"
   }
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` custom `/toys/custom`

> 小型定制下单 POST /toys/custom {baseId,color,engraving,quantity,co · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` diy `/toys/diy`

> DIY 玩法 GET /toys/diy | 详情 GET /toys/diy/:id · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot 1",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot 2",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot 3",
    "cat": "定制机器人",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module 4",
    "cat": "机器人模块",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component 5",
    "cat": "机器人组件",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory 6",
    "cat": "模块配件",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1007",
    "name": "五金 7",
    "nameEn": "Hardware 7",
    "cat": "五金",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing 8",
    "cat": "塑料3D打印",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1009",
    "name": "外壳 9",
    "nameEn": "Enclosure 9",
    "cat": "外壳",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots 10",
    "cat": "mini机器人",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot 11",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot 12",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` rank `/toys/rank`

> 排行榜 GET /toys/rank {range} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot 1",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot 2",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot 3",
    "cat": "定制机器人",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module 4",
    "cat": "机器人模块",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component 5",
    "cat": "机器人组件",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory 6",
    "cat": "模块配件",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1007",
    "name": "五金 7",
    "nameEn": "Hardware 7",
    "cat": "五金",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing 8",
    "cat": "塑料3D打印",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1009",
    "name": "外壳 9",
    "nameEn": "Enclosure 9",
    "cat": "外壳",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots 10",
    "cat": "mini机器人",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot 11",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot 12",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` shows `/toys/shows`

> 作品秀 GET /toys/shows | 发布 POST /toys/shows {title,images,desc · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9001",
    "title": "智元工场 发布新一代产品（1）",
    "titleEn": "ZhiYuan Works Unveils New-Gen Product (1)",
    "cat": "商用机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "智元工场",
    "author": "智元工场 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-01T09:00:00+08:00"
   },
   {
    "id": "N9002",
    "title": "开源纪元 发布新一代产品（2）",
    "titleEn": "OpenEpoch Unveils New-Gen Product (2)",
    "cat": "具身机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "开源纪元",
    "author": "开源纪元 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-02T10:07:13+08:00"
   },
   {
    "id": "N9003",
    "title": "星辰机甲 发布新一代产品（3）",
    "titleEn": "StarMech Unveils New-Gen Product (3)",
    "cat": "定制机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "星辰机甲",
    "author": "星辰机甲 官方",
    "views": 9600,
    "likes": 420,
    "publishAt": "2026-06-03T11:14:26+08:00"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9004",
    "title": "极客造物 发布新一代产品（4）",
    "titleEn": "GeekMaker Unveils New-Gen Product (4)",
    "cat": "机器人模块",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "极客造物",
    "author": "极客造物 官方",
    "views": 21000,
    "likes": 960,
    "publishAt": "2026-06-04T12:21:39+08:00"
   },
   {
    "id": "N9005",
    "title": "灵犀机器人 发布新一代产品（5）",
    "titleEn": "LingXi Robotics Unveils New-Gen Product (5)",
    "cat": "机器人组件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "灵犀机器人",
    "author": "灵犀机器人 官方",
    "views": 53000,
    "likes": 2400,
    "publishAt": "2026-06-05T13:28:52+08:00"
   },
   {
    "id": "N9006",
    "title": "红蚁动力 发布新一代产品（6）",
    "titleEn": "RedAnt Dynamics Unveils New-Gen Product (6)",
    "cat": "模块配件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "红蚁动力",
    "author": "红蚁动力 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-06T14:35:05+08:00"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9007",
    "title": "蓝鲸智造 发布新一代产品（7）",
    "titleEn": "BlueWhale MFG Unveils New-Gen Product (7)",
    "cat": "商用机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "蓝鲸智造",
    "author": "蓝鲸智造 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-07T15:42:18+08:00"
   },
   {
    "id": "N9008",
    "title": "铁甲开源 发布新一代产品（8）",
    "titleEn": "IronArmor Unveils New-Gen Product (8)",
    "cat": "具身机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "铁甲开源",
    "author": "铁甲开源 官方",
    "views": 9600,
    "likes": 420,
    "publishAt": "2026-06-08T16:49:31+08:00"
   },
   {
    "id": "N9009",
    "title": "智元工场 发布新一代产品（9）",
    "titleEn": "ZhiYuan Works Unveils New-Gen Product (9)",
    "cat": "定制机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "智元工场",
    "author": "智元工场 官方",
    "views": 21000,
    "likes": 960,
    "publishAt": "2026-06-09T17:56:44+08:00"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9010",
    "title": "开源纪元 发布新一代产品（10）",
    "titleEn": "OpenEpoch Unveils New-Gen Product (10)",
    "cat": "机器人模块",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "开源纪元",
    "author": "开源纪元 官方",
    "views": 53000,
    "likes": 2400,
    "publishAt": "2026-06-10T18:03:57+08:00"
   },
   {
    "id": "N9011",
    "title": "星辰机甲 发布新一代产品（11）",
    "titleEn": "StarMech Unveils New-Gen Product (11)",
    "cat": "机器人组件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "星辰机甲",
    "author": "星辰机甲 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-11T19:10:10+08:00"
   },
   {
    "id": "N9012",
    "title": "极客造物 发布新一代产品（12）",
    "titleEn": "GeekMaker Unveils New-Gen Product (12)",
    "cat": "模块配件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "极客造物",
    "author": "极客造物 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-12T20:17:23+08:00"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` contests `/toys/contests`

> 赛事 GET /toys/contests | 报名 POST /toys/contests/:id/join · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## ai `ai`


### `GET` sessions `/ai/sessions`

> 会话列表 GET /ai/sessions → {list:{id,title,updatedAt}[]} · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "title": "商用机器人 1",
    "updatedAt": "2026-06-01T09:00:00+08:00"
   },
   {
    "id": "ID002",
    "title": "具身机器人 2",
    "updatedAt": "2026-06-02T10:07:13+08:00"
   },
   {
    "id": "ID003",
    "title": "定制机器人 3",
    "updatedAt": "2026-06-03T11:14:26+08:00"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "title": "机器人模块 4",
    "updatedAt": "2026-06-04T12:21:39+08:00"
   },
   {
    "id": "ID005",
    "title": "机器人组件 5",
    "updatedAt": "2026-06-05T13:28:52+08:00"
   },
   {
    "id": "ID006",
    "title": "模块配件 6",
    "updatedAt": "2026-06-06T14:35:05+08:00"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "title": "五金 7",
    "updatedAt": "2026-06-07T15:42:18+08:00"
   },
   {
    "id": "ID008",
    "title": "塑料3D打印 8",
    "updatedAt": "2026-06-08T16:49:31+08:00"
   },
   {
    "id": "ID009",
    "title": "外壳 9",
    "updatedAt": "2026-06-09T17:56:44+08:00"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "title": "mini机器人 10",
    "updatedAt": "2026-06-10T18:03:57+08:00"
   },
   {
    "id": "ID011",
    "title": "商用机器人 11",
    "updatedAt": "2026-06-11T19:10:10+08:00"
   },
   {
    "id": "ID012",
    "title": "具身机器人 12",
    "updatedAt": "2026-06-12T20:17:23+08:00"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` messages `/ai/sessions/:id/messages`

> 会话消息 GET /ai/sessions/:id/messages · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` chat `/ai/chat`

> 发送对话（SSE 流式，接口需在 headers 加 Accept:text/event-stream） POST /a · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "delta": "delta-1",
  "split": "split-1",
  "project": "project-1"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "delta": "delta-2",
  "split": "split-2",
  "project": "project-2"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "delta": "delta-3",
  "split": "split-3",
  "project": "project-3"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "delta": "delta-4",
  "split": "split-4",
  "project": "project-4"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` requirement `/ai/requirements`

> 需求提交 POST /ai/requirements {title,scene,budget,deadline,deta · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "requirementId": "REQU001"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "requirementId": "REQU002"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "requirementId": "REQU003"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "requirementId": "REQU004"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` split `/ai/requirements/:id/split`

> 需求拆分 GET /ai/requirements/:id/split → {items:{name,match,sta · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "items": [
   {
    "name": "商用机器人 1",
    "match": "match-1",
    "status": "待排产"
   },
   {
    "name": "具身机器人 2",
    "match": "match-2",
    "status": "备料中"
   },
   {
    "name": "定制机器人 3",
    "match": "match-3",
    "status": "生产中"
   }
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "items": [
   {
    "name": "机器人模块 4",
    "match": "match-4",
    "status": "质检中"
   },
   {
    "name": "机器人组件 5",
    "match": "match-5",
    "status": "已完工"
   },
   {
    "name": "模块配件 6",
    "match": "match-6",
    "status": "待排产"
   }
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "items": [
   {
    "name": "五金 7",
    "match": "match-7",
    "status": "备料中"
   },
   {
    "name": "塑料3D打印 8",
    "match": "match-8",
    "status": "生产中"
   },
   {
    "name": "外壳 9",
    "match": "match-9",
    "status": "质检中"
   }
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "items": [
   {
    "name": "mini机器人 10",
    "match": "match-10",
    "status": "已完工"
   },
   {
    "name": "商用机器人 11",
    "match": "match-11",
    "status": "待排产"
   },
   {
    "name": "具身机器人 12",
    "match": "match-12",
    "status": "备料中"
   }
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` genProject `/ai/requirements/:id/project`

> 生成项目 POST /ai/requirements/:id/project → {projectId,nodes:No · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "projectId": "PR4001",
  "nodes": [
   {
    "id": 1,
    "name": "Node-1"
   },
   {
    "id": 2,
    "name": "Node-2"
   },
   {
    "id": 3,
    "name": "Node-3"
   }
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "projectId": "PR4002",
  "nodes": [
   {
    "id": 4,
    "name": "Node-4"
   },
   {
    "id": 5,
    "name": "Node-5"
   },
   {
    "id": 6,
    "name": "Node-6"
   }
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "projectId": "PR4003",
  "nodes": [
   {
    "id": 7,
    "name": "Node-7"
   },
   {
    "id": 8,
    "name": "Node-8"
   },
   {
    "id": 9,
    "name": "Node-9"
   }
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "projectId": "PR4004",
  "nodes": [
   {
    "id": 10,
    "name": "Node-10"
   },
   {
    "id": 11,
    "name": "Node-11"
   },
   {
    "id": 12,
    "name": "Node-12"
   }
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` match `/ai/requirements/:id/match`

> 资源匹配 GET /ai/requirements/:id/match → {matched:Product[],cus · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "matched": [
   {
    "id": 1,
    "name": "Product-1"
   },
   {
    "id": 2,
    "name": "Product-2"
   },
   {
    "id": 3,
    "name": "Product-3"
   }
  ],
  "custom": [
   {
    "id": 1,
    "name": "Item-1"
   },
   {
    "id": 2,
    "name": "Item-2"
   },
   {
    "id": 3,
    "name": "Item-3"
   }
  ],
  "missing": [
   500,
   1200,
   3000
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "matched": [
   {
    "id": 4,
    "name": "Product-4"
   },
   {
    "id": 5,
    "name": "Product-5"
   },
   {
    "id": 6,
    "name": "Product-6"
   }
  ],
  "custom": [
   {
    "id": 4,
    "name": "Item-4"
   },
   {
    "id": 5,
    "name": "Item-5"
   },
   {
    "id": 6,
    "name": "Item-6"
   }
  ],
  "missing": [
   8000,
   20000,
   500
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "matched": [
   {
    "id": 7,
    "name": "Product-7"
   },
   {
    "id": 8,
    "name": "Product-8"
   },
   {
    "id": 9,
    "name": "Product-9"
   }
  ],
  "custom": [
   {
    "id": 7,
    "name": "Item-7"
   },
   {
    "id": 8,
    "name": "Item-8"
   },
   {
    "id": 9,
    "name": "Item-9"
   }
  ],
  "missing": [
   1200,
   3000,
   8000
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "matched": [
   {
    "id": 10,
    "name": "Product-10"
   },
   {
    "id": 11,
    "name": "Product-11"
   },
   {
    "id": 12,
    "name": "Product-12"
   }
  ],
  "custom": [
   {
    "id": 10,
    "name": "Item-10"
   },
   {
    "id": 11,
    "name": "Item-11"
   },
   {
    "id": 12,
    "name": "Item-12"
   }
  ],
  "missing": [
   20000,
   500,
   1200
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` toTicket `/ai/requirements/:id/ticket`

> 缺资源转工单 POST /ai/requirements/:id/ticket {items,level} → {tic · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "ticketId": "TK7001"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "ticketId": "TK7002"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "ticketId": "TK7003"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "ticketId": "TK7004"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` integration `/ai/integrations/:id`

> 集成明细 GET /ai/integrations/:id → {bom:BomRow[],steps:Step[],r · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "bom": [
   {
    "id": 1,
    "name": "BomRow-1"
   },
   {
    "id": 2,
    "name": "BomRow-2"
   },
   {
    "id": 3,
    "name": "BomRow-3"
   }
  ],
  "steps": [
   {
    "id": 1,
    "name": "Step-1"
   },
   {
    "id": 2,
    "name": "Step-2"
   },
   {
    "id": 3,
    "name": "Step-3"
   }
  ],
  "risk": [
   "risk-1",
   "risk-2",
   "risk-3"
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "bom": [
   {
    "id": 4,
    "name": "BomRow-4"
   },
   {
    "id": 5,
    "name": "BomRow-5"
   },
   {
    "id": 6,
    "name": "BomRow-6"
   }
  ],
  "steps": [
   {
    "id": 4,
    "name": "Step-4"
   },
   {
    "id": 5,
    "name": "Step-5"
   },
   {
    "id": 6,
    "name": "Step-6"
   }
  ],
  "risk": [
   "risk-4",
   "risk-5",
   "risk-6"
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "bom": [
   {
    "id": 7,
    "name": "BomRow-7"
   },
   {
    "id": 8,
    "name": "BomRow-8"
   },
   {
    "id": 9,
    "name": "BomRow-9"
   }
  ],
  "steps": [
   {
    "id": 7,
    "name": "Step-7"
   },
   {
    "id": 8,
    "name": "Step-8"
   },
   {
    "id": 9,
    "name": "Step-9"
   }
  ],
  "risk": [
   "risk-7",
   "risk-8",
   "risk-9"
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "bom": [
   {
    "id": 10,
    "name": "BomRow-10"
   },
   {
    "id": 11,
    "name": "BomRow-11"
   },
   {
    "id": 12,
    "name": "BomRow-12"
   }
  ],
  "steps": [
   {
    "id": 10,
    "name": "Step-10"
   },
   {
    "id": 11,
    "name": "Step-11"
   },
   {
    "id": 12,
    "name": "Step-12"
   }
  ],
  "risk": [
   "risk-10",
   "risk-11",
   "risk-12"
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` llms `/ai/llms`

> 三方大模型账号 GET /ai/llms | 绑定 POST /ai/llms | 测试 POST /ai/llms/: · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` templates `/ai/templates`

> 提示词模板 GET /ai/templates | 用量计费 GET /ai/usage {range} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## forum `forum`


### `GET` boards `/forum/boards`

> 板块 GET /forum/boards · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` list `/forum/posts`

> 帖子列表 GET /forum/posts {board,keyword,sort:'latest'|'hot'|'to · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9001",
    "title": "智元工场 发布新一代产品（1）",
    "titleEn": "ZhiYuan Works Unveils New-Gen Product (1)",
    "cat": "商用机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "智元工场",
    "author": "智元工场 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-01T09:00:00+08:00"
   },
   {
    "id": "N9002",
    "title": "开源纪元 发布新一代产品（2）",
    "titleEn": "OpenEpoch Unveils New-Gen Product (2)",
    "cat": "具身机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "开源纪元",
    "author": "开源纪元 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-02T10:07:13+08:00"
   },
   {
    "id": "N9003",
    "title": "星辰机甲 发布新一代产品（3）",
    "titleEn": "StarMech Unveils New-Gen Product (3)",
    "cat": "定制机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "星辰机甲",
    "author": "星辰机甲 官方",
    "views": 9600,
    "likes": 420,
    "publishAt": "2026-06-03T11:14:26+08:00"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9004",
    "title": "极客造物 发布新一代产品（4）",
    "titleEn": "GeekMaker Unveils New-Gen Product (4)",
    "cat": "机器人模块",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "极客造物",
    "author": "极客造物 官方",
    "views": 21000,
    "likes": 960,
    "publishAt": "2026-06-04T12:21:39+08:00"
   },
   {
    "id": "N9005",
    "title": "灵犀机器人 发布新一代产品（5）",
    "titleEn": "LingXi Robotics Unveils New-Gen Product (5)",
    "cat": "机器人组件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "灵犀机器人",
    "author": "灵犀机器人 官方",
    "views": 53000,
    "likes": 2400,
    "publishAt": "2026-06-05T13:28:52+08:00"
   },
   {
    "id": "N9006",
    "title": "红蚁动力 发布新一代产品（6）",
    "titleEn": "RedAnt Dynamics Unveils New-Gen Product (6)",
    "cat": "模块配件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "红蚁动力",
    "author": "红蚁动力 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-06T14:35:05+08:00"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9007",
    "title": "蓝鲸智造 发布新一代产品（7）",
    "titleEn": "BlueWhale MFG Unveils New-Gen Product (7)",
    "cat": "商用机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "蓝鲸智造",
    "author": "蓝鲸智造 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-07T15:42:18+08:00"
   },
   {
    "id": "N9008",
    "title": "铁甲开源 发布新一代产品（8）",
    "titleEn": "IronArmor Unveils New-Gen Product (8)",
    "cat": "具身机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "铁甲开源",
    "author": "铁甲开源 官方",
    "views": 9600,
    "likes": 420,
    "publishAt": "2026-06-08T16:49:31+08:00"
   },
   {
    "id": "N9009",
    "title": "智元工场 发布新一代产品（9）",
    "titleEn": "ZhiYuan Works Unveils New-Gen Product (9)",
    "cat": "定制机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "智元工场",
    "author": "智元工场 官方",
    "views": 21000,
    "likes": 960,
    "publishAt": "2026-06-09T17:56:44+08:00"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9010",
    "title": "开源纪元 发布新一代产品（10）",
    "titleEn": "OpenEpoch Unveils New-Gen Product (10)",
    "cat": "机器人模块",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "开源纪元",
    "author": "开源纪元 官方",
    "views": 53000,
    "likes": 2400,
    "publishAt": "2026-06-10T18:03:57+08:00"
   },
   {
    "id": "N9011",
    "title": "星辰机甲 发布新一代产品（11）",
    "titleEn": "StarMech Unveils New-Gen Product (11)",
    "cat": "机器人组件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "星辰机甲",
    "author": "星辰机甲 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-11T19:10:10+08:00"
   },
   {
    "id": "N9012",
    "title": "极客造物 发布新一代产品（12）",
    "titleEn": "GeekMaker Unveils New-Gen Product (12)",
    "cat": "模块配件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "极客造物",
    "author": "极客造物 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-12T20:17:23+08:00"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` detail `/forum/posts/:id`

> 帖子详情 GET /forum/posts/:id → {post:Post,replies:Reply[]} · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "post": {
   "id": 1,
   "name": "Post-1"
  },
  "replies": [
   {
    "id": 1,
    "name": "Reply-1"
   },
   {
    "id": 2,
    "name": "Reply-2"
   },
   {
    "id": 3,
    "name": "Reply-3"
   }
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "post": {
   "id": 2,
   "name": "Post-2"
  },
  "replies": [
   {
    "id": 4,
    "name": "Reply-4"
   },
   {
    "id": 5,
    "name": "Reply-5"
   },
   {
    "id": 6,
    "name": "Reply-6"
   }
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "post": {
   "id": 3,
   "name": "Post-3"
  },
  "replies": [
   {
    "id": 7,
    "name": "Reply-7"
   },
   {
    "id": 8,
    "name": "Reply-8"
   },
   {
    "id": 9,
    "name": "Reply-9"
   }
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "post": {
   "id": 4,
   "name": "Post-4"
  },
  "replies": [
   {
    "id": 10,
    "name": "Reply-10"
   },
   {
    "id": 11,
    "name": "Reply-11"
   },
   {
    "id": 12,
    "name": "Reply-12"
   }
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` publish `/forum/posts`

> 发帖 POST /forum/posts {board,title,content,images,tags} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` reply `/forum/posts/:id/replies`

> 回帖 POST /forum/posts/:id/replies {content,replyTo} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` like `/forum/posts/:id`

> 点赞 / 收藏 / 置顶 / 加精 · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` search `/forum/search`

> 搜索 GET /forum/search {keyword,board} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot 1",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot 2",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot 3",
    "cat": "定制机器人",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module 4",
    "cat": "机器人模块",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component 5",
    "cat": "机器人组件",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory 6",
    "cat": "模块配件",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1007",
    "name": "五金 7",
    "nameEn": "Hardware 7",
    "cat": "五金",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing 8",
    "cat": "塑料3D打印",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1009",
    "name": "外壳 9",
    "nameEn": "Enclosure 9",
    "cat": "外壳",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots 10",
    "cat": "mini机器人",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot 11",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot 12",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` mine `/forum/mine`

> 我的帖子 GET /forum/mine · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9001",
    "title": "智元工场 发布新一代产品（1）",
    "titleEn": "ZhiYuan Works Unveils New-Gen Product (1)",
    "cat": "商用机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "智元工场",
    "author": "智元工场 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-01T09:00:00+08:00"
   },
   {
    "id": "N9002",
    "title": "开源纪元 发布新一代产品（2）",
    "titleEn": "OpenEpoch Unveils New-Gen Product (2)",
    "cat": "具身机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "开源纪元",
    "author": "开源纪元 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-02T10:07:13+08:00"
   },
   {
    "id": "N9003",
    "title": "星辰机甲 发布新一代产品（3）",
    "titleEn": "StarMech Unveils New-Gen Product (3)",
    "cat": "定制机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "星辰机甲",
    "author": "星辰机甲 官方",
    "views": 9600,
    "likes": 420,
    "publishAt": "2026-06-03T11:14:26+08:00"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9004",
    "title": "极客造物 发布新一代产品（4）",
    "titleEn": "GeekMaker Unveils New-Gen Product (4)",
    "cat": "机器人模块",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "极客造物",
    "author": "极客造物 官方",
    "views": 21000,
    "likes": 960,
    "publishAt": "2026-06-04T12:21:39+08:00"
   },
   {
    "id": "N9005",
    "title": "灵犀机器人 发布新一代产品（5）",
    "titleEn": "LingXi Robotics Unveils New-Gen Product (5)",
    "cat": "机器人组件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "灵犀机器人",
    "author": "灵犀机器人 官方",
    "views": 53000,
    "likes": 2400,
    "publishAt": "2026-06-05T13:28:52+08:00"
   },
   {
    "id": "N9006",
    "title": "红蚁动力 发布新一代产品（6）",
    "titleEn": "RedAnt Dynamics Unveils New-Gen Product (6)",
    "cat": "模块配件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "红蚁动力",
    "author": "红蚁动力 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-06T14:35:05+08:00"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9007",
    "title": "蓝鲸智造 发布新一代产品（7）",
    "titleEn": "BlueWhale MFG Unveils New-Gen Product (7)",
    "cat": "商用机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "蓝鲸智造",
    "author": "蓝鲸智造 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-07T15:42:18+08:00"
   },
   {
    "id": "N9008",
    "title": "铁甲开源 发布新一代产品（8）",
    "titleEn": "IronArmor Unveils New-Gen Product (8)",
    "cat": "具身机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "铁甲开源",
    "author": "铁甲开源 官方",
    "views": 9600,
    "likes": 420,
    "publishAt": "2026-06-08T16:49:31+08:00"
   },
   {
    "id": "N9009",
    "title": "智元工场 发布新一代产品（9）",
    "titleEn": "ZhiYuan Works Unveils New-Gen Product (9)",
    "cat": "定制机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "智元工场",
    "author": "智元工场 官方",
    "views": 21000,
    "likes": 960,
    "publishAt": "2026-06-09T17:56:44+08:00"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9010",
    "title": "开源纪元 发布新一代产品（10）",
    "titleEn": "OpenEpoch Unveils New-Gen Product (10)",
    "cat": "机器人模块",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "开源纪元",
    "author": "开源纪元 官方",
    "views": 53000,
    "likes": 2400,
    "publishAt": "2026-06-10T18:03:57+08:00"
   },
   {
    "id": "N9011",
    "title": "星辰机甲 发布新一代产品（11）",
    "titleEn": "StarMech Unveils New-Gen Product (11)",
    "cat": "机器人组件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "星辰机甲",
    "author": "星辰机甲 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-11T19:10:10+08:00"
   },
   {
    "id": "N9012",
    "title": "极客造物 发布新一代产品（12）",
    "titleEn": "GeekMaker Unveils New-Gen Product (12)",
    "cat": "模块配件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "极客造物",
    "author": "极客造物 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-12T20:17:23+08:00"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## learn `learn`


### `GET` list `/learn`

> 学习资料列表 GET /learn {cat,level,free,page} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot 1",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot 2",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot 3",
    "cat": "定制机器人",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module 4",
    "cat": "机器人模块",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component 5",
    "cat": "机器人组件",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory 6",
    "cat": "模块配件",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1007",
    "name": "五金 7",
    "nameEn": "Hardware 7",
    "cat": "五金",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing 8",
    "cat": "塑料3D打印",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1009",
    "name": "外壳 9",
    "nameEn": "Enclosure 9",
    "cat": "外壳",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots 10",
    "cat": "mini机器人",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot 11",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot 12",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` detail `/learn/:id`

> 资料详情 GET /learn/:id → {doc:LearnDoc,chapters:Chapter[],files · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "doc": {
   "id": 1,
   "name": "LearnDoc-1"
  },
  "chapters": [
   {
    "id": 1,
    "name": "Chapter-1"
   },
   {
    "id": 2,
    "name": "Chapter-2"
   },
   {
    "id": 3,
    "name": "Chapter-3"
   }
  ],
  "files": [
   {
    "id": 1,
    "name": "Doc-1"
   },
   {
    "id": 2,
    "name": "Doc-2"
   },
   {
    "id": 3,
    "name": "Doc-3"
   }
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "doc": {
   "id": 2,
   "name": "LearnDoc-2"
  },
  "chapters": [
   {
    "id": 4,
    "name": "Chapter-4"
   },
   {
    "id": 5,
    "name": "Chapter-5"
   },
   {
    "id": 6,
    "name": "Chapter-6"
   }
  ],
  "files": [
   {
    "id": 4,
    "name": "Doc-4"
   },
   {
    "id": 5,
    "name": "Doc-5"
   },
   {
    "id": 6,
    "name": "Doc-6"
   }
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "doc": {
   "id": 3,
   "name": "LearnDoc-3"
  },
  "chapters": [
   {
    "id": 7,
    "name": "Chapter-7"
   },
   {
    "id": 8,
    "name": "Chapter-8"
   },
   {
    "id": 9,
    "name": "Chapter-9"
   }
  ],
  "files": [
   {
    "id": 7,
    "name": "Doc-7"
   },
   {
    "id": 8,
    "name": "Doc-8"
   },
   {
    "id": 9,
    "name": "Doc-9"
   }
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "doc": {
   "id": 4,
   "name": "LearnDoc-4"
  },
  "chapters": [
   {
    "id": 10,
    "name": "Chapter-10"
   },
   {
    "id": 11,
    "name": "Chapter-11"
   },
   {
    "id": 12,
    "name": "Chapter-12"
   }
  ],
  "files": [
   {
    "id": 10,
    "name": "Doc-10"
   },
   {
    "id": 11,
    "name": "Doc-11"
   },
   {
    "id": 12,
    "name": "Doc-12"
   }
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` courses `/learn/courses`

> 课程 GET /learn/courses | 课程详情 GET /learn/courses/:id · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot 1",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot 2",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot 3",
    "cat": "定制机器人",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module 4",
    "cat": "机器人模块",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component 5",
    "cat": "机器人组件",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory 6",
    "cat": "模块配件",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1007",
    "name": "五金 7",
    "nameEn": "Hardware 7",
    "cat": "五金",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing 8",
    "cat": "塑料3D打印",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1009",
    "name": "外壳 9",
    "nameEn": "Enclosure 9",
    "cat": "外壳",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots 10",
    "cat": "mini机器人",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot 11",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot 12",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` paths `/learn/paths`

> 学习路径 GET /learn/paths | 报名 POST /learn/:id/enroll | 进度 GET / · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` qa `/learn/qa`

> 问答 GET /learn/qa | 提问 POST /learn/qa · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9001",
    "title": "智元工场 发布新一代产品（1）",
    "titleEn": "ZhiYuan Works Unveils New-Gen Product (1)",
    "cat": "商用机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "智元工场",
    "author": "智元工场 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-01T09:00:00+08:00"
   },
   {
    "id": "N9002",
    "title": "开源纪元 发布新一代产品（2）",
    "titleEn": "OpenEpoch Unveils New-Gen Product (2)",
    "cat": "具身机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "开源纪元",
    "author": "开源纪元 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-02T10:07:13+08:00"
   },
   {
    "id": "N9003",
    "title": "星辰机甲 发布新一代产品（3）",
    "titleEn": "StarMech Unveils New-Gen Product (3)",
    "cat": "定制机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "星辰机甲",
    "author": "星辰机甲 官方",
    "views": 9600,
    "likes": 420,
    "publishAt": "2026-06-03T11:14:26+08:00"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9004",
    "title": "极客造物 发布新一代产品（4）",
    "titleEn": "GeekMaker Unveils New-Gen Product (4)",
    "cat": "机器人模块",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "极客造物",
    "author": "极客造物 官方",
    "views": 21000,
    "likes": 960,
    "publishAt": "2026-06-04T12:21:39+08:00"
   },
   {
    "id": "N9005",
    "title": "灵犀机器人 发布新一代产品（5）",
    "titleEn": "LingXi Robotics Unveils New-Gen Product (5)",
    "cat": "机器人组件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "灵犀机器人",
    "author": "灵犀机器人 官方",
    "views": 53000,
    "likes": 2400,
    "publishAt": "2026-06-05T13:28:52+08:00"
   },
   {
    "id": "N9006",
    "title": "红蚁动力 发布新一代产品（6）",
    "titleEn": "RedAnt Dynamics Unveils New-Gen Product (6)",
    "cat": "模块配件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "红蚁动力",
    "author": "红蚁动力 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-06T14:35:05+08:00"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9007",
    "title": "蓝鲸智造 发布新一代产品（7）",
    "titleEn": "BlueWhale MFG Unveils New-Gen Product (7)",
    "cat": "商用机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "蓝鲸智造",
    "author": "蓝鲸智造 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-07T15:42:18+08:00"
   },
   {
    "id": "N9008",
    "title": "铁甲开源 发布新一代产品（8）",
    "titleEn": "IronArmor Unveils New-Gen Product (8)",
    "cat": "具身机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "铁甲开源",
    "author": "铁甲开源 官方",
    "views": 9600,
    "likes": 420,
    "publishAt": "2026-06-08T16:49:31+08:00"
   },
   {
    "id": "N9009",
    "title": "智元工场 发布新一代产品（9）",
    "titleEn": "ZhiYuan Works Unveils New-Gen Product (9)",
    "cat": "定制机器人",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "智元工场",
    "author": "智元工场 官方",
    "views": 21000,
    "likes": 960,
    "publishAt": "2026-06-09T17:56:44+08:00"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "N9010",
    "title": "开源纪元 发布新一代产品（10）",
    "titleEn": "OpenEpoch Unveils New-Gen Product (10)",
    "cat": "机器人模块",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "开源纪元",
    "author": "开源纪元 官方",
    "views": 53000,
    "likes": 2400,
    "publishAt": "2026-06-10T18:03:57+08:00"
   },
   {
    "id": "N9011",
    "title": "星辰机甲 发布新一代产品（11）",
    "titleEn": "StarMech Unveils New-Gen Product (11)",
    "cat": "机器人组件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "星辰机甲",
    "author": "星辰机甲 官方",
    "views": 1200,
    "likes": 60,
    "publishAt": "2026-06-11T19:10:10+08:00"
   },
   {
    "id": "N9012",
    "title": "极客造物 发布新一代产品（12）",
    "titleEn": "GeekMaker Unveils New-Gen Product (12)",
    "cat": "模块配件",
    "cover": "assets/img/design/news_hero_card.webp",
    "brand": "极客造物",
    "author": "极客造物 官方",
    "views": 4800,
    "likes": 180,
    "publishAt": "2026-06-12T20:17:23+08:00"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## biz `biz`


### `GET` demands `/demands`

> 需求大厅 GET /demands {cat,budgetMin,budgetMax,status,sort,page} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` projects `/projects`

> 项目大厅 GET /projects {status,keyword,page} | 详情 GET /projects/ · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` progress `/projects/:id/progress`

> 进度明细 GET /projects/:id/progress → {nodes:Node[],logs:Log[]} · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "nodes": [
   {
    "id": 1,
    "name": "Node-1"
   },
   {
    "id": 2,
    "name": "Node-2"
   },
   {
    "id": 3,
    "name": "Node-3"
   }
  ],
  "logs": [
   {
    "id": 1,
    "name": "Log-1"
   },
   {
    "id": 2,
    "name": "Log-2"
   },
   {
    "id": 3,
    "name": "Log-3"
   }
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "nodes": [
   {
    "id": 4,
    "name": "Node-4"
   },
   {
    "id": 5,
    "name": "Node-5"
   },
   {
    "id": 6,
    "name": "Node-6"
   }
  ],
  "logs": [
   {
    "id": 4,
    "name": "Log-4"
   },
   {
    "id": 5,
    "name": "Log-5"
   },
   {
    "id": 6,
    "name": "Log-6"
   }
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "nodes": [
   {
    "id": 7,
    "name": "Node-7"
   },
   {
    "id": 8,
    "name": "Node-8"
   },
   {
    "id": 9,
    "name": "Node-9"
   }
  ],
  "logs": [
   {
    "id": 7,
    "name": "Log-7"
   },
   {
    "id": 8,
    "name": "Log-8"
   },
   {
    "id": 9,
    "name": "Log-9"
   }
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "nodes": [
   {
    "id": 10,
    "name": "Node-10"
   },
   {
    "id": 11,
    "name": "Node-11"
   },
   {
    "id": 12,
    "name": "Node-12"
   }
  ],
  "logs": [
   {
    "id": 10,
    "name": "Log-10"
   },
   {
    "id": 11,
    "name": "Log-11"
   },
   {
    "id": 12,
    "name": "Log-12"
   }
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` nodes `/projects/:id/nodes`

> 节点分组 GET /projects/:id/nodes | 更新节点 PUT /projects/:id/nodes/ · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` members `/projects/:id/members`

> 成员与分组 GET /projects/:id/members | 邀请 POST /projects/:id/memb · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` integrations `/integrations`

> 集成需求 GET /integrations | POST /integrations | 详情 GET /integr · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` tests `/tests`

> 测试需求 GET /tests | POST /tests | 详情 GET /tests/:id | 报告 GET / · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## users `users`


### `GET` list `/users`

> 用户列表（检索浏览） GET /users {keyword,type,sort,page} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3001",
    "nickname": "机电老张0",
    "avatar": "assets/img/gen/avatar/user_01.svg",
    "userType": 1,
    "level": 1,
    "exp": 200,
    "followers": 30
   },
   {
    "id": "U3002",
    "nickname": "开源阿凯1",
    "avatar": "assets/img/gen/avatar/user_02.svg",
    "userType": 2,
    "level": 2,
    "exp": 860,
    "followers": 180
   },
   {
    "id": "U3003",
    "nickname": "嵌入式老王2",
    "avatar": "assets/img/gen/avatar/user_03.svg",
    "userType": 3,
    "level": 3,
    "exp": 2400,
    "followers": 640
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3004",
    "nickname": "机电老张3",
    "avatar": "assets/img/gen/avatar/user_04.svg",
    "userType": 4,
    "level": 1,
    "exp": 6800,
    "followers": 2100
   },
   {
    "id": "U3005",
    "nickname": "开源阿凯4",
    "avatar": "assets/img/gen/avatar/user_05.svg",
    "userType": 1,
    "level": 2,
    "exp": 15000,
    "followers": 5600
   },
   {
    "id": "U3006",
    "nickname": "嵌入式老王5",
    "avatar": "assets/img/gen/avatar/user_06.svg",
    "userType": 2,
    "level": 3,
    "exp": 200,
    "followers": 30
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3007",
    "nickname": "机电老张6",
    "avatar": "assets/img/gen/avatar/user_07.svg",
    "userType": 3,
    "level": 1,
    "exp": 860,
    "followers": 180
   },
   {
    "id": "U3008",
    "nickname": "开源阿凯7",
    "avatar": "assets/img/gen/avatar/user_08.svg",
    "userType": 4,
    "level": 2,
    "exp": 2400,
    "followers": 640
   },
   {
    "id": "U3009",
    "nickname": "嵌入式老王8",
    "avatar": "assets/img/gen/avatar/user_09.svg",
    "userType": 1,
    "level": 3,
    "exp": 6800,
    "followers": 2100
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3010",
    "nickname": "机电老张9",
    "avatar": "assets/img/gen/avatar/user_10.svg",
    "userType": 2,
    "level": 1,
    "exp": 15000,
    "followers": 5600
   },
   {
    "id": "U3011",
    "nickname": "开源阿凯10",
    "avatar": "assets/img/gen/avatar/user_11.svg",
    "userType": 3,
    "level": 2,
    "exp": 200,
    "followers": 30
   },
   {
    "id": "U3012",
    "nickname": "嵌入式老王11",
    "avatar": "assets/img/gen/avatar/user_12.svg",
    "userType": 4,
    "level": 3,
    "exp": 860,
    "followers": 180
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` detail `/users/:id`

> 个人主页 GET /users/:id → {user:User,products:Product[],projects · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "user": {
   "id": "U3001",
   "userNo": "U3001",
   "nickname": "机电老张0",
   "avatar": "assets/img/gen/avatar/user_01.svg",
   "userType": 1,
   "level": 1,
   "verifyStatus": 0
  },
  "products": [
   {
    "id": 1,
    "name": "Product-1"
   },
   {
    "id": 2,
    "name": "Product-2"
   },
   {
    "id": 3,
    "name": "Product-3"
   }
  ],
  "projects": [
   {
    "id": 1,
    "name": "Project-1"
   },
   {
    "id": 2,
    "name": "Project-2"
   },
   {
    "id": 3,
    "name": "Project-3"
   }
  ],
  "stats": [
   {
    "id": 1,
    "name": "Stat-1"
   },
   {
    "id": 2,
    "name": "Stat-2"
   },
   {
    "id": 3,
    "name": "Stat-3"
   }
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "user": {
   "id": "U3002",
   "userNo": "U3002",
   "nickname": "开源阿凯1",
   "avatar": "assets/img/gen/avatar/user_02.svg",
   "userType": 2,
   "level": 2,
   "verifyStatus": 1
  },
  "products": [
   {
    "id": 4,
    "name": "Product-4"
   },
   {
    "id": 5,
    "name": "Product-5"
   },
   {
    "id": 6,
    "name": "Product-6"
   }
  ],
  "projects": [
   {
    "id": 4,
    "name": "Project-4"
   },
   {
    "id": 5,
    "name": "Project-5"
   },
   {
    "id": 6,
    "name": "Project-6"
   }
  ],
  "stats": [
   {
    "id": 4,
    "name": "Stat-4"
   },
   {
    "id": 5,
    "name": "Stat-5"
   },
   {
    "id": 6,
    "name": "Stat-6"
   }
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "user": {
   "id": "U3003",
   "userNo": "U3003",
   "nickname": "机电老张2",
   "avatar": "assets/img/gen/avatar/user_03.svg",
   "userType": 3,
   "level": 3,
   "verifyStatus": 2
  },
  "products": [
   {
    "id": 7,
    "name": "Product-7"
   },
   {
    "id": 8,
    "name": "Product-8"
   },
   {
    "id": 9,
    "name": "Product-9"
   }
  ],
  "projects": [
   {
    "id": 7,
    "name": "Project-7"
   },
   {
    "id": 8,
    "name": "Project-8"
   },
   {
    "id": 9,
    "name": "Project-9"
   }
  ],
  "stats": [
   {
    "id": 7,
    "name": "Stat-7"
   },
   {
    "id": 8,
    "name": "Stat-8"
   },
   {
    "id": 9,
    "name": "Stat-9"
   }
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "user": {
   "id": "U3004",
   "userNo": "U3004",
   "nickname": "开源阿凯3",
   "avatar": "assets/img/gen/avatar/user_04.svg",
   "userType": 4,
   "level": 1,
   "verifyStatus": 3
  },
  "products": [
   {
    "id": 10,
    "name": "Product-10"
   },
   {
    "id": 11,
    "name": "Product-11"
   },
   {
    "id": 12,
    "name": "Product-12"
   }
  ],
  "projects": [
   {
    "id": 10,
    "name": "Project-10"
   },
   {
    "id": 11,
    "name": "Project-11"
   },
   {
    "id": 12,
    "name": "Project-12"
   }
  ],
  "stats": [
   {
    "id": 10,
    "name": "Stat-10"
   },
   {
    "id": 11,
    "name": "Stat-11"
   },
   {
    "id": 12,
    "name": "Stat-12"
   }
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` rank `/users/rank`

> 排行榜 GET /users/rank {type:'exp'|'products'|'likes'|'projects · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1001",
    "name": "商用机器人 1",
    "nameEn": "Commercial Robot 1",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1002",
    "name": "具身机器人 2",
    "nameEn": "Embodied Robot 2",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1003",
    "name": "定制机器人 3",
    "nameEn": "Custom Robot 3",
    "cat": "定制机器人",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1004",
    "name": "机器人模块 4",
    "nameEn": "Robot Module 4",
    "cat": "机器人模块",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1005",
    "name": "机器人组件 5",
    "nameEn": "Robot Component 5",
    "cat": "机器人组件",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "P1006",
    "name": "模块配件 6",
    "nameEn": "Module Accessory 6",
    "cat": "模块配件",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1007",
    "name": "五金 7",
    "nameEn": "Hardware 7",
    "cat": "五金",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1008",
    "name": "塑料3D打印 8",
    "nameEn": "3D Printing 8",
    "cat": "塑料3D打印",
    "price": 256000,
    "rating": 4.5,
    "sales": 1350,
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "P1009",
    "name": "外壳 9",
    "nameEn": "Enclosure 9",
    "cat": "外壳",
    "price": 498000,
    "rating": 4.8,
    "sales": 3200,
    "img": "assets/img/gen/product/module_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "P1010",
    "name": "mini机器人 10",
    "nameEn": "Mini Bots 10",
    "cat": "mini机器人",
    "price": 1280000,
    "rating": 5.0,
    "sales": 8640,
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "P1011",
    "name": "商用机器人 11",
    "nameEn": "Commercial Robot 11",
    "cat": "商用机器人",
    "price": 39800,
    "rating": 3.6,
    "sales": 120,
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "P1012",
    "name": "具身机器人 12",
    "nameEn": "Embodied Robot 12",
    "cat": "具身机器人",
    "price": 128000,
    "rating": 4.1,
    "sales": 480,
    "img": "assets/img/gen/product/module_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` follow `/users/:id/follow`

> 关注 / 取关 POST /users/:id/follow | DELETE · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` relations `/users/:id/relations`

> 关注与粉丝 GET /users/:id/relations {type:'following'|'followers' · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` collections `/users/me/collections`

> 收藏夹 GET /users/me/collections {type} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` credit `/users/me/credit`

> 信用等级 GET /users/me/credit · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3001",
    "nickname": "机电老张0",
    "avatar": "assets/img/gen/avatar/user_01.svg",
    "userType": 1,
    "level": 1,
    "exp": 200,
    "followers": 30
   },
   {
    "id": "U3002",
    "nickname": "开源阿凯1",
    "avatar": "assets/img/gen/avatar/user_02.svg",
    "userType": 2,
    "level": 2,
    "exp": 860,
    "followers": 180
   },
   {
    "id": "U3003",
    "nickname": "嵌入式老王2",
    "avatar": "assets/img/gen/avatar/user_03.svg",
    "userType": 3,
    "level": 3,
    "exp": 2400,
    "followers": 640
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3004",
    "nickname": "机电老张3",
    "avatar": "assets/img/gen/avatar/user_04.svg",
    "userType": 4,
    "level": 1,
    "exp": 6800,
    "followers": 2100
   },
   {
    "id": "U3005",
    "nickname": "开源阿凯4",
    "avatar": "assets/img/gen/avatar/user_05.svg",
    "userType": 1,
    "level": 2,
    "exp": 15000,
    "followers": 5600
   },
   {
    "id": "U3006",
    "nickname": "嵌入式老王5",
    "avatar": "assets/img/gen/avatar/user_06.svg",
    "userType": 2,
    "level": 3,
    "exp": 200,
    "followers": 30
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3007",
    "nickname": "机电老张6",
    "avatar": "assets/img/gen/avatar/user_07.svg",
    "userType": 3,
    "level": 1,
    "exp": 860,
    "followers": 180
   },
   {
    "id": "U3008",
    "nickname": "开源阿凯7",
    "avatar": "assets/img/gen/avatar/user_08.svg",
    "userType": 4,
    "level": 2,
    "exp": 2400,
    "followers": 640
   },
   {
    "id": "U3009",
    "nickname": "嵌入式老王8",
    "avatar": "assets/img/gen/avatar/user_09.svg",
    "userType": 1,
    "level": 3,
    "exp": 6800,
    "followers": 2100
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3010",
    "nickname": "机电老张9",
    "avatar": "assets/img/gen/avatar/user_10.svg",
    "userType": 2,
    "level": 1,
    "exp": 15000,
    "followers": 5600
   },
   {
    "id": "U3011",
    "nickname": "开源阿凯10",
    "avatar": "assets/img/gen/avatar/user_11.svg",
    "userType": 3,
    "level": 2,
    "exp": 200,
    "followers": 30
   },
   {
    "id": "U3012",
    "nickname": "嵌入式老王11",
    "avatar": "assets/img/gen/avatar/user_12.svg",
    "userType": 4,
    "level": 3,
    "exp": 860,
    "followers": 180
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## messages `messages`


### `GET` conversations `/messages/conversations`

> 会话列表 GET /messages/conversations → {list:Conversation[],unre · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Conversation-1"
   },
   {
    "id": 2,
    "name": "Conversation-2"
   },
   {
    "id": 3,
    "name": "Conversation-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true,
  "unread": 1
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Conversation-4"
   },
   {
    "id": 5,
    "name": "Conversation-5"
   },
   {
    "id": 6,
    "name": "Conversation-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true,
  "unread": 2
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Conversation-7"
   },
   {
    "id": 8,
    "name": "Conversation-8"
   },
   {
    "id": 9,
    "name": "Conversation-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true,
  "unread": 3
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Conversation-10"
   },
   {
    "id": 11,
    "name": "Conversation-11"
   },
   {
    "id": 12,
    "name": "Conversation-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true,
  "unread": 4
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` history `/messages/conversations/:id/messages`

> 单聊消息 GET /messages/conversations/:id/messages {page} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` send `/messages/conversations/:id/messages`

> 发送消息 POST /messages/conversations/:id/messages {type:'text'| · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` groups `/messages/groups`

> 分组沟通 GET /messages/groups | 项目沟通 GET /messages/projects/:id  · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` notifications `/messages/notifications`

> 通知 GET /messages/notifications | 已读 POST /messages/notificat · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## tickets `tickets`


### `POST` submit `/tickets`

> 提交工单 POST /tickets {type,level,title,content,attachments,rel · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "ticketId": "TK7001"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "ticketId": "TK7002"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "ticketId": "TK7003"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "ticketId": "TK7004"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` mine `/tickets/mine`

> 我的工单 GET /tickets/mine {status,page} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` detail `/tickets/:id`

> 工单详情 GET /tickets/:id → {ticket:Ticket,flow:FlowNode[],repli · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "ticket": {
   "id": 1,
   "name": "Ticket-1"
  },
  "flow": [
   {
    "id": 1,
    "name": "FlowNode-1"
   },
   {
    "id": 2,
    "name": "FlowNode-2"
   },
   {
    "id": 3,
    "name": "FlowNode-3"
   }
  ],
  "replies": [
   {
    "id": 1,
    "name": "Reply-1"
   },
   {
    "id": 2,
    "name": "Reply-2"
   },
   {
    "id": 3,
    "name": "Reply-3"
   }
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "ticket": {
   "id": 2,
   "name": "Ticket-2"
  },
  "flow": [
   {
    "id": 4,
    "name": "FlowNode-4"
   },
   {
    "id": 5,
    "name": "FlowNode-5"
   },
   {
    "id": 6,
    "name": "FlowNode-6"
   }
  ],
  "replies": [
   {
    "id": 4,
    "name": "Reply-4"
   },
   {
    "id": 5,
    "name": "Reply-5"
   },
   {
    "id": 6,
    "name": "Reply-6"
   }
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "ticket": {
   "id": 3,
   "name": "Ticket-3"
  },
  "flow": [
   {
    "id": 7,
    "name": "FlowNode-7"
   },
   {
    "id": 8,
    "name": "FlowNode-8"
   },
   {
    "id": 9,
    "name": "FlowNode-9"
   }
  ],
  "replies": [
   {
    "id": 7,
    "name": "Reply-7"
   },
   {
    "id": 8,
    "name": "Reply-8"
   },
   {
    "id": 9,
    "name": "Reply-9"
   }
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "ticket": {
   "id": 4,
   "name": "Ticket-4"
  },
  "flow": [
   {
    "id": 10,
    "name": "FlowNode-10"
   },
   {
    "id": 11,
    "name": "FlowNode-11"
   },
   {
    "id": 12,
    "name": "FlowNode-12"
   }
  ],
  "replies": [
   {
    "id": 10,
    "name": "Reply-10"
   },
   {
    "id": 11,
    "name": "Reply-11"
   },
   {
    "id": 12,
    "name": "Reply-12"
   }
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` reply `/tickets/:id/replies`

> 工单回复 POST /tickets/:id/replies | 关闭 PUT /tickets/:id/close | · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## funds `funds`


### `GET` overview `/funds/overview`

> 资金概览 GET /funds/overview → {balance,escrow,income,expense,mo · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "balance": 39800,
  "escrow": 39800,
  "income": 39800,
  "expense": 39800,
  "monthTrend": [
   12,
   30,
   22,
   45,
   38,
   60,
   52
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "balance": 128000,
  "escrow": 128000,
  "income": 128000,
  "expense": 128000,
  "monthTrend": [
   8,
   22,
   40,
   36,
   58,
   72,
   66
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "balance": 256000,
  "escrow": 256000,
  "income": 256000,
  "expense": 256000,
  "monthTrend": [
   30,
   18,
   26,
   52,
   44,
   38,
   70
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "balance": 498000,
  "escrow": 498000,
  "income": 498000,
  "expense": 498000,
  "monthTrend": [
   15,
   28,
   34,
   48,
   62,
   55,
   80
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` records `/funds/records`

> 明细 GET /funds/records {type,range,page} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` pay `/funds/pay`

> 支付 / 托管 POST /funds/pay {orderId,amount,method:'wechat'|'ali · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` withdraw `/funds/withdraw`

> 提现 POST /funds/withdraw {amount,account} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` invoices `/funds/invoices`

> 发票 GET /funds/invoices | 申请 POST /funds/invoices · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## files `files`


### `POST` upload `/files/upload`

> 上传（multipart） POST /files/upload · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "data": {
  "fileId": "FILE001",
  "url": "assets/img/gen/product/commercial_01.svg",
  "size": 1,
  "name": "商用机器人 1"
 },
 "message": "ok",
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "data": {
  "fileId": "FILE002",
  "url": "assets/img/gen/product/module_02.svg",
  "size": 2,
  "name": "具身机器人 2"
 },
 "message": "ok",
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "data": {
  "fileId": "FILE003",
  "url": "assets/img/gen/product/toy_03.svg",
  "size": 3,
  "name": "定制机器人 3"
 },
 "message": "ok",
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "data": {
  "fileId": "FILE004",
  "url": "assets/img/gen/product/commercial_04.svg",
  "size": 4,
  "name": "机器人模块 4"
 },
 "message": "ok",
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` token `/files/download-token`

> 下载令牌 POST /files/download-token {fileId} · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## admin `admin`


### `GET` dashboard `/admin/dashboard`

> 仪表盘 GET /admin/dashboard → {kpis:Kpi[],trend:[],pending:{rev · 响应结构来源：注释 → 结构

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "kpis": [
   {
    "id": 1,
    "name": "Kpi-1"
   },
   {
    "id": 2,
    "name": "Kpi-2"
   },
   {
    "id": 3,
    "name": "Kpi-3"
   }
  ],
  "trend": [
   12,
   30,
   22,
   45,
   38,
   60,
   52
  ],
  "pending": {
   "review": "review-1",
   "ticket": "ticket-1",
   "content": "围绕 商用机器人 的说明，覆盖选型、接口与部署要点（示例 1）。"
  }
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "kpis": [
   {
    "id": 4,
    "name": "Kpi-4"
   },
   {
    "id": 5,
    "name": "Kpi-5"
   },
   {
    "id": 6,
    "name": "Kpi-6"
   }
  ],
  "trend": [
   8,
   22,
   40,
   36,
   58,
   72,
   66
  ],
  "pending": {
   "review": "review-2",
   "ticket": "ticket-2",
   "content": "围绕 具身机器人 的说明，覆盖选型、接口与部署要点（示例 2）。"
  }
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "kpis": [
   {
    "id": 7,
    "name": "Kpi-7"
   },
   {
    "id": 8,
    "name": "Kpi-8"
   },
   {
    "id": 9,
    "name": "Kpi-9"
   }
  ],
  "trend": [
   30,
   18,
   26,
   52,
   44,
   38,
   70
  ],
  "pending": {
   "review": "review-3",
   "ticket": "ticket-3",
   "content": "围绕 定制机器人 的说明，覆盖选型、接口与部署要点（示例 3）。"
  }
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "kpis": [
   {
    "id": 10,
    "name": "Kpi-10"
   },
   {
    "id": 11,
    "name": "Kpi-11"
   },
   {
    "id": 12,
    "name": "Kpi-12"
   }
  ],
  "trend": [
   15,
   28,
   34,
   48,
   62,
   55,
   80
  ],
  "pending": {
   "review": "review-4",
   "ticket": "ticket-4",
   "content": "围绕 机器人模块 的说明，覆盖选型、接口与部署要点（示例 4）。"
  }
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` users `/admin/users`

> 用户管理 GET /admin/users | 启停 PUT /admin/users/:id/status | 角色  · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3001",
    "nickname": "机电老张0",
    "avatar": "assets/img/gen/avatar/user_01.svg",
    "userType": 1,
    "level": 1,
    "exp": 200,
    "followers": 30
   },
   {
    "id": "U3002",
    "nickname": "开源阿凯1",
    "avatar": "assets/img/gen/avatar/user_02.svg",
    "userType": 2,
    "level": 2,
    "exp": 860,
    "followers": 180
   },
   {
    "id": "U3003",
    "nickname": "嵌入式老王2",
    "avatar": "assets/img/gen/avatar/user_03.svg",
    "userType": 3,
    "level": 3,
    "exp": 2400,
    "followers": 640
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3004",
    "nickname": "机电老张3",
    "avatar": "assets/img/gen/avatar/user_04.svg",
    "userType": 4,
    "level": 1,
    "exp": 6800,
    "followers": 2100
   },
   {
    "id": "U3005",
    "nickname": "开源阿凯4",
    "avatar": "assets/img/gen/avatar/user_05.svg",
    "userType": 1,
    "level": 2,
    "exp": 15000,
    "followers": 5600
   },
   {
    "id": "U3006",
    "nickname": "嵌入式老王5",
    "avatar": "assets/img/gen/avatar/user_06.svg",
    "userType": 2,
    "level": 3,
    "exp": 200,
    "followers": 30
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3007",
    "nickname": "机电老张6",
    "avatar": "assets/img/gen/avatar/user_07.svg",
    "userType": 3,
    "level": 1,
    "exp": 860,
    "followers": 180
   },
   {
    "id": "U3008",
    "nickname": "开源阿凯7",
    "avatar": "assets/img/gen/avatar/user_08.svg",
    "userType": 4,
    "level": 2,
    "exp": 2400,
    "followers": 640
   },
   {
    "id": "U3009",
    "nickname": "嵌入式老王8",
    "avatar": "assets/img/gen/avatar/user_09.svg",
    "userType": 1,
    "level": 3,
    "exp": 6800,
    "followers": 2100
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3010",
    "nickname": "机电老张9",
    "avatar": "assets/img/gen/avatar/user_10.svg",
    "userType": 2,
    "level": 1,
    "exp": 15000,
    "followers": 5600
   },
   {
    "id": "U3011",
    "nickname": "开源阿凯10",
    "avatar": "assets/img/gen/avatar/user_11.svg",
    "userType": 3,
    "level": 2,
    "exp": 200,
    "followers": 30
   },
   {
    "id": "U3012",
    "nickname": "嵌入式老王11",
    "avatar": "assets/img/gen/avatar/user_12.svg",
    "userType": 4,
    "level": 3,
    "exp": 860,
    "followers": 180
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` roles `/admin/roles`

> 权限管理 GET /admin/roles | 新建 POST /admin/roles | 权限矩阵 PUT /adm · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` reviews `/admin/reviews`

> 审核管理（多级） GET /admin/reviews {level,status} | 通过 PUT /admin/r · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3001",
    "nickname": "机电老张0",
    "avatar": "assets/img/gen/avatar/user_01.svg",
    "userType": 1,
    "level": 1,
    "exp": 200,
    "followers": 30
   },
   {
    "id": "U3002",
    "nickname": "开源阿凯1",
    "avatar": "assets/img/gen/avatar/user_02.svg",
    "userType": 2,
    "level": 2,
    "exp": 860,
    "followers": 180
   },
   {
    "id": "U3003",
    "nickname": "嵌入式老王2",
    "avatar": "assets/img/gen/avatar/user_03.svg",
    "userType": 3,
    "level": 3,
    "exp": 2400,
    "followers": 640
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3004",
    "nickname": "机电老张3",
    "avatar": "assets/img/gen/avatar/user_04.svg",
    "userType": 4,
    "level": 1,
    "exp": 6800,
    "followers": 2100
   },
   {
    "id": "U3005",
    "nickname": "开源阿凯4",
    "avatar": "assets/img/gen/avatar/user_05.svg",
    "userType": 1,
    "level": 2,
    "exp": 15000,
    "followers": 5600
   },
   {
    "id": "U3006",
    "nickname": "嵌入式老王5",
    "avatar": "assets/img/gen/avatar/user_06.svg",
    "userType": 2,
    "level": 3,
    "exp": 200,
    "followers": 30
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3007",
    "nickname": "机电老张6",
    "avatar": "assets/img/gen/avatar/user_07.svg",
    "userType": 3,
    "level": 1,
    "exp": 860,
    "followers": 180
   },
   {
    "id": "U3008",
    "nickname": "开源阿凯7",
    "avatar": "assets/img/gen/avatar/user_08.svg",
    "userType": 4,
    "level": 2,
    "exp": 2400,
    "followers": 640
   },
   {
    "id": "U3009",
    "nickname": "嵌入式老王8",
    "avatar": "assets/img/gen/avatar/user_09.svg",
    "userType": 1,
    "level": 3,
    "exp": 6800,
    "followers": 2100
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3010",
    "nickname": "机电老张9",
    "avatar": "assets/img/gen/avatar/user_10.svg",
    "userType": 2,
    "level": 1,
    "exp": 15000,
    "followers": 5600
   },
   {
    "id": "U3011",
    "nickname": "开源阿凯10",
    "avatar": "assets/img/gen/avatar/user_11.svg",
    "userType": 3,
    "level": 2,
    "exp": 200,
    "followers": 30
   },
   {
    "id": "U3012",
    "nickname": "嵌入式老王11",
    "avatar": "assets/img/gen/avatar/user_12.svg",
    "userType": 4,
    "level": 3,
    "exp": 860,
    "followers": 180
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` reviewFlow `/admin/review-flow`

> 审核流程配置 GET /admin/review-flow | PUT /admin/review-flow · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` contents `/admin/contents`

> 发布管理 GET /admin/contents | 上下架 PUT /admin/contents/:id/statu · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3001",
    "nickname": "机电老张0",
    "avatar": "assets/img/gen/avatar/user_01.svg",
    "userType": 1,
    "level": 1,
    "exp": 200,
    "followers": 30
   },
   {
    "id": "U3002",
    "nickname": "开源阿凯1",
    "avatar": "assets/img/gen/avatar/user_02.svg",
    "userType": 2,
    "level": 2,
    "exp": 860,
    "followers": 180
   },
   {
    "id": "U3003",
    "nickname": "嵌入式老王2",
    "avatar": "assets/img/gen/avatar/user_03.svg",
    "userType": 3,
    "level": 3,
    "exp": 2400,
    "followers": 640
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3004",
    "nickname": "机电老张3",
    "avatar": "assets/img/gen/avatar/user_04.svg",
    "userType": 4,
    "level": 1,
    "exp": 6800,
    "followers": 2100
   },
   {
    "id": "U3005",
    "nickname": "开源阿凯4",
    "avatar": "assets/img/gen/avatar/user_05.svg",
    "userType": 1,
    "level": 2,
    "exp": 15000,
    "followers": 5600
   },
   {
    "id": "U3006",
    "nickname": "嵌入式老王5",
    "avatar": "assets/img/gen/avatar/user_06.svg",
    "userType": 2,
    "level": 3,
    "exp": 200,
    "followers": 30
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3007",
    "nickname": "机电老张6",
    "avatar": "assets/img/gen/avatar/user_07.svg",
    "userType": 3,
    "level": 1,
    "exp": 860,
    "followers": 180
   },
   {
    "id": "U3008",
    "nickname": "开源阿凯7",
    "avatar": "assets/img/gen/avatar/user_08.svg",
    "userType": 4,
    "level": 2,
    "exp": 2400,
    "followers": 640
   },
   {
    "id": "U3009",
    "nickname": "嵌入式老王8",
    "avatar": "assets/img/gen/avatar/user_09.svg",
    "userType": 1,
    "level": 3,
    "exp": 6800,
    "followers": 2100
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3010",
    "nickname": "机电老张9",
    "avatar": "assets/img/gen/avatar/user_10.svg",
    "userType": 2,
    "level": 1,
    "exp": 15000,
    "followers": 5600
   },
   {
    "id": "U3011",
    "nickname": "开源阿凯10",
    "avatar": "assets/img/gen/avatar/user_11.svg",
    "userType": 3,
    "level": 2,
    "exp": 200,
    "followers": 30
   },
   {
    "id": "U3012",
    "nickname": "嵌入式老王11",
    "avatar": "assets/img/gen/avatar/user_12.svg",
    "userType": 4,
    "level": 3,
    "exp": 860,
    "followers": 180
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` comments `/admin/comments`

> 评论管理 GET /admin/comments | 删除 DELETE /admin/comments/:id | 屏 · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` tickets `/admin/tickets`

> 工单管理 GET /admin/tickets | 分派 PUT /admin/tickets/:id/assign | · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` projects `/admin/projects`

> 项目管理 GET /admin/projects | 资金管理 GET /admin/funds | 沟通管理 GET  · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3001",
    "nickname": "机电老张0",
    "avatar": "assets/img/gen/avatar/user_01.svg",
    "userType": 1,
    "level": 1,
    "exp": 200,
    "followers": 30
   },
   {
    "id": "U3002",
    "nickname": "开源阿凯1",
    "avatar": "assets/img/gen/avatar/user_02.svg",
    "userType": 2,
    "level": 2,
    "exp": 860,
    "followers": 180
   },
   {
    "id": "U3003",
    "nickname": "嵌入式老王2",
    "avatar": "assets/img/gen/avatar/user_03.svg",
    "userType": 3,
    "level": 3,
    "exp": 2400,
    "followers": 640
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3004",
    "nickname": "机电老张3",
    "avatar": "assets/img/gen/avatar/user_04.svg",
    "userType": 4,
    "level": 1,
    "exp": 6800,
    "followers": 2100
   },
   {
    "id": "U3005",
    "nickname": "开源阿凯4",
    "avatar": "assets/img/gen/avatar/user_05.svg",
    "userType": 1,
    "level": 2,
    "exp": 15000,
    "followers": 5600
   },
   {
    "id": "U3006",
    "nickname": "嵌入式老王5",
    "avatar": "assets/img/gen/avatar/user_06.svg",
    "userType": 2,
    "level": 3,
    "exp": 200,
    "followers": 30
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3007",
    "nickname": "机电老张6",
    "avatar": "assets/img/gen/avatar/user_07.svg",
    "userType": 3,
    "level": 1,
    "exp": 860,
    "followers": 180
   },
   {
    "id": "U3008",
    "nickname": "开源阿凯7",
    "avatar": "assets/img/gen/avatar/user_08.svg",
    "userType": 4,
    "level": 2,
    "exp": 2400,
    "followers": 640
   },
   {
    "id": "U3009",
    "nickname": "嵌入式老王8",
    "avatar": "assets/img/gen/avatar/user_09.svg",
    "userType": 1,
    "level": 3,
    "exp": 6800,
    "followers": 2100
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3010",
    "nickname": "机电老张9",
    "avatar": "assets/img/gen/avatar/user_10.svg",
    "userType": 2,
    "level": 1,
    "exp": 15000,
    "followers": 5600
   },
   {
    "id": "U3011",
    "nickname": "开源阿凯10",
    "avatar": "assets/img/gen/avatar/user_11.svg",
    "userType": 3,
    "level": 2,
    "exp": 200,
    "followers": 30
   },
   {
    "id": "U3012",
    "nickname": "嵌入式老王11",
    "avatar": "assets/img/gen/avatar/user_12.svg",
    "userType": 4,
    "level": 3,
    "exp": 860,
    "followers": 180
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` categories `/admin/categories`

> 分类管理 GET /admin/categories | POST | PUT | DELETE · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` products `/admin/products`

> 产品管理 / 新闻管理 / 论坛管理 / LLM 配置 / 广告位 / 日志 / 设置 / 统计 · 响应结构来源：按方法推导

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3001",
    "nickname": "机电老张0",
    "avatar": "assets/img/gen/avatar/user_01.svg",
    "userType": 1,
    "level": 1,
    "exp": 200,
    "followers": 30
   },
   {
    "id": "U3002",
    "nickname": "开源阿凯1",
    "avatar": "assets/img/gen/avatar/user_02.svg",
    "userType": 2,
    "level": 2,
    "exp": 860,
    "followers": 180
   },
   {
    "id": "U3003",
    "nickname": "嵌入式老王2",
    "avatar": "assets/img/gen/avatar/user_03.svg",
    "userType": 3,
    "level": 3,
    "exp": 2400,
    "followers": 640
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3004",
    "nickname": "机电老张3",
    "avatar": "assets/img/gen/avatar/user_04.svg",
    "userType": 4,
    "level": 1,
    "exp": 6800,
    "followers": 2100
   },
   {
    "id": "U3005",
    "nickname": "开源阿凯4",
    "avatar": "assets/img/gen/avatar/user_05.svg",
    "userType": 1,
    "level": 2,
    "exp": 15000,
    "followers": 5600
   },
   {
    "id": "U3006",
    "nickname": "嵌入式老王5",
    "avatar": "assets/img/gen/avatar/user_06.svg",
    "userType": 2,
    "level": 3,
    "exp": 200,
    "followers": 30
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3007",
    "nickname": "机电老张6",
    "avatar": "assets/img/gen/avatar/user_07.svg",
    "userType": 3,
    "level": 1,
    "exp": 860,
    "followers": 180
   },
   {
    "id": "U3008",
    "nickname": "开源阿凯7",
    "avatar": "assets/img/gen/avatar/user_08.svg",
    "userType": 4,
    "level": 2,
    "exp": 2400,
    "followers": 640
   },
   {
    "id": "U3009",
    "nickname": "嵌入式老王8",
    "avatar": "assets/img/gen/avatar/user_09.svg",
    "userType": 1,
    "level": 3,
    "exp": 6800,
    "followers": 2100
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "U3010",
    "nickname": "机电老张9",
    "avatar": "assets/img/gen/avatar/user_10.svg",
    "userType": 2,
    "level": 1,
    "exp": 15000,
    "followers": 5600
   },
   {
    "id": "U3011",
    "nickname": "开源阿凯10",
    "avatar": "assets/img/gen/avatar/user_11.svg",
    "userType": 3,
    "level": 2,
    "exp": 200,
    "followers": 30
   },
   {
    "id": "U3012",
    "nickname": "嵌入式老王11",
    "avatar": "assets/img/gen/avatar/user_12.svg",
    "userType": 4,
    "level": 3,
    "exp": 860,
    "followers": 180
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## publish `publish`


### `POST` module `/publish/module`

> 发布草稿（模块 / 组件 / 五金 / 外壳 / 配件 / 3D打印 通用） · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产",
  "reviewEta": "2026-06-01"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中",
  "reviewEta": "2026-07-02"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中",
  "reviewEta": "2026-08-03"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中",
  "reviewEta": "2026-09-04"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` product `/publish/product`

> 发布整机产品（商用 / 具身 / 定制 / 玩具） · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` toy `/publish/toy`

> 发布玩具作品 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "showcaseRank": 1
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "showcaseRank": 2
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "showcaseRank": 3
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "showcaseRank": 4
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `PUT` edit `/publish/:id`

> 编辑已有稿件（新闻 / 产品 / 作品通用），编辑后重新进入审核队列 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "version": "v1.0",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "version": "白班",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "version": "ISO9283",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "version": "2026-06",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` revisions `/publish/:id`

> 稿件修订历史 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "version": "v1.0",
    "note": "围绕 商用机器人 的说明，覆盖选型、接口与部署要点（示例 1）。",
    "date": "2026-06-01"
   },
   {
    "version": "白班",
    "note": "围绕 具身机器人 的说明，覆盖选型、接口与部署要点（示例 2）。",
    "date": "2026-07-02"
   },
   {
    "version": "ISO9283",
    "note": "围绕 定制机器人 的说明，覆盖选型、接口与部署要点（示例 3）。",
    "date": "2026-08-03"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "version": "2026-06",
    "note": "围绕 机器人模块 的说明，覆盖选型、接口与部署要点（示例 4）。",
    "date": "2026-09-04"
   },
   {
    "version": "±0.02mm",
    "note": "围绕 机器人组件 的说明，覆盖选型、接口与部署要点（示例 5）。",
    "date": "2026-10-05"
   },
   {
    "version": "v1.0",
    "note": "围绕 模块配件 的说明，覆盖选型、接口与部署要点（示例 6）。",
    "date": "2026-06-06"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "version": "白班",
    "note": "围绕 五金 的说明，覆盖选型、接口与部署要点（示例 7）。",
    "date": "2026-07-07"
   },
   {
    "version": "ISO9283",
    "note": "围绕 塑料3D打印 的说明，覆盖选型、接口与部署要点（示例 8）。",
    "date": "2026-08-08"
   },
   {
    "version": "2026-06",
    "note": "围绕 外壳 的说明，覆盖选型、接口与部署要点（示例 9）。",
    "date": "2026-09-09"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "version": "±0.02mm",
    "note": "围绕 mini机器人 的说明，覆盖选型、接口与部署要点（示例 10）。",
    "date": "2026-10-10"
   },
   {
    "version": "v1.0",
    "note": "围绕 商用机器人 的说明，覆盖选型、接口与部署要点（示例 11）。",
    "date": "2026-06-11"
   },
   {
    "version": "白班",
    "note": "围绕 具身机器人 的说明，覆盖选型、接口与部署要点（示例 12）。",
    "date": "2026-07-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` options `/publish/options`

> 发布表单可选项（分类 / 协议 / 应用领域 / 难度 / 开源方式） · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "cats": [
   "待处理"
  ],
  "licenses": [
   "licenses-1",
   "licenses-2",
   "licenses-3"
  ],
  "applications": [
   "applications-1",
   "applications-2",
   "applications-3"
  ],
  "difficulties": [
   "difficulties-1",
   "difficulties-2",
   "difficulties-3"
  ],
  "shares": [
   "shares-1",
   "shares-2",
   "shares-3"
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "cats": [
   "待处理",
   "进行中"
  ],
  "licenses": [
   "licenses-4",
   "licenses-5",
   "licenses-6"
  ],
  "applications": [
   "applications-4",
   "applications-5",
   "applications-6"
  ],
  "difficulties": [
   "difficulties-4",
   "difficulties-5",
   "difficulties-6"
  ],
  "shares": [
   "shares-4",
   "shares-5",
   "shares-6"
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "cats": [
   "待处理",
   "进行中",
   "已完结"
  ],
  "licenses": [
   "licenses-7",
   "licenses-8",
   "licenses-9"
  ],
  "applications": [
   "applications-7",
   "applications-8",
   "applications-9"
  ],
  "difficulties": [
   "difficulties-7",
   "difficulties-8",
   "difficulties-9"
  ],
  "shares": [
   "shares-7",
   "shares-8",
   "shares-9"
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "cats": [
   "待处理"
  ],
  "licenses": [
   "licenses-10",
   "licenses-11",
   "licenses-12"
  ],
  "applications": [
   "applications-10",
   "applications-11",
   "applications-12"
  ],
  "difficulties": [
   "difficulties-10",
   "difficulties-11",
   "difficulties-12"
  ],
  "shares": [
   "shares-10",
   "shares-11",
   "shares-12"
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## apply `apply`


### `POST` project `/apply/project`

> 申请加入项目 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "applyId": "APPL001",
  "status": "待排产",
  "etaHours": 500
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "applyId": "APPL002",
  "status": "备料中",
  "etaHours": 1200
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "applyId": "APPL003",
  "status": "生产中",
  "etaHours": 3000
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "applyId": "APPL004",
  "status": "质检中",
  "etaHours": 8000
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` invite `/apply/invite`

> 邀请成员加入项目 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "sent": 1,
  "failed": [
   {
    "invitee": "invitee-1",
    "reason": "围绕 商用机器人 的说明，覆盖选型、接口与部署要点（示例 1）。"
   },
   {
    "invitee": "invitee-2",
    "reason": "围绕 具身机器人 的说明，覆盖选型、接口与部署要点（示例 2）。"
   },
   {
    "invitee": "invitee-3",
    "reason": "围绕 定制机器人 的说明，覆盖选型、接口与部署要点（示例 3）。"
   }
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "sent": 2,
  "failed": [
   {
    "invitee": "invitee-4",
    "reason": "围绕 机器人模块 的说明，覆盖选型、接口与部署要点（示例 4）。"
   },
   {
    "invitee": "invitee-5",
    "reason": "围绕 机器人组件 的说明，覆盖选型、接口与部署要点（示例 5）。"
   },
   {
    "invitee": "invitee-6",
    "reason": "围绕 模块配件 的说明，覆盖选型、接口与部署要点（示例 6）。"
   }
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "sent": 3,
  "failed": [
   {
    "invitee": "invitee-7",
    "reason": "围绕 五金 的说明，覆盖选型、接口与部署要点（示例 7）。"
   },
   {
    "invitee": "invitee-8",
    "reason": "围绕 塑料3D打印 的说明，覆盖选型、接口与部署要点（示例 8）。"
   },
   {
    "invitee": "invitee-9",
    "reason": "围绕 外壳 的说明，覆盖选型、接口与部署要点（示例 9）。"
   }
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "sent": 4,
  "failed": [
   {
    "invitee": "invitee-10",
    "reason": "围绕 mini机器人 的说明，覆盖选型、接口与部署要点（示例 10）。"
   },
   {
    "invitee": "invitee-11",
    "reason": "围绕 商用机器人 的说明，覆盖选型、接口与部署要点（示例 11）。"
   },
   {
    "invitee": "invitee-12",
    "reason": "围绕 具身机器人 的说明，覆盖选型、接口与部署要点（示例 12）。"
   }
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` invites `/apply/invites`

> 已发出的邀请列表 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "name": "商用机器人 1",
    "avatar": "assets/img/gen/product/commercial_01.svg",
    "status": "待排产",
    "date": "2026-06-01"
   },
   {
    "id": "ID002",
    "name": "具身机器人 2",
    "avatar": "assets/img/gen/product/module_02.svg",
    "status": "备料中",
    "date": "2026-07-02"
   },
   {
    "id": "ID003",
    "name": "定制机器人 3",
    "avatar": "assets/img/gen/product/toy_03.svg",
    "status": "生产中",
    "date": "2026-08-03"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "name": "机器人模块 4",
    "avatar": "assets/img/gen/product/commercial_04.svg",
    "status": "质检中",
    "date": "2026-09-04"
   },
   {
    "id": "ID005",
    "name": "机器人组件 5",
    "avatar": "assets/img/gen/product/module_01.svg",
    "status": "已完工",
    "date": "2026-10-05"
   },
   {
    "id": "ID006",
    "name": "模块配件 6",
    "avatar": "assets/img/gen/product/toy_02.svg",
    "status": "待排产",
    "date": "2026-06-06"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "name": "五金 7",
    "avatar": "assets/img/gen/product/commercial_03.svg",
    "status": "备料中",
    "date": "2026-07-07"
   },
   {
    "id": "ID008",
    "name": "塑料3D打印 8",
    "avatar": "assets/img/gen/product/module_04.svg",
    "status": "生产中",
    "date": "2026-08-08"
   },
   {
    "id": "ID009",
    "name": "外壳 9",
    "avatar": "assets/img/gen/product/toy_01.svg",
    "status": "质检中",
    "date": "2026-09-09"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "name": "mini机器人 10",
    "avatar": "assets/img/gen/product/commercial_02.svg",
    "status": "已完工",
    "date": "2026-10-10"
   },
   {
    "id": "ID011",
    "name": "商用机器人 11",
    "avatar": "assets/img/gen/product/module_03.svg",
    "status": "待排产",
    "date": "2026-06-11"
   },
   {
    "id": "ID012",
    "name": "具身机器人 12",
    "avatar": "assets/img/gen/product/toy_04.svg",
    "status": "备料中",
    "date": "2026-07-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` inviteAction `/apply/invites/:inviteId`

> 撤回 / 催办邀请 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": false
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": false
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` demand `/apply/demand`

> 应征需求 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "bidId": "BID001",
  "rank": 1
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "bidId": "BID002",
  "rank": 2
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "bidId": "BID003",
  "rank": 3
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "bidId": "BID004",
  "rank": 4
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` integration `/apply/integration`

> 承接集成需求 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "applyId": "APPL001",
  "matched": 1,
  "missing": 500
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "applyId": "APPL002",
  "matched": 2,
  "missing": 1200
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "applyId": "APPL003",
  "matched": 3,
  "missing": 3000
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "applyId": "APPL004",
  "matched": 4,
  "missing": 8000
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` test `/apply/test`

> 承接测试任务 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "applyId": "APPL001"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "applyId": "APPL002"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "applyId": "APPL003"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "applyId": "APPL004"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` matching `/apply/matching`

> 能力匹配度（用于申请页展示匹配条） · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "zh": "zh-1",
    "en": "en-1",
    "icon": "assets/img/gen/product/commercial_01.svg",
    "pct": 1
   },
   {
    "zh": "zh-2",
    "en": "en-2",
    "icon": "assets/img/gen/product/module_02.svg",
    "pct": 2
   },
   {
    "zh": "zh-3",
    "en": "en-3",
    "icon": "assets/img/gen/product/toy_03.svg",
    "pct": 3
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "zh": "zh-4",
    "en": "en-4",
    "icon": "assets/img/gen/product/commercial_04.svg",
    "pct": 4
   },
   {
    "zh": "zh-5",
    "en": "en-5",
    "icon": "assets/img/gen/product/module_01.svg",
    "pct": 5
   },
   {
    "zh": "zh-6",
    "en": "en-6",
    "icon": "assets/img/gen/product/toy_02.svg",
    "pct": 6
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "zh": "zh-7",
    "en": "en-7",
    "icon": "assets/img/gen/product/commercial_03.svg",
    "pct": 7
   },
   {
    "zh": "zh-8",
    "en": "en-8",
    "icon": "assets/img/gen/product/module_04.svg",
    "pct": 8
   },
   {
    "zh": "zh-9",
    "en": "en-9",
    "icon": "assets/img/gen/product/toy_01.svg",
    "pct": 9
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "zh": "zh-10",
    "en": "en-10",
    "icon": "assets/img/gen/product/commercial_02.svg",
    "pct": 1
   },
   {
    "zh": "zh-11",
    "en": "en-11",
    "icon": "assets/img/gen/product/module_03.svg",
    "pct": 2
   },
   {
    "zh": "zh-12",
    "en": "en-12",
    "icon": "assets/img/gen/product/toy_04.svg",
    "pct": 3
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` bidRefs `/apply/bid-refs`

> 同类应征参考报价 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "name": "商用机器人 1",
    "avatar": "assets/img/gen/product/commercial_01.svg",
    "quote": "quote-1",
    "days": 500
   },
   {
    "name": "具身机器人 2",
    "avatar": "assets/img/gen/product/module_02.svg",
    "quote": "quote-2",
    "days": 1200
   },
   {
    "name": "定制机器人 3",
    "avatar": "assets/img/gen/product/toy_03.svg",
    "quote": "quote-3",
    "days": 3000
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "name": "机器人模块 4",
    "avatar": "assets/img/gen/product/commercial_04.svg",
    "quote": "quote-4",
    "days": 8000
   },
   {
    "name": "机器人组件 5",
    "avatar": "assets/img/gen/product/module_01.svg",
    "quote": "quote-5",
    "days": 20000
   },
   {
    "name": "模块配件 6",
    "avatar": "assets/img/gen/product/toy_02.svg",
    "quote": "quote-6",
    "days": 500
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "name": "五金 7",
    "avatar": "assets/img/gen/product/commercial_03.svg",
    "quote": "quote-7",
    "days": 1200
   },
   {
    "name": "塑料3D打印 8",
    "avatar": "assets/img/gen/product/module_04.svg",
    "quote": "quote-8",
    "days": 3000
   },
   {
    "name": "外壳 9",
    "avatar": "assets/img/gen/product/toy_01.svg",
    "quote": "quote-9",
    "days": 8000
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "name": "mini机器人 10",
    "avatar": "assets/img/gen/product/commercial_02.svg",
    "quote": "quote-10",
    "days": 20000
   },
   {
    "name": "商用机器人 11",
    "avatar": "assets/img/gen/product/module_03.svg",
    "quote": "quote-11",
    "days": 500
   },
   {
    "name": "具身机器人 12",
    "avatar": "assets/img/gen/product/toy_04.svg",
    "quote": "quote-12",
    "days": 1200
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## enroll `enroll`


### `POST` course `/enroll/course`

> 课程报名 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "orderId": "WO6001",
  "payable": 1,
  "expireAt": "2026-06-01T09:00:00+08:00"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "orderId": "WO6002",
  "payable": 2,
  "expireAt": "2026-06-02T10:07:13+08:00"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "orderId": "WO6003",
  "payable": 3,
  "expireAt": "2026-06-03T11:14:26+08:00"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "orderId": "WO6004",
  "payable": 4,
  "expireAt": "2026-06-04T12:21:39+08:00"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` contest `/enroll/contest`

> 赛事报名 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "signupId": "SIGN001",
  "workNo": "WORK001"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "signupId": "SIGN002",
  "workNo": "WORK002"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "signupId": "SIGN003",
  "workNo": "WORK003"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "signupId": "SIGN004",
  "workNo": "WORK004"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` contestInfo `/enroll/contest/:contestId`

> 赛事详情与规则 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "info": [
   {
    "k": "物料费",
    "v": "¥1,280.00"
   },
   {
    "k": "人工费",
    "v": "¥860.00"
   },
   {
    "k": "设备折旧",
    "v": "¥420.00"
   }
  ],
  "tracks": [
   "待处理"
  ],
  "rules": [
   {
    "q": "q-1",
    "a": "a-1"
   },
   {
    "q": "q-2",
    "a": "a-2"
   },
   {
    "q": "q-3",
    "a": "a-3"
   }
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "info": [
   {
    "k": "制造费用",
    "v": "¥310.00"
   },
   {
    "k": "管理费",
    "v": "¥240.00"
   },
   {
    "k": "物料费",
    "v": "¥1,280.00"
   }
  ],
  "tracks": [
   "待处理",
   "进行中"
  ],
  "rules": [
   {
    "q": "q-4",
    "a": "a-4"
   },
   {
    "q": "q-5",
    "a": "a-5"
   },
   {
    "q": "q-6",
    "a": "a-6"
   }
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "info": [
   {
    "k": "人工费",
    "v": "¥860.00"
   },
   {
    "k": "设备折旧",
    "v": "¥420.00"
   },
   {
    "k": "制造费用",
    "v": "¥310.00"
   }
  ],
  "tracks": [
   "待处理",
   "进行中",
   "已完结"
  ],
  "rules": [
   {
    "q": "q-7",
    "a": "a-7"
   },
   {
    "q": "q-8",
    "a": "a-8"
   },
   {
    "q": "q-9",
    "a": "a-9"
   }
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "info": [
   {
    "k": "管理费",
    "v": "¥240.00"
   },
   {
    "k": "物料费",
    "v": "¥1,280.00"
   },
   {
    "k": "人工费",
    "v": "¥860.00"
   }
  ],
  "tracks": [
   "待处理"
  ],
  "rules": [
   {
    "q": "q-10",
    "a": "a-10"
   },
   {
    "q": "q-11",
    "a": "a-11"
   },
   {
    "q": "q-12",
    "a": "a-12"
   }
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## resource `resource`


### `POST` pack `/resource/pack`

> 创建打包任务 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "jobId": "JOB001",
  "files": 1,
  "rawSize": 1,
  "estSize": 1,
  "etaSec": 1,
  "expireDays": 500
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "jobId": "JOB002",
  "files": 2,
  "rawSize": 2,
  "estSize": 2,
  "etaSec": 2,
  "expireDays": 1200
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "jobId": "JOB003",
  "files": 3,
  "rawSize": 3,
  "estSize": 3,
  "etaSec": 3,
  "expireDays": 3000
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "jobId": "JOB004",
  "files": 4,
  "rawSize": 4,
  "estSize": 4,
  "etaSec": 4,
  "expireDays": 8000
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` packStatus `/resource/pack/:jobId`

> 打包任务进度与结果 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "jobId": "JOB001",
  "status": "待排产",
  "progress": 35,
  "size": "size-1",
  "url": "assets/img/gen/product/commercial_01.svg"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "jobId": "JOB002",
  "status": "备料中",
  "progress": 52,
  "size": "size-2",
  "url": "assets/img/gen/product/module_02.svg"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "jobId": "JOB003",
  "status": "生产中",
  "progress": 68,
  "size": "size-3",
  "url": "assets/img/gen/product/toy_03.svg"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "jobId": "JOB004",
  "status": "质检中",
  "progress": 84,
  "size": "size-4",
  "url": "assets/img/gen/product/commercial_04.svg"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` packHistory `/resource/pack/history`

> 历史打包任务 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "status": "待排产",
    "date": "2026-06-01",
    "size": "size-1"
   },
   {
    "id": "ID002",
    "status": "备料中",
    "date": "2026-07-02",
    "size": "size-2"
   },
   {
    "id": "ID003",
    "status": "生产中",
    "date": "2026-08-03",
    "size": "size-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "status": "质检中",
    "date": "2026-09-04",
    "size": "size-4"
   },
   {
    "id": "ID005",
    "status": "已完工",
    "date": "2026-10-05",
    "size": "size-5"
   },
   {
    "id": "ID006",
    "status": "待排产",
    "date": "2026-06-06",
    "size": "size-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "status": "备料中",
    "date": "2026-07-07",
    "size": "size-7"
   },
   {
    "id": "ID008",
    "status": "生产中",
    "date": "2026-08-08",
    "size": "size-8"
   },
   {
    "id": "ID009",
    "status": "质检中",
    "date": "2026-09-09",
    "size": "size-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "status": "已完工",
    "date": "2026-10-10",
    "size": "size-10"
   },
   {
    "id": "ID011",
    "status": "待排产",
    "date": "2026-06-11",
    "size": "size-11"
   },
   {
    "id": "ID012",
    "status": "备料中",
    "date": "2026-07-12",
    "size": "size-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` createToken `/resource/tokens`

> 创建下载令牌 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "token": "eyJhbGciOiJIUzI1NiJ9.000000000000000000000000000000005f3a91c7d2e4b680.00000000000000001a2b3c4d5e6f7081",
  "expireAt": "2026-06-01T09:00:00+08:00"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "token": "eyJhbGciOiJIUzI1NiJ9.000000000000000000000000000000005f3a91c7d2e4d56f.00000000000000001a2b3c4d5e71099a",
  "expireAt": "2026-06-02T10:07:13+08:00"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "token": "eyJhbGciOiJIUzI1NiJ9.000000000000000000000000000000005f3a91c7d2e4f45e.00000000000000001a2b3c4d5e72a2b3",
  "expireAt": "2026-06-03T11:14:26+08:00"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "token": "eyJhbGciOiJIUzI1NiJ9.000000000000000000000000000000005f3a91c7d2e5134d.00000000000000001a2b3c4d5e743bcc",
  "expireAt": "2026-06-04T12:21:39+08:00"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` tokens `/resource/tokens`

> 令牌列表 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "zh": "zh-1",
    "en": "en-1",
    "used": 500,
    "left": "left-1"
   },
   {
    "zh": "zh-2",
    "en": "en-2",
    "used": 1200,
    "left": "left-2"
   },
   {
    "zh": "zh-3",
    "en": "en-3",
    "used": 3000,
    "left": "left-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "zh": "zh-4",
    "en": "en-4",
    "used": 8000,
    "left": "left-4"
   },
   {
    "zh": "zh-5",
    "en": "en-5",
    "used": 20000,
    "left": "left-5"
   },
   {
    "zh": "zh-6",
    "en": "en-6",
    "used": 500,
    "left": "left-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "zh": "zh-7",
    "en": "en-7",
    "used": 1200,
    "left": "left-7"
   },
   {
    "zh": "zh-8",
    "en": "en-8",
    "used": 3000,
    "left": "left-8"
   },
   {
    "zh": "zh-9",
    "en": "en-9",
    "used": 8000,
    "left": "left-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "zh": "zh-10",
    "en": "en-10",
    "used": 20000,
    "left": "left-10"
   },
   {
    "zh": "zh-11",
    "en": "en-11",
    "used": 500,
    "left": "left-11"
   },
   {
    "zh": "zh-12",
    "en": "en-12",
    "used": 1200,
    "left": "left-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `DELETE` revokeToken `/resource/tokens/:tokenId`

> 吊销令牌 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": false
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": false
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` withdraw `/funds/withdraw`

> 提现 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "withdrawId": "WITH001",
  "fee": 39800,
  "net": 1,
  "eta": "2026-06-01"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "withdrawId": "WITH002",
  "fee": 128000,
  "net": 2,
  "eta": "2026-07-02"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "withdrawId": "WITH003",
  "fee": 256000,
  "net": 3,
  "eta": "2026-08-03"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "withdrawId": "WITH004",
  "fee": 498000,
  "net": 4,
  "eta": "2026-09-04"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` accounts `/funds/accounts`

> 到账账户列表 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "zh": "zh-1",
    "en": "en-1",
    "sub": "sub-1",
    "on": true
   },
   {
    "id": "ID002",
    "zh": "zh-2",
    "en": "en-2",
    "sub": "sub-2",
    "on": false
   },
   {
    "id": "ID003",
    "zh": "zh-3",
    "en": "en-3",
    "sub": "sub-3",
    "on": true
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "zh": "zh-4",
    "en": "en-4",
    "sub": "sub-4",
    "on": false
   },
   {
    "id": "ID005",
    "zh": "zh-5",
    "en": "en-5",
    "sub": "sub-5",
    "on": true
   },
   {
    "id": "ID006",
    "zh": "zh-6",
    "en": "en-6",
    "sub": "sub-6",
    "on": false
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "zh": "zh-7",
    "en": "en-7",
    "sub": "sub-7",
    "on": true
   },
   {
    "id": "ID008",
    "zh": "zh-8",
    "en": "en-8",
    "sub": "sub-8",
    "on": false
   },
   {
    "id": "ID009",
    "zh": "zh-9",
    "en": "en-9",
    "sub": "sub-9",
    "on": true
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "zh": "zh-10",
    "en": "en-10",
    "sub": "sub-10",
    "on": false
   },
   {
    "id": "ID011",
    "zh": "zh-11",
    "en": "en-11",
    "sub": "sub-11",
    "on": true
   },
   {
    "id": "ID012",
    "zh": "zh-12",
    "en": "en-12",
    "sub": "sub-12",
    "on": false
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` payResult `/funds/pay/:orderId`

> 支付结果查询 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "info": [
   {
    "k": "物料费",
    "v": "¥1,280.00"
   },
   {
    "k": "人工费",
    "v": "¥860.00"
   },
   {
    "k": "设备折旧",
    "v": "¥420.00"
   }
  ],
  "flow": [
   {
    "t": "t-1",
    "te": "te-1",
    "d": "d-1",
    "on": true
   },
   {
    "t": "t-2",
    "te": "te-2",
    "d": "d-2",
    "on": false
   },
   {
    "t": "t-3",
    "te": "te-3",
    "d": "d-3",
    "on": true
   }
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "info": [
   {
    "k": "制造费用",
    "v": "¥310.00"
   },
   {
    "k": "管理费",
    "v": "¥240.00"
   },
   {
    "k": "物料费",
    "v": "¥1,280.00"
   }
  ],
  "flow": [
   {
    "t": "t-4",
    "te": "te-4",
    "d": "d-4",
    "on": false
   },
   {
    "t": "t-5",
    "te": "te-5",
    "d": "d-5",
    "on": true
   },
   {
    "t": "t-6",
    "te": "te-6",
    "d": "d-6",
    "on": false
   }
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "info": [
   {
    "k": "人工费",
    "v": "¥860.00"
   },
   {
    "k": "设备折旧",
    "v": "¥420.00"
   },
   {
    "k": "制造费用",
    "v": "¥310.00"
   }
  ],
  "flow": [
   {
    "t": "t-7",
    "te": "te-7",
    "d": "d-7",
    "on": true
   },
   {
    "t": "t-8",
    "te": "te-8",
    "d": "d-8",
    "on": false
   },
   {
    "t": "t-9",
    "te": "te-9",
    "d": "d-9",
    "on": true
   }
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "info": [
   {
    "k": "管理费",
    "v": "¥240.00"
   },
   {
    "k": "物料费",
    "v": "¥1,280.00"
   },
   {
    "k": "人工费",
    "v": "¥860.00"
   }
  ],
  "flow": [
   {
    "t": "t-10",
    "te": "te-10",
    "d": "d-10",
    "on": false
   },
   {
    "t": "t-11",
    "te": "te-11",
    "d": "d-11",
    "on": true
   },
   {
    "t": "t-12",
    "te": "te-12",
    "d": "d-12",
    "on": false
   }
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## review `review`


### `GET` targets `/reviews/targets`

> 可评价订单列表 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "productId": "P1001",
    "name": "商用机器人 1",
    "brand": "智元工场",
    "order": "order-1"
   },
   {
    "productId": "P1002",
    "name": "具身机器人 2",
    "brand": "开源纪元",
    "order": "order-2"
   },
   {
    "productId": "P1003",
    "name": "定制机器人 3",
    "brand": "星辰机甲",
    "order": "order-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "productId": "P1004",
    "name": "机器人模块 4",
    "brand": "极客造物",
    "order": "order-4"
   },
   {
    "productId": "P1005",
    "name": "机器人组件 5",
    "brand": "灵犀机器人",
    "order": "order-5"
   },
   {
    "productId": "P1006",
    "name": "模块配件 6",
    "brand": "红蚁动力",
    "order": "order-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "productId": "P1007",
    "name": "五金 7",
    "brand": "蓝鲸智造",
    "order": "order-7"
   },
   {
    "productId": "P1008",
    "name": "塑料3D打印 8",
    "brand": "铁甲开源",
    "order": "order-8"
   },
   {
    "productId": "P1009",
    "name": "外壳 9",
    "brand": "智元工场",
    "order": "order-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "productId": "P1010",
    "name": "mini机器人 10",
    "brand": "开源纪元",
    "order": "order-10"
   },
   {
    "productId": "P1011",
    "name": "商用机器人 11",
    "brand": "星辰机甲",
    "order": "order-11"
   },
   {
    "productId": "P1012",
    "name": "具身机器人 12",
    "brand": "极客造物",
    "order": "order-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` create `/reviews`

> 提交评价 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "reviewId": "RV8001",
  "editableUntil": "editableUntil-1"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "reviewId": "RV8002",
  "editableUntil": "editableUntil-2"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "reviewId": "RV8003",
  "editableUntil": "editableUntil-3"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "reviewId": "RV8004",
  "editableUntil": "editableUntil-4"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## design `design`


### `GET` demands `/design/demands`

> 设计需求列表 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "title": "商用机器人 1",
    "titleEn": "Commercial Robot Sample 1",
    "cat": "商用机器人",
    "budget": 39800,
    "deadline": "2026-06-01",
    "bids": 1,
    "status": "待排产",
    "img": "assets/img/gen/product/commercial_01.svg"
   },
   {
    "id": "ID002",
    "title": "具身机器人 2",
    "titleEn": "Embodied Robot Sample 2",
    "cat": "具身机器人",
    "budget": 128000,
    "deadline": "2026-07-02",
    "bids": 2,
    "status": "备料中",
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "ID003",
    "title": "定制机器人 3",
    "titleEn": "Custom Robot Sample 3",
    "cat": "定制机器人",
    "budget": 256000,
    "deadline": "2026-08-03",
    "bids": 3,
    "status": "生产中",
    "img": "assets/img/gen/product/toy_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "title": "机器人模块 4",
    "titleEn": "Robot Module Sample 4",
    "cat": "机器人模块",
    "budget": 498000,
    "deadline": "2026-09-04",
    "bids": 4,
    "status": "质检中",
    "img": "assets/img/gen/product/commercial_04.svg"
   },
   {
    "id": "ID005",
    "title": "机器人组件 5",
    "titleEn": "Robot Component Sample 5",
    "cat": "机器人组件",
    "budget": 1280000,
    "deadline": "2026-10-05",
    "bids": 5,
    "status": "已完工",
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "ID006",
    "title": "模块配件 6",
    "titleEn": "Module Accessory Sample 6",
    "cat": "模块配件",
    "budget": 39800,
    "deadline": "2026-06-06",
    "bids": 6,
    "status": "待排产",
    "img": "assets/img/gen/product/toy_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "title": "五金 7",
    "titleEn": "Hardware Sample 7",
    "cat": "五金",
    "budget": 128000,
    "deadline": "2026-07-07",
    "bids": 7,
    "status": "备料中",
    "img": "assets/img/gen/product/commercial_03.svg"
   },
   {
    "id": "ID008",
    "title": "塑料3D打印 8",
    "titleEn": "3D Printing Sample 8",
    "cat": "塑料3D打印",
    "budget": 256000,
    "deadline": "2026-08-08",
    "bids": 8,
    "status": "生产中",
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "ID009",
    "title": "外壳 9",
    "titleEn": "Enclosure Sample 9",
    "cat": "外壳",
    "budget": 498000,
    "deadline": "2026-09-09",
    "bids": 9,
    "status": "质检中",
    "img": "assets/img/gen/product/toy_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "title": "mini机器人 10",
    "titleEn": "Mini Bots Sample 10",
    "cat": "mini机器人",
    "budget": 1280000,
    "deadline": "2026-10-10",
    "bids": 1,
    "status": "已完工",
    "img": "assets/img/gen/product/commercial_02.svg"
   },
   {
    "id": "ID011",
    "title": "商用机器人 11",
    "titleEn": "Commercial Robot Sample 11",
    "cat": "商用机器人",
    "budget": 39800,
    "deadline": "2026-06-11",
    "bids": 2,
    "status": "待排产",
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "ID012",
    "title": "具身机器人 12",
    "titleEn": "Embodied Robot Sample 12",
    "cat": "具身机器人",
    "budget": 128000,
    "deadline": "2026-07-12",
    "bids": 3,
    "status": "备料中",
    "img": "assets/img/gen/product/toy_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` demandDetail `/design/demands/:id`

> 设计需求详情 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "title": "商用机器人 1",
  "cat": "商用机器人",
  "budget": 39800,
  "deadline": "2026-06-01",
  "status": "待排产",
  "desc": "围绕 商用机器人 的说明，覆盖选型、接口与部署要点（示例 1）。",
  "deliverables": [
   "待处理"
  ],
  "bidders": [
   "待处理"
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "title": "具身机器人 2",
  "cat": "具身机器人",
  "budget": 128000,
  "deadline": "2026-07-02",
  "status": "备料中",
  "desc": "围绕 具身机器人 的说明，覆盖选型、接口与部署要点（示例 2）。",
  "deliverables": [
   "待处理",
   "进行中"
  ],
  "bidders": [
   "待处理",
   "进行中"
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "title": "定制机器人 3",
  "cat": "定制机器人",
  "budget": 256000,
  "deadline": "2026-08-03",
  "status": "生产中",
  "desc": "围绕 定制机器人 的说明，覆盖选型、接口与部署要点（示例 3）。",
  "deliverables": [
   "待处理",
   "进行中",
   "已完结"
  ],
  "bidders": [
   "待处理",
   "进行中",
   "已完结"
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "title": "机器人模块 4",
  "cat": "机器人模块",
  "budget": 498000,
  "deadline": "2026-09-04",
  "status": "质检中",
  "desc": "围绕 机器人模块 的说明，覆盖选型、接口与部署要点（示例 4）。",
  "deliverables": [
   "待处理"
  ],
  "bidders": [
   "待处理"
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` publishDemand `/design/demands`

> 发布设计需求 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "status": "待排产"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "status": "备料中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "status": "生产中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "status": "质检中"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` bidDemand `/design/demands/:demandId`

> 应征设计需求 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "bidId": "BID001"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "bidId": "BID002"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "bidId": "BID003"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "bidId": "BID004"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` tasks `/design/tasks`

> 设计任务列表（在研） · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "name": "商用机器人 1",
    "progress": 35,
    "status": "待排产",
    "due": "due-1",
    "img": "assets/img/gen/product/commercial_01.svg"
   },
   {
    "id": "ID002",
    "name": "具身机器人 2",
    "progress": 52,
    "status": "备料中",
    "due": "due-2",
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "ID003",
    "name": "定制机器人 3",
    "progress": 68,
    "status": "生产中",
    "due": "due-3",
    "img": "assets/img/gen/product/toy_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "name": "机器人模块 4",
    "progress": 84,
    "status": "质检中",
    "due": "due-4",
    "img": "assets/img/gen/product/commercial_04.svg"
   },
   {
    "id": "ID005",
    "name": "机器人组件 5",
    "progress": 96,
    "status": "已完工",
    "due": "due-5",
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "ID006",
    "name": "模块配件 6",
    "progress": 35,
    "status": "待排产",
    "due": "due-6",
    "img": "assets/img/gen/product/toy_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "name": "五金 7",
    "progress": 52,
    "status": "备料中",
    "due": "due-7",
    "img": "assets/img/gen/product/commercial_03.svg"
   },
   {
    "id": "ID008",
    "name": "塑料3D打印 8",
    "progress": 68,
    "status": "生产中",
    "due": "due-8",
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "ID009",
    "name": "外壳 9",
    "progress": 84,
    "status": "质检中",
    "due": "due-9",
    "img": "assets/img/gen/product/toy_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "name": "mini机器人 10",
    "progress": 96,
    "status": "已完工",
    "due": "due-10",
    "img": "assets/img/gen/product/commercial_02.svg"
   },
   {
    "id": "ID011",
    "name": "商用机器人 11",
    "progress": 35,
    "status": "待排产",
    "due": "due-11",
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "ID012",
    "name": "具身机器人 12",
    "progress": 52,
    "status": "备料中",
    "due": "due-12",
    "img": "assets/img/gen/product/toy_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` drawings `/design/drawings`

> 图纸库列表 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "name": "商用机器人 1",
    "format": "format-1",
    "version": "v1.0",
    "size": "size-1",
    "img": "assets/img/gen/product/commercial_01.svg"
   },
   {
    "id": "ID002",
    "name": "具身机器人 2",
    "format": "format-2",
    "version": "白班",
    "size": "size-2",
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "ID003",
    "name": "定制机器人 3",
    "format": "format-3",
    "version": "ISO9283",
    "size": "size-3",
    "img": "assets/img/gen/product/toy_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "name": "机器人模块 4",
    "format": "format-4",
    "version": "2026-06",
    "size": "size-4",
    "img": "assets/img/gen/product/commercial_04.svg"
   },
   {
    "id": "ID005",
    "name": "机器人组件 5",
    "format": "format-5",
    "version": "±0.02mm",
    "size": "size-5",
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "ID006",
    "name": "模块配件 6",
    "format": "format-6",
    "version": "v1.0",
    "size": "size-6",
    "img": "assets/img/gen/product/toy_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "name": "五金 7",
    "format": "format-7",
    "version": "白班",
    "size": "size-7",
    "img": "assets/img/gen/product/commercial_03.svg"
   },
   {
    "id": "ID008",
    "name": "塑料3D打印 8",
    "format": "format-8",
    "version": "ISO9283",
    "size": "size-8",
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "ID009",
    "name": "外壳 9",
    "format": "format-9",
    "version": "2026-06",
    "size": "size-9",
    "img": "assets/img/gen/product/toy_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "name": "mini机器人 10",
    "format": "format-10",
    "version": "±0.02mm",
    "size": "size-10",
    "img": "assets/img/gen/product/commercial_02.svg"
   },
   {
    "id": "ID011",
    "name": "商用机器人 11",
    "format": "format-11",
    "version": "v1.0",
    "size": "size-11",
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "ID012",
    "name": "具身机器人 12",
    "format": "format-12",
    "version": "白班",
    "size": "size-12",
    "img": "assets/img/gen/product/toy_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` versions `/design/drawings/:drawingId`

> 图纸版本历史 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "v": "¥1,280.00",
    "note": "围绕 商用机器人 的说明，覆盖选型、接口与部署要点（示例 1）。",
    "author": "author-1",
    "date": "2026-06-01"
   },
   {
    "v": "¥860.00",
    "note": "围绕 具身机器人 的说明，覆盖选型、接口与部署要点（示例 2）。",
    "author": "author-2",
    "date": "2026-07-02"
   },
   {
    "v": "¥420.00",
    "note": "围绕 定制机器人 的说明，覆盖选型、接口与部署要点（示例 3）。",
    "author": "author-3",
    "date": "2026-08-03"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "v": "¥310.00",
    "note": "围绕 机器人模块 的说明，覆盖选型、接口与部署要点（示例 4）。",
    "author": "author-4",
    "date": "2026-09-04"
   },
   {
    "v": "¥240.00",
    "note": "围绕 机器人组件 的说明，覆盖选型、接口与部署要点（示例 5）。",
    "author": "author-5",
    "date": "2026-10-05"
   },
   {
    "v": "¥1,280.00",
    "note": "围绕 模块配件 的说明，覆盖选型、接口与部署要点（示例 6）。",
    "author": "author-6",
    "date": "2026-06-06"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "v": "¥860.00",
    "note": "围绕 五金 的说明，覆盖选型、接口与部署要点（示例 7）。",
    "author": "author-7",
    "date": "2026-07-07"
   },
   {
    "v": "¥420.00",
    "note": "围绕 塑料3D打印 的说明，覆盖选型、接口与部署要点（示例 8）。",
    "author": "author-8",
    "date": "2026-08-08"
   },
   {
    "v": "¥310.00",
    "note": "围绕 外壳 的说明，覆盖选型、接口与部署要点（示例 9）。",
    "author": "author-9",
    "date": "2026-09-09"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "v": "¥240.00",
    "note": "围绕 mini机器人 的说明，覆盖选型、接口与部署要点（示例 10）。",
    "author": "author-10",
    "date": "2026-10-10"
   },
   {
    "v": "¥1,280.00",
    "note": "围绕 商用机器人 的说明，覆盖选型、接口与部署要点（示例 11）。",
    "author": "author-11",
    "date": "2026-06-11"
   },
   {
    "v": "¥860.00",
    "note": "围绕 具身机器人 的说明，覆盖选型、接口与部署要点（示例 12）。",
    "author": "author-12",
    "date": "2026-07-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` reviews `/design/reviews`

> 设计评审列表 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "title": "商用机器人 1",
    "result": "result-1",
    "reviewers": 1,
    "date": "2026-06-01",
    "opinions": [
     "待处理"
    ]
   },
   {
    "id": "ID002",
    "title": "具身机器人 2",
    "result": "result-2",
    "reviewers": 2,
    "date": "2026-07-02",
    "opinions": [
     "待处理",
     "进行中"
    ]
   },
   {
    "id": "ID003",
    "title": "定制机器人 3",
    "result": "result-3",
    "reviewers": 3,
    "date": "2026-08-03",
    "opinions": [
     "待处理",
     "进行中",
     "已完结"
    ]
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "title": "机器人模块 4",
    "result": "result-4",
    "reviewers": 4,
    "date": "2026-09-04",
    "opinions": [
     "待处理"
    ]
   },
   {
    "id": "ID005",
    "title": "机器人组件 5",
    "result": "result-5",
    "reviewers": 5,
    "date": "2026-10-05",
    "opinions": [
     "待处理",
     "进行中"
    ]
   },
   {
    "id": "ID006",
    "title": "模块配件 6",
    "result": "result-6",
    "reviewers": 6,
    "date": "2026-06-06",
    "opinions": [
     "待处理",
     "进行中",
     "已完结"
    ]
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "title": "五金 7",
    "result": "result-7",
    "reviewers": 7,
    "date": "2026-07-07",
    "opinions": [
     "待处理"
    ]
   },
   {
    "id": "ID008",
    "title": "塑料3D打印 8",
    "result": "result-8",
    "reviewers": 8,
    "date": "2026-08-08",
    "opinions": [
     "待处理",
     "进行中"
    ]
   },
   {
    "id": "ID009",
    "title": "外壳 9",
    "result": "result-9",
    "reviewers": 9,
    "date": "2026-09-09",
    "opinions": [
     "待处理",
     "进行中",
     "已完结"
    ]
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "title": "mini机器人 10",
    "result": "result-10",
    "reviewers": 1,
    "date": "2026-10-10",
    "opinions": [
     "待处理"
    ]
   },
   {
    "id": "ID011",
    "title": "商用机器人 11",
    "result": "result-11",
    "reviewers": 2,
    "date": "2026-06-11",
    "opinions": [
     "待处理",
     "进行中"
    ]
   },
   {
    "id": "ID012",
    "title": "具身机器人 12",
    "result": "result-12",
    "reviewers": 3,
    "date": "2026-07-12",
    "opinions": [
     "待处理",
     "进行中",
     "已完结"
    ]
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` startReview `/design/reviews`

> 发起设计评审 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "reviewId": "RV8001"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "reviewId": "RV8002"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "reviewId": "RV8003"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "reviewId": "RV8004"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` reviewVerdict `/design/reviews/:reviewId`

> 提交评审判定 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": true,
  "frozenVersion": "frozenVersion-1"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": false,
  "frozenVersion": "frozenVersion-2"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": true,
  "frozenVersion": "frozenVersion-3"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": false,
  "frozenVersion": "frozenVersion-4"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` boms `/design/boms`

> 设计 BOM 列表 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "name": "商用机器人 1",
    "total": 120,
    "ready": 500,
    "missing": 500,
    "risk": "risk-1",
    "items": [
     {
      "id": 1,
      "name": "Object-1"
     },
     {
      "id": 2,
      "name": "Object-2"
     },
     {
      "id": 3,
      "name": "Object-3"
     }
    ]
   },
   {
    "id": "ID002",
    "name": "具身机器人 2",
    "total": 486,
    "ready": 1200,
    "missing": 1200,
    "risk": "risk-2",
    "items": [
     {
      "id": 4,
      "name": "Object-4"
     },
     {
      "id": 5,
      "name": "Object-5"
     },
     {
      "id": 6,
      "name": "Object-6"
     }
    ]
   },
   {
    "id": "ID003",
    "name": "定制机器人 3",
    "total": 1350,
    "ready": 3000,
    "missing": 3000,
    "risk": "risk-3",
    "items": [
     {
      "id": 7,
      "name": "Object-7"
     },
     {
      "id": 8,
      "name": "Object-8"
     },
     {
      "id": 9,
      "name": "Object-9"
     }
    ]
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "name": "机器人模块 4",
    "total": 3200,
    "ready": 8000,
    "missing": 8000,
    "risk": "risk-4",
    "items": [
     {
      "id": 10,
      "name": "Object-10"
     },
     {
      "id": 11,
      "name": "Object-11"
     },
     {
      "id": 12,
      "name": "Object-12"
     }
    ]
   },
   {
    "id": "ID005",
    "name": "机器人组件 5",
    "total": 8640,
    "ready": 20000,
    "missing": 20000,
    "risk": "risk-5",
    "items": [
     {
      "id": 13,
      "name": "Object-13"
     },
     {
      "id": 14,
      "name": "Object-14"
     },
     {
      "id": 15,
      "name": "Object-15"
     }
    ]
   },
   {
    "id": "ID006",
    "name": "模块配件 6",
    "total": 120,
    "ready": 500,
    "missing": 500,
    "risk": "risk-6",
    "items": [
     {
      "id": 16,
      "name": "Object-16"
     },
     {
      "id": 17,
      "name": "Object-17"
     },
     {
      "id": 18,
      "name": "Object-18"
     }
    ]
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "name": "五金 7",
    "total": 486,
    "ready": 1200,
    "missing": 1200,
    "risk": "risk-7",
    "items": [
     {
      "id": 19,
      "name": "Object-19"
     },
     {
      "id": 20,
      "name": "Object-20"
     },
     {
      "id": 1,
      "name": "Object-21"
     }
    ]
   },
   {
    "id": "ID008",
    "name": "塑料3D打印 8",
    "total": 1350,
    "ready": 3000,
    "missing": 3000,
    "risk": "risk-8",
    "items": [
     {
      "id": 2,
      "name": "Object-22"
     },
     {
      "id": 3,
      "name": "Object-23"
     },
     {
      "id": 4,
      "name": "Object-24"
     }
    ]
   },
   {
    "id": "ID009",
    "name": "外壳 9",
    "total": 3200,
    "ready": 8000,
    "missing": 8000,
    "risk": "risk-9",
    "items": [
     {
      "id": 5,
      "name": "Object-25"
     },
     {
      "id": 6,
      "name": "Object-26"
     },
     {
      "id": 7,
      "name": "Object-27"
     }
    ]
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "name": "mini机器人 10",
    "total": 8640,
    "ready": 20000,
    "missing": 20000,
    "risk": "risk-10",
    "items": [
     {
      "id": 8,
      "name": "Object-28"
     },
     {
      "id": 9,
      "name": "Object-29"
     },
     {
      "id": 10,
      "name": "Object-30"
     }
    ]
   },
   {
    "id": "ID011",
    "name": "商用机器人 11",
    "total": 120,
    "ready": 500,
    "missing": 500,
    "risk": "risk-11",
    "items": [
     {
      "id": 11,
      "name": "Object-31"
     },
     {
      "id": 12,
      "name": "Object-32"
     },
     {
      "id": 13,
      "name": "Object-33"
     }
    ]
   },
   {
    "id": "ID012",
    "name": "具身机器人 12",
    "total": 486,
    "ready": 1200,
    "missing": 1200,
    "risk": "risk-12",
    "items": [
     {
      "id": 14,
      "name": "Object-34"
     },
     {
      "id": 15,
      "name": "Object-35"
     },
     {
      "id": 16,
      "name": "Object-36"
     }
    ]
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` members `/design/demands/:demandId`

> 协作成员列表 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "name": "商用机器人 1",
    "avatar": "assets/img/gen/product/commercial_01.svg",
    "role": "role-1",
    "status": "待排产"
   },
   {
    "id": "ID002",
    "name": "具身机器人 2",
    "avatar": "assets/img/gen/product/module_02.svg",
    "role": "role-2",
    "status": "备料中"
   },
   {
    "id": "ID003",
    "name": "定制机器人 3",
    "avatar": "assets/img/gen/product/toy_03.svg",
    "role": "role-3",
    "status": "生产中"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "name": "机器人模块 4",
    "avatar": "assets/img/gen/product/commercial_04.svg",
    "role": "role-4",
    "status": "质检中"
   },
   {
    "id": "ID005",
    "name": "机器人组件 5",
    "avatar": "assets/img/gen/product/module_01.svg",
    "role": "role-5",
    "status": "已完工"
   },
   {
    "id": "ID006",
    "name": "模块配件 6",
    "avatar": "assets/img/gen/product/toy_02.svg",
    "role": "role-6",
    "status": "待排产"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "name": "五金 7",
    "avatar": "assets/img/gen/product/commercial_03.svg",
    "role": "role-7",
    "status": "备料中"
   },
   {
    "id": "ID008",
    "name": "塑料3D打印 8",
    "avatar": "assets/img/gen/product/module_04.svg",
    "role": "role-8",
    "status": "生产中"
   },
   {
    "id": "ID009",
    "name": "外壳 9",
    "avatar": "assets/img/gen/product/toy_01.svg",
    "role": "role-9",
    "status": "质检中"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "name": "mini机器人 10",
    "avatar": "assets/img/gen/product/commercial_02.svg",
    "role": "role-10",
    "status": "已完工"
   },
   {
    "id": "ID011",
    "name": "商用机器人 11",
    "avatar": "assets/img/gen/product/module_03.svg",
    "role": "role-11",
    "status": "待排产"
   },
   {
    "id": "ID012",
    "name": "具身机器人 12",
    "avatar": "assets/img/gen/product/toy_04.svg",
    "role": "role-12",
    "status": "备料中"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` overview `/design/overview`

> 设计阶段与指标（首页用） · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "stages": [
   "待处理"
  ],
  "metrics": [
   "待处理"
  ],
  "cats": [
   "待处理"
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "stages": [
   "待处理",
   "进行中"
  ],
  "metrics": [
   "待处理",
   "进行中"
  ],
  "cats": [
   "待处理",
   "进行中"
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "stages": [
   "待处理",
   "进行中",
   "已完结"
  ],
  "metrics": [
   "待处理",
   "进行中",
   "已完结"
  ],
  "cats": [
   "待处理",
   "进行中",
   "已完结"
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "stages": [
   "待处理"
  ],
  "metrics": [
   "待处理"
  ],
  "cats": [
   "待处理"
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## production `production`


### `GET` lines `/production/lines`

> 产线列表 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "name": "商用机器人 1",
    "type": "SMT",
    "vendor": "智元工场",
    "city": "深圳",
    "monthCapacity": 500,
    "utilization": 35,
    "moq": 500,
    "leadDays": 500,
    "status": "待排产",
    "img": "assets/img/gen/product/commercial_01.svg"
   },
   {
    "id": "ID002",
    "name": "具身机器人 2",
    "type": "组装",
    "vendor": "开源纪元",
    "city": "东莞",
    "monthCapacity": 1200,
    "utilization": 52,
    "moq": 1200,
    "leadDays": 1200,
    "status": "备料中",
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "ID003",
    "name": "定制机器人 3",
    "type": "测试",
    "vendor": "星辰机甲",
    "city": "苏州",
    "monthCapacity": 3000,
    "utilization": 68,
    "moq": 3000,
    "leadDays": 3000,
    "status": "生产中",
    "img": "assets/img/gen/product/toy_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "name": "机器人模块 4",
    "type": "包装",
    "vendor": "极客造物",
    "city": "成都",
    "monthCapacity": 8000,
    "utilization": 84,
    "moq": 8000,
    "leadDays": 8000,
    "status": "质检中",
    "img": "assets/img/gen/product/commercial_04.svg"
   },
   {
    "id": "ID005",
    "name": "机器人组件 5",
    "type": "机加",
    "vendor": "灵犀机器人",
    "city": "上海",
    "monthCapacity": 20000,
    "utilization": 96,
    "moq": 20000,
    "leadDays": 20000,
    "status": "已完工",
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "ID006",
    "name": "模块配件 6",
    "type": "注塑",
    "vendor": "红蚁动力",
    "city": "北京",
    "monthCapacity": 500,
    "utilization": 35,
    "moq": 500,
    "leadDays": 500,
    "status": "待排产",
    "img": "assets/img/gen/product/toy_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "name": "五金 7",
    "type": "SMT",
    "vendor": "蓝鲸智造",
    "city": "杭州",
    "monthCapacity": 1200,
    "utilization": 52,
    "moq": 1200,
    "leadDays": 1200,
    "status": "备料中",
    "img": "assets/img/gen/product/commercial_03.svg"
   },
   {
    "id": "ID008",
    "name": "塑料3D打印 8",
    "type": "组装",
    "vendor": "铁甲开源",
    "city": "武汉",
    "monthCapacity": 3000,
    "utilization": 68,
    "moq": 3000,
    "leadDays": 3000,
    "status": "生产中",
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "ID009",
    "name": "外壳 9",
    "type": "测试",
    "vendor": "智元工场",
    "city": "深圳",
    "monthCapacity": 8000,
    "utilization": 84,
    "moq": 8000,
    "leadDays": 8000,
    "status": "质检中",
    "img": "assets/img/gen/product/toy_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "name": "mini机器人 10",
    "type": "包装",
    "vendor": "开源纪元",
    "city": "东莞",
    "monthCapacity": 20000,
    "utilization": 96,
    "moq": 20000,
    "leadDays": 20000,
    "status": "已完工",
    "img": "assets/img/gen/product/commercial_02.svg"
   },
   {
    "id": "ID011",
    "name": "商用机器人 11",
    "type": "机加",
    "vendor": "星辰机甲",
    "city": "苏州",
    "monthCapacity": 500,
    "utilization": 35,
    "moq": 500,
    "leadDays": 500,
    "status": "待排产",
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "ID012",
    "name": "具身机器人 12",
    "type": "注塑",
    "vendor": "极客造物",
    "city": "成都",
    "monthCapacity": 1200,
    "utilization": 52,
    "moq": 1200,
    "leadDays": 1200,
    "status": "备料中",
    "img": "assets/img/gen/product/toy_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` lineDetail `/production/lines/:id`

> 产线详情 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "name": "商用机器人 1",
  "type": "SMT",
  "vendor": "智元工场",
  "city": "深圳",
  "dailyCapacity": 500,
  "monthCapacity": 500,
  "utilization": 35,
  "automation": 35,
  "workers": 500,
  "moq": 500,
  "leadDays": 500,
  "certs": [
   "ISO9001",
   "CE",
   "RoHS"
  ],
  "rating": 3.6
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "name": "具身机器人 2",
  "type": "组装",
  "vendor": "开源纪元",
  "city": "东莞",
  "dailyCapacity": 1200,
  "monthCapacity": 1200,
  "utilization": 52,
  "automation": 52,
  "workers": 1200,
  "moq": 1200,
  "leadDays": 1200,
  "certs": [
   "ISO9001",
   "CE",
   "RoHS"
  ],
  "rating": 4.1
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "name": "定制机器人 3",
  "type": "测试",
  "vendor": "星辰机甲",
  "city": "苏州",
  "dailyCapacity": 3000,
  "monthCapacity": 3000,
  "utilization": 68,
  "automation": 68,
  "workers": 3000,
  "moq": 3000,
  "leadDays": 3000,
  "certs": [
   "ISO9001",
   "CE",
   "RoHS"
  ],
  "rating": 4.5
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "name": "机器人模块 4",
  "type": "包装",
  "vendor": "极客造物",
  "city": "成都",
  "dailyCapacity": 8000,
  "monthCapacity": 8000,
  "utilization": 84,
  "automation": 84,
  "workers": 8000,
  "moq": 8000,
  "leadDays": 8000,
  "certs": [
   "ISO9001",
   "CE",
   "RoHS"
  ],
  "rating": 4.8
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` capacity `/production/capacity`

> 产能查询（按月） · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "line": "LN2001",
    "month": "2026-06-01",
    "total": 3000,
    "booked": 1200,
    "free": 1800,
    "rate": 92.5
   },
   {
    "line": "LN2002",
    "month": "2026-07-02",
    "total": 8000,
    "booked": 3600,
    "free": 4400,
    "rate": 95.1
   },
   {
    "line": "LN2003",
    "month": "2026-08-03",
    "total": 15000,
    "booked": 7200,
    "free": 7800,
    "rate": 96.8
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "line": "LN2004",
    "month": "2026-09-04",
    "total": 8000,
    "booked": 3600,
    "free": 4400,
    "rate": 98.2
   },
   {
    "line": "LN2005",
    "month": "2026-10-05",
    "total": 15000,
    "booked": 7200,
    "free": 7800,
    "rate": 99.4
   },
   {
    "line": "LN2006",
    "month": "2026-06-06",
    "total": 30000,
    "booked": 18000,
    "free": 12000,
    "rate": 92.5
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "line": "LN2007",
    "month": "2026-07-07",
    "total": 15000,
    "booked": 7200,
    "free": 7800,
    "rate": 95.1
   },
   {
    "line": "LN2008",
    "month": "2026-08-08",
    "total": 30000,
    "booked": 18000,
    "free": 12000,
    "rate": 96.8
   },
   {
    "line": "LN2009",
    "month": "2026-09-09",
    "total": 60000,
    "booked": 42000,
    "free": 18000,
    "rate": 98.2
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "line": "LN2010",
    "month": "2026-10-10",
    "total": 30000,
    "booked": 18000,
    "free": 12000,
    "rate": 99.4
   },
   {
    "line": "LN2011",
    "month": "2026-06-11",
    "total": 60000,
    "booked": 42000,
    "free": 18000,
    "rate": 92.5
   },
   {
    "line": "LN2012",
    "month": "2026-07-12",
    "total": 3000,
    "booked": 1200,
    "free": 1800,
    "rate": 95.1
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` bookCapacity `/production/capacity/book`

> 预约产能 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "bookingId": "BK6001",
  "slot": "v1.0",
  "freeCancelUntil": "freeCancelUntil-1"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "bookingId": "BK6002",
  "slot": "白班",
  "freeCancelUntil": "freeCancelUntil-2"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "bookingId": "BK6003",
  "slot": "ISO9283",
  "freeCancelUntil": "freeCancelUntil-3"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "bookingId": "BK6004",
  "slot": "2026-06",
  "freeCancelUntil": "freeCancelUntil-4"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` orders `/production/orders`

> 生产工单列表 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "title": "商用机器人 1",
    "line": "LN2001",
    "qty": 500,
    "done": 1,
    "progress": 35,
    "startDate": "2026-06-01",
    "dueDate": "2026-06-01",
    "status": "待排产"
   },
   {
    "id": "ID002",
    "title": "具身机器人 2",
    "line": "LN2002",
    "qty": 1200,
    "done": 2,
    "progress": 52,
    "startDate": "2026-07-02",
    "dueDate": "2026-07-02",
    "status": "备料中"
   },
   {
    "id": "ID003",
    "title": "定制机器人 3",
    "line": "LN2003",
    "qty": 3000,
    "done": 3,
    "progress": 68,
    "startDate": "2026-08-03",
    "dueDate": "2026-08-03",
    "status": "生产中"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "title": "机器人模块 4",
    "line": "LN2004",
    "qty": 8000,
    "done": 4,
    "progress": 84,
    "startDate": "2026-09-04",
    "dueDate": "2026-09-04",
    "status": "质检中"
   },
   {
    "id": "ID005",
    "title": "机器人组件 5",
    "line": "LN2005",
    "qty": 20000,
    "done": 5,
    "progress": 96,
    "startDate": "2026-10-05",
    "dueDate": "2026-10-05",
    "status": "已完工"
   },
   {
    "id": "ID006",
    "title": "模块配件 6",
    "line": "LN2006",
    "qty": 500,
    "done": 6,
    "progress": 35,
    "startDate": "2026-06-06",
    "dueDate": "2026-06-06",
    "status": "待排产"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "title": "五金 7",
    "line": "LN2007",
    "qty": 1200,
    "done": 7,
    "progress": 52,
    "startDate": "2026-07-07",
    "dueDate": "2026-07-07",
    "status": "备料中"
   },
   {
    "id": "ID008",
    "title": "塑料3D打印 8",
    "line": "LN2008",
    "qty": 3000,
    "done": 8,
    "progress": 68,
    "startDate": "2026-08-08",
    "dueDate": "2026-08-08",
    "status": "生产中"
   },
   {
    "id": "ID009",
    "title": "外壳 9",
    "line": "LN2009",
    "qty": 8000,
    "done": 9,
    "progress": 84,
    "startDate": "2026-09-09",
    "dueDate": "2026-09-09",
    "status": "质检中"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "title": "mini机器人 10",
    "line": "LN2010",
    "qty": 20000,
    "done": 1,
    "progress": 96,
    "startDate": "2026-10-10",
    "dueDate": "2026-10-10",
    "status": "已完工"
   },
   {
    "id": "ID011",
    "title": "商用机器人 11",
    "line": "LN2011",
    "qty": 500,
    "done": 2,
    "progress": 35,
    "startDate": "2026-06-11",
    "dueDate": "2026-06-11",
    "status": "待排产"
   },
   {
    "id": "ID012",
    "title": "具身机器人 12",
    "line": "LN2012",
    "qty": 1200,
    "done": 3,
    "progress": 52,
    "startDate": "2026-07-12",
    "dueDate": "2026-07-12",
    "status": "备料中"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` orderDetail `/production/orders/:id`

> 生产工单详情（含节点） · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "title": "商用机器人 1",
  "line": "LN2001",
  "qty": 500,
  "done": 1,
  "progress": 35,
  "budget": 39800,
  "status": "待排产",
  "nodes": [
   {
    "name": "商用机器人 1",
    "status": "待排产",
    "date": "2026-06-01"
   },
   {
    "name": "具身机器人 2",
    "status": "备料中",
    "date": "2026-07-02"
   },
   {
    "name": "定制机器人 3",
    "status": "生产中",
    "date": "2026-08-03"
   }
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "title": "具身机器人 2",
  "line": "LN2002",
  "qty": 1200,
  "done": 2,
  "progress": 52,
  "budget": 128000,
  "status": "备料中",
  "nodes": [
   {
    "name": "机器人模块 4",
    "status": "质检中",
    "date": "2026-09-04"
   },
   {
    "name": "机器人组件 5",
    "status": "已完工",
    "date": "2026-10-05"
   },
   {
    "name": "模块配件 6",
    "status": "待排产",
    "date": "2026-06-06"
   }
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "title": "定制机器人 3",
  "line": "LN2003",
  "qty": 3000,
  "done": 3,
  "progress": 68,
  "budget": 256000,
  "status": "生产中",
  "nodes": [
   {
    "name": "五金 7",
    "status": "备料中",
    "date": "2026-07-07"
   },
   {
    "name": "塑料3D打印 8",
    "status": "生产中",
    "date": "2026-08-08"
   },
   {
    "name": "外壳 9",
    "status": "质检中",
    "date": "2026-09-09"
   }
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "title": "机器人模块 4",
  "line": "LN2004",
  "qty": 8000,
  "done": 4,
  "progress": 84,
  "budget": 498000,
  "status": "质检中",
  "nodes": [
   {
    "name": "mini机器人 10",
    "status": "已完工",
    "date": "2026-10-10"
   },
   {
    "name": "商用机器人 11",
    "status": "待排产",
    "date": "2026-06-11"
   },
   {
    "name": "具身机器人 12",
    "status": "备料中",
    "date": "2026-07-12"
   }
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` publishOrder `/production/orders`

> 发布量产需求 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "orderId": "WO6001",
  "matchedLines": 1
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "orderId": "WO6002",
  "matchedLines": 2
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "orderId": "WO6003",
  "matchedLines": 3
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "orderId": "WO6004",
  "matchedLines": 4
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` dailyReport `/production/orders/:orderId`

> 上报生产日报 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": true,
  "yield": 92.5
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": false,
  "yield": 95.1
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": true,
  "yield": 96.8
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": false,
  "yield": 98.2
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` schedule `/production/schedule`

> 排产计划 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "orderId": "WO6001",
    "line": "LN2001",
    "start": "start-1",
    "end": "end-1",
    "status": "待排产"
   },
   {
    "orderId": "WO6002",
    "line": "LN2002",
    "start": "start-2",
    "end": "end-2",
    "status": "备料中"
   },
   {
    "orderId": "WO6003",
    "line": "LN2003",
    "start": "start-3",
    "end": "end-3",
    "status": "生产中"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "orderId": "WO6004",
    "line": "LN2004",
    "start": "start-4",
    "end": "end-4",
    "status": "质检中"
   },
   {
    "orderId": "WO6005",
    "line": "LN2005",
    "start": "start-5",
    "end": "end-5",
    "status": "已完工"
   },
   {
    "orderId": "WO6006",
    "line": "LN2006",
    "start": "start-6",
    "end": "end-6",
    "status": "待排产"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "orderId": "WO6007",
    "line": "LN2007",
    "start": "start-7",
    "end": "end-7",
    "status": "备料中"
   },
   {
    "orderId": "WO6008",
    "line": "LN2008",
    "start": "start-8",
    "end": "end-8",
    "status": "生产中"
   },
   {
    "orderId": "WO6009",
    "line": "LN2009",
    "start": "start-9",
    "end": "end-9",
    "status": "质检中"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "orderId": "WO6010",
    "line": "LN2010",
    "start": "start-10",
    "end": "end-10",
    "status": "已完工"
   },
   {
    "orderId": "WO6011",
    "line": "LN2011",
    "start": "start-11",
    "end": "end-11",
    "status": "待排产"
   },
   {
    "orderId": "WO6012",
    "line": "LN2012",
    "start": "start-12",
    "end": "end-12",
    "status": "备料中"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` boms `/production/boms`

> BOM 齐套状态 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "name": "商用机器人 1",
    "total": 120,
    "ready": 500,
    "missing": 500,
    "risk": "risk-1",
    "items": [
     {
      "k": "物料费",
      "qty": 500,
      "stock": 500,
      "lead": "lead-1",
      "status": "待排产"
     },
     {
      "k": "人工费",
      "qty": 1200,
      "stock": 1200,
      "lead": "lead-2",
      "status": "备料中"
     },
     {
      "k": "设备折旧",
      "qty": 3000,
      "stock": 3000,
      "lead": "lead-3",
      "status": "生产中"
     }
    ]
   },
   {
    "id": "ID002",
    "name": "具身机器人 2",
    "total": 486,
    "ready": 1200,
    "missing": 1200,
    "risk": "risk-2",
    "items": [
     {
      "k": "制造费用",
      "qty": 8000,
      "stock": 8000,
      "lead": "lead-4",
      "status": "质检中"
     },
     {
      "k": "管理费",
      "qty": 20000,
      "stock": 20000,
      "lead": "lead-5",
      "status": "已完工"
     },
     {
      "k": "物料费",
      "qty": 500,
      "stock": 500,
      "lead": "lead-6",
      "status": "待排产"
     }
    ]
   },
   {
    "id": "ID003",
    "name": "定制机器人 3",
    "total": 1350,
    "ready": 3000,
    "missing": 3000,
    "risk": "risk-3",
    "items": [
     {
      "k": "人工费",
      "qty": 1200,
      "stock": 1200,
      "lead": "lead-7",
      "status": "备料中"
     },
     {
      "k": "设备折旧",
      "qty": 3000,
      "stock": 3000,
      "lead": "lead-8",
      "status": "生产中"
     },
     {
      "k": "制造费用",
      "qty": 8000,
      "stock": 8000,
      "lead": "lead-9",
      "status": "质检中"
     }
    ]
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "name": "机器人模块 4",
    "total": 3200,
    "ready": 8000,
    "missing": 8000,
    "risk": "risk-4",
    "items": [
     {
      "k": "管理费",
      "qty": 20000,
      "stock": 20000,
      "lead": "lead-10",
      "status": "已完工"
     },
     {
      "k": "物料费",
      "qty": 500,
      "stock": 500,
      "lead": "lead-11",
      "status": "待排产"
     },
     {
      "k": "人工费",
      "qty": 1200,
      "stock": 1200,
      "lead": "lead-12",
      "status": "备料中"
     }
    ]
   },
   {
    "id": "ID005",
    "name": "机器人组件 5",
    "total": 8640,
    "ready": 20000,
    "missing": 20000,
    "risk": "risk-5",
    "items": [
     {
      "k": "设备折旧",
      "qty": 3000,
      "stock": 3000,
      "lead": "lead-13",
      "status": "生产中"
     },
     {
      "k": "制造费用",
      "qty": 8000,
      "stock": 8000,
      "lead": "lead-14",
      "status": "质检中"
     },
     {
      "k": "管理费",
      "qty": 20000,
      "stock": 20000,
      "lead": "lead-15",
      "status": "已完工"
     }
    ]
   },
   {
    "id": "ID006",
    "name": "模块配件 6",
    "total": 120,
    "ready": 500,
    "missing": 500,
    "risk": "risk-6",
    "items": [
     {
      "k": "物料费",
      "qty": 500,
      "stock": 500,
      "lead": "lead-16",
      "status": "待排产"
     },
     {
      "k": "人工费",
      "qty": 1200,
      "stock": 1200,
      "lead": "lead-17",
      "status": "备料中"
     },
     {
      "k": "设备折旧",
      "qty": 3000,
      "stock": 3000,
      "lead": "lead-18",
      "status": "生产中"
     }
    ]
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "name": "五金 7",
    "total": 486,
    "ready": 1200,
    "missing": 1200,
    "risk": "risk-7",
    "items": [
     {
      "k": "制造费用",
      "qty": 8000,
      "stock": 8000,
      "lead": "lead-19",
      "status": "质检中"
     },
     {
      "k": "管理费",
      "qty": 20000,
      "stock": 20000,
      "lead": "lead-20",
      "status": "已完工"
     },
     {
      "k": "物料费",
      "qty": 500,
      "stock": 500,
      "lead": "lead-21",
      "status": "待排产"
     }
    ]
   },
   {
    "id": "ID008",
    "name": "塑料3D打印 8",
    "total": 1350,
    "ready": 3000,
    "missing": 3000,
    "risk": "risk-8",
    "items": [
     {
      "k": "人工费",
      "qty": 1200,
      "stock": 1200,
      "lead": "lead-22",
      "status": "备料中"
     },
     {
      "k": "设备折旧",
      "qty": 3000,
      "stock": 3000,
      "lead": "lead-23",
      "status": "生产中"
     },
     {
      "k": "制造费用",
      "qty": 8000,
      "stock": 8000,
      "lead": "lead-24",
      "status": "质检中"
     }
    ]
   },
   {
    "id": "ID009",
    "name": "外壳 9",
    "total": 3200,
    "ready": 8000,
    "missing": 8000,
    "risk": "risk-9",
    "items": [
     {
      "k": "管理费",
      "qty": 20000,
      "stock": 20000,
      "lead": "lead-25",
      "status": "已完工"
     },
     {
      "k": "物料费",
      "qty": 500,
      "stock": 500,
      "lead": "lead-26",
      "status": "待排产"
     },
     {
      "k": "人工费",
      "qty": 1200,
      "stock": 1200,
      "lead": "lead-27",
      "status": "备料中"
     }
    ]
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "name": "mini机器人 10",
    "total": 8640,
    "ready": 20000,
    "missing": 20000,
    "risk": "risk-10",
    "items": [
     {
      "k": "设备折旧",
      "qty": 3000,
      "stock": 3000,
      "lead": "lead-28",
      "status": "生产中"
     },
     {
      "k": "制造费用",
      "qty": 8000,
      "stock": 8000,
      "lead": "lead-29",
      "status": "质检中"
     },
     {
      "k": "管理费",
      "qty": 20000,
      "stock": 20000,
      "lead": "lead-30",
      "status": "已完工"
     }
    ]
   },
   {
    "id": "ID011",
    "name": "商用机器人 11",
    "total": 120,
    "ready": 500,
    "missing": 500,
    "risk": "risk-11",
    "items": [
     {
      "k": "物料费",
      "qty": 500,
      "stock": 500,
      "lead": "lead-31",
      "status": "待排产"
     },
     {
      "k": "人工费",
      "qty": 1200,
      "stock": 1200,
      "lead": "lead-32",
      "status": "备料中"
     },
     {
      "k": "设备折旧",
      "qty": 3000,
      "stock": 3000,
      "lead": "lead-33",
      "status": "生产中"
     }
    ]
   },
   {
    "id": "ID012",
    "name": "具身机器人 12",
    "total": 486,
    "ready": 1200,
    "missing": 1200,
    "risk": "risk-12",
    "items": [
     {
      "k": "制造费用",
      "qty": 8000,
      "stock": 8000,
      "lead": "lead-34",
      "status": "质检中"
     },
     {
      "k": "管理费",
      "qty": 20000,
      "stock": 20000,
      "lead": "lead-35",
      "status": "已完工"
     },
     {
      "k": "物料费",
      "qty": 500,
      "stock": 500,
      "lead": "lead-36",
      "status": "待排产"
     }
    ]
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` bomCheck `/production/boms/:bomId`

> 齐套检查 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "ready": 500,
  "total": 120,
  "missing": 500,
  "items": [
   {
    "id": 1,
    "name": "Object-1"
   },
   {
    "id": 2,
    "name": "Object-2"
   },
   {
    "id": 3,
    "name": "Object-3"
   }
  ],
  "alternatives": [
   "待处理"
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "ready": 1200,
  "total": 486,
  "missing": 1200,
  "items": [
   {
    "id": 4,
    "name": "Object-4"
   },
   {
    "id": 5,
    "name": "Object-5"
   },
   {
    "id": 6,
    "name": "Object-6"
   }
  ],
  "alternatives": [
   "待处理",
   "进行中"
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "ready": 3000,
  "total": 1350,
  "missing": 3000,
  "items": [
   {
    "id": 7,
    "name": "Object-7"
   },
   {
    "id": 8,
    "name": "Object-8"
   },
   {
    "id": 9,
    "name": "Object-9"
   }
  ],
  "alternatives": [
   "待处理",
   "进行中",
   "已完结"
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "ready": 8000,
  "total": 3200,
  "missing": 8000,
  "items": [
   {
    "id": 10,
    "name": "Object-10"
   },
   {
    "id": 11,
    "name": "Object-11"
   },
   {
    "id": 12,
    "name": "Object-12"
   }
  ],
  "alternatives": [
   "待处理"
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` procurement `/production/procurement`

> 发起物料采购 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "requestId": "RQ6001",
  "quotes": 1
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "requestId": "RQ6002",
  "quotes": 2
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "requestId": "RQ6003",
  "quotes": 3
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "requestId": "RQ6004",
  "quotes": 4
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` suppliers `/production/suppliers`

> 供应商列表 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "name": "商用机器人 1",
    "tag": "SMT",
    "city": "深圳",
    "rating": 3.6,
    "orders": 1,
    "onTime": "2026-06-01T09:00:00+08:00",
    "moq": 500,
    "leadDays": 500,
    "certs": [
     "ISO9001",
     "CE",
     "RoHS"
    ]
   },
   {
    "id": "ID002",
    "name": "具身机器人 2",
    "tag": "组装",
    "city": "东莞",
    "rating": 4.1,
    "orders": 2,
    "onTime": "2026-06-02T10:07:13+08:00",
    "moq": 1200,
    "leadDays": 1200,
    "certs": [
     "ISO9001",
     "CE",
     "RoHS"
    ]
   },
   {
    "id": "ID003",
    "name": "定制机器人 3",
    "tag": "测试",
    "city": "苏州",
    "rating": 4.5,
    "orders": 3,
    "onTime": "2026-06-03T11:14:26+08:00",
    "moq": 3000,
    "leadDays": 3000,
    "certs": [
     "ISO9001",
     "CE",
     "RoHS"
    ]
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "name": "机器人模块 4",
    "tag": "包装",
    "city": "成都",
    "rating": 4.8,
    "orders": 4,
    "onTime": "2026-06-04T12:21:39+08:00",
    "moq": 8000,
    "leadDays": 8000,
    "certs": [
     "ISO9001",
     "CE",
     "RoHS"
    ]
   },
   {
    "id": "ID005",
    "name": "机器人组件 5",
    "tag": "机加",
    "city": "上海",
    "rating": 5.0,
    "orders": 5,
    "onTime": "2026-06-05T13:28:52+08:00",
    "moq": 20000,
    "leadDays": 20000,
    "certs": [
     "ISO9001",
     "CE",
     "RoHS"
    ]
   },
   {
    "id": "ID006",
    "name": "模块配件 6",
    "tag": "注塑",
    "city": "北京",
    "rating": 3.6,
    "orders": 6,
    "onTime": "2026-06-06T14:35:05+08:00",
    "moq": 500,
    "leadDays": 500,
    "certs": [
     "ISO9001",
     "CE",
     "RoHS"
    ]
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "name": "五金 7",
    "tag": "SMT",
    "city": "杭州",
    "rating": 4.1,
    "orders": 7,
    "onTime": "2026-06-07T15:42:18+08:00",
    "moq": 1200,
    "leadDays": 1200,
    "certs": [
     "ISO9001",
     "CE",
     "RoHS"
    ]
   },
   {
    "id": "ID008",
    "name": "塑料3D打印 8",
    "tag": "组装",
    "city": "武汉",
    "rating": 4.5,
    "orders": 8,
    "onTime": "2026-06-08T16:49:31+08:00",
    "moq": 3000,
    "leadDays": 3000,
    "certs": [
     "ISO9001",
     "CE",
     "RoHS"
    ]
   },
   {
    "id": "ID009",
    "name": "外壳 9",
    "tag": "测试",
    "city": "深圳",
    "rating": 4.8,
    "orders": 9,
    "onTime": "2026-06-09T17:56:44+08:00",
    "moq": 8000,
    "leadDays": 8000,
    "certs": [
     "ISO9001",
     "CE",
     "RoHS"
    ]
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "name": "mini机器人 10",
    "tag": "包装",
    "city": "东莞",
    "rating": 5.0,
    "orders": 1,
    "onTime": "2026-06-10T18:03:57+08:00",
    "moq": 20000,
    "leadDays": 20000,
    "certs": [
     "ISO9001",
     "CE",
     "RoHS"
    ]
   },
   {
    "id": "ID011",
    "name": "商用机器人 11",
    "tag": "机加",
    "city": "苏州",
    "rating": 3.6,
    "orders": 2,
    "onTime": "2026-06-11T19:10:10+08:00",
    "moq": 500,
    "leadDays": 500,
    "certs": [
     "ISO9001",
     "CE",
     "RoHS"
    ]
   },
   {
    "id": "ID012",
    "name": "具身机器人 12",
    "tag": "注塑",
    "city": "成都",
    "rating": 4.1,
    "orders": 3,
    "onTime": "2026-06-12T20:17:23+08:00",
    "moq": 1200,
    "leadDays": 1200,
    "certs": [
     "ISO9001",
     "CE",
     "RoHS"
    ]
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` supplierDetail `/production/suppliers/:id`

> 供应商详情 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "name": "商用机器人 1",
  "tag": "SMT",
  "city": "深圳",
  "rating": 3.6,
  "certs": [
   "ISO9001",
   "CE",
   "RoHS"
  ],
  "cases": [
   "待处理"
  ],
  "reviews": [
   "待处理"
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "name": "具身机器人 2",
  "tag": "组装",
  "city": "东莞",
  "rating": 4.1,
  "certs": [
   "ISO9001",
   "CE",
   "RoHS"
  ],
  "cases": [
   "待处理",
   "进行中"
  ],
  "reviews": [
   "待处理",
   "进行中"
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "name": "定制机器人 3",
  "tag": "测试",
  "city": "苏州",
  "rating": 4.5,
  "certs": [
   "ISO9001",
   "CE",
   "RoHS"
  ],
  "cases": [
   "待处理",
   "进行中",
   "已完结"
  ],
  "reviews": [
   "待处理",
   "进行中",
   "已完结"
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "name": "机器人模块 4",
  "tag": "包装",
  "city": "成都",
  "rating": 4.8,
  "certs": [
   "ISO9001",
   "CE",
   "RoHS"
  ],
  "cases": [
   "待处理"
  ],
  "reviews": [
   "待处理"
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` processes `/production/processes`

> 工艺清单 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "name": "商用机器人 1",
    "stdHours": 500,
    "yield": 92.5,
    "equip": "equip-1"
   },
   {
    "id": "ID002",
    "name": "具身机器人 2",
    "stdHours": 1200,
    "yield": 95.1,
    "equip": "equip-2"
   },
   {
    "id": "ID003",
    "name": "定制机器人 3",
    "stdHours": 3000,
    "yield": 96.8,
    "equip": "equip-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "name": "机器人模块 4",
    "stdHours": 8000,
    "yield": 98.2,
    "equip": "equip-4"
   },
   {
    "id": "ID005",
    "name": "机器人组件 5",
    "stdHours": 20000,
    "yield": 99.4,
    "equip": "equip-5"
   },
   {
    "id": "ID006",
    "name": "模块配件 6",
    "stdHours": 500,
    "yield": 92.5,
    "equip": "equip-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "name": "五金 7",
    "stdHours": 1200,
    "yield": 95.1,
    "equip": "equip-7"
   },
   {
    "id": "ID008",
    "name": "塑料3D打印 8",
    "stdHours": 3000,
    "yield": 96.8,
    "equip": "equip-8"
   },
   {
    "id": "ID009",
    "name": "外壳 9",
    "stdHours": 8000,
    "yield": 98.2,
    "equip": "equip-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "name": "mini机器人 10",
    "stdHours": 20000,
    "yield": 99.4,
    "equip": "equip-10"
   },
   {
    "id": "ID011",
    "name": "商用机器人 11",
    "stdHours": 500,
    "yield": 92.5,
    "equip": "equip-11"
   },
   {
    "id": "ID012",
    "name": "具身机器人 12",
    "stdHours": 1200,
    "yield": 95.1,
    "equip": "equip-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` qc `/production/qc`

> 质检批次列表 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "order": "order-1",
    "sampled": 500,
    "passed": 500,
    "failed": 1,
    "yield": 92.5,
    "result": "result-1",
    "date": "2026-06-01"
   },
   {
    "id": "ID002",
    "order": "order-2",
    "sampled": 1200,
    "passed": 1200,
    "failed": 2,
    "yield": 95.1,
    "result": "result-2",
    "date": "2026-07-02"
   },
   {
    "id": "ID003",
    "order": "order-3",
    "sampled": 3000,
    "passed": 3000,
    "failed": 3,
    "yield": 96.8,
    "result": "result-3",
    "date": "2026-08-03"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "order": "order-4",
    "sampled": 8000,
    "passed": 8000,
    "failed": 4,
    "yield": 98.2,
    "result": "result-4",
    "date": "2026-09-04"
   },
   {
    "id": "ID005",
    "order": "order-5",
    "sampled": 20000,
    "passed": 20000,
    "failed": 5,
    "yield": 99.4,
    "result": "result-5",
    "date": "2026-10-05"
   },
   {
    "id": "ID006",
    "order": "order-6",
    "sampled": 500,
    "passed": 500,
    "failed": 6,
    "yield": 92.5,
    "result": "result-6",
    "date": "2026-06-06"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "order": "order-7",
    "sampled": 1200,
    "passed": 1200,
    "failed": 7,
    "yield": 95.1,
    "result": "result-7",
    "date": "2026-07-07"
   },
   {
    "id": "ID008",
    "order": "order-8",
    "sampled": 3000,
    "passed": 3000,
    "failed": 8,
    "yield": 96.8,
    "result": "result-8",
    "date": "2026-08-08"
   },
   {
    "id": "ID009",
    "order": "order-9",
    "sampled": 8000,
    "passed": 8000,
    "failed": 9,
    "yield": 98.2,
    "result": "result-9",
    "date": "2026-09-09"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "order": "order-10",
    "sampled": 20000,
    "passed": 20000,
    "failed": 1,
    "yield": 99.4,
    "result": "result-10",
    "date": "2026-10-10"
   },
   {
    "id": "ID011",
    "order": "order-11",
    "sampled": 500,
    "passed": 500,
    "failed": 2,
    "yield": 92.5,
    "result": "result-11",
    "date": "2026-06-11"
   },
   {
    "id": "ID012",
    "order": "order-12",
    "sampled": 1200,
    "passed": 1200,
    "failed": 3,
    "yield": 95.1,
    "result": "result-12",
    "date": "2026-07-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` qcReport `/production/qc/:id`

> 质检报告详情 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID001",
  "order": "order-1",
  "sampled": 500,
  "passed": 500,
  "yield": 92.5,
  "result": "result-1",
  "items": [
   {
    "k": "物料费",
    "v": "¥1,280.00",
    "ok": true
   },
   {
    "k": "人工费",
    "v": "¥860.00",
    "ok": false
   },
   {
    "k": "设备折旧",
    "v": "¥420.00",
    "ok": true
   }
  ],
  "defects": [
   "待处理"
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID002",
  "order": "order-2",
  "sampled": 1200,
  "passed": 1200,
  "yield": 95.1,
  "result": "result-2",
  "items": [
   {
    "k": "制造费用",
    "v": "¥310.00",
    "ok": false
   },
   {
    "k": "管理费",
    "v": "¥240.00",
    "ok": true
   },
   {
    "k": "物料费",
    "v": "¥1,280.00",
    "ok": false
   }
  ],
  "defects": [
   "待处理",
   "进行中"
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID003",
  "order": "order-3",
  "sampled": 3000,
  "passed": 3000,
  "yield": 96.8,
  "result": "result-3",
  "items": [
   {
    "k": "人工费",
    "v": "¥860.00",
    "ok": true
   },
   {
    "k": "设备折旧",
    "v": "¥420.00",
    "ok": false
   },
   {
    "k": "制造费用",
    "v": "¥310.00",
    "ok": true
   }
  ],
  "defects": [
   "待处理",
   "进行中",
   "已完结"
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "id": "ID004",
  "order": "order-4",
  "sampled": 8000,
  "passed": 8000,
  "yield": 98.2,
  "result": "result-4",
  "items": [
   {
    "k": "管理费",
    "v": "¥240.00",
    "ok": false
   },
   {
    "k": "物料费",
    "v": "¥1,280.00",
    "ok": true
   },
   {
    "k": "人工费",
    "v": "¥860.00",
    "ok": false
   }
  ],
  "defects": [
   "待处理"
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` requestQc `/production/qc`

> 申请批次质检 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "qcId": "QC6001"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "qcId": "QC6002"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "qcId": "QC6003"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "qcId": "QC6004"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` yield `/production/yield`

> 良率分析 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "overall": 92.5,
  "trend": [
   [
    12,
    30,
    22,
    45,
    38,
    60,
    52
   ],
   [
    8,
    22,
    40,
    36,
    58,
    72,
    66
   ],
   [
    30,
    18,
    26,
    52,
    44,
    38,
    70
   ]
  ],
  "defects": [
   {
    "name": "商用机器人 1",
    "rate": 92.5,
    "stage": "SMT"
   },
   {
    "name": "具身机器人 2",
    "rate": 95.1,
    "stage": "组装"
   },
   {
    "name": "定制机器人 3",
    "rate": 96.8,
    "stage": "老化"
   }
  ],
  "actions": [
   "待处理"
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "overall": 95.1,
  "trend": [
   [
    15,
    28,
    34,
    48,
    62,
    55,
    80
   ],
   [
    22,
    40,
    31,
    58,
    47,
    69,
    76
   ],
   [
    12,
    30,
    22,
    45,
    38,
    60,
    52
   ]
  ],
  "defects": [
   {
    "name": "机器人模块 4",
    "rate": 98.2,
    "stage": "终检"
   },
   {
    "name": "机器人组件 5",
    "rate": 99.4,
    "stage": "包装"
   },
   {
    "name": "模块配件 6",
    "rate": 92.5,
    "stage": "SMT"
   }
  ],
  "actions": [
   "待处理",
   "进行中"
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "overall": 96.8,
  "trend": [
   [
    8,
    22,
    40,
    36,
    58,
    72,
    66
   ],
   [
    30,
    18,
    26,
    52,
    44,
    38,
    70
   ],
   [
    15,
    28,
    34,
    48,
    62,
    55,
    80
   ]
  ],
  "defects": [
   {
    "name": "五金 7",
    "rate": 95.1,
    "stage": "组装"
   },
   {
    "name": "塑料3D打印 8",
    "rate": 96.8,
    "stage": "老化"
   },
   {
    "name": "外壳 9",
    "rate": 98.2,
    "stage": "终检"
   }
  ],
  "actions": [
   "待处理",
   "进行中",
   "已完结"
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "overall": 98.2,
  "trend": [
   [
    22,
    40,
    31,
    58,
    47,
    69,
    76
   ],
   [
    12,
    30,
    22,
    45,
    38,
    60,
    52
   ],
   [
    8,
    22,
    40,
    36,
    58,
    72,
    66
   ]
  ],
  "defects": [
   {
    "name": "mini机器人 10",
    "rate": 99.4,
    "stage": "包装"
   },
   {
    "name": "商用机器人 11",
    "rate": 92.5,
    "stage": "SMT"
   },
   {
    "name": "具身机器人 12",
    "rate": 95.1,
    "stage": "组装"
   }
  ],
  "actions": [
   "待处理"
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` tooling `/production/tooling`

> 模具工装台账 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "name": "商用机器人 1",
    "life": "v1.0",
    "status": "待排产",
    "img": "assets/img/gen/product/commercial_01.svg"
   },
   {
    "id": "ID002",
    "name": "具身机器人 2",
    "life": "白班",
    "status": "备料中",
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "ID003",
    "name": "定制机器人 3",
    "life": "ISO9283",
    "status": "生产中",
    "img": "assets/img/gen/product/toy_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "name": "机器人模块 4",
    "life": "2026-06",
    "status": "质检中",
    "img": "assets/img/gen/product/commercial_04.svg"
   },
   {
    "id": "ID005",
    "name": "机器人组件 5",
    "life": "±0.02mm",
    "status": "已完工",
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "ID006",
    "name": "模块配件 6",
    "life": "v1.0",
    "status": "待排产",
    "img": "assets/img/gen/product/toy_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "name": "五金 7",
    "life": "白班",
    "status": "备料中",
    "img": "assets/img/gen/product/commercial_03.svg"
   },
   {
    "id": "ID008",
    "name": "塑料3D打印 8",
    "life": "ISO9283",
    "status": "生产中",
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "ID009",
    "name": "外壳 9",
    "life": "2026-06",
    "status": "质检中",
    "img": "assets/img/gen/product/toy_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "name": "mini机器人 10",
    "life": "±0.02mm",
    "status": "已完工",
    "img": "assets/img/gen/product/commercial_02.svg"
   },
   {
    "id": "ID011",
    "name": "商用机器人 11",
    "life": "v1.0",
    "status": "待排产",
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "ID012",
    "name": "具身机器人 12",
    "life": "白班",
    "status": "备料中",
    "img": "assets/img/gen/product/toy_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` toolingQuote `/production/tooling/quote`

> 开模询价 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "quoteId": "QT6001"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "quoteId": "QT6002"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "quoteId": "QT6003"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "quoteId": "QT6004"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` cost `/production/orders/:orderId`

> 成本核算 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "breakdown": [
   {
    "k": "物料费",
    "v": "¥1,280.00"
   },
   {
    "k": "人工费",
    "v": "¥860.00"
   },
   {
    "k": "设备折旧",
    "v": "¥420.00"
   }
  ],
  "total": 120,
  "perUnit": 39800,
  "share": [
   "待处理"
  ],
  "suggestions": [
   "待处理"
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "breakdown": [
   {
    "k": "制造费用",
    "v": "¥310.00"
   },
   {
    "k": "管理费",
    "v": "¥240.00"
   },
   {
    "k": "物料费",
    "v": "¥1,280.00"
   }
  ],
  "total": 486,
  "perUnit": 128000,
  "share": [
   "待处理",
   "进行中"
  ],
  "suggestions": [
   "待处理",
   "进行中"
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "breakdown": [
   {
    "k": "人工费",
    "v": "¥860.00"
   },
   {
    "k": "设备折旧",
    "v": "¥420.00"
   },
   {
    "k": "制造费用",
    "v": "¥310.00"
   }
  ],
  "total": 1350,
  "perUnit": 256000,
  "share": [
   "待处理",
   "进行中",
   "已完结"
  ],
  "suggestions": [
   "待处理",
   "进行中",
   "已完结"
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "breakdown": [
   {
    "k": "管理费",
    "v": "¥240.00"
   },
   {
    "k": "物料费",
    "v": "¥1,280.00"
   },
   {
    "k": "人工费",
    "v": "¥860.00"
   }
  ],
  "total": 3200,
  "perUnit": 498000,
  "share": [
   "待处理"
  ],
  "suggestions": [
   "待处理"
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` warehouses `/production/warehouses`

> 仓储列表 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "name": "商用机器人 1",
    "stock": 500,
    "used": 500
   },
   {
    "id": "ID002",
    "name": "具身机器人 2",
    "stock": 1200,
    "used": 1200
   },
   {
    "id": "ID003",
    "name": "定制机器人 3",
    "stock": 3000,
    "used": 3000
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "name": "机器人模块 4",
    "stock": 8000,
    "used": 8000
   },
   {
    "id": "ID005",
    "name": "机器人组件 5",
    "stock": 20000,
    "used": 20000
   },
   {
    "id": "ID006",
    "name": "模块配件 6",
    "stock": 500,
    "used": 500
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "name": "五金 7",
    "stock": 1200,
    "used": 1200
   },
   {
    "id": "ID008",
    "name": "塑料3D打印 8",
    "stock": 3000,
    "used": 3000
   },
   {
    "id": "ID009",
    "name": "外壳 9",
    "stock": 8000,
    "used": 8000
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "name": "mini机器人 10",
    "stock": 20000,
    "used": 20000
   },
   {
    "id": "ID011",
    "name": "商用机器人 11",
    "stock": 500,
    "used": 500
   },
   {
    "id": "ID012",
    "name": "具身机器人 12",
    "stock": 1200,
    "used": 1200
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` createShipment `/production/logistics`

> 创建发货单 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "shipmentId": "SF0000000000001",
  "trackingNo": "TRAC001"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "shipmentId": "SF0000000000002",
  "trackingNo": "TRAC002"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "shipmentId": "SF0000000000003",
  "trackingNo": "TRAC003"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "shipmentId": "SF0000000000004",
  "trackingNo": "TRAC004"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` tracking `/production/logistics/:shipmentId`

> 物流轨迹 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "time": "2026-06-01T08:00:00+08:00",
    "event": "已揽收"
   },
   {
    "time": "2026-06-02T12:07:13+08:00",
    "event": "运输中"
   },
   {
    "time": "2026-06-03T16:14:26+08:00",
    "event": "到达分拨中心"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true,
  "status": "已揽收"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "time": "2026-06-04T20:21:39+08:00",
    "event": "派送中"
   },
   {
    "time": "2026-06-05T00:28:52+08:00",
    "event": "已签收"
   },
   {
    "time": "2026-06-06T04:35:05+08:00",
    "event": "已揽收"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true,
  "status": "运输中"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "time": "2026-06-07T08:42:18+08:00",
    "event": "运输中"
   },
   {
    "time": "2026-06-08T12:49:31+08:00",
    "event": "到达分拨中心"
   },
   {
    "time": "2026-06-09T16:56:44+08:00",
    "event": "派送中"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true,
  "status": "派送中"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "time": "2026-06-10T20:03:57+08:00",
    "event": "已签收"
   },
   {
    "time": "2026-06-11T00:10:10+08:00",
    "event": "已揽收"
   },
   {
    "time": "2026-06-12T04:17:23+08:00",
    "event": "运输中"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true,
  "status": "已签收"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` equipment `/production/equipment`

> 设备台账 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "name": "商用机器人 1",
    "line": "LN2001",
    "status": "待排产",
    "utilization": 35,
    "nextService": "nextService-1"
   },
   {
    "id": "ID002",
    "name": "具身机器人 2",
    "line": "LN2002",
    "status": "备料中",
    "utilization": 52,
    "nextService": "nextService-2"
   },
   {
    "id": "ID003",
    "name": "定制机器人 3",
    "line": "LN2003",
    "status": "生产中",
    "utilization": 68,
    "nextService": "nextService-3"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "name": "机器人模块 4",
    "line": "LN2004",
    "status": "质检中",
    "utilization": 84,
    "nextService": "nextService-4"
   },
   {
    "id": "ID005",
    "name": "机器人组件 5",
    "line": "LN2005",
    "status": "已完工",
    "utilization": 96,
    "nextService": "nextService-5"
   },
   {
    "id": "ID006",
    "name": "模块配件 6",
    "line": "LN2006",
    "status": "待排产",
    "utilization": 35,
    "nextService": "nextService-6"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "name": "五金 7",
    "line": "LN2007",
    "status": "备料中",
    "utilization": 52,
    "nextService": "nextService-7"
   },
   {
    "id": "ID008",
    "name": "塑料3D打印 8",
    "line": "LN2008",
    "status": "生产中",
    "utilization": 68,
    "nextService": "nextService-8"
   },
   {
    "id": "ID009",
    "name": "外壳 9",
    "line": "LN2009",
    "status": "质检中",
    "utilization": 84,
    "nextService": "nextService-9"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "name": "mini机器人 10",
    "line": "LN2010",
    "status": "已完工",
    "utilization": 96,
    "nextService": "nextService-10"
   },
   {
    "id": "ID011",
    "name": "商用机器人 11",
    "line": "LN2011",
    "status": "待排产",
    "utilization": 35,
    "nextService": "nextService-11"
   },
   {
    "id": "ID012",
    "name": "具身机器人 12",
    "line": "LN2012",
    "status": "备料中",
    "utilization": 52,
    "nextService": "nextService-12"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` workers `/production/workers`

> 班组列表 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "name": "商用机器人 1",
    "count": 120,
    "shift": "v1.0",
    "output": 500,
    "qualified": 1,
    "skills": [
     "skills-1",
     "skills-2",
     "skills-3"
    ]
   },
   {
    "id": "ID002",
    "name": "具身机器人 2",
    "count": 486,
    "shift": "白班",
    "output": 1200,
    "qualified": 2,
    "skills": [
     "skills-4",
     "skills-5",
     "skills-6"
    ]
   },
   {
    "id": "ID003",
    "name": "定制机器人 3",
    "count": 1350,
    "shift": "ISO9283",
    "output": 3000,
    "qualified": 3,
    "skills": [
     "skills-7",
     "skills-8",
     "skills-9"
    ]
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "name": "机器人模块 4",
    "count": 3200,
    "shift": "2026-06",
    "output": 8000,
    "qualified": 4,
    "skills": [
     "skills-10",
     "skills-11",
     "skills-12"
    ]
   },
   {
    "id": "ID005",
    "name": "机器人组件 5",
    "count": 8640,
    "shift": "±0.02mm",
    "output": 20000,
    "qualified": 5,
    "skills": [
     "skills-13",
     "skills-14",
     "skills-15"
    ]
   },
   {
    "id": "ID006",
    "name": "模块配件 6",
    "count": 120,
    "shift": "v1.0",
    "output": 500,
    "qualified": 6,
    "skills": [
     "skills-16",
     "skills-17",
     "skills-18"
    ]
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "name": "五金 7",
    "count": 486,
    "shift": "白班",
    "output": 1200,
    "qualified": 7,
    "skills": [
     "skills-19",
     "skills-20",
     "skills-21"
    ]
   },
   {
    "id": "ID008",
    "name": "塑料3D打印 8",
    "count": 1350,
    "shift": "ISO9283",
    "output": 3000,
    "qualified": 8,
    "skills": [
     "skills-22",
     "skills-23",
     "skills-24"
    ]
   },
   {
    "id": "ID009",
    "name": "外壳 9",
    "count": 3200,
    "shift": "2026-06",
    "output": 8000,
    "qualified": 9,
    "skills": [
     "skills-25",
     "skills-26",
     "skills-27"
    ]
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "name": "mini机器人 10",
    "count": 8640,
    "shift": "±0.02mm",
    "output": 20000,
    "qualified": 1,
    "skills": [
     "skills-28",
     "skills-29",
     "skills-30"
    ]
   },
   {
    "id": "ID011",
    "name": "商用机器人 11",
    "count": 120,
    "shift": "v1.0",
    "output": 500,
    "qualified": 2,
    "skills": [
     "skills-31",
     "skills-32",
     "skills-33"
    ]
   },
   {
    "id": "ID012",
    "name": "具身机器人 12",
    "count": 486,
    "shift": "白班",
    "output": 1200,
    "qualified": 3,
    "skills": [
     "skills-34",
     "skills-35",
     "skills-36"
    ]
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` certs `/production/certs`

> 产线与产品资质 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "lineCerts": [
   "待处理"
  ],
  "productCerts": [
   "待处理"
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "lineCerts": [
   "待处理",
   "进行中"
  ],
  "productCerts": [
   "待处理",
   "进行中"
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "lineCerts": [
   "待处理",
   "进行中",
   "已完结"
  ],
  "productCerts": [
   "待处理",
   "进行中",
   "已完结"
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "lineCerts": [
   "待处理"
  ],
  "productCerts": [
   "待处理"
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 500,
 "message": "服务内部异常",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` cases `/production/cases`

> 量产案例 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID001",
    "title": "商用机器人 1",
    "qty": 500,
    "days": 500,
    "yield": 92.5,
    "cost": 39800,
    "vendor": "智元工场",
    "line": "LN2001",
    "img": "assets/img/gen/product/commercial_01.svg"
   },
   {
    "id": "ID002",
    "title": "具身机器人 2",
    "qty": 1200,
    "days": 1200,
    "yield": 95.1,
    "cost": 128000,
    "vendor": "开源纪元",
    "line": "LN2002",
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "id": "ID003",
    "title": "定制机器人 3",
    "qty": 3000,
    "days": 3000,
    "yield": 96.8,
    "cost": 256000,
    "vendor": "星辰机甲",
    "line": "LN2003",
    "img": "assets/img/gen/product/toy_03.svg"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID004",
    "title": "机器人模块 4",
    "qty": 8000,
    "days": 8000,
    "yield": 98.2,
    "cost": 498000,
    "vendor": "极客造物",
    "line": "LN2004",
    "img": "assets/img/gen/product/commercial_04.svg"
   },
   {
    "id": "ID005",
    "title": "机器人组件 5",
    "qty": 20000,
    "days": 20000,
    "yield": 99.4,
    "cost": 1280000,
    "vendor": "灵犀机器人",
    "line": "LN2005",
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "id": "ID006",
    "title": "模块配件 6",
    "qty": 500,
    "days": 500,
    "yield": 92.5,
    "cost": 39800,
    "vendor": "红蚁动力",
    "line": "LN2006",
    "img": "assets/img/gen/product/toy_02.svg"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID007",
    "title": "五金 7",
    "qty": 1200,
    "days": 1200,
    "yield": 95.1,
    "cost": 128000,
    "vendor": "蓝鲸智造",
    "line": "LN2007",
    "img": "assets/img/gen/product/commercial_03.svg"
   },
   {
    "id": "ID008",
    "title": "塑料3D打印 8",
    "qty": 3000,
    "days": 3000,
    "yield": 96.8,
    "cost": 256000,
    "vendor": "铁甲开源",
    "line": "LN2008",
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "id": "ID009",
    "title": "外壳 9",
    "qty": 8000,
    "days": 8000,
    "yield": 98.2,
    "cost": 498000,
    "vendor": "智元工场",
    "line": "LN2009",
    "img": "assets/img/gen/product/toy_01.svg"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "id": "ID010",
    "title": "mini机器人 10",
    "qty": 20000,
    "days": 20000,
    "yield": 99.4,
    "cost": 1280000,
    "vendor": "开源纪元",
    "line": "LN2010",
    "img": "assets/img/gen/product/commercial_02.svg"
   },
   {
    "id": "ID011",
    "title": "商用机器人 11",
    "qty": 500,
    "days": 500,
    "yield": 92.5,
    "cost": 39800,
    "vendor": "星辰机甲",
    "line": "LN2011",
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "id": "ID012",
    "title": "具身机器人 12",
    "qty": 1200,
    "days": 1200,
    "yield": 95.1,
    "cost": 128000,
    "vendor": "极客造物",
    "line": "LN2012",
    "img": "assets/img/gen/product/toy_04.svg"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` overview `/production/overview`

> 生产板块总览（首页用） · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "metrics": [
   "待处理"
  ],
  "stages": [
   "待处理"
  ],
  "hotLines": [
   "待处理"
  ],
  "runningOrders": [
   "待处理"
  ],
  "cases": [
   "待处理"
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "metrics": [
   "待处理",
   "进行中"
  ],
  "stages": [
   "待处理",
   "进行中"
  ],
  "hotLines": [
   "待处理",
   "进行中"
  ],
  "runningOrders": [
   "待处理",
   "进行中"
  ],
  "cases": [
   "待处理",
   "进行中"
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "metrics": [
   "待处理",
   "进行中",
   "已完结"
  ],
  "stages": [
   "待处理",
   "进行中",
   "已完结"
  ],
  "hotLines": [
   "待处理",
   "进行中",
   "已完结"
  ],
  "runningOrders": [
   "待处理",
   "进行中",
   "已完结"
  ],
  "cases": [
   "待处理",
   "进行中",
   "已完结"
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "metrics": [
   "待处理"
  ],
  "stages": [
   "待处理"
  ],
  "hotLines": [
   "待处理"
  ],
  "runningOrders": [
   "待处理"
  ],
  "cases": [
   "待处理"
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 429,
 "message": "请求过于频繁，请稍后再试",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

---


## flow `flow`


### `GET` stages `/flow/stages`

> 全流程阶段定义 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "stages": [
   {
    "key": "key-1",
    "zh": "zh-1",
    "en": "en-1",
    "desc": "围绕 商用机器人 的说明，覆盖选型、接口与部署要点（示例 1）。",
    "href": "href-1",
    "img": "assets/img/gen/product/commercial_01.svg"
   },
   {
    "key": "key-2",
    "zh": "zh-2",
    "en": "en-2",
    "desc": "围绕 具身机器人 的说明，覆盖选型、接口与部署要点（示例 2）。",
    "href": "href-2",
    "img": "assets/img/gen/product/module_02.svg"
   },
   {
    "key": "key-3",
    "zh": "zh-3",
    "en": "en-3",
    "desc": "围绕 定制机器人 的说明，覆盖选型、接口与部署要点（示例 3）。",
    "href": "href-3",
    "img": "assets/img/gen/product/toy_03.svg"
   }
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "stages": [
   {
    "key": "key-4",
    "zh": "zh-4",
    "en": "en-4",
    "desc": "围绕 机器人模块 的说明，覆盖选型、接口与部署要点（示例 4）。",
    "href": "href-4",
    "img": "assets/img/gen/product/commercial_04.svg"
   },
   {
    "key": "key-5",
    "zh": "zh-5",
    "en": "en-5",
    "desc": "围绕 机器人组件 的说明，覆盖选型、接口与部署要点（示例 5）。",
    "href": "href-5",
    "img": "assets/img/gen/product/module_01.svg"
   },
   {
    "key": "key-6",
    "zh": "zh-6",
    "en": "en-6",
    "desc": "围绕 模块配件 的说明，覆盖选型、接口与部署要点（示例 6）。",
    "href": "href-6",
    "img": "assets/img/gen/product/toy_02.svg"
   }
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "stages": [
   {
    "key": "key-7",
    "zh": "zh-7",
    "en": "en-7",
    "desc": "围绕 五金 的说明，覆盖选型、接口与部署要点（示例 7）。",
    "href": "href-7",
    "img": "assets/img/gen/product/commercial_03.svg"
   },
   {
    "key": "key-8",
    "zh": "zh-8",
    "en": "en-8",
    "desc": "围绕 塑料3D打印 的说明，覆盖选型、接口与部署要点（示例 8）。",
    "href": "href-8",
    "img": "assets/img/gen/product/module_04.svg"
   },
   {
    "key": "key-9",
    "zh": "zh-9",
    "en": "en-9",
    "desc": "围绕 外壳 的说明，覆盖选型、接口与部署要点（示例 9）。",
    "href": "href-9",
    "img": "assets/img/gen/product/toy_01.svg"
   }
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "stages": [
   {
    "key": "key-10",
    "zh": "zh-10",
    "en": "en-10",
    "desc": "围绕 mini机器人 的说明，覆盖选型、接口与部署要点（示例 10）。",
    "href": "href-10",
    "img": "assets/img/gen/product/commercial_02.svg"
   },
   {
    "key": "key-11",
    "zh": "zh-11",
    "en": "en-11",
    "desc": "围绕 商用机器人 的说明，覆盖选型、接口与部署要点（示例 11）。",
    "href": "href-11",
    "img": "assets/img/gen/product/module_03.svg"
   },
   {
    "key": "key-12",
    "zh": "zh-12",
    "en": "en-12",
    "desc": "围绕 具身机器人 的说明，覆盖选型、接口与部署要点（示例 12）。",
    "href": "href-12",
    "img": "assets/img/gen/product/toy_04.svg"
   }
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` stage `/flow/stages/:key`

> 阶段详情 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "key": "key-1",
  "zh": "zh-1",
  "en": "en-1",
  "desc": "围绕 商用机器人 的说明，覆盖选型、接口与部署要点（示例 1）。",
  "tasks": [
   "待处理"
  ],
  "cycle": "cycle-1",
  "gate": "gate-1",
  "href": "href-1"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "key": "key-2",
  "zh": "zh-2",
  "en": "en-2",
  "desc": "围绕 具身机器人 的说明，覆盖选型、接口与部署要点（示例 2）。",
  "tasks": [
   "待处理",
   "进行中"
  ],
  "cycle": "cycle-2",
  "gate": "gate-2",
  "href": "href-2"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "key": "key-3",
  "zh": "zh-3",
  "en": "en-3",
  "desc": "围绕 定制机器人 的说明，覆盖选型、接口与部署要点（示例 3）。",
  "tasks": [
   "待处理",
   "进行中",
   "已完结"
  ],
  "cycle": "cycle-3",
  "gate": "gate-3",
  "href": "href-3"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "key": "key-4",
  "zh": "zh-4",
  "en": "en-4",
  "desc": "围绕 机器人模块 的说明，覆盖选型、接口与部署要点（示例 4）。",
  "tasks": [
   "待处理"
  ],
  "cycle": "cycle-4",
  "gate": "gate-4",
  "href": "href-4"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 404 Not Found
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 404,
 "message": "资源不存在",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` gates `/flow/gates`

> 阶段门禁列表 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "key": "key-1",
    "zh": "zh-1",
    "en": "en-1",
    "items": [
     "items-1",
     "items-2",
     "items-3"
    ],
    "status": "待排产"
   },
   {
    "key": "key-2",
    "zh": "zh-2",
    "en": "en-2",
    "items": [
     "items-4",
     "items-5",
     "items-6"
    ],
    "status": "备料中"
   },
   {
    "key": "key-3",
    "zh": "zh-3",
    "en": "en-3",
    "items": [
     "items-7",
     "items-8",
     "items-9"
    ],
    "status": "生产中"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true,
  "levels": [
   "待处理"
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "key": "key-4",
    "zh": "zh-4",
    "en": "en-4",
    "items": [
     "items-10",
     "items-11",
     "items-12"
    ],
    "status": "质检中"
   },
   {
    "key": "key-5",
    "zh": "zh-5",
    "en": "en-5",
    "items": [
     "items-13",
     "items-14",
     "items-15"
    ],
    "status": "已完工"
   },
   {
    "key": "key-6",
    "zh": "zh-6",
    "en": "en-6",
    "items": [
     "items-16",
     "items-17",
     "items-18"
    ],
    "status": "待排产"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true,
  "levels": [
   "待处理",
   "进行中"
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "key": "key-7",
    "zh": "zh-7",
    "en": "en-7",
    "items": [
     "items-19",
     "items-20",
     "items-21"
    ],
    "status": "备料中"
   },
   {
    "key": "key-8",
    "zh": "zh-8",
    "en": "en-8",
    "items": [
     "items-22",
     "items-23",
     "items-24"
    ],
    "status": "生产中"
   },
   {
    "key": "key-9",
    "zh": "zh-9",
    "en": "en-9",
    "items": [
     "items-25",
     "items-26",
     "items-27"
    ],
    "status": "质检中"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true,
  "levels": [
   "待处理",
   "进行中",
   "已完结"
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "key": "key-10",
    "zh": "zh-10",
    "en": "en-10",
    "items": [
     "items-28",
     "items-29",
     "items-30"
    ],
    "status": "已完工"
   },
   {
    "key": "key-11",
    "zh": "zh-11",
    "en": "en-11",
    "items": [
     "items-31",
     "items-32",
     "items-33"
    ],
    "status": "待排产"
   },
   {
    "key": "key-12",
    "zh": "zh-12",
    "en": "en-12",
    "items": [
     "items-34",
     "items-35",
     "items-36"
    ],
    "status": "备料中"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true,
  "levels": [
   "待处理"
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` gateVerdict `/flow/gates/:gateId`

> 提交门禁判定 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": true,
  "nextStage": "nextStage-1"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": false,
  "nextStage": "nextStage-2"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": true,
  "nextStage": "nextStage-3"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "ok": false,
  "nextStage": "nextStage-4"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 401,
 "message": "未登录或令牌已过期",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` handovers `/flow/handovers`

> 阶段交接清单 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "from": "from-1",
    "to": "to-1",
    "items": [
     "items-1",
     "items-2",
     "items-3"
    ],
    "status": "待排产"
   },
   {
    "from": "from-2",
    "to": "to-2",
    "items": [
     "items-4",
     "items-5",
     "items-6"
    ],
    "status": "备料中"
   },
   {
    "from": "from-3",
    "to": "to-3",
    "items": [
     "items-7",
     "items-8",
     "items-9"
    ],
    "status": "生产中"
   }
  ],
  "total": 120,
  "page": 1,
  "pageSize": 20,
  "hasMore": true,
  "history": [
   "待处理"
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "from": "from-4",
    "to": "to-4",
    "items": [
     "items-10",
     "items-11",
     "items-12"
    ],
    "status": "质检中"
   },
   {
    "from": "from-5",
    "to": "to-5",
    "items": [
     "items-13",
     "items-14",
     "items-15"
    ],
    "status": "已完工"
   },
   {
    "from": "from-6",
    "to": "to-6",
    "items": [
     "items-16",
     "items-17",
     "items-18"
    ],
    "status": "待排产"
   }
  ],
  "total": 486,
  "page": 2,
  "pageSize": 20,
  "hasMore": true,
  "history": [
   "待处理",
   "进行中"
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "from": "from-7",
    "to": "to-7",
    "items": [
     "items-19",
     "items-20",
     "items-21"
    ],
    "status": "备料中"
   },
   {
    "from": "from-8",
    "to": "to-8",
    "items": [
     "items-22",
     "items-23",
     "items-24"
    ],
    "status": "生产中"
   },
   {
    "from": "from-9",
    "to": "to-9",
    "items": [
     "items-25",
     "items-26",
     "items-27"
    ],
    "status": "质检中"
   }
  ],
  "total": 1350,
  "page": 3,
  "pageSize": 20,
  "hasMore": true,
  "history": [
   "待处理",
   "进行中",
   "已完结"
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "list": [
   {
    "from": "from-10",
    "to": "to-10",
    "items": [
     "items-28",
     "items-29",
     "items-30"
    ],
    "status": "已完工"
   },
   {
    "from": "from-11",
    "to": "to-11",
    "items": [
     "items-31",
     "items-32",
     "items-33"
    ],
    "status": "待排产"
   },
   {
    "from": "from-12",
    "to": "to-12",
    "items": [
     "items-34",
     "items-35",
     "items-36"
    ],
    "status": "备料中"
   }
  ],
  "total": 3200,
  "page": 4,
  "pageSize": 20,
  "hasMore": true,
  "history": [
   "待处理"
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `POST` confirmHandover `/flow/handovers`

> 确认阶段交接 · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "handoverId": "HAND001"
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "handoverId": "HAND002"
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "handoverId": "HAND003"
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "handoverId": "HAND004"
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 422 Unprocessable Entity
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 422,
 "message": "参数校验失败",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```

### `GET` timeline `/flow/timeline`

> 项目全流程时间线（阶段 + 节点分组 + 里程碑） · 响应结构来源：@returns 声明

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2c3d0-4e20-9c40
X-Rate-Limit-Remaining: 990

{
 "code": 0,
 "message": "ok",
 "data": {
  "timeline": [
   {
    "name": "商用机器人 1",
    "status": "待排产",
    "date": "2026-06-01",
    "desc": "围绕 商用机器人 的说明，覆盖选型、接口与部署要点（示例 1）。"
   },
   {
    "name": "具身机器人 2",
    "status": "备料中",
    "date": "2026-07-02",
    "desc": "围绕 具身机器人 的说明，覆盖选型、接口与部署要点（示例 2）。"
   },
   {
    "name": "定制机器人 3",
    "status": "生产中",
    "date": "2026-08-03",
    "desc": "围绕 定制机器人 的说明，覆盖选型、接口与部署要点（示例 3）。"
   }
  ],
  "groups": [
   "待处理"
  ],
  "milestones": [
   "待处理"
  ]
 },
 "traceId": "a1b2c3d0-4e20-9c40"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b2e2bf-4e21-9c41
X-Rate-Limit-Remaining: 989

{
 "code": 0,
 "message": "ok",
 "data": {
  "timeline": [
   {
    "name": "机器人模块 4",
    "status": "质检中",
    "date": "2026-09-04",
    "desc": "围绕 机器人模块 的说明，覆盖选型、接口与部署要点（示例 4）。"
   },
   {
    "name": "机器人组件 5",
    "status": "已完工",
    "date": "2026-10-05",
    "desc": "围绕 机器人组件 的说明，覆盖选型、接口与部署要点（示例 5）。"
   },
   {
    "name": "模块配件 6",
    "status": "待排产",
    "date": "2026-06-06",
    "desc": "围绕 模块配件 的说明，覆盖选型、接口与部署要点（示例 6）。"
   }
  ],
  "groups": [
   "待处理",
   "进行中"
  ],
  "milestones": [
   "待处理",
   "进行中"
  ]
 },
 "traceId": "a1b2e2bf-4e21-9c41"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b301ae-4e22-9c42
X-Rate-Limit-Remaining: 988

{
 "code": 0,
 "message": "ok",
 "data": {
  "timeline": [
   {
    "name": "五金 7",
    "status": "备料中",
    "date": "2026-07-07",
    "desc": "围绕 五金 的说明，覆盖选型、接口与部署要点（示例 7）。"
   },
   {
    "name": "塑料3D打印 8",
    "status": "生产中",
    "date": "2026-08-08",
    "desc": "围绕 塑料3D打印 的说明，覆盖选型、接口与部署要点（示例 8）。"
   },
   {
    "name": "外壳 9",
    "status": "质检中",
    "date": "2026-09-09",
    "desc": "围绕 外壳 的说明，覆盖选型、接口与部署要点（示例 9）。"
   }
  ],
  "groups": [
   "待处理",
   "进行中",
   "已完结"
  ],
  "milestones": [
   "待处理",
   "进行中",
   "已完结"
  ]
 },
 "traceId": "a1b301ae-4e22-9c42"
}
```
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b3209d-4e23-9c43
X-Rate-Limit-Remaining: 987

{
 "code": 0,
 "message": "ok",
 "data": {
  "timeline": [
   {
    "name": "mini机器人 10",
    "status": "已完工",
    "date": "2026-10-10",
    "desc": "围绕 mini机器人 的说明，覆盖选型、接口与部署要点（示例 10）。"
   },
   {
    "name": "商用机器人 11",
    "status": "待排产",
    "date": "2026-06-11",
    "desc": "围绕 商用机器人 的说明，覆盖选型、接口与部署要点（示例 11）。"
   },
   {
    "name": "具身机器人 12",
    "status": "备料中",
    "date": "2026-07-12",
    "desc": "围绕 具身机器人 的说明，覆盖选型、接口与部署要点（示例 12）。"
   }
  ],
  "groups": [
   "待处理"
  ],
  "milestones": [
   "待处理"
  ]
 },
 "traceId": "a1b3209d-4e23-9c43"
}
```
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json; charset=utf-8
X-Trace-Id: a1b33f8c-0000-0000
X-Rate-Limit-Remaining: 986

{
 "code": 403,
 "message": "无访问权限",
 "data": null,
 "traceId": "a1b33f8c-0000-0000"
}
```
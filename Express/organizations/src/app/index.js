const Koa = require('koa')
const path = require('path')
const bodypaster = require('koa-bodyparser')
const compress = require('koa-compress')
const static = require('koa-static');
const cors = require("koa-cors")
const koaJwt = require('koa-jwt')
// const useUser = require('../router/user.router')
// const useLogin = require('../router/login.router')
const useRouter = require('../router')

const app = new Koa()


app.use(cors())
//使用路由中间件
app.use(bodypaster())

app.use(compress({
   // 当数据大小超过 500 bytes时压缩
   threshold: 500,
}))

app.use(koaJwt({
  secret:'key'
}).unless({
  path:[/^\/moment/]
}))

app.use(static(path.join(__dirname,'../dist')));

// 动态注册路由
useRouter(app)

// 引入注册路由
// app.use(useUser.routes())
// app.use(useLogin.routes())

// app.use(useUser.allowedMethods())
// app.use(useLogin.allowedMethods())

module.exports = app

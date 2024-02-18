const Router = require('@koa/router')
const userContoller = require('../controller/user.controller')
const md5Pwd = require('../middleware/user.middleware')

const useUser = new Router()

// 用户注册接口
useUser.post('/user', md5Pwd, userContoller.create)

module.exports = useUser
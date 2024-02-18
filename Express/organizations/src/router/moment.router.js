const Router = require('@koa/router')
const { IsAuthoriztion } = require('../middleware/auth.moddleware')
const { create, list, detail, update, remove } = require('../controller/moment.controller')
const IsPermission = require('../middleware/permission.moddleware')

const useMonent = new Router()

//发布动态
useMonent.post('/moment', IsAuthoriztion, create)

//获取动态
useMonent.get('/moment',IsAuthoriztion,list)

//获取详情
useMonent.get('/moment/:momentId', detail)

//修改动态
useMonent.patch('/moment/:momentId', IsAuthoriztion, IsPermission, update)

//删除动态
useMonent.delete('/moment/:momentId',IsAuthoriztion,IsPermission, remove)

module.exports = useMonent
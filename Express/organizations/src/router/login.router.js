const Router = require('@koa/router')
const { sign,test } = require('../controller/login.controller')
const {IsEmpty} = require('../middleware/login.middleware')
const { IsAuthoriztion } = require('../middleware/auth.moddleware')

const useLogin = new Router()

useLogin.post('/login',IsEmpty, sign)
useLogin.get('/test',IsAuthoriztion,test)

module.exports = useLogin
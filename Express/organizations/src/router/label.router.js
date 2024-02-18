const Router = require('@koa/router')
const { IsAuthoriztion } = require('../middleware/auth.moddleware')
const { create, list } = require('../controller/label.controller')


const useLabel = new Router()

useLabel.post('/label',IsAuthoriztion,create)
useLabel.get('/label',list)

module.exports = useLabel
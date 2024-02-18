const Router = require('@koa/router')
const { IsAuthoriztion } = require('../middleware/auth.moddleware')
const { create, replay } = require('../controller/comment.controller')


const useCommnet = new Router()

useCommnet.post('/comment',IsAuthoriztion, create)
useCommnet.post('/replay',IsAuthoriztion, replay)

module.exports = useCommnet
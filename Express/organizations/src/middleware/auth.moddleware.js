const jwt = require('jsonwebtoken')
const message = require('../utils/message')
const KEY = "key"
const IsAuthoriztion = async (ctx,next) => {
    //1.获取token
    const authorization = ctx.headers.authorization
    //1.1验证token是否存在
    if(!authorization) return message(ctx, 202)

    const token = authorization.replace('Bearer ', '')

    //2.验证token
    try {
        const result = jwt.verify(token,KEY)
        
        //将token的信息保留下来
        ctx.user = result

        //执行下一个中间件
        await next()
        
    } catch (error) {
        message(ctx, 202)
    }
}

module.exports = {
    IsAuthoriztion
}
const jwt = require('jsonwebtoken')
const message = require('../utils/message')

// 定义token的加密方式
const KEY = "key"

class LoginController {
    sign(ctx, next) {
        
        try {
            const {id, name} = ctx.user
            // 生成token
            const token = jwt.sign({id, name},KEY,{
                expiresIn: 24 * 60 * 60
            })

            ctx.body = { ...message(ctx,201), data:{id, name, token}}
            
        } catch (error) {
            message(ctx, 202)
        }
    }

    test(ctx,next) {
        ctx.body = ctx.user
    }
}

module.exports = new LoginController()
const md5Password = require('../utils/md5')

//密码加密
const md5Pwd = async (ctx, next) => {

    const { password } = ctx.request.body
    
    ctx.request.body.password = md5Password(password)

    await next()
}

module.exports = md5Pwd
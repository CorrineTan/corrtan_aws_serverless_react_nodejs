const userService = require("../service/user.service")
const md5Password = require("../utils/md5")
const message = require("../utils/message")



const IsEmpty = async (ctx, next) => {
    const {name, password} = ctx.request.body

    //判断用户名和密码是否为空
    if(!name || !password) return message(ctx,1001)

    //判断用户名是否存在数据库中
    const user = await userService.findUserByName(name)
    if(!user[0]) return message(ctx,1003)
    
    //判断密码是否正确
    if(user[0].password !== md5Password(password)) return message(ctx,1004)
    
    //将数据库中user, 进行共享
    ctx.user = user[0]

    await next()
}

module.exports = {
    IsEmpty
}
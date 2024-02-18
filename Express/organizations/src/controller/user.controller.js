const userService = require("../service/user.service")
const message = require("../utils/message")

class userContoller {
    
    async create(ctx, next) {   
        //1.解析前端传递过来的用户信息
        const user = ctx.request.body

        //2.1验证用户名和密码是否为空
        const {name, password} = user
        if(!name || !password) return message(ctx,1001)

        //2.2判断用户名是否存在     
        const users = await userService.findUserByName(name)
        if(users.length) return message(ctx,1002)

        //2.将数据写入数据库
        const result = await userService.create(user)
        //3.将数据库的信息返回给前端
        message(ctx,200,result)
    
    }
    
}
module.exports = new userContoller()
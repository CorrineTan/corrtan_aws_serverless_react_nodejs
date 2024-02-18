const permissionService = require("../service/permission.service")
const message = require("../utils/message")

const IsPermission = async (ctx, next) => {
    //1.获取登录用户的id/修改动态id
    const { momentId } = ctx.params
    const { id } = ctx.user

    const result  = await permissionService.checkMonent(momentId,id)
    if(!result) return message(ctx,208,result)
    
    await next()
}

module.exports = IsPermission
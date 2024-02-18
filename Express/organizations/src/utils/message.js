function message(ctx,code,result) {
    const msg = {
        1001:"用户名和密码不能为空",
        1002:"用户名已存在",
        1003:"用户名不存在",
        1004:"密码不正确",
        200:"用户创建成功",
        201:"用户登录成功",
        202:"无效的token",
        203:"数据发生错误",
        204:"动态发表成功",
        205:"查询列表成功",
        206:"查询详情成功",
        207:"修改动态成功",
        208:"没有相关权限",
        209:"删除动态成功",
        210:"发表评论成功",
        211:"回复评论成功",
        212:"标签创建成功",
        213:"标签列表查询"
    }

    return ctx.body = {
        code,
        message: msg[code],
        result
    }
}

function msgError(ctx,code,result) {
    const msg = {
        203:result
    }
    return ctx.body = {
        code,
        message: msg[code],
    }
}


module.exports = message
// module.exports = msgError
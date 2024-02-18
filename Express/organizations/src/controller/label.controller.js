const labelService = require("../service/label.service")
const message = require("../utils/message")

class LabelController {
    async create(ctx,next) {
        //标签添加
        const {name} = ctx.request.body
        const result = await labelService.create(name)

        message(ctx,212,result)
    }

    async list(ctx, next) {
        const {offset, size} = ctx.query
        //标签列表查询
        const result = await labelService.list(offset,size)
        message(ctx,213,result)
    }
}

module.exports = new LabelController()
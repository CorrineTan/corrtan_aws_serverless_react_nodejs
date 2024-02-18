const momentService = require("../service/moment.service")
const message = require("../utils/message")

class MomentController {
    async create(ctx, next) {
        //1.动态获取的内容
        const { content } = ctx.request.body

        //2.动态是谁发布
        const { id } = ctx.user

        //3.添加到数据库中
        const result = await momentService.create(content, id, ctx)

        message(ctx,204,result)

    }

    async list(ctx, next){
        //查询
        const {offset, size} = ctx.query
        const result = await momentService.queryList(offset,size)
        message(ctx,205,result)
    }

    async detail(ctx, next) {
        const {momentId} = ctx.params

        const result = await momentService.queryById(momentId)
        message(ctx,206,result)
    }

    async remove(ctx, next) {
        const {momentId} = ctx.params
        const result = await momentService.removeById(momentId)
        message(ctx,209,result)
    }

    async update(ctx,next) {
        //获取参数
        const {momentId} = ctx.params
        const {content} = ctx.request.body

        const result = await momentService.update(momentId, content)

        message(ctx,207,result)
    }
}

module.exports = new MomentController()
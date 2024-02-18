const commentService = require("../service/comment.service")
const message = require("../utils/message")

class CommentController {
    async create(ctx, next) {
        const {content, momentId} = ctx.request.body
        const { id } = ctx.user
        const result = await commentService.create(content,momentId,id)
        
        message(ctx,210,result)
    }

    async replay(ctx, next) {
        const {content, momentId,commentId} = ctx.request.body
        const { id } = ctx.user
        console.log(content, momentId,commentId)

        const result = await commentService.replay(content,momentId,commentId,id)

        message(ctx,211,result)
    }
}

module.exports = new CommentController()
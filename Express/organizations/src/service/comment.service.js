const connection = require('../app/database')

class CommentService {
    async create(content,momentId,userId) {
        const statement = 'INSERT INTO comment (content,moment_id,user_id) VALUES (?,?,?);'
        try {
            const result = await connection.execute(statement,[content,momentId,userId])
            return result
        } catch (error) {
            return error
        }
    }
    async replay(content,momentId,commentId, userId) {
        const statement = 'INSERT INTO comment (content,moment_id,comment_id,user_id) VALUES (?,?,?,?);'
        try {
            const result = await connection.execute(statement,[content,momentId,commentId,userId])
            return result
        } catch (error) {
            return error
        }
    }
}

module.exports = new CommentService()
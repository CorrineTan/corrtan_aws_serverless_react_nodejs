const connection = require("../app/database");
const msgError = require("../utils/message");

class MomentService {
    async create(content, userId, ctx) {

        const statement = 'INSERT INTO moment (content, user_id) VALUES (?,?);'
        try {
           const [result] = await connection.execute(statement, [content, userId])

           return result
        } catch (error) {
        //    msgError(ctx,203,"失败")
           return error
        }
        
    }
    async queryList(offset = 0,size = 10) {
        const statement = `
            SELECT 
                m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
                JSON_OBJECT('id', u.id, 'name', u.name, 'createTime', u.createAt, 'updateTime', u.updateAt) user,
                (SELECT COUNT(*) FROM comment WHERE comment.moment_id = m.id) commentCount
            FROM moment m 
            LEFT JOIN user u ON u.id = m.user_id
            LIMIT ? OFFSET ?
        `
        try {
            const [result] = await connection.execute(statement,[String(size),String(offset)])

            return result
        } catch (error) {

            return error
        }
    }

    async queryById(momentId) {
        const statement = `
            SELECT 
                m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
                JSON_OBJECT('id', u.id, 'name', u.name, 'createTime', u.createAt, 'updateTime', u.updateAt) user

            FROM moment m 
            LEFT JOIN user u ON u.id = m.user_id
            WHERE m.id = ?;
        `
        try {
            const [result] = await connection.execute(statement,[momentId])

            return result
        } catch (error) {

            return error
        }
    }
    async update(id,content) {
        const statement = 'UPDATE moment SET `content` = ? WHERE id = ?'
        try {
            const [result] = await connection.execute(statement,[content,id])

            return result
        } catch (error) {

            return error
        }
    }

    async removeById(id) {
        const statement = 'DELETE FROM moment WHERE id = ?'
        try {
            const [result] = await connection.execute(statement,[id])

            return result
        } catch (error) {

            return error
        }
    }
}

module.exports = new MomentService()
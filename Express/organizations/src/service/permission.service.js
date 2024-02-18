const connection = require('../app/database')

class permissionService {
    async checkMonent(momentId, userId) {
        const statement = 'SELECT * FROM moment WHERE id = ? AND user_id = ?;'

        try {
            const [result] = await connection.execute(statement,[momentId, userId])
            return !!result.length
        } catch (error) {
            return error
        }
    }
}

module.exports = new permissionService()
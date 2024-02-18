const connection = require('../app/database')

class LabelService {
    async create(name) {
        const statement = 'INSERT INTO label (name) VALUES (?);'
        try {
            const result = await connection.execute(statement, [name])
            return result
        } catch (error) {
            return error
        }
    }
    async list(offset = 0,size = 10) {
        const statement = `
            SELECT * from label LIMIT ? OFFSET ?
        `
        try {
            const [result] = await connection.execute(statement,[String(size),String(offset)])

            return result
        } catch (error) {

            return error
        }
    }
}

module.exports = new LabelService()
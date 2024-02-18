const mysql = require('mysql2')

//创建连接池
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    // 远程数密码 Zhangmysql_57
    // password: "Zhangmysql_57",
    // 服务器地址150.158.20.176
    password: "123456789qw",
    database: "coderhub",
})

//验证数据库是否连接成功
db.getConnection((err,connection) => {
    if(err) return console.log(err)
    
    //尝试获取连接
    connection.connect(err => {
        if(err) return console.log('数据连接失败~~~')
        console.log('数据连接成功~~~')
    })

})

const connection = db.promise()

module.exports = connection


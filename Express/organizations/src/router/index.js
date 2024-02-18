const fs = require('fs')

//动态注册路由
function useRouter(app) {
    const files = fs.readdirSync(__dirname)

    for (const file of files) {
        if(!file.endsWith('.router.js')) continue
        const router = require(`./${file}`)
        app.use(router.routes())
        app.use(router.allowedMethods())
    }
}
module.exports = useRouter
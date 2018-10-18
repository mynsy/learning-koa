// 自动加载并装载路由；

const router = require('koa-router')()

const path = require('path')
const fs = require('fs')

// 获取当前文件的文件名.扩展名 (index.js); module.filename === __filename
const basename = path.basename(__filename)

let files = fs.readdirSync(__dirname) // 返回一个数组
  .filter(file => {
    return (file.indexOf('.') !== 0 && (file !== basename) && file.endsWith('.js'))
  })
  .forEach(file => {
    let route = require(path.join(__dirname, file));
    router.use(route.routes(), route.allowedMethods())
  })

module.exports = router
const Router = require('koa-router')

const router = Router({
  prefix: '/news'
})

router.get('/123', ctx => {
  ctx.body = 123
})

module.exports = router
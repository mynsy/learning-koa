const Router = require('koa-router')
const home = require('../controllers/home')

const router = Router({
  prefix: '/'
})

router.get('/', home.index)
router.get('dlapp', home.dlApp)

module.exports = router
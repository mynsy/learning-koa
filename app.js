const Koa = require('koa')
const logger = require('koa-logger')
const render = require('koa-art-template')
const static = require('koa-static')
const path = require('path')
const router = require('./routers')

const app = new Koa()

app.use(logger())
app.use(static(path.join(__dirname, 'public')))
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
})

app.use(router.routes(), router.allowedMethods());


app.listen(3000, () => {
  console.log('server runing port at 3000...')
})
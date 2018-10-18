/**
 * 实现一个简易的logger 日志模块
 * step 01 拦截请求，打印请求URL
 * step 02 操作响应，打印响应URL
 */

module.exports = async (ctx, next) => {
  console.log(ctx.req)
  await next()
  console.log(ctx.res)
}
const rp = require('request-promise')

const index = async (ctx, next) => {
  let opt = {
    uri: 'https://main.exxvip.com/api/web/V1_0/getCoinMaps',
    json: true
  }
  let coin = await rp(opt)
  await ctx.render('index', {coin: coin})
}

const dlApp = async (ctx, _next) => {
  let opt = {
    uri: 'https://main.exxvip.com/darkcore/web/app/APPAction/getAPPForWEB',
    json: true
  }
  let data = await rp(opt)
  await ctx.render('dlApp', {data: data})
}

module.exports = {
  index,
  dlApp
}
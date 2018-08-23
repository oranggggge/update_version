const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const fireControl = require('../utils/fileRead')

router.prefix('/tools')

router.use(bodyParser())

router.get('/writeTest', async(ctx)=>{
  let url = ctx.url
  let getData = await fireControl.writeFile("message.txt","1234");
  console.log(getData)
  ctx.body = getData
})

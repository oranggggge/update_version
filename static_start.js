const Koa = require('koa')
const app = new Koa()
const static = require('koa-static-router');


// 单个路由
app.use(static({
    dir:'public',
    router:'/static/'     //路由长度 =1
}))


//多个路由
/*
app.use(static([
    {
    dir:'public',    //静态资源目录对于相对入口文件index.js的路径
    router:'/public/image/'   //路由命名   路由长度 =2
},{
    dir:'static',   //静态资源目录对于相对入口文件index.js的路径
    router:'/static/image/'    //路由命名  路由长度 =2
}
]))
*/
app.use( async ( ctx ) => {
  ctx.body = 'hello world'
})

app.listen(3080, () => {
  console.log('build success')
})


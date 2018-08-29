const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const router = require('./router');


//tools
const fs = require('fs');
const _ = require('underscore');
const bodyParser = require('koa-bodyparser');
const bluebird = require("bluebird");
const path = require('path');
const static = require('koa-static');

//静态资源加载路由
//middleware 需要比静态资源晚加载一些
//todo
app.use(static(path.join(__dirname, "./static")))
//app.use(static(path.resolve(__dirname, "./static")));
//app.use(static(__dirname + '/static'));

app.use(bodyParser());
//模板引擎加载
app.use(views(path.join(__dirname,'./views'),{
  extension:'ejs'
}));


//路由加载比模板晚一些
//routers
app.use(router.routes()).use(router.allowedMethods());

app.on('error', (err, ctx) => {
    console.error('Server Error:', err);
    console.error('---')
    console.error("request body: " + JSON.stringify(ctx.request.body));
    console.error('request query: ' + JSON.stringify(ctx.query));
    console.error('---')
});

app.listen(3000);

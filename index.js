const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const router = require('./router');
const common = require('./controller/common');


//tools
const fs = require('fs');
const _ = require('underscore');
const bodyParser = require('koa-bodyparser');
const bluebird = require("bluebird");
const path = require('path');


app.use(bodyParser());
//模板引擎加载
app.use(views(path.join(__dirname,'./views'),{
  extension:'ejs'
}));

//路由加载比模板晚一些
//routers
router.get('/public',common.static);
app.use(router.routes()).use(router.allowedMethods());
app.on('error', (err, ctx) => {
    console.error('Server Error:', err);
    console.error('---')
    console.error("request body: " + JSON.stringify(ctx.request.body));
    console.error('request query: ' + JSON.stringify(ctx.query));
    console.error('---')
});
app.listen(3000);

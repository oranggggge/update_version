const Koa = require('koa');
const app = new Koa();
const router = require('./router');

//tools
const fs = require('fs');
const _ = require('underscore');
const bodyParser = require('koa-bodyparser');
const bluebird = require("bluebird");


app.use(bodyParser());
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

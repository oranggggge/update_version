const Router = require('koa-router');
const router = new Router();
const fs = require('fs');

/*
//自动载入 todo
fs.readdirSync('./controller').forEach(function(filename) {
    //if (filename.length > 13 && filename.substring(filename.length -13) == 'Controller.js') {
    var filename.substring(0, filename.length - 3) = require('./controller/' + filename.substring(0, filename.length - 3));

})
*/
const user = require('./controller/user');
const update = require('./controller/update');
const common = require('./controller/common');



router.get('/', common.index);
router.get('/index', common.index);
router.post('/user/login', user.login);
router.get('/user/profile', user.profile);
router.get('/update/index', update.index);
router.get('/update/', update.index);
router.post('/update/upload', update.upload);
router.all('/public*', common.static);
router.all('/*',async ctx=>{
	//ctx.response.status = 404;
	//ctx.response.body = '<h1>404 Not FOund</h1>';
	await ctx.render('404', {
	  //title
	})
});

module.exports = router;

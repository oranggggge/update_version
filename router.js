const Router = require('koa-router');
const router = new Router();
const user = require('./controller/user');
const update = require('./controller/update');
const common = require('./controller/common');


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

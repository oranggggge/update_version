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
//router.get('/koa', common.koa_static);
router.get('/', ctx=>{
	ctx.body = `建设中`
});

module.exports = router;

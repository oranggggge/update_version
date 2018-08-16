const multer=require('koa-multer');
const { uploadFile } = require('../utils/uploadFile');
const path = require('path');

//update controller
module.exports = {
	async index (ctx) {
		  let title = 'upload index';
		  await ctx.render('upload', {
   		      title
  		  })
		//ctx.body = `this is main page`
	},
	async upload (ctx) {
		/*
		var storage = multer.diskStorage({
		  //文件保存路径
		  destination: function (req, file, cb) {
		    cb(null, 'public/uploads/')
		  },
		  //修改文件名称
		  filename: function (req, file, cb) {
		    var fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
		    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
		  }
		})
		var upload = multer({ storage: storage });
		*/
		// 上传文件请求处理
		let result = { success: false }
		let serverFilePath = path.join( __dirname, 'public/uploads/' )

		// 上传文件事件
		result = await uploadFile( ctx, {
		  fileType: 'file', // common or album
		  path: serverFilePath
		})

		ctx.body = result

	},
}

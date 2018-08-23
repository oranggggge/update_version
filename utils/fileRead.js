var fs = require("fs")
exports.writeFile = async function (filename, writeText) {
    let data = await writeFileData(filename, writeText)
    return data
}
function writeFileData(filename, writeText) {
     return new Promise((resolve, reject) => {
        fs.writeFile(filename, writeText, function (err) {
            if(err){
                console.log('出现错误!');
                reject("error")
            }else{
                console.log('写文件结束');
                resolve('ok')
            }
        });
     });
}

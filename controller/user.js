// controller/user.js

const sleep = async (ms) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}
module.exports = {
  login (ctx) {
    ctx.body = {
      username: ctx.request.body.username
    }
  },
  async profile (ctx) {
    await sleep(1000)
    ctx.body = {
      username: 'orange',
      sex: 'man',
      age: '999'
    }
  }
}

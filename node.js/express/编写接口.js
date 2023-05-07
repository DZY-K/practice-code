const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
// 一定要在路由之前配置cors这个中间件，解决跨域问题
const cors = require('cors')
app.use(cors())
const router = require('./API路由')
app.use('/api', router)
// app.use(function(err,req,res,next){
  // console.log(err.message);
  // res.send(err.message)
// })
app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1');
})
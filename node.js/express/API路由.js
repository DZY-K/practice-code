const express = require('express')
const isRouter = express.Router()
// 挂载路由
// 编写get接口
isRouter.get('/get', (req, res) => {
  // 通过req.query获取客户端通过查询字符串，发送到服务器的数据
  const query = req.query
  // express.setRequestHeader ( ' Content-Type','application/x-www-form-urlencoded')
  // 向客户端响应处理的结果
  res.send({
    status: 0,
    msg: 'GET请求成功', 
    data: query
  })
})
isRouter.post('/post',(req,res)=>{
  //通过 req. body获取请求体中包含的url-encoded格式的数据
  const body = req.body
  res.send({
    status:0,
    msg:'post请求成功',
    data:body
  })
})
module.exports = isRouter

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
// const expressjwt = require('express-jwt') 
const { expressjwt: expressjwt } = require("express-jwt");
// 防止跨域
const cors = require('cors')
app.use(cors())
// 解析post表单中间件
app.use(express.urlencoded({extends:false}))
// secret密钥
const secretKey = 'QianDuanKaiFa NO1 (*^_^*)'
// 注册将JWT字符串解析还原成JSON对象的中间件
// expressJWT({secret:secretKey} 就是用来解析 Token的中间件
// .unless({path:[/^\/api\//]})用来指定哪些接口不需要访问权限
// 这里补上 新版本  expressJWT（{algorithms:['HS256']}）
app.use(expressjwt({secret:secretKey,algorithms:['HS256']}).unless({path:[/^\/api\//]}))
// 登录接口
app.post('/api/login',function(req,res){
  const userinfo = req.body
  // 登陆失败
  if(userinfo.username !== 'admin' || userinfo.password !== '000000'){
    return res.send({
      status: 400,
      msg:'登陆失败'
    })
  }
  // 登录成功
  // 调用jwt.sign()方法生成字符串，通过token属性发送给客户端
  // 参数1：用户信息 参数2：加密的密钥 参数3：配置的对象，可以配置token的有效期
  const tokenStr = jwt.sign({ username:userinfo.username},secretKey,{expiresIn:'30s'})
  res.send({
    status: 200,
    msg:'登录成功',
    token:tokenStr, // 发送给客户端的token字符串
  })
})
// 有权限的API接口
app.get('/admin/getinfo',(req,res)=>{
  // 使用req.user 获取用户信息，使用data属性将用户信息发送给客户端
  res.send({
    status:200,
    msg:'获取用户信息成功',
    data:req.auth //要发送给客户端的用户信息
  })
})
app.use((err,req,res,text)=>{
  // token解析失败导致的错误
  if(err.name==='UnauthorizedError'){
    return res.send({status:401,message:'无效的token'})
  }
  // 其他原因导致的错误
  res.send({status:500,message:'未知错误'})
})
app.listen(82,()=>{
  console.log('Express server running at http://127.0.0.1:82');
})
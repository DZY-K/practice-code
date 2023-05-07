const express = require('express')
const app = express()
// 配置session中间件
const session = require('express-session')
app.use(
  session({
    secret:'ithema',
    resave:false,
    saveUninitialized:true
  })
)
// 托管静态页面
app.use(express.static('./pages'))
// 解析post提交的表单数据
app.use(express.urlencoded({extended:false}))
// 登录API接口
app.post('/api/login',(req,res)=>{
  if(req.body.username!=='admin' || req.body.password!=='000000'){
    return res.send({
      status: 1,
      msg: '登陆失败'
    })
  }
  // 用户信息存储到Session中
  req.session.user=req.body
  // 用户的登陆状态存储到session
  req.session.islogin=true
  res.send({status:0,msg:'登录成功'})
})
// 获取用户姓名的接口
app.get('/api/username',(req,res)=>{
  // 判断用户是否登录
  if(!req.session.islogin){
    return res.send({
      status: 1,
      msg: 'fail'
    })
  }
  res.send({status:0,msg:'success',username:req.session.user.username})
})
// 退出登录接口
app.post('/api/logout',(req,res)=>{
  // 清空当前客户端对应的session信息
  req.session.destroy()
  res.send({status:0,msg:'退出成功'})
})
app.listen(80,()=>{
  console.log('Express server running at http://127.0.0.1');
})
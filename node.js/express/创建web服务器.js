// 导入express
const express= require('express')
// 创建web服务器
const app = express()
// 监听客户端get和post请求，并向客户端响应具体的内容
app.get('/user',(req,res)=>{
  // 调用express 提供的res.send()方法，向客户端响应一个JSON对象
  res.send({name:'zs',age:14})
})
app.post('/user',(req,res)=>{
  // 调用express 提供的res.send()方法，向客户端响应一个文本字符串
  res.send('请求成功')
})

// 调用app.listen(端口号，启动成功后的回调函数)，启动服务器
app.listen(80,()=>{
  console.log('express server running at http://127.0.0.1');
})
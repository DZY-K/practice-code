// 导入HTTP模块
const http =require('http')
// 创建web服务器实例
const server =http.createServer()
// 为服务器实例绑定request事件，监听客户端请求
server.on('request',function(req,res){
  console.log('Someone visit out web serve');
})
// 启动服务器
server.listen(80,()=>{
  console.log('http server running at http://127.0.0.1');
})
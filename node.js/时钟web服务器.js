// 访问网址，读取资源、
// 思路：把文件的实际存放路径，作为每个资源的请求url地址。

const http =require('http')
const fs =require('fs')
const path=require('path')
const server =http.createServer()
server.on('request',(req,res)=>{
  const url =req.url
  // let str =path.join(__dirname,url)
  // 优化资源的请求路径
  let str=''
  if(url==='/'){
    str=path.join(__dirname,'./index.html')
  }else {
    str=path.join(__dirname, './clock'+url)
  }
  fs.readFile(str,'utf8',function(err,dataStr){
    if(err){
      return res.end(`404 NOT Found`)
    }
    res.end(dataStr)
  })

})
server.listen(80,()=>{
  console.log('http server running at http://127.0.0.1');
})
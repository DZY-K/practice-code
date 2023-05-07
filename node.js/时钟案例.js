const { log } = require('console')
const fs =require('fs')
const path =require('path')

const regStyle= /<style>[\s\S]*<\/style>/
const regscript= /<script>[\s\S]*<\/script>/
// 读HTML文件
fs.readFile(path.join(__dirname,'./index.html'),'utf8',function(err,dataStr){
  if(err){
    return console.log('读取失败'+err.message);
  }
  // console.log("读取成功");
  // 调用方法，分别拆解css,js,html文件
  resolveCSS(dataStr)
  resolveJs(dataStr)
  resolveHTML(dataStr)
})
// 处理css方法
function resolveCSS(htmlStr){
  // 搜索匹配样式
  const r1=regStyle.exec(htmlStr)
  // console.log(r1);
  // 替换标签
  const r2 = r1[0].replace('<style>','').replace('</style>','')
  // console.log(r2);
  fs.writeFile(path.join(__dirname,'./index.css'),r2,function(err){
    if(err) return console.log('写入失败'+err.message);
    console.log("写入成功");
  })
  

}
  // 处理js方法
function resolveJs(htmlStr){
  // 匹配js
  const r1= regscript.exec(htmlStr)
  // 把script标签替换掉
  const newJs=r1[0].replace('<script>','').replace('</script>','')
  fs.writeFile(path.join(__dirname,'./index.js'),newJs,function(err){
    if(err) return console.log("写入失败");
    console.log("写入成功");
  })
}
// 处理HTML方法
function resolveHTML(htmlStr){
  const r1=htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css"/>').replace(regscript,'<script src="./index.js"></script>')
fs.writeFile(path.join(__dirname,'./index.html'),r1,function(err){
  if(err) return console.log("写入成功");
})
}
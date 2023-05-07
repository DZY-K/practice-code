// 导入数据库模块 
const mysql = require('mysql')
// 建立与MySQL数据库的连接
const db =mysql.createPool({
  // 数据库的IP地址
  host:'127.0.0.1',
  // 登陆数据库的账号
  user:'root',
  // 登陆数据库的密码
  password:'admin123',
  // 指定操作哪个数据库
  database:'my_db_01'
})
// 测试MySQL模块能否正常工作
// db.query('select 1',(err,results)=>{
  // mysql模块工作期间报错了
  // if(err) return console.log(err.message);
  // console.log(results);
// })

// 查询表里的所有数据
const sqlStr = 'select * from student'
db.query(sqlStr,(err,result)=>{
  if(err) return console.log(err.message);
  console.log(result);
})
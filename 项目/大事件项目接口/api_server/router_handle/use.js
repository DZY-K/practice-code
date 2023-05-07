// 路由处理函数模块中，专门负责存放每个路由对应的处理函数
// 导入数据库模块
const db = require('../db/index')
// 导入bcryptjs模块
const bcrypt = require('bcryptjs')
// 用这个包来生成 Token 字符串
const jwt = require('jsonwebtoken')
const config = require('../config')
// 注册用户处理函数
exports.regUser=(req,res)=>{
  // 获取客户端提交到服务器的用户信息
  const userinfo = req.body
  // console.log(userinfo);
  // if(!userinfo.username || !userinfo.password){
    // return res.cc('用户名和密码不能为空')
  // }
  const sqlStr = `select * from ev_users where username=?`
  // 判断用户名是否被占用
  db.query(sqlStr,[userinfo.username],(err,results)=>{
    if(err){
      return res.cc(err)
    }
    if(results.length>0){
      return res.cc('用户名被占用,请更换其他用户名')
    }
    // 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)
    // 插入新用户
    const sql = 'insert into ev_users set ?'
    db.query(sql,{username:userinfo.username,password:userinfo.password},(err,results)=>{
      if(err) return res.cc(err)
      // 影响行数不为1
      if(results.affectedRows!==1){
        return res.cc('注册用户失败')
      }
      res.cc('注册用户成功',0)
    })

  })
  // res.send('reguser OK')
}
// 登陆的处理函数
exports.login=(req,res)=>{
  const userinfo = req.body
  // 根据用户名查询用户的数据
  const sql = `select * from ev_users where username=?`
  db.query(sql,userinfo.username,(err,results)=>{
    // console.log(results[0]);
    if(err) return res.cc(err)
    if(results.length !== 1) return res.cc('登录失败')
    // 判断密码是否正确
    // bcrypt.compareSync(用户提交的密码, 数据库中的密码) 方法比较密码是否一致
    // 给用户密码加密与数据库中的密码进行比较 返回值是布尔值（true 一致、false 不一致）
    const compareResult = bcrypt.compareSync(userinfo.password,results[0].password)
    if(!compareResult){
      return res.cc('登录失败')
    }
 // 在生成 Token 字符串的时候，一定要剔除 密码 和 头像 的值
    const user = { ...results[0], password:'', user_pic:''}
    const tokenStr = jwt.sign(user,config.jwtSecretKey,{
      expiresIn:'10h'
    })
    res.send({
      status: 0,
      message:'登录成功',
      // 'Bearer '一定要加空格
      token:'Bearer ' + tokenStr
    })
  })
  
}
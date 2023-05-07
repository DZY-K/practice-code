// 用户信息
const express = require('express')
const router = express.Router()
// 导入验证数据合法性的中间件
const expressJoi = require('@escook/express-joi')
// 导入需要的验证规则对象
const { update_userinfo_schema, update_password_schema, update_avatar_schema } = require('../schema/use')
// 导入用户信息路由处理函数
const userinfo_handle = require('../router_handle/userinfo')
// 获取用户基本信息
router.get('/userinfo',userinfo_handle.getUserinfo)
// 更新用户基本信息
router.post('/userinfo', expressJoi(update_userinfo_schema),userinfo_handle.updateUserinfo)
// 重置密码的路由
router.post('/updatepwd',expressJoi(update_password_schema),userinfo_handle.updatePassword)
// 更新用户头像的路由
router.post('/update/avatar',expressJoi(update_avatar_schema), userinfo_handle.updateAvatar) 

module.exports = router
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./router')
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use('/api',router)
app.listen(3006,function(){
  console.log('api server running at http://127.0.0.1:3006');
})
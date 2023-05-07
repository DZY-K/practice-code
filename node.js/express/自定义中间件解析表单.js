const express = require('express')
const app = express()
const parser =require('./custom-paeser')
app.use(parser)
app.post('/user',(req,res)=>{
  res.send(req.body)
})
app.listen(80,function(){
  console.log('Express server running at http://127.0.0.1');
})
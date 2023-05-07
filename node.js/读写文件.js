
const fs = require('fs')
// 读取
fs.readFile('./成绩.txt', 'utf8', function (err, datastr) {
  if (err) {
    return console.log('读取失败' + err);
  }
  // 先把成绩数据用空格分割为数组
  const arrOld=datastr.split(' ')
  // console.log(arrOld);
  // 把数组里的等号替换成:(冒号)
  const arrNew= []
  // 遍历数组每一项
  arrOld.forEach((item)=>{
    // console.log(item);
  arrNew.push(item.replace('=',':'))
  })
  // console.log(arrNew);
  const Str =arrNew.join('\r\n')
  // console.log(Str);

  // 其他
  // for (let k of datastr) {
    // const str = k.replace('=', ':')
    // console.log(str);
    // const strNew = str.replace(' ', '\r\n')
    // console.log(strNew);
  // }

  // 写入 会覆盖原来的数据
  fs.writeFile('./成绩.txt',Str,function(err){
    if(err){
     return console.log('成绩写入失败');
    }
    console.log('成绩写入成功');
  })
})


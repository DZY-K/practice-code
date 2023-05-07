function dateFormat(dt){
  const date = new Date(dt)
  let Y = date.getFullYear()
  let m = padZero(date.getMinutes() + 1)
  let d = padZero(date.getDate())
  let hh = padZero(date.getHours())
  let mm = padZero(date.getMinutes())
  let ss = padZero(date.getSeconds())
  return `${Y}-${m}-${d} ${hh}:${mm}:${ss}`
}
function padZero(n){
  return n < 10 ? '0' + n : n
}
module.exports={
  dateFormat
}
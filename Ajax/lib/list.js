function template(id,data){
  let str =document.getElementById(id).innerHTML
  let as=/{{\s*([a-zA-Z]+)\s*}}/
  // let ass=null
  while(ass=as.exec(str)){
    str=str.replace(ass[0],data[ass[1]])
  }
  return str
}
function resolve(data){
  let arr=[]
  for( let k in data){
    let str=k+'='+data[k]
    arr.push(str)
  }
  return arr.join('&')
}
// var res =resolve({ name:'zs' , age: 12})
// console.log(res);
function AjaxData(options){
    const xhr =new XMLHttpRequest()
    let qs = resolve(options.data)

    if(options.method.toUpperCase()==='GET'){
      xhr.open(options.method,options.url+'?'+qs)
      xhr.send()
    }else if(options.method.toUpperCase()==="POST"){
      xhr.open(options.method,options.url)
      xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
      xhr.send(qs)
    }

    xhr.onreadystatechange=function(){
      if( xhr.readyState===4&&xhr.status===200){
        let res =JSON.parse(xhr.responseText)
        options.success(res)
      }
    }
}
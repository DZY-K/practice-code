window.addEventListener('load',function(){
const focus=this.document.querySelector('.focus')
let i=0
let flag =true
focus.addEventListener('click',function(){
  if(flag){
    flag=false
    i++
    // console.log(focus.querySelectorAll('li').length);
    if(i>=focus.querySelectorAll('li').length){
      i=1
    }
    // console.log(focus.querySelectorAll(`img`)[i]);
    this.querySelector('.active img').src=focus.querySelectorAll('img')[i].src

  }
  flag=true
})

let timer=setInterval(function(){
  focus.click()
},1000)
focus.addEventListener('mouseover',function(){
  clearInterval(timer)

})
focus.addEventListener('mouseout',function(){
timer=setInterval(function(){
    focus.click()
  },1000)

})
})
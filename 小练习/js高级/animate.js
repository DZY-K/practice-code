function animate(obj, target,callback) {
  // 多次调用先清除定时器，只保留一个定时器。
  clearInterval(obj.timer)
  obj.timer = setInterval(function () {
    var step =(target - obj.offsetLeft)/10
    // 当盒子步长小于零步长往上取整，反之往下
    stp =step>0 ? Math.ceil(step) : Math.floor(step)
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer)
      if(callback){
        callback()
      }
    }else{
      obj.style.left = obj.offsetLeft + stp + 'px'
    }
    
  }, 15)
}
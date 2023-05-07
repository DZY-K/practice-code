window.addEventListener('load', function () {
  var num = 0
  var focus = this.document.querySelector('.focus')
  var ul = focus.querySelector('ul')
  var w = focus.offsetWidth

  var timer = setInterval(function () {
    // 刚一打开页面呈现的第一张图片为索引号零，num++是为了让页面滚动。num加1后才能滚动
    num++
    // if(num==4){
    // num=1
    // }
    var x = -num * w

    ul.style.transition = 'all 0.3s'
    ul.style.transform = 'translateX(' + x + 'px)'
  }, 2000)
  var ol = focus.querySelector('ol')
  ul.addEventListener('transitionend', function () {
    if (num >= 3) {
      num = 0
      ul.style.transition = 'none'
      var x = -num * w
      ul.style.transform = 'translateX(' + x + 'px)'
    }
    if (num < 0) {
      num = 2
      ul.style.transition = 'none'
      var x = -num * w
      ul.style.transform = 'translateX(' + x + 'px)'

    }
    ol.querySelector('.cur').classList.remove('cur')
    ol.children[num].classList.add('cur')
  })
  var showx = 0
  var movex = 0
  var flag = false
  ul.addEventListener('touchstart', function (e) {
    clearInterval(timer)
    showx = e.targetTouches[0].pageX

  })
  ul.addEventListener('touchmove', function (e) {
    movex = e.targetTouches[0].pageX - showx
    var x = -num * w + movex
    ul.style.transition = 'none'
    this.style.transform = 'translateX(' + x + 'px)'
    flag = true
    e.preventDefault
  })

  ul.addEventListener('touchend', function () {
    if (true) {
      flag=false
      if (Math.abs(movex) > 50) {
        if (movex > 0) {
          num--
        } else {
          num++
        }
        ul.style.transition = 'all 0.3s'
        var x = -num * w
        ul.style.transform = 'translateX(' + x + 'px)'
      } else {
        ul.style.transition = 'all 0.1s'
        var x = -num * w
        ul.style.transform = 'translateX(' + x + 'px)'
      }
      // 手指离开开启定时器
      clearInterval(timer)
      timer = setInterval(function () {
        // 刚一打开页面呈现的第一张图片为索引号零，num++是页面滚动。num加1后才能滚动

        num++
        // if(num==4){
        // num=1
        // }
        var x = -num * w
        ul.style.transition = 'all 0.3s'
        ul.style.transform = 'translateX(' + x + 'px)'
      }, 2000)
    }


  })
})



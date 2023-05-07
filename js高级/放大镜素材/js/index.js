const md_img = document.querySelector('.middle img')
const small = document.querySelector('.small')
const large = document.querySelector('.large')


// 轮播图
let i = 0
let flag = true
// 定时器
let timr =setInterval(function () {
  small.click()
}, 1000)

small.addEventListener('click', function (e) {
  if (flag) {
    flag=false
    i++
    if (i >= this.querySelectorAll('li').length) {
      i = 0
    }
    this.querySelector('.active').classList.remove('active')
    small.querySelectorAll('img')[i].parentNode.classList.add('active')
    md_img.src = small.querySelectorAll('img')[i].src
  }
  flag = true
})

// 小图片切换 


small.addEventListener('mouseover', function (e) {
  // 鼠标经过，清除定时器
    clearInterval(timr)
  // console.log(e.target.tagName);
  if (e.target.tagName === 'IMG') {
    // console.log(111);
    this.querySelector('.active').classList.remove('active')
    e.target.parentNode.classList.add('active')
    // console.log(e.target.src);
    md_img.src = e.target.src
    large.style.backgroundImage = `url(${e.target.src})`
  }
  // md_img.src=`../images/1.jpg`
})
// 鼠标离开，开启定时器
small.addEventListener('mouseout',function(){
  clearInterval(timr)
  timr = setInterval(function () {
    small.click()
  }, 1000)
})




// 中盒子

const middle = document.querySelector('.middle')
const layer = middle.querySelector('.layer')
middle.addEventListener('mouseenter', show)
middle.addEventListener('mouseleave', hide)
// 控制大盒子的显示与隐藏
let timer = null
function show() {
  clearTimeout(timer)
  large.style.display = 'block'
}
function hide() {
  timer = setTimeout(function () {
    large.style.display = 'none'
  }, 200)
}
large.addEventListener('mouseenter', show)
large.addEventListener('mouseleave', hide)

// 控制黑色盒子的显示与隐藏
middle.addEventListener('mouseenter', function () {
  clearInterval(timr)
  layer.style.display = 'block'
})
middle.addEventListener('mouseleave', function () {
  layer.style.display = 'none'
  clearInterval(timr)
  timr = setInterval(function () {
    small.click()
  }, 1000)
})

middle.addEventListener('mousemove', function (e) {

  let x = e.pageX
  let y = e.pageY
  // console.log(x,y);
  // const boxX=middle.offsetLeft
  // const boxY=middle.offsetTop
  // console.log(middle.getBoundingClientRect().left)
  // console.log(document.documentElement.scrollTop);
  // layer.style.left=x-boxX
  // layer.style.top=y-boxY
  let xx = x - middle.getBoundingClientRect().left
  let yy = y - middle.getBoundingClientRect().top - document.documentElement.scrollTop
  // console.log(xx,yy);
  // 限定距离
  if (xx >= 0 && xx <= 400 && yy >= 0 && yy <= 400) {
    let ax = 0
    let ay = 0
    if (xx < 100) ax = 0
    if (xx >= 100 && xx <= 300) ax = xx - 100
    if (xx > 300) ax = 200

    if (yy < 100) ay = 0
    if (yy >= 100 && yy <= 300) ay = yy - 100
    if (yy > 300) ay = 200

    layer.style.left = ax + 'px'
    layer.style.top = ay + 'px'
    large.style.backgroundPositionX = -2 * ax + 'px'
    large.style.backgroundPositionY = -2 * ay + 'px'

  }
})

const attrs = document.querySelector('.attrs')
attrs.addEventListener('click', function (e) {
  // console.log(e.target.tagName);
  if (e.target.tagName === 'IMG') {
    //  this.querySelector('img').classList.remove('.active')
    e.target.classList.toggle('active')

  }
  // console.log(e.target.tagName);
  if (e.target.tagName === 'SPAN') {
    //  this.querySelector('img').classList.remove('.active')
    e.target.classList.toggle('active')
  }
  if (e.target.tagName === 'A') {
    // console.log(e.target.nodeName);
    if (e.target.innerText === '-') {
      if (this.querySelector('input').value > 1) {
        this.querySelector('input').value--
      }
    }
    if (e.target.innerText === '+') {
      this.querySelector('input').value++
    }
  }
})





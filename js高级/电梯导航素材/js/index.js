const xtx_elevator = document.querySelector('.xtx-elevator')
// const xtx_panel_header =document.querySelector('.xtx_panel_header')
// 电梯显示隐藏
window.addEventListener('scroll', function () {
  let n = this.document.documentElement.scrollTop
  // if(n>=100){
  // xtx_elevator.style.opacity=1
  // }else {
  // xtx_elevator.style.opacity=0
  // }
  // console.log(document.documentElement.scrollTop);
  xtx_elevator.style.opacity = n >= 300 ? 1 : 0
  // 点击返回页面顶部
  const backTop = xtx_elevator.querySelector('#backTop')
  backTop.addEventListener('click', function () {
    document.documentElement.scrollTop = 0
  })
})
const list = xtx_elevator.querySelector('.xtx-elevator-list')
list.addEventListener('click', function (e) {
  // console.log(e.target.tagName);
  if (e.target.tagName === 'A') {
    // console.log(e.target.dataset.name);
    const top = document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop
    document.documentElement.scrollTop = top
  }
})

window.addEventListener('scroll', function (e) {

  const old=this.document.querySelector('.xtx-elevator-list .active')
  if(old) old.classList.remove('active')
  const news = document.querySelector('.xtx_goods_new')
  const popular = document.querySelector('.xtx_goods_popular')
  const brand = document.querySelector('.xtx_goods_brand')
  const topic = document.querySelector('.xtx_goods_topic')
  let n = document.documentElement.scrollTop
  if (n >= news.offsetTop && n < popular.offsetTop) {
    this.document.querySelector('[data-name="new"]').classList.add('active')
  }else if(n >= popular.offsetTop && n < brand.offsetTop){
    this.document.querySelector('[data-name="popular"]').classList.add('active')
  }else if(n >= brand.offsetTop && n < topic.offsetTop){
    this.document.querySelector('[data-name="brand"]').classList.add('active')
  }else if(n >= topic.offsetTop){
    this.document.querySelector('[data-name="topic"]').classList.add('active')
  }
})










$(function () {
  const top1 = $(".recom").offset().top
  let flag = true
  // 页面滚动显示隐藏
  // 封装函数，页面加载就可显示或隐藏
  load()
  function load() {
    if ($(document).scrollTop() >= top1) {
      $(".box_nav").fadeIn()
    } else {
      $(".box_nav").fadeOut()
    }
  }
  $(window).scroll(function () {
    load()
    // if (flag) {
      // if (($(document).scrollTop() >= top1) && ($(document).scrollTop() < $(".floor w:eq(0)").offset().top)) {
        // $(".box_nav li:eq(1)").children().addClass("current").parent("li").siblings("li").children().removeClass
          // ("current")
      // // } else if (($(document).scrollTop() >= $(".floor w:eq(0)").offset().top) && ($(document).scrollTop() < $(".floor w: eq(1)").offset().top)) {
        // $(".box_nav li:eq(2)").children().addClass("current").parent("li").siblings("li").children().removeClass
          // ("current")
      // } else if ($(document).scrollTop() >= $(".floor w:eq(1)").offset().top) {
      // $(".box_nav li:eq(3)").children().addClass("current").parent("li").siblings("li").children().removeClass
        // ("current")
    // }
  // }
    
  })
// 返回顶部
$(".box_nav a").eq(0).click(function () {
  $("body,html").animate({
    scrollTop: 0
  })
})

$(".box_nav a").eq(1).click(function () {
  $("body,html").animate({
    scrollTop: top1
  })
})
$(".box_nav a").eq(2).click(function () {
  $("body,html").animate({
    scrollTop: $(".jiadian").offset().top
  })
})
$(".box_nav a").eq(3).click(function () {
  $("body,html").animate({
    scrollTop: $(".shouji").offset().top
  })
})
$(".box_nav a").click(function () {
  $(this).addClass("current").parent("li").siblings("li").children().removeClass("current")
})
})
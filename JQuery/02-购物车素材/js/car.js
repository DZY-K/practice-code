$(function () {
  // 全选按钮
  $(".cart-thead .checkall").change(function () {
    // console.log($(this).prop("checked"));
    $(".cart-item-list .j-checkbox").prop("checked", $(this).prop("checked"))
    if ($(this).prop("checked")) {
      $(".cart-item").addClass("check-cart-item")
    } else {
      $(".cart-item ").removeClass("check-cart-item")
    }
    getSum()

  })
  // 小按钮全选
  $(".cart-item-list .j-checkbox").change(function () {
    if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
      $(".cart-thead .checkall").prop("checked", true)
    } else {
      $(".cart-thead .checkall").prop("checked", false)

    }
    if ($(this).prop("checked")) {

      $(this).parents(".cart-item").addClass("check-cart-item")
    } else {
      $(this).parents(".cart-item").removeClass("check-cart-item")
    }
    getSum()

  })
  // 增加数量
  $(".increment").click(function () {
    let n = $(this).siblings(".itxt").val()
    n++
    $(this).siblings(".itxt").val(n)
    const txt = $(this).parents(".p-num").siblings(".p-price").html()
    // console.log(txt);
    const num = txt.substring(1)
    // console.log(num);
    let price = (num * n).toFixed(2)
    $(this).parents(".p-num").siblings(".p-sum").html("￥" + price)
    getSum()
  })
  // 减少商品数量
  $(".decrement").click(function () {
    let n = $(this).siblings(".itxt").val()
    n--
    if (n < 1) {
      return false
    }
    $(this).siblings(".itxt").val(n)
    const txt = $(this).parents(".p-num").siblings(".p-price").html()
    // console.log(txt);
    const num = txt.substring(1)
    // console.log(num);
    let price = (num * n).toFixed(2)
    $(this).parents(".p-num").siblings(".p-sum").html("￥" + price)
    getSum()
  })
  // 文本框的值改变
  $(".itxt").change(function () {
    let nums = $(this).val()
    const txt = $(this).parents(".p-num").siblings(".p-price").html()
    // console.log(txt);
    const num = txt.substring(1)
    // console.log(num);
    let price = (num * nums).toFixed(2)
    $(this).parents(".p-num").siblings(".p-sum").html("￥" + price)
    getSum()
  })
  getSum()
  // 计算总件数和总额数
  function getSum() {
    let count = 0
    let money = 0
    // 所有选中的进行计算
    $(".j-checkbox:checked").each(function (i, ele) {
      count += parseInt($(".itxt").eq(i).val())
      const num = $(".p-sum").eq(i).text().substring(1)
      money += parseFloat(num)
    })
    $(".price-sum em").html("￥" + money.toFixed(2))
    $(".amount-sum em").html(count)

  }
  // 删除
  $(".p-action a").click(function () {
    $(this).parents(".cart-item").remove()
    getSum()
  })

  $(".checkall").change(function () {
    // console.log($(this).prop("checked"));
    $(".cart-item-list .j-checkbox").prop("checked", $(this).prop("checked"))
    if ($(this).prop("checked")) {
      $(".cart-item").addClass("check-cart-item")
    } else {
      $(".cart-item ").removeClass("check-cart-item")
    }
  })
  $(".remove-batch").click(function () {
    $(".j-checkbox:checked").parents(".cart-item").remove()
    getSum()
  })
  $(".clear-all").click(function () {
    $(".cart-item").remove()
    getSum()
  })
})

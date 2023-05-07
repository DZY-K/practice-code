$(function () {
  // 按下回车，把数据存储到本地存储里
  // load()
  $("#title").on("keydown", function (event) {
    if (event.keyCode === 13) {
      // 先读取本地存储原来的数据
      var local = getDate();
      console.log(local);
      local.push({ title: $(this).val(), done: false });
      saveDate(local);
      // load()
    }
  })
  // 获取本地数据
  function getDate() {
    var data = localStorage.getItem("tudolist")
    if (data !== null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
  // 保存本地数据
  function saveDate(data) {
    localStorage.setItem("todolist", JSON.stringify(data));
  }
})
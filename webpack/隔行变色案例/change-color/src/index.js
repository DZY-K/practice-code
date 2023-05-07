import $ from 'jquery'
import './index.css'
import './index.less'
$(function(){
  $("li:odd").css("background","black")
  $("li:even").css("background","pink")

})

// 定义一个info装饰器 高级语法
function info(target){
  target.info = 'person info'
}
// 为person类应用装饰器
@info
class Person{}
console.log(Person.info);
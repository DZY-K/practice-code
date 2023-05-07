// var that
class Tab {

  // constructor接受参数
  constructor(id) {
    // that = this
    //获取元素
    // 这里的main,lis,sections都是变量
    this.main = document.querySelector(id)
    
    
    this.add = this.main.querySelector('.tabadd')
    this.ul = this.main.querySelector('.fisrstnav ul:first-child')
    this.tabscon = this.main.querySelector('.tabscon')
    this.init()
  }
  init() {
    // 初始化操作让相关元素绑定事件
    // 封装获取元素，使添加元素也能获得如下功能
    this. updateData()
    // bind这里的使用:bind(原来this指向，传的参数指向) 传的this是指向constructor
    this.add.onclick = this.addTab.bind(this.add,this)
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      // toggleTab被调用，toggleTab的this指向lis也就是li
      this.lis[i].onclick = this.toggleTab.bind(this.lis[i],this)
      this.icon_guanbi[i].onclick=this.removeTab.bind(this.icon_guanbi[i],this)
      this.edit[i].ondblclick=this.editTab
      this.sections[i].ondblclick=this.editTab
    }

  }
  updateData(){
    this.lis = this.main.querySelectorAll('li')
    this.sections = this.main.querySelectorAll('section')
    this.icon_guanbi=this.main.querySelectorAll('.icon-guanbi')
    this.edit=this.main.querySelectorAll('.fisrstnav li span:first-child')
    
  }
  //切换功能
  toggleTab(that) {
    // clear里有sections所以用that
    that.clear()
    // 如下的this指向li,所以改变li的类名
    this.className = 'liactive'
    // toggleTab里的this指向li,无法用sections，在constructor里有sections，所以用constructor里的this也就是that
    that.sections[this.index].className = 'conactive'

  }
  clear() {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = ''
      this.sections[i].className = ''
    }

  }
  //添加功能
  addTab(that) {
    that.clear()
    var li = ' <li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span></li>'
    var section = ' <section class="conactive">测试2</section>'
    that.tabscon.insertAdjacentHTML('beforeend', section)
    that.ul.insertAdjacentHTML('beforeend', li)
    // 重新初始化，把添加的li和section重新获取重新循环
    that.init()

  }
  //删除功能
  removeTab(that,e) {
    e.stopPropagation()
    var index=this.parentNode.index
    // console.log(index);
    that.lis[index].remove()
    that.sections[index].remove()
    that.init()
    // 删除不是选中状态的li,保持li状态不变
    if(document.querySelector('.liactive')) return;
    // 绑定click自动选中
    index--
    that.lis[index] && that.lis[index].click()
   }
  //修改功能
  editTab() { 
    var str = this.innerHTML
    window.getSelection ? window.getSelection().removeAllRanges(): document.selection.empty()
    this.innerHTML='<input type="text"/>'
    var input = this.children[0]
    input.value=str
    input.select()
    input.onblur=function(){
      this.parentNode.innerHTML=this.value
    }
    input.onkeyup=function(e){
      if(e.keyCode=='13'){
        this.blur()
      }
    }
  }
}
// 创建实例对象
new Tab('#tab')
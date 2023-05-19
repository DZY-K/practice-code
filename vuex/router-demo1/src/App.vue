<template>
  <div class="app-container">
    <h1>App 根组件</h1>

   <a href="#/Home">首页</a>
   <a href="#/Movie">电影</a>
   <a href="#/About">关于</a>
    <hr />

    <component :is="comName"></component>
  </div>
</template>

<script>
// 导入组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'

export default{
  data(){
  return{
    // 在动态组件的位置，展示组件的名字，值必须是字符串
    comName:'Home'
  }
},
  name: 'App',
  // 注册组件
  components: {
    Home,
    Movie,
    About
  },
  created(){
  // 只要当前的App组件一旦被创建,就立即监听window对象的onhashchange 事件
  window.onhashchange=()=>{
    console.log(location.hash);
    switch(location.hash){
      case '#/Home': 
      this.comName='Home'
      break
      case '#/Movie':
      this.comName='Movie'
      break
      case '#/About':
      this.comName='About'
      break
    }
  }
}
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>

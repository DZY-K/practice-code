<template>
  <div class="app-container">
    <h1>App2 组件</h1>
<router-link to="/Tab1">TAB!1</router-link>
<router-link to="/Tab2">TAB!2</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'

export default {
  name: 'App',
  components:{
    Tab1,
    Tab2
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

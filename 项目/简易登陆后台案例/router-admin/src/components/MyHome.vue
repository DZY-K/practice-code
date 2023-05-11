<template>

  <div class="home-container">
    <!-- 头部区域组件 -->
    <MyHeader></MyHeader>
    <!-- 主体区域 -->
    <div class="home-main-box">
      <!-- 左侧边栏 -->
      <MyAside></MyAside>
      <!-- 右侧边栏 -->
      <div class="home-main-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/subcomponents/MyHeader.vue'
import MyAside from '@/components/subcomponents/MyAside.vue'
export default {
  name: 'MyHome',
  components: {
    MyHeader,
    MyAside
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;

  .home-main-box {
    height: 100%;
    display: flex;
    .home-main-body {
      padding: 15px;
      flex: 1;
    }
  }
}
</style>

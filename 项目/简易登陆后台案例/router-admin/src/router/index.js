import Vue from 'vue'
import VueRouter from 'vue-router'
import MyLogin from '@/components/MyLogin.vue'
import MyHome from '@/components/MyHome.vue'
import User from '@/components/menus/MyUsers.vue'
import power from '@/components/menus/MySettings.vue'
import goods from '@/components/menus/MyGoods.vue'
import orler from '@/components/menus/MyOrders.vue'
import system from '@/components/menus/MyRights.vue'
import userDetail from '@/components/UserDailt.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: MyLogin },
    {
      path: '/home',
      redirect: '/home/user',
      component: MyHome,
      children: [
        { path: 'user', component: User },
        { path: 'power', component: power },
        { path: 'goods', component: goods },
        { path: 'orler', component: orler },
        { path: 'system', component: system },
        { path: 'userDetail/:id', component: userDetail, props: true }

      ]
    }
  ]
})
router.beforeEach(function (to, from, next) {
  if (to.path === '/home/user') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router

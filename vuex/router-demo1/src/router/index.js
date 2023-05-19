import vue from 'vue'
import VueRouter  from 'vue-router'
import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'

vue.use(VueRouter)
const router = new VueRouter({
  routes:[
    {path:"/",redirect:"/Tab1"},
    {path:"/Tab1",component:Tab1},
    {path:"/Tab2",component:Tab2}
  ]
})
export default router
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Antd, { Button } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Button)
Vue.config.productionTip = false
Vue.use(Antd)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

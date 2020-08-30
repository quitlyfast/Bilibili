import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 路由守卫
import './router/routerProt'
import cookies from '@/utils/cookie'
Vue.config.productionTip = false
Vue.prototype.$cookies = cookies
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

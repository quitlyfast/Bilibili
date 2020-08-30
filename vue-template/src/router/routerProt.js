import router from './index'
import cookie from '@/utils/cookie'
import store from '@/store'
let getToken = null
const whiteRouter = ['/about']

function initStore () {
  cookie.removeCookieFn('token')
  store.commit('login/SET_TOKEN')
}

router.beforeEach((to, from, next) => {
  getToken = cookie.getCookieFn('token') || ''
  if (getToken) {
    if (to.path === '/about') {
      initStore()
    }
    next()
  } else {
    if (whiteRouter.includes(to.path)) {
      next()
    } else {
      next('/about')
    }
  }
})

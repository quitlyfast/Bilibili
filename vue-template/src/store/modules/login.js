import { loginFn } from '@/api/login'
import cookie from '@/utils/cookie'

const state = {
  token: '',
  userInfo: {}
}

const mutations = {
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_USERINFO (state, userInfo) {
    state.userInfo = userInfo
  }
}

const actions = {
  loginAction (ctx, params) {
    return new Promise((resolve, reject) => {
      loginFn(params)
        .then(res => {
          // const { token } = res.data.data
          const token = 456123
          cookie.setCookieFn('token', token)
          ctx.commit('SET_TOKEN', token)
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  logoutAction (ctx) {
    return new Promise((resolve, reject) => {
      loginFn()
        .then(res => {
          const { token } = res.data.data
          cookie.setCookieFn('token', token)
          ctx.commit('SET_TOKEN', token)
          resolve(res)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

import Cookies from 'js-cookie'

class Cookie {
  constructor () {
    this.Cookies = Cookies
  }

  getCookieFn (cookieName) {
    return this.Cookies.get(cookieName)
  }

  setCookieFn (cookieName, data) {
    return this.Cookies.set(cookieName, data)
  }

  removeCookieFn (cookieName) {
    return this.Cookies.remove(cookieName)
  }

  clearCookieFn () {
    return this.Cookies.clear()
  }
}
const cookie = new Cookie()
export default cookie
// 获取，设置， 删除, 移除cookie
// export function getCookieFn (cookieName) {
//   return Cookies.get(cookieName)
// }

// export function setCookieFn (cookieName, data) {
//   return Cookies.set(cookieName, data)
// }

// export function removeCookieFn (cookieName) {
//   return Cookies.remove(cookieName)
// }

// export function clearCookieFn () {
//   return Cookies.clear()
// }

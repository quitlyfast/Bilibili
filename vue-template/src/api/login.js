import service from '@/utils/request'

// 获取验证码
export function getSms () {
  return service.post('/getSms/', {
    username: '1111111@qq.com'
  })
}

// 登录
export function loginFn () {
  return service.post('/getSms/', {
    username: '1111111@qq.com'
  })
}

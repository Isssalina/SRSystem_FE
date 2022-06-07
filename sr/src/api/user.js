import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
export function getInfo(params) {
  return request({
    url: '/getUserInfo',
    method: 'get',
    params
  })
}

export function logout() {
  return request({
    url: '/sr/user/logout',
    method: 'post'
  })
}

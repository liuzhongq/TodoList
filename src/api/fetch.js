// 导入模块
// import Vue from 'Vue'
import axios from 'axios'
// import Cookie from 'js-cookie'
// import router from '@/router/index'
// import { Store } from 'vuex';
export default function fetch (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      headers: {
        // 'Set-cookie': JSON.stringify(setcookies)
        // 'Authorization': 'Bearer ' + token
      }
    })
    // http request 拦截器
    instance.interceptors.request.use(
      config => {
        return config
      },
      err => {
        return Promise.reject(err)
      }
    )
    // http response 拦截器
    instance.interceptors.response.use(
      response => {
        console.log(response)
        return response
      },
      error => {
        console.dir(error)
        return Promise.reject(error)
      }
    )
    // 请求处理
    instance(options)
      .then((res) => {
        // 请求成功时，根据业务判断状态
        resolve(res.data)
        return false
      })
      .catch((error) => {
        // 请求失败时，根据业务判断状态
        reject(error)
      })
  })
}

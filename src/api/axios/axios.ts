import axios from 'axios'
import { axiosConfig } from './axios.config'

const instance = axios.create(axiosConfig)

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 可以在这里添加token等认证信息
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    // 可以在这里处理错误
    return Promise.reject(error)
  }
)

export default instance
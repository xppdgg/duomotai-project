import axios from '../axios'

// 通用CRUD操作
export const crud = {
  // 获取列表
  getList: (url: string, params?: any) => {
    return axios.get(url, { params })
  },
  
  // 获取详情
  getDetail: (url: string, id: string | number) => {
    return axios.get(`${url}/${id}`)
  },
  
  // 创建
  create: (url: string, data: any) => {
    return axios.post(url, data)
  },
  
  // 更新
  update: (url: string, id: string | number, data: any) => {
    return axios.put(`${url}/${id}`, data)
  },
  
  // 删除
  delete: (url: string, id: string | number) => {
    return axios.delete(`${url}/${id}`)
  }
}
//axios基础的封装
import axios from 'axios'

const httpInstance = axios.create({
  baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

//拦截器

//axios请求拦截器
httpInstance.interceptors.request.use(config => {
  // console.log(config)
  return config
}, e =>Promise.reject(e))

//axios响应拦截器
httpInstance.interceptors.response.use(res =>res.data, e => {
  // console.log(res)
  return Promise.reject(e)
})
export default httpInstance

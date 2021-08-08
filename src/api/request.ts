import axios from 'axios'

const request = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
})

// Request interceptors
request.interceptors.request.use(
  (config) => {
    // Add Authorization header to every request, you can add other custom headers here
    config.headers['Authorization'] = 'token信息配置'
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

export default request

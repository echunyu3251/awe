import config from '@/config'
import  HttpRequest from './HttpRequest'

// 根据当前环境获取API根目录
const baseURL = process.env.NODE_ENV === 'production' ? config.baseURL.prod : config.baseURL.dev
// 创建一个HtpRequest对象实例
const axios = new HttpRequest(baseURL)

export default axios

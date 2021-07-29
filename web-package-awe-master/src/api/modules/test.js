import axios from '@/utils/axios'

// 获取列表
const test = (query, config) =>  axios.get('/api/v1/pc/home/classify', query, config)


export default {
  test
}

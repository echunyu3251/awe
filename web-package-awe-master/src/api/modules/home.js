import axios from '@/utils/axios'

// 获取活动列表
const getClassifyList = (query, config) => axios.get('/api/v1/pc/home/classify', query, config)


export default {
    getClassifyList
}

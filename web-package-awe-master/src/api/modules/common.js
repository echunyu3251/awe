import axios from '@/utils/axios'

const getExchangeRate =  (query, config) => axios.get('/api/v1/pc/exchangeRate', query, config)

export default {
    getExchangeRate
}

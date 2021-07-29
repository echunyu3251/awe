import { SET_EXCHANGE_RATE , SET_CLASSIFY_LIST , SET_BRAND_LIST } from "../mutation-types"
import api from '@/api'

const state = {
    //人民币 澳币汇率
    exchangeRate:5,
    classifyList:[],
    brandList:[],
    postTypeList:[],
    payTypeList:[],
    chinaAds:{},
    ausAds:{},
}
const mutations ={
    [SET_EXCHANGE_RATE](state,exchangeRate){
        state.exchangeRate = exchangeRate
    },
    [SET_CLASSIFY_LIST](state,classifyList){
        state.classifyList = classifyList
    },
    [SET_BRAND_LIST](state,brandList){
        state.brandList = brandList
    },
}
const actions = {
    getRealExchangeRate({commit}){
        api.common.getExchangeRate().then(
            (res)=>{
                const { result } = res
                commit(SET_EXCHANGE_RATE,result)
            },
            (err)=>{
                //do something
                console.log(err)
            })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
  
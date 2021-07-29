import { SET_TOKEN } from "../mutation-types"

const state = {
    token:'1',
    username:'',
    nikcname:'',
    level:'',


}
const mutations ={
    [SET_TOKEN](state,token){
        state.token = token
    }
}
const actions = {
    isLogin({commit,state}){
        if(state.token){ return false }
        return true
    },
    removeToken({commit}){
        commit(SET_TOKEN,'')
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
  
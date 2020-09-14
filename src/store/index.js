import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:{
      name:'贵阳',
      code:100
    }
  },
  mutations: {
    setCity(state,data){
      state.city=data;
    }
  },
  actions: {
  },
  modules: {
  }
})

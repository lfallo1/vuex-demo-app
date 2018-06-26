import Vue from 'vue'
import Vuex from 'vuex'
import counter from './store/counter.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      user: 'lfallo1'
    },
    actions:{
        notify({commit}, message){
            console.log(`NOTIFY MESSAGE: ${message}`);
        }
    },
    modules:{
      counter
    }
})

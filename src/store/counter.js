export default {
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        add(state, value){
            state.count += value;
        }
    },
    actions: {
        incrementCount({commit, dispatch}){
            commit('add', 1);
            dispatch('notify', 'Incrementing count')
        },
        decrementCount({commit, dispatch}){
            commit('add', -1);
            dispatch('notify', 'Decrementing count')
        },
        notify({dispatch}, message){
            dispatch('notify', message, { root: true })
        }
    }
};
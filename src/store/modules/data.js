const store = {
    namespaced:true,
    state: ()=> {
        data: Array;
    },
    mutations: {
        chgdata(state, payload){
            state.data = payload
        }
    },
    getters: {

    },
    actions: {}
}

export default store
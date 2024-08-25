// index.js
import { createStore } from "vuex";

export default createStore({
    namespaced: true,
    state: {
        COMM_COUNT:[
            {
                name : "Page A",
                count : 0,
                description : "count of Page A"
            },
            {
                name : "Page B",
                count : 0,
                description : "count of Page B"
            }
        ],
        count : 0,
    },
    getters: {
        count(state){
            return state.count;
        },
        
    },
    mutations: {
        increment(state){
            console.log(state.count);
            state.count++;
        }
    },
    actions: {
        increment({commit}){
            commit('increment');
        }
    },
    modules: {
        PageA : ()=> import("@/components/PageA.vue"),
        PageB : ()=> import("@/components/PageB.vue"),
    },
});

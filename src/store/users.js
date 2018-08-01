import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: {
            user1: {
                name: 'Tobi',
            },
            user2: {
                name: 'David',
            },
            user3: {
                name: 'Ralf',
            },
        },
    },
    mutations: {

    },
    actions: {

    },
});

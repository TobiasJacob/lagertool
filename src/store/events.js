import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        events: {
            event1: {
                title: 'Hochzeit was weis ich',
                adress: 'Lua Pauline',
                note: 'Extra Mikrophon',
                setup: { start: 3242, end: 23423, user: 'user1' },
                party: { start: 2343, end: 34234, user: 'user1' },
                takedown: { start: 234, end: 234, user: 'user2' },
                equipment: ['id1', 'id2'],
            },
        },
    },
    mutations: {

    },
    actions: {

    },
});

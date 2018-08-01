import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        groups: {
            mixer: {
                color: 'yellow',
                name: 'Mixer',
            },
        },
        equipment: {
            id1:
            {
                name: 'DJM 500', // Name
                picture: 'http://asdf', // Link zu Bild
                amount: 4, // Anzahl im Lager
                group: 'mixer', // Kategorie
                events: ['event1'], // Events, auf denen es eingeplant ist (Two-Way Databinding)
                currentEvent: ['event1'], // Event/Ort des Equipments, wenn es sich gerade nicht im Lager befindet (Abgeholt aber noch nicht zurück gebracht)
            },
        },
    },
    mutations: {

    },
    actions: {

    },
});

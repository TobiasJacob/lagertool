import Vue from 'vue';
import Vuex from 'vuex';
import eventsModule from './events';
import equipmentModule from './equipment';
import usersModule from './users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    eventsModule,
    equipmentModule,
    usersModule,
  },
});

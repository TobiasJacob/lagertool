import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Day from './views/Day.vue';
import Event from './views/Event.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/day/:date/:month/:year',
      name: 'day',
      component: Day,
    },
    {
      path: '/event/:id',
      name: 'event',
      component: Event,
    },
  ],
});

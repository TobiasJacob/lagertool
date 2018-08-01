import Vue from 'vue';
import 'moment/locale/de';
import moment from 'moment';
import vueMoment from 'vue-moment';
import Vuetify from 'vuetify';

import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';
import './main.styl';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(vueMoment, {
  moment,
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

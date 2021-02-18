import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './routes.js';
import * as VueGoogleMaps from "vue2-google-maps";
import store from './store';


Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAIQGl7cMg-tLr6T-S5k9E9sDAjydk-QSA",
    libraries: "places" // necessary for places input
  }
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

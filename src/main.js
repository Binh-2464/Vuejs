import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './routes.js';
import * as VueGoogleMaps from "vue2-google-maps";


Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBGLLrP2a74T79NyAVJ9DaAALLN1FN9QH8",
    libraries: "places" // necessary for places input
  }
});


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
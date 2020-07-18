import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import MaterialKit from "./plugins/material-kit";
import CountryFlag from 'vue-country-flag';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify) 
Vue.component('country-flag', CountryFlag)

Vue.config.productionTip = false;

Vue.use(MaterialKit);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount("#app");


// Periksa service worker
if (!('serviceWorker' in navigator)) {
  console.log("Service worker tidak didukung browser ini.");
} else {
  registerServiceWorker();
}
// Register service worker
function registerServiceWorker() {
return navigator.serviceWorker.register('service-worker.js')
  .then(function (registration) {
    console.log('Registrasi service worker berhasil.');
    return registration;
  })
  .catch(function (err) {
    console.error('Registrasi service worker gagal.', err);
  });
}
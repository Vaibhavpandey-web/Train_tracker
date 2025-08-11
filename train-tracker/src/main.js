import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import VueGoogleMaps from '@fawmi/vue-google-maps';
import '@mdi/font/css/materialdesignicons.css' 

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueGoogleMaps, {
    load: {
      key: 'YOUR_GOOGLE_MAPS_API_KEY',
    },
  })
  .mount('#app');

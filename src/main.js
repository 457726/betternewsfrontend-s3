import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

Vue.config.productionTip = false

app.use(
    createAuth0({
        domain: "dev-nghy1l73.us.auth0.com",
        client_id: "lMp8Vzq9azOKzklvdBQeZRwNVu7J8suh",
        redirect_uri: window.location.origin
    })
);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

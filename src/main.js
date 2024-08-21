import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"; 	// vue-router 추가
import store from "./store";	// Vuex 추가

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

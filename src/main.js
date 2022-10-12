import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/user'
import { createPinia } from 'pinia'

createApp(App).use(store).use(router).use(createPinia()).mount('#app')

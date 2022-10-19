import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import store from './store/user'

/* const app = createApp({});
const pinia = createPinia();

app.use(store);
app.use(pinia)
app.use(router);


app.mount(App);
 */
	
createApp(App).use(store).use(router).use(createPinia()).mount('#app') 

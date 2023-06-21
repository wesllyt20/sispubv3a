import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css';
import router from './router'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

createApp(App).use(router).use(createPinia()).mount('#app')

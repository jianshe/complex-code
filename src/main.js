import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import emitter from "./plugins/emitter";
import router from './router/index'

const app = createApp(App);
app.use(emitter);
app.use(router)
app.mount('#app')

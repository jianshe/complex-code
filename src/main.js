import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import emitter from "./plugins/emitter";

const app = createApp(App);
app.use(emitter);
app.mount('#app')

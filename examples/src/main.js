import { createApp } from 'vue'
import QUI from "q-ui"
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(QUI)
app.mount('#app')

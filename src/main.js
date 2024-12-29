import { createApp } from 'vue'
import {createHead} from "@vueuse/head";
import App from './App.vue'
import router from '../router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import './assets/styles/global.css'
import 'aos/dist/aos.css'

const head = createHead()
const app = createApp(App)

app.use(router)
app.use(head)
app.mount('#app')

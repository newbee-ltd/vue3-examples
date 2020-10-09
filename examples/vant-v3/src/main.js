import { createApp } from 'vue'
import { Button } from 'vant';
import store from './store'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import 'vant/lib/index.css';
import './index.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Button)

app.mount('#app')

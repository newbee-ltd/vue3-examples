import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import './index.css'

const app = createApp(App)

// 本教程采用的是全局引入组件库

app.use(router).use(store).use(Antd).mount('#app')

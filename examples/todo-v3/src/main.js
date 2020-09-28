import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css';
import './index.css'

// 本教程采用的是全局引入组件库

createApp(App).use(router).use(store).use(Antd).mount('#app')

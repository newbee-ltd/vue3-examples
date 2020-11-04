import { createApp } from 'vue'
import store from './store'

import 'taro-ui-vue3/dist/style/index.scss'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(store)

export default App

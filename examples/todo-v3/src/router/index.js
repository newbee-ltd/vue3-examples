import {createRouter, createWebHashHistory} from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/todo',
      component: () => import('../views/todo.vue')
    }
  ]
})
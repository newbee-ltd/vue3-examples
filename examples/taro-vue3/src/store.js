import { createStore } from 'vuex'

const state = {
  list: [
    {
      id: 1,
      title: '老八食堂',
      content: '去老八食堂吃饭'
    },
    {
      id: 2,
      title: 'giao',
      content: '去giao哥演唱会听歌'
    }
  ]
}

const mutations = {
  ADD_TODO(state, payload) {
    state.list.push(payload)
  },
  REMOVE_TODO(state, payload) {
    state.list = state.list.filter(item => item.id != payload.id)
  }
}

const actions = {
  addTodo(context, item) {
    context.commit('ADD_TODO', item)
  },
  removeTodo(context, id) {
    context.commit('REMOVE_TODO', { id })
  }
}

const getters = {
  getList(state) {
    return state.list
  }
}

const store = createStore({
  state,
  mutations,
  actions,
  getters
})

export default store

<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>待办事项</a-layout-header>
      <a-layout-content>
        <a-input-search
          v-model:value="todo"
          placeholder="新增待办事项"
          size="large"
          @search="addTodo"
        >
          <template v-slot:enterButton>
            <a-button>新增</a-button>
          </template>
        </a-input-search>
        <h2 class="title">待办事项</h2>
        <a-card :title="`${index + 1}、${item.time}`" v-for="(item, index) in todos" :key="item.id">
          <template v-slot:extra>
            <a-switch v-model:checked="item.done" @change="handleCheck(item, true)" />
          </template>
          {{ item.content }}
        </a-card>
        <h2 class="title">已办事项</h2>
        <a-card :title="`${index + 1}、${item.time}`" v-for="(item, index) in dones" :key="item.id">
          <template v-slot:extra>
            <a-switch v-model:checked="item.done" @change="handleCheck(item, false)" />
          </template>
          内通
        </a-card>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
import { message } from 'ant-design-vue'
export default {
  setup() {
    const todo = ref('')
    const time = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`

    const state = reactive({
      todoList: [
        {
          id: 1,
          done: false,
          time: time,
          content: '前往老八食堂，共进午餐'
        },
        {
          id: 2,
          done: false,
          time: time,
          content: '和giao哥合唱一曲'
        },
        {
          id: 3,
          done: false,
          time: time,
          content: '做点阳间的需求'
        }
      ]
    })
    // 添加待办事项
    const addTodo = (value) => {
      if(!value) {
        message.error('请输入待办事项')
        return
      }
      state.todoList.push({
        content: value,
        id: Date.now(),
        time: time,
        done: false
      })
      todo.value = ''
    }
    // 通过计算属性，计算出生成的代办事项列表
    const todos = computed(() => {
      return state.todoList.filter(item => !item.done)
    })
    // 通过计算属性，计算出生成的已办列表
    const dones = computed(() => {
      return state.todoList.filter(item => item.done)
    })
    // 修改状态方法
    const handleCheck = (item ,status) => {
      item.done = status
    }

    return {
      todo,
      addTodo,
      state,
      todos,
      dones,
      handleCheck
    }
  }
}
</script>

<style scoped>
  #components-layout-demo-basic {
    min-height: 100vh;
    max-width: 40%;
    margin: 0 auto;
    background-color: #ededed;
  }
  #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    background: #7dbcea;
    color: #fff;
    text-align: center;
  }
  .title {
    margin: 0;
    padding: 10px;
  }
</style>
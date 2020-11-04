<template>
  <view class="add">
    <view class="header">添加待办事项</view>
    <AtInput
      title='标题'
      type='text'
      placeholder='请输入标题'
      :value="title"
      @change="handleInput"
    />
    <AtTextarea
      :value="content"
      @change="handleChange"
      :maxLength="200"
      placeholder='请输入待办事项'
    />
    <AtButton class="add-btn" type='primary' @click="handleAdd">确认添加</AtButton>
  </view>
</template>

<script>
import Taro from "@tarojs/taro"
import { reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { AtInput, AtTextarea, AtButton, Toast } from 'taro-ui-vue3'

export default {
  name: 'Add',
  components: {
    AtInput,
    AtTextarea,
    AtButton
  },
  setup() {
    const store = useStore()

    const state = reactive({
      title: '',
      content: ''
    })
    const handleInput = (e) => {
      state.title = e
    }
    const handleChange = (e) => {
      state.content = e
    }

    const handleAdd = (e) => {
      if (!state.title || !state.content) {
        Taro.showToast({
          title: '请填写标题或内容',
          icon: 'error',
          duration: 2000
        })
        return
      }
      store.dispatch('addTodo', {
        id: Date.now(),
        title: state.title,
        content: state.content
      })

      Taro.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      }).then(() => {
        Taro.navigateBack()
      })
    }

    return {
      ...toRefs(state),
      handleChange,
      handleAdd,
      handleInput
    }
  }
}
</script>

<style lang="scss">
  .add {
    padding: 0 20px;
    .header {
      padding: 10px 0;
    }
    .add-btn {
      margin-top: 20px;
    }
  }
</style>

<template>
  <div class="demo">我是十四</div>
  <div class="norem-demo">我是十五</div>
  <p class="count">{{ state.count }}</p>
  <van-button class="add" type="primary" block @click="add">加</van-button>
  <van-button class="min" type="primary" block @click="min">减</van-button>
  <van-button class="min" type="primary" block @click="update">更新</van-button>
</template>

<script>
import { computed,  reactive } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    // vuex4 通过 useStore 在组合API入口内声明获取全局状态实例 store
    const store = useStore()
    // 所有的状态变量都在 state 内
    const state = store.state

    const add = () => {
      store.commit("add", {
        count: state.count + 1
      });
    }
    const min = () => {
      store.commit("min", {
        count: state.count - 1
      });
    }
    const update = () => {
      store.dispatch('add') // 直接加到100
    }
    return {
      state,
      add,
      min,
      update
    }
  }
}
</script>

<style scoped>
  .demo {
    text-align: center;
    font-size: 40PX; /* PX 大写，编译时不会将其转化为 rem */
  }
  .norem-demo {
    text-align: center;
    font-size: 40px; /* norem 开头的 class 类名，编译时不会将其转化为 rem */
  }
  .count {
    text-align: center;
    font-size: 30px;
    color: chartreuse;
  }
  .add {
    margin-bottom: 20px;
  }
</style>
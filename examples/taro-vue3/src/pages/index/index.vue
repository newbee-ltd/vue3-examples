<template>
  <view class="index">
    <AtSwipeAction class="swipe" v-for="(item) in list" :key="item.id" :options="[
      {
        text: '删除',
        style: {
          backgroundColor: '#FF4949'
        },
      }
    ]" @click="handleDelete(item)">
      <AtCard
        class="card"
        :title='item.title'
      >
        {{ item.content }}
      </AtCard>
    </AtSwipeAction>
    <view class='at-icon at-icon-edit' @tap="handleGoToAdd"></view>
  </view>
</template>

<script>
import Taro from "@tarojs/taro"
import { computed } from 'vue'
import { useStore } from 'vuex'
import { AtCard, AtIcon, AtSwipeAction } from 'taro-ui-vue3'

export default {
  name: 'Index',
  components: {
    AtCard,
    AtSwipeAction
  },
  setup() {
    const store = useStore()

    const list = computed(() => store.getters.getList)

    const handleGoToAdd = () => {
      Taro.navigateTo({
        url: '/pages/add/index'
      })
    }

    const handleDelete = (item) => {
      store.dispatch('removeTodo', item.id)
    }

    return {
      handleGoToAdd,
      list,
      handleDelete
    }
  }
}
</script>

<style lang="scss">
  .index {
    .swipe {
      margin-bottom: 20px;
    }
    .card {
      // margin-bottom: 20px;
    }
    .at-icon-edit {
      border-radius: 50%;
      padding: 20px;
      border: 1px solid #6190E8;
      position: absolute;
      color: #6190E8;
      bottom: 100px;
      right: 50px;
    }
  }
</style>

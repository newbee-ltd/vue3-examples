<template>
  <view>
    <text class="title">{{ getNumbers }}</text>
  </view>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    const getNumbers = computed(() => store.getters.getNumbers)

    return {
      getNumbers
    }
  }
}
</script>

<style>
.title {
  font-size: 40px;
}
</style>

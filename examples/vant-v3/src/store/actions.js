export default {
  async add(ctx) {
    ctx.commit('add', {
      count: 100
    })
  }
}
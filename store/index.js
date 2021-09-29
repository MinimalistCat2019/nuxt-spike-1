export const state = () => ({})

export const getters = {

}

export const mutations = {

}

export const actions = {
    async getCategories() {
      const res = await this.$axios.$get('/categories')
      return res;
    }
}

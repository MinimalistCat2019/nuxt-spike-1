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

    // async fetchByFilter() {
    //   const res = await this.$axios.$get('/content/filter', {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         // "x-src-host": `${process.env.NEXT_PUBLIC_AMPLIENCE_HUB}`,
    //         // "x-api-key": `${process.env.AMPLIENCE_DELIVERY_API_KEY}`,
    //     },
    //     body: {
    //       filterBy: [
    //           {
    //           path: "/_meta/schema",
    //           value: "https://blog.com/post"
    //           }
    //       ],
    //       page: {
    //           size: 10
    //       },
    //       parameters: {
    //           depth: "all",
    //           format: "inlined"
    //       }
    //     }
    //   });
    //   return res;
    // }
}

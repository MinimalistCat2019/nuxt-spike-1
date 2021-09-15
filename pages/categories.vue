<template>
  <section class="home">
    <h1>{{response.title}}</h1>
    <h2>Uses the mounted hook with @nuxt/axios to load event categories from NASA's Earth Observatory Natural Event Tracker</h2>
    <category-card :categories="categories"></category-card>
  </section>
</template>

<script>
import categoryCard from "@/components/categoryCard.vue";

export default {
    components: {
        categoryCard
    },
    data() {
        return {
            categories: [],
            response: {}
        }
    },
    mounted() {
        this.getCategories()
    },
    methods: { 
        async getCategories() {
            const res = await this.$store.dispatch("getCategories");
            this.categories = res.categories;
            this.response = res;
        },
    }
  
}
</script>

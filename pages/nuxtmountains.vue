<template>
  <div>
    <h1>Nuxt Mountains</h1>
    <h2>Uses the fetch hook to load mountains from Nuxt's example api</h2>
    <p>For static hosting, the fetch hook is only called during page generation, and the result is then cached for use on the client.</p>
    <ul>
      <li v-for="mountain of mountains" :key="mountain.slug">{{ mountain.title }}</li>
    </ul>
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mountains: []
      }
    },
    async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    }
  }
</script>
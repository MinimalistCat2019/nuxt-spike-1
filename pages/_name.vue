<template>
  <div>
    <h1>{{ this.name }}</h1>
  </div>
</template>
<script>
  export default {
    async asyncData({ params }) {
      const name = await params.name
      return { name }
    }
  }
</script>
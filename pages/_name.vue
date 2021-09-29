<template>
  <div>
    <h1>{{ this.name }}</h1>
    <p>Path: {{ $route.path }}</p>
  </div>
</template>
<script>
  export default {
    async asyncData({ params }) {
      const name = await params.content._meta.name
      return { name }
    }
  }
</script>
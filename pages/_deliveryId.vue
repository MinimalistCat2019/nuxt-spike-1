<template>
  <div>
    <h1>{{ this.deliveryId }}</h1>
  </div>
</template>
<script>
  export default {
    async asyncData({ params }) {
      const deliveryId = await params.deliveryId
      return { deliveryId }
    }
  }
</script>
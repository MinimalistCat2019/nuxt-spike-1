<template>
  <div>
    <ul v-for="blog in blogs.responses" :key="blog.content._meta.deliveryKey">
      <NuxtLink :to="`${blog.content._meta.deliveryId}`">
        <li>{{ blog.content._meta.name }}</li>
      </NuxtLink>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData() {
    const blogs = await fetch(
       `${process.env.NEXT_PUBLIC_AMPLIENCE_DELIVERY_API}/content/filter`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-src-host": `${process.env.NEXT_PUBLIC_AMPLIENCE_HUB}`,
                    "x-api-key": `${process.env.AMPLIENCE_DELIVERY_API_KEY}`
                },
                body: JSON.stringify({
                    filterBy: [
                        {
                            path: "/_meta/schema",
                            value: "https://blog.com/post"
                        }
                    ],
                    page: {
                        size: 10
                    },
                    parameters: {
                        depth: "all",
                        format: "inlined"
                    }                    
                })
            }
    )
    .then((res) => res.json())
    return {blogs}
  }
}
</script>

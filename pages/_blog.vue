<template>
  <div>
    <h1>{{ name }}</h1>
    <h2>{{ category }}</h2>
    <p>{{ description }}</p>
    <NuxtLink to="/">Back to Blogs</NuxtLink>
  </div>
</template>
<script>
export default {
  async asyncData({ params, redirect }) {
    const blog = await fetch(
       `https://${process.env.NEXT_PUBLIC_AMPLIENCE_DELIVERY_API}/content/id/${params.blog}`
       , {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-src-host": `${process.env.NEXT_PUBLIC_AMPLIENCE_HUB}`,
                    "x-api-key": `${process.env.AMPLIENCE_DELIVERY_API_KEY}`
                },
            }
    )
    .then((res) => res.json())

    if (blog.error) {
      redirect('/')
    }
    else if (blog.content._meta.deliveryId === params.blog) {
      return {
      name: blog.content._meta.name,
      category: blog.content.category,
      description: blog.content.description
      }
    } 
  }
}
</script>

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
    .then(res => res.responses)

    const filteredBlog = blogs.filter(
      (blog) => blog.content._meta.deliveryId === params.blog)

    if (filteredBlog.length === 1) {
      return {
      name: filteredBlog[0].content._meta.name,
      category: filteredBlog[0].content.category,
      description: filteredBlog[0].content.description
      }
    } else {
      redirect('/')
    }
  }
}
</script>

<template>
  <div>
    <h1>Name: {{ name }}</h1>
    <h2>Category: {{ category }}</h2>
    <p>Description: {{ description }}</p>
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
      (blog) => 
        blog.content._meta.name.toLowerCase() === params.name && 
        blog.content._meta.deliveryKey === params.content._meta.deliveryKey
    )
    if (filteredBlog) {
      return {
      name: filteredBlog.content._meta.name,
      category: filteredBlog.content.category,
      description: filteredBlog.content.description
      }
    } else {
      redirect('/')
    }
  }
}
</script>
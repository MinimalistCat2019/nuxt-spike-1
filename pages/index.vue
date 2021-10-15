<template>
  <div>
    <h2>A blog created with Nuxt.js and Amplience</h2>
    <p>A statically generated site, that makes use of Nuxt's Dynamic Pages feature to dynamically populate and create routes for individual pages based on a response from Amplience's Filter endpoint.</p>
    <p>Below you'll find an index of all current blog posts (content items) and you can click through to view the individual page.</p>
    <p>Not currently working fully in dev mode, but works properly in production. Data isn't persisted when navigating between pages, so pages are only populated with a hard refresh.</p>
    <div v-if="!blogs.error">
      <h3>There are {{blogs.page.responseCount}} blog posts currently available to read:</h3>
      <ul v-for="blog in blogs.responses" :key="blog.content._meta.deliveryKey">
        <NuxtLink :to="`${blog.content._meta.deliveryId}`">
            <li>{{ blog.content._meta.name }}</li>
        </NuxtLink>
      </ul>
    </div>
    <div v-else-if="blogs.error"> 
      <h3>Error Message: {{blogs.error.message}}</h3gi>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData() {
    const blogs = await fetch(

       `https://${process.env.NEXT_PUBLIC_AMPLIENCE_DELIVERY_API}/content/filter`, {
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

<template>
    <section>
        <h1>Blog 5</h1>
        <p>Uses Nuxt's asyncData hook to load an array of blog posts from Amplience's Filter endpoint.</p>
            <div v-for="blog of blogs.responses" :key="blog.content._meta.deliveryKey">
                <h3>{{blog.content._meta.name}}</h3>
                <p>Posted on {{blog.content.date}} by 
                <p v-for="author of blog.content.authors" :key="author._meta.deliveryKey">{{author._meta.name}}</p>
                </p>
                <p>{{blog.content.description}}</p>
            </div>
    </section>
</template>

<script>
    export default {
        async asyncData({ params, redirect }) {
            const blogs = await fetch(`${process.env.NEXT_PUBLIC_AMPLIENCE_DELIVERY_API}/content/filter`, {
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
<template>
    <div>
        <h1>Amplience Blog</h1>
        <p>Uses the fetch hook to load blog posts from Amplience's Filter endpoint.</p>
        <ul>
            <li v-for="item of response.responses" :key="item.content._meta.deliveryKey">{{item.content._meta.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                response: {}
            }
        },
        async fetch() {
            this.response = await fetch( `${process.env.NEXT_PUBLIC_AMPLIENCE_DELIVERY_API}/content/filter`, {
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
            })
            .then(res => res.json())
        }
    }
</script>
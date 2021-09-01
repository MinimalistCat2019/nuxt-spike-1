<template>
    <div>
        <article>
            <h1>{{post.title}}</h1>
            <p>{{post.content}}</p>
        </article>
    </div>
</template>
<script>

export default {
    data() {
        return {
            id: this.$route.params.id,
            posts: [
                {
                    id: "1a",
                    title: "Blog post No.1",
                    content: "Blah blah blah"
                },
                {
                    id: "2a",
                    title: "Blog post No.2",
                    content: "Boom boom boom"
                },
                {
                    id: "3a",
                    title: "Blog post No.2",
                    content: "Yadder yadder yadder"
                },
            ]
        }
        
    },
    computed: {
        post() {
            return this.posts.find(post => post.id === this.id )
        }
    }
}
</script>

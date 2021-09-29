<template>
  <div>
    <div v-if="blogs.length > 0">
      <div v-for="blog in blogs" :key="blog.content._meta.deliveryKey">
        <h3>{{blog.content._meta.name }}</h3>
        <p>{{ blog.content.content !== "undefined" ? blog.content.content : "n/a" }}
        </p>
      </div>
    </div>
    <div v-else>
      <div>
        <h5>You have no blog posts yet</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog-card",
  props: {
    blogs: Array
  },
};
</script>
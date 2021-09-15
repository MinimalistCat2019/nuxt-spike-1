<template>
  <div>
    <div v-if="categories.length > 0">
      <div v-for="category in categories" :key="category.id">
        <h3>{{category.title }}</h3>
        <!-- <p>
          <span class="link">Link</span>
          : <a href=category.link>{{ category.link }}</a>
        </p>
        -->
        <p>{{ category.description !== "undefined" ? category.description : "n/a" }}
        </p>
      </div>
    </div>
    <div v-else>
      <div>
        <h5>You have no categories yet</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "category-card",
  props: {
    categories: Array
  },
};
</script>

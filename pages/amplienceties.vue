<template>
  <p v-if="$fetchState.pending">Fetching content...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Content filtered with multiple properties</h1>
    <h2>Uses the fetch hook to load content from Amplience's docs api. </h2>
    <p>For static hosting, the fetch hook is only called during page generation, and the result is then cached for use on the client.</p>
    <p v-if="$responses>0">
      <ul>
          <li v-for="response of responses" :key="response._meta.deliveryId">{{ response._meta.name }}</li>
      </ul>
    </p>
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        responses: []
      }
    },
    async fetch() {
      this.responses = await fetch(
        //  `${process.env.NEXT_PUBLIC_AMPLIENCE_DELIVERY_API}/content/filter`,
        //  `https://eu-west-1.cdv2.content.amplience-turing.net/content/filter`,
         `https://ampproduct-doc.cdn.content.amplience.net/content/filter`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "x-src-host": `${process.env.NEXT_PUBLIC_AMPLIENCE_HUB}`,
            // "x-src-host": "cdv3",
            // "x-api-key": "ZsKXHhQsIo91Sk4j2wxu19JKhOBmNKuP72njr6Ts"
          },
          "filterBy":[
            {
              "path":"/_meta/schema",
              "value":"https://schema-examples.com/pdp-content-block"
            },
            {
              "path":"/categoryId",
              "value":"mens-accessories-ties"
            },
            {
              "path":"/productFamily",
              "value":"Silk"
            }
          ]
        },
      ).then(res => res.json())
    }
  }
</script>
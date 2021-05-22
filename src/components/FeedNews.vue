<template>
  <div class="feed">{{ api }}</div>
</template>

<script>
export default {
  name: "FeedNews",
  data() {
    return {
      api: null,
    };
  },
  methods: {
    fetchNews() {
      const token = "e6d3d4e756f248efa51c0c33e01289ad";
      fetch(
        `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${token}`
      )
        .then((r) => r.json())
        .then((r) => {
          this.api = r;
        });
    },
  },
  created() {
    this.fetchNews();
  },
};

// Por um watch nas opções do Feed para quando mudar no Order
</script>

<style>
.feed {
  grid-column: 2;
}
</style>
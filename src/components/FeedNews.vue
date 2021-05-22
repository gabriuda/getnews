<template>
  <div class="feed" v-if="news">{{ news }}</div>
</template>

<script>
export default {
  name: "FeedNews",
  props: ["term", "sort"],
  data() {
    return {
      news: null,
    };
  },
  methods: {
    fetchNews() {
      const token = "e6d3d4e756f248efa51c0c33e01289ad";
      fetch(
        `https://newsapi.org/v2/everything?q=${
          this.term ? this.term : "Apple"
        }&from=2021-05-22&sortBy=${
          this.sort ? this.sort : "popularity"
        }&apiKey=${token}`
      )
        .then((r) => r.json())
        .then((r) => {
          this.news = r;
        });
    },
  },
  created() {
    this.fetchNews();
  },
  watch: {
    options() {
      this.fetchNews();
    },
  },
};
</script>

<style>
.feed {
  grid-column: 2;
}
</style>
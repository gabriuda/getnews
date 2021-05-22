<template>
  <div class="intro-pesquisa">
    <h1 class="titulo t-inicial">Explore notícias do IBGE</h1>
    <FeedNews />
  </div>
</template>

<script>
import FeedNews from "@/components/FeedNews.vue";

export default {
  name: "Home",
  data() {
    return {
      term: null,
    };
  },
  components: {
    FeedNews,
  },
};
</script>

<style>
.t-inicial {
  text-align: center;
}
</style>
<template>
  <div>
    <Search @emitTerm="getTerm" :fetchNews="fetchNews" />

    <div v-if="loading" class="loading-container">
      <PageLoading />
    </div>
    <Feed :news="news" :term="term" />
  </div>
</template>

<script>
import PageLoading from "./PageLoading.vue";
import Feed from "./Feed.vue";
import Search from "./Search.vue";
import windowWidth from "@/mixins/windowWidth.js";
export default {
  name: "FeedNews",
  mixins: [windowWidth],
  components: {
    Feed,
    PageLoading,
    Search,
  },
  data() {
    return {
      loading: true,
      news: null,
      noticia: null,
      term: null,
      activeModal: false,
    };
  },
  methods: {
    fetchNews() {
      this.loading = true;
      this.news = null;
      fetch(
        `http://servicodados.ibge.gov.br/api/v3/noticias/${
          this.term ? "?busca=" + this.term : ""
        }?qtd=9`
      )
        .then((r) => r.json())
        .then((r) => {
          this.news = r;
          this.loading = false;
        });
    },
    getTerm(term) {
      this.term = term;
    },
  },
  watch: {
    term() {
      this.fetchNews();
    },
  },
  created() {
    return this.fetchNews();
  },
};
</script>

<style>
.intro-pesquisa {
  margin: 40px auto;
}

.loading-container {
  position: absolute;
  right: 50%;
}

@media (max-width: 1160px) {
  .loading-container {
    top: 330px;
    right: 40%;
  }
}

@media (max-width: 730px) {
  .feed {
    grid-template-columns: 1fr;
  }
  .feed li:first-child p {
    display: none;
  }

  .feed li:first-child .btn-detalhes {
    visibility: visible;
  }
}
</style>
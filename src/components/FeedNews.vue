<template>
  <div>
    <Search @emitTerm="getTerm" :fetchNews="fetchNews" />

    <div class="content-feed">
      <Order @emitOptions="getOptions" :fetchNews="fetchNews" />
      <div v-if="loading" class="loading-container">
        <PageLoading />
      </div>
      <Feed :news="news" :term="term" />
    </div>
  </div>
</template>

<script>
import PageLoading from "./PageLoading.vue";
import Feed from "./Feed.vue";
import Search from "./Search.vue";
import Order from "./Order.vue";
import windowWidth from "@/mixins/windowWidth.js";
export default {
  name: "FeedNews",
  mixins: [windowWidth],
  components: {
    Feed,
    PageLoading,
    Search,
    Order,
  },
  data() {
    return {
      loading: true,
      news: null,
      noticia: null,
      term: null,
      activeModal: false,
      options: [],
    };
  },
  methods: {
    fetchNews() {
      this.loading = true;
      this.news = null;
      fetch(
        `http://servicodados.ibge.gov.br/api/v3/noticias/${
          this.term ? "?busca=" + this.term : ""
        }?qtd=${this.options[0] - 1 ? this.options[0] - 1 : 9}${
          this.options[1] ? "?de=" + this.options[1] : ""
        }${this.options[2] ? "?ate=" + this.options[2] : ""}`
      )
        .then((r) => r.json())
        .then((r) => {
          this.news = r;
          this.loading = false;
        });
    },
    getOptions(options) {
      this.options = options;
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

.content-feed {
  display: grid;
  grid-auto-columns: minmax(280px, 300px) 1fr;
  gap: 0 30px;
  position: relative;
}

.loading-container {
  position: absolute;
  right: 40%;
}

@media (max-width: 1160px) {
  .loading-container {
    top: 100px;
  }
  .content-feed {
    grid-auto-columns: 1fr;
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
<template>
  <div>
    <Search />
    <transition mode="out-in">
      <div v-if="loading" class="loading-container">
        <PageLoading />
      </div>
    </transition >
    <transition mode="out-in">
      <Feed :news="news" />
    </transition>
    <PaginationNews v-if="news" :totalNews="totalNews" :newsPerPage="newsPerPage" />
  </div>
</template>

<script>
import PageLoading from "./PageLoading.vue";
import PaginationNews from "./PaginationNews.vue";
import Feed from "./Feed.vue";
import Search from "./Search.vue";
import windowWidth from "@/mixins/windowWidth.js";
export default {
  name: "FeedNews",
  mixins: [windowWidth],
  components: {
    Feed,
    PaginationNews,
    PageLoading,
    Search,
  },
  data() {
    return {
      loading: true,
      news: null,
      totalNews: 0,
      newsPerPage: 9,
      noticia: null,
      activeModal: false,
    };
  },
  computed: {
    url() {
      let queryString = "";
      for (let key in this.$route.query) {
        queryString += `&${key}=${this.$route.query[key]}`;
      }
      return `?qtd=9${queryString}`;
    }
  },
  methods: {
    fetchNews() {
      this.loading = true;
      this.news = null;
      fetch(
        `http://servicodados.ibge.gov.br/api/v3/noticias/${this.url}`
      )
        .then((r) => r.json())
        .then((r) => {
          this.news = r;
          this.totalNews = Number(r.count);
          this.loading = false;
        });
    },
  },
  watch: {
    url() {
      this.fetchNews();
    }
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
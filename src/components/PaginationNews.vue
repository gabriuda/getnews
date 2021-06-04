<template>
  <ul v-if="totalPages > 1">
    <li v-for="page in pages" :key="page">
      <router-link :to="{ query: query(page) }">{{ page }}</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "PaginationNews",
    props: {
      totalNews: {
        type: Number,
        default: 1,
      },
      newsPerPage: {
        type: Number,
        default: 1,
      }
    },
    computed: {
      pages() {
        const current = Number(this.$route.query.page);
        const range = 9;
        const offset = Math.ceil(range / 2);
        const total = this.totalNews;
        const pagesArray = [];

        for (let i = 1; i <= total; i++) {
          pagesArray.push(i);
        }

        pagesArray.splice(0, current - offset);
        pagesArray.splice((range < this.totalPages) ? range : this.totalPages, total);

        return pagesArray;
      },
      totalPages() {
        const total = this.totalNews / this.newsPerPage;
        return total !== Infinity ? Math.ceil(total) : 0;
      }
    },
    methods: {
      query(page) {
        return {
          ...this.$route.query,
          page
        };
      }
    }
  }
</script>

<style scoped>
  ul {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
  }

  li a {
    display: block;
    padding: 14px;
    font-family: var(--font-mulish);
    font-size: 1rem;
    color: var(--azul);
    box-shadow: var(--shadow);
    border-radius: 4px;
    transition: 0.3s;
  }

  li a.router-link-exact-active,
  li a:hover {
    color: var(--branco);
    background: var(--azul);
  }

  @media (max-width: 540px) {
    ul {
      padding: 20px;
      overflow-x: auto;
    }
  }
</style>
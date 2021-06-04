<template>
  <form class="pesquisa">
    <input
      type="text"
      placeholder="Busque por qualquer termo..."
      v-model.lazy="term"
      @change="searchNews"
    />
    <button @click.prevent="searchNews"></button>
  </form>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      term: "",
    };
  },
  methods: {
    searchNews() {
      this.$router.push({ query: { busca: this.term } });
    },
  },
  watch: {
    termComponent() {
      this.searchNews();
    },
  },
};
</script>

<style>
.pesquisa {
  margin: 30px 0;
  display: grid;
  grid-template-columns: auto 200px;
}

.pesquisa input,
button {
  padding: 15px 20px;
  box-shadow: var(--shadow);
}

.pesquisa input {
  font-family: var(--font-mulish);
  background: var(--branco2);
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  margin-right: -20px;
  outline: none;
}

.pesquisa button {
  background: var(--azul) url("../assets/lupa.svg") no-repeat center center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-definicoes {
  font-family: var(--font-mulish);
  color: var(--branco);
  background: var(--azul);
  padding: 10px 20px;
  border: none;
  margin-bottom: 12px;
  border-radius: 8px;
  cursor: pointer;
  display: none;
}

.pesquisa button:hover,
.btn-definicoes:hover {
  background-color: var(--azul-escuro);
}

.pesquisa button:active,
.btn-definicoes:active {
  background-color: var(--azul);
}

@media (max-width: 730px) {
  .pesquisa {
    grid-template-columns: auto 100px;
  }
}
</style>
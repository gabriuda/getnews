<template>
  <div class="intro-pesquisa">
    <h1 class="titulo t-inicial">Explore notícias mundiais</h1>
    <form class="pesquisa">
      <input
        type="text"
        placeholder="Busque por qualquer termo..."
        v-model="term"
      />
      <button @click.prevent="getNewsByTerm"></button>
    </form>

    <section class="content-feed">
      <Order />
      <FeedNews />
    </section>
  </div>
</template>

<script>
import Order from "./Order.vue";
import FeedNews from "@/components/FeedNews.vue";

export default {
  name: "Home",
  data() {
    return {
      term: null,
    };
  },
  components: {
    Order,
    FeedNews,
  },
  methods: {
    getNewsByTerm() {
      console.log("Puxar dados por " + this.term);
    },
  },
};
</script>

<style>
.intro-pesquisa {
  margin: 40px auto;
}

.t-inicial {
  text-align: center;
}

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

.pesquisa button:hover {
  background-color: var(--azul-escuro);
}

.content-feed {
  display: grid;
  grid-auto-columns: minmax(280px, 300px) 1fr;
  gap: 0 30px;
}
</style>
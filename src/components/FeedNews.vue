<template>
  <div>
    <form class="pesquisa">
      <input
        type="text"
        placeholder="Busque por qualquer termo..."
        v-model.lazy="term"
      />
      <button @click.prevent="fetchNews"></button>
    </form>

    <div class="content-feed">
      <div class="order-container">
        <h2 class="order-titulo">Definições</h2>
        <ul class="order-lista">
          <li>
            <label for="qtd">
              Quantidade de posts
              <input v-model="qtd" type="number" id="qtd" min="1" max="9"
            /></label>
          </li>
          <li>
            <label for="de"
              >De: <input v-model="de" type="date" id="de"
            /></label>
            <p v-if="de > ate">A data anterior não pode ser maior</p>
            <label for="ate"
              >Até:
              <input v-model="ate" type="date" id="ate" value="2017-06-01"
            /></label>
          </li>
          <li>
            <label for="padrao">
              <input type="checkbox" v-model="filtroPadrao" id="padrao" />
              Mais relevantes
            </label>
          </li>
        </ul>
      </div>
      <div v-if="loading" class="loading-container">
        <page-loading></page-loading>
      </div>
      <transition name="feed">
        <ul class="feed" v-if="news">
          <p class="paragrafo sem-resultado" v-if="news.items.length === 0">
            Sem resultados para o termo "{{ term }}".
          </p>
          <li v-for="item in news.items" :key="item.id" class="feed-item">
            <div class="feed-img">
              <img :src="item.imagens | formatImage" alt="" />
            </div>
            <b class="feed-data">{{ item.data_publicacao }}</b>
            <h2 class="subtitulo s-feed">{{ item.titulo }}</h2>
            <p class="paragrafo p-feed">{{ item.introducao }}</p>
            <div class="btns-feed">
              <button class="btn-detalhes">Mais detalhes</button>
              <a :href="item.link" target="_blank"
                ><button class="btn-noticia">Notícia completa</button></a
              >
            </div>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import PageLoading from "./PageLoading.vue";
export default {
  components: { PageLoading },
  name: "FeedNews",
  data() {
    return {
      loading: true,
      news: null,
      term: null,
      qtd: 9,
      de: null,
      ate: null,
      filtroPadrao: true,
    };
  },
  filters: {
    formatImage(string) {
      const url = "https://agenciadenoticias.ibge.gov.br";
      const format = string
        .split(",")[0]
        .replace(/{"image_intro":"/g, "")
        .replace('"', "");
      const formated = `${url}/${format}`;
      return formated;
    },
  },
  methods: {
    fetchNews() {
      this.loading = true;
      this.news = null;
      fetch(
        `http://servicodados.ibge.gov.br/api/v3/noticias/${
          this.term ? "?busca=" + this.term : ""
        }?qtd=${this.qtd}${this.de ? "?de=" + this.de : ""}${
          this.ate ? "?ate=" + this.ate : ""
        }`
      )
        .then((r) => r.json())
        .then((r) => {
          this.news = r;
          this.loading = false;
        });
    },
    fetchPadrao() {
      this.de = null;
      this.ate = null;
      this.term = null;
      this.news = null;
      this.qtd = 9;
      this.fetchNews();
    },
    formatBrDate(date) {
      const newDate = new Date(date);
      const inBr = newDate.toLocaleDateString("pt-BR");
      return inBr.replace(/\//g, "-");
    },
    formatDate(date) {
      const replace = this.formatBrDate(date).split("-");
      const formated = replace.reverse().join("-");
      return formated;
    },
    getActualDate() {
      const actualDate = new Date();
      return this.formatDate(actualDate);
    },
  },
  watch: {
    qtd() {
      this.fetchNews();
    },
    term() {
      this.fetchNews();
    },
    de() {
      this.filtroPadrao = false;
      this.fetchNews();
    },
    ate() {
      this.filtroPadrao = false;
      this.fetchNews();
    },
    filtroPadrao() {
      this.fetchPadrao();
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

.pesquisa button:active {
  background-color: var(--azul);
}

.order-container {
  background: var(--branco2);
  box-shadow: var(--shadow);
  padding: 30px;
  border-radius: 8px;
  height: 400px;
}

.order-titulo {
  font-family: var(--font-mulish);
  color: var(--preto);
  font-size: 1.3rem;
  margin-bottom: 30px;
}

.order-titulo::after {
  content: "";
  display: block;
  width: 30px;
  height: 4px;
  background: var(--azul);
  margin-top: 4px;
}

.order-lista li {
  font-family: var(--font-mulish);
  color: var(--preto);
  font-size: 1rem;
}

.order-lista label {
  display: block;
  padding: 8px 0;
  cursor: pointer;
}

.order-lista input {
  font-family: var(--font-mulish);
  color: var(--preto);
  font-size: 0.9rem;
  margin-right: 8px;
  padding: 4px;
  border: none;
  border-radius: 4px;
  box-shadow: 2px 4px 20px 0px rgba(0, 0, 0, 0.1);
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

.feed {
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.feed li p {
  display: none;
}

.feed li:first-child {
  grid-column: 1 / -1;
}

.feed li:first-child .feed-img {
}

.feed li:first-child p {
  display: initial;
}

.feed li:first-child .btn-detalhes {
  visibility: hidden;
}

.feed-item {
  background: var(--branco2);
  padding: 30px;
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.feed-img {
  border-radius: 8px;
  height: 200px;
  overflow: hidden;
  margin: -30px -30px 30px;
  object-fit: cover;
}

.feed-img img {
  width: 100%;
  object-fit: cover;
}

.feed-data {
  font-family: var(--font-mulish);
  color: var(--cinza-claro);
  font-size: 1rem;
  font-weight: 400;
}

.s-feed {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px 0 20px;
}

.btns-feed {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.btn-detalhes {
  font-family: var(--font-mulish);
  color: var(--azul);
  font-size: 0.9rem;
  background: transparent url("../assets/seta-baixo.svg") no-repeat center right;
  box-shadow: none;
  cursor: pointer;
  border: none;
  transition: 0.3s;
}

.btn-detalhes:hover {
  background-position: 100% 60%;
}

.btn-noticia {
  font-family: var(--font-mulish);
  color: var(--azul);
  font-size: 0.9rem;
  background: var(--azul) url("../assets/seta.svg") no-repeat;
  background-size: 16px;
  background-position: 88% 50%;
  padding: 10px 15px;
  padding-right: 40px !important;
  color: var(--branco);
  cursor: pointer;
  border-radius: 8px;
  border: none;
  transition: 0.3s;
}

.btn-noticia:hover {
  background-color: var(--azul-escuro);
  background-position: 93% 50%;
}

.sem-resultado {
  text-align: center;
  font-size: 1.2rem;
}

.feed-enter,
.feed-leave-to {
  transform: translate3d(0, -20px, 0);
  opacity: 0;
}

.feed-enter-active,
.feed-leave-active {
  transition: all 0.3s;
}
</style>
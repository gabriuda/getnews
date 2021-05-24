<template>
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
</template>

<script>
import formatImage from "@/mixins/formatImage.js";

export default {
  name: "Feed",
  props: ["news", "term"],
  mixins: [formatImage],
};
</script>

<style>
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

@media (max-width: 1160px) {
  .feed {
    grid-column: 1;
  }
  .feed-item {
    padding: 20px;
  }
  .feed-img {
    margin: -20px -20px 20px;
  }
  .btn-detalhes,
  .btn-noticia {
    font-size: 0.8rem;
  }
}
</style>
<template>
  <transition name="modal">
    <div class="modal-container" v-if="noticia">
      <div class="modal">
        <button class="btn-fechar">&times;</button>
        <img :src="noticia.imagens | formatImage" alt="" />
        <b class="feed-data">{{ noticia.data_publicacao }}</b>
        <h1 class="subtitulo">{{ noticia.titulo }}</h1>
        <p class="paragrafo">{{ noticia.introducao }}</p>
        <a :href="noticia.link" target="_blank"
          ><button class="btn-noticia">Notícia completa</button></a
        >
      </div>
    </div>
  </transition>
</template>

<script>
import formatImage from "@/mixins/formatImage.js";

export default {
  name: "ModalNew",
  mixins: [formatImage],
  props: ["noticia"],
  methods: {
    // outsideClick(event) {
    //    if (event.currentTarget === target)
    // }
  },
};
</script>

<style>
.modal-container {
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal {
  background: var(--branco);
  padding: 30px;
  border-radius: 8px;
  width: 80vw;
}
</style>
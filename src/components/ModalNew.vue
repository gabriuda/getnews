<template>
  <transition mode="out-in">
    <div class="modal-container" v-if="noticia" @click="emitModal">
      <div class="modal">
        <button class="btn-fechar" @click="emitModal">&times;</button>
        <div class="modal-img">
          <img :src="noticia.imagens | formatImage" :alt="noticia.titulo" />
        </div>
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
  data() {
    return {
      noticiaComponente: this.noticia,
    };
  },
  methods: {
    emitModal(event) {
      const outsideModal = document.querySelector(".modal-container");
      const btnCloseModal = document.querySelector(".btn-fechar");
      if (event.target === outsideModal || event.target === btnCloseModal) {
        this.noticiaComponente = null;
        this.$emit("emitModal", this.noticiaComponente);
      }
    },
  },
};
</script>

<style>
.modal-container {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 999; 
}

.modal {
  background: var(--branco);
  padding: 30px;
  border-radius: 8px;
  width: 50vw;
  position: relative;
}

.btn-fechar {
  background: var(--azul);
  color: var(--branco);
  border: none;
  border-radius: 8px;
  font-size: 1.5rem;
  padding: 8px 16px;
  position: absolute;
  top: -10px;
  right: -10px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-fechar:hover {
  background: var(--azul-escuro);
}

.btn-fechar:active {
  background: var(--azul);
}

.modal-img {
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 16px;
}

.modal-img img {
  object-fit: cover;
  width: 100%;
  height: 360px;
}

.modal h1 {
  margin: 10px 0px 20px;
}

.modal p {
  margin-bottom: 20px;
}

.modal a {
  float: right;
}

@media (max-width: 1000px) {
  .modal {
    width: 70vw;
  }
}

@media (max-width: 600px) {
  .modal {
    width: 90vw;
  }
}
</style>
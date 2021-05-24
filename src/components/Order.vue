<template>
  <div>
    <button
      @click="activeDefinitions = !activeDefinitions"
      class="btn-definicoes"
    >
      Filtragem
    </button>
    <div class="order-container" :id="activeDefinitions">
      <h2 class="order-titulo">Definições</h2>
      <ul class="order-lista">
        <li>
          <label for="qtd">
            Quantidade de posts
            <input
              v-model="qtd"
              @change="emitOptions"
              type="number"
              id="qtd"
              min="1"
              max="9"
          /></label>
        </li>
        <li>
          <label for="de"
            >De: <input v-model="de" @change="emitOptions" type="date" id="de"
          /></label>
          <p v-if="de > ate">A data anterior não pode ser maior</p>
          <label for="ate"
            >Até:
            <input v-model="ate" @change="emitOptions" type="date" id="ate"
          /></label>
        </li>
        <li>
          <label for="padrao">
            <input
              type="checkbox"
              v-model="filtroPadrao"
              @change="emitOptions"
              id="padrao"
            />
            Mais relevantes
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import windowWidth from "@/mixins/windowWidth.js";

export default {
  name: "Order",
  props: ["fetchNews"],
  mixins: [windowWidth],
  data() {
    return {
      qtd: 9,
      de: null,
      ate: null,
      filtroPadrao: true,
      activeDefinitions: true,
    };
  },
  methods: {
    emitOptions() {
      this.$emit("emitOptions", [this.qtd, this.de, this.ate]);
    },
    showFilter() {
      if (this.windowWidth >= 1143) this.activeDefinitions = true;
      if (this.windowWidth <= 1143) this.activeDefinitions = false;
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
    outsideClick() {
      window.addEventListener("click", (e) => {
        if (!this.$el.contains(e.target)) {
          if (this.windowWidth <= 1143) this.activeDefinitions = false;
        }
      });
    },
  },
  watch: {
    filtroPadrao() {
      this.fetchPadrao();
    },
    qtd() {
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
  },
  created() {
    this.emitOptions();
    this.showFilter();
    this.outsideClick();
  },
  mounted() {
    this.activeFunction(this.showFilter);
  },
};
</script>

<style>
.order-container {
  background: var(--branco2);
  box-shadow: var(--shadow);
  padding: 0 30px;
  border-radius: 8px;
  height: 0;
  transition: 0.3s;
  visibility: hidden;
  opacity: 0;
}

.order-container#true {
  visibility: visible;
  padding: 30px;
  height: 300px;
  opacity: 1;
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

@media (max-width: 1160px) {
  .btn-definicoes {
    display: initial;
  }
  .order-container {
    margin-bottom: 30px;
  }
}
</style>
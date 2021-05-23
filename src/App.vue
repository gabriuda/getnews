<template>
  <div id="app">
    <TheHeader />
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

/* Cores */
:root {
  --azul: #3e64ff;
  --azul-escuro: #244df2;
  --branco: #ffffff;
  --branco2: #eeeeee;
  --preto: #1b262c;
  --cinza: #222831;
  --cinza-claro: #889297;
  --shadow: 2px 4px 15px 0px rgba(0, 0, 0, 0.15);
}

/* Fontes */
:root {
  --font-hind: "Hind Siliguri", sans-serif;
  --font-mulish: "Mulish", sans-serif;
}

.titulo {
  font-family: var(--font-hind);
  color: var(--preto);
  font-size: 3.5rem;
  line-height: 1;
}

.subtitulo {
  font-family: var(--font-hind);
  color: var(--preto);
  font-size: 2rem;
  line-height: 1;
}

.paragrafo {
  font-family: var(--font-mulish);
  color: var(--cinza);
  font-size: 1rem;
  line-height: 1.4;
}

/* Layout */
.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Responsivo */
@media (max-width: 840px) {
  .titulo {
    font-size: 2rem;
  }
  .subtitulo {
    font-size: 1.5rem;
  }
}
</style>

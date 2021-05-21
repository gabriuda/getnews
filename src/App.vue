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
  --branco: #ffffff;
}

/* Fontes */
:root {
  --font-hind: "Hind Siliguri", sans-serif;
  --font-mulish: "Mulish", sans-serif;
}

/* Layout */
.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>

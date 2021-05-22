<template>
  <div class="order-container">
    <h2 class="order-titulo">Ordenar por</h2>
    <ul class="order-lista">
      <li>
        <label for="popularity"
          ><input
            v-model="order"
            type="radio"
            id="popularity"
            name="options"
            value="popularity"
          />Popularidade</label
        >
      </li>
      <li>
        <label for="relevancy"
          ><input
            v-model="order"
            type="radio"
            id="relevancy"
            name="options"
            value="relevancy"
          />Relevância</label
        >
      </li>
      <li>
        <label for="publishedAt"
          ><input
            v-model="order"
            type="radio"
            id="publishedAt"
            name="options"
            value="publishedAt"
            checked
          />Data de publicação</label
        >
      </li>
    </ul>
    {{ order }}
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      order: null,
      // colocar Feed como componente global para sempre alterar as opções no watch do feed, para fazer o novo fetch automaticamente
    };
  },
  watch: {
    order() {
      // this.options.sort = this.order;
      console.log("wsrgr");
    },
  },
};
</script>

<style>
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
  margin-right: 8px;
}
</style>
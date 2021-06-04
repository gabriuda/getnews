<template>
  <footer>
    <div>
      <p class="paragrafo">GetNews. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "TheFooter"
  }
</script>

<style scoped>
  footer {
    background: var(--azul);
    padding: 25px;
    position: relative;
    top: 75px;
  }

  footer div {
    margin: 0 auto;
    max-width: 960px;
  }

  .paragrafo {
    color: var(--branco);
    font-size: 1.2rem;
  }

  @media (max-width: 730px) {
    footer {
      top: 0;
    }
  }
</style>
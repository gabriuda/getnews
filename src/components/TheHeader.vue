<template>
  <header class="header">
    <div class="header-container">
      <router-link to="/"><img src="@/assets/logo.svg" /></router-link>
      <nav>
        <ul class="menu">
          <li>
            <router-link to="/sobre">Sobre</router-link>
            <a
              href="https://github.com/gabriuda/getnews"
              target="_blank"
              class="btn-git-link"
              >GitHub</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style>
.header {
  background: var(--azul);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu li a {
  font-family: var(--font-mulish);
  font-size: 1.2rem;
  color: var(--branco);
  padding: 10px 15px;
  gap: 32px;
}

.btn-git-link {
  background: url("../assets/seta.svg") no-repeat center right;
  padding-right: 25px !important;
}
</style>
<template>
  <header class="header">
    <div class="header-container">
      <router-link to="/?page=1" class="logo"
        ><img src="@/assets/logo.svg"
      /></router-link>
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
  max-width: 960px;
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
  position: relative;
  padding: 10px 15px;
  transition: 0.3s;
  gap: 32px;
}

.btn-git-link {
  background: url("../assets/seta.svg") no-repeat;
  background-position: 93% 50%;
  padding-right: 30px !important;
  transition: 0.3s;
}

.btn-git-link:hover {
  background-position: 100% 50%;
}

.menu li a.router-link-active {
  text-decoration: underline;
}

@media (max-width: 730px) {
  .logo {
    max-width: 160px;
  }
  .menu li a {
    font-size: 1rem;
  }
}
</style>
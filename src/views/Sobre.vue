<template>
  <div>
    <h1 class="titulo t-sobre">Sobre</h1>
    <section class="container-sobre">
      <div>
        <h2 class="subtitulo s-sobre">API</h2>
        <p class="paragrafo">
          A API utilizada foi a A
          <a
            href="https://servicodados.ibge.gov.br/api/docs/noticias?versao=3"
            target="_blank"
          >
            API Notícias</a
          >. Ela engloba um conjunto de notícias puxadas diretamente do site do
          IBGE.
        </p>
        <p class="paragrafo">
          Caso queira usá-la em algum projeto ou tenha dúvidas sobre o uso,
          acesse a documentação da mesma em:
          <a
            href="https://servicodados.ibge.gov.br/api/docs/noticias?versao=3"
            target="_blank"
            >https://servicodados.ibge.gov.br/api/docs/noticias?versao=3</a
          >
        </p>
        <p class="paragrafo">
          O IBGE também disponibiliza outras APIs para o acesso à informação,
          consulte-as no link abaixo:
          <a href="https://servicodados.ibge.gov.br/api/docs" target="_blank"
            >https://servicodados.ibge.gov.br/api/docs</a
          >
        </p>
      </div>
      <div>
        <h2 class="subtitulo s-sobre">Projeto</h2>
        <p class="paragrafo">
          O site foi desenvolvido como forma de estudos em VueJs.
        </p>
        <a href="https://github.com/gabriuda/getnews" target="_blank"
          ><button class="btn-noticia btn-sobre">Meu repositório</button></a
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Sobre",
  created() {
    document.title = "Sobre";
  }
};
</script>

<style>
.t-sobre {
  margin-top: 40px;
}

.s-sobre {
  margin-bottom: 10px;
}

.btn-sobre {
  margin-top: 30px;
}

.container-sobre {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
  margin-top: 30px;
}

.container-sobre p + p {
  margin-top: 16px;
}

@media (max-width: 840px) {
  .container-sobre {
    grid-template-columns: 1fr;
  }
}
</style>
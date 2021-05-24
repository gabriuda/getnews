export default {
  filters: {
    formatImage(string) {
      const url = "https://agenciadenoticias.ibge.gov.br";
      const format = string
        .split(",")[0]
        .replace(/{"image_intro":"/g, "")
        .replace('"', "");
      const formated = `${url}/${format}`;
      return formated;
    },
  },
}
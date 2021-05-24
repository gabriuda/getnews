export default {
  data() {
    return {
      windowWidth: null,
      func: null
    }
  },
  methods: {
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
    },
    activeFunction(func) {
      this.func = func;
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.getWindowWidth);
      window.addEventListener("resize", this.showFilter);
      this.getWindowWidth();
      if (this.func) this.func();
    });
  },
}
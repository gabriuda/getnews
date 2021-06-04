import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Sobre from "@/views/Sobre.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: Sobre,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;

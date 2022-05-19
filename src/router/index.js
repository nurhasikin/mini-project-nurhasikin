import Vue from "vue";
import VueRouter from "vue-router";
import Default from "@/layouts/Default.vue";
import Beranda from "@/views/Beranda";
import Tentang from "@/views/Tentang";
import Produk from "@/views/Produk";
import Perawatan from "@/views/Perawatan";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Default,
    children: [
      {
        path: "",
        name: "Beranda",
        component: Beranda,
      },
      {
        path: "/tentang",
        name: "Tentang",
        component: Tentang,
      },
      {
        path: "/produk",
        name: "Produk",
        component: Produk,
      },
      {
        path: "/perawatan",
        name: "Perawatan",
        component: Perawatan,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  base: "/",
  mode: "history",
});

export default router;

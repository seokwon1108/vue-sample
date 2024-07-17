import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/apps/Home.vue";
import About from "../views/apps/About.vue";
import NotFound from "../views/pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

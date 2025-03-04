import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

// Jeśli plik routes.js faktycznie istnieje i chcesz go używać,
// zaimportuj go pod inną nazwą
// import routesConfig from "./routes";

// Albo jeśli nie potrzebujesz zewnętrznego pliku routes.js,
// usuń ten import
// import routes from "./routes";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // używamy lokalnie zdefiniowanej tablicy routes
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

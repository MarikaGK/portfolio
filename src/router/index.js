import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

// Jeśli plik routes.js faktycznie istnieje i chcesz go używać,
// zaimportuj go pod inną nazwą
// import routesConfig from "./routes";

// Albo jeśli nie potrzebujesz zewnętrznego pliku routes.js,
// usuń ten import
// import routes from "./routes";

// Używaj stałej dla bazowego URL
const BASE_URL = ""; // Pusty dla hash history

// Definiujemy trasy bezpośrednio tutaj, bez mieszania z importem
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
];

const router = createRouter({
  // Dla HashHistory, nie używamy BASE_URL, ponieważ # obsługuje routing po stronie klienta
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

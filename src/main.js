import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";

// Importuj pliki tłumaczeń
import pl from "./i18n/pl.json";
import en from "./i18n/en.json";

// Skonfiguruj i18n
const i18n = createI18n({
  legacy: false, // używaj trybu Composition API
  locale: "pl", // domyślny język
  fallbackLocale: "en", // awaryjny język
  messages: {
    pl,
    en,
  },
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");

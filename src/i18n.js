import { createI18n } from "vue-i18n";
import pl from "./locales/pl.json";
import en from "./locales/en.json";

const i18n = createI18n({
  legacy: false, // Użyj Composition API
  locale: "pl", // Domyślny język
  fallbackLocale: "en", // Język awaryjny
  messages: {
    pl,
    en,
  },
});

export default i18n;

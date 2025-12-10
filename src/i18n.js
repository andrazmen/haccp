import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import si from "./locales/si/translation.json";
import en from "./locales/en/translation.json";

i18n.use(initReactI18next).init({
  lng: "si",
  fallbackLng: "si",
  resources: {
    si: { translation: si },
    en: { translation: en },
  },
});

export default i18n;

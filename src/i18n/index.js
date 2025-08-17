import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import vi from "./locales/vi/translation.json";

import enHome from "./locales/en/home.json";
import viHome from "./locales/vi/home.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
        home: enHome,
      },
      vi: {
        translation: vi,
        home: viHome,
      },
    },
    ns: ["home", "translation"],
    defaultNS: "translation",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"], // ưu tiên lấy từ localStorage trước
      caches: ["localStorage"], // 👈 lưu vào localStorage
    },
  });

export default i18n;

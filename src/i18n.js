import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const englishTrans = {
  eg_one: {
    book: "A Tale of Two Cities",
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
  },
  eg_two: {
    book: "Prince Hamlet ",
    quote: "To be, or not to be, that is the question.",
  }
};

const spanishTrans = {
  eg_one: {
    book: "Historia de dos ciudades",
    quote:
      "Eran los mejores tiempos, eran los peores tiempos, era el siglo de la locura, era el siglo de la razón, era la edad de la fe, era la edad de la incredulidad, era la época de la luz, era la época de las tinieblas, era la primavera de la esperanza, era el invierno de la desesperación.",
  },
  eg_two: {
    book: "Príncipe Hamlet",
    quote: "Ser o no ser, he ahí el dilema.",
  }
};

i18n.use(initReactI18next).init({
  debug: true,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { translation: englishTrans },
    es: { translation: spanishTrans },
  },
});

export default i18n;

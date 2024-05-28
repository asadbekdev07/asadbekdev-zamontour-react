import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import laungageDetector from 'i18next-browser-languagedetector';
import enLang from './assets/locales/en.json'
import uzLang from './assets/locales/uz.json'
import ruLang from './assets/locales/ru.json'

const language = localStorage.getItem('i18nextLng') || 'en'

i18n
.use(Backend)
.use(laungageDetector)
.use(initReactI18next)
.init({
  fallbackLng: 'en',
  lng: language,
  debug: true,
  resources: {
    en:{translation: enLang},
    uz:{translation: uzLang},
    ru:{translation: ruLang}
  }
})

export default i18n;
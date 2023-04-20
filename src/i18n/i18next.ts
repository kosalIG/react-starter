import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          learn: 'Learn i18next',
        },
      },
      kh: {
        translation: {
          learn: 'រៀន i18next',
        },
      },
    },
  });

export default i18next;

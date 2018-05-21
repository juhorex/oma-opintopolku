import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { reactI18nextModule } from 'react-i18next';

i18n
  .use(Backend)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'fi',
    ns: ['common', 'home', 'selection'],
    defaultNS: 'common',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      defaultTransParent: 'div',
      wait: true
    },
    backend: {
      loadPath: '/oma-opintopolku/locales/{{lng}}/{{ns}}.json'
    }
  });

export default i18n;

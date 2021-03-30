import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import languageEN from './locales/en/translate.json'
import languageJP from './locales/jp/translate.json'
import Languages from '../localisation/Languages'
import UserManager from '../util/UserManager'

let defaultLanguage = Languages.ENGLISH

let selectedLanguage = UserManager.getSelectedLanguage();


if (!selectedLanguage)
   UserManager.setSelectedLanguage(defaultLanguage);

i18n.use(initReactI18next)
    .init({
        resources: {
            en: languageEN,
            jp: languageJP
        },
        /* default language when load the website in browser */
        lng: selectedLanguage || defaultLanguage,
        /* When react i18next not finding any language to as default in borwser */
        fallbackLng: selectedLanguage || defaultLanguage,
        /* debugger For Development environment */
        debug: true,
        ns: ["translations"],
        defaultNS: "translations",
        keySeparator: ".",
        interpolation: {
            escapeValue: false,
            formatSeparator: ","
        },
        react: {
            wait: true,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        }
    })

console.log(selectedLanguage, '----------Selected Language----------');

export default i18n;
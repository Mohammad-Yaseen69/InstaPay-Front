import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import the translation files
import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import pt from './locales/pt.json';
import de from './locales/de.json';
import uk from './locales/uk.json';
import it from './locales/it.json';
import ru from './locales/ru.json';
import ar from './locales/ar.json';
import pl from './locales/pl.json';
import nl from './locales/nl.json';
import yo from './locales/yo.json';
import id from './locales/id.json';
import tr from './locales/tr.json';
import sw from './locales/sw.json';
import ha from './locales/ha.json';
import hi from './locales/hi.json';
import ur from './locales/ur.json';
import zh from './locales/zh.json';

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        lng: "en", // Default language
        resources: {
            en: { translation: en },
            fr: { translation: fr },
            es: { translation: es },
            pt: { translation: pt },
            de: { translation: de },
            uk: { translation: uk },
            it: { translation: it },
            ru: { translation: ru },
            ar: { translation: ar },
            pl: { translation: pl },
            nl: { translation: nl },
            yo: { translation: yo },
            id: { translation: id },
            tr: { translation: tr },
            sw: { translation: sw },
            ha: { translation: ha },
            hi: { translation: hi },
            ur: { translation: ur },
            zh: { translation: zh },
        },
    });
export default i18next;
import React from 'react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags'; // Import the react-world-flags library

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // i18n instance to change language

  const languages = {
    en: { name: "English", code: "GB" },
    fr: { name: "French", code: "FR" },
    es: { name: "Spanish", code: "ES" },
    pt: { name: "Portuguese", code: "PT" },
    de: { name: "German", code: "DE" },
    uk: { name: "Ukrainian", code: "UA" },
    it: { name: "Italian", code: "IT" },
    ru: { name: "Russian", code: "RU" },
    ar: { name: "Arabic", code: "SA" },
    pl: { name: "Polish", code: "PL" },
    nl: { name: "Dutch", code: "NL" },
    yo: { name: "Yoruba", code: "NG" },
    id: { name: "Indonesian", code: "ID" },
    tr: { name: "Turkish", code: "TR" },
    sw: { name: "Swahili", code: "KE" },
    ha: { name: "Hausa", code: "NG" },
    hi: { name: "Hindi", code: "IN" },
    ur: { name: "Urdu", code: "PK" },
    zh: { name: "Chinese", code: "CN" },
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // This will change the language
  };

  return (
    <div style={{display: "flex", alignItems: "center"}}>
      <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
        {Object.keys(languages).map((langCode) => (
          <option key={langCode} value={langCode}>
            {/* Displaying flag using react-world-flags */}
            <Flag code={languages[langCode].code} style={{ width: "20px", marginRight: "10px" }} />
            {languages[langCode].name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;

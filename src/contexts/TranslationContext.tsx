import React, { createContext, useContext, useState } from "react";
import { translations, SupportedLang } from "../utils/translations";

interface TranslationContextProps {
  t: (key: keyof typeof translations.en) => string;
  language: SupportedLang;
  setLanguage: (lang: SupportedLang) => void;
}

const TranslationContext = createContext<TranslationContextProps | null>(null);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<SupportedLang>("en");

  const t = (key: keyof (typeof translations)["en"]) => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const ctx = useContext(TranslationContext);
  if (!ctx)
    throw new Error("useTranslation must be used within TranslationProvider");
  return ctx;
};

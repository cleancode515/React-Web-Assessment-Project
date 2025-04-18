// src/utils/translations.ts
export const translations = {
  en: {
    admin: "Admin",
    lastData: "Last Data",
    lastIncome: "Last Income",
    normalChart: "Normal Chart",
    increase: "Increase",
    monthToMonth: "Month to month",
    language: "Language",
    aprilJan: "Apr - Jan",

    user: "User",
    codersTypes: "Coders types",
    newEmployees: "New Employees",
    soldProducts: "Sold products",
    react: "React",
    jscript: "JavaScript",
    coders: "Coders",
    designers: "Designers",
    logout: "Logout",
  },
  hu: {
    admin: "Adminisztrátor",
    lastData: "Legutóbbi Adatok",
    lastIncome: "Legutóbbi Bevétel",
    normalChart: "Normál Diagram",
    increase: "Növekedés",
    monthToMonth: "Hó-hó",
    language: "Nyelv",
    aprilJan: "Ápr - Jan",

    user: "Felhasználó",
    codersTypes: "Fejlesztők típusai",
    newEmployees: "Új alkalmazottak",
    soldProducts: "Eladott termékek",
    react: "React",
    jscript: "JavaScript",
    coders: "Fejlesztők",
    designers: "Tervezők",
    logout: "Kijelentkezés",
  },
  pl: {
    admin: "Administrator",
    lastData: "Ostatnie Dane",
    lastIncome: "Ostatni Dochód",
    normalChart: "Normalny Wykres",
    increase: "Wzrost",
    monthToMonth: "Miesiąc do miesiąca",
    language: "Język",
    aprilJan: "Kwi - Sty",

    user: "Użytkownik",
    codersTypes: "Typy programistów",
    newEmployees: "Nowi pracownicy",
    soldProducts: "Sprzedane produkty",
    react: "React",
    jscript: "JavaScript",
    coders: "Programiści",
    designers: "Projektanci",
    logout: "Wyloguj się",
  },
};

export type SupportedLang = keyof typeof translations;

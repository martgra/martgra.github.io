import { createContext, type ReactNode, useContext, useState } from "react";

import { portfolioEn } from "@/data/portfolio.en";
import { portfolioNo } from "@/data/portfolio.no";
import type { Portfolio } from "@/types/portfolio";

export type Language = "en" | "no";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  portfolio: Portfolio;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const portfolios: Record<Language, Portfolio> = {
  en: portfolioEn,
  no: portfolioNo,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, portfolio: portfolios[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function usePortfolio() {
  return useLanguage().portfolio;
}

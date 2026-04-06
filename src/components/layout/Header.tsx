import { motion } from "framer-motion";
import { useState } from "react";

import { SecretTerminal } from "@/components/easter-eggs/SecretTerminal";
import { useLanguage, usePortfolio } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function Header() {
  const portfolio = usePortfolio();
  const { language, setLanguage } = useLanguage();
  const [terminalOpen, setTerminalOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8 md:mb-12 border-b border-gray-800 pb-3 md:pb-4"
    >
      <div className="flex flex-col gap-3 md:gap-4">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setTerminalOpen((v) => !v)}
            className="text-green-500 font-bold text-base md:text-lg text-left hover:opacity-80 transition-opacity cursor-pointer"
            title="Click to open terminal"
          >
            <span className="text-blue-400">
              {portfolio.header.prompt.user}@{portfolio.header.prompt.host}
            </span>
            :<span className="text-purple-400">{portfolio.header.prompt.directory}</span>${" "}
            <span className="text-gray-100">{portfolio.header.prompt.command}</span>
          </button>
          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "no" : "en")}
            className="flex items-center gap-1.5 px-2 py-1 rounded border border-gray-700 hover:border-green-500/50 text-xs font-mono text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
          >
            <span className={language === "en" ? "text-green-400" : "text-gray-600"}>EN</span>
            <span className="text-gray-700">/</span>
            <span className={language === "no" ? "text-green-400" : "text-gray-600"}>NO</span>
          </button>
        </div>

        <SecretTerminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />

        <nav className="flex gap-3 md:gap-6 text-xs md:text-sm flex-wrap">
          {portfolio.nav.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
              className={cn(
                "hover:text-green-400 hover:underline decoration-green-500/50",
                "underline-offset-4 transition-colors whitespace-nowrap py-1"
              )}
            >
              <span className="hidden md:inline">[ </span>
              {item.label}
              <span className="hidden md:inline"> ]</span>
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

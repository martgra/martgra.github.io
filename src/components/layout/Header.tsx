import { motion } from "framer-motion";

import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Header() {
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
        <div className="text-green-500 font-bold text-base md:text-lg">
          <span className="text-blue-400">
            {portfolio.header.prompt.user}@{portfolio.header.prompt.host}
          </span>
          :<span className="text-purple-400">{portfolio.header.prompt.directory}</span>${" "}
          <span className="text-gray-100">{portfolio.header.prompt.command}</span>
        </div>
        <nav className="flex gap-3 md:gap-6 text-xs md:text-sm flex-wrap">
          {portfolio.nav.map((item, index) => (
            <motion.a
              key={item.label}
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

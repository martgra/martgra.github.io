import { motion } from "framer-motion";
import { Globe } from "lucide-react";

import { TerminalPrompt } from "@/components/terminal/TerminalPrompt";
import { usePortfolio } from "@/context/LanguageContext";

export function About() {
  const portfolio = usePortfolio();

  return (
    <section id="about" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <TerminalPrompt command={portfolio.about.command} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg font-mono text-sm md:text-base"
      >
        {portfolio.about.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={
              index === 0
                ? "mb-4 leading-relaxed"
                : index < portfolio.about.paragraphs.length - 1
                  ? "mb-4 leading-relaxed text-gray-400"
                  : "leading-relaxed text-gray-400"
            }
          >
            {paragraph}
          </motion.p>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-800/50"
        >
          <Globe className="w-4 h-4 text-gray-500 flex-shrink-0" />
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {portfolio.about.languages.map((lang) => (
              <span key={lang.language} className="text-gray-400">
                <span className="text-gray-300">{lang.language}</span>
                <span className="text-gray-600"> — </span>
                <span className="text-gray-500 text-xs">{lang.level}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

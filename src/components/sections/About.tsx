import { motion } from "framer-motion";

import { TerminalPrompt } from "@/components/terminal/TerminalPrompt";
import { portfolio } from "@/data/portfolio";

export function About() {
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
            className={index === 0 ? "mb-4 leading-relaxed" : "leading-relaxed text-gray-400"}
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}

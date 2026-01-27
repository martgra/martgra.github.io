import { motion } from "framer-motion";

import { Section } from "@/components/layout/Section";
import { TerminalPrompt } from "@/components/terminal/TerminalPrompt";
import { portfolio } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" className="scroll-mt-20">
      <TerminalPrompt command={portfolio.about.command} />
      <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg font-mono text-sm md:text-base">
        {portfolio.about.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={index === 0 ? "mb-4 leading-relaxed" : "leading-relaxed text-gray-400"}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </Section>
  );
}

import { motion } from "framer-motion";

import { Section } from "@/components/layout/Section";
import { TerminalPrompt } from "@/components/terminal/TerminalPrompt";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const titleColorMap: Record<string, string> = {
  purple: "text-purple-400 group-hover:text-green-400",
  blue: "text-blue-400 group-hover:text-green-400",
  green: "text-green-400 group-hover:text-green-400",
  yellow: "text-yellow-400 group-hover:text-green-400",
  pink: "text-pink-400 group-hover:text-green-400",
  red: "text-red-400 group-hover:text-green-400",
};

export function Skills() {
  return (
    <Section id="skills" className="scroll-mt-20">
      <TerminalPrompt command={portfolio.skills.command} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolio.skills.categories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 p-5 rounded hover:border-green-500/30 transition-colors group"
          >
            <div
              className={cn(
                "mb-3 text-xs uppercase tracking-wider font-bold transition-colors",
                titleColorMap[category.color] || "text-gray-400 group-hover:text-green-400"
              )}
            >
              {category.title}
            </div>
            <ul className="space-y-2 text-sm">
              {category.items.map((item, itemIndex) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: categoryIndex * 0.1 + itemIndex * 0.05,
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <span className="text-green-500">✓</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

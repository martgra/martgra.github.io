import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { TerminalPrompt } from "@/components/terminal/TerminalPrompt";
import { usePortfolio } from "@/context/LanguageContext";

export function Education() {
  const portfolio = usePortfolio();
  const [psychologyRevealed, setPsychologyRevealed] = useState(false);

  return (
    <section id="education" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <TerminalPrompt command={portfolio.education.command} />
      </motion.div>
      <div className="space-y-3">
        {portfolio.education.items.map((entry, index) => {
          const isPsychology =
            entry.degree.toLowerCase().includes("psycholog") ||
            entry.degree.toLowerCase().includes("psykolog");

          return (
            <div key={entry.degree}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`border border-gray-800 bg-gray-900/30 hover:border-green-500/30 transition-colors p-4 rounded group ${isPsychology ? "cursor-pointer" : ""}`}
                onClick={() => {
                  if (isPsychology) setPsychologyRevealed((v) => !v);
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="text-sm font-bold text-gray-100 group-hover:text-green-400 transition-colors">
                    {entry.degree}
                  </h3>
                  <span className="text-xs text-gray-500 font-mono">{entry.years}</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">{entry.institution}</p>
              </motion.div>

              <AnimatePresence>
                {isPsychology && psychologyRevealed && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 p-3 rounded bg-gray-900/80 border border-gray-800 text-xs text-gray-400 font-mono">
                      <span className="text-yellow-400">Fun fact:</span> I can tell you&apos;re
                      reading my CV carefully. That&apos;s a cognitive bias called the
                      &quot;completionism effect&quot; — a compulsive need to read every section. (I
                      made that up. But you read it anyway. That&apos;s the{" "}
                      <span className="text-green-400">actual</span> completionism effect.)
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";

import { TerminalPrompt } from "@/components/terminal/TerminalPrompt";
import { usePortfolio } from "@/context/LanguageContext";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function Experience() {
  const portfolio = usePortfolio();
  const { language } = useLanguage();
  const [collapsed, setCollapsed] = useState<Set<number>>(new Set());

  const allIndices = useMemo(
    () => new Set(portfolio.experience.items.map((_, i) => i)),
    [portfolio.experience.items]
  );

  const allExpanded = collapsed.size === 0;

  const toggleAll = () => {
    setCollapsed(allExpanded ? allIndices : new Set());
  };

  const clientItems = portfolio.experience.items
    .map((entry, index) => ({ entry, index }))
    .filter(({ entry }) => !entry.internal);

  const internalItems = portfolio.experience.items
    .map((entry, index) => ({ entry, index }))
    .filter(({ entry }) => entry.internal);

  const renderEntry = ({
    entry,
    index,
  }: {
    entry: (typeof portfolio.experience.items)[number];
    index: number;
  }) => {
    const isExpanded = !collapsed.has(index);
    return (
      <motion.div
        key={`${entry.company}-${entry.project}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        viewport={{ once: true, margin: "-100px" }}
        className="border border-gray-800 bg-gray-900/30 rounded overflow-hidden"
      >
        <button
          type="button"
          onClick={() => {
            setCollapsed((prev) => {
              const next = new Set(prev);
              if (next.has(index)) next.delete(index);
              else next.add(index);
              return next;
            });
          }}
          className="w-full text-left p-4 hover:bg-gray-900 transition-colors group cursor-pointer"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
                <h3 className="text-lg font-bold text-gray-100 group-hover:text-green-400 transition-colors">
                  {entry.company}
                </h3>
                <span className="text-sm text-gray-500 font-mono">{entry.project}</span>
                {entry.internal && (
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-500 border border-gray-700 self-start md:self-auto">
                    internal
                  </span>
                )}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
                <span className="text-sm text-purple-400">{entry.role}</span>
                <span className="text-xs text-gray-600 hidden sm:inline">|</span>
                <span className="text-xs text-gray-500 font-mono">{entry.period}</span>
              </div>
            </div>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200",
                isExpanded && "rotate-180"
              )}
            />
          </div>
        </button>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="px-4 pb-4 border-t border-gray-800/50"
          >
            <p className="text-gray-400 text-sm mt-4 mb-4 leading-relaxed">{entry.description}</p>

            <ul className="space-y-2 mb-4">
              {entry.highlights.map((highlight) => (
                <li
                  key={highlight.slice(0, 40)}
                  className="flex items-start gap-2 text-sm text-gray-300"
                >
                  <span className="text-green-500 flex-shrink-0 mt-0.5">&gt;</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {entry.technologies.map((tech) => (
                <span key={tech} className="px-2 py-1 rounded text-xs bg-gray-800 text-gray-400">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    );
  };

  return (
    <section id="experience" className="scroll-mt-20">
      <div className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <TerminalPrompt command={portfolio.experience.command} />
        </motion.div>
        <button
          type="button"
          onClick={toggleAll}
          className="text-xs font-mono text-gray-500 hover:text-green-400 transition-colors cursor-pointer whitespace-nowrap print:hidden"
        >
          [
          {allExpanded
            ? language === "no"
              ? "skjul alle"
              : "collapse all"
            : language === "no"
              ? "vis alle"
              : "expand all"}
          ]
        </button>
      </div>

      {/* Client work */}
      <div className="space-y-4">{clientItems.map(renderEntry)}</div>

      {/* Internal work separator */}
      {internalItems.length > 0 && (
        <>
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 border-t border-gray-800" />
            <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">
              {language === "no" ? "Intern erfaring — Accenture" : "Internal — Accenture"}
            </span>
            <div className="flex-1 border-t border-gray-800" />
          </div>
          <div className="space-y-4">{internalItems.map(renderEntry)}</div>
        </>
      )}
    </section>
  );
}

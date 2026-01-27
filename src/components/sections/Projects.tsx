import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { TerminalPrompt } from "@/components/terminal/TerminalPrompt";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const tagColorMap: Record<string, string> = {
  blue: "bg-gray-800 text-blue-300",
  green: "bg-gray-800 text-green-300",
  yellow: "bg-gray-800 text-yellow-300",
  pink: "bg-gray-800 text-pink-300",
  purple: "bg-gray-800 text-purple-300",
  orange: "bg-gray-800 text-orange-300",
  gray: "bg-gray-800 text-gray-300",
};

export function Projects() {
  return (
    <Section id="projects" className="scroll-mt-20">
      <TerminalPrompt command={portfolio.projects.command} />
      <div className="space-y-4">
        {portfolio.projects.items.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative border border-gray-800 bg-gray-900/30 hover:bg-gray-900 hover:border-green-500/50 transition-all duration-300 p-4 rounded overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="w-4 h-4 text-green-400" />
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
              <h3 className="text-lg font-bold text-gray-100 group-hover:text-green-400 transition-colors">
                {project.name}
              </h3>
              <span className="text-xs text-gray-500 font-mono">{project.meta}</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            <div className="flex gap-3 text-xs">
              {project.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={cn("px-2 py-1 rounded", tagColorMap[tag.color] || tagColorMap.gray)}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

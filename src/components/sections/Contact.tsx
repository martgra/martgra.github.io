import { motion } from "framer-motion";
import { Download, FileJson, Github, Linkedin, Mail } from "lucide-react";

import { TerminalPrompt } from "@/components/terminal/TerminalPrompt";
import { usePortfolio } from "@/context/LanguageContext";
import { useLanguage } from "@/context/LanguageContext";
import { downloadResumeJson } from "@/lib/resumeJson";

export function Contact() {
  const portfolio = usePortfolio();
  const { language } = useLanguage();

  const socialLinks = [
    {
      icon: Mail,
      label: "email",
      permissions: "lrwxr-xr-x",
      size: "1.2K",
      date: "Jan 27 10:30",
      href: portfolio.contact.email ? `mailto:${portfolio.contact.email}` : undefined,
      display: portfolio.contact.email,
    },
    {
      icon: Github,
      label: "github",
      permissions: "lrwxr-xr-x",
      size: "856B",
      date: "Jan 27 10:30",
      href: portfolio.contact.github,
      display: portfolio.contact.github?.replace("https://", ""),
    },
    {
      icon: Linkedin,
      label: "linkedin",
      permissions: "lrwxr-xr-x",
      size: "2.4K",
      date: "Jan 27 10:30",
      href: portfolio.contact.linkedin,
      display: portfolio.contact.linkedin?.replace("https://", "").replace("www.", ""),
    },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
          <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
        </svg>
      ),
      label: "bluesky",
      permissions: "lrwxr-xr-x",
      size: "1.8K",
      date: "Jan 27 10:30",
      href: portfolio.contact.bluesky,
      display: portfolio.contact.bluesky?.replace("https://", "").replace("bsky.app/profile/", ""),
    },
  ].filter((link) => link.href);

  return (
    <section id="contact" className="scroll-mt-20 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <TerminalPrompt command={portfolio.contact.command} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-gray-900/50 border border-gray-800 p-4 md:p-6 rounded-lg font-mono text-xs md:text-sm overflow-hidden"
      >
        <div className="space-y-2">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex items-center gap-3 hover:text-green-400 transition-colors group py-1"
              >
                <Icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-500 w-24 flex-shrink-0 hidden md:inline">
                  {link.permissions}
                </span>
                <span className="text-gray-500 w-6 flex-shrink-0 text-right hidden sm:inline">
                  1
                </span>
                <span className="text-gray-400 w-12 flex-shrink-0 hidden lg:inline">user</span>
                <span className="text-gray-400 w-12 flex-shrink-0 hidden lg:inline">staff</span>
                <span className="text-gray-400 w-10 flex-shrink-0 text-right hidden md:inline">
                  {link.size}
                </span>
                <span className="text-gray-500 w-28 flex-shrink-0 hidden md:inline">
                  {link.date}
                </span>
                <span className="text-cyan-400 w-16 flex-shrink-0">{link.label}</span>
                <span className="text-gray-600 flex-shrink-0">→</span>
                <span className="text-gray-300 group-hover:text-green-400 transition-colors truncate min-w-0">
                  {link.display}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Download actions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-800/50 print:hidden"
        >
          <button
            type="button"
            onClick={() => window.print()}
            className="flex items-center gap-2 px-3 py-2 rounded border border-gray-700 hover:border-green-500/50 text-gray-400 hover:text-green-400 transition-colors text-xs font-mono cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            {language === "no" ? "Last ned PDF" : "Download PDF"}
          </button>
          <button
            type="button"
            onClick={() => downloadResumeJson(portfolio, language)}
            className="flex items-center gap-2 px-3 py-2 rounded border border-gray-700 hover:border-green-500/50 text-gray-400 hover:text-green-400 transition-colors text-xs font-mono cursor-pointer"
          >
            <FileJson className="w-3.5 h-3.5" />
            resume.json ({language.toUpperCase()})
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

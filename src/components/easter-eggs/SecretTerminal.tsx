import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { useEasterEgg } from "@/context/EasterEggContext";
import { useLanguage, usePortfolio } from "@/context/LanguageContext";
import { downloadResumeJson } from "@/lib/resumeJson";

interface SecretTerminalProps {
  open: boolean;
  onClose: () => void;
}

const STATIC_COMMANDS: Record<string, string | "DESTROY" | "MATRIX" | "DOWNLOAD_RESUME"> = {
  help: "Available commands: help, ls -a, cat secret.txt, whoami, pwd, date, uptime, cat resume.json, rm -rf /, exit, clear",
  "ls -a":
    ". .. .secret .definitely-not-easter-eggs .martin-was-here .npmrc resume.json node_modules (42GB, obviously)",
  ls: "about/ skills/ experience/ projects/ education/ contact/ resume.json",
  "cat secret.txt":
    "If you found this, you're exactly the kind of person I want to work with. Say hi → martin@gran.dev",
  "cat .secret": "The cake is a lie. But the coffee is real.",
  whoami: "A curious person who types commands into strangers' portfolios. I respect that.",
  pwd: "/home/guest/gran.dev/you-found-the-terminal",
  uptime: "8+ years and counting. No major incidents. (Some minor ones we don't talk about.)",
  "rm -rf /": "DESTROY",
  "sudo rm -rf /": "DESTROY",
  clear: "",
  exit: "",
  matrix: "MATRIX",
  "cat resume.json": "DOWNLOAD_RESUME",
  coffee: "☕ Brewing... Done. Your mass-produced artisanal developer fuel is ready.",
  "ping martin": "PONG! Response time: ~24h (I sleep sometimes)",
  "npm install":
    "added 847 packages in 42s. 12 vulnerabilities (3 moderate, 9 you'll-ignore-anyway)",
  "git blame": "It was always Martin. It's always Martin.",
};

function getCommandResult(
  cmd: string
): string | "DESTROY" | "MATRIX" | "DOWNLOAD_RESUME" | undefined {
  if (cmd === "date") return new Date().toString();
  return STATIC_COMMANDS[cmd];
}

export function SecretTerminal({ open, onClose }: SecretTerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { triggerDestroy, triggerMatrix } = useEasterEgg();
  const portfolio = usePortfolio();
  const { language } = useLanguage();

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setInput("");

    if (cmd === "exit") {
      onClose();
      return;
    }

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    const result = getCommandResult(cmd);
    if (result === "DESTROY") {
      onClose();
      triggerDestroy();
      return;
    }

    if (result === "MATRIX") {
      onClose();
      triggerMatrix();
      return;
    }

    if (result === "DOWNLOAD_RESUME") {
      setHistory((prev) => [
        ...prev,
        { cmd: input.trim(), output: `Downloading resume-${language}.json...` },
      ]);
      downloadResumeJson(portfolio, language);
      return;
    }

    if (result) {
      setHistory((prev) => [...prev, { cmd: input.trim(), output: result }]);
    } else if (cmd) {
      setHistory((prev) => [
        ...prev,
        { cmd: input.trim(), output: `zsh: command not found: ${cmd.split(" ")[0]}. Try 'help'.` },
      ]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden"
        >
          <div
            ref={scrollRef}
            className="bg-gray-950 border border-gray-700 rounded-lg p-4 mt-3 font-mono text-sm max-h-64 overflow-y-auto"
          >
            <p className="text-gray-500 mb-2 text-xs">
              Secret terminal activated. Type &apos;help&apos; for commands.
            </p>
            {history.map((entry, i) => (
              <div key={i} className="mb-1">
                <p className="text-gray-400">
                  <span className="text-blue-400">guest@gran.dev</span>:
                  <span className="text-purple-400">~</span>$ {entry.cmd}
                </p>
                <p className="text-green-400/80 whitespace-pre-wrap">{entry.output}</p>
              </div>
            ))}
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-blue-400">guest@gran.dev</span>
              <span className="text-white">:</span>
              <span className="text-purple-400">~</span>
              <span className="text-white">$ </span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-gray-100 outline-none ml-1 caret-green-400"
                spellCheck={false}
                autoComplete="off"
              />
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

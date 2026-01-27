import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface TerminalOutputProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function TerminalOutput({ children, className, delay = 0 }: TerminalOutputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn("text-terminal-text", className)}
    >
      {children}
    </motion.div>
  );
}

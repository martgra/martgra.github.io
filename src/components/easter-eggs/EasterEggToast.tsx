import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

interface EasterEggToastProps {
  message: string | null;
  onDone: () => void;
  duration?: number;
}

export function EasterEggToast({ message, onDone, duration = 3000 }: EasterEggToastProps) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onDone, duration);
    return () => clearTimeout(timer);
  }, [message, onDone, duration]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-lg bg-gray-900 border border-green-500/50 text-green-400 font-mono text-sm shadow-lg shadow-green-500/10 max-w-md text-center"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PageDestroyProps {
  active: boolean;
  onDone: () => void;
}

export function PageDestroy({ active, onDone }: PageDestroyProps) {
  const [phase, setPhase] = useState<"destroying" | "bsod" | null>(null);

  useEffect(() => {
    if (!active) return;
    setPhase("destroying");

    const bsodTimer = setTimeout(() => setPhase("bsod"), 1500);
    const doneTimer = setTimeout(() => {
      setPhase(null);
      onDone();
    }, 4500);

    return () => {
      clearTimeout(bsodTimer);
      clearTimeout(doneTimer);
    };
  }, [active, onDone]);

  if (!active && !phase) return null;

  if (phase === "bsod") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-blue-700 flex items-center justify-center p-8"
      >
        <div className="font-mono text-white text-sm max-w-lg">
          <p className="text-xl mb-4">:( </p>
          <p className="mb-2">Your terminal ran into a problem and needs to restart.</p>
          <p className="text-blue-300 text-xs mt-4">Stop code: RM_RF_SLASH_WAS_A_BAD_IDEA</p>
          <p className="text-blue-300 text-xs mt-6 animate-pulse">
            Just kidding. Reloading in a moment...
          </p>
        </div>
      </motion.div>
    );
  }

  if (phase === "destroying") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-50 bg-gray-950 flex items-center justify-center"
      >
        <div className="font-mono text-red-400 text-sm space-y-1">
          <motion.p animate={{ opacity: [0, 1] }} transition={{ delay: 0 }}>
            rm: removing &apos;/home/martin/projects&apos;...
          </motion.p>
          <motion.p animate={{ opacity: [0, 1] }} transition={{ delay: 0.3 }}>
            rm: removing &apos;/home/martin/.config&apos;...
          </motion.p>
          <motion.p animate={{ opacity: [0, 1] }} transition={{ delay: 0.6 }}>
            rm: removing &apos;/usr/bin/node&apos;...
          </motion.p>
          <motion.p animate={{ opacity: [0, 1] }} transition={{ delay: 0.9 }}>
            rm: removing &apos;/etc/everything-important&apos;...
          </motion.p>
          <motion.p
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 1.2 }}
            className="text-yellow-400"
          >
            Kernel panic — not syncing: VFS: Unable to mount root fs
          </motion.p>
        </div>
      </motion.div>
    );
  }

  return null;
}

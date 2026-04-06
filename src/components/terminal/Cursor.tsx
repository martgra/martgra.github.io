import { motion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

interface CursorProps {
  className?: string;
}

export function Cursor({ className }: CursorProps) {
  const [clicks, setClicks] = useState(0);
  const [broken, setBroken] = useState(false);

  const handleClick = () => {
    const next = clicks + 1;
    setClicks(next);
    if (next >= 10 && !broken) {
      setBroken(true);
      setTimeout(() => {
        setBroken(false);
        setClicks(0);
      }, 3000);
    }
  };

  if (broken) {
    return (
      <motion.span
        animate={{
          x: [0, -2, 3, -1, 2, -3, 1, 0],
          opacity: [1, 0.3, 1, 0.5, 1, 0.2, 1, 0.8],
          scaleY: [1, 1.5, 0.5, 2, 0.3, 1.8, 0.7, 1],
        }}
        transition={{ duration: 0.5, repeat: 3 }}
        className={cn("inline-block w-2 h-5 bg-red-500 ml-1", className)}
        aria-hidden="true"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute text-xs text-red-400 font-mono whitespace-nowrap ml-2 -mt-1"
        >
          You broke the cursor. Happy now?
        </motion.span>
      </motion.span>
    );
  }

  return (
    <span
      onClick={handleClick}
      className={cn(
        "inline-block w-2 h-5 bg-terminal-prompt ml-1 cursor-blink",
        clicks > 5 && "animate-pulse",
        className
      )}
      role="presentation"
      aria-hidden="true"
    />
  );
}

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export function BackToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (y) => setVisible(y > 600));
  }, [scrollY]);

  if (!visible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 px-3 py-2 rounded border border-gray-700 bg-gray-900/90 text-gray-400 hover:text-green-400 hover:border-green-500/50 font-mono text-xs transition-colors cursor-pointer print:hidden"
      title="Back to top"
    >
      ↑ top
    </motion.button>
  );
}

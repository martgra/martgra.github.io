import { motion } from "framer-motion";
import { useState } from "react";

import { TypewriterText } from "@/components/terminal/TypewriterText";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  const [showSubtext, setShowSubtext] = useState(false);

  return (
    <section id="hero" className="min-h-[200px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-green-400 mb-2 text-sm opacity-70"
      >
        {portfolio.hero.comment}
      </motion.div>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6 leading-tight">
        <TypewriterText
          text={portfolio.meta.tagline}
          speed={30}
          delay={600}
          onComplete={() => setShowSubtext(true)}
        />
      </h1>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={showSubtext ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="text-gray-400 max-w-2xl leading-relaxed border-l-2 border-gray-800 pl-4 italic"
      >
        &gt; {portfolio.meta.description}
      </motion.p>
    </section>
  );
}

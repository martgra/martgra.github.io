import { motion } from "framer-motion";
import { useState } from "react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  collapsible?: boolean;
  trigger?: React.ReactNode;
  defaultOpen?: boolean;
}

export function Section({
  id,
  children,
  className,
  collapsible = false,
  trigger,
  defaultOpen = true,
}: SectionProps) {
  const { ref, isInView } = useScrollReveal({ threshold: 0.1, once: true });
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (collapsible && trigger) {
    return (
      <section id={id} ref={ref} className={className}>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>{trigger}</CollapsibleTrigger>
          <CollapsibleContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </CollapsibleContent>
        </Collapsible>
      </section>
    );
  }

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

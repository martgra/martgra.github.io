import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  once?: boolean;
}

export function useScrollReveal({ threshold = 0.1, once = true }: UseScrollRevealOptions = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return { ref, isInView };
}

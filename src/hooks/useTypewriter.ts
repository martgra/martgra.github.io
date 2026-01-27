import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export function useTypewriter({ text, speed = 50, delay = 0, onComplete }: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Handle initial delay
    if (!hasStarted) {
      if (delay > 0) {
        const delayTimer = setTimeout(() => {
          setHasStarted(true);
        }, delay);
        return () => clearTimeout(delayTimer);
      } else {
        setHasStarted(true);
      }
    }
    return undefined;
  }, [delay, hasStarted]);

  useEffect(() => {
    if (!hasStarted || currentIndex >= text.length) {
      if (currentIndex >= text.length && !isComplete) {
        setIsComplete(true);
        onComplete?.();
      }
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, hasStarted, isComplete, onComplete]);

  return { displayText, isComplete };
}

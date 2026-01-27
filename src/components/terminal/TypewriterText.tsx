import { useTypewriter } from "@/hooks/useTypewriter";

import { Cursor } from "./Cursor";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
  onComplete?: () => void;
  className?: string;
}

export function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  showCursor = true,
  onComplete,
  className = "",
}: TypewriterTextProps) {
  const { displayText, isComplete } = useTypewriter({
    text,
    speed,
    delay,
    onComplete,
  });

  return (
    <span className={className}>
      {displayText}
      {showCursor && (!isComplete || !onComplete) && <Cursor />}
    </span>
  );
}

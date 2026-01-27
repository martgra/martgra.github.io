import { cn } from "@/lib/utils";

interface CursorProps {
  className?: string;
}

export function Cursor({ className }: CursorProps) {
  return (
    <span
      className={cn("inline-block w-2 h-5 bg-terminal-prompt ml-1 cursor-blink", className)}
      aria-hidden="true"
    />
  );
}

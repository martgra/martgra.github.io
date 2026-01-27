import { cn } from "@/lib/utils";

interface TerminalPromptProps {
  command: string;
  className?: string;
  onClick?: () => void;
  isClickable?: boolean;
}

export function TerminalPrompt({
  command,
  className,
  onClick,
  isClickable = false,
}: TerminalPromptProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 text-green-500 font-mono mb-6",
        isClickable && "cursor-pointer hover:text-green-400 transition-colors",
        className
      )}
      onClick={onClick}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                onClick?.();
              }
            }
          : undefined
      }
    >
      <span className="text-blue-400">➜</span>
      <span className="text-purple-400">~</span>
      <span className="font-bold">{command}</span>
    </div>
  );
}

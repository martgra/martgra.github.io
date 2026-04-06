import { useEffect, useRef } from "react";

export function useKeySequence(sequence: string[], onMatch: () => void) {
  const bufferRef = useRef<string[]>([]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      bufferRef.current.push(e.key);
      if (bufferRef.current.length > sequence.length) {
        bufferRef.current.shift();
      }
      if (
        bufferRef.current.length === sequence.length &&
        bufferRef.current.every((k, i) => k === sequence[i])
      ) {
        bufferRef.current = [];
        onMatch();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [sequence, onMatch]);
}

export function useTextSequence(text: string, onMatch: () => void) {
  const bufferRef = useRef("");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key.length !== 1) return;
      bufferRef.current += e.key.toLowerCase();
      if (bufferRef.current.length > text.length) {
        bufferRef.current = bufferRef.current.slice(-text.length);
      }
      if (bufferRef.current === text.toLowerCase()) {
        bufferRef.current = "";
        onMatch();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [text, onMatch]);
}

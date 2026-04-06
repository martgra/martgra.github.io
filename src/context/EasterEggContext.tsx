import { createContext, type ReactNode, useCallback, useContext, useState } from "react";

interface EasterEggContextValue {
  toast: string | null;
  showToast: (msg: string, duration?: number) => void;
  clearToast: () => void;
  toastDuration: number;
  triggerMatrix: () => void;
  matrixActive: boolean;
  setMatrixActive: (v: boolean) => void;
  triggerDestroy: () => void;
  destroyActive: boolean;
  setDestroyActive: (v: boolean) => void;
}

const EasterEggContext = createContext<EasterEggContextValue | null>(null);

export function EasterEggProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<string | null>(null);
  const [toastDuration, setToastDuration] = useState(3000);
  const [matrixActive, setMatrixActive] = useState(false);
  const [destroyActive, setDestroyActive] = useState(false);

  const showToast = useCallback((msg: string, duration = 3000) => {
    setToastDuration(duration);
    setToast(msg);
  }, []);

  const clearToast = useCallback(() => setToast(null), []);

  const triggerMatrix = useCallback(() => {
    if (!matrixActive) setMatrixActive(true);
  }, [matrixActive]);

  const triggerDestroy = useCallback(() => {
    if (!destroyActive) setDestroyActive(true);
  }, [destroyActive]);

  return (
    <EasterEggContext.Provider
      value={{
        toast,
        showToast,
        clearToast,
        toastDuration,
        triggerMatrix,
        matrixActive,
        setMatrixActive,
        triggerDestroy,
        destroyActive,
        setDestroyActive,
      }}
    >
      {children}
    </EasterEggContext.Provider>
  );
}

export function useEasterEgg() {
  const ctx = useContext(EasterEggContext);
  if (!ctx) throw new Error("useEasterEgg must be used within EasterEggProvider");
  return ctx;
}

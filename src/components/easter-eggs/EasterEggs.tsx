import { useCallback } from "react";

import { useEasterEgg } from "@/context/EasterEggContext";
import { useKeySequence, useTextSequence } from "@/hooks/useKeySequence";

import { EasterEggToast } from "./EasterEggToast";
import { MatrixRain } from "./MatrixRain";
import { PageDestroy } from "./PageDestroy";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function EasterEggs() {
  const {
    toast,
    clearToast,
    toastDuration,
    showToast,
    matrixActive,
    setMatrixActive,
    destroyActive,
    setDestroyActive,
    triggerMatrix,
  } = useEasterEgg();

  // Konami code → Matrix rain
  useKeySequence(
    KONAMI,
    useCallback(() => triggerMatrix(), [triggerMatrix])
  );

  // Type "sudo" → permission denied
  useTextSequence(
    "sudo",
    useCallback(
      () => showToast("martin is not in the sudoers file. This incident will be reported."),
      [showToast]
    )
  );

  // Type "cześć" (typed as czesc on any keyboard)
  useTextSequence(
    "czesc",
    useCallback(() => showToast("Cześć! Miło Cię poznać! 🇵🇱"), [showToast])
  );

  return (
    <>
      <MatrixRain
        active={matrixActive}
        onDone={useCallback(() => setMatrixActive(false), [setMatrixActive])}
      />
      <PageDestroy
        active={destroyActive}
        onDone={useCallback(() => setDestroyActive(false), [setDestroyActive])}
      />
      <EasterEggToast message={toast} onDone={clearToast} duration={toastDuration} />
    </>
  );
}

import "./styles/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Console easter egg
console.log(
  "%c👋 Looking under the hood? I like you already.",
  "color: #22c55e; font-size: 16px; font-weight: bold; font-family: monospace;"
);
console.log(
  "%cIf you're curious enough to open DevTools, you might enjoy typing 'sudo' or the Konami code on the page.\n\nOr just say hi → martin@gran.dev",
  "color: #9ca3af; font-size: 12px; font-family: monospace;"
);

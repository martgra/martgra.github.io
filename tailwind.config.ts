import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fira Code"', "monospace"],
      },
      colors: {
        terminal: {
          bg: "#0c0c0c",
          text: "#cccccc",
          prompt: "#00ff00",
          error: "#ff6b6b",
          warning: "#ffd93d",
          info: "#6bcbff",
          accent: "#00ff00",
          border: "#333333",
          hover: "#1a1a1a",
        },
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        typewriter: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        typewriter: "typewriter 2s steps(40) 1s forwards",
        fadeIn: "fadeIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;

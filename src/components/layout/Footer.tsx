import { useEffect, useRef, useState } from "react";

import { usePortfolio } from "@/context/LanguageContext";

export function Footer() {
  const portfolio = usePortfolio();
  const currentYear = new Date().getFullYear();
  const [hovered, setHovered] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (hovered && !revealed) {
      timerRef.current = setTimeout(() => setRevealed(true), 3000);
    }
    return () => clearTimeout(timerRef.current);
  }, [hovered, revealed]);

  return (
    <footer className="border-t border-gray-800 py-6 text-center text-xs text-gray-600 mt-20">
      <p>{portfolio.footer.exitMessage}</p>
      <p
        className="mt-2 transition-colors duration-500 cursor-default"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {revealed ? (
          <span className="text-green-400/60">
            Built with mass amounts of mass-produced coffee and mass-produced intelligence.
          </span>
        ) : (
          <>
            &copy; {currentYear} {portfolio.footer.copyrightName}. All rights reserved.
          </>
        )}
      </p>
    </footer>
  );
}

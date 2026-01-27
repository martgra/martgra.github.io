import { portfolio } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 py-6 text-center text-xs text-gray-600 mt-20">
      <p>{portfolio.footer.exitMessage}</p>
      <p className="mt-2">
        &copy; {currentYear} {portfolio.footer.copyrightName}. All rights reserved.
      </p>
    </footer>
  );
}

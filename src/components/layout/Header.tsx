import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="mb-12 border-b border-gray-800 pb-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="text-green-500 font-bold text-lg">
          <span className="text-blue-400">visitor@portfolio</span>:
          <span className="text-purple-400">~</span>${" "}
          <span className="text-gray-100">./welcome.sh</span>
        </div>
        <nav className="flex gap-6 text-sm">
          {portfolio.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "hover:text-green-400 hover:underline decoration-green-500/50",
                "underline-offset-4 transition-colors"
              )}
            >
              [ {item.label} ]
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

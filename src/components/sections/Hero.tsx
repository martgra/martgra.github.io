import { Section } from "@/components/layout/Section";
import { TypewriterText } from "@/components/terminal/TypewriterText";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  return (
    <Section id="hero" className="min-h-[200px]">
      <div className="text-green-400 mb-2 text-sm opacity-70">// Initializing interface...</div>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-100 mb-6 leading-tight">
        <TypewriterText text={portfolio.meta.tagline} speed={100} />
      </h1>
      <p className="text-gray-400 max-w-2xl leading-relaxed border-l-2 border-gray-800 pl-4 italic">
        &gt; {portfolio.meta.description}
      </p>
    </Section>
  );
}

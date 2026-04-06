import { useState } from "react";

import { EasterEggs } from "@/components/easter-eggs/EasterEggs";
import { BackToTop } from "@/components/layout/BackToTop";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { PrintCV } from "@/components/print/PrintCV";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { EasterEggProvider } from "@/context/EasterEggContext";
import { LanguageProvider } from "@/context/LanguageContext";

function isSyttendeMai() {
  const now = new Date();
  return now.getMonth() === 4 && now.getDate() === 17; // May 17
}

function App() {
  const [heroComplete, setHeroComplete] = useState(false);
  const mai17 = isSyttendeMai();

  return (
    <LanguageProvider>
      <EasterEggProvider>
        {/* Terminal UI — hidden on print */}
        <div
          className={`screen-only ${
            mai17
              ? "min-h-screen bg-blue-950 text-gray-300 antialiased selection:bg-red-900 selection:text-white mai17-mode"
              : "min-h-screen bg-gray-950 text-gray-300 antialiased selection:bg-green-900 selection:text-green-400"
          }`}
        >
          {mai17 && (
            <div className="fixed top-0 left-0 right-0 z-50 bg-red-700 text-white text-center text-xs py-1 font-mono">
              🇳🇴 Gratulerer med dagen! Hipp hipp hurra! 🇳🇴
            </div>
          )}
          <div
            className={`min-h-full flex flex-col max-w-4xl mx-auto p-4 md:p-8 lg:p-12 ${mai17 ? "pt-10" : ""}`}
          >
            <Header />
            <main className="flex-1 flex flex-col gap-16">
              <Hero onComplete={() => setHeroComplete(true)} />
              <div className={heroComplete ? "" : "hidden"}>
                <div className="flex flex-col gap-16">
                  <About />
                  <Skills />
                  <Experience />
                  <Projects />
                  <Education />
                  <Contact />
                </div>
              </div>
            </main>
            {heroComplete && <Footer />}
          </div>
        </div>

        {/* Clean CV — only visible on print */}
        <PrintCV />

        <ScrollProgress />
        <BackToTop />
        <EasterEggs />
      </EasterEggProvider>
    </LanguageProvider>
  );
}

export default App;

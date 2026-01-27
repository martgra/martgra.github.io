import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-300 antialiased selection:bg-green-900 selection:text-green-400">
      <div className="min-h-full flex flex-col max-w-4xl mx-auto p-4 md:p-8 lg:p-12">
        <Header />
        <main className="flex-1 flex flex-col gap-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

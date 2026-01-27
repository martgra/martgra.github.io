import { Terminal } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { TerminalPrompt } from "@/components/terminal/TerminalPrompt";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { portfolio } from "@/data/portfolio";

export function Contact() {
  return (
    <Section id="contact" className="scroll-mt-20 mb-20">
      <TerminalPrompt command={portfolio.contact.command} />

      <div className="bg-black border border-gray-800 p-6 rounded-lg shadow-lg">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs text-gray-500 uppercase tracking-wider">--name</label>
              <Input
                type="text"
                placeholder="John Doe"
                className="w-full bg-gray-900 border-gray-700 text-gray-200 placeholder-gray-600 font-mono text-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-500 uppercase tracking-wider">--email</label>
              <Input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-gray-900 border-gray-700 text-gray-200 placeholder-gray-600 font-mono text-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs text-gray-500 uppercase tracking-wider">--message</label>
            <Textarea
              rows={4}
              placeholder="Enter your message here..."
              className="w-full bg-gray-900 border-gray-700 text-gray-200 placeholder-gray-600 font-mono text-sm focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <Button
            type="button"
            className="bg-green-600 hover:bg-green-500 text-black font-bold w-full md:w-auto flex items-center justify-center gap-2"
          >
            <span>EXECUTE</span>
            <Terminal className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </Section>
  );
}

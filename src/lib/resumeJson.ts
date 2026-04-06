import type { Portfolio } from "@/types/portfolio";

export function toResumeJson(portfolio: Portfolio, language: "en" | "no") {
  return {
    $schema: "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
    basics: {
      name: portfolio.meta.name,
      label: portfolio.meta.tagline,
      email: portfolio.contact.email,
      url: "https://gran.dev",
      summary: portfolio.about.paragraphs[0],
      location: { countryCode: "NO", region: "Norway" },
      profiles: [
        portfolio.contact.github && {
          network: "GitHub",
          username: "martgra",
          url: portfolio.contact.github,
        },
        portfolio.contact.linkedin && {
          network: "LinkedIn",
          username: "martin-gran",
          url: portfolio.contact.linkedin,
        },
      ].filter(Boolean),
    },
    work: portfolio.experience.items.map((entry) => ({
      name: entry.internal ? entry.company : `${entry.company} (via Accenture)`,
      position: `${entry.role} — ${entry.project}`,
      startDate: parseStartDate(entry.period),
      ...(entry.period.includes("present") || entry.period.includes("d.d.")
        ? {}
        : { endDate: parseEndDate(entry.period) }),
      summary: entry.description,
      highlights: entry.highlights,
    })),
    education: portfolio.education.items.map((entry) => ({
      institution: entry.institution,
      area: entry.degree.replace(/^Bachelor,?\s*/i, ""),
      studyType: "Bachelor",
      startDate: entry.years.split("–")[0]?.trim(),
      endDate: entry.years.split("–")[1]?.trim(),
    })),
    skills: portfolio.skills.categories.map((cat) => ({
      name: cat.title,
      keywords: cat.items.map((item) => item.label),
    })),
    languages: portfolio.about.languages.map((l) => ({
      language: l.language,
      fluency: l.level,
    })),
    projects: portfolio.projects.items.map((p) => ({
      name: p.name,
      description: p.description,
      url: p.github || p.url,
      keywords: p.tags.map((t) => t.label),
    })),
    meta: {
      canonical: "https://gran.dev/resume.json",
      version: "v1.0.0",
      language,
      lastModified: new Date().toISOString().split("T")[0],
    },
  };
}

function parseStartDate(period: string): string {
  const match = period.match(/(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{4})/i);
  if (match) {
    const monthMap: Record<string, string> = {
      jan: "01",
      feb: "02",
      mar: "03",
      apr: "04",
      may: "05",
      jun: "06",
      jul: "07",
      aug: "08",
      sep: "09",
      oct: "10",
      nov: "11",
      dec: "12",
    };
    const mon = period
      .match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i)?.[1]
      ?.toLowerCase();
    return `${match[1]}-${mon ? monthMap[mon] : "01"}`;
  }
  const yearMatch = period.match(/(\d{4})/);
  return yearMatch?.[1] ?? period;
}

function parseEndDate(period: string): string {
  const parts = period.split("–");
  if (parts.length < 2) return "";
  return parseStartDate(parts[1].trim());
}

export function downloadResumeJson(portfolio: Portfolio, language: "en" | "no") {
  const json = toResumeJson(portfolio, language);
  const blob = new Blob([JSON.stringify(json, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `martin-gran-resume-${language}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

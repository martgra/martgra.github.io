import { usePortfolio } from "@/context/LanguageContext";
import { useLanguage } from "@/context/LanguageContext";

export function PrintCV() {
  const portfolio = usePortfolio();
  const { language } = useLanguage();
  const t =
    language === "no"
      ? {
          profile: "Profil",
          skills: "Kompetanse",
          experience: "Prosjekterfaring",
          internalExp: "Intern erfaring — Accenture",
          openSource: "Open source",
          education: "Utdanning",
          contact: "Kontakt",
          technologies: "Teknologier",
        }
      : {
          profile: "Profile",
          skills: "Skills",
          experience: "Project Experience",
          internalExp: "Internal Experience — Accenture",
          openSource: "Open Source",
          education: "Education",
          contact: "Contact",
          technologies: "Technologies",
        };

  const clientExp = portfolio.experience.items.filter((e) => !e.internal);
  const internalExp = portfolio.experience.items.filter((e) => e.internal);

  return (
    <div className="print-cv">
      {/* Header */}
      <header className="print-cv-header">
        <h1>{portfolio.meta.name}</h1>
        <p className="print-cv-title">{portfolio.meta.tagline}</p>
        <div className="print-cv-contact-row">
          {portfolio.contact.email && <span>{portfolio.contact.email}</span>}
          {portfolio.contact.github && (
            <span>{portfolio.contact.github.replace("https://", "")}</span>
          )}
          {portfolio.contact.linkedin && (
            <span>{portfolio.contact.linkedin.replace("https://www.", "")}</span>
          )}
        </div>
        <div className="print-cv-languages">
          {portfolio.about.languages.map((l) => (
            <span key={l.language}>
              {l.language} ({l.level})
            </span>
          ))}
        </div>
      </header>

      {/* Profile */}
      <section>
        <h2>{t.profile}</h2>
        {portfolio.about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      {/* Skills */}
      <section>
        <h2>{t.skills}</h2>
        <div className="print-cv-skills">
          {portfolio.skills.categories.map((cat) => (
            <div key={cat.title} className="print-cv-skill-group">
              <strong>{cat.title}:</strong> {cat.items.map((item) => item.label).join(" · ")}
            </div>
          ))}
        </div>
      </section>

      {/* Client Experience */}
      <section>
        <h2>{t.experience}</h2>
        <p className="print-cv-employer">
          <strong>{portfolio.experience.employer.name}</strong> —{" "}
          {portfolio.experience.employer.period}. {portfolio.experience.employer.description}
        </p>
        {clientExp.map((entry) => (
          <div key={`${entry.company}-${entry.project}`} className="print-cv-entry">
            <div className="print-cv-entry-header">
              <div>
                <strong>
                  {entry.company} — {entry.project}
                </strong>
                <br />
                <em>{entry.role}</em>
              </div>
              <span className="print-cv-period">{entry.period}</span>
            </div>
            <p className="print-cv-desc">{entry.description}</p>
            <ul>
              {entry.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <p className="print-cv-tech">
              <strong>{t.technologies}:</strong> {entry.technologies.join(", ")}
            </p>
          </div>
        ))}
      </section>

      {/* Internal Experience */}
      {internalExp.length > 0 && (
        <section>
          <h2>{t.internalExp}</h2>
          {internalExp.map((entry) => (
            <div key={`${entry.company}-${entry.project}`} className="print-cv-entry">
              <div className="print-cv-entry-header">
                <div>
                  <strong>{entry.project}</strong>
                  <br />
                  <em>{entry.role}</em>
                </div>
                <span className="print-cv-period">{entry.period}</span>
              </div>
              <p className="print-cv-desc">{entry.description}</p>
              <ul>
                {entry.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <p className="print-cv-tech">
                <strong>{t.technologies}:</strong> {entry.technologies.join(", ")}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Open Source */}
      <section>
        <h2>{t.openSource}</h2>
        {portfolio.projects.items.map((project) => (
          <div key={project.name} className="print-cv-project">
            <strong>{project.name}</strong>
            {project.github && (
              <span className="print-cv-url"> — {project.github.replace("https://", "")}</span>
            )}
            <br />
            <span>{project.description}</span>
          </div>
        ))}
      </section>

      {/* Education */}
      <section>
        <h2>{t.education}</h2>
        {portfolio.education.items.map((entry) => (
          <div key={entry.degree} className="print-cv-edu">
            <div className="print-cv-entry-header">
              <div>
                <strong>{entry.degree}</strong> — {entry.institution}
              </div>
              <span className="print-cv-period">{entry.years}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

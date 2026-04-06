import type { Portfolio } from "@/types/portfolio";

export const portfolioNo: Portfolio = {
  meta: {
    name: "Martin Gran",
    tagline: "AI/ML Tech Lead",
    description:
      "Tech lead og AI/ML-spesialist — tar komplekse KI- og maskinlæringsløsninger fra idé og prototype til produksjon. Basert i Norge, jobber i Accenture.",
    now: "Bygger for tiden produksjonsklare RAG- og multiagent-systemer for norsk offentlig sektor, og utforsker agentbaserte evalueringsmønstre.",
  },

  header: {
    prompt: {
      user: "guest",
      host: "gran.dev",
      directory: "~",
      command: "./welcome.sh",
    },
  },

  hero: {
    comment: "// Initialiserer grensesnitt...",
  },

  about: {
    command: "whoami",
    paragraphs: [
      "Jeg er tech lead og AI/ML-spesialist. Jeg tar komplekse KI- og maskinlæringsløsninger fra idé og prototype til produksjon og bred bruk i organisasjonen. Jeg har ledet utvikling og produksjonssetting av noen av de tidlige ML- og generative KI-løsningene i norsk offentlig sektor — inkludert en av de første maskinlæringsløsningene i Skatteetaten og en produksjonssatt RAG-løsning i Statens vegvesen som brukes daglig av hundrevis av fagbrukere og er under utrulling til eksterne entreprenører.",
      "Jeg jobber i skjæringspunktet mellom teknisk dybde, arkitekturvalg og dokumenterbar forretningsverdi. Jeg leder tverrfaglige team, tar tekniske nøkkelbeslutninger og bygger robuste, produksjonsklare løsninger innen generativ KI, RAG, agentbaserte systemer, datapipelines og fullstack-utvikling med Python/FastAPI og Next.js.",
      "Jeg er del av ledergruppen i AI & Data-avdelingen i Accenture Norge, aktiv i Nordic Center of Excellence for Generativ AI, og initiativtaker til AI Community i Accenture på norsk og nordisk nivå. Min bakgrunn i kognitiv psykologi gir meg et tydelig perspektiv på brukerforståelse, tillit og ansvarlig KI — noe som preger alt fra løsningsdesign til opplæring og strategisk rådgivning.",
    ],
    languages: [
      { language: "Norsk", level: "Flytende" },
      { language: "Engelsk", level: "Flytende" },
      { language: "Polsk", level: "Muntlig" },
    ],
  },

  skills: {
    command: "curl localhost:8080/skills",
    categories: [
      {
        title: "Generativ KI & RAG",
        color: "green",
        items: [
          {
            label: "Produksjonsklare RAG-systemer (chunking, hybridsøk, reranking)",
            usedIn: ["KIBOK", "RAG-akselerator"],
          },
          { label: "Multiagent-arkitekturer (Pydantic AI, LlamaIndex)", usedIn: ["KIBOK"] },
          {
            label: "Azure OpenAI / LLM-integrasjon og streaming",
            usedIn: ["KIBOK", "KI-rådgivning & innovasjonslab", "RAG-akselerator"],
          },
          { label: "LLM-basert databeriking og query expansion", usedIn: ["KIBOK"] },
          {
            label: "LLM-as-a-judge evalueringsrammeverk",
            usedIn: ["KI-rådgivning & innovasjonslab"],
          },
          {
            label: "Prompt engineering og strukturerte outputs",
            usedIn: ["KIBOK", "KI-rådgivning & innovasjonslab"],
          },
          { label: "Risikovurdering mot EU AI Act", usedIn: ["KIBOK"] },
        ],
      },
      {
        title: "Maskinlæring",
        color: "purple",
        items: [
          {
            label: "Ende-til-ende ML-pipelines (trening → produksjon)",
            usedIn: ["Synetopia", "TFX-referansearkitektur"],
          },
          {
            label: "MLFlow / eksperimentsporing og modellversjonering",
            usedIn: ["KIBOK", "Synetopia"],
          },
          {
            label: "Embeddings og vektorsøk (Elasticsearch, Qdrant)",
            usedIn: ["KIBOK", "RAG-akselerator"],
          },
          { label: "RNN-basert sekvensgenerering", usedIn: ["Synetopia"] },
          {
            label: "TensorFlow TFX / Kubeflow / Apache Airflow",
            usedIn: ["TFX-referansearkitektur"],
          },
          { label: "GPU-infrastruktur (on-prem og sky)", usedIn: ["Synetopia"] },
        ],
      },
      {
        title: "Fullstack-utvikling",
        color: "blue",
        items: [
          { label: "Python / FastAPI / Flask", usedIn: ["KIBOK", "Synetopia", "RAG-akselerator"] },
          { label: "Next.js / React / TypeScript", usedIn: ["KIBOK", "RAG-akselerator"] },
          {
            label: "Elasticsearch (BM25 + vektor, egenutviklet RRF)",
            usedIn: ["KIBOK", "RAG-akselerator"],
          },
          { label: "PostgreSQL / Cosmos DB / GraphQL", usedIn: ["Feltutvikling", "Synetopia"] },
          { label: "Docker / Kubernetes", usedIn: ["KIBOK", "Synetopia"] },
          { label: "CI/CD og DevOps", usedIn: ["Feltutvikling", "KIBOK"] },
        ],
      },
      {
        title: "Data & plattform",
        color: "yellow",
        items: [
          {
            label: "Dokumentprosesseringspipelines (PDF/HTML → chunks → embeddings)",
            usedIn: ["KIBOK", "RAG-akselerator"],
          },
          {
            label: "ETL-pipelines (PySpark, Databricks, Azure Data Factory)",
            usedIn: ["Data Factory"],
          },
          {
            label: "Datakvalitet, lineage og metadatakataloger",
            usedIn: ["Data Factory", "Feltutvikling"],
          },
          {
            label: "Azure AI Foundry / Azure OpenAI-plattform",
            usedIn: ["KI-rådgivning & innovasjonslab"],
          },
          {
            label: "Benchmarking og teknisk evaluering av KI-løsninger",
            usedIn: ["KI-rådgivning & innovasjonslab"],
          },
        ],
      },
    ],
  },

  experience: {
    command: "cat accenture/experience.log",
    employer: {
      name: "Accenture",
      period: "2017 – d.d.",
      description:
        "All prosjekterfaring under er gjennom Accenture, hvor jeg er del av ledergruppen i AI & Data i Norge.",
    },
    items: [
      {
        company: "Statens vegvesen",
        project: "KIBOK",
        role: "Tech Lead og utvikler",
        period: "Feb 2024 – d.d.",
        description:
          "Generativ KI-løsning for effektiv informasjonshenting fra Vegvesenets vegnormaler og håndbøker. Løsningen bruker RAG til å gi presise, kildebaserte svar, og brukes daglig av hundrevis av fagbrukere — nå under utrulling til eksterne entreprenører. Prosjektet har vært en direkte katalysator for flere nye KI-initiativ i organisasjonen.",
        highlights: [
          "Tok de sentrale tekniske beslutningene: valg av søkemotor, arkitekturmønster, LLM-strategi og frontend-rammeverk. Fungerte som teknisk beslutningstaker i et tverrfaglig team på 6+ personer.",
          "Designet og bygde en flerstegspipeline for datainntak med både regelbasert og LLM-basert beriking — inkludert kontekstuell beriking av chunks, transformering av tabeller og figurer til søkbare representasjoner, og kvalitetssikring.",
          "Implementerte hybridsøk i Elasticsearch (BM25 + vektorsøk) med egenutviklet RRF-fusjon, samt en agentbasert søkearkitektur med flere indekser, LLM-basert query expansion og reranking.",
          "Utviklet fullstack-applikasjonen med FastAPI-backend og Next.js-frontend, inkludert multi-agent streaming-arkitektur med Pydantic AI.",
          "Etablerte evalueringsrammeverk med både kvantitative og kvalitative mål — inkludert benchmarking mot en ground truth-liste utarbeidet i samarbeid med fageksperter.",
          "Bygde feedback-system som kobler brukervurderinger til spørsmål og relevante deler av korpuset, og gir beslutningstakere innsikt i bruksmønstre.",
          "Deltok i risikovurdering opp mot EU AI Act (KI-forordningen) i samarbeid med jurister.",
        ],
        technologies: [
          "Python",
          "FastAPI",
          "Pydantic AI",
          "Next.js",
          "React",
          "Elasticsearch",
          "Azure OpenAI",
          "MLFlow",
          "LlamaIndex",
          "Docker",
          "Vercel AI SDK",
        ],
      },
      {
        company: "Statens vegvesen",
        project: "KI-rådgivning & innovasjonslab",
        role: "Teknisk rådgiver",
        period: "Jan 2025 – d.d.",
        description:
          "Todelt rådgivningsoppdrag. Dels fast medlem av innovasjonslabben som utforsker nye bruksområder for KI gjennom proof of concepts og teknisk evaluering. Dels separat rådgivningsoppdrag for å kvalifisere og evaluere nye use cases for generativ KI på tvers av organisasjonen.",
        highlights: [
          "Designet og gjennomførte systematiske benchmarks mellom KIBOK og hyllevareløsninger (NotebookLM, Microsoft Copilot) — skrev evalueringsskript, definerte metrikker og brukte LLM-as-a-judge-arkitektur for skalerbar vurdering.",
          "Gjennomførte teknisk evaluering av LightRAG opp mot Microsoft Copilot — inkludert oppsett i infrastruktur, risikovurdering og utforming av evalueringsmetrikker.",
          "Utførte teknisk pre-kvalifisering av nye KI-use cases på tvers av organisasjonen — vurderte gjennomførbarhet, estimert innsats, risiko, datatilgang og arkitekturkrav.",
          "Gjennomførte teknisk vurdering av migrering av KIBOK til ny KI-plattform basert på Azure AI Foundry — kartla gap, avhengigheter og anbefalte migreringssti.",
        ],
        technologies: ["Python", "Azure OpenAI", "Elasticsearch", "LightRAG"],
      },
      {
        company: "Norsk olje- og gasselskap",
        project: "Feltutvikling (FDP)",
        role: "Tech Lead",
        period: "Sep 2022 – Feb 2024",
        description:
          "Løsning for oversikt og sporbarhet i beslutningsprosesser knyttet til feltutvikling innen olje og gass. Beslutningstagere trengte å se status ved hver beslutningsport (godkjenne, avslå eller sette på vent), med fullstendig historikk over tidligere beslutninger og tilhørende data for hvilende prosjekter. Løsningen er fortsatt i bruk og anerkjent som et suksessprodukt internt.",
        highlights: [
          "Tech lead for et autonomt scrum-team engasjert direkte for å akselerere utviklingen. Tok tekniske beslutninger sammen med produkteier.",
          "Designet datamodell for data lineage basert på immutable versjonering — fanget tilstanden ved hver beslutningsport slik at beslutningsgrunnlaget var sporbart og reproduserbart over tid.",
          "Itererte datamodellen gjennom tett dialog med brukere — startet i Gremlin/Cosmos DB (grafdatabase), migrerte til PostgreSQL med ETL da ytelse og spørringskompleksitet tilsa relasjonell modell.",
          "Ledet utviklingen av GraphQL API (med Hasura) og skreddersydd frontend i TypeScript/Angular for visualisering av beslutningsgrunnlag og lineage.",
          "Standardiserte CI/CD-prosesser, innførte SonarQube for kodekvalitet og ledet opplæring av mindre erfarne utviklere.",
        ],
        technologies: [
          "Python",
          "TypeScript",
          "Angular",
          "GraphQL",
          "Hasura",
          "Gremlin/Cosmos DB",
          "PostgreSQL",
          "Azure",
          "CI/CD",
        ],
      },
      {
        company: "Norsk olje- og gasselskap",
        project: "Data Factory",
        role: "Tech Lead",
        period: "Apr 2022 – Sep 2022",
        description:
          "Strategisk initiativ for å industrialisere bygging av dataløp mellom ulike kilder og dataplattformer. Bygde en moderne Azure-basert arkitektur for innsamling, kvalitetssikring, transformering og tilgjengeliggjøring av data i et data mesh. Datapipelinene og metadatakatalogen er fortsatt i produksjon.",
        highlights: [
          "Ledet utvikling av datapipelines for inntak og prosessering av subsurface-data — integrerte Azure Data Lake, Blob Storage og Data Factory til en sammenhengende prosesseringskjede.",
          "Designet og bygde metadatakatalog med REST API og database — ga fagteam ett sted å søke, forstå og vurdere kvaliteten på tilgjengelige datasett.",
          "Etablerte prinsipper og valideringsregler for datakvalitet i alle ledd, med automatisk sjekk mot kildesystemer.",
        ],
        technologies: [
          "Python",
          "PySpark",
          "Databricks",
          "Azure Data Factory",
          "Azure Data Lake",
          "Azure Blob Storage",
          "REST API",
        ],
      },
      {
        company: "Skatteetaten",
        project: "Modernisert folkeregister / Synetopia",
        role: "ML-ingeniør, utvikler og scrummaster",
        period: "Mar 2019 – Apr 2022",
        description:
          "Nybrytningsarbeid innen maskinlæring i offentlig sektor. Utviklet og produksjonssatte en av de første maskinlæringsløsningene i Skatteetaten — en RNN-basert modell for å generere syntetiske livshendelsessekvenser (fødsler, ekteskap, dødsfall, flyttinger) fra Folkeregisteret. Løsningen ble en del av Synetopia, som har vokst til å bli en grunnpilar i Test-Norge — brukt av offentlige etater og private aktører på tvers av landet.",
        highlights: [
          "Bidro til design, trening og produksjonssetting av RNN-modellen i et lite team (2–3 utviklere). Eide hele livsløpet fra eksperimentering til produksjon.",
          "Etablerte ende-til-ende ML-pipeline: preprocessing, modelltrening, evaluering, inferens og logging/katalogisering av metadata. Introduserte MLFlow i Skatteetaten.",
          "Bygde opp ML-infrastruktur fra bunnen — drev oppsett av dedikerte GPU-er for modelltrening i samarbeid med infrastrukturteamet og tilpasset eksisterende on-prem-miljø for ML-arbeidsflyter.",
          "Utviklet REST API-er (Python/Flask) for sikker tilgang til genererte testdata.",
          "Transformerte aggregerte data fra SQL-database til grafrepresentasjon med Python NetworkX og PostgreSQL — muliggjorde automatisert generering av representative testdatapopulasjoner.",
          "Sikret GDPR-etterlevelse gjennom tett samarbeid med produkteiere om krav til dataanonymisering og dataminimering.",
        ],
        technologies: [
          "Python",
          "Flask",
          "MLFlow",
          "MinIO",
          "NetworkX",
          "PostgreSQL",
          "Docker",
          "Kubernetes",
          "GPU-infrastruktur (on-prem)",
        ],
      },
      {
        company: "Skatteetaten",
        project: "Automatisert testing / Altinn-integrasjon",
        role: "Testutvikler",
        period: "2017 – 2022",
        description:
          "Utviklet, vedlikeholdt og kjørte automatiserte integrasjonstester for Skatteetatens integrasjon med Altinn-plattformen.",
        highlights: [
          "Bygde og vedlikeholdt automatiserte integrasjonstestsuiter på tvers av flere teknologistacker.",
        ],
        technologies: ["SoapUI", "Java", "Cucumber", "Python"],
      },
      {
        company: "Accenture",
        project: "AI SME & arkitekturrådgivning",
        role: "AI Subject Matter Expert",
        period: "2019 – d.d.",
        internal: true,
        description:
          "Tverrgående AI SME-rolle som spenner fra strategisk salgsstøtte til hands-on arkitekturrådgivning for pågående prosjekter, og kompetansebygging på tvers av Accenture Norge og Norden.",
        highlights: [
          "Shaper foreslåtte team og prosjekter i salgsprosesser, fungerer som teknisk SME for arkitektur og løsningsdesign mot flere kunder.",
          "Fungerer som arkitekturrådgiver for andre prosjektteam — bistår med teknisk arkitektur, teknologivalg og løsningsdesign.",
          "Bidratt til å definere Accentures tilnærming til generativ KI, inkludert standarder, referansearkitekturer og teknologivalg på tvers av organisasjonen.",
          "Veileder og coacher andre konsulenter i hvordan de kan identifisere og drive frem nye AI-oppdrag hos sine kunder.",
        ],
        technologies: ["Azure OpenAI", "Arkitektur", "Løsningsdesign", "Salgsstøtte"],
      },
      {
        company: "Accenture",
        project: "RAG-akselerator",
        role: "Skaper og hovedutvikler",
        period: "2023 – 2024",
        internal: true,
        description:
          "Eget initiativ. Designet og utviklet en modulær og konfigurerbar mal for rask implementering av RAG-løsninger. Akseleratoren ble direkte grunnlaget for KIBOK-løsningen hos Statens vegvesen, og har vært utgangspunkt for 4+ kundeløsninger i Norden — innen forsikring, offentlig forvaltning og industri.",
        highlights: [
          "Bygde en komplett, sikker og produksjonsklar RAG-applikasjon med FastAPI-backend, Azure OpenAI-integrasjon og Next.js-frontend.",
          "Designet støtte for flere søkemotorer (Elasticsearch, Qdrant, Azure AI Search) som utbyttbare backends.",
          "Direkte gjenbrukt som teknisk fundament for KIBOK og 4+ nordiske kundeoppdrag.",
        ],
        technologies: [
          "FastAPI",
          "Azure OpenAI",
          "Elasticsearch",
          "Qdrant",
          "Azure AI Search",
          "Next.js",
          "Python",
          "Docker",
        ],
      },
      {
        company: "Accenture",
        project: "E-postklassifisering med LLM",
        role: "Produkteier",
        period: "2023",
        internal: true,
        description:
          "Ledet utvikling av en løsning som klassifiserte og oppsummerte innkommende e-poster ved hjelp av store språkmodeller. Brukt aktivt i flere kundedialoger.",
        highlights: ["Drev produktretning for LLM-basert e-postklassifisering og oppsummering."],
        technologies: ["Hugging Face Transformers", "Python", "Flask"],
      },
      {
        company: "Accenture",
        project: "TFX-referansearkitektur",
        role: "Fagekspert og produkteier",
        period: "2020 – 2021",
        internal: true,
        description:
          "Enterprise-klar referansearkitektur for ML-pipelines basert på TensorFlow Extended (TFX). Fokus på transparens, etterprøvbarhet og versjonering av modelltrening og deployment.",
        highlights: [
          "Definerte arkitektur for ende-til-ende ML-pipeline med full sporbarhet og modellversjonering.",
        ],
        technologies: ["Apache Airflow", "TensorFlow TFX", "Kubeflow", "Kubernetes"],
      },
    ],
  },

  projects: {
    command: "ls -la ./projects/",
    items: [
      {
        name: "dope",
        meta: "drwxr-xr-x  martin  4.0K  Dec 02 2025",
        description:
          "KI-drevet CLI for skanning av kode + dokumentasjon, generering av strukturerte sammendrag, og forslag/anvendelse av dokumentasjonsoppdateringer basert på kodeendringer. Bygget for OpenAI og Azure OpenAI (Python 3.13).",
        tags: [
          { label: "Python", color: "blue" },
          { label: "CLI", color: "gray" },
          { label: "OpenAI/Azure", color: "green" },
        ],
        relatedExperience: ["KI-utviklerverktøy"],
        github: "https://github.com/martgra/dope",
      },
      {
        name: "kjopekraft",
        meta: "drwxr-xr-x  martin  4.0K  Jan 07 2026",
        description:
          "Next.js-app for norske brukere som vil følge lønnsutviklingen, sammenligne med inflasjon og generere forhandlingsmateriell med SSB-data (OpenAI-nøkkel valgfritt).",
        tags: [
          { label: "Next.js", color: "purple" },
          { label: "TypeScript", color: "blue" },
          { label: "Tailwind", color: "pink" },
        ],
        relatedExperience: ["Fullstack & norske data"],
        github: "https://github.com/martgra/kjopekraft",
      },
      {
        name: "lovlig",
        meta: "drwxr-xr-x  martin  4.0K  Nov 28 2025",
        description:
          "Holder norske juridiske datasett synkronisert fra Lovdata ved å laste ned bulkdatasett, pakke ut arkiver og oppdage endringer på filnivå via hashing (xxHash).",
        tags: [
          { label: "Python", color: "blue" },
          { label: "Lovdata", color: "green" },
          { label: "Data", color: "gray" },
        ],
        relatedExperience: ["RAG-datapipelines", "KIBOK"],
        github: "https://github.com/martgra/lovlig",
      },
      {
        name: "lovdata-pipeline",
        meta: "drwxr-xr-x  martin  4.0K  Nov 28 2025",
        description:
          "En enkel pipeline for prosessering av norske juridiske dokumenter til en søkbar vektordatabase, med trinnvis flyt (parse → chunk → embed → indekser) og tilstandssporing av endrede filer.",
        tags: [
          { label: "Python", color: "blue" },
          { label: "Embeddings", color: "pink" },
          { label: "Vektorsøk", color: "purple" },
        ],
        relatedExperience: ["RAG-datapipelines", "KIBOK", "RAG-akselerator"],
        github: "https://github.com/martgra/lovdata-pipeline",
      },
      {
        name: "python_template",
        meta: "drwxr-xr-x  martin  4.0K  Jan 23 2026",
        description:
          "Meningssterk Python-prosjektmal: uv-basert avhengighetshåndtering, Ruff/Pylint/Deptry/Vulture, hemmelighetsdeteksjon, pre-commit hooks, GitHub Actions og Dev Container-støtte.",
        tags: [
          { label: "Python", color: "blue" },
          { label: "DevEx", color: "green" },
          { label: "CI", color: "gray" },
        ],
        relatedExperience: ["Utviklerverktøy og beste praksis"],
        github: "https://github.com/martgra/python_template",
      },
      {
        name: "typescript_template",
        meta: "drwxr-xr-x  martin  4.0K  Oct 28 2025",
        description:
          "TypeScript-prosjektmal med Bun, ESLint/Prettier, Knip, Husky hooks, hemmelighetsdeteksjon, GitHub Actions CI/CD og Dev Container for konsistente utviklingsmiljøer.",
        tags: [
          { label: "TypeScript", color: "blue" },
          { label: "Bun", color: "yellow" },
          { label: "Mal", color: "gray" },
        ],
        relatedExperience: ["Utviklerverktøy og beste praksis"],
        github: "https://github.com/martgra/typescript_template",
      },
    ],
  },

  education: {
    command: "cat ./education.txt",
    items: [
      {
        degree: "Bachelor, Ingeniør Datateknikk",
        institution: "USN (Universitetet i Sørøst-Norge)",
        years: "2014 – 2017",
      },
      {
        degree: "Bachelor, Kognitiv Psykologi",
        institution: "Universitetet i Oslo",
        years: "2009 – 2013",
      },
    ],
  },

  contact: {
    command: "ls -la ./socials",
    email: "martin@gran.dev",
    github: "https://github.com/martgra",
    linkedin: "https://www.linkedin.com/in/martin-gran/",
    bluesky: "https://bsky.app/profile/martin-gran.bsky.social",
  },

  footer: {
    exitMessage: "Prosessen avsluttet med returkode 0",
    copyrightName: "Terminal Portfolio",
  },

  nav: [
    { label: "om meg", href: "#about" },
    { label: "kompetanse", href: "#skills" },
    { label: "erfaring", href: "#experience" },
    { label: "prosjekter", href: "#projects" },
    { label: "utdanning", href: "#education" },
    { label: "kontakt", href: "#contact" },
  ],
};

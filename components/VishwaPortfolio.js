"use client";

import { useEffect, useState } from "react";

const nav = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Resume", "resume"],
  ["Thoughts", "thoughts"],
  ["Contact", "contact"],
];

const stats = [
  ["13+", "Years Experience"],
  ["10K+", "AI Queries / Month"],
  ["50K+", "Docs Indexed"],
  ["22%", "Accuracy Lift"],
];

const stack = [
  ["AI / GenAI", ["RAG Pipelines", "Azure OpenAI", "Semantic Kernel", "LangChain", "AutoGen", "Amazon Bedrock"]],
  [".NET / Backend", ["C#", ".NET Core", "ASP.NET Web API", "Microservices", "REST APIs", "GraphQL"]],
  ["Cloud", ["Azure AI Studio", "Azure Functions", "AKS", "App Services", "Azure DevOps", "AWS Bedrock"]],
  ["Data", ["Oracle PL/SQL", "SQL Tuning", "Azure AI Search", "FAISS", "Pinecone", "Snowflake"]],
  ["Frontend", ["React", "Angular", "Next.js", "TypeScript", "Tailwind CSS"]],
  ["Delivery", ["Docker", "Kubernetes", "CI/CD", "MLflow", "Responsible AI", "OAuth 2.0"]],
];

const experiences = [
  {
    period: "Jun 2025 - Present",
    location: "Plano, TX",
    role: "Lead Azure AI Engineer - .NET, RAG & Copilot Systems",
    company: "Toyota Motor North America",
    points: [
      "Architecting Toyota GPT-style internal copilots using Azure OpenAI, Azure AI Search, React, .NET Core, and Oracle-backed APIs.",
      "Designed RAG pipelines over 50,000+ internal documents and structured Oracle data for context-aware enterprise responses.",
      "Improved model accuracy by 22% through prompt tuning, evaluation, A/B testing, and human-in-the-loop feedback.",
    ],
  },
  {
    period: "Aug 2023 - May 2025",
    location: "Remote",
    role: "Lead Full Stack Developer - Azure AI & GenAI",
    company: "Pioneer Natural Resources",
    points: [
      "Built .NET Core APIs integrated with Oracle DB to expose enterprise data to Azure OpenAI and LangChain workflows.",
      "Designed AI-driven document search and GenAI workflows that reduced manual document review time by 50%.",
      "Cut deployment cycles from two days to under two hours using AWS CodePipeline and CodeBuild automation.",
    ],
  },
  {
    period: "Sep 2021 - Jun 2023",
    location: "India",
    role: "Lead Full Stack Engineer - .NET, React & AI Solutions",
    company: "Proficient INC.",
    points: [
      "Built ASP.NET Core Web APIs backed by Oracle DB serving 100K+ daily requests with connection pooling and batch processing.",
      "Developed RAG-based AI search features using vector embeddings, Pinecone, FAISS, and Oracle as the structured source of truth.",
      "Optimized enterprise Oracle queries and packages, improving slow-running workloads by up to 70%.",
    ],
  },
  {
    period: "2012 - 2021",
    location: "USA & India",
    role: ".NET / Oracle Engineering Leadership",
    company: "Conduent, Unisys, Polaris / Citibank",
    points: [
      "Built healthcare, finance, and reconciliation systems using .NET, Oracle PL/SQL, Angular, Docker, AKS, and enterprise messaging.",
      "Owned schema design, stored procedures, packages, triggers, migrations, query tuning, and production release support.",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Toyota GPT Enterprise Copilots",
    text: "Internal AI assistants built with React, .NET Core, Azure OpenAI, Azure AI Search, and Oracle-backed APIs to reduce analyst research time.",
    tags: ["Azure OpenAI", "RAG", ".NET", "Oracle", "React"],
  },
  {
    number: "02",
    title: "Oracle-to-RAG Data Pipelines",
    text: "Optimized PL/SQL extraction and transformation layer feeding structured enterprise data into vector search and LLM inference workflows.",
    tags: ["PL/SQL", "Azure AI Search", "FAISS", "ODP.NET"],
  },
  {
    number: "03",
    title: "AI Document Intelligence",
    text: "GenAI search and document review workflows that helped teams move from manual inspection to fast, traceable answers.",
    tags: ["LangChain", "Azure AI Studio", "Python", "Responsible AI"],
  },
];

const thoughts = [
  ["Enterprise AI", "RAG is only as strong as the data contracts, retrieval strategy, and evaluation loop behind it."],
  ["Oracle + LLMs", "Structured enterprise data can become a reliable AI tool source when access, SQL, and context are designed carefully."],
  ["Responsible AI", "The best AI systems are not just impressive; they are measurable, permission-aware, explainable, and safe to operate."],
];

function SectionHeading({ id, number, label, title, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8">
      <div className="mb-10 grid gap-4 md:grid-cols-[160px_1fr]">
        <div className="terminal-label">{number} / {label}</div>
        <div>
          <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">{title}</h2>
          {children && <p className="mt-4 max-w-2xl text-lg leading-8 text-white/55">{children}</p>}
        </div>
      </div>
    </section>
  );
}

function ResumeModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="pdf-glass-shell flex h-[90svh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/12 px-5 py-4 md:px-6">
          <div>
            <p className="terminal-label text-teal-200/70">resume preview</p>
            <h3 className="mt-1 font-display text-xl font-semibold">Vishwa Pernapati - AI Engineer</h3>
          </div>
          <button className="glass h-11 w-11 rounded-full text-xl text-white/80 hover:text-white" onClick={onClose}>
            x
          </button>
        </div>
        <div className="min-h-0 flex-1 p-3 md:p-5">
          <div className="pdf-paper h-full overflow-hidden rounded-2xl p-2 md:p-3">
            <iframe
              title="Vishwa Pernapati resume"
              src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
              className="h-full w-full rounded-xl border-0 bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VishwaPortfolio() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <div className="site-shell min-h-screen text-white">
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#05070a]/60 backdrop-blur-2xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
            <a href="#top" className="font-mono text-sm uppercase tracking-[0.24em] text-white/75">
              // Vishwa.Pernapati
            </a>
            <div className="hidden items-center gap-1 md:flex">
              {nav.map(([label, id]) => (
                <a key={id} href={`#${id}`} className="rounded-full px-3 py-2 text-xs text-white/55 transition hover:bg-white/8 hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </header>

        <main id="top">
          <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 md:px-8">
            <div className="hero-ambient" />
            <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
              <div>
                <div className="terminal-label mb-5">open to AI engineering leadership</div>
                <h1 className="font-display text-6xl font-extrabold leading-[0.92] tracking-tight md:text-8xl">
                  Vishwa
                  <span className="block text-gradient">Pernapati</span>
                </h1>
                <p className="mt-7 max-w-2xl text-xl leading-9 text-white/62">
                  AI Engineer specializing in enterprise RAG systems, Azure OpenAI, .NET microservices, and Oracle-backed intelligent applications.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a className="primary-cta" href="#projects">View My Work</a>
                  <a className="secondary-cta" href="#contact">Get In Touch</a>
                </div>
              </div>

              <div className="glass terminal-window overflow-hidden rounded-[28px]">
                <div className="flex gap-2 border-b border-white/10 px-5 py-4">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300/70" />
                  <span className="h-3 w-3 rounded-full bg-emerald-300/70" />
                </div>
                <div className="space-y-4 p-6 font-mono text-sm text-white/75">
                  <p><span className="text-teal-200">$</span> cat profile.json</p>
                  <p><span className="text-white/35">-&gt;</span> role: Lead Azure AI Engineer</p>
                  <p><span className="text-white/35">-&gt;</span> stack: [Azure OpenAI, .NET, Oracle, RAG]</p>
                  <p><span className="text-white/35">-&gt;</span> focus: Enterprise copilots and reliable AI systems</p>
                  <p><span className="text-white/35">-&gt;</span> status: Open to meaningful AI work</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 pb-20 md:grid-cols-4 md:px-8">
            {stats.map(([value, label]) => (
              <div key={label} className="glass rounded-3xl p-6">
                <div className="font-display text-4xl font-bold">{value}</div>
                <div className="mt-2 text-sm text-white/48">{label}</div>
              </div>
            ))}
          </section>

          <SectionHeading id="about" number="01" label="About" title="Engineering AI systems that enterprises can trust.">
            I build practical AI products where models, data, APIs, evaluation, and security all have to work together. My background spans 13+ years across .NET, Oracle, Azure, full-stack engineering, and production enterprise systems.
          </SectionHeading>

          <section id="experience" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
            <div className="mb-10 grid gap-4 md:grid-cols-[160px_1fr]">
              <div className="terminal-label">02 / Experience</div>
              <div>
                <h2 className="font-display text-4xl font-bold md:text-6xl">Where I have built at scale.</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/55">Enterprise AI, cloud, Oracle data systems, and full-stack platforms across regulated industries.</p>
              </div>
            </div>
            <div className="space-y-5">
              {experiences.map((item) => (
                <article key={item.role} className="premium-card rounded-3xl p-6 md:p-8">
                  <div className="flex flex-wrap justify-between gap-3 text-sm text-white/45">
                    <span>{item.period} · {item.location}</span>
                    <span>{item.company}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold">{item.role}</h3>
                  <ul className="mt-5 space-y-3 text-white/62">
                    {item.points.map((point) => <li key={point}>+ {point}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
            <div className="mb-10 grid gap-4 md:grid-cols-[160px_1fr]">
              <div className="terminal-label">03 / Skills</div>
              <div>
                <h2 className="font-display text-4xl font-bold md:text-6xl">My AI engineering stack.</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/55">Tools I use to connect models, data, APIs, evaluation, and production delivery.</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {stack.map(([group, items]) => (
                <div key={group} className="premium-card rounded-3xl p-6">
                  <h3 className="font-display text-xl font-semibold">{group}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => <span key={item} className="chip">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
            <div className="mb-10 grid gap-4 md:grid-cols-[160px_1fr]">
              <div className="terminal-label">04 / Projects</div>
              <div>
                <h2 className="font-display text-4xl font-bold md:text-6xl">AI systems and delivery work.</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/55">A portfolio view of the kinds of enterprise problems I solve.</p>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="premium-card rounded-3xl p-7">
                  <div className="text-5xl font-light text-white/85">{project.number}</div>
                  <h3 className="mt-8 font-display text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-4 leading-7 text-white/55">{project.text}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="resume" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
            <div className="premium-card grid gap-8 rounded-[32px] p-7 md:grid-cols-[1fr_0.8fr] md:p-10">
              <div>
                <div className="terminal-label">05 / Resume</div>
                <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">My Resume</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-white/58">
                  A full overview of my enterprise AI, Azure, .NET, Oracle, and full-stack engineering background.
                </p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <button className="primary-cta" onClick={() => setResumeOpen(true)}>View Resume</button>
                  <a className="secondary-cta" href="/resume.pdf" download>Download PDF</a>
                </div>
              </div>
              <div className="glass rounded-3xl p-6 font-mono text-sm text-white/68">
                <p>$ cat resume.pdf --info</p>
                <p className="mt-4">-&gt; name: Vishwa Pernapati</p>
                <p>-&gt; role: Lead Azure AI Engineer</p>
                <p>-&gt; format: PDF · up-to-date</p>
                <p>-&gt; focus: Enterprise AI / RAG / .NET / Oracle</p>
              </div>
            </div>
          </section>

          <section id="thoughts" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
            <div className="mb-10 grid gap-4 md:grid-cols-[160px_1fr]">
              <div className="terminal-label">06 / Thoughts</div>
              <div>
                <h2 className="font-display text-4xl font-bold md:text-6xl">AI engineering perspectives.</h2>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {thoughts.map(([title, text]) => (
                <article key={title} className="premium-card rounded-3xl p-7">
                  <div className="terminal-label">{title}</div>
                  <p className="mt-5 text-lg leading-8 text-white/68">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
            <div className="grid gap-8 md:grid-cols-[1fr_0.9fr]">
              <div>
                <div className="terminal-label">07 / Contact</div>
                <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">Let's connect.</h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-white/55">
                  Open to AI engineering, lead engineer, and enterprise GenAI roles where reliable systems matter.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a className="primary-cta" href="mailto:vishwapernapati1@gmail.com">Email Me</a>
                  <a className="secondary-cta" href="https://www.linkedin.com/in/vishwa-pernapati/" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a className="secondary-cta" href="https://github.com/vishwatejendra" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
              <div className="glass rounded-[28px] p-6 font-mono text-sm text-white/68">
                <p>$ vishwa --status</p>
                <p className="mt-4">-&gt; open_to_work: Yes</p>
                <p>-&gt; location: United States</p>
                <p>-&gt; target_roles: [AI Engineer, Azure AI Engineer, Lead Full Stack Engineer]</p>
                <p>-&gt; email: vishwapernapati1@gmail.com</p>
              </div>
            </div>
          </section>
        </main>
      </div>
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}

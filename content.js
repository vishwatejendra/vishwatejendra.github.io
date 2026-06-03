// ============================================================================
// Portfolio content for Vishwa Pernapati.
//
// Everything visible on the site lives here: name, story, projects, skills,
// experiments, and contact links. Replace the starter text with real details
// when you are ready.
// ============================================================================

export const content = {
  profile: {
    name: "Vishwa Pernapati",
    headline: ["Building", "Useful", "Digital", "Work", "With", "Care."],
    intro:
      "I'm shaping this portfolio around the work I have done, the skills I am building, and the problems I want to solve next.",
    availabilityBadge: "Portfolio in progress",
  },

  about: {
    heading: "A growing portfolio, built around real work.",
    stats: [
      { value: 1, suffix: "+", label: "Portfolio Ready" },
      { value: 3, suffix: "+", label: "Project Slots" },
      { value: 6, suffix: "+", label: "Skills to Highlight" },
      { value: 100, suffix: "%", label: "Ready to Personalize" },
    ],
    milestones: [
      {
        year: "01",
        phase: "Start",
        title: "Define the story",
        body: "This section should explain who you are, what you care about, and what kind of work you want people to remember you for.",
      },
      {
        year: "02",
        phase: "Work",
        title: "Add real projects",
        body: "The strongest portfolio is specific. Add the project goal, what you did, the tools you used, and the result.",
      },
      {
        year: "03",
        phase: "Proof",
        title: "Show the evidence",
        body: "Add links, screenshots, GitHub repos, demos, certificates, writing, or measurable outcomes wherever you have them.",
      },
      {
        year: "04",
        phase: "Next",
        title: "Make the ask clear",
        body: "Use the contact section to tell visitors what you are open to: jobs, internships, freelance work, collaborations, or networking.",
      },
    ],
  },

  value: {
    heading: "I turn ideas, learning, and projects into clear digital work.",
    subheading:
      "This section will become your strongest value statement once we add your target role, strengths, and examples.",
    availabilityLine: "Currently preparing for",
    availabilityBold: "new opportunities",
    resumeFile: "/resume.pdf",
    services: [
      {
        icon: "01",
        title: "Project Thinking",
        body: "I break goals into practical steps, make tradeoffs visible, and keep the final user in mind.",
        metric: "Clear from idea to outcome",
        points: ["Problem framing", "Practical execution", "Outcome-focused work"],
      },
      {
        icon: "02",
        title: "Technical Learning",
        body: "I build skill through hands-on work, experiments, and steady iteration.",
        metric: "Learning by shipping",
        points: ["Fast iteration", "Tool fluency", "Documentation"],
      },
      {
        icon: "03",
        title: "Communication",
        body: "I explain work clearly so teammates, recruiters, and collaborators can understand the value quickly.",
        metric: "Simple, readable context",
        points: ["Clear writing", "Structured updates", "Thoughtful handoff"],
      },
      {
        icon: "04",
        title: "Ownership",
        body: "I follow through from setup to polish, including the small details that make work feel complete.",
        metric: "Reliable follow-through",
        points: ["Attention to detail", "Accountability", "Continuous improvement"],
      },
    ],
    closingLine:
      "Next step: replace this starter copy with your real strengths, projects, and career direction.",
  },

  projects: [
    {
      title: "Personal Portfolio Website",
      tag: "Web Portfolio",
      role: "Owner",
      year: "2026",
      accent: "linear-gradient(135deg,#2dd4bf,#2563eb)",
      emoji: "VP",
      blurb: "A personal website to present my story, projects, skills, and contact details in one place.",
      challenge:
        "Create a polished portfolio that can be shared with recruiters, collaborators, and professional contacts.",
      process:
        "Set up a modern Next.js portfolio template, cleaned up the metadata, and prepared the content structure for personalization.",
      solution:
        "A responsive portfolio site with sections for an introduction, milestones, strengths, projects, skills, experiments, and contact links.",
      did: [
        "Prepared the portfolio project locally",
        "Updated the site to a current Next.js version",
        "Replaced generic template identity with a Vishwa starter",
        "Left clear content slots for real projects and links",
      ],
      results: ["Local site ready", "Build verified", "Ready for real content"],
      stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Add Your Best Project",
      tag: "Case Study",
      role: "Your Role",
      year: "Year",
      accent: "linear-gradient(135deg,#f97316,#eab308)",
      emoji: "02",
      blurb: "Replace this with the project you most want recruiters or collaborators to notice.",
      challenge:
        "What problem were you trying to solve? Who was it for? Why did it matter?",
      process:
        "Describe how you approached the work, what decisions you made, and what tools or methods you used.",
      solution:
        "Explain what you built, designed, analyzed, wrote, led, or delivered.",
      did: [
        "Add your first concrete contribution",
        "Add your second concrete contribution",
        "Add your third concrete contribution",
        "Add a link to the demo, GitHub repo, report, or artifact if available",
      ],
      results: ["Outcome one", "Outcome two", "What changed because of the work"],
      stack: ["Tool one", "Tool two", "Tool three"],
    },
    {
      title: "Add Another Project",
      tag: "Experience",
      role: "Your Role",
      year: "Year",
      accent: "linear-gradient(135deg,#8b5cf6,#ec4899)",
      emoji: "03",
      blurb: "Use this slot for another strong project, internship, class project, freelance work, or personal build.",
      challenge:
        "Describe the challenge in plain language.",
      process:
        "Describe your process and what you learned.",
      solution:
        "Describe the final output and why it was useful.",
      did: [
        "Add a specific responsibility",
        "Add a specific tool or method",
        "Add a measurable or observable result",
      ],
      results: ["Result one", "Result two", "Learning captured"],
      stack: ["Tool one", "Tool two", "Tool three"],
    },
  ],

  skills: [
    { name: "Problem Solving", level: "Strong", x: 50, y: 46, r: 1.0 },
    { name: "Communication", level: "Strong", x: 72, y: 30, r: 0.85 },
    { name: "Research", level: "Growing", x: 28, y: 28, r: 0.7 },
    { name: "Project Work", level: "Strong", x: 80, y: 60, r: 0.85 },
    { name: "Documentation", level: "Strong", x: 22, y: 64, r: 0.78 },
    { name: "Collaboration", level: "Strong", x: 60, y: 72, r: 0.78 },
    { name: "Web Basics", level: "Growing", x: 40, y: 18, r: 0.72 },
    { name: "AI Tools", level: "Growing", x: 86, y: 44, r: 0.68 },
    { name: "Adaptability", level: "Strong", x: 14, y: 44, r: 0.75 },
    { name: "Attention to Detail", level: "Strong", x: 64, y: 50, r: 0.7 },
  ],

  experiments: [
    {
      title: "Portfolio Content Sprint",
      tag: "Brand",
      emoji: "01",
      desc: "Turn resume points, projects, and experience into a clear personal story.",
    },
    {
      title: "Project Case Studies",
      tag: "Work",
      emoji: "02",
      desc: "Write each project as a challenge, process, solution, and result.",
    },
    {
      title: "Resume Link",
      tag: "Career",
      emoji: "03",
      desc: "Add a polished resume PDF to the site once the latest version is ready.",
    },
    {
      title: "Contact Setup",
      tag: "Networking",
      emoji: "04",
      desc: "Add email, LinkedIn, GitHub, and any other links that should be public.",
    },
    {
      title: "Deployment",
      tag: "Launch",
      emoji: "05",
      desc: "Publish the finished portfolio to Vercel or GitHub Pages.",
    },
    {
      title: "Custom Domain",
      tag: "Optional",
      emoji: "06",
      desc: "Connect a custom domain later if you want a more polished URL.",
    },
  ],

  contact: {
    heading: "Let's Connect.",
    subtext:
      "This portfolio is ready for your real email, LinkedIn, GitHub, and resume links.",
    email: "your.email@example.com",
    socials: [
      { label: "Email", href: "mailto:your.email@example.com" },
      { label: "GitHub", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Resume", href: "/resume.pdf" },
    ],
  },

  music: {
    enabled: true,
  },
};

export default content;

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "GENERATIVE AI",
    title: "AI Resume Analyzer",
    description:
      "An AI-powered application that analyzes resumes, extracts relevant skills, and compares candidate profiles against job descriptions using LLM integration.",
    stack: ["Python", "Streamlit", "LangChain", "LLM APIs"],
    href: "https://github.com/harshalmistri2004/AI-Resume-Analyzer",
    visual: "resume",
  },
  {
    number: "02",
    category: "AGENTIC AI",
    title: "Agentic AI Debate Coach",
    description:
      "An AI-focused project exploring debate coaching and presentation analysis through agentic workflows.",
    stack: ["AI Workflows", "LLM Tooling", "Presentation Analysis"],
    href: "https://github.com/harshalmistri2004/Agentic-AI-Debate-Coach-Presentation-Analysis-Platform",
    visual: "agent",
  },
  {
    number: "03",
    category: "MACHINE LEARNING",
    title: "Mileage Predictor",
    description:
      "A machine learning project that predicts vehicle mileage from vehicle specifications and selected input features.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    href: "https://github.com/harshalmistri2004/mileage-predictor",
    visual: "ml",
  },
];

const skillGroups = [
  {
    title: "AI & GENERATIVE AI",
    icon: BrainCircuit,
    skills: ["Generative AI", "LLMs", "LangChain", "LangGraph", "Prompt Engineering", "RAG", "AI Agents", "Tool Calling", "Embeddings", "Gemini", "OpenAI API"],
  },
  {
    title: "MACHINE LEARNING & DATA",
    icon: BrainCircuit,
    skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Jupyter", "Streamlit"],
  },
  {
    title: "PYTHON & BACKEND",
    icon: Terminal,
    skills: ["Python", "FastAPI", "Django", "Flask", "Pydantic", "Pytest", "Uvicorn", "REST APIs"],
  },
  {
    title: "LANGUAGES",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "JAVA DEVELOPMENT",
    icon: Code2,
    skills: ["Spring Boot", "Hibernate", "Maven"],
  },
  {
    title: "WEB DEVELOPMENT",
    icon: Cpu,
    skills: ["React", "Node.js", "Express.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "DATABASES & VECTOR STORES",
    icon: Terminal,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "ChromaDB", "FAISS", "pgvector", "Pinecone"],
  },
  {
    title: "DEVOPS & TOOLS",
    icon: Cpu,
    skills: ["Git", "GitHub", "Docker", "Linux", "Postman", "VS Code", "PyCharm"],
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function ProjectVisual({ type }) {
  if (type === "resume") {
    return (
      <div className="visual resume-visual">
        <div className="resume-window">
          <div className="window-top"><span /><span /><span /><i>resume_analysis.py</i></div>
          <div className="resume-content">
            <div className="resume-sidebar"><div className="avatar-dot" /><b /><b /><b /><b /></div>
            <div className="resume-lines">
              <strong>Candidate overview</strong>
              <div className="line long" /><div className="line medium" />
              <div className="skill-pills"><span>Python</span><span>SQL</span><span>AI / ML</span></div>
              <div className="score-row"><div className="score">87<span>%</span></div><div><b>Profile match</b><small>Strong alignment</small></div></div>
            </div>
          </div>
        </div>
        <div className="float-chip"><Sparkles size={14} /> AI MATCH ANALYSIS</div>
      </div>
    );
  }
  if (type === "agent") {
    return (
      <div className="visual agent-visual">
        <div className="agent-orbit orbit-one" /><div className="agent-orbit orbit-two" />
        <div className="agent-core"><BrainCircuit size={39} strokeWidth={1.3} /></div>
        <div className="agent-node node-one"><Sparkles size={16} /><span>Reason</span></div>
        <div className="agent-node node-two"><Terminal size={16} /><span>Analyze</span></div>
        <div className="agent-node node-three"><Check size={16} /><span>Feedback</span></div>
        <div className="agent-label">AGENT WORKFLOW / 03</div>
      </div>
    );
  }
  return (
    <div className="visual ml-visual">
      <div className="chart-label"><span>MODEL OUTPUT</span><b>Vehicle efficiency</b></div>
      <div className="chart">
        {[32, 47, 39, 58, 52, 74, 63, 86, 70, 95, 79, 100].map((h, i) => (
          <span key={i} style={{ height: `${h}%`, opacity: 0.32 + i * 0.055 }} />
        ))}
      </div>
      <div className="chart-footer"><span>FEATURES → MODEL</span><b>Prediction ready <ArrowUpRight size={14} /></b></div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectVisual type={project.visual} />
      <div className="project-body">
        <div className="project-meta"><span>{project.category}</span><span>/{project.number}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
          Explore project <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Harshal Mistri home">
          <span className="brand-mark">H<span>.</span></span>
          <span className="brand-name">HARSHAL MISTRI<small>AI / SOFTWARE DEVELOPER</small></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> OPEN TO AI / SOFTWARE OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, WORLD. I'M</p>
            <h1>Harshal<br /><span>Mistri.</span></h1>
            <h2>I build <span className="gradient-text">intelligent</span><br className="desktop-break" /> things for the real world.</h2>
            <p className="hero-description">
              AI/ML developer focused on Generative AI, LLM-powered applications, machine learning, and full-stack software development.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-secondary" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/harshalmistri2004" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={12} /></a>
              <a href="https://www.linkedin.com/in/harshalmistri/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={12} /></a>
              <a href="mailto:harshalmistri1124@gmail.com"><Mail size={17} /> Email <ArrowUpRight size={12} /></a>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract AI developer illustration">
            <div className="art-grid" />
            <div className="art-ring ring-large" /><div className="art-ring ring-small" />
            <div className="art-cross cross-a">+</div><div className="art-cross cross-b">+</div>
            <div className="code-card">
              <div className="code-card-head"><span /><span /><span /><small>harshal.py</small></div>
              <div className="code-content">
                <p><span className="code-purple">class</span> <span className="code-cyan">Developer</span>:</p>
                <p className="indent"><span className="code-purple">def</span> build(self):</p>
                <p className="indent2">ideas = <span className="code-green">"real problems"</span></p>
                <p className="indent2">tools = [</p>
                <p className="indent3"><span className="code-green">"AI"</span>, <span className="code-green">"Python"</span>,</p>
                <p className="indent3"><span className="code-green">"Java"</span>, <span className="code-green">"LLMs"</span></p>
                <p className="indent2">]</p>
                <p className="indent"><span className="code-purple">return</span> <span className="code-cyan">solution</span></p>
                <div className="terminal-cursor" />
              </div>
            </div>
            <div className="floating-tech tech-python"><span>Py</span> Python</div>
            <div className="floating-tech tech-ai"><BrainCircuit size={16} /> Generative AI</div>
            <div className="art-caption"><span>01 / CURRENT FOCUS</span><b>Ideas → Intelligence</b></div>
          </div>

          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip">
          <div><span className="strip-index">01</span><span>CURIOUS BY DEFAULT</span></div>
          <div><span className="strip-index">02</span><span>BUILDING WITH AI</span></div>
          <div><span className="strip-index">03</span><span>LEARNING BY SHIPPING</span></div>
          <div><span className="strip-index">04</span><span>ENGINEERING FOR IMPACT</span></div>
        </section>

        <section className="section-wrap about-section" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Engineer mindset.<br /><span className="muted-title">AI-first curiosity.</span></>} />
          <div className="about-grid">
            <div className="about-copy">
              <p className="large-copy">I'm an aspiring AI/ML engineer who enjoys turning complex ideas into practical applications.</p>
              <p>I work across machine learning, Generative AI, LLM integrations, and full-stack development. I enjoy understanding how things work, experimenting with new tools, and building projects that make technology useful.</p>
              <p>My current direction is to deepen my AI engineering skills while building reliable, maintainable software.</p>
              <a className="text-link" href="https://github.com/harshalmistri2004" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16} /></a>
            </div>
            <div className="principles">
              <div className="principle"><span className="principle-icon"><BrainCircuit /></span><div><h3>Applied AI</h3><p>LLMs, prompt design, machine learning, and AI-powered workflows.</p></div><span className="principle-number">01</span></div>
              <div className="principle"><span className="principle-icon"><Code2 /></span><div><h3>Software Engineering</h3><p>Clean APIs, backend development, and full-stack applications.</p></div><span className="principle-number">02</span></div>
              <div className="principle"><span className="principle-icon"><Sparkles /></span><div><h3>Continuous Growth</h3><p>Learning through hands-on projects, iteration, and problem solving.</p></div><span className="principle-number">03</span></div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <SectionHeading eyebrow="MY TOOLKIT" title={<>Technologies I <span className="muted-title">work with.</span></>} description="A growing toolkit for building intelligent products, from model experiments to full-stack applications." />
            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <article className="skill-card" key={group.title}>
                    <div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><span className="skill-index">0{index + 1}</span></div>
                    <h3>{group.title}</h3>
                    <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                  </article>
                );
              })}
            </div>
            <p className="skills-note"><span className="status-dot" /> Technologies listed reflect my learning and project experience; I'm continuously expanding this toolkit.</p>
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="projects-heading-row">
            <SectionHeading eyebrow="SELECTED WORK" title={<>Projects built to <span className="muted-title">learn by doing.</span></>} description="A selection of AI, machine learning, and software projects I'm building and improving." />
            <a className="all-projects-link" href="https://github.com/harshalmistri2004?tab=repositories" target="_blank" rel="noreferrer">All repositories <ArrowUpRight size={16} /></a>
          </div>
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard project={project} key={project.number} />)}
          </div>
        </section>

        <section className="journey-section">
          <div className="section-wrap journey-grid">
            <div><SectionHeading eyebrow="WHAT'S NEXT" title={<>Always in <span className="muted-title">build mode.</span></>} description="My focus is on turning learning into useful, well-engineered products." /></div>
            <div className="journey-list">
              <div><span>01</span><p>Build deeper expertise in LLM applications and RAG.</p><ArrowUpRight size={17} /></div>
              <div><span>02</span><p>Strengthen backend engineering with Java and Spring Boot.</p><ArrowUpRight size={17} /></div>
              <div><span>03</span><p>Ship practical projects with clear documentation and demos.</p><ArrowUpRight size={17} /></div>
            </div>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-card">
            <div className="contact-glow" />
            <p className="eyebrow"><span /> HAVE A PROJECT IN MIND?</p>
            <h2>Let's build something<br /><span className="gradient-text">meaningful.</span></h2>
            <p className="contact-description">Open to conversations about AI, software development, collaboration, and early-career opportunities.</p>
            <a className="button button-primary" href="mailto:harshalmistri1124@gmail.com">Say hello <Mail size={17} /></a>
            <div className="contact-links">
              <a href="https://github.com/harshalmistri2004" target="_blank" rel="noreferrer"><Github size={18} /> GitHub <ExternalLink size={13} /></a>
              <a href="https://www.linkedin.com/in/harshalmistri/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn <ExternalLink size={13} /></a>
              <a href="mailto:harshalmistri1124@gmail.com"><Mail size={18} /> Email <ExternalLink size={13} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">H<span>.</span></span><span className="brand-name">HARSHAL MISTRI<small>BUILDING THE NEXT THING</small></span></a>
        <p>Designed with intent. Built with curiosity.</p>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
        <span className="copyright">© {new Date().getFullYear()} Harshal Mistri</span>
      </footer>
    </div>
  );
}

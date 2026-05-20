import { useState } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Responsive Design",
  "Git & GitHub",
];

const PROJECTS = [
  {
    title: "Taskyy",
    description:
      "A modern task management application designed to help users efficiently organize and track their daily activities.",
    tags: ["React", "CSS", "Web App"],
    github: "",
    live: "https://taskyy26.netlify.app",
  },
  {
    title: "Calcyy",
    description:
      "A fully functional and responsive calculator web application designed for quick and easy mathematical operations.",
    tags: ["React", "CSS", "Web App"],
    github: "",
    live: "https://calcyy26.netlify.app",
  },
  {
    title: "Furnix Interio",
    description:
      "A modern interior design and furniture website featuring elegant layouts, showcasing premium collections with a clean user interface.",
    tags: ["React", "CSS", "Responsive"],
    github: "",
    live: "https://furnixinterio.netlify.app",
  },
];

function Navbar() {
  return (
    <header className="header">
      <div className="container navContent">
        <a href="#hero" className="brand">
          Prince Prajapati
        </a>
        <nav className="navLinks">
          {NAV_LINKS.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container heroGrid">
        <div>
          <p className="eyebrow">Frontend Developer</p>
          <h1>Professional websites that are clean, fast, and user-focused.</h1>
          <p className="intro">
            I build modern web interfaces with a strong focus on readability,
            responsiveness, and maintainable code.
          </p>
          <div className="heroActions">
            <a href="#projects" className="btn btnPrimary">
              View Projects
            </a>
            <a href="#contact" className="btn btnGhost">
              Contact Me
            </a>
          </div>
        </div>
        <aside className="card">
          <h3>Quick Profile</h3>
          <ul>
            <li>
              <strong>Location:</strong> Gujarat, India
            </li>
            <li>
              <strong>Status:</strong> Open to work
            </li>
            <li>
              <strong>Primary Focus:</strong> Frontend Development
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="eyebrow">About</p>
        <h2>A reliable partner for modern web development.</h2>
        <p className="bodyText">
          I am an early-career developer focused on building practical,
          business-friendly web experiences. My process prioritizes clean UI,
          performance, and clear communication throughout each project.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section sectionSoft">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2>Core technologies and strengths.</h2>
        <div className="skillGrid">
          {SKILLS.map((skill) => (
            <div key={skill} className="skillItem">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h2>Selected work.</h2>
        <div className="projectList">
          {PROJECTS.map((project) => (
            <article key={project.title} className="projectCard">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="projectLinks">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="projectLink">
                    GitHub ↗
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="projectLink liveLink">
                    Live Demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.name && form.email && form.message) {
      const subject = encodeURIComponent(`New message from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );
      
      window.location.href = `mailto:princepraj2607@gmail.com?subject=${subject}&body=${body}`;
      
      setSent(true);
      setForm({ name: "", email: "", message: "" });

      // Hide the success message after 3 seconds
      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <section id="contact" className="section sectionSoft">
      <div className="container contactWrap">
        <p className="eyebrow">Contact</p>
        <h2>Let us discuss your next project.</h2>
        {sent ? (
          <p className="successMessage">
            Opening your email client...
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="contactForm">
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
            />
            <textarea
              rows={5}
              placeholder="Tell me about your project"
              value={form.message}
              onChange={(event) =>
                setForm({ ...form, message: event.target.value })
              }
            />
            <button type="submit" className="btn btnPrimary">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: "Inter", system-ui, -apple-system, sans-serif;
          background: #ffffff;
          color: #111827;
          line-height: 1.6;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .container {
          width: min(1100px, 92vw);
          margin: 0 auto;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 10;
          background: rgba(255, 255, 255, 0.95);
          border-bottom: 1px solid #e5e7eb;
          backdrop-filter: blur(8px);
        }

        .navContent {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 68px;
        }

        .brand {
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.02em;
        }

        .navLinks {
          display: flex;
          gap: 1.3rem;
          font-size: 0.92rem;
          color: #4b5563;
        }

        .navLinks a:hover {
          color: #111827;
        }

        .hero {
          padding: 6rem 0 4.5rem;
          border-bottom: 1px solid #f3f4f6;
        }

        .heroGrid {
          display: grid;
          gap: 2rem;
          grid-template-columns: 1.4fr 1fr;
          align-items: start;
        }

        .eyebrow {
          font-size: 0.76rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6b7280;
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        h1 {
          font-size: clamp(2rem, 5vw, 3rem);
          line-height: 1.2;
          margin-bottom: 1rem;
          max-width: 20ch;
        }

        h2 {
          font-size: clamp(1.5rem, 4vw, 2rem);
          line-height: 1.25;
          margin-bottom: 1rem;
        }

        .intro,
        .bodyText {
          color: #4b5563;
          max-width: 62ch;
          margin-bottom: 1.3rem;
        }

        .heroActions {
          display: flex;
          gap: 0.9rem;
          flex-wrap: wrap;
          margin-top: 1.3rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.72rem 1.1rem;
          border-radius: 0.55rem;
          font-size: 0.92rem;
          font-weight: 600;
          border: 1px solid transparent;
          cursor: pointer;
        }

        .btnPrimary {
          background: #111827;
          color: #ffffff;
        }

        .btnPrimary:hover {
          background: #1f2937;
        }

        .btnGhost {
          border-color: #d1d5db;
          color: #374151;
          background: #ffffff;
        }

        .btnGhost:hover {
          border-color: #9ca3af;
        }

        .card {
          border: 1px solid #e5e7eb;
          border-radius: 0.8rem;
          padding: 1.2rem;
          background: #ffffff;
        }

        .card h3 {
          font-size: 1rem;
          margin-bottom: 0.8rem;
        }

        .card ul {
          list-style: none;
          display: grid;
          gap: 0.45rem;
          color: #4b5563;
          font-size: 0.92rem;
        }

        .section {
          padding: 4rem 0;
        }

        .sectionSoft {
          background: #f9fafb;
          border-top: 1px solid #f3f4f6;
          border-bottom: 1px solid #f3f4f6;
        }

        .skillGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .skillItem {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 0.55rem;
          padding: 0.8rem 0.95rem;
          font-size: 0.92rem;
          color: #374151;
        }

        .projectList {
          display: grid;
          gap: 1rem;
          margin-top: 1rem;
        }

        .projectCard {
          border: 1px solid #e5e7eb;
          border-radius: 0.8rem;
          padding: 1.1rem;
          background: #ffffff;
        }

        .projectCard h3 {
          font-size: 1.05rem;
          margin-bottom: 0.4rem;
        }

        .projectCard p {
          color: #4b5563;
          margin-bottom: 0.8rem;
        }

        .tags {
          display: flex;
          gap: 0.45rem;
          flex-wrap: wrap;
        }

        .tags span {
          font-size: 0.73rem;
          border: 1px solid #d1d5db;
          border-radius: 999px;
          padding: 0.22rem 0.55rem;
          color: #6b7280;
        }

        .projectLinks {
          display: flex;
          gap: 0.7rem;
          margin-top: 0.9rem;
        }

        .projectLink {
          font-size: 0.85rem;
          font-weight: 600;
          color: #111827;
          border: 1px solid #d1d5db;
          border-radius: 0.45rem;
          padding: 0.4rem 0.8rem;
          transition: all 0.2s;
        }

        .projectLink:hover {
          background: #111827;
          color: #ffffff;
          border-color: #111827;
        }

        .liveLink {
          background: #111827;
          color: #ffffff;
        }

        .liveLink:hover {
          background: #1f2937;
        }

        .contactWrap {
          max-width: 700px;
        }

        .contactForm {
          display: grid;
          gap: 0.75rem;
          margin-top: 0.6rem;
        }

        .contactForm input,
        .contactForm textarea {
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 0.55rem;
          padding: 0.72rem 0.85rem;
          font: inherit;
          color: #111827;
          background: #ffffff;
        }

        .contactForm input:focus,
        .contactForm textarea:focus {
          outline: 2px solid #c7d2fe;
          border-color: #6366f1;
        }

        .successMessage {
          color: #065f46;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          border-radius: 0.6rem;
          padding: 0.8rem 0.9rem;
          margin-top: 0.6rem;
        }

        @media (max-width: 860px) {
          .heroGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 620px) {
          .navContent {
            flex-direction: column;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.7rem 0;
          }

          .navLinks {
            flex-wrap: wrap;
            justify-content: center;
          }

          .hero {
            padding-top: 4.5rem;
          }
        }
      `}</style>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
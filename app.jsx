import { useState } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

function IconEmail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    label: "Email",
    href: "mailto:princepraj2607@gmail.com",
    external: false,
    Icon: IconEmail,
  },
  {
    label: "GitHub",
    href: "https://github.com/princepraj2607-ai",
    external: true,
    Icon: IconGitHub,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/princeprj2687?igsh=aXZuMGJ5eTAyc2I0",
    external: true,
    Icon: IconInstagram,
  },
];

const SKILLS = [
  "AI-Assisted Development & Prompt Engineering",
  "Project Development & Management",
  "JavaScript",
  "React",
  "Responsive Design",
  "Debugging & Error Resolution",
];

const PROJECTS = [
  {
    title: "CiteWise",
    description: [
      "Document Upload: Users can upload documents through the web application.",
      "Document Sharing: Allows users to share documents easily with others.",
      "User-Friendly Interface: Simple and responsive design for a smooth user experience.",
      "Web-Based Platform: Accessible directly through a browser without installing additional software.",
    ],
    tags: ["React", "CSS", "Web App"],
    github: "",
    live: "https://citewise.netlify.app",
  },
  {
    title: "Nexus AI",
    description: [
      "AI Chat: Provides AI-powered conversations and intelligent responses.",
      "Google Gemini Integration: Uses Gemini AI to generate helpful and contextual answers.",
      "Google Sign-In: Allows users to securely log in using their Google account.",
      "Image Generation: Includes an AI-based interface for generating images from user prompts.",
      "Responsive Design: Provides a modern and responsive interface for different screen sizes.",
    ],
    tags: ["React", "Gemini AI", "Web App"],
    github: "",
    live: "https://nexusaiix.netlify.app",
  },
  {
    title: "DeviceX",
    description: [
      "Device Management: Helps users manage and organize their devices in one place.",
      "Device Information: Displays important details and information related to connected devices.",
      "User-Friendly Interface: Provides a simple and easy-to-use web interface.",
      "Responsive Design: Works smoothly across different screen sizes and devices.",
    ],
    tags: ["React", "Web App", "Device Management"],
    github: "",
    live: "https://devicexx.netlify.app",
  },
  {
    title: "Luxe Thread",
    description: [
      "Premium Fashion Store: A modern online fashion platform for exploring premium clothing and fashion products.",
      "Product Showcase: Displays fashion products in an attractive and organized layout.",
      "User-Friendly Interface: Provides a clean and smooth browsing experience for users.",
      "Responsive Design: Works smoothly across different screen sizes and devices.",
    ],
    tags: ["React", "E-Commerce", "Web App"],
    github: "",
    live: "https://luxethreadx.netlify.app",
  },
  {
    title: "LuxeSpace",
    description: [
      "Interior Design Platform: A modern web platform focused on furniture and interior design solutions.",
      "Furniture Showcase: Displays furniture and interior products in an attractive and organized layout.",
      "Modern User Interface: Provides a clean and visually appealing browsing experience.",
      "Responsive Design: Works smoothly across different screen sizes and devices.",
    ],
    tags: ["React", "Interior Design", "Web App"],
    github: "",
    live: "https://luxespacee.netlify.app",
  },
];

function SocialLinks({ className = "" }) {
  return (
    <div className={`socialLinks ${className}`.trim()}>
      {SOCIAL_LINKS.map(({ label, href, external, Icon }) => (
        <a
          key={label}
          href={href}
          className="socialLink"
          aria-label={label}
          title={label}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

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
        <aside className="heroAside">
          <img
            src="/me.png"
            alt="Prince Prajapati"
            className="heroPhoto"
            width={220}
            height={220}
          />
          <SocialLinks className="heroSocial" />
          <div className="card">
            <h3>Quick Profile</h3>
            <ul>
              <li>
                <strong>Location:</strong>Patan, Gujarat, India
              </li>
              <li>
                <strong>Status:</strong> Open to work
              </li>
              <li>
                <strong>Primary Focus:</strong> Frontend Development
              </li>
            </ul>
          </div>
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
              {Array.isArray(project.description) ? (
                <ul className="projectFeatures">
                  {project.description.map((item, index) => {
                    const colonIndex = item.indexOf(":");
                    if (colonIndex !== -1) {
                      const title = item.slice(0, colonIndex);
                      const desc = item.slice(colonIndex + 1);
                      return (
                        <li key={index}>
                          <strong>{title}:</strong>{desc}
                        </li>
                      );
                    }
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              ) : (
                <p>{project.description}</p>
              )}
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
        <SocialLinks className="contactSocial" />
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

        .heroAside {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .heroPhoto {
          width: 220px;
          height: 220px;
          object-fit: cover;
          object-position: center 38%;
          border-radius: 50%;
          border: 3px solid #e5e7eb;
          box-shadow: 0 4px 20px rgba(17, 24, 39, 0.1);
        }

        .socialLinks {
          display: flex;
          flex-wrap: wrap;
          gap: 0.55rem;
          justify-content: center;
        }

        .socialLink {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          color: #374151;
          border: 1px solid #d1d5db;
          border-radius: 50%;
          transition: all 0.2s;
        }

        .socialLink svg {
          width: 1.15rem;
          height: 1.15rem;
        }

        .socialLink:hover {
          background: #111827;
          color: #ffffff;
          border-color: #111827;
        }

        .heroSocial {
          margin-top: 0.15rem;
        }

        .contactSocial {
          justify-content: flex-start;
          margin: 0.4rem 0 1rem;
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
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-top: 1rem;
          max-width: 720px;
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

        .projectFeatures {
          list-style-type: disc;
          padding-left: 1.25rem;
          color: #4b5563;
          margin-bottom: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.92rem;
        }

        .projectFeatures strong {
          color: #111827;
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
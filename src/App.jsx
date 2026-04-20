import { useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
];

const skills = [
  {
    title: "Frontend",
    text: "HTML5, CSS3, JavaScript (ES6+), React, Responsive Design"
  },
  {
    title: "Backend",
    text: "Node.js, Express.js, REST APIs, Authentication"
  },
  {
    title: "Database",
    text: "MongoDB, MySQL, data modeling, CRUD operations"
  },
  {
    title: "Tools",
    text: "Git, GitHub, VS Code, Postman, deployment workflows"
  }
];

const projects = [
  {
    title: "Blog Platform",
    description: "Full stack blog app with auth, posting, and comments.",
    stack: "React, Node.js, Express, MongoDB",
    link: "https://github.com/your-username/blog-platform"
  },
  {
    title: "Task Manager",
    description: "Task tracker with filters, status tags, and reminders.",
    stack: "React, JavaScript, Local Storage",
    link: "https://github.com/your-username/task-manager"
  },
  {
    title: "E-Commerce Starter",
    description: "Storefront prototype with cart flow and API-backed catalog.",
    stack: "React, Node.js, MySQL",
    link: "https://github.com/your-username/ecommerce-starter"
  }
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setStatus("Please fill all fields before sending.");
      return;
    }

    setStatus("Message captured. Connect this form to EmailJS or your backend API.");
    event.currentTarget.reset();
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="logo" href="#home">
            Samya.dev
          </a>
          <nav>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              Menu
            </button>
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-content">
            <p className="eyebrow">Full Stack Web Developer</p>
            <h1>Building modern and useful web products</h1>
            <p>
              I design and develop responsive websites and apps with clean UI,
              reliable backend logic, and practical deployment workflows.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View Projects
              </a>
              <a className="btn btn-secondary" href="#contact">
                Contact Me
              </a>
            </div>
            <div className="social-actions">
              <a
                className="btn btn-outline"
                href="https://github.com/Samiahamad37"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="btn btn-outline"
                href="https://www.linkedin.com/in/samia-hamad-672a61327"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className="btn btn-outline" href="/resume.pdf" download>
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2>About Me</h2>
            <p>
              I am a full stack developer focused on building complete web
              solutions, from frontend interfaces to backend APIs and databases.
            </p>
          </div>
        </section>

        <section id="skills" className="section alt">
          <div className="container">
            <h2>Skills</h2>
            <div className="grid">
              {skills.map((skill) => (
                <article key={skill.title} className="card">
                  <h3>{skill.title}</h3>
                  <p>{skill.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2>Projects</h2>
            <div className="grid">
              {projects.map((project) => (
                <article key={project.title} className="card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="stack">Stack: {project.stack}</p>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View Source
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section alt">
          <div className="container">
            <h2>Services</h2>
            <div className="grid">
              <article className="card">
                <h3>Portfolio Websites</h3>
                <p>Professional websites optimized for recruiters and clients.</p>
              </article>
              <article className="card">
                <h3>Business Websites</h3>
                <p>Responsive, user-friendly websites for brands and startups.</p>
              </article>
              <article className="card">
                <h3>Full Stack MVPs</h3>
                <p>Rapid prototype development for product ideas and validation.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <h2>Experience & Education</h2>
            <div className="grid">
              <article className="card">
                <h3>Internship Program</h3>
                <p>
                  Built backend modules, integrated APIs, and fixed production
                  issues in a team environment.In Ardhi University on project of department website
                </p>
              </article>
              <article className="card">
                <h3>Computer Science Studies</h3>
                <p>
                  Learned software engineering fundamentals, databases, and modern
                  web development ,mobile development and machine learning
                </p>
              </article>
              <article className="card">
              <h3>Blanded Intensive Program</h3>
                <p>
                Blended Intensive Program (BIP) in Belgium, I gained international exposure by collaborating with students from diverse backgrounds while working on academic and practical projects. The experience enhanced my cross-cultural communication, teamwork, and problem-solving skills in a global learning environment.
                </p>
              </article>
             
            </div>
          </div>
        </section>

        <section id="contact" className="section alt">
          <div className="container">
            <h2>Contact Me</h2>
            <p className="contact-copy">
              Open to internships, freelance projects, and full-time roles.
            </p>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label>
                Name
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" required />
              </label>
              <button className="btn btn-primary" type="submit">
                Send Message
              </button>
              <p className="status">{status}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Samya. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

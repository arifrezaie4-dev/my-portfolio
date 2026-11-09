const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building clear, polished interfaces with React, Next.js, and TypeScript.",
  },
  {
    number: "02",
    title: "Full-Stack Development",
    description:
      "Creating complete web applications with thoughtful APIs and data models.",
  },
  {
    number: "03",
    title: "Responsive UI Development",
    description:
      "Making digital experiences feel natural across screen sizes and devices.",
  },
];

const technologies = ["React", "Next.js", "TypeScript", "NestJS", "PostgreSQL"];

export default function About() {
  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about-container">
        <div className="about-grid">
          <div className="about-copy">
            <p className="about-eyebrow">
              <span className="about-eyebrow-line" />
              A little about me
            </p>
            <h2 className="about-title" id="about-title">
              Developer with a <span>mathematical</span> mindset.
            </h2>
            <p className="about-introduction">
              I&apos;m Arif Rezaie, a frontend and full-stack developer with a
              bachelor&apos;s degree in Mathematics. I enjoy turning complex
              ideas into modern, responsive, and user-friendly web applications.
            </p>
            <p className="about-introduction">
              From crafting interfaces with React and Next.js to building APIs
              with NestJS, TypeScript, and PostgreSQL, I value clean code,
              continuous learning, and solving real-world problems through
              software.
            </p>

            <div className="about-technologies" aria-label="Main technologies">
              {technologies.map((technology) => (
                <span className="about-technology" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <aside className="about-visual" aria-label="Profile snapshot">
            <div className="about-visual-grid" aria-hidden="true" />
            <div className="about-visual-glow" aria-hidden="true" />
            <div className="about-orbit about-orbit-outer" aria-hidden="true" />
            <div className="about-orbit about-orbit-inner" aria-hidden="true" />

            <div className="about-profile-card">
              <div className="about-avatar" aria-hidden="true">
                AR
                <span />
              </div>
              <p className="about-profile-name">Arif Rezaie</p>
              <p className="about-profile-role">
                Frontend <span>&amp;</span> Full-Stack Developer
              </p>
              <div className="about-profile-divider" />
              <div className="about-profile-focus">
                <span className="about-focus-indicator" />
                <span>Thoughtful work, built to last</span>
              </div>
            </div>

            <div className="about-floating-note about-education-note">
              <span className="about-note-icon" aria-hidden="true">∑</span>
              <span>
                <strong>Mathematics</strong>
                <small>Bachelor&apos;s degree</small>
              </span>
            </div>
            <div className="about-floating-note about-code-note" aria-hidden="true">
              <span className="about-code-symbol">&lt;/&gt;</span>
              <span>Curiosity meets craft</span>
            </div>
            <span className="about-visual-caption">
              <span>01</span>
              <span className="about-caption-rule" />
              Built with care
            </span>
          </aside>
        </div>

        <div className="about-services" aria-labelledby="about-services-title">
          <div className="about-services-heading">
            <p className="about-services-eyebrow">How I can help</p>
            <h3 id="about-services-title">What I do</h3>
          </div>
          <ul className="about-services-list">
            {services.map((service) => (
              <li className="about-service-card" key={service.number}>
                <span className="about-service-number">{service.number}</span>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

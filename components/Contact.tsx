const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/arifrezaie4-dev",
    detail: "github.com/arifrezaie4-dev",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/arifrezaie",
    detail: "linkedin.com/in/arifrezaie",
  },
];

export default function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-container">
        <div className="contact-heading">
          <p className="contact-eyebrow">
            <span className="contact-eyebrow-line" />
            Get in touch
          </p>
          <h2 id="contact-title">Let&apos;s Work Together</h2>
          <p className="contact-introduction">
            I&apos;m always open to discussing new opportunities, interesting
            projects, and collaborations. Feel free to get in touch.
          </p>
          <p className="contact-invitation">
            Whether you&apos;re hiring or have a freelance project in mind,
            I&apos;d be glad to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          <aside className="contact-details" aria-label="Contact information">
            <h3>Let&apos;s start a conversation</h3>
            <p>
              Reach out through my professional profiles. An email address
              will be added here once available.
            </p>

            <div className="contact-links">
              <div className="contact-link-card contact-email-card">
                <span className="contact-link-icon" aria-hidden="true">
                  @
                </span>
                <span className="contact-link-copy">
                  <span className="contact-link-label">Email</span>
                  <span className="contact-link-detail">
                    Arifrezaie4@gmail.com
                  </span>
                </span>
              </div>

              {socialLinks.map((link) => (
                <a
                  className="contact-link-card"
                  href={link.href}
                  key={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-link-icon" aria-hidden="true">
                    ↗
                  </span>
                  <span className="contact-link-copy">
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-detail">{link.detail}</span>
                  </span>
                  <svg
                    className="contact-link-arrow"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path d="M3.5 12.5 12 4m0 0H5m7 0v7" />
                  </svg>
                </a>
              ))}
            </div>
          </aside>

          <form className="contact-form">
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Name</label>
                <input
                  autoComplete="name"
                  id="contact-name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">Email</label>
                <input
                  autoComplete="email"
                  id="contact-email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                placeholder="What would you like to discuss?"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me a little about your opportunity or project."
                required
                rows={5}
              />
            </div>

            <button
              className="contact-submit"
              type="submit"
              disabled
              aria-describedby="contact-form-note"
            >
              Send message
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
                <path d="M2.5 8h10m-4-4 4 4-4 4" />
              </svg>
            </button>
            <p className="contact-form-note" id="contact-form-note">
              Message delivery isn&apos;t set up yet. Please contact me through
              GitHub or LinkedIn for now.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

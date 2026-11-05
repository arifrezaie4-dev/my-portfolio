const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Arif Rezaie home">
          <span className="brand-mark">AR</span>
          <span className="brand-name">
            arif rezaie<span>.</span>
          </span>
        </a>

        <div className="nav-links">
          {navigation.map((item) => (
            <a className="nav-link" href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">
          Let&apos;s talk
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
            <path d="M3.5 12.5 12 4m0 0H5m7 0v7" />
          </svg>
        </a>
      </nav>
    </header>
  );
}

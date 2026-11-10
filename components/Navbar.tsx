"use client";

import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const desktopBreakpoint = window.matchMedia("(min-width: 681px)");

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function handleBreakpointChange(event: MediaQueryListEvent) {
      if (event.matches) setIsMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    desktopBreakpoint.addEventListener("change", handleBreakpointChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktopBreakpoint.removeEventListener("change", handleBreakpointChange);
    };
  }, [isMenuOpen]);

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

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          ref={menuButtonRef}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        aria-hidden={!isMenuOpen}
        className="mobile-menu"
        id="mobile-navigation"
        inert={!isMenuOpen}
      >
        {navigation.map((item) => (
          <a
            className="mobile-menu-link"
            href={item.href}
            key={item.label}
            onClick={() => setIsMenuOpen(false)}
            tabIndex={isMenuOpen ? undefined : -1}
          >
            {item.label}
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
              <path d="M3.5 12.5 12 4m0 0H5m7 0v7" />
            </svg>
          </a>
        ))}
        <a
          className="mobile-menu-link mobile-menu-contact"
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          tabIndex={isMenuOpen ? undefined : -1}
        >
          Let&apos;s talk
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
            <path d="M3.5 12.5 12 4m0 0H5m7 0v7" />
          </svg>
        </a>
      </div>
    </header>
  );
}

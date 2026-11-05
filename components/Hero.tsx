export default function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            Available for opportunities
          </p>

          <h1 id="hero-title">
            Hi, I&apos;m <span className="hero-name">Arif Rezaie</span>
            <span className="hero-period">.</span>
          </h1>

          <p className="hero-role">
            Frontend <span>&amp;</span> Full-Stack Developer
          </p>

          <p className="hero-description">
            I build thoughtful digital experiences that bring ideas to life —
            with clean code, considered design, and a focus on the details that
            matter.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View projects
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
                <path d="M3.5 12.5 12 4m0 0H5m7 0v7" />
              </svg>
            </a>
            <a className="button button-secondary" href="#contact">
              Contact me
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m-4-4 4 4-4 4" />
              </svg>
            </a>
          </div>

          <div className="hero-footnote">
            <span className="footnote-dot" />
            <span>Thoughtful by design. Built to make an impact.</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Developer workspace illustration">
          <div className="visual-orbit orbit-outer" aria-hidden="true" />
          <div className="visual-orbit orbit-inner" aria-hidden="true" />
          <div className="visual-crosshair crosshair-top" aria-hidden="true" />
          <div className="visual-crosshair crosshair-bottom" aria-hidden="true" />

          <div className="code-card">
            <div className="code-card-header">
              <div className="window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="code-file">arif.tsx</span>
              <span className="code-status">
                <span />
                Ready
              </span>
            </div>
            <div className="code-card-body">
              <div className="code-line"><span className="line-number">01</span><span><span className="code-purple">const</span> developer = {"{"}</span></div>
              <div className="code-line"><span className="line-number">02</span><span className="code-indent"><span className="code-blue">name</span>: <span className="code-green">&quot;Arif Rezaie&quot;</span>,</span></div>
              <div className="code-line"><span className="line-number">03</span><span className="code-indent"><span className="code-blue">focus</span>: <span className="code-green">&quot;the details&quot;</span>,</span></div>
              <div className="code-line"><span className="line-number">04</span><span className="code-indent"><span className="code-blue">stack</span>: [<span className="code-green">&quot;React&quot;</span>, <span className="code-green">&quot;Next.js&quot;</span>],</span></div>
              <div className="code-line"><span className="line-number">05</span><span>{"};"}</span></div>
              <div className="code-line code-line-spacer"><span className="line-number">06</span><span /></div>
              <div className="code-line"><span className="line-number">07</span><span><span className="code-purple">export default</span> developer;</span></div>
            </div>
          </div>

          <div className="floating-chip chip-top">
            <span className="chip-icon chip-icon-purple">&lt;/&gt;</span>
            <span><strong>Clean code</strong><small>built with intention</small></span>
          </div>
          <div className="floating-chip chip-bottom">
            <span className="chip-icon chip-icon-green">
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
                <path d="m3.5 8.5 3 3 6-7" />
              </svg>
            </span>
            <span><strong>Good things</strong><small>take good craft</small></span>
          </div>

          <div className="visual-caption">
            <span>01</span>
            <span className="caption-rule" />
            <span>Ideas into interfaces</span>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>Based in Afghanistan</span>
        <span className="bottom-center"><span className="scroll-indicator" /> Scroll to explore</span>
        <span className="bottom-right">Independent developer <span>✳</span></span>
      </div>
    </section>
  );
}

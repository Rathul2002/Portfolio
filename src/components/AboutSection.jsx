'use client';

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="about-grid">
        <div className="section-header">
          <span>{`// section.about`}</span>
          <h2>About Me</h2>
        </div>

        <div className="about-summary terminal-card">
          <div className="terminal-bar">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="terminal-title">about.md</span>
          </div>
          <div className="terminal-body">
            <p>
              Software Engineer with <strong style={{ color: '#79c0ff' }}>1+ year of experience</strong> building
              scalable, production-grade full-stack applications using Java, Spring Boot, and modern web
              frameworks. Proven track record of delivering high-performance features, reducing defects
              by ~35%, and improving backend efficiency by ~50%.
            </p>
            <br />
            <p>
              Experienced in Azure-based cloud development, RESTful services, and data-driven systems.
              Hands-on experience integrating Generative AI (LLM APIs) into real-world applications,
              including prompt engineering and intelligent user workflows. Strong foundation in OOP,
              system design, and distributed systems.
            </p>
          </div>
        </div>

        <div className="terminal-card">
          <div className="terminal-bar">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="terminal-title">metrics.json</span>
          </div>
          <div className="terminal-body">
            <div className="code-line"><span className="code-keyword">const</span> <span className="code-variable">experience</span> = <span className="code-string">"1+ years"</span>;</div>
            <div className="code-line"><span className="code-keyword">const</span> <span className="code-variable">defectReduction</span> = <span className="code-string">"~35%"</span>;</div>
            <div className="code-line"><span className="code-keyword">const</span> <span className="code-variable">efficiencyGain</span> = <span className="code-string">"~50%"</span>;</div>
            <div className="code-line"><span className="code-keyword">const</span> <span className="code-variable">escalationsPrevented</span> = <span className="code-string">"~95%"</span>;</div>
          </div>
        </div>

        <div className="terminal-card">
          <div className="terminal-bar">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="terminal-title">stack.config</span>
          </div>
          <div className="terminal-body">
            <div className="code-line"><span className="code-comment">// Core technologies</span></div>
            <div className="code-line"><span className="code-function">Java</span> • <span className="code-function">Spring Boot</span> • <span className="code-function">React</span></div>
            <div className="code-line"><span className="code-function">Next.js</span> • <span className="code-function">TypeScript</span> • <span className="code-function">Python</span></div>
            <div className="code-line"><span className="code-comment">// Cloud & AI</span></div>
            <div className="code-line"><span className="code-function">Azure</span> • <span className="code-function">Gen AI</span> • <span className="code-function">LLM APIs</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

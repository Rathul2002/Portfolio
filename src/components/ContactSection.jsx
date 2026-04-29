'use client';

export default function ContactSection() {
  return (
    <section className="section" id="contact" style={{ alignItems: 'flex-start', paddingTop: '100px' }}>
      <div style={{ maxWidth: '700px', width: '100%' }}>
        <div className="section-header">
          <span>{`// section.contact`}</span>
          <h2>Get In Touch</h2>
        </div>

        <div className="terminal-card contact-info">
          <div className="terminal-bar">
            <div className="terminal-dot red" />
            <div className="terminal-dot yellow" />
            <div className="terminal-dot green" />
            <span className="terminal-title">contact.sh</span>
          </div>
          <div className="terminal-body">
            <div className="code-line">
              <span className="code-variable">$ echo</span> <span className="code-keyword">$EMAIL</span>
            </div>
            <div className="code-line">
              <span className="code-string">  → rathul95@gmail.com</span>
            </div>
            <br />
            <div className="code-line">
              <span className="code-variable">$ echo</span> <span className="code-keyword">$PHONE</span>
            </div>
            <div className="code-line">
              <span className="code-string">  → +91 8777096184</span>
            </div>
            <br />
            <div className="code-line">
              <span className="code-variable">$ echo</span> <span className="code-keyword">$LINKEDIN</span>
            </div>
            <div className="code-line">
              <a href="https://linkedin.com/in/rathul2002" target="_blank" rel="noopener noreferrer" style={{ color: '#7ee787', textDecoration: 'none' }}>
                {'  → linkedin.com/in/rathul2002'}
              </a>
            </div>
            <br />
            <div className="code-line">
              <span className="code-variable">$ echo</span> <span className="code-keyword">$GITHUB</span>
            </div>
            <div className="code-line">
              <a href="https://github.com/Rathul2002" target="_blank" rel="noopener noreferrer" style={{ color: '#7ee787', textDecoration: 'none' }}>
                {'  → github.com/Rathul2002'}
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        {'< />'} Built by Rathul Chowdhury • {new Date().getFullYear()}
      </footer>
    </section>
  );
}

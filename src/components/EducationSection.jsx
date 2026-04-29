'use client';

export default function EducationSection() {
  return (
    <section className="section" id="education" style={{ alignItems: 'flex-start', paddingTop: '100px' }}>
      <div style={{ maxWidth: '900px', width: '100%' }}>
        <div className="section-header">
          <span>{`// section.education`}</span>
          <h2>Education</h2>
        </div>

        <div className="education-timeline">
          <div className="terminal-card edu-card">
            <div className="terminal-bar">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span className="terminal-title">btech.log</span>
            </div>
            <div className="terminal-body">
              <div className="edu-badge">🎓</div>
              <div className="edu-degree">B.Tech in Computer Science & Engineering</div>
              <div className="edu-school">University of Engineering & Management, Kolkata</div>
              <div className="edu-details">
                <span className="edu-detail-tag">2021 – 2025</span>
                <span className="edu-detail-tag gpa">GPA: 8.76 / 10.0</span>
                <span className="edu-detail-tag">West Bengal, India</span>
              </div>
            </div>
          </div>

          <div className="edu-connector">
            <div className="edu-connector-line" />
          </div>

          <div className="terminal-card edu-card">
            <div className="terminal-bar">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span className="terminal-title">class_xii.log</span>
            </div>
            <div className="terminal-body">
              <div className="edu-badge">📚</div>
              <div className="edu-degree">ISC (Class XII) — 88.66%</div>
              <div className="edu-school">St. Stephen&apos;s School, Kolkata</div>
              <div className="edu-details">
                <span className="edu-detail-tag">2021</span>
                <span className="edu-detail-tag gpa">88.66%</span>
                <span className="edu-detail-tag">West Bengal, India</span>
              </div>
            </div>
          </div>

          <div className="edu-connector">
            <div className="edu-connector-line" />
          </div>

          <div className="terminal-card edu-card">
            <div className="terminal-bar">
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span className="terminal-title">class_x.log</span>
            </div>
            <div className="terminal-body">
              <div className="edu-badge">📖</div>
              <div className="edu-degree">ICSE (Class X) — 83.66%</div>
              <div className="edu-school">St. Stephen&apos;s School, Kolkata</div>
              <div className="edu-details">
                <span className="edu-detail-tag">2019</span>
                <span className="edu-detail-tag gpa">83.66%</span>
                <span className="edu-detail-tag">West Bengal, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

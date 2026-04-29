'use client';

const experiences = [
  {
    file: 'cognizant_01.log',
    role: 'Programmer Analyst Trainee',
    company: 'Cognizant Technology Solutions',
    dates: 'Jul 2025 – Present',
    location: 'Kolkata, India',
    tags: ['Java', 'Next.js', 'Tailwind CSS', 'Spring Boot', 'REST APIs', 'Git', 'Jira'],
    bullets: [
      'Designed and delivered scalable full-stack features using Next.js (frontend) and Spring Boot (backend) for enterprise applications.',
      'Built and optimized scalable RESTful APIs enabling seamless integration across multiple business modules, improving data flow reliability.',
      'Reduced sprint defect carry-over by ~35% through proactive debugging and cross-team collaboration.',
      'Monitored production systems using observability tools (Kibana), preventing ~95% of potential escalations.',
      'Collaborated in Agile environments, contributing to sprint planning, design discussions, and retrospectives.',
      'Improved frontend performance and UX consistency across modules using reusable components and responsive design.',
      'Collaborated with cross-functional teams including product managers and designers to deliver user-centric solutions.',
    ],
  },
  {
    file: 'cognizant_02.log',
    role: 'Java Full Stack Engineer Intern',
    company: 'Cognizant Technology Solutions',
    dates: 'Mar 2025 – Jun 2025',
    location: 'Chennai, India',
    tags: ['Java', 'Spring Boot', 'Hibernate/JPA', 'REST APIs', 'MySQL', 'React', 'Git'],
    bullets: [
      'Developed 10+ REST APIs supporting scalable frontend-backend communication for enterprise applications.',
      'Designed optimized data models using Hibernate/JPA, reducing boilerplate by ~50%.',
      'Delivered end-to-end features (DB → API → UI) ahead of schedule with zero post-release defects.',
      'Ensured code quality through testing, debugging, and adherence to clean coding practices; contributed to CI/CD pipelines using Jenkins.',
      'Worked on production-grade systems handling real user traffic and business workflows.',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="section" id="experience" style={{ alignItems: 'flex-start', paddingTop: '100px' }}>
      <div className="experience-container">
        <div className="section-header">
          <span>{`// section.experience`}</span>
          <h2>Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="terminal-card">
                <div className="terminal-bar">
                  <div className="terminal-dot red" />
                  <div className="terminal-dot yellow" />
                  <div className="terminal-dot green" />
                  <span className="terminal-title">{exp.file}</span>
                </div>
                <div className="terminal-body">
                  <div className="exp-header">
                    <div>
                      <div className="exp-role">{exp.role}</div>
                      <div className="exp-company">{exp.company}</div>
                    </div>
                    <div className="exp-meta">
                      <div>{exp.dates}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                  <div className="exp-tags">
                    {exp.tags.map((tag, j) => (
                      <span className="exp-tag" key={j}>{tag}</span>
                    ))}
                  </div>
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

const skillCategories = [
  { title: '// Languages', type: 'lang', skills: ['Java', 'C', 'Python', 'JavaScript', 'TypeScript'] },
  { title: '// Backend', type: 'backend', skills: ['Spring Boot', 'REST APIs', 'Hibernate/JPA', 'Microservices'] },
  { title: '// Frontend', type: 'frontend', skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'] },
  { title: '// Databases', type: 'db', skills: ['MySQL', 'Firebase (NoSQL)'] },
  { title: '// Cloud & DevOps', type: 'cloud', skills: ['Microsoft Azure', 'Jenkins (CI/CD)', 'Git', 'GitHub', 'GitLab'] },
  { title: '// AI & Observability', type: 'ai', skills: ['Generative AI', 'LLM Prompt Engineering', 'Kibana', 'Jira'] },
  { title: '// CS Fundamentals', type: 'cs', skills: ['DSA', 'OOP & Design Principles', 'System Design'] },
];

export default function SkillsSection() {
  return (
    <section className="section" id="skills" style={{ alignItems: 'flex-start', paddingTop: '100px' }}>
      <div className="skills-container">
        <div className="section-header">
          <span>{`// section.skills`}</span>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div className="terminal-card" key={i}>
              <div className="terminal-bar">
                <div className="terminal-dot red" />
                <div className="terminal-dot yellow" />
                <div className="terminal-dot green" />
                <span className="terminal-title">{`skills_${cat.type}.ts`}</span>
              </div>
              <div className="terminal-body">
                <div className="skill-category-title">{cat.title}</div>
                <div className="skill-tags">
                  {cat.skills.map((skill, j) => (
                    <span className={`skill-tag ${cat.type}`} key={j}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

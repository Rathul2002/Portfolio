'use client';

import { useRef, useState } from 'react';

const projects = [
  {
    name: '⚡ FastIO — High Performance Java I/O',
    url: 'github.com/Rathul2002/FastIO',
    github: 'https://github.com/Rathul2002/FastIO.git',
    tags: ['Java', 'Low-Level I/O', 'Byte Buffers', 'Benchmarking', 'Performance'],
    desc: [
      'Built a custom high-performance I/O library replacing Scanner/BufferedReader with byte-level input parsing and manual output buffering for maximum throughput.',
      'Achieved 20x faster reads than Scanner (266ms vs 5242ms on 100MB) and 3.3x faster than BufferedReader — BufferedReader hit OOM at 1GB scale.',
      'Implemented custom parsers for int, long, float, double, and String with explicit newline handling and scientific notation support.',
      'Demonstrated that buffering strategy and minimizing system calls can be as impactful as algorithm optimization for data-heavy workloads.',
    ],
  },
  {
    name: 'Monthly Expense Tracker (Expenzers)',
    url: 'github.com/Rathul2002/Expenzers',
    github: 'https://github.com/Rathul2002/Expenzers',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Gemini API'],
    desc: [
      'Built an AI-powered expense tracking platform enhancing user experience through LLM-driven financial insights and decision support.',
      'Engineered prompt pipelines to generate context-aware financial recommendations using LLM APIs.',
      'Integrated authentication, database, and hosting using Firebase.',
    ],
  },
  {
    name: 'Online Voting System',
    url: 'github.com/Rathul2002/Voting-System',
    github: 'https://github.com/Rathul2002/Voting-System',
    tags: ['Java', 'Spring Boot', 'Hibernate/JPA', 'REST APIs', 'MySQL', 'Azure', 'JavaScript'],
    desc: [
      'Architected a full-stack secure voting platform featuring voter registration, EPIC ID + DOB verification, and OTP-based authentication via email.',
      'Deployed an Azure-hosted MySQL database and stress-tested the system against 500+ concurrent requests, validating backend stability under peak load.',
      'Enforced idempotent vote submission logic at the API layer, preventing duplicate entries and guaranteeing data integrity under concurrent access.',
    ],
  },
  {
    name: 'Smart City Vehicle Monitoring',
    url: 'github.com/Rathul2002/Smart-City-Vehicle-Monitoring',
    github: 'https://github.com/Rathul2002/Smart-City-Vehicle-Monitoring',
    tags: ['Python', 'TensorFlow', 'NumPy', 'Pandas'],
    desc: [
      'Constructed a real-time vehicle speed detection pipeline using TensorFlow — processed live video frames, flagged violations, and triggered automated email alerts.',
      'Uncovered congestion patterns from vehicle movement datasets and extended the system with a pothole detection module achieving ~88% accuracy on test data.',
    ],
  },
];

export default function ProjectsSection() {
  const scrollWrapperRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const animationRef = useRef(null);

  const applyMomentum = () => {
    if (Math.abs(velocityRef.current) < 0.5) {
      velocityRef.current = 0;
      return;
    }

    velocityRef.current *= 0.97; // Friction (higher = slower)
    scrollWrapperRef.current.scrollLeft -= velocityRef.current;

    animationRef.current = requestAnimationFrame(applyMomentum);
  };

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollWrapperRef.current.offsetLeft);
    setScrollLeft(scrollWrapperRef.current.scrollLeft);
    lastXRef.current = e.pageX;
    velocityRef.current = 0;
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    scrollWrapperRef.current.style.scrollBehavior = 'auto';
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollWrapperRef.current) {
        scrollWrapperRef.current.style.scrollBehavior = 'smooth';
      }
      applyMomentum();
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollWrapperRef.current) {
      scrollWrapperRef.current.style.scrollBehavior = 'smooth';
    }
    applyMomentum();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollWrapperRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    const currentX = e.pageX;
    
    velocityRef.current = (lastXRef.current - currentX) * 0.5; // Reduced velocity multiplier
    lastXRef.current = currentX;
    
    scrollWrapperRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="section" id="projects" style={{ alignItems: 'flex-start', paddingTop: '100px' }}>
      <div style={{ width: '100%' }}>
        <div className="section-header">
          <span>{`// section.projects`}</span>
          <h2>Projects</h2>
        </div>

        <div className="projects-scroll-wrapper">
          <div 
            className="projects-scroll"
            ref={scrollWrapperRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {projects.map((project, i) => (
              <div className="terminal-card project-card" key={i}>
                <div className="terminal-bar">
                  <div className="terminal-dot red" />
                  <div className="terminal-dot yellow" />
                  <div className="terminal-dot green" />
                  <span className="terminal-title">{project.name}</span>
                </div>
                <div className="project-url">{project.url}</div>
                <div className="terminal-body">
                  <h3 className="project-name">{project.name}</h3>
                  <div className="exp-tags" style={{ marginBottom: '16px' }}>
                    {project.tags.map((tag, j) => (
                      <span className="exp-tag" key={j}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-desc">
                    {project.desc.map((d, j) => (
                      <p key={j} style={{ marginBottom: '8px' }}>{'> '}{d}</p>
                    ))}
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    $ git clone <span style={{ color: '#79c0ff' }}>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="scroll-hint">
            <span>← drag to scroll →</span>
          </div>
        </div>
      </div>
    </section>
  );
}

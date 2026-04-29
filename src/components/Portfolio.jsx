'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';
import ContactSection from './ContactSection';

const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];

export default function Portfolio() {
  const scrollProgress = useRef(0);
  const [loading, setLoading] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const hasRunRef = useRef(false);

  useEffect(() => {
    // Prevent loading animation from running multiple times
    if (hasRunRef.current) {
      setLoading(false);
      return;
    }
    hasRunRef.current = true;

    let progress = 0;
    let interval;
    let timeout;

    setLoading(true);
    setLoadProgress(0);

    interval = setInterval(() => {
      progress += Math.random() * 15 + 5;
      if (progress >= 100) {
        progress = 100;
        setLoadProgress(100);
        timeout = setTimeout(() => {
          setLoading(false);
          hasRunRef.current = true;
        }, 400);
        clearInterval(interval);
      } else {
        setLoadProgress(progress);
      }
    }, 150);

    // Absolute failsafe: hide loading after 3 seconds
    const failsafeTimeout = setTimeout(() => {
      setLoading(false);
      setLoadProgress(100);
      clearInterval(interval);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      clearTimeout(failsafeTimeout);
    };
  }, []);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.current = docHeight > 0 ? scrollTop / docHeight : 0;

    // Determine active section
    const sections = sectionIds.map((id) => document.getElementById(id));
    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i]) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          setActiveSection(i);
          break;
        }
      }
    }

    // Fade-up animation
    document.querySelectorAll('.fade-up').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        el.classList.add('visible');
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (index) => {
    const el = document.getElementById(sectionIds[index]);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Loading screen */}
      <div className={`loader ${!loading ? 'hidden' : ''}`}>
        <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan)', fontSize: '1.2rem' }}>
          {'<RC />'}
        </div>
        <div className="loader-bar">
          <div className="loader-fill" style={{ width: `${loadProgress}%` }} />
        </div>
        <div className="loader-text">initializing portfolio...</div>
      </div>

      {/* Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Side navigation dots */}
      <div className="side-nav">
        {sectionIds.map((id, i) => (
          <button
            key={id}
            className={`side-dot ${activeSection === i ? 'active' : ''}`}
            onClick={() => scrollToSection(i)}
            title={id}
          />
        ))}
      </div>

      {/* Scrollable HTML overlay */}
      <div className="scroll-overlay">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </>
  );
}

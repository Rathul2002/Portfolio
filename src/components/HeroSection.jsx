'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const email = 'rathul95@gmail.com';

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      // Open mailto link
      window.location.href = `mailto:${email}`;
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section className="section" id="home" style={{ alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '8vw' }}>
      <div className="hero-content">
        <p className="hero-greeting">{`> hello_world()`}</p>
        <h1 className="hero-name">Rathul<br />Chowdhury</h1>
        <p className="hero-title">
          Software Developer | Full-Stack Developer
          <span className="cursor"></span>
        </p>
        <p className="hero-tagline">{`// Building scalable, production-grade applications`}</p>
        <div className="hero-links">
          <Link href="https://github.com/Rathul2002" target="_blank" rel="noopener noreferrer" className="hero-link">
            ⌘ GitHub
          </Link>
          <Link href="https://linkedin.com/in/rathul2002" target="_blank" rel="noopener noreferrer" className="hero-link">
            ⌘ LinkedIn
          </Link>
          <button 
            onClick={handleEmailClick} 
            className="hero-link email-button"
            title="Click to copy email"
          >
            ⌘ {copied ? 'Copied!' : 'Email'}
            {copied && <span className="copy-popup">Email copied to clipboard!</span>}
          </button>
          <Link href="tel:+918777096184" className="hero-link">
            ⌘ +91 8777096184
          </Link>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>scroll to explore</span>
        <span>↓</span>
      </div>
    </section>
  );
}

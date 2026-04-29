'use client';

import { useState } from 'react';

const sections = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];

export default function Navbar({ activeSection = 0 }) {
  const [open, setOpen] = useState(false);

  const handleClick = (section) => {
    setOpen(false);
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span>~/</span>rathul<span> $</span>
      </div>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {sections.map((s, i) => (
          <li key={s}>
            <button
              className={`nav-link ${activeSection === i ? 'active' : ''}`}
              onClick={() => handleClick(s)}
            >
              {s}
            </button>
          </li>
        ))}
      </ul>
      <button className="nav-hamburger" onClick={() => setOpen(!open)}>
        {open ? '✕' : '☰'}
      </button>
    </nav>
  );
}

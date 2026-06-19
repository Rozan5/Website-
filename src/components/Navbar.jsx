import { useState } from 'react';
import logoImg from '../assets/WhatsApp_Image_2026-06-17_at_1.46.55_PM-removebg-preview.png';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <a href="#home" className="nav-logo">
        <img src={logoImg} alt="Need Technosoft Logo" className="logo-img" />
      </a>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#contact" className="nav-cta">Get Started</a></li>
      </ul>
      <button 
        className={`hamburger ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#process" onClick={() => setIsOpen(false)}>Process</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
      </div>
    </nav>
  );
}

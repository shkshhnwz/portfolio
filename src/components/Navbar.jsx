import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        padding: '1rem 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10, 10, 11, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Portfolio<span className="text-gradient">.</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="nav-desktop">
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={(e) => handleScrollTo(e, link.href)}
                  style={{ fontSize: '0.95rem', fontWeight: '500' }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="nav-mobile-btn"
          style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', display: 'block' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          background: 'rgba(10, 10, 11, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '1rem 0'
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={(e) => handleScrollTo(e, link.href)}
                  style={{ fontSize: '1.1rem', fontWeight: '500' }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          .nav-desktop { display: block !important; }
          .nav-mobile-btn { display: none !important; }
        }
      `}} />
    </motion.header>
  );
};

export default Navbar;

import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'rgba(10, 10, 11, 0.8)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255, 255, 255, 0.05)', padding: '3rem 0', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        
        <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
          Shahnawaz<span className="text-gradient">.</span>
        </h2>
        
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/shkshhnwz" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} className="hover-icon" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/shahnawaz-shaikh-654326314" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} className="hover-icon" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="mailto:shahnawazshaikh67967@gmail.com" style={{ color: 'var(--text-secondary)' }} className="hover-icon" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
        
        <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            Built with <Heart size={16} fill="var(--accent-primary)" color="var(--accent-primary)" /> by Shahnawaz Shaikh
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hover-icon {
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .hover-icon:hover {
          color: var(--accent-primary) !important;
          transform: translateY(-3px);
        }
      `}} />
    </footer>
  );
};

export default Footer;

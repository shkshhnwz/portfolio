import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '999px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1.5rem', border: '1px solid rgba(99, 102, 241, 0.2)' }}
        >
          👋 Welcome to my portfolio
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: '1.1', marginBottom: '1.5rem' }}
        >
          Hi, I'm <br/>
          <span className="text-gradient">Shahnawaz Shaikh</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: '1.8' }}
        >
          A passionate software developer specializing in building modern web applications. Currently pursuing B.Sc. IT and focusing on crafting engaging digital experiences.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          
          <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
            <a href="https://github.com/shkshhnwz" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.75rem' }} aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shahnawaz-shaikh-654326314" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.75rem' }} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:shahnawazshaikh67967@gmail.com" className="btn-secondary" style={{ padding: '0.75rem' }} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

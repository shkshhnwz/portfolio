import React from 'react';
import AnimatedSection from './AnimatedSection';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "ExpenseCare",
      date: "Oct 2025 – Dec 2025",
      description: "Expense Splitter for Shared Living and Group travel. Built and deployed a full-stack web app to track and split shared expenses. Implemented equal/unequal split logic, group-based tracking, and settlements.",
      features: [
        "MongoDB database for users, groups, and transactions",
        "Firebase Authentication for secure login",
        "PDF export functionality for settlement reports"
      ],
      techStack: ["Node.js", "Express.js", "MongoDB", "Firebase Auth", "JavaScript", "HTML", "CSS", "Bootstrap"],
      liveUrl: "https://expense-spliiter-for-shared-living.onrender.com",
      githubUrl: "https://github.com/shkshhnwz/expense-spliiter-for-shared-living"
    },
    {
      title: "Second Project Title",
      date: "Jan 2026 – Present",
      description: "Add your second project description here.",
      features: [
        "Key feature 1",
        "Key feature 2",
        "Key feature 3"
      ],
      techStack: ["React", "Tailwind CSS", "Node.js"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "tween", duration: 0.5 } }
  };

  return (
    <AnimatedSection id="projects">
      <h2 className="section-title">Featured Projects</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {projects.map((project, projIndex) => (
          <div key={projIndex} className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <Folder className="text-gradient" size={24} style={{ color: 'var(--accent-primary)' }} />
                  <h3 style={{ fontSize: '1.8rem', color: '#fff' }}>{project.title}</h3>
                </div>
                <span style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>{project.date}</span>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                {project.githubUrl !== "#" && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.5rem 1rem' }} aria-label="GitHub Repository">
                    <Github size={18} /> Code
                  </a>
                )}
                {project.liveUrl !== "#" && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.5rem 1rem' }} aria-label="Live Demo">
                    <ExternalLink size={18} /> Live Site
                  </a>
                )}
              </div>
            </div>

            <div style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              <p style={{ marginBottom: '1rem' }}>{project.description}</p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1rem' }}>Tech Stack</h4>
              <motion.div 
                className="tech-stack"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}
              >
                {project.techStack.map((tech, index) => (
                  <motion.span 
                    key={index}
                    variants={itemVariants}
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid rgba(255, 255, 255, 0.1)', 
                      padding: '0.4rem 1rem', 
                      borderRadius: '999px',
                      fontSize: '0.85rem',
                      color: 'var(--text-primary)',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}
                    whileHover={{ y: -3, background: 'rgba(99, 102, 241, 0.15)', borderColor: 'rgba(99, 102, 241, 0.4)' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;

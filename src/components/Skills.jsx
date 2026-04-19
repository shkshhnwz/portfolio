import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-gradient" size={24} style={{ color: 'var(--accent-primary)' }} />,
      skills: ["JavaScript", "React", "HTML", "CSS", "Bootstrap", "Framer Motion"]
    },
    {
      title: "Backend Development",
      icon: <Code2 className="text-gradient" size={24} style={{ color: 'var(--accent-secondary)' }} />,
      skills: ["Node.js", "Express.js","Redis","Postman"]
    },
    {
      title: "Databases & Auth",
      icon: <Database className="text-gradient" size={24} style={{ color: 'var(--accent-primary)' }} />,
      skills: ["MongoDB", "Firebase Authentication"]
    },
    {
      title: "Tools & Version Control",
      icon: <GitBranch className="text-gradient" size={24} style={{ color: 'var(--accent-secondary)' }} />,
      skills: ["Git", "GitHub", "Vite", "npm"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "tween", duration: 0.5 } }
  };

  return (
    <AnimatedSection id="skills">
      <h2 className="section-title">Technical Skills</h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}
      >
        {skillCategories.map((category, idx) => (
          <motion.div key={idx} variants={cardVariants} className="glass" style={{ padding: '2rem', borderRadius: '20px', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '12px' }}>
                {category.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>{category.title}</h3>
            </div>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {category.skills.map((skill, sIdx) => (
                <li key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)' }} />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default Skills;

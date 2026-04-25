import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Award, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { link } from 'framer-motion/client';

const Achievements = () => {
  const items = [
    {
      title: "Research Paper Writing Competition",
      description: "Participated and showcased research skills in an academic paper writing competition.",
      link: "https://www.linkedin.com/posts/shahnawaz-shaikh-654326314_edtech-educationinnovation-researchpresentation-activity-7305875982781931520-hjRE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE_IMiABIjkjiarh8vY5JbxYAjK5MfJYUI0",
      icon: <Award size={24} style={{ color: 'var(--accent-primary)' }} />
    },
    {
      title: "Hackathon Participant",
      description: "Actively participated in 2 Hackathons, building innovative solutions under time constraints and collaborating with peers.",
      link: "https://www.linkedin.com/posts/shahnawaz-shaikh-654326314_webdesign-hackathon-fooddeliveryapp-activity-7298538344680976384-V-qw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE_IMiABIjkjiarh8vY5JbxYAjK5MfJYUI0",
      icon: <Trophy size={24} style={{ color: 'var(--accent-secondary)' }} />
    }
  ];

  return (
    <AnimatedSection id="achievements">
      <h2 className="section-title">Achievements & Activities</h2>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="glass"
            style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', borderRadius: '16px', transition: 'transform 0.3s ease, background 0.3s ease' }}
            whileHover={{ x: 10, background: 'rgba(255,255,255,0.05)' }}
          >
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', flexShrink: 0 }}>
              {item.icon}
            </div>

            <div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button className="btn-primary" style={{ padding: '0.5rem 1rem', marginTop: '1rem' }}>View</button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Achievements;

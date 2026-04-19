import React from 'react';
import AnimatedSection from './AnimatedSection';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <AnimatedSection id="education">
      <h2 className="section-title">Education</h2>
      
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'var(--accent-gradient)', filter: 'blur(80px)', opacity: 0.3, zIndex: 0 }} />
        
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ 
            background: 'rgba(99, 102, 241, 0.1)', 
            width: '60px', 
            height: '60px', 
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'var(--accent-primary)',
            flexShrink: 0
          }}>
            <GraduationCap size={32} />
          </div>
          
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>
              B.Sc. Information Technology
            </h3>
            
            <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-secondary)', marginBottom: '1rem', fontWeight: 500 }}>
              Vidyalankar School of Information & Technology
            </h4>
            
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} />
                <span>Mumbai, India</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={16} />
                <span>2024 – 2027</span>
              </div>
            </div>
            
            <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Specializing in core computer science subjects, modern web development technologies, and software engineering principles. Building a strong foundation in programming, databases, and application architecture.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Education;

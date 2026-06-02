import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Building2, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <AnimatedSection id="experience">
            <h2 className="section-title">Experience</h2>

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
                        <Building2 size={32}/>
                    </div>

                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>
                            Web Development Intern
                        </h3>

                        <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-secondary)', marginBottom: '1rem', fontWeight: 500 }}>
                            Nexus Migration
                        </h4>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <MapPin size={16} />
                                <span>Mumbai, India</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={16} />
                                <span>May 2026 – Present</span>
                            </div>
                        </div>

                        <p style={{ marginTop: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            -Managing and maintaining the company website using WordPress and handling ongoing website operations<br/>
                            -Developing a full-stack MERN web application for the organization<br/>
                            -Working on responsive UI development, frontend enhancements, and backend integration<br/>
                            -Building reusable React components and implementing API-based functionality<br/>
                            -Assisting with database management, application structure, and deployment workflows<br/>
                            -Collaborating with the team on feature development, optimization, and technical improvements<br/>
                            -Gaining hands-on experience with real-world production systems, web management, and full-stack development  workflows.<br/>           </p>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Experience;

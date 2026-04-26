import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Cloud, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Certification = () => {
    const certifications = [
        {
            title: 'Amazon Cloud Foundation',
            date: 'April 2026',
            description: 'Completed the AWS Academy Cloud Foundations program covering core cloud computing concepts including AWS global infrastructure, core services, cloud security, pricing models, and support plans. Verified by Credly.',
            link: 'https://www.credly.com/badges/f81a9499-3ade-4c9f-9cbd-997871965b11',
            icon: <Cloud size={24} style={{ color: 'var(--accent-primary)' }} />
        }
    ];

    return (
        <AnimatedSection id="certifications">
            <h2 className="section-title">Certifications</h2>

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        className="glass"
                        style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', borderRadius: '16px', transition: 'transform 0.3s ease, background 0.3s ease' }}
                        whileHover={{ x: 10, background: 'rgba(255,255,255,0.05)' }}
                    >
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '12px', flexShrink: 0 }}>
                            {cert.icon}
                        </div>

                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.25rem' }}>{cert.title}</h3>
                            <p style={{ color: 'var(--accent-secondary)', fontWeight: 500, marginBottom: '1rem' }}>{cert.date}</p>

                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                                {cert.description}
                            </p>

                            {cert.link && (
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', marginTop: '0.5rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                                    <span>View Credential</span>
                                    <ExternalLink size={14} />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </AnimatedSection>
    );
};

export default Certification;

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '8px 12px',
          borderRadius: 999,
          background: scrolled
            ? 'rgba(13,13,13,0.85)'
            : 'rgba(13,13,13,0.6)',
          backdropFilter: 'blur(16px)',
          border: '1px solid var(--border)',
          transition: 'background 0.3s ease',
        }}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontSize: 13,
              fontWeight: 400,
              color: 'var(--text-secondary)',
              padding: '6px 14px',
              borderRadius: 999,
              transition: 'color 0.2s ease, background 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(232,232,226,0.06)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}

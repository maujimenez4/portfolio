import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const socials = [
  { label: 'GitHub', href: 'https://github.com/maujimenez4' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mauricio-jiménez-ortiz' },
  { label: 'Email', href: 'mailto:mauricio.jimenez.vi@gmail.com' },
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(232,232,226,0.03)',
  border: '1px solid var(--border)',
  borderRadius: 10,
  padding: '14px 18px',
  fontSize: 14,
  color: 'var(--text-primary)',
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
  transition: 'border-color 0.2s',
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('https://formspree.io/f/xykoejgy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '120px 24px 160px',
      }}
    >
      <div
        style={{
          borderTop: '1px solid var(--border)',
          paddingTop: 80,
        }}
      >
        <FadeIn>
          <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 24 }}>
            Contact
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
              lineHeight: 1.05,
              marginBottom: 60,
            }}
          >
            Let's work
            <br />
            together.
          </h2>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 60,
            alignItems: 'start',
          }}
        >
          {/* Socials */}
          <FadeIn delay={0.2}>
            <div>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 28, lineHeight: 1.7 }}>
                Open to freelance projects, full-time roles, and interesting collaborations.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      padding: '10px 0',
                      borderBottom: '1px solid var(--border)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                    }}
                  >
                    {s.label}
                    <span style={{ fontSize: 12, opacity: 0.5 }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.3}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: '40px',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: 20, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8 }}>
                  Message sent.
                </p>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>
                  I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(240,240,238,0.2)'; }}
                  onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--border)'; }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(240,240,238,0.2)'; }}
                  onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'var(--border)'; }}
                />
                <textarea
                  placeholder="Message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(240,240,238,0.2)'; }}
                  onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'var(--border)'; }}
                />

                {error && (
                  <p style={{ fontSize: 13, color: '#ef4444', textAlign: 'center' }}>
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: '14px',
                    borderRadius: 10,
                    border: '1px solid rgba(240,240,238,0.2)',
                    background: loading ? 'rgba(240,240,238,0.03)' : 'rgba(240,240,238,0.06)',
                    color: loading ? 'var(--text-secondary)' : 'var(--text-primary)',
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: loading ? 'default' : 'none',
                    transition: 'background 0.2s, border-color 0.2s',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(240,240,238,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(240,240,238,0.06)';
                  }}
                >
                  {loading ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
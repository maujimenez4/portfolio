import FadeIn from './FadeIn';

const stats = [
  { value: '5+', label: 'Projects' },
  { value: '4+', label: 'Years' },
  { value: '2', label: 'Certs' },
];

const certs = [
  { name: 'Microsoft Azure AI-900', issuer: 'Microsoft' },
  { name: 'Oracle Next Education', issuer: 'Oracle · Backend' },
];

const blockStyle: React.CSSProperties = {
  background: 'rgba(232,232,226,0.03)',
  border: '1px solid var(--border)',
  borderRadius: 16,
  padding: 28,
};

export default function About() {
  return (
    <section
      id="about"
      style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '120px 24px',
      }}
    >
      <FadeIn>
        <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 16 }}>
          About
        </p>
      </FadeIn>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gridTemplateRows: 'auto auto',
          gap: 12,
        }}
      >
        {/* Bio — spans full width on top */}
        <FadeIn delay={0.1} style={{ gridColumn: '1 / -1' }}>
          <div style={{ ...blockStyle, padding: '36px 40px' }}>
            <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3, color: 'var(--text-primary)', marginBottom: 20 }}>
              Building systems that think, automate, and scale.
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 640 }}>
              I'm Mauricio Jiménez, a Software Developer specializing in AI integration and automation. I graduated in Computer Systems Engineering from UNITEC and work as a Tech Support & Automation specialist — bridging the gap between complex systems and real-world workflows.
            </p>
          </div>
        </FadeIn>

        {/* Stats */}
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={0.15 + i * 0.07}>
            <div style={{ ...blockStyle, textAlign: 'center' }}>
              <p style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--text-primary)', lineHeight: 1 }}>
                {stat.value}
              </p>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 8, fontWeight: 400 }}>
                {stat.label}
              </p>
            </div>
          </FadeIn>
        ))}

        {/* Certifications */}
        <FadeIn delay={0.3} style={{ gridColumn: '1 / -1' }}>
          <div style={blockStyle}>
            <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 20 }}>
              Certifications
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {certs.map((cert) => (
                <div key={cert.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-primary)' }}>{cert.name}</span>
                  <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn delay={0.35}>
          <div style={blockStyle}>
            <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 16 }}>
              Education
            </p>
            <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-primary)' }}>Computer Systems Engineering</p>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4 }}>UNITEC · 2022–2026</p>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 6, fontStyle: 'italic' }}>Graduate</p>
          </div>
        </FadeIn>

        {/* Location */}
        <FadeIn delay={0.4}>
          <div style={{ ...blockStyle, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 16 }}>
              Based In
            </p>
            <p style={{ fontSize: 22, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              Mexico City 🇲🇽
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
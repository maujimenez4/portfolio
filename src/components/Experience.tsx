import FadeIn from './FadeIn';

const experience = [
  {
    role: 'Tech Support & Automation',
    company: 'UNITEC',
    period: '2025 – 2026',
    description: 'Led automation of administrative workflows using Power Automate, Microsoft Forms, and SharePoint. Designed automated pipelines that eliminated weeks of manual data entry per academic cycle.',
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '120px 24px',
      }}
    >
      <FadeIn>
        <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 16 }}>
          Experience
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: 60 }}>
          Where I've worked
        </h2>
      </FadeIn>

      <div style={{ position: 'relative' }}>
        {/* Timeline line */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 1,
            background: 'var(--border)',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {experience.map((item, i) => (
            <FadeIn key={item.company} delay={0.15 + i * 0.1}>
              <div style={{ paddingLeft: 36, position: 'relative' }}>
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: -3,
                    top: 6,
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    border: '1px solid rgba(240,240,238,0.3)',
                    background: 'var(--bg)',
                  }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                      {item.role}
                    </h3>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 4 }}>
                      {item.company}
                    </p>
                  </div>
                  <span style={{ fontSize: 13, color: 'var(--text-secondary)', fontVariantNumeric: 'tabular-nums' }}>
                    {item.period}
                  </span>
                </div>

                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 600 }}>
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 1100,
        margin: '0 auto',
        flexWrap: 'wrap',
        gap: 8,
      }}
    >
      <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
        © 2025 Mauricio Jiménez Ortiz
      </p>
      <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
        Built with React · Vite · Framer Motion
      </p>
    </footer>
  );
}

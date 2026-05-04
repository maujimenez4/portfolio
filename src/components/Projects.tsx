import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories, type ProjectCategory, type Project } from '../data/projects';
import FadeIn from './FadeIn';

function ProjectCard({ project }: { project: Project }) {
  const cardContent = (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className="project-card"
      style={{
        position: 'relative',
        borderRadius: 16,
        overflow: 'hidden',
        border: '1px solid var(--border)',
        background: '#111',
        cursor: project.live ? 'pointer' : 'default',
        minHeight: 320,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
        const thumb = e.currentTarget.querySelector('.thumb-bg') as HTMLElement;
        if (thumb) {
          thumb.style.transform = 'scale(1.05)';
          thumb.style.filter = 'brightness(0.65)';
        }
        const desc = e.currentTarget.querySelector('.card-desc') as HTMLElement;
        if (desc) desc.style.opacity = '1';
        const stack = e.currentTarget.querySelector('.card-stack') as HTMLElement;
        if (stack) stack.style.opacity = '1';
        const content = e.currentTarget.querySelector('.card-content') as HTMLElement;
        if (content) content.style.transform = 'translateY(0)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 transparent';
        const thumb = e.currentTarget.querySelector('.thumb-bg') as HTMLElement;
        if (thumb) {
          thumb.style.transform = 'scale(1)';
          thumb.style.filter = 'brightness(0.35)';
        }
        const desc = e.currentTarget.querySelector('.card-desc') as HTMLElement;
        if (desc) desc.style.opacity = '0';
        const stack = e.currentTarget.querySelector('.card-stack') as HTMLElement;
        if (stack) stack.style.opacity = '0';
        const content = e.currentTarget.querySelector('.card-content') as HTMLElement;
        if (content) content.style.transform = 'translateY(10px)';
      }}
    >
      {/* Thumbnail con efecto hover */}
      <div
        className="thumb-bg"
        style={{
          position: 'absolute',
          inset: 0,
          background: project.thumbnail
            ? `url(${project.thumbnail}) center/cover no-repeat`
            : 'linear-gradient(135deg, #1a1a1a 0%, #111 100%)',
          transform: 'scale(1)',
          filter: 'brightness(0.35)',
          transition: 'transform 0.5s ease, filter 0.5s ease',
        }}
      />

      {/* Gradiente overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.4) 60%, rgba(10,10,10,0.1) 100%)',
          zIndex: 1,
        }}
      />

      {/* Contenido — sube al hacer hover */}
      <div
        className="card-content"
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '24px 28px',
          transform: 'translateY(10px)',
          transition: 'transform 0.4s ease',
        }}
      >
        <div style={{ marginBottom: 10 }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              background: 'rgba(232,232,226,0.06)',
              border: '1px solid var(--border)',
              padding: '3px 10px',
              borderRadius: 999,
            }}
          >
            {project.category}
          </span>
        </div>

        <h3
          style={{
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            marginBottom: 8,
          }}
        >
          {project.name}
        </h3>

        {/* Descripción — aparece al hover */}
        <p
          className="card-desc"
          style={{
            fontSize: 13,
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: 12,
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          {project.description}
        </p>

        {/* Stack — aparece al hover */}
        <p
          className="card-stack"
          style={{
            fontSize: 11,
            color: 'rgba(107,107,107,0.7)',
            letterSpacing: '0.04em',
            marginBottom: 18,
            opacity: 0,
            transition: 'opacity 0.3s ease 0.05s',
          }}
        >
          {project.stack.join(' · ')}
        </p>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: 'var(--text-secondary)',
                border: '1px solid var(--border)',
                padding: '6px 16px',
                borderRadius: 999,
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(232,232,226,0.2)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
              }}
            >
              GitHub →
            </a>
          )}
          {project.live && (
            <span
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: 'var(--text-secondary)',
              }}
            >
              Click to open ↗
            </span>
          )}
          {project.caseStudyOnly && (
            <span
              style={{
                fontSize: 12,
                color: 'var(--text-secondary)',
                fontStyle: 'italic',
              }}
            >
              Case study only
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );

  // Si tiene live URL, la card entera es clickeable
  if (project.live) {
    return (
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', display: 'block' }}
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory>('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '120px 24px',
      }}
    >
      <FadeIn>
        <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 16 }}>
          Projects
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--text-primary)' }}>
            Selected work
          </h2>
          <div style={{ display: 'flex', gap: 6 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  padding: '6px 14px',
                  borderRadius: 999,
                  border: '1px solid',
                  borderColor: active === cat ? 'rgba(240,240,238,0.3)' : 'var(--border)',
                  color: active === cat ? 'var(--text-primary)' : 'var(--text-secondary)',
                  background: active === cat ? 'rgba(240,240,238,0.06)' : 'transparent',
                  cursor: 'none',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
            gap: 16,
          }}
        >
          {filtered.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
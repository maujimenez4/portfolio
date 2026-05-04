export type ProjectCategory = 'All' | 'AI' | 'Automation' | 'Data' | 'Creative';

export interface Project {
  name: string;
  category: Exclude<ProjectCategory, 'All'>;
  stack: string[];
  description: string;
  github?: string;
  live?: string;
  thumbnail: string;
  caseStudyOnly?: boolean;
}

export const projects: Project[] = [
  {
    name: 'Restaura AI',
    category: 'AI',
    stack: ['Python', 'FastAPI', 'Celery', 'Redis', 'SwinIR', 'SDXL'],
    description: 'Orchestrates multiple AI models to restore old photos, generate art and create animations.',
    github: 'https://github.com/maujimenez4/restaura-ai',
    live: 'https://restaura-ai-frontend.onrender.com',
    thumbnail: '/thumbnails/restaura-thumbnail.png',
  },
  {
    name: 'Monitor Económico MX',
    category: 'Automation',
    stack: ['Python', 'pandas', 'Banxico API', 'INEGI API', 'Railway'],
    description: 'Automated pipeline that pulls Mexican economic indicators daily and delivers a formatted Excel report by email.',
    github: 'https://github.com/maujimenez4/monitor-economico-mx',
    live: 'https://monitor-economico-mx.up.railway.app',
    thumbnail: '/thumbnails/monitor-thumbnail.png',
  },
  {
    name: 'GesturePad',
    category: 'Creative',
    stack: ['React', 'TypeScript', 'MediaPipe', 'Canvas API', 'C# Unity'],
    description: 'Neural interface that turns hand gestures into real-time controls — a DJ deck and an arcade shooter.',
    github: 'https://github.com/maujimenez4/gesturepad',
    thumbnail: '/thumbnails/gesturepad-thumbnail.gif',
  },
  {
    name: 'Censos Automatizados — UNITEC',
    category: 'Automation',
    stack: ['Power Automate', 'Microsoft Forms', 'SharePoint', 'Excel Online'],
    description: 'Automated pipeline that captures student surveys and distributes data across 5 structured Excel tables. Eliminated ~2 weeks of manual work per cycle.',
    thumbnail: '/thumbnails/censos-thumbnail.png',
    caseStudyOnly: true,
  },
];

export const categories: ProjectCategory[] = ['All', 'AI', 'Automation', 'Data', 'Creative'];

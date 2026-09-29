export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  category: string;
  featured: boolean;
  year?: string;
  status?: string;
  technologies: string[];
  highlights?: string[];
  architecture?: string; 
  challenges?: string[];
  solutions?: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  images?: string[];
  metrics?: string[];
  tags: string[];
  image?: string; 
  credit?: string;
  accent?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'trms-enterprise-ai-rag',
    title: 'Enterprise AI / TRMS RAG Platform',
    shortDescription: 'Enterprise AI assistant combining document retrieval, semantic search, access control, and LLM-based response generation.',
    fullDescription: 'Organizations have large amounts of internal information that is difficult to search and use efficiently. This enterprise AI assistant solves this by combining document retrieval, semantic search, access control, and LLM-based response generation.',
    category: 'AI / GenAI',
    featured: true,
    technologies: ['Python', 'FastAPI', 'Qdrant', 'RAG', 'LLM APIs', 'MySQL', 'REST APIs', 'JWT', 'Embeddings', 'Semantic Search'],
    highlights: [
      'Document ingestion and synchronization',
      'Embeddings and vector search with Qdrant',
      'Semantic retrieval with metadata filtering',
      'Role-based access and authentication',
      'Conversation history and AI response generation',
      'Analytics and report generation'
    ],
    tags: ['AI', 'GenAI', 'RAG', 'LLM', 'Backend', 'FastAPI', 'Vector Search', 'Enterprise'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop',
    credit: 'AI & BACKEND',
    accent: '#7b61ff'
  },
  {
    id: '2',
    slug: 'chess-mentor-ai',
    title: 'Chess Mentor AI',
    shortDescription: 'AI learning platform combining chess-engine analysis with conversational AI.',
    fullDescription: 'Chess engines can identify strong moves but do not necessarily teach players why a move matters. This platform combines chess-engine analysis with conversational AI for interactive learning.',
    category: 'AI / GenAI',
    featured: true,
    technologies: ['Python', 'FastAPI', 'Stockfish', 'LLM', 'React', 'TypeScript'],
    highlights: [
      'Move explanations and tactical suggestions',
      'Opening guidance and post-game feedback',
      'AI coaching and interactive learning',
      'Game analysis and backend APIs'
    ],
    tags: ['AI', 'React', 'TypeScript', 'Backend', 'FastAPI'],
    githubUrl: 'https://github.com/Anshum25',
    image: 'https://pub-45c4a3d9611041d08fe82d52599b72b0.r2.dev/primary-showcase-assets/indigo-liquid-marble.jpg',
    credit: 'FULL STACK',
    accent: '#4356c8'
  },
  {
    id: '3',
    slug: 'manuscript-ai',
    title: 'ManuscriptAI / AI Descriptive Answer Evaluation',
    shortDescription: 'AI-powered evaluation of handwritten/descriptive examination answers.',
    category: 'AI / GenAI',
    featured: true,
    technologies: ['OCR'], // Only verified technologies
    highlights: [
      'OCR and handwritten answer processing',
      'Hindi/descriptive answers support',
      'Reference-answer comparison',
      'Semantic evaluation and reasoning-based grading',
      'Evaluation review and calibration'
    ],
    tags: ['AI', 'OCR'],
    image: 'https://pub-45c4a3d9611041d08fe82d52599b72b0.r2.dev/primary-showcase-assets/neon-portrait-uplight.jpg',
    credit: 'MACHINE LEARNING',
    accent: '#ff2f9c'
  },
  {
    id: '4',
    slug: 'erpnext-ai-invoice',
    title: 'ERPNext AI Invoice Automation',
    shortDescription: 'AI-powered enterprise document processing and ERP automation.',
    fullDescription: 'Manually entering invoice information into ERP systems is repetitive and error-prone. This system uses AI and vision models for structured extraction and ERP document generation.',
    category: 'Enterprise Systems',
    featured: true,
    technologies: ['AI', 'Vision Models', 'Backend APIs', 'ERPNext'],
    highlights: [
      'Document understanding and structured extraction',
      'Validation and ERPNext document drafting',
      'Human confirmation workflows',
      'Processing Sales Invoices, Purchase Invoices, and Delivery Notes'
    ],
    tags: ['AI', 'Enterprise', 'ERP'],
    image: 'https://pub-45c4a3d9611041d08fe82d52599b72b0.r2.dev/primary-showcase-assets/rocket-launch-gradient.jpg',
    credit: 'ENTERPRISE AI',
    accent: '#14307a'
  },
  {
    id: '5',
    slug: 'verdict-gps-erp',
    title: 'Verdict — GPS / ERPNext Enterprise Solution',
    shortDescription: 'Enterprise ERP workflow solution for GPS tracking device management.',
    category: 'Enterprise Systems',
    featured: false,
    technologies: ['ERPNext', 'Frappe Framework'],
    highlights: [
      'Device Sim Bundle and ICCID mapping',
      'Serial tracking, activation, and expiry workflows',
      'Subscription logs and renewal workflows',
      'Invoice integration and vehicle mapping',
      'Stock Entry automation'
    ],
    tags: ['Enterprise', 'ERP']
  },
  {
    id: '6',
    slug: 'erpnext-manufacturing-quality',
    title: 'ERPNext Manufacturing + Quality Engineering',
    shortDescription: 'Broad ERP engineering across Manufacturing, Quality, Inventory, and Sales.',
    category: 'Enterprise Systems',
    featured: false,
    technologies: ['ERPNext', 'SQL'],
    highlights: [
      'Custom reports, workflows, and business logic',
      'Role permissions and dashboards',
      'Backend scripts, client scripts, and SQL optimization'
    ],
    tags: ['Enterprise', 'ERP']
  },
  {
    id: '7',
    slug: 'customer-churn-prediction',
    title: 'Customer Churn Prediction Platform',
    shortDescription: 'Machine-learning platform for automated customer churn prediction and explainable recommendations.',
    category: 'Machine Learning',
    featured: false,
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'SHAP', 'FastAPI'],
    highlights: [
      'Feature engineering and prediction modeling',
      'SHAP explainability',
      'Business recommendation decision engine',
      'FastAPI inference'
    ],
    tags: ['Machine Learning', 'Backend', 'FastAPI', 'Python'],
    githubUrl: 'https://github.com/Anshum25',
    image: 'https://pub-45c4a3d9611041d08fe82d52599b72b0.r2.dev/primary-showcase-assets/neon-cave-portal-silhouette.jpg',
    credit: 'MACHINE LEARNING',
    accent: '#00c8ff'
  },
  {
    id: '8',
    slug: 'skyerp',
    title: 'SkyERP',
    shortDescription: 'Web-based enterprise resource planning platform.',
    category: 'Web / Full Stack',
    featured: false,
    technologies: [],
    tags: ['Web', 'Full Stack']
  },
  {
    id: '9',
    slug: 'skydot-nivasync',
    title: 'SkyDot / NivaSync Website',
    shortDescription: 'Frontend architecture and responsive UI for company website.',
    category: 'Web / Full Stack',
    featured: false,
    technologies: ['React', 'Next.js', 'Tailwind'],
    highlights: [
      'Frontend architecture and responsive UI',
      'Component systems and animations',
      'Deployment and UI implementation'
    ],
    tags: ['React', 'Web', 'Full Stack']
  }
];

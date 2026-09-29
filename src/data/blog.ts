export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  tags: string[];
  content: string;
  published: boolean;
  featured: boolean;
  relatedProjectSlug?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-enterprise-rag-system',
    title: 'Building an Enterprise RAG System',
    excerpt: 'What I learned while building an enterprise Retrieval-Augmented Generation system using FastAPI, Qdrant, embeddings, metadata filtering, and LLM APIs.',
    category: 'AI Engineering',
    date: 'Draft',
    readingTime: '5 min read',
    tags: ['RAG', 'FastAPI', 'Qdrant', 'LLM'],
    content: `[Draft Content: Document retrieval, embeddings, vector search, metadata filtering, access control, context construction, API architecture, practical challenges.]`,
    published: false,
    featured: true,
    relatedProjectSlug: 'trms-enterprise-ai-rag'
  },
  {
    slug: 'rag-more-than-chat',
    title: 'RAG Is More Than "Chat With Your Documents"',
    excerpt: 'Why a production RAG system involves much more than connecting an LLM to a vector database.',
    category: 'Generative AI',
    date: 'Draft',
    readingTime: '6 min read',
    tags: ['GenAI', 'RAG', 'Architecture'],
    content: `[Draft Content: Ingestion, chunking, embeddings, retrieval, filtering, authorization, context quality, response generation, evaluation.]`,
    published: false,
    featured: false
  },
  {
    slug: 'designing-fastapi-backends-ai',
    title: 'Designing FastAPI Backends for AI Applications',
    excerpt: 'Lessons from building AI APIs: authentication, validation, state, and inference integration.',
    category: 'Backend Engineering',
    date: 'Draft',
    readingTime: '7 min read',
    tags: ['FastAPI', 'Backend', 'Python', 'API Design'],
    content: `[Draft Content: Authentication, API structure, request validation, conversation history, database access, error handling, pagination, analytics, inference integration.]`,
    published: false,
    featured: true
  },
  {
    slug: 'building-ai-chess-coach',
    title: 'Building an AI Chess Coach',
    excerpt: 'The architecture of combining Stockfish, LLMs, React, and FastAPI to create a chess learning platform.',
    category: 'AI Applications',
    date: 'Draft',
    readingTime: '4 min read',
    tags: ['Stockfish', 'LLM', 'React', 'FastAPI'],
    content: `[Draft Content: Explains why an engine's best move is not always the same as a useful explanation for a learner.]`,
    published: false,
    featured: true,
    relatedProjectSlug: 'chess-mentor-ai'
  },
  {
    slug: 'erpnext-software-engineering',
    title: 'What ERPNext Taught Me About Software Engineering',
    excerpt: 'How working with enterprise ERP systems exposes engineers to real business workflows and data consistency challenges.',
    category: 'Enterprise Engineering',
    date: 'Draft',
    readingTime: '8 min read',
    tags: ['ERPNext', 'Enterprise', 'Software Engineering'],
    content: `[Draft Content: Business workflows, permissions, data consistency, inventory, purchasing, sales, manufacturing, automation, reporting, edge cases.]`,
    published: false,
    featured: false,
    relatedProjectSlug: 'erpnext-manufacturing-quality'
  }
];

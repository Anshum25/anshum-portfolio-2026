import os

src_dir = 'src'
components_dir = os.path.join(src_dir, 'components')
pages_dir = os.path.join(src_dir, 'pages')
data_dir = os.path.join(src_dir, 'data')

# 1. data/blog.ts
with open(os.path.join(data_dir, 'blog.ts'), 'w') as f:
    f.write('''export interface BlogPost {
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
''')

# 2. components/About.tsx
with open(os.path.join(components_dir, 'About.tsx'), 'w') as f:
    f.write('''import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">About Me</h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed max-w-none">
              <p className="mb-6">
                I’m Anshum Dev, a Computer Science and Technology student focused on building AI-powered software and reliable backend systems.
              </p>
              <p className="mb-6">
                My work sits at the intersection of Artificial Intelligence and Software Engineering. I enjoy turning practical problems into working systems — from Retrieval-Augmented Generation and semantic search to APIs, databases, enterprise automation, and full-stack applications.
              </p>
              <p className="mb-6">
                Currently, I work as an AI Intern at NivaSync Infotech, where I build enterprise AI solutions, backend services, and ERPNext customizations. My experience has given me exposure to both AI application development and the engineering required to make software useful in real-world business environments.
              </p>
              <p>
                I’m particularly interested in Generative AI, LLM applications, backend architecture, developer tools, and systems that combine intelligent models with dependable software.
              </p>
            </div>
            
            {/* What I Work On */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">What I Work On</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">AI Engineering</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Building practical AI applications using LLMs, RAG, embeddings, semantic search, and model APIs.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Backend Engineering</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Designing REST APIs, authentication systems, data pipelines, and backend services using Python and FastAPI.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Software Development</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Building responsive applications and engineering systems using React, TypeScript, Next.js, and modern web technologies.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Enterprise Systems</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Working with ERPNext/Frappe to implement business workflows, automation, reports, integrations, and custom enterprise functionality.</p>
                </div>
              </div>
            </div>

            {/* How I Approach Engineering */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">How I Approach Engineering</h3>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">1</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Understand</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Understand the actual problem and the people who will use the system.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">2</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Design</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Break the problem into clear components, APIs, data flows, and system boundaries.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">3</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Build</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Implement the solution with maintainable code and appropriate technologies.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-5">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-sm">4</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Improve</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Test, debug, measure, optimize, and iterate based on real usage.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Secondary Information */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 sticky top-24">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Profile Snapshot</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Location</div>
                  <div className="text-sm font-medium text-gray-900">Ahmedabad, Gujarat, India</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Education</div>
                  <div className="text-sm font-medium text-gray-900">B.Tech — Computer Science & Technology</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">College</div>
                  <div className="text-sm font-medium text-gray-900">L.J. Institute of Engineering & Technology</div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Graduation</div>
                  <div className="text-sm font-medium text-gray-900">2027</div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Current Role</div>
                  <div className="text-sm font-bold text-blue-700">AI Intern — NivaSync Infotech</div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Focus</div>
                  <div className="text-sm font-medium text-gray-700 leading-snug">AI Engineering &middot; Backend Engineering &middot; Software Development</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
''')

# 3. components/Skills.tsx
with open(os.path.join(components_dir, 'Skills.tsx'), 'w') as f:
    f.write('''import React from 'react';
import { Link } from 'react-router-dom';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL']
  },
  {
    title: 'AI / Machine Learning',
    skills: ['Machine Learning', 'Generative AI', 'Large Language Models', 'RAG', 'NLP', 'Embeddings', 'Semantic Search', 'Prompt Engineering', 'Scikit-learn', 'XGBoost', 'SHAP', 'Feature Engineering']
  },
  {
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'REST APIs', 'Node.js', 'Express.js', 'JWT Authentication', 'API Design', 'Backend Architecture']
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'Framer Motion']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Qdrant']
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Postman', 'AWS — Basic', 'Vercel']
  },
  {
    title: 'Enterprise Technologies',
    skills: ['ERPNext', 'Frappe Framework', 'Manufacturing', 'Quality Management', 'Inventory', 'Purchase', 'Sales']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Technical Skills</h2>
        <p className="text-gray-600 mb-12 max-w-2xl text-lg">
          Click any technology to view the engineering projects where I have actively applied it.
        </p>
        
        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Link
                    key={skill}
                    to={`/projects?tech=${encodeURIComponent(skill.replace(' — Basic', ''))}`}
                    className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm"
                  >
                    {skill}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
''')

# 4. pages/BlogPage.tsx
with open(os.path.join(pages_dir, 'BlogPage.tsx'), 'w') as f:
    f.write('''import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Search } from 'lucide-react';

export default function BlogPage() {
  const [search, setSearch] = useState('');
  
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      if (!search) return true;
      const s = search.toLowerCase();
      return post.title.toLowerCase().includes(s) || post.category.toLowerCase().includes(s) || post.tags.some(t => t.toLowerCase().includes(s));
    });
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Writing</h1>
        <p className="text-xl text-gray-600 mb-12">
          Notes on AI engineering, software development, backend systems, and things I learn while building.
        </p>

        <div className="mb-12 relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 shadow-sm"
            placeholder="Search articles by title, category, tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="space-y-8">
          {filteredPosts.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="block group">
              <article className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{post.category}</span>
                  <span className="text-gray-300">&bull;</span>
                  <span className="text-sm font-medium text-gray-500">{post.date}</span>
                  <span className="text-gray-300">&bull;</span>
                  <span className="text-sm font-medium text-gray-500">{post.readingTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">#{tag}</span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
          {filteredPosts.length === 0 && (
            <p className="text-gray-500 py-12">No articles found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}
''')

# 5. pages/BlogDetail.tsx
with open(os.path.join(pages_dir, 'BlogDetail.tsx'), 'w') as f:
    f.write('''import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { projects } from '../data/projects';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">Return to Blog</Link>
        </div>
      </div>
    );
  }

  const relatedProject = post.relatedProjectSlug ? projects.find(p => p.slug === post.relatedProjectSlug) : null;

  return (
    <div className="bg-white min-h-screen pb-24">
      <header className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
          
          <div className="flex flex-wrap items-center space-x-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{post.category}</span>
            <span className="text-gray-300">&bull;</span>
            <span className="text-sm font-medium text-gray-500 flex items-center"><BookOpen className="w-4 h-4 mr-1.5" /> {post.readingTime}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">{post.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
          <div className="text-sm font-medium text-gray-500">Status: {post.date}</div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <article className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed mb-16">
          {post.content}
        </article>

        {relatedProject && (
          <div className="mt-16 pt-10 border-t border-gray-200">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">Related Engineering Work</h3>
            <Link to={`/projects/${relatedProject.slug}`} className="block bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">{relatedProject.category}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{relatedProject.title}</h4>
              <p className="text-gray-600 text-sm">{relatedProject.shortDescription}</p>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
''')

# 6. Navbar.tsx
with open(os.path.join(components_dir, 'Navbar.tsx'), 'w') as f:
    f.write('''import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Writing', href: '/blog' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white/90 py-5 border-b border-gray-100'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight text-gray-900">Anshum Dev</Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? 
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{link.name}</a> :
            <Link key={link.name} to={link.href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{link.name}</Link>
          ))}
          <a href="https://github.com/Anshum25" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900"><Github className="w-5 h-5" /></a>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 absolute top-full left-0 right-0">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
               link.href.startsWith('/#') ? 
               <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">{link.name}</a> :
               <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">{link.name}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
''')

# 7. App.tsx
with open(os.path.join(src_dir, 'App.tsx'), 'w') as f:
    f.write('''import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
''')

# 8. Home.tsx
with open(os.path.join(pages_dir, 'Home.tsx'), 'w') as f:
    f.write('''import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import { HeroCarousel } from '../components/ui/hero-carousel';
import { projects } from '../data/projects';
import { blogPosts } from '../data/blog';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured && p.image);
  const featuredPosts = blogPosts.filter(p => p.featured).slice(0, 3);
  
  return (
    <>
      <Hero />
      
      {/* 2. Selected Work (Featured Projects Carousel) */}
      <section className="bg-black py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex justify-between items-end">
          <h2 className="text-3xl font-bold text-white tracking-tight">Featured Work</h2>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300 flex items-center transition-colors">
            View All Projects <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="h-[70vh] w-full">
          <HeroCarousel
            items={featuredProjects.map(p => ({
              id: p.id,
              title: p.title.replace(' / ', '\\n'),
              image: p.image || '',
              credit: p.credit,
              meta: p.tags.slice(0, 3),
              accent: p.accent,
            }))}
            brand="PROJECTS"
            autoplay={true}
          />
        </div>
      </section>

      {/* 3. About */}
      <About />
      
      {/* 4. Experience */}
      <Experience />
      
      {/* 5. Skills */}
      <Skills />
      
      {/* 6. Writing (Blog) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">Writing</h2>
              <p className="text-gray-600 text-lg">Notes on AI engineering, software development, and backend systems.</p>
            </div>
            <Link to="/blog" className="text-blue-600 hover:text-blue-800 flex items-center transition-colors font-medium mb-1">
              View All Articles <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group block bg-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">{post.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">{post.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="text-xs font-medium text-gray-500 uppercase">{post.date} &bull; {post.readingTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Open Source */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Open Source</h2>
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-600 mb-4">
              I actively look to contribute to open-source projects in the AI, Python, and React ecosystems. 
              My focus is on improving documentation, fixing bugs, and adding features to tools I use daily.
            </p>
            <div className="text-sm text-gray-500 italic">
              (Contribution records will be updated here as they are merged).
            </div>
          </div>
        </div>
      </section>

      {/* Education is tucked below */}
      <Education />
      
      {/* 8. Contact */}
      <Contact />
    </>
  );
}
''')

# 9. Modify ProjectsPage.tsx to read useSearchParams
with open(os.path.join(pages_dir, 'ProjectsPage.tsx'), 'r') as f:
    content = f.read()
    
# Replace activeTech with useSearchParams reading
if 'import { Link } from' in content:
    content = content.replace("import { Link } from 'react-router-dom';", "import { Link, useSearchParams } from 'react-router-dom';")
if 'const [activeTech, setActiveTech] = useState<string | null>(null);' in content:
    content = content.replace(
        'const [activeTech, setActiveTech] = useState<string | null>(null);', 
        'const [searchParams, setSearchParams] = useSearchParams();\n  const activeTech = searchParams.get("tech");\n  const setActiveTech = (tech: string | null) => {\n    if (tech) setSearchParams({ tech });\n    else setSearchParams({});\n  };'
    )
    
with open(os.path.join(pages_dir, 'ProjectsPage.tsx'), 'w') as f:
    f.write(content)

# 10. Update ProjectDetail to show related blog
with open(os.path.join(pages_dir, 'ProjectDetail.tsx'), 'r') as f:
    pd_content = f.read()

pd_content = pd_content.replace("import { projects } from '../data/projects';", "import { projects } from '../data/projects';\nimport { blogPosts } from '../data/blog';")
pd_content = pd_content.replace(
    "const project = projects.find(p => p.slug === slug);",
    "const project = projects.find(p => p.slug === slug);\n  const relatedBlog = blogPosts.find(b => b.relatedProjectSlug === slug);"
)
# Add blog link next to externalLink
pd_content = pd_content.replace(
    "{project.liveUrl && (",
    "{relatedBlog && (\n              <Link to={`/blog/${relatedBlog.slug}`} className=\"inline-flex items-center px-4 py-2 border border-blue-200 text-blue-700 bg-blue-50 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors\">\n                Read the engineering notes →\n              </Link>\n            )}\n            {project.liveUrl && ("
)

with open(os.path.join(pages_dir, 'ProjectDetail.tsx'), 'w') as f:
    f.write(pd_content)

print("Version 3 generation complete!")

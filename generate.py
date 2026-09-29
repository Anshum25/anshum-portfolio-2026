import os

src_dir = 'src'
pages_dir = os.path.join(src_dir, 'pages')
components_dir = os.path.join(src_dir, 'components')
data_dir = os.path.join(src_dir, 'data')

os.makedirs(pages_dir, exist_ok=True)
os.makedirs(data_dir, exist_ok=True)

# 1. opensource.ts
with open(os.path.join(data_dir, 'opensource.ts'), 'w') as f:
    f.write('''export const openSource = [
  // Empty for now since no specific OS contributions were provided in the prompt to avoid inventing info.
  // Requires user to provide actual GitHub contribution data.
];
''')

# 2. Navbar.tsx
with open(os.path.join(components_dir, 'Navbar.tsx'), 'w') as f:
    f.write('''import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white/80 backdrop-blur-sm py-5 border-b border-gray-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight text-gray-900">
          Anshum Dev
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://github.com/Anshum25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 absolute top-full left-0 right-0">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://github.com/Anshum25"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              <Github className="w-5 h-5 mr-3" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
''')

# 3. Home.tsx
with open(os.path.join(pages_dir, 'Home.tsx'), 'w') as f:
    f.write('''import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import { HeroCarousel } from '../components/ui/hero-carousel';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured && p.image);
  
  return (
    <>
      <Hero />
      <About />
      
      {/* How I Build Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 tracking-tight">How I Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="text-2xl font-bold text-blue-500">01</div>
              <h3 className="text-xl font-semibold">Architecture First</h3>
              <p className="text-gray-400">Design the system architecture and data layer before writing code.</p>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold text-blue-500">02</div>
              <h3 className="text-xl font-semibold">Backend Foundation</h3>
              <p className="text-gray-400">Build robust APIs and data pipelines using FastAPI or Node.</p>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold text-blue-500">03</div>
              <h3 className="text-xl font-semibold">Value-Driven AI</h3>
              <p className="text-gray-400">Integrate AI (LLMs, RAG, Vision) only where it solves real problems.</p>
            </div>
            <div className="space-y-3">
              <div className="text-2xl font-bold text-blue-500">04</div>
              <h3 className="text-xl font-semibold">Iterate & Scale</h3>
              <p className="text-gray-400">Test rigorously, deploy efficiently, and monitor performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="bg-black py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex justify-between items-end">
          <h2 className="text-3xl font-bold text-white tracking-tight">Featured Work</h2>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300 flex items-center transition-colors">
            View All <ArrowRight className="w-4 h-4 ml-1" />
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

      <Experience />
      <Skills />
      
      {/* Open Source Contribution Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Open Source</h2>
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-gray-600 mb-4">
              I am actively looking to contribute to open-source projects in the AI, Python, and React ecosystems. 
              My focus is on improving documentation, fixing bugs, and adding features to tools I use daily.
            </p>
            <div className="text-sm text-gray-500 italic">
              (Contribution records will be updated here as they are merged).
            </div>
          </div>
        </div>
      </section>

      <Education />
      <Contact />
    </>
  );
}
''')

# 4. ProjectsPage.tsx
with open(os.path.join(pages_dir, 'ProjectsPage.tsx'), 'w') as f:
    f.write('''import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Search } from 'lucide-react';

const CATEGORIES = ['All', 'AI / GenAI', 'Machine Learning', 'Software Engineering', 'Enterprise Systems', 'Web / Full Stack', 'Experiments'];

export default function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTech, setActiveTech] = useState<string | null>(null);

  // Extract all unique technologies for the tech map
  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(p => p.technologies.forEach(t => techs.add(t)));
    return Array.from(techs).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesTech = !activeTech || p.technologies.includes(activeTech);
      const searchLower = search.toLowerCase();
      const matchesSearch = !search || 
        p.title.toLowerCase().includes(searchLower) || 
        p.shortDescription.toLowerCase().includes(searchLower) ||
        p.technologies.some(t => t.toLowerCase().includes(searchLower)) ||
        p.tags.some(t => t.toLowerCase().includes(searchLower));
        
      return matchesCategory && matchesTech && matchesSearch;
    });
  }, [search, activeCategory, activeTech]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Complete Project & Engineering Showcase</h1>
        
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 shadow-sm"
              placeholder="Search projects, technologies, tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setActiveTech(null); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Technology Map (Interactive) */}
          <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Technology Map Filter</h3>
            <div className="flex flex-wrap gap-2">
              {allTechs.map(tech => (
                <button
                  key={tech}
                  onClick={() => setActiveTech(activeTech === tech ? null : tech)}
                  className={`px-3 py-1 text-xs font-medium rounded-md border transition-colors ${
                    activeTech === tech
                      ? 'bg-blue-100 text-blue-800 border-blue-300'
                      : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Link key={project.id} to={`/projects/${project.slug}`} className="group flex flex-col h-full bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 flex-grow flex flex-col">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{project.shortDescription}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase rounded-md">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 bg-gray-50 text-gray-400 text-[10px] font-bold rounded-md">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-500">
              No projects found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
''')

# 5. ProjectDetail.tsx
with open(os.path.join(pages_dir, 'ProjectDetail.tsx'), 'w') as f:
    f.write('''import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-600 hover:underline">Return to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <header className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          
          <div className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-3">{project.category}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">{project.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">{project.fullDescription || project.shortDescription}</p>
          
          <div className="flex flex-wrap gap-4 items-center">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                <Github className="w-4 h-4 mr-2" /> View Source
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            {project.highlights && project.highlights.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Engineering Highlights</h2>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold mr-3 mt-0.5">{idx + 1}</span>
                      <span className="text-gray-700 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.architecture && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Architecture</h2>
                <div className="prose text-gray-700 whitespace-pre-wrap font-mono text-sm bg-gray-50 p-6 rounded-lg border border-gray-200">
                  {project.architecture}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1 space-y-10">
            <section>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
            
            <section>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-sm text-gray-600">#{tag}</span>
                ))}
              </div>
            </section>
          </div>
          
        </div>
      </div>
    </div>
  );
}
''')

print("Migration generated successfully!")

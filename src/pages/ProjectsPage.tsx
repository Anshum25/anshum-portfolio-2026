import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { Search } from 'lucide-react';

const CATEGORIES = ['All', 'AI / GenAI', 'Machine Learning', 'Software Engineering', 'Enterprise Systems', 'Web / Full Stack', 'Experiments'];

export default function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTech = searchParams.get("tech");
  const setActiveTech = (tech: string | null) => {
    if (tech) setSearchParams({ tech });
    else setSearchParams({});
  };

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

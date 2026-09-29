import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { blogPosts } from '../data/blog';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const relatedBlog = blogPosts.find(b => b.relatedProjectSlug === slug);

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
            {relatedBlog && (
              <Link to={`/blog/${relatedBlog.slug}`} className="inline-flex items-center px-4 py-2 border border-blue-200 text-blue-700 bg-blue-50 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors">
                Read the engineering notes →
              </Link>
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

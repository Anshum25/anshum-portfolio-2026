import { useEffect } from 'react';
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

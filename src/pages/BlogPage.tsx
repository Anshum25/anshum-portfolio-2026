import { useState, useMemo } from 'react';
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

import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import { HeroCarousel } from '../components/ui/hero-carousel';
import { projects } from '../data/projects';
import { blogPosts } from '../data/blog';
import { Link } from 'react-router-dom';
import { ArrowRight, GitBranch } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

export default function Home() {
  const allProjects = projects;
  const featuredPosts = blogPosts.filter(p => p.featured).slice(0, 3);
  
  return (
    <>
      <Hero />
      
      {/* 2. Selected Work (Featured Projects Carousel) */}
      <section className="bg-black py-12">
        <div className="max-w-[96%] mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex justify-between items-end">
          <h2 className="text-3xl font-bold text-white tracking-tight">Featured Work</h2>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300 flex items-center transition-colors">
            View All Projects <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="h-[90vh] w-full">
          <HeroCarousel
            items={allProjects.map((p, idx) => {
              // Fallback images for projects without explicit images
              const fallbackImages = [
                'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop', // Cyberpunk tech
                'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', // Abstract liquid
                'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop', // Code on screen
                'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'  // Global earth/network
              ];
              
              return {
                id: p.id,
                title: p.title.replace(' / ', '\n'),
                description: p.shortDescription,
                image: p.image || fallbackImages[idx % fallbackImages.length],
                credit: p.credit || 'ENGINEERING',
                meta: p.tags.slice(0, 3),
                accent: p.accent || '#333333',
                link: `/projects/${p.slug}`,
              };
            })}
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

      {/* 7. GitHub Activity */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <GitBranch className="w-8 h-8 text-gray-900" />
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Open Source & Contributions</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-center">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Contribution Graph</h3>
              <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
                <div className="min-w-[700px]">
                  <GitHubCalendar 
                    username="Anshum25" 
                    colorScheme="light"
                    blockSize={12}
                    blockMargin={4}
                    fontSize={12}
                    theme={{
                      light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <a 
                href="https://github.com/Anshum25" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4 group"
              >
                <img 
                  src="https://avatars.githubusercontent.com/Anshum25" 
                  alt="Anshum25" 
                  className="w-16 h-16 rounded-full border border-gray-100"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">@Anshum25</h3>
                  <p className="text-sm text-gray-500">View GitHub Profile &rarr;</p>
                </div>
              </a>
              
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=Anshum25&show_icons=true&hide_border=true&title_color=111827&text_color=4b5563&icon_color=4773ec&bg_color=ffffff&hide_title=true" 
                  alt="GitHub Stats" 
                  className="w-full h-auto"
                />
              </div>
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

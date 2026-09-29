import React from 'react';

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

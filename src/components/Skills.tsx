import React from 'react';
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

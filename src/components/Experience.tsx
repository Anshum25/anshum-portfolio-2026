import React from 'react';
import { experience } from '../data/experience';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 tracking-tight">Experience</h2>
        
        <div className="space-y-12 max-w-4xl">
          {experience.map((job) => (
            <div key={job.id} className="relative border-l border-gray-200 pl-8 ml-3 md:ml-0 md:pl-0 md:border-l-0">
              <div className="hidden md:block absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 top-2 border-2 border-white"></div>
              
              <div className="md:grid md:grid-cols-4 md:gap-8">
                <div className="mb-4 md:mb-0 md:col-span-1 md:text-right md:pr-8 md:border-r md:border-gray-200">
                  <div className="text-sm font-medium text-gray-500 mb-1">{job.period}</div>
                  <div className="text-sm text-gray-400">{job.location}</div>
                </div>
                
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
                  <div className="text-lg font-medium text-blue-600 mb-4">{job.company}</div>
                  
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index} className="leading-relaxed">{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

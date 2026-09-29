import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Education</h2>
        
        <div className="bg-white rounded-xl p-8 border border-gray-200">
          <div className="md:flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">B.Tech — Computer Science & Technology</h3>
              <p className="text-lg text-blue-600 font-medium mb-1">L.J. Institute of Engineering & Technology</p>
              <p className="text-gray-500">Ahmedabad, Gujarat</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                2023 – 2027
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

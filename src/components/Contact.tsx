import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Let's build something useful.</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Interested in AI engineering, backend systems, or software development? I'm open to internships, full-time opportunities, and interesting engineering problems.
        </p>
        
        <div className="flex justify-center mb-12">
          <a
            href="mailto:anshum25506@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 transition-colors shadow-sm"
          >
            <Mail className="w-5 h-5 mr-2" />
            Say Hello
          </a>
        </div>
        
        <div className="flex items-center justify-center space-x-8">
          <a href="mailto:anshum25506@gmail.com" className="flex items-center text-gray-500 hover:text-gray-900 transition-colors">
            <Mail className="w-5 h-5 mr-2" />
            <span className="font-medium">Email</span>
          </a>
          <a href="https://linkedin.com/in/anshum-dev" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
            <Linkedin className="w-5 h-5 mr-2" />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a href="https://github.com/Anshum25" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-gray-900 transition-colors">
            <Github className="w-5 h-5 mr-2" />
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

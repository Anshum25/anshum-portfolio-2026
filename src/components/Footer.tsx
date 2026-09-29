import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fcfcfc] pt-32 pb-40 border-t border-gray-100 relative overflow-hidden flex flex-col items-center">
      
      {/* Background vanishing lines to match the hero */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 flex justify-center items-center overflow-hidden">
        <div className="w-[200vw] h-[1px] bg-black rotate-[18deg] absolute"></div>
        <div className="w-[200vw] h-[1px] bg-black -rotate-[18deg] absolute"></div>
        <div className="w-[200vw] h-[1px] bg-black rotate-[45deg] absolute"></div>
        <div className="w-[200vw] h-[1px] bg-black -rotate-[45deg] absolute"></div>
        <div className="w-[1px] h-[200vh] bg-black absolute"></div>
        <div className="w-[200vw] h-[1px] bg-black absolute"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#fcfcfc_60%)] z-0 pointer-events-none"></div>

      {/* Big callout quote */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-light text-gray-900 tracking-tight font-sans">
          "There is so much <br className="hidden sm:block" />left to build."
        </h2>
      </div>

      {/* Standard footer links */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-gray-900 font-bold mb-1 tracking-tight">Anshum Dev</p>
          <p className="text-gray-500 text-xs font-semibold tracking-widest uppercase">AI Engineer &middot; Software Engineer</p>
        </div>
        
        <div className="flex space-x-8">
          <a href="https://github.com/Anshum25" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">
            GitHub
          </a>
          <a href="https://linkedin.com/in/anshum25" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">
            LinkedIn
          </a>
          <a href="https://x.com/TheAnshumDev" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">
            X
          </a>
          <a href="mailto:anshum25506@gmail.com" className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">
            Mail
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

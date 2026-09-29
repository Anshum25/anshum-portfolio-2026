import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-start min-h-[95vh] px-4 sm:px-6 lg:px-12 bg-[#fcfcfc] overflow-hidden pt-32 md:pt-48">
      
      {/* 3D Perspective Grid Background (Skydot Style) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] z-0 overflow-hidden" style={{ perspective: '800px' }}>
        
        {/* Top/Ceiling Grid */}
        <div 
          className="absolute w-[200vw] h-[100vh] left-[-50vw] top-0 border-b border-black"
          style={{
            backgroundImage: `
              linear-gradient(to right, black 1px, transparent 1px),
              linear-gradient(to bottom, black 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: 'rotateX(80deg) translateZ(0)',
            transformOrigin: 'bottom center'
          }}
        ></div>
        
        {/* Bottom/Floor Grid */}
        <div 
          className="absolute w-[200vw] h-[100vh] left-[-50vw] bottom-0 border-t border-black"
          style={{
            backgroundImage: `
              linear-gradient(to right, black 1px, transparent 1px),
              linear-gradient(to bottom, black 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: 'rotateX(-80deg) translateZ(0)',
            transformOrigin: 'top center'
          }}
        ></div>
      </div>
      
      {/* Radial fade to soften the center vanishing point and edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#fcfcfc_70%)] z-0 pointer-events-none"></div>

      {/* Left-aligned content container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start text-left pl-4 md:pl-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center mb-6"
        >
          <div className="w-6 h-[1.5px] bg-gray-900 mr-3"></div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-gray-800 uppercase mr-3">
            Anshum Dev
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
            &middot; AI ENGINEER &middot; SOFTWARE ENGINEER
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-7xl md:text-[6rem] lg:text-[7rem] font-light text-[#1a1a1a] tracking-tight leading-[1.0] mb-8 font-sans max-w-4xl"
        >
          Building intelligent <br className="hidden md:block" />
          software systems.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-[1.35rem] text-gray-500 mb-12 max-w-2xl leading-relaxed font-normal"
        >
          I'm Anshum Dev. I bridge the gap between artificial intelligence and software engineering, focusing on Generative AI, backend architecture, and scalable applications.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-gray-900 rounded-none hover:bg-gray-800 transition-colors shadow-sm"
          >
            Explore Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-gray-800 bg-[#f4f4f4] border border-gray-200 rounded-none hover:bg-[#eaeaea] transition-colors shadow-sm"
          >
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

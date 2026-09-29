import os

# 1. Update index.html to include Manrope
html_content = """<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Anshum Dev | AI & Software Engineer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  </head>
  <body class="bg-black text-white antialiased selection:bg-[#f05a28] selection:text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>"""
with open('index.html', 'w') as f:
    f.write(html_content)

# 2. Update index.css
css_content = """@import "tailwindcss";

@theme {
  --font-sans: 'Manrope', system-ui, sans-serif;
  --font-display: 'Manrope', system-ui, sans-serif;
}

@layer base {
  body {
    @apply font-sans bg-black text-white antialiased;
  }
}

::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #000;
}
::-webkit-scrollbar-thumb {
  background: #333;
}
::-webkit-scrollbar-thumb:hover {
  background: #f05a28;
}
"""
with open('src/index.css', 'w') as f:
    f.write(css_content)

# 3. Update Hero.tsx
hero_content = """import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-center min-h-screen px-4 sm:px-6 lg:px-12 bg-[#050505] overflow-hidden pt-20">
      
      {/* Skydot-style dark grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#050505] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-[#f05a28] uppercase border border-[#f05a28]/30 rounded-none bg-[#f05a28]/10"
        >
          AI Engineer &middot; Software Engineer
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] font-extrabold text-white tracking-tight leading-[1.05] mb-8 font-sans max-w-5xl"
        >
          Technology that moves <br className="hidden md:block" />
          businesses <span className="text-[#f05a28]">forward.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-medium"
        >
          From AI-powered solutions and enterprise software to web, mobile and ERP, I help organizations turn complex ideas into scalable technology.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group flex items-center justify-center w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-[#f05a28] rounded-none hover:bg-[#d94f22] transition-colors"
          >
            Explore Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            className="flex items-center justify-center w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-transparent border border-white/20 rounded-none hover:bg-white/5 transition-colors"
          >
            Download Resume
            <Download className="ml-2 w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
"""
with open('src/components/Hero.tsx', 'w') as f:
    f.write(hero_content)

print("Skydot clone applied.")

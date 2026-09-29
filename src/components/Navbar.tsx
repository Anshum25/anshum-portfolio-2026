import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Writing', href: '/blog' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white/90 py-5 border-b border-gray-100'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight text-gray-900">Anshum Dev</Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? 
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{link.name}</a> :
            <Link key={link.name} to={link.href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">{link.name}</Link>
          ))}
          <a href="https://github.com/Anshum25" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900"><Github className="w-5 h-5" /></a>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 absolute top-full left-0 right-0">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
               link.href.startsWith('/#') ? 
               <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">{link.name}</a> :
               <Link key={link.name} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">{link.name}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

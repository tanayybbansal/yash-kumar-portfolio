import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import ScrollProgress from './ScrollProgress';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'research', label: 'Research' },
  { id: 'achievements', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection, isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <ScrollProgress />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 dark:bg-ink-900/90 backdrop-blur-md shadow-card py-2'
            : 'bg-white/70 dark:bg-ink-900/70 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-3" aria-label="Back to top">
              <span className="w-9 h-9 rounded-lg bg-primary-600 text-white font-serif font-bold flex items-center justify-center">
                {portfolioData.personal.initials}
              </span>
              <span className="text-lg font-serif font-bold text-gray-900 dark:text-white">
                {portfolioData.personal.name}
              </span>
            </button>

            <div className="hidden lg:flex items-center space-x-7">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium transition-colors duration-300 hover:text-primary-600 dark:hover:text-primary-400 ${
                    activeSection === item.id ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              ))}
              <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            </div>

            <div className="lg:hidden flex items-center space-x-3">
              <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="pt-4 pb-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  tabIndex={isMenuOpen ? 0 : -1}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg hover:bg-primary-50 dark:hover:bg-ink-800 ${
                    activeSection === item.id ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-ink-800' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;

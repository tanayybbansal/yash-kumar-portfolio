import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { navItems } from './Navbar';

const Footer: React.FC = () => {
  const { personal } = portfolioData;
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-ink-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif font-semibold mb-3 text-primary-300">{personal.name}</h3>
            <p className="text-gray-300 mb-3">{personal.title} — {personal.role}.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-300">Quick Links</h4>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => go(item.id)} className="block text-gray-300 hover:text-primary-300 transition-colors text-left">
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-300">Contact</h4>
            <div className="space-y-2 text-gray-300 text-sm break-words">
              <p>{personal.email}</p>
              <p>{personal.phone}</p>
              <p>{personal.location}</p>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary-300">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Designed & Developed by Tanay Bansal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

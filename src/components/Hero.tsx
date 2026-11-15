import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, MapPin, Linkedin, Camera } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Put your photo at public/images/profile.jpg — it replaces the placeholder automatically.
const PHOTO_SRC = '/images/profile.jpg';

const Hero: React.FC = () => {
  const { personal } = portfolioData;
  const [hasPhoto, setHasPhoto] = useState(true);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-ink-950 dark:via-ink-900 dark:to-ink-950"
    >
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(13,148,136,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,148,136,0.12) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/60 dark:text-primary-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse-slow" />
              {personal.role}
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-gray-900 dark:text-white mb-5">
              {personal.name}
            </h1>
            <h2 className="text-xl sm:text-2xl text-primary-700 dark:text-primary-300 font-medium mb-5">
              {personal.title}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              {personal.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href={personal.resume}
                download
                className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-7 py-3.5 rounded-xl font-medium shadow-lg hover:shadow-glow transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" /> Download Resume
              </a>
              <button
                onClick={() => go('contact')}
                className="inline-flex items-center justify-center border-2 border-primary-600 dark:border-primary-400 text-primary-700 dark:text-primary-300 px-7 py-3.5 rounded-xl font-medium hover:bg-primary-50 dark:hover:bg-ink-800 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" /> Get in Touch
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="inline-flex items-center">
                <MapPin className="w-4 h-4 mr-1.5 text-primary-600" /> {personal.location}
              </span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-primary-600 dark:hover:text-primary-400"
              >
                <Linkedin className="w-4 h-4 mr-1.5 text-primary-600" /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 opacity-30 blur-xl" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-ink-800 shadow-card-hover bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-ink-800">
                {hasPhoto ? (
                  <img
                    src={PHOTO_SRC}
                    alt={personal.name}
                    onError={() => setHasPhoto(false)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center px-10">
                    <span className="w-24 h-24 rounded-full bg-primary-600 text-white font-serif font-bold text-3xl flex items-center justify-center mb-3">
                      {personal.initials}
                    </span>
                    <Camera className="w-6 h-6 text-primary-700 dark:text-primary-300 mb-2" />
                    <p className="text-sm font-medium text-primary-800 dark:text-primary-200">Your photo goes here</p>
                    <p className="text-xs text-primary-700/80 dark:text-primary-300/80 mt-1">
                      public/images/profile.jpg
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { delay: 1.2 }, y: { duration: 2, repeat: Infinity } }}
          onClick={() => go('about')}
          aria-label="Scroll to About"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 dark:text-gray-400 hover:text-primary-600"
        >
          <ChevronDown className="w-7 h-7" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Research: React.FC = () => {
  const { research, socialWork } = portfolioData;

  return (
    <section id="research" className="py-20 bg-gray-50 dark:bg-ink-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Research & Social Work"
          title="Beyond the"
          highlight="classroom"
          subtitle="Live research on retail disruption, and teaching students who need it most."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-ink-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-card"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-11 h-11 rounded-xl bg-primary-600 text-white flex items-center justify-center">
                <FlaskConical className="w-5 h-5" />
              </span>
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">{research.subtitle}</span>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-900 dark:text-white mt-3">{research.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{research.period}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{research.summary}</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {research.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white dark:bg-ink-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-card"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-11 h-11 rounded-xl bg-accent-500 text-white flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </span>
              <span className="text-sm font-medium text-accent-700 dark:text-accent-300">Social Work</span>
            </div>
            <h3 className="text-2xl font-serif font-semibold text-gray-900 dark:text-white mt-3">{socialWork.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{socialWork.period}</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {socialWork.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Research;

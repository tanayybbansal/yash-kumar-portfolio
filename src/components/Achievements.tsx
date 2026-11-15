import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Achievements: React.FC = () => (
  <section id="achievements" className="py-20 bg-white dark:bg-ink-900 transition-colors duration-500">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Awards & Achievements"
        title="Case competitions,"
        highlight="won & placed"
        subtitle="National-level recognition in strategy, marketing and finance cases."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.achievements.map((a, i) => (
          <motion.div
            key={`${a.organization}-${a.detail}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white dark:bg-ink-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-card hover:shadow-card-hover hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <span className="w-12 h-12 rounded-full bg-accent-100 dark:bg-accent-900/40 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-accent-600 dark:text-accent-400" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{a.title}</h3>
                <p className="text-primary-700 dark:text-primary-300 font-medium">{a.organization}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{a.detail}</p>
                <p className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <Calendar className="w-4 h-4 mr-1.5" /> {a.year}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;

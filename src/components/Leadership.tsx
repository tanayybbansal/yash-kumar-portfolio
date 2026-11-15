import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Leadership: React.FC = () => (
  <section id="leadership" className="py-20 bg-white dark:bg-ink-900 transition-colors duration-500">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Positions of Responsibility"
        title="Leadership &"
        highlight="community"
        subtitle="Founding, scaling and running student organisations."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {portfolioData.leadership.map((org, i) => (
          <motion.article
            key={org.organization}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-gradient-to-br from-primary-50 to-white dark:from-ink-800 dark:to-ink-800 p-8 rounded-2xl border border-primary-100 dark:border-gray-700 shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-primary-600 text-white flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5" />
                </span>
                <h3 className="text-xl font-serif font-semibold text-gray-900 dark:text-white">{org.organization}</h3>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">{org.period}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
              {org.roles.map((r) => (
                <span key={r} className="text-xs font-medium px-3 py-1 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/60 dark:text-primary-200">{r}</span>
              ))}
            </div>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {org.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Leadership;

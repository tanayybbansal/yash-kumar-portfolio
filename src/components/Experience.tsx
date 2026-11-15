import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const Experience: React.FC = () => (
  <section id="experience" className="py-20 bg-gray-50 dark:bg-ink-950 transition-colors duration-500">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've"
        highlight="worked"
        subtitle="From brand strategy and business development to US cash applications."
      />
      <ol className="relative border-l-2 border-primary-200 dark:border-primary-800 ml-3 space-y-10">
        {portfolioData.experience.map((job, i) => (
          <motion.li
            key={job.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="ml-8 relative"
          >
            <span className="absolute -left-[46px] top-1 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center ring-4 ring-gray-50 dark:ring-ink-950">
              <Briefcase className="w-4 h-4" />
            </span>
            <div className="bg-white dark:bg-ink-800 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-card hover:shadow-card-hover transition-shadow">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="text-2xl font-serif font-semibold text-gray-900 dark:text-white">{job.company}</h3>
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${job.current ? 'bg-primary-600 text-white' : 'bg-primary-100 text-primary-800 dark:bg-primary-900/60 dark:text-primary-200'}`}>
                  {job.period}
                </span>
              </div>
              <p className="text-primary-700 dark:text-primary-300 font-medium mb-4">{job.role}</p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;

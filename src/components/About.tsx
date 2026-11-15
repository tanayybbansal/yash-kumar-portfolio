import React from 'react';
import { motion } from 'framer-motion';
import { Download, GraduationCap, Trophy, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="py-20 bg-white dark:bg-ink-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Numbers, brands &"
          highlight="people"
          subtitle="Commerce graduate working in accounts receivable, with a track record in case competitions and community leadership."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-ink-800 dark:to-ink-800 p-8 rounded-2xl border border-primary-100 dark:border-gray-700 shadow-card">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">{about.biography}</p>
              <a
                href={personal.resume}
                download
                className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition-colors"
              >
                <Download className="w-5 h-5 mr-2" /> Download Resume
              </a>
            </div>

            <div className="bg-white dark:bg-ink-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-card">
              <h3 className="text-2xl font-serif font-semibold text-gray-900 dark:text-white mb-5 flex items-center">
                <Wrench className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
                Skills & Focus
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Tools</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {about.skills.map((s) => (
                  <span key={s} className="px-4 py-2 rounded-lg text-sm font-medium bg-primary-600 text-white">{s}</span>
                ))}
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Areas</p>
              <div className="flex flex-wrap gap-2">
                {about.focus.map((s) => (
                  <span key={s} className="px-4 py-2 rounded-lg text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/60 dark:text-primary-200">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-ink-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-card">
              <h3 className="text-2xl font-serif font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
                Education
              </h3>
              <ol className="relative border-l-2 border-primary-200 dark:border-primary-800 ml-2 space-y-6">
                {about.education.map((edu) => (
                  <li key={edu.degree} className="ml-6 relative">
                    <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary-600 ring-4 ring-white dark:ring-ink-800" />
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                      <span className="text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/60 px-3 py-0.5 rounded-full">{edu.year}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mt-1">{edu.score}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white dark:bg-ink-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-card">
              <h3 className="text-2xl font-serif font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Trophy className="w-6 h-6 mr-3 text-accent-600" />
                Academic Achievements
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                {about.academics.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

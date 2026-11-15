import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

const SectionHeading: React.FC<Props> = ({ eyebrow, title, highlight, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6 }}
    className="text-center mb-14"
  >
    <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary-700 dark:text-primary-300 mb-3">
      {eyebrow}
    </span>
    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 dark:text-white">
      {title}{' '}
      {highlight && (
        <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
          {highlight}
        </span>
      )}
    </h2>
    {subtitle && (
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeading;

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from './SectionHeading';

const inputClass =
  'w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-ink-800 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none';

const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  // No backend: the form opens the visitor's email app with the message pre-filled.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `${form.subject} — message from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const items = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phoneHref}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/yashkumar80', href: personal.linkedin },
    { icon: MapPin, label: 'Location', value: personal.location },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-ink-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's"
          highlight="connect"
          subtitle="Open to opportunities in finance operations, accounts receivable, marketing and business strategy."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {items.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start">
                <span className="w-11 h-11 rounded-full bg-primary-100 dark:bg-primary-900/60 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary-700 dark:text-primary-300" aria-hidden="true" />
                </span>
                <div className="ml-4 min-w-0">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">{label}</h4>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 break-words"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-300">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Full Name *
                </label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Email Address *
                </label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-lg font-medium text-gray-900 dark:text-white mb-2">
                Subject *
              </label>
              <select id="subject" name="subject" required value={form.subject} onChange={handleChange} className={inputClass}>
                <option value="">Select a subject</option>
                <option value="Job opportunity">Job opportunity</option>
                <option value="Internship / project">Internship / project</option>
                <option value="Case competition / collaboration">Case competition / collaboration</option>
                <option value="Volunteering / SAMARPAN">Volunteering / SAMARPAN</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-lg font-medium text-gray-900 dark:text-white mb-2">
                Message *
              </label>
              <textarea id="message" name="message" rows={6} required value={form.message} onChange={handleChange} className={`${inputClass} resize-y`} />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3.5 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" /> Open email draft
            </button>
            <p className="text-xs text-gray-600 dark:text-gray-300 text-center">
              This opens your email app with the message pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

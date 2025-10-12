import React from 'react';
import { links } from '../data/links';

const Contact = () => {
  return (
    <section id="contact" className="py-20 flex items-center justify-center min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 reveal-on-scroll">
        <h2 className="animated-header text-4xl font-bold mb-4 text-primary-accent">Let's Connect!</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          I'm available for new opportunities, collaborative projects, or discussions about modern backend architecture.
          <br className="hidden sm:block" />
          <span className="font-semibold text-primary-accent">
            If you're passionate about clean architecture, performance, or AI-driven systems—we're already on the same team.
          </span>
        </p>
        <a 
          href={`mailto:${links.email}`}
          className="magnetic-link inline-block px-10 py-4 bg-primary-accent text-gray-900 font-extrabold text-lg rounded-xl shadow-2xl hover:bg-teal-300 transition duration-300 transform hover:scale-105"
        >
          Email: {links.email}
        </a>
        
        {/* Resume Link on Contact Page */}
        <div className="my-8">
          <a 
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-link inline-block px-8 py-3 border-2 border-primary-accent text-gray-900 dark:text-gray-200 font-bold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 transform hover:scale-105"
          >
            View My Resume
          </a>
        </div>
        
        <div className="mt-12 space-y-4 text-xl">
          <p className="text-gray-500 dark:text-gray-400">
            <span>📍</span> Bengaluru, Karnataka
          </p>
          <p>
            <a 
              href={`tel:${links.phone}`}
              className="text-gray-500 dark:text-gray-400 hover:text-primary-accent transition duration-300"
            >
              <span>📞</span> {links.phone}
            </a>
          </p>
          <div className="flex justify-center space-x-6 pt-4 text-2xl">
            <a 
              href={links.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              className="magnetic-link social-link text-gray-500 dark:text-gray-400 hover:text-primary-accent transition duration-300"
            >
              <span><span>🔗</span> LinkedIn</span>
            </a>
            <a 
              href={links.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="magnetic-link social-link text-gray-500 dark:text-gray-400 hover:text-primary-accent transition duration-300"
            >
              <span><span>🐙</span> GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { links } from '../data/links';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 flex items-center justify-center min-h-[80vh] bg-gray-50 dark:bg-gray-950"
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="bg-white dark:bg-gray-900 p-6 sm:p-10 rounded-3xl shadow-xl dark:shadow-2xl dark:shadow-teal-900/50 border border-gray-100 dark:border-gray-800 transition-shadow duration-300 hover:shadow-2xl dark:hover:shadow-teal-800/60 group"
        >
          {/* Header */}
          <h2 className="text-4xl font-bold mb-4 text-teal-600 dark:text-teal-400 transition-colors duration-300 group-hover:text-teal-500">
            Full-Stack Expertise, Backend Focus
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            I am a <span className="font-semibold text-teal-600">Full-Stack Developer</span> with a strong focus on{" "}
            <span className="text-teal-600">backend development</span>, specializing in integrating{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-100">complex server-side logic</span> with intuitive, user-facing applications. My passion lies in crafting{" "}
            <span className="text-teal-600">robust</span>,{" "}
            <span className="text-blue-500">scalable systems</span> that deliver{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-100">exceptional performance and reliability.</span>
          </p>

          {/* Subtitle Text */}
          <p className="text-lg text-gray-800 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            If you're seeking an engineer with deep expertise across both{" "}
            <span className="text-teal-600">front-end</span> and{" "}
            <span className="text-teal-600">back-end</span> technologies—and who truly excels in{" "}
            <span className="text-indigo-500 font-medium">backend architecture</span>—let's connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center my-8">
            {/* Email Button */}
            <a
              href={`mailto:${links.email}`}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold text-base rounded-xl shadow-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105"
            >
              <span role="img" aria-label="Mail emoji">📧</span>
              Email Me
            </a>

            {/* Resume Button */}
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-teal-600 text-teal-600 dark:text-teal-400 font-semibold rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/30 transition duration-300 transform hover:scale-105"
            >
              <span role="img" aria-label="File emoji">📄</span>
              View My Resume
            </a>
          </div>

          <div className="mt-16 space-y-6">
            {/* Divider */}
            <div className="flex items-center justify-center space-x-4">
              <hr className="w-1/4 border-gray-300 dark:border-gray-700" />
              <span className="text-gray-500 dark:text-gray-400">Or find me on</span>
              <hr className="w-1/4 border-gray-300 dark:border-gray-700" />
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-400 mt-8">
              <span role="img" aria-label="Location pin">📍</span> Bengaluru, Karnataka
            </p>

            <div className="mt-12 text-xl">
              <div className="flex justify-center space-x-6 pt-4 text-2xl">
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 transition duration-300"
                >
                  <span>🔗 LinkedIn</span>
                </a>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 transition duration-300"
                >
                  <span>🐙 GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

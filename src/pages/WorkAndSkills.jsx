import React from 'react';
import { Link } from 'react-router-dom';

const WorkAndSkills = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
      <section id="projects" className="py-12">
        <h2 className="animated-header text-4xl font-bold text-center mb-12 text-primary-accent">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-card reveal-on-scroll bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-primary-accent/40 transition-all duration-500 relative border border-gray-200 dark:border-gray-700 group hover:-translate-y-2">
            <img 
              src="https://placehold.co/600x400/0d9488/ffffff?text=MARS-Botics+AI+Agent" 
              alt="AI Mail Agent" 
              className="w-full h-56 object-cover transition duration-500 group-hover:opacity-90"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">MARS-Botics (Mail Agent)</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                An advanced Gmail Assistant automating business email processing, context retrieval, and smart replies.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400 mb-6 ml-4 space-y-1">
                <li>Backend built with Spring Boot and PostgreSQL.</li>
                <li>Utilized LangChain/LangGraph with Gemini/LLaMA for context.</li>
                <li>Employed VectorDB for efficient semantic search of documents.</li>
              </ul>
              <Link
                to="/project/mars-botics"
                className="magnetic-link block w-full text-center px-4 py-2 bg-primary-accent text-gray-900 font-bold rounded-lg hover:bg-teal-300 transition duration-300"
              >
                Know More &rarr;
              </Link>
            </div>
          </div>
          
          <div 
            className="project-card reveal-on-scroll bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-primary-accent/40 transition-all duration-500 relative border border-gray-200 dark:border-gray-700 group hover:-translate-y-2" 
            style={{ transitionDelay: '150ms' }}
          >
            <img 
              src="https://placehold.co/600x400/292524/ffffff?text=Reactive+Backend" 
              alt="Data Visualization Dashboard" 
              className="w-full h-56 object-cover transition duration-500 group-hover:opacity-90"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Reactive API Gateway</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                A high-throughput API layer using reactive principles for efficient data flow and low latency.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400 mb-6 ml-4 space-y-1">
                <li>Implemented using Spring WebFlux (Reactive Programming).</li>
                <li>Secured with Spring Security, JWT, and OAuth2.</li>
                <li>Utilizes Kafka for asynchronous messaging between services.</li>
              </ul>
              <button className="magnetic-link block w-full text-center px-4 py-2 bg-primary-accent text-gray-900 font-bold rounded-lg hover:bg-teal-300 transition duration-300">
                Know More &rarr;
              </button>
            </div>
          </div>
          
          <div 
            className="project-card reveal-on-scroll bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-primary-accent/40 transition-all duration-500 relative border border-gray-200 dark:border-gray-700 group hover:-translate-y-2" 
            style={{ transitionDelay: '300ms' }}
          >
            <img 
              src="https://placehold.co/600x400/4c7c8c/ffffff?text=Data+System" 
              alt="Data Management System" 
              className="w-full h-56 object-cover transition duration-500 group-hover:opacity-90"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Data Persistence Layer</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                A robust data management system following the MVC pattern for clarity and maintainability.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400 mb-6 ml-4 space-y-1">
                <li>Used Spring Data JPA and Hibernate for database interaction.</li>
                <li>Supported databases include PostgreSQL, MySQL, and MongoDB.</li>
                <li>Managed deployment via Docker containers.</li>
              </ul>
              <button className="magnetic-link block w-full text-center px-4 py-2 bg-primary-accent text-gray-900 font-bold rounded-lg hover:bg-teal-300 transition duration-300">
                Know More &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section id="skills" className="bg-gray-100/50 dark:bg-gray-800/20 py-20 border-t border-b border-gray-200 dark:border-gray-700 mt-12">
        <h2 className="animated-header text-4xl font-bold text-center mb-12 text-primary-accent">Comprehensive Skill Set</h2>
        <div className="max-w-6xl mx-auto space-y-12 px-4">
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 reveal-on-scroll">
            <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white border-b pb-3 border-primary-accent/50">Core Languages</h3>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start stagger-container reveal-on-scroll">
              <div className="skill-tag flex items-center space-x-2 bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-full text-lg font-medium shadow-md transition duration-200 hover:bg-primary-accent/20 text-gray-900 dark:text-gray-200">
                <span>☕</span> <span>Java</span>
              </div>
              <div className="skill-tag flex items-center space-x-2 bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-full text-lg font-medium shadow-md transition duration-200 hover:bg-primary-accent/20 text-gray-900 dark:text-gray-200">
                <span>🐍</span> <span>Python</span>
              </div>
              <div className="skill-tag flex items-center space-x-2 bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-full text-lg font-medium shadow-md transition duration-200 hover:bg-primary-accent/20 text-gray-900 dark:text-gray-200">
                <span>📜</span> <span>JavaScript</span>
              </div>
              <div className="skill-tag flex items-center space-x-2 bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-full text-lg font-medium shadow-md transition duration-200 hover:bg-primary-accent/20 text-gray-900 dark:text-gray-200">
                <span>🖥️</span> <span>C</span>
              </div>
              <div className="skill-tag flex items-center space-x-2 bg-gray-50 dark:bg-gray-700 px-4 py-2 rounded-full text-lg font-medium shadow-md transition duration-200 hover:bg-primary-accent/20 text-gray-900 dark:text-gray-200">
                <span>🌐</span> <span>HTML & CSS</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 reveal-on-scroll">
            <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white border-b pb-3 border-primary-accent/50">Backend & AI Frameworks</h3>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start stagger-container reveal-on-scroll">
              <span className="skill-tag bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 px-4 py-2 rounded-full font-medium">Spring Boot</span>
              <span className="skill-tag bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 px-4 py-2 rounded-full font-medium">Spring WebFlux (Reactive)</span>
              <span className="skill-tag bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 px-4 py-2 rounded-full font-medium">Spring Security (JWT/OAuth2)</span>
              <span className="skill-tag bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 px-4 py-2 rounded-full font-medium">Spring Data JPA / Hibernate</span>
              <span className="skill-tag bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 px-4 py-2 rounded-full font-medium">Spring AI / LangChain</span>
              <span className="skill-tag bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 px-4 py-2 rounded-full font-medium">React (Frontend)</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 reveal-on-scroll">
            <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white border-b pb-3 border-primary-accent/50">Data & Messaging</h3>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start stagger-container reveal-on-scroll">
              <span className="skill-tag bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 px-4 py-2 rounded-full font-medium">PostgreSQL</span>
              <span className="skill-tag bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 px-4 py-2 rounded-full font-medium">MySQL</span>
              <span className="skill-tag bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 px-4 py-2 rounded-full font-medium">MongoDB</span>
              <span className="skill-tag bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 px-4 py-2 rounded-full font-medium">VectorDB</span>
              <span className="skill-tag bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 px-4 py-2 rounded-full font-medium">Apache Kafka</span>
              <span className="skill-tag bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 px-4 py-2 rounded-full font-medium">RabbitMQ</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 reveal-on-scroll">
            <h3 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white border-b pb-3 border-primary-accent/50">Development & Concepts</h3>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start stagger-container reveal-on-scroll">
              <span className="skill-tag bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-4 py-2 rounded-full font-medium">REST API Development</span>
              <span className="skill-tag bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-4 py-2 rounded-full font-medium">Reactive Programming</span>
              <span className="skill-tag bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-4 py-2 rounded-full font-medium">DSA (Data Structures & Algorithms)</span>
              <span className="skill-tag bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-4 py-2 rounded-full font-medium">Basics of System Design</span>
              <span className="skill-tag bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 px-4 py-2 rounded-full font-medium">Machine Learning</span>
              <span className="skill-tag bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-4 py-2 rounded-full font-medium">Docker</span>
              <span className="skill-tag bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-4 py-2 rounded-full font-medium">Git / GitHub</span>
              <span className="skill-tag bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-4 py-2 rounded-full font-medium">Postman / Swagger</span>
              <span className="skill-tag bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-4 py-2 rounded-full font-medium">IntelliJ IDEA / VS Code</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkAndSkills;

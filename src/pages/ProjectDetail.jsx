import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { projectData } from '../data/projectData';
import ImageGallery from '../components/ImageGallery';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="p-20 text-center text-red-500">
        Project details not found for ID: {projectId}.
      </div>
    );
  }

  const techBadges = project.tech.map((tech, index) => (
    <span key={index} className="bg-primary-accent/20 text-primary-accent px-3 py-1 rounded-full text-sm font-medium">
      {tech}
    </span>
  ));

  const quickVerifyLinks = project.quickVerify.map((link, index) => (
    <a
      key={index}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-accent transition duration-300"
    >
      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.364a4 4 0 00-5.656 0l-4 4m5.656 5.656l-.707.707m-4.364-7.656l-.707.707M17 13h-2m2-3h-2" />
      </svg>
      {link.label}
    </a>
  ));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        to="/work"
        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-accent transition duration-300 mb-8"
      >
        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Work & Skills
      </Link>

      <header className="text-center mb-12">
        <h1 className="animated-header text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-primary-accent px-4 break-words">
          {project.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-4">{project.role}</p>
      </header>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 reveal-on-scroll">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Project Highlights</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              <strong>Role:</strong> {project.role}
            </p>
            <div className="space-y-3">
              {project.liveDemo && project.liveDemo !== '#' && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-link block w-full text-center px-4 py-2 bg-primary-accent text-gray-900 font-bold rounded-lg hover:bg-teal-300 transition"
                >
                  Live Demo &rarr;
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-link block w-full text-center px-4 py-2 border border-gray-400 text-gray-900 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                GitHub Repo &rarr;
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Context & Results</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              <span className="font-semibold text-red-500">Problem:</span> {project.problem}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-green-500">Impact:</span> {project.impact}
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white border-b pb-2 border-primary-accent/50">
            Technical Approach
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{project.approach}</p>
          <h4 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Technologies Used:</h4>
          <div className="flex flex-wrap gap-3">{techBadges}</div>
        </div>


        {/* Show ImageGallery at the bottom if screenshots array exists */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="border-t pt-8 border-gray-200 dark:border-gray-700">
            <ImageGallery images={project.screenshots} title="App Screenshots" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;

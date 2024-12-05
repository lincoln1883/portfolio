import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Project = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="p-4"
    >
      <motion.div
        className="h-full border-4 border-gray-800 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg overflow-hidden relative group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="p-6 h-full flex flex-col">
          <motion.h2
            className="text-2xl font-bold text-gray-900 dark:text-white mb-3 capitalize"
            layout
          >
            {project.name.replace(/-/g, ' ')}
          </motion.h2>
          
          <motion.p
            className="leading-relaxed mb-4 text-gray-700 dark:text-gray-400 flex-grow"
            layout
          >
            {project.description || 'A cool project worth checking out!'}
          </motion.p>
          
          <div className="mt-auto">
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              layout
            >
              {project.languages.nodes.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 text-sm font-medium text-primary-400 bg-primary-900/20 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  layout
                >
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div
              className="flex items-center gap-4"
              layout
            >
              {project.homepageUrl && (
                <motion.a
                  href={project.homepageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </motion.a>
              )}
              
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-gray-700 dark:border-gray-600 text-gray-700 dark:text-gray-400 rounded-lg font-medium hover:border-primary-500 hover:text-primary-500 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="w-4 h-4" />
                <span>Source</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
import React from 'react';
import { motion } from 'framer-motion';

const ProjectSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-4"
    >
      <div className="relative h-full border-4 border-gray-800 bg-gray-900 p-6 rounded-lg overflow-hidden">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-700 rounded w-full mb-6"></div>
          <div className="flex flex-wrap gap-2 mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-6 bg-gray-700 rounded w-16"></div>
            ))}
          </div>
          <div className="flex gap-4">
            <div className="h-10 bg-gray-700 rounded w-28"></div>
            <div className="h-10 bg-gray-700 rounded w-28"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 animate-shimmer"></div>
      </div>
    </motion.div>
  );
};

export default ProjectSkeleton;

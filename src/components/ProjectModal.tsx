import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Code } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Track if mouse is down inside modal to ignore clicks on drag/scroll
  let mouseDownInside = false;

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseDownInside = true;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    // Only close if mouse was down outside modal
    if (!mouseDownInside) {
      onClose();
    }
    mouseDownInside = false;
  };

  return (
    <AnimatePresence>
      <motion.div
        // Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        onMouseDown={() => (mouseDownInside = false)}
        onClick={onClose}
        onMouseUp={handleMouseUp}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: 'spring', damping: 30, stiffness: 500 }}
          className="bg-white dark:bg-dark-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-8 relative"
          onClick={(e) => {
            e.stopPropagation();
            mouseDownInside = true; // mark that mouse down inside modal
          }}
          onMouseDown={handleMouseDown}
        >
        <motion.div
  initial={{ scale: 0.9, y: 20, opacity: 0 }}
  animate={{ scale: 1, y: 0, opacity: 1 }}
  exit={{ scale: 0.9, y: 20, opacity: 0 }}
  transition={{ type: 'spring', damping: 30, stiffness: 500 }}
  className="bg-white dark:bg-dark-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-8 relative"
  onClick={(e) => {
    e.stopPropagation();
    mouseDownInside = true;
  }}
  onMouseDown={handleMouseDown}
>
  {/* ✅ START: Modal content */}
  <div className="space-y-4">
    <div className="flex justify-between items-start">
      <h2 className="text-2xl font-bold text-dark-900 dark:text-white">
        {project.title}
      </h2>
      <button onClick={onClose} className="text-dark-500 hover:text-red-500">
        <X size={24} />
      </button>
    </div>

    <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
      <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-700 rounded-lg max-h-[400px] overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="object-contain max-h-[400px] w-auto"
  />
</div>

    </div>

    <p className="text-dark-700 dark:text-gray-300">{project.description}</p>

    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech, idx) => (
        <span
          key={idx}
          className="text-sm px-3 py-1 bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-white rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex gap-4 pt-4">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-semibold"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-4 py-2 bg-dark-800 text-white rounded-full text-sm font-semibold"
        >
          <Github size={16} /> GitHub
        </a>
      )}
    </div>
  </div>
  {/* ✅ END: Modal content */}
</motion.div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};


export default ProjectModal;

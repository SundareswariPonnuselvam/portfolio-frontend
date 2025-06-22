// src/components/ProjectCard.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  variants: any;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, variants, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -8 }}
      className="relative rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 bg-white dark:bg-dark-800 p-6 flex flex-col justify-between"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* ✅ Image Section */}
      <div className="mb-4 max-h-40 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-auto object-contain"
          loading="lazy"
        />
      </div>





      <div>
        <h3 className="text-xl font-bold mb-2 text-dark-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 rounded-full bg-dark-800/70 text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className="px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-semibold"
        >
          View Details
        </motion.button>
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-white text-dark-900 rounded-full shadow hover:bg-gray-100 transition"
          aria-label="Live Demo"
        >
          <ExternalLink size={18} />
        </motion.a>
        {project.githubUrl && (
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white text-dark-900 rounded-full shadow hover:bg-gray-100 transition"
            aria-label="GitHub Repository"
          >
            <Github size={18} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

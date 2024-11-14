import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from './Portfolio';
import InteractiveButton from './InteractiveButton';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-gray-800 rounded-xl overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
      
      <div className="aspect-video relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex justify-between items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm text-blue-400 mb-2"
            >
              {project.category}
            </motion.p>
            <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
            <p className="text-gray-400 text-sm">{project.description}</p>
          </div>
          
          <InteractiveButton
            className="p-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project`}
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          </InteractiveButton>
        </div>
      </div>
    </motion.div>
  );
}
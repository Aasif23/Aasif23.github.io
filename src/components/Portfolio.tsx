import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import AnimatedContainer from './AnimatedContainer';

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Creating a lean design system",
    description: "Design system implementation",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    link: "#",
    category: "Design system"
  },
  {
    title: "Interior design news feed",
    description: "Side project",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    link: "#",
    category: "Product design"
  },
  {
    title: "On-site map search",
    description: "Product design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    link: "#",
    category: "UX Design"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedContainer>
          <motion.h2
            className="text-3xl font-bold text-center text-white mb-12"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
          >
            Latest Work
          </motion.h2>
        </AnimatedContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/5 dark:bg-dark/50 border border-white/10 dark:border-white/10 transition-all duration-500 transform hover:-translate-y-2 glow-shadow-hover" style={{ perspective: '1000px' }}>
      <img src={project.image} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2 text-light-text">{project.title}</h3>
        <p className="text-light-text/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="bg-accent-blue/80 text-white text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};


const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-white/50 dark:bg-dark/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text transition-shadow">
            Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <div key={project.title} className="animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
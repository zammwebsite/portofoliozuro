import React from 'react';
import { SKILLS_DATA } from '../constants';
import type { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="group relative bg-white/5 dark:bg-dark/50 p-6 rounded-xl border border-white/10 dark:border-white/10 glow-card transition-all duration-300 hover:-translate-y-2 hover:glow-shadow-hover">
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{skill.icon}</div>
      <h4 className="font-semibold text-lg text-dark-text dark:text-light-text">{skill.name}</h4>
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-white/50 dark:bg-dark/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text transition-shadow">
            Skills & Technology
        </h2>
        <div className="space-y-12">
          {SKILLS_DATA.map((category, index) => (
            <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
              <h3 className="text-xl font-bold mb-6 text-center md:text-left text-accent-blue">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
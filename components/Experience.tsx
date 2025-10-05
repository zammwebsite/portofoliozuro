import React from 'react';
import { EDUCATION_DATA, EXPERIENCE_DATA } from '../constants';

const TimelineItem: React.FC<{ title: string; subtitle: string; description: string; isLast?: boolean }> = ({ title, subtitle, description, isLast }) => (
  <div className="relative pl-8">
    {!isLast && <div className="absolute left-3 top-2 w-0.5 h-full bg-accent-blue/30"></div>}
    <div className="absolute left-0 top-0 w-6 h-6 bg-accent-blue rounded-full border-4 border-light-bg dark:border-dark flex items-center justify-center glow-shadow">
      <div className="w-2 h-2 bg-white rounded-full"></div>
    </div>
    <div className="mb-8">
      <p className="font-bold text-lg text-dark-text dark:text-white">{title}</p>
      <p className="text-sm text-accent-blue mb-2">{subtitle}</p>
      <p className="text-dark-text/80 dark:text-light-text/80">{description}</p>
    </div>
  </div>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 glow-text transition-shadow">Education</h3>
            <div>
              {EDUCATION_DATA.map((edu, index) => (
                <TimelineItem
                  key={edu.institution}
                  title={edu.institution}
                  subtitle={edu.year}
                  description={edu.description}
                  isLast={index === EDUCATION_DATA.length - 1}
                />
              ))}
            </div>
          </div>
          <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 glow-text transition-shadow">Experience</h3>
            <div>
              {EXPERIENCE_DATA.map((exp, index) => (
                <TimelineItem
                  key={exp.title}
                  title={exp.title}
                  subtitle={exp.period}
                  description={exp.description}
                  isLast={index === EXPERIENCE_DATA.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
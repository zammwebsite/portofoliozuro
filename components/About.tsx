import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text transition-shadow">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/3 flex justify-center animate-fade-in-up">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="./profile.png"
                alt="Bachrul Azam"
                className="rounded-full object-cover w-full h-full border-4 border-accent-blue/50 glow-shadow"
              />
              <div className="absolute inset-0 rounded-full border-2 border-accent-blue-glow animate-ping opacity-20"></div>
            </div>
          </div>
          <div className="w-full lg:w-2/3 text-center lg:text-left animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <p className="text-lg text-dark-text/80 dark:text-light-text/80 mb-6 leading-relaxed">
              I'm <strong className="font-semibold text-dark-text dark:text-white">Bachrul Azam</strong>, often known as <strong className="font-semibold text-accent-blue">Hai Zuro</strong>—a passionate full-stack developer, prompt engineer, and video editor. My work is driven by a simple philosophy: blend creativity, technology, and logic to build digital experiences that are not only functional and beautiful, but also meaningful.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="bg-accent-blue/10 text-accent-blue font-semibold px-4 py-2 rounded-full">📍 Based in Pacitan, Indonesia</div>
            </div>
            <a
              href="./resume.pdf"
              download="Bachrul-Azam-Resume.pdf"
              className="inline-block px-8 py-3 rounded-full font-bold text-white bg-accent-blue hover:bg-accent-blue-glow glow-shadow-hover transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

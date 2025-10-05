import React from 'react';

const Hero: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      if (history.pushState) {
        history.pushState(null, null, href);
      } else {
        window.location.hash = href;
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-blue-900/40 animate-gradient-bg -z-10 dark:opacity-100 opacity-0 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-blue-200/40 animate-gradient-bg -z-10 dark:opacity-0 opacity-100 transition-opacity duration-300"></div>

      <div className="container mx-auto px-6 z-10 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue-glow to-accent-blue">
            Hi, I'm Bachrul Azam
          </span>
        </h1>
        <p className="text-lg md:text-2xl font-semibold text-dark-text/80 dark:text-light-text/80 mb-6">
          Full-Stack Developer | Prompt Engineer | Video Editor
        </p>
        <p className="max-w-3xl mx-auto text-md md:text-lg text-dark-text/70 dark:text-light-text/70 mb-10">
          I transform ideas into captivating digital experiences, blending creativity with the power of modern technology.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={handleSmoothScroll}
            className="px-8 py-3 rounded-full font-bold text-white bg-accent-blue hover:bg-accent-blue-glow glow-shadow-hover transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={handleSmoothScroll}
            className="px-8 py-3 rounded-full font-bold border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white glow-shadow-hover transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
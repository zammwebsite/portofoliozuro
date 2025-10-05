import React, { useState, useEffect } from 'react';
import { LogoIcon } from './Icons';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-6 rounded-full p-1 bg-gray-300 dark:bg-gray-600 relative transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-blue"
      aria-label="Toggle theme"
    >
      <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out dark:transform dark:translate-x-6"></span>
      <span className="sr-only">Toggle Theme</span>
    </button>
  );
};

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-bg/80 dark:bg-dark/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={handleSmoothScroll} className="flex items-center gap-2 text-xl font-bold tracking-wider text-dark-text dark:text-white transition-all duration-300">
          <LogoIcon className="w-7 h-7 text-accent-blue animate-pulse-glow-svg" />
          <span className="animate-pulse-glow">
            Hai<span className="text-accent-blue">Zuro</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleSmoothScroll}
              className="text-dark-text dark:text-light-text glow-text-hover transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center">
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
  const [isExitingSplash, setIsExitingSplash] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  const handleEnter = useCallback(() => {
    if (isExitingSplash) return;
    setIsExitingSplash(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 500); // Must match SplashScreen transition duration
  }, [isExitingSplash]);

  useEffect(() => {
    const timer = setTimeout(handleEnter, 5000);
    return () => clearTimeout(timer);
  }, [handleEnter]);


  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  return (
    <>
      {showSplash && <SplashScreen isExiting={isExitingSplash} onEnter={handleEnter} />}
      <div className={`bg-light-bg dark:bg-dark text-dark-text dark:text-light-text font-sans transition-colors duration-300 ${!showSplash ? 'animate-content-fade-in' : 'opacity-0'}`}>
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
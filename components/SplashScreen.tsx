import React, { useState, useEffect } from 'react';
import { LogoIcon } from './Icons';

interface SplashScreenProps {
  isExiting: boolean;
  onEnter: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isExiting, onEnter }) => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 2500); // Show prompt after entry animations
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-dark transition-opacity duration-500 ease-in-out ${isExiting ? 'opacity-0' : 'opacity-100'}`}
      onClick={onEnter}
      onKeyPress={(e) => e.key === 'Enter' && onEnter()}
      aria-label="Enter website"
      role="button"
      tabIndex={0}
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="animate-fade-in-up" style={{ animationDuration: '1.2s' }}>
          <LogoIcon className="w-16 h-16 md:w-20 md:h-20 text-accent-blue" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-white overflow-hidden py-2">
          <span className="inline-block animate-slide-in-left">Hai</span>
          <span className="inline-block text-accent-blue animate-slide-in-right">Zuro</span>
        </h1>
        
        <div className={`absolute bottom-20 transition-opacity duration-1000 ${showPrompt ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-lg text-light-text/70 animate-subtle-pulse">
                Click anywhere to enter
            </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;

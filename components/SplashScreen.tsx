import React from 'react';
import { LogoIcon } from './Icons';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-dark animate-fade-out" style={{ animationDelay: '2.3s' }}>
      <div className="flex flex-col items-center justify-center gap-4 animate-text-glow-in">
        <LogoIcon className="w-16 h-16 md:w-20 md:h-20 text-accent-blue" />
        <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-white">
          Hai<span className="text-accent-blue">Zuro</span>
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;
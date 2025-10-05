import React from 'react';

const Footer: React.FC = () => {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
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
    <footer className="bg-dark/90 text-light-text/70">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div>
            <p>&copy; 2025 Hai Zuro – Bachrul Azam. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleSmoothScroll} className="glow-text-hover transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState, useEffect } from 'react';
import { AboutKitesLogo } from '../assets/kite-icons';
import { MenuIcon, XIcon } from '../assets/kite-icons';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="relative z-10">
            <div className="flex items-center gap-3">
              <AboutKitesLogo className={`h-14 transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`} />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-all duration-300 relative group ${
                  isScrolled
                    ? 'text-sky-900 hover:text-sky-600'
                    : 'text-sky-800 hover:text-sky-600'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <a
            href="https://www.facebook.com/share/1ArmavyhAb/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
              isScrolled
                ? 'bg-sky-500 text-white hover:bg-sky-600'
                : 'bg-white/90 text-sky-600 hover:bg-white shadow-lg'
            }`}
          >
            Facebook
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-sky-100 transition-colors relative z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XIcon className="w-6 h-6 text-sky-800" />
            ) : (
              <MenuIcon className="w-6 h-6 text-sky-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="text-sky-900 font-medium text-lg py-3 px-4 rounded-xl hover:bg-sky-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.facebook.com/share/1ArmavyhAb/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="bg-sky-500 text-white font-semibold text-center py-4 rounded-xl hover:bg-sky-600 transition-colors mt-4"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
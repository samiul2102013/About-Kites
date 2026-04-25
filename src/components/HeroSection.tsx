import { useEffect, useRef } from 'react';
import { AnimatedKite, FloatingClouds, KitePatternBackground, AboutKitesLogo } from '../assets/kite-icons';
import { ArrowRightIcon } from '../assets/kite-icons';

export const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = sectionRef.current?.querySelectorAll('.parallax');

      parallaxElements?.forEach((el) => {
        const speed = 0.5;
        (el as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/images/upscaled/picture-of-kite-1.jpg')" }}
      />
      {/* Background Elements */}
      <KitePatternBackground />
      <FloatingClouds />

      {/* Animated decorative kites */}
      <div className="absolute top-20 left-10 opacity-30 parallax hidden lg:block">
        <AnimatedKite className="w-20 h-24" />
      </div>
      <div className="absolute top-32 right-20 opacity-40 parallax hidden lg:block" style={{ animationDelay: '1s' }}>
        <AnimatedKite className="w-16 h-20" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-25 parallax hidden lg:block" style={{ animationDelay: '2s' }}>
        <AnimatedKite className="w-14 h-18" />
      </div>
      <div className="absolute top-48 right-1/4 opacity-35 parallax hidden md:block" style={{ animationDelay: '0.5s' }}>
        <AnimatedKite className="w-12 h-16" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-10">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:items-center">
          <div className="group flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="animate-fade-in-up transition-transform duration-300 group-hover:-translate-y-1">
              <AboutKitesLogo className="h-32 md:h-40 lg:h-48 drop-shadow-lg hover:scale-105 transition-transform duration-300" />
            </div>

            <h1 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-bold text-sky-900 animate-fade-in-up transition-all duration-300 group-hover:text-sky-800" style={{ animationDelay: '0.2s' }}>
              <span className="gradient-text">Sky High Fun</span>
              <br />
              <span className="text-2xl md:text-4xl lg:text-5xl text-sky-700">For Every Event</span>
            </h1>

            <p className="mt-6 text-lg text-sky-800/80 max-w-2xl animate-fade-in-up transition-all duration-300 group-hover:text-sky-700" style={{ animationDelay: '0.4s' }}>
              Professional kite displays and mobile kite sales for events.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <a
                href="#contact"
                className="w-full sm:w-56 px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 glow-effect flex items-center justify-center gap-2 group"
              >
                Contact Us
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#gallery"
                className="w-full sm:w-56 px-8 py-4 bg-white/80 backdrop-blur-sm text-sky-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-sky-200 hover:border-sky-400 hover:bg-white flex items-center justify-center gap-2"
              >
                View Gallery
              </a>
            </div>
          </div>

          <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="group overflow-hidden rounded-3xl border border-sky-200 bg-white/60 p-3 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-sky-300">
              <img
                src="/images/upscaled/picture-of-kite-2.jpg"
                alt="Kite display"
                className="h-[30rem] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};
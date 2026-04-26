import { useEffect, useRef, useState } from 'react';
import { TruckIcon, GlobeIcon, StarIcon } from '../assets/kite-icons';

export const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sky-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-4">
            About <span className="gradient-text">About Kites</span>
          </h2>
          <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
            We sell kites in a mobile trailer and provide professional large kite flying displays for events.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content - Image/Illustration */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="group overflow-hidden rounded-2xl border border-sky-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img
                src="/images/upscaled/organized-event.jpg"
                alt="Client event photo"
                loading="lazy"
                className="h-[20rem] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[26rem]"
              />
            </div>
          </div>

          {/* Right Content - Text */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="group rounded-2xl border border-transparent p-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-sky-50/60">
              <div className="flex items-start gap-4">
              <div className="p-4 bg-sky-100 rounded-2xl group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <TruckIcon />
              </div>
              <div>
                <h3 className="text-xl font-bold text-sky-900 mb-2">Mobile Kite Trailer</h3>
                <p className="text-sky-700/80">We travel town to town with our mobile trailer and quality kites.</p>
              </div>
              </div>
            </div>

            <div className="group rounded-2xl border border-transparent p-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-sky-50/60">
              <div className="flex items-start gap-4">
              <div className="p-4 bg-sky-100 rounded-2xl group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <GlobeIcon />
              </div>
              <div>
                <h3 className="text-xl font-bold text-sky-900 mb-2">Nationwide Service</h3>
                <p className="text-sky-700/80">We travel through states to host and support your event.</p>
              </div>
              </div>
            </div>

            <div className="group rounded-2xl border border-transparent p-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-sky-50/60">
              <div className="flex items-start gap-4">
              <div className="p-4 bg-sky-100 rounded-2xl group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <StarIcon />
              </div>
              <div>
                <h3 className="text-xl font-bold text-sky-900 mb-2">Quality Kites</h3>
                <p className="text-sky-700/80">Quality kites for all ages and skill levels.</p>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Owner Info */}
        <div className={`mt-16 text-center transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block bg-gradient-to-r from-sky-100 to-sky-50 rounded-2xl px-8 py-6">
            <p className="text-sky-700 font-medium">
              Owned and operated by <span className="text-sky-900 font-bold">Richard Hawkins & Jamie Hawkins</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
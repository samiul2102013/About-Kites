import { useEffect, useRef, useState } from 'react';
import { CalendarIcon, StarIcon, KiteIcon, ArrowRightIcon } from '../assets/kite-icons';

export const ServicesSection = () => {
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

  const services = [
    {
      icon: <KiteIcon className="w-12 h-12" />,
      title: "Large Kite Displays",
      description: "Spectacular professional kite flying displays featuring multiple large kites creating breathtaking aerial shows perfect for any event.",
      features: [
        "Multi-kite formations",
        "Professional pilots",
        "Custom choreography",
        "All weather operations"
      ],
      popular: true
    },
    {
      icon: <CalendarIcon className="w-12 h-12" />,
      title: "Event Planning",
      description: "Complete event coverage from initial consultation to final execution. We handle everything from setup to show management.",
      features: [
        "Event consultation",
        "Custom packages",
        "Setup & teardown",
        "On-site support"
      ],
      popular: false
    },
    {
      icon: <StarIcon className="w-12 h-12" />,
      title: "Kite Sales",
      description: "Wide selection of kites for sale from our mobile trailer. From beginner to professional, we have the perfect kite for you.",
      features: [
        "Beginner kites",
        "Stunt kites",
        "Large display kites",
        "Accessories & parts"
      ],
      popular: false
    }
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-br from-sky-50 via-white to-sky-100 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-sky-200 rounded-full translate-x-1/2 opacity-20 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-sky-100 rounded-full -translate-x-1/2 opacity-30 blur-3xl" />

      {/* Background Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="service-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40 10 L55 40 L40 70 L25 40 Z" fill="#0EA5E9" opacity="0.2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#service-pattern)" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-4">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-lg text-sky-700/70 max-w-2xl mx-auto">
            From spectacular kite displays to mobile kite sales, we bring the joy of kite flying to every event.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-glow hover-lift border border-sky-100 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >

              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-sky-600 group-hover:bg-sky-500 group-hover:text-white">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-sky-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sky-700/70 mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sky-600">
                    <svg className="w-5 h-5 text-sky-400 group-hover:text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sky-600 font-semibold group-hover:text-sky-700 transition-colors duration-300"
              >
                Learn More
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-t from-sky-100 to-transparent rounded-tl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className={`mt-16 bg-gradient-to-r from-sky-500 to-sky-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Background Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 5 L45 30 L30 55 L15 30 Z" fill="white" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-pattern)" />
          </svg>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make Your Event Unforgettable?
            </h3>
            <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your event needs and get a custom quote for your kite display or kite sales.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get a Quote
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
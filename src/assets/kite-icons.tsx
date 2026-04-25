export const KiteIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="kiteGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0EA5E9" />
        <stop offset="100%" stopColor="#38BDF8" />
      </linearGradient>
      <linearGradient id="kiteGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0369A1" />
      </linearGradient>
    </defs>
    {/* Main kite body - diamond shape */}
    <path d="M32 4 L56 32 L32 60 L8 32 Z" fill="url(#kiteGradient1)" stroke="#075985" strokeWidth="2"/>
    {/* Center vertical line */}
    <line x1="32" y1="4" x2="32" y2="60" stroke="#075985" strokeWidth="1.5"/>
    {/* Horizontal line */}
    <line x1="8" y1="32" x2="56" y2="32" stroke="#075985" strokeWidth="1.5"/>
    {/* Diagonal lines for detail */}
    <line x1="32" y1="4" x2="56" y2="32" stroke="#7DD3FC" strokeWidth="0.5" opacity="0.5"/>
    <line x1="32" y1="4" x2="8" y2="32" stroke="#7DD3FC" strokeWidth="0.5" opacity="0.5"/>
    <line x1="32" y1="60" x2="56" y2="32" stroke="#7DD3FC" strokeWidth="0.5" opacity="0.5"/>
    <line x1="32" y1="60" x2="8" y2="32" stroke="#7DD3FC" strokeWidth="0.5" opacity="0.5"/>
    {/* Kite tail */}
    <path d="M32 60 Q 28 68 34 76 Q 30 82 36 90" stroke="#0EA5E9" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* Tail bows */}
    <circle cx="32" cy="60" r="3" fill="#F5A623"/>
    <circle cx="30" cy="70" r="2" fill="#F5A623"/>
    <circle cx="34" cy="80" r="2" fill="#F5A623"/>
  </svg>
);

export const KiteWithTailIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 100 120" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="kiteTailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0EA5E9" />
        <stop offset="50%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#7DD3FC" />
      </linearGradient>
    </defs>
    {/* Kite string */}
    <path d="M50 65 Q 45 80 50 95 Q 48 105 52 115" stroke="#075985" strokeWidth="1.5" fill="none" strokeDasharray="4,2"/>
    {/* Main kite */}
    <path d="M50 10 L80 45 L50 80 L20 45 Z" fill="url(#kiteTailGradient)" stroke="#075985" strokeWidth="2"/>
    {/* Kite cross lines */}
    <line x1="50" y1="10" x2="50" y2="80" stroke="#075985" strokeWidth="1.5"/>
    <line x1="20" y1="45" x2="80" y2="45" stroke="#075985" strokeWidth="1.5"/>
    {/* Decorative elements */}
    <circle cx="50" cy="45" r="5" fill="#F5A623"/>
    <path d="M50 80 Q 45 85 50 90 Q 55 85 50 80" fill="#0284C7"/>
  </svg>
);

export const KiteWithPersonIcon = ({ className = "w-full h-full" }: { className?: string }) => (
  <svg viewBox="0 0 200 150" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#E0F2FE" />
        <stop offset="100%" stopColor="#BAE6FD" />
      </linearGradient>
      <linearGradient id="kiteBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0EA5E9" />
        <stop offset="100%" stopColor="#38BDF8" />
      </linearGradient>
    </defs>
    {/* Sky background */}
    <rect x="0" y="0" width="200" height="150" fill="url(#skyGradient)" rx="10"/>
    {/* Clouds */}
    <ellipse cx="30" cy="30" rx="20" ry="10" fill="white" opacity="0.8"/>
    <ellipse cx="45" cy="28" rx="15" ry="8" fill="white" opacity="0.8"/>
    <ellipse cx="160" cy="40" rx="18" ry="9" fill="white" opacity="0.8"/>
    <ellipse cx="175" cy="38" rx="12" ry="7" fill="white" opacity="0.8"/>
    {/* Kite string */}
    <path d="M140 55 Q 130 70 120 85 Q 115 95 100 110" stroke="#075985" strokeWidth="1.5" fill="none"/>
    {/* Kite */}
    <path d="M140 15 L170 45 L140 75 L110 45 Z" fill="url(#kiteBodyGradient)" stroke="#075985" strokeWidth="2"/>
    <line x1="140" y1="15" x2="140" y2="75" stroke="#075985" strokeWidth="1"/>
    <line x1="110" y1="45" x2="170" y2="45" stroke="#075985" strokeWidth="1"/>
    {/* Person silhouette */}
    <circle cx="85" cy="115" r="8" fill="#0369A1"/>
    <path d="M85 123 L85 140 M85 130 L75 140 M85 130 L95 140 M85 123 L75 133 M85 123 L95 133" stroke="#0369A1" strokeWidth="3" strokeLinecap="round" fill="none"/>
  </svg>
);

export const CloudIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 64 32" className={className} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="20" cy="24" rx="16" ry="8" fill="white" opacity="0.9"/>
    <ellipse cx="32" cy="20" rx="12" ry="8" fill="white" opacity="0.9"/>
    <ellipse cx="44" cy="24" rx="14" ry="7" fill="white" opacity="0.9"/>
    <ellipse cx="28" cy="16" rx="10" ry="6" fill="white" opacity="0.9"/>
  </svg>
);

export const WindIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2"/>
    <path d="M12.59 19.41A2 2 0 1 0 14 16H2"/>
    <path d="M17.73 12.27A2.5 2.5 0 1 1 19.5 16H2"/>
  </svg>
);

export const LocationIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

export const PhoneIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export const MailIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

export const FacebookIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export const InstagramIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export const TwitterIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const YoutubeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);

export const StarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

export const TruckIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13"/>
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/>
    <circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);

export const CalendarIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

export const ChevronDownIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

export const MenuIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

export const XIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export const ArrowRightIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

export const SparklesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
  </svg>
);

export const GlobeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

export const HeartIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

export const UsersIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

export const AwardIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
);

// Animated kite components
export const AnimatedKite = ({ className = "w-24 h-24" }: { className?: string }) => (
  <div className={`kite-float ${className}`}>
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="animKiteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="50%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>
      {/* String */}
      <path d="M50 70 Q 45 85 50 100" stroke="#075985" strokeWidth="1.5" fill="none" className="string-wiggle"/>
      {/* Kite body */}
      <path d="M50 5 L80 45 L50 85 L20 45 Z" fill="url(#animKiteGradient)" stroke="#075985" strokeWidth="2"/>
      {/* Cross lines */}
      <line x1="50" y1="5" x2="50" y2="85" stroke="#7DD3FC" strokeWidth="1"/>
      <line x1="20" y1="45" x2="80" y2="45" stroke="#7DD3FC" strokeWidth="1"/>
      {/* Decorative circle */}
      <circle cx="50" cy="45" r="8" fill="#F5A623"/>
      {/* Tail bows */}
      <circle cx="50" cy="80" r="3" fill="#F5A623"/>
      <circle cx="48" cy="90" r="2" fill="#F5A623"/>
    </svg>
  </div>
);

// Floating clouds component
export const FloatingClouds = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="cloud-drift absolute" style={{ top: '10%', animationDelay: '0s', animationDuration: '25s' }}>
      <CloudIcon className="w-32 h-16 text-white/60" />
    </div>
    <div className="cloud-drift absolute" style={{ top: '25%', animationDelay: '8s', animationDuration: '30s' }}>
      <CloudIcon className="w-24 h-12 text-white/40" />
    </div>
    <div className="cloud-drift absolute" style={{ top: '40%', animationDelay: '15s', animationDuration: '28s' }}>
      <CloudIcon className="w-40 h-20 text-white/50" />
    </div>
    <div className="cloud-drift absolute" style={{ top: '5%', animationDelay: '5s', animationDuration: '22s' }}>
      <CloudIcon className="w-20 h-10 text-white/30" />
    </div>
  </div>
);

// Background pattern component
export const KitePatternBackground = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="kite-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M30 5 L45 30 L30 55 L15 30 Z" fill="#0EA5E9" opacity="0.3"/>
        <line x1="30" y1="5" x2="30" y2="55" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.5"/>
        <line x1="15" y1="30" x2="45" y2="30" stroke="#0EA5E9" strokeWidth="0.5" opacity="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#kite-pattern)" />
  </svg>
);

// Logo component using provided image
export const AboutKitesLogo = ({ className = "h-16" }: { className?: string }) => (
  <img
    src="https://i.postimg.cc/nLhpSMVJ/1000014861-(2).png"
    alt="About Kites Logo"
    className={className}
  />
);

// Social Media Icons Component
export const SocialMediaButtons = () => (
  <div className="flex justify-start gap-3">
    <a
      href="https://www.facebook.com/share/1ArmavyhAb/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-white/25 px-4 py-2.5 text-sky-800 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-sky-500 hover:text-white"
      aria-label="Facebook"
    >
      <FacebookIcon className="w-5 h-5" />
      <span className="text-sm font-semibold">Facebook</span>
    </a>
  </div>
);
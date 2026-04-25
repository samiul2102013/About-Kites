import { AboutKitesLogo, SocialMediaButtons, FacebookIcon, PhoneIcon, MailIcon } from '../assets/kite-icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-sky-900 to-sky-950 text-white pt-16 pb-8 overflow-hidden">
      {/* Background Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="footer-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 5 L45 30 L30 55 L15 30 Z" fill="white" opacity="0.2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-pattern)" />
      </svg>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-sky-600 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500 rounded-full opacity-10 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <AboutKitesLogo className="h-24 mb-6" />
            <p className="text-sky-200 mb-6 max-w-md">
              Professional kite flying displays and mobile kite sales.
              We travel town to town, bringing joy to events across states!
            </p>
            <SocialMediaButtons />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-sky-100">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sky-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-sky-400 group-hover:bg-white group-hover:w-3 transition-all duration-300 rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-sky-100">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:832-396-7645"
                  className="flex items-center gap-3 text-sky-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className="p-2 bg-sky-800 group-hover:bg-sky-700 rounded-lg transition-colors">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-sky-400">Phone</p>
                    <p className="font-medium">832-396-7645</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:aboutkites@earthlink.net"
                  className="flex items-center gap-3 text-sky-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className="p-2 bg-sky-800 group-hover:bg-sky-700 rounded-lg transition-colors">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-sky-400">Email</p>
                    <p className="font-medium">aboutkites@earthlink.net</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/1ArmavyhAb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sky-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className="p-2 bg-sky-800 group-hover:bg-sky-700 rounded-lg transition-colors">
                    <FacebookIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-sky-400">Facebook</p>
                    <p className="font-medium">Follow Us</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-sky-700 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sky-400 text-sm text-center md:text-left">
            © {currentYear} About Kites. All rights reserved.
          </p>
          <p className="text-sky-400 text-sm">
            Owned by <span className="text-sky-300 font-medium">Richard Hawkins</span>
          </p>
        </div>

        {/* Decorative Kites */}
        <div className="absolute bottom-20 left-10 opacity-20 hidden lg:block">
          <svg viewBox="0 0 60 80" className="w-12 h-16">
            <path d="M30 5 L50 40 L30 75 L10 40 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-32 right-20 opacity-20 hidden lg:block">
          <svg viewBox="0 0 60 80" className="w-10 h-14">
            <path d="M30 5 L50 40 L30 75 L10 40 Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </footer>
  );
};
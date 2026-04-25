import { FacebookIcon, MailIcon, PhoneIcon } from '../assets/kite-icons';

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-sky-100/70 blur-2xl" />
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-sky-100/70 blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-8 shadow-lg md:p-10">
          <h2 className="text-center text-3xl font-bold text-sky-900 md:text-4xl">Contact</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sky-700/80">Owner: Richard Hawkins</p>
          <p className="mx-auto mt-1 max-w-2xl text-center text-sm text-sky-600">Fast response for event inquiries</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <a
              href="tel:832-396-7645"
              className="group flex items-center gap-3 rounded-2xl border border-sky-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-md"
            >
              <div className="rounded-lg bg-sky-100 p-2 text-sky-700 transition-colors duration-300 group-hover:bg-sky-500 group-hover:text-white">
                <PhoneIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-sky-600">Phone</p>
                <p className="font-semibold text-sky-900">832-396-7645</p>
              </div>
            </a>

            <a
              href="mailto:aboutkites@earthlink.net"
              className="group flex items-center gap-3 rounded-2xl border border-sky-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-md"
            >
              <div className="rounded-lg bg-sky-100 p-2 text-sky-700 transition-colors duration-300 group-hover:bg-sky-500 group-hover:text-white">
                <MailIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-sky-600">Email</p>
                <p className="font-semibold text-sky-900">aboutkites@earthlink.net</p>
              </div>
            </a>

            <a
              href="https://www.facebook.com/share/1ArmavyhAb/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-sky-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-md"
            >
              <div className="rounded-lg bg-sky-100 p-2 text-sky-700 transition-colors duration-300 group-hover:bg-sky-500 group-hover:text-white">
                <FacebookIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-sky-600">Social</p>
                <p className="font-semibold text-sky-900">Facebook</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

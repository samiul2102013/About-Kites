import { FacebookIcon, MailIcon, PhoneIcon } from '../assets/kite-icons';

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-sky-100/70 blur-2xl" />
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-sky-100/70 blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-8 shadow-lg md:p-10">
          <h2 className="text-center text-3xl font-bold text-sky-900 md:text-4xl">Contact</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sky-700/80">Connect directly with the team.</p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-sky-600">Owner</p>
              <h3 className="mt-1 text-xl font-semibold text-sky-900">Richard Hawkins</h3>

              <div className="mt-4 space-y-3">
                <a
                  href="tel:832-396-7645"
                  className="group flex items-center justify-between rounded-xl border border-sky-100 px-3 py-2 transition-colors hover:border-sky-300"
                >
                  <span className="flex items-center gap-2 text-sky-700">
                    <PhoneIcon className="h-4 w-4" />
                    <span className="text-sm">Phone</span>
                  </span>
                  <span className="font-semibold text-sky-900">832-396-7645</span>
                </a>
                <a
                  href="mailto:aboutkites@earthlink.net"
                  className="group flex items-center justify-between rounded-xl border border-sky-100 px-3 py-2 transition-colors hover:border-sky-300"
                >
                  <span className="flex items-center gap-2 text-sky-700">
                    <MailIcon className="h-4 w-4" />
                    <span className="text-sm">Email</span>
                  </span>
                  <span className="font-semibold text-sky-900">aboutkites@earthlink.net</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-sky-200 bg-white p-5 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-sky-600">Co-Owner</p>
              <h3 className="mt-1 text-xl font-semibold text-sky-900">Jamie Hawkins</h3>

              <div className="mt-4 space-y-3">
                <a
                  href="tel:713-836-1554"
                  className="group flex items-center justify-between rounded-xl border border-sky-100 px-3 py-2 transition-colors hover:border-sky-300"
                >
                  <span className="flex items-center gap-2 text-sky-700">
                    <PhoneIcon className="h-4 w-4" />
                    <span className="text-sm">Phone</span>
                  </span>
                  <span className="font-semibold text-sky-900">713-836-1554</span>
                </a>
                <a
                  href="mailto:coresec2020@gmail.com"
                  className="group flex items-center justify-between rounded-xl border border-sky-100 px-3 py-2 transition-colors hover:border-sky-300"
                >
                  <span className="flex items-center gap-2 text-sky-700">
                    <MailIcon className="h-4 w-4" />
                    <span className="text-sm">Email</span>
                  </span>
                  <span className="font-semibold text-sky-900">coresec2020@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://www.facebook.com/share/1ArmavyhAb/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-6 flex w-full max-w-xs items-center justify-center gap-2 rounded-xl border border-sky-200 bg-white px-4 py-3 text-sky-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-sm"
          >
            <FacebookIcon className="h-5 w-5" />
            <span className="font-semibold">Follow on Facebook</span>
          </a>
          </div>
        </div>
    </section>
  );
};

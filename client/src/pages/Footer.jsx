import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo & About */}
          <div className="lg:col-span-2">

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F766E] text-2xl font-bold text-white shadow-lg">
                C
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Care<span className="text-[#2DD4BF]">ly</span>
                </h2>

                <p className="text-xs text-slate-400">
                  Your health. Your support.
                </p>
              </div>

            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              Carely brings patients, volunteers, and AI-powered
              assistance together in one simple place. Get the support
              you need, when you need it.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href="#home"
                  className="transition hover:text-[#2DD4BF]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition hover:text-[#2DD4BF]"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#support"
                  className="transition hover:text-[#2DD4BF]"
                >
                  Request Support
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="transition hover:text-[#2DD4BF]"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href="#patient-support"
                  className="transition hover:text-[#2DD4BF]"
                >
                  Patient Support
                </a>
              </li>

              <li>
                <a
                  href="#volunteer"
                  className="transition hover:text-[#2DD4BF]"
                >
                  Volunteer Registration
                </a>
              </li>

              <li>
                <a
                  href="#carebot"
                  className="transition hover:text-[#2DD4BF]"
                >
                  CareBot AI Assistant
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-slate-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Carely. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500">

            <a
              href="#privacy"
              className="transition hover:text-[#2DD4BF]"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="transition hover:text-[#2DD4BF]"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </div>

      {/*  Notice */}
      <div className="border-t border-slate-700 bg-[#0B1220]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-6 py-4 text-center text-xs text-slate-400">
          <span className="text-[#DC2626]">⚠</span>
          <span>
            For emergencies, please contact your local emergency services
            immediately.
          </span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;


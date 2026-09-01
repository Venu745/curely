
import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I request support?",
      answer:
        "You can request support by completing the support form on our website. Provide your name, contact details, support category, and a short description of what you need help with. Our team will review your request and get back to you.",
    },
    {
      question: "How can I become a volunteer?",
      answer:
        "You can become a volunteer by registering through our Volunteer Registration service. Submit your details and tell us how you would like to contribute. Our team will contact you with the next steps.",
    },
    {
      question: "How does CareConnect work?",
      answer:
        "CareConnect brings patients, volunteers, and AI-powered assistance together in one simple place. You can request support, find helpful resources, register as a volunteer, or use CareBot to get quick guidance.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-6 py-20">

      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0F766E]/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">

        {/* Heading */}
        <div className="mb-12 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#0F766E]">
            Frequently Asked Questions
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            FAQ
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[#64748B]">
            Find answers to some of the most common questions about
            CareConnect and our support services.
          </p>

        </div>

        {/* FAQ List */}
        <div className="space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#0F766E]/30 shadow-md"
                    : "border-slate-100 shadow-sm"
                }`}
              >

                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >

                  <div className="flex items-center gap-4">

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition ${
                        isOpen
                          ? "bg-[#0F766E] text-white"
                          : "bg-[#E6F4F1] text-[#0F766E]"
                      }`}
                    >
                      {index + 1}
                    </span>

                    <span className="font-semibold text-[#0F172A]">
                      {faq.question}
                    </span>

                  </div>

                  {/* Arrow */}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8FAFC] text-[#64748B] transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#0F766E]" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>

                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">

                    <div className="border-t border-slate-100 px-6 pb-6 pt-4 pl-[88px]">
                      <p className="text-sm leading-7 text-[#64748B]">
                        {faq.answer}
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Help Card */}
        <div className="mt-10 rounded-2xl bg-[#0F766E] p-7 text-center shadow-lg shadow-[#0F766E]/20">

          <h2 className="text-xl font-bold text-white">
            Still have questions?
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-white/80">
            Our support team is here to help. Send us a request and
            we'll help you find the right support.
          </p>

          <button
            type="button"
            className="mt-5 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0F766E] transition hover:bg-[#F0FDFA]"
          >
            Request Support
          </button>

        </div>

      </div>
    </section>
  );
};

export default Faq;


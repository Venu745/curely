import React from "react";

const Services = () => {
  const services = [
    {
      icon: "🩺",
      title: "Patient Support",
      description:
        "Get guidance, resources, and support to help you navigate your care journey.",
      color: "#0F766E",
      bg: "#E6F4F1",
    },
    {
      icon: "🤝",
      title: "Volunteer Registration",
      description:
        "Join our community of volunteers and make a meaningful difference in someone's life.",
      color: "#2563EB",
      bg: "#EFF6FF",
    },
    {
      icon: "🤖",
      title: "CareBot AI Assistant",
      description:
        "Get quick answers, helpful information, and guidance whenever you need it.",
      color: "#0F766E",
      bg: "#E6F4F1",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8FAFC] px-6 py-20">

      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#0F766E]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#0F766E]">
            What we offer
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            Our Services
          </h1>

          <p className="mt-5 text-lg leading-8 text-[#64748B]">
            Simple, accessible support designed to connect patients,
            volunteers, and helpful AI assistance in one place.
          </p>

        </div>

        {/* Service Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Icon */}
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: service.bg,
                }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h2
                className="mt-6 text-xl font-bold"
                style={{
                  color: service.color,
                }}
              >
                {service.title}
              </h2>

              <p className="mt-3 leading-7 text-[#64748B]">
                {service.description}
              </p>

              {/* Learn More */}
              <button
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3"
                style={{
                  color: service.color,
                }}
              >
                Learn More
                <span>→</span>
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;


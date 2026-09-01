import React from "react";

const About = () => {
  const features = [
    {
      icon: "🩺",
      title: "Patient First",
      text: "We focus on making support simple, accessible, and easy to find for every patient.",
      color: "#0F766E",
      bg: "#E6F4F1",
    },
    {
      icon: "🤝",
      title: "Community Support",
      text: "We connect people with volunteers and resources that can make a real difference.",
      color: "#2563EB",
      bg: "#EFF6FF",
    },
    {
      icon: "🤖",
      title: "Smart Assistance",
      text: "Our CareBot AI Assistant provides quick guidance and helps users find the right support.",
      color: "#0F766E",
      bg: "#E6F4F1",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-6 py-20">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0F766E]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Hero / Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#0F766E]">
            About Carely
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
            Connecting People With
            <span className="text-[#0F766E]"> The Support They Need</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#64748B]">
            Carely is a simple platform designed to bring patients,
            volunteers, and helpful AI assistance together in one place.
            Our goal is to make finding support easier and more accessible.
          </p>

        </div>

        {/* Mission Card */}
        <div className="mx-auto mt-14 max-w-5xl rounded-3xl bg-[#0F766E] p-8 text-white shadow-xl shadow-[#0F766E]/20 sm:p-12">

          <div className="grid items-center gap-8 md:grid-cols-3">

            <div className="flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 text-5xl">
                ❤️
              </div>
            </div>

            <div className="md:col-span-2">

              <p className="text-sm font-semibold uppercase tracking-wider text-[#99F6E4]">
                Our Mission
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Your Health. Your Support. One Simple Place.
              </h2>

              <p className="mt-4 leading-7 text-white/80">
                We believe everyone should be able to find the support they
                need without feeling overwhelmed. CareConnect brings useful
                services together so people can reach the right help faster.
              </p>

            </div>

          </div>

        </div>

        {/* What We Do */}
        <div className="mt-20">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0F766E]">
              What We Do
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#0F172A] sm:text-4xl">
              Support Made Simple
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#64748B]">
              Everything you need to connect with support, resources,
              and assistance.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Icon */}
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: feature.bg,
                  }}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3
                  className="mt-6 text-xl font-bold"
                  style={{
                    color: feature.color,
                  }}
                >
                  {feature.title}
                </h3>

                {/* Text */}
                <p className="mt-3 leading-7 text-[#64748B]">
                  {feature.text}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Simple Values */}
        <div className="mt-20 grid gap-6 sm:grid-cols-3">

          <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-[#0F766E]">
              Simple
            </div>
            <p className="mt-2 text-sm text-[#64748B]">
              Easy-to-use support services
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-[#2563EB]">
              Connected
            </div>
            <p className="mt-2 text-sm text-[#64748B]">
              People and resources in one place
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-[#0F766E]">
              Supportive
            </div>
            <p className="mt-2 text-sm text-[#64748B]">
              Help when you need it
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;


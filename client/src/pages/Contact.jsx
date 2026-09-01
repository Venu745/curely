
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    alert("Your message has been sent successfully!");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8FAFC] px-6 py-20">

      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-[#0F766E]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#2563EB]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#0F766E]">
            Get In Touch
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
            Contact Us
          </h1>

          <p className="mt-5 text-lg leading-8 text-[#64748B]">
            Have a question or need help? Our team is here to listen and
            help you find the right support.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-5">

          {/* Contact Information */}
          <div className="rounded-3xl bg-[#0F766E] p-8 text-white shadow-xl shadow-[#0F766E]/20 lg:col-span-2">

            <h2 className="text-2xl font-bold">
              Let's Talk
            </h2>

            <p className="mt-3 leading-7 text-white/80">
              Whether you have a question, need support, or want to learn
              more about CareConnect, feel free to reach out.
            </p>

            <div className="mt-10 space-y-7">

              {/* Email */}
              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                  ✉
                </div>

                <div>
                  <p className="text-sm text-white/60">
                    Email
                  </p>

                  <p className="mt-1 font-medium">
                    support@careconnect.com
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                  ☎
                </div>

                <div>
                  <p className="text-sm text-white/60">
                    Phone
                  </p>

                  <p className="mt-1 font-medium">
                    +91 98765 43210
                  </p>
                </div>

              </div>

              {/* Location */}
              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                  📍
                </div>

                <div>
                  <p className="text-sm text-white/60">
                    Location
                  </p>

                  <p className="mt-1 font-medium">
                    Andhra Pradesh, India
                  </p>
                </div>

              </div>

              {/* Working Hours */}
              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl">
                  🕐
                </div>

                <div>
                  <p className="text-sm text-white/60">
                    Support Hours
                  </p>

                  <p className="mt-1 font-medium">
                    Monday – Saturday
                  </p>

                  <p className="text-sm text-white/70">
                    9:00 AM – 6:00 PM
                  </p>
                </div>

              </div>

            </div>

            {/* Emergency */}
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-4">

              <div className="flex gap-3">

                <span className="text-[#F59E0B]">
                  ⚠
                </span>

                <p className="text-xs leading-5 text-white/80">
                  For medical emergencies, please contact your local
                  emergency services immediately.
                </p>

              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg sm:p-8 lg:col-span-3">

            <h2 className="text-2xl font-bold text-[#0F172A]">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm text-[#64748B]">
              Fill out the form below and we'll get back to you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >

              {/* Name + Phone */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-[#0F172A] outline-none placeholder:text-[#94A3B8] transition focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-[#0F172A] outline-none placeholder:text-[#94A3B8] transition focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10"
                  />
                </div>

              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-[#0F172A] outline-none placeholder:text-[#94A3B8] transition focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
                  Subject
                </label>

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#0F172A] outline-none transition focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10"
                >
                  <option value="">Select a subject</option>
                  <option value="patient-support">
                    Patient Support
                  </option>
                  <option value="volunteer">
                    Volunteer Registration
                  </option>
                  <option value="carebot">
                    CareBot AI Assistant
                  </option>
                  <option value="general">
                    General Question
                  </option>
                  <option value="feedback">
                    Feedback
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-[#0F172A] outline-none placeholder:text-[#94A3B8] transition focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#0F766E] px-6 py-4 font-semibold text-white shadow-lg shadow-[#0F766E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#115E59] hover:shadow-xl"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;


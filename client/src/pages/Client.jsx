
import React, { useState } from "react";
import toast from "react-hot-toast";

const Client = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    supportType: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Support request sent successfully!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      supportType: "",
      category: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-[#F8FAFC] px-6 py-16">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#0F766E]">
            Patient Support
          </p>

          <h1 className="text-4xl font-bold text-[#0F172A] sm:text-5xl">
            How Can We Help?
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-[#64748B]">
            Tell us what you need help with and our support team will get back
            to you as soon as possible.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Support Type */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
                Support Type
              </label>

              <select
                name="supportType"
                value={formData.supportType}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#0F172A] outline-none transition focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10"
              >
                <option value="">Select support type</option>
                <option value="patient-support">Patient Support</option>
                <option value="medical-guidance">Medical Guidance</option>
                <option value="appointment">Appointment Support</option>
                <option value="general">General Support</option>
              </select>
            </div>

            {/* Name and Phone */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
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
                  required
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

            {/* Support Category */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#0F172A]">
                Support Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#0F172A] outline-none transition focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10"
              >
                <option value="">Select a category</option>
                <option value="health-support">Health Support</option>
                <option value="emotional-support">Emotional Support</option>
                <option value="volunteer-support">Volunteer Support</option>
                <option value="financial-support">Financial Support</option>
                <option value="other">Other</option>
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
                placeholder="Tell us how we can help..."
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 text-[#0F172A] outline-none placeholder:text-[#94A3B8] transition focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-[#0F766E] px-6 py-4 font-semibold text-white shadow-lg shadow-[#0F766E]/20 transition hover:-translate-y-0.5 hover:bg-[#115E59] hover:shadow-xl sm:w-auto sm:min-w-[200px]"
              >
                Submit Request
              </button>
            </div>
          </form>

          {/* Privacy Note */}
          <div className="mt-7 flex gap-3 rounded-xl bg-[#F8FAFC] p-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E6F4F1] text-[#0F766E]">
              🔒
            </div>

            <p className="text-xs leading-5 text-[#64748B]">
              Your information is used only to respond to your support request.
              Please do not include sensitive medical information in this form.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;

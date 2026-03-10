"use client";

import { useState } from "react";
import { contactInfo } from "@/lib/data";

const pickupOptions = [
  "Seville — City Centre",
  "Seville — SVQ Airport",
  "Málaga — City Centre",
  "Málaga — AGP Airport",
  "Other location in Andalusia",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState<"self-drive" | "guided">("self-drive");
  const [form, setForm] = useState({
    name: "", email: "", country: "",
    pickupLocation: "", dropoffLocation: "",
    startDate: "", endDate: "",
    travelers: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Connect to Formspree or Resend — see README for instructions
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6 pt-24">
        <div className="max-w-lg text-center">
          <span className="text-5xl block mb-6">✦</span>
          <h1 className="font-display text-4xl font-light text-charcoal mb-4">Request received.</h1>
          <p className="font-body text-base text-charcoal/60 leading-relaxed">
            Thank you, {form.name}. We will review your request and reply to{" "}
            <span className="text-terra-500">{form.email}</span> within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-16 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 70% 50%, #c85530 0%, transparent 50%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="block w-4 h-px bg-terra-400" />
            <span className="font-mono text-[10px] tracking-widest text-terra-400 uppercase">Get in touch</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-light text-cream mb-5 leading-tight">
            Book your<br /><em className="italic text-sand-300">Andalusian adventure.</em>
          </h1>
          <p className="font-body text-base text-cream/60 max-w-md leading-relaxed mb-6">
            Fill in the form and we will get back to you within 24 hours.
            No payment required — just tell us your plans.
          </p>
          <div className="flex flex-col gap-2">
            {[
              { icon: "✉️", label: "Email", value: contactInfo.email },
              { icon: "📍", label: "Pickup", value: contactInfo.pickupNote },
              { icon: "⏱", label: "Min rental", value: "5 nights" },
            ].map((info) => (
              <div key={info.label} className="flex items-center gap-3">
                <span>{info.icon}</span>
                <span className="font-mono text-[9px] tracking-widest uppercase text-cream/40">{info.label}:</span>
                <span className="font-body text-sm text-cream/65">{info.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="py-16 bg-sand-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-cream border border-sand-200 rounded-sm p-8 md:p-12">

            {/* Product type selector */}
            <div className="mb-8">
              <div className="mb-3 flex items-center gap-2">
                <span className="block w-4 h-px bg-terra-500" />
                <span className="font-mono text-[10px] tracking-widest text-terra-500 uppercase">What are you interested in?</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setType("self-drive")}
                  className={`p-4 border text-left rounded-sm transition-all ${type === "self-drive" ? "border-terra-400 bg-terra-50" : "border-sand-200 hover:border-sand-300"}`}
                >
                  <div className="font-body font-medium text-sm text-charcoal mb-1">Self-Drive Rental</div>
                  <div className="font-mono text-[9px] text-charcoal/50 tracking-wide">From €150/day</div>
                </button>
                <button
                  onClick={() => setType("guided")}
                  className={`p-4 border text-left rounded-sm transition-all ${type === "guided" ? "border-terra-400 bg-terra-50" : "border-sand-200 hover:border-sand-300"}`}
                >
                  <div className="font-body font-medium text-sm text-charcoal mb-1">Guided Campervan Tour</div>
                  <div className="font-mono text-[9px] text-charcoal/50 tracking-wide">From €800/day</div>
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="block font-mono text-[9px] tracking-widest uppercase text-charcoal/40 mb-2">Full Name *</label>
                <input type="text" name="name" required value={form.name} onChange={handleChange}
                  className="w-full px-4 py-3 border border-sand-200 bg-sand-50 font-body text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-terra-400 transition-colors rounded-sm"
                  placeholder="Your full name" />
              </div>

              {/* Email */}
              <div>
                <label className="block font-mono text-[9px] tracking-widest uppercase text-charcoal/40 mb-2">Email Address *</label>
                <input type="email" name="email" required value={form.email} onChange={handleChange}
                  className="w-full px-4 py-3 border border-sand-200 bg-sand-50 font-body text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-terra-400 transition-colors rounded-sm"
                  placeholder="your@email.com" />
              </div>

              {/* Country */}
              <div>
                <label className="block font-mono text-[9px] tracking-widest uppercase text-charcoal/40 mb-2">Country *</label>
                <input type="text" name="country" required value={form.country} onChange={handleChange}
                  className="w-full px-4 py-3 border border-sand-200 bg-sand-50 font-body text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-terra-400 transition-colors rounded-sm"
                  placeholder="e.g. United Kingdom" />
              </div>

              {/* Travelers */}
              <div>
                <label className="block font-mono text-[9px] tracking-widest uppercase text-charcoal/40 mb-2">Number of Travellers *</label>
                <select name="travelers" required value={form.travelers} onChange={handleChange}
                  className="w-full px-4 py-3 border border-sand-200 bg-sand-50 font-body text-sm text-charcoal focus:outline-none focus:border-terra-400 transition-colors rounded-sm">
                  <option value="" disabled>Select</option>
                  {["1", "2", "3", "4"].map((n) => <option key={n} value={n}>{n} {n === "1" ? "person" : "people"}</option>)}
                </select>
              </div>

              {/* Pickup (only for self-drive) */}
              {type === "self-drive" && (
                <>
                  <div>
                    <label className="block font-mono text-[9px] tracking-widest uppercase text-charcoal/40 mb-2">Pickup Location *</label>
                    <select name="pickupLocation" required value={form.pickupLocation} onChange={handleChange}
                      className="w-full px-4 py-3 border border-sand-200 bg-sand-50 font-body text-sm text-charcoal focus:outline-none focus:border-terra-400 transition-colors rounded-sm">
                      <option value="" disabled>Select pickup</option>
                      {pickupOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-[9px] tracking-widest uppercase text-charcoal/40 mb-2">Drop-off Location *</label>
                    <select name="dropoffLocation" required value={form.dropoffLocation} onChange={handleChange}
                      className="w-full px-4 py-3 border border-sand-200 bg-sand-50 font-body text-sm text-charcoal focus:outline-none focus:border-terra-400 transition-colors rounded-sm">
                      <option value="" disabled>Select drop-off</option>
                      {pickupOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </>
              )}

              {/* Dates */}
              <div>
                <label className="block font-mono text-[9px] tracking-widest uppercase text-charcoal/40 mb-2">Start Date *</label>
                <input type="date" name="startDate" required value={form.startDate} onChange={handleChange}
                  className="w-full px-4 py-3 border border-sand-200 bg-sand-50 font-body text-sm text-charcoal focus:outline-none focus:border-terra-400 transition-colors rounded-sm" />
              </div>
              <div>
                <label className="block font-mono text-[9px] tracking-widest uppercase text-charcoal/40 mb-2">End Date *</label>
                <input type="date" name="endDate" required value={form.endDate} onChange={handleChange}
                  className="w-full px-4 py-3 border border-sand-200 bg-sand-50 font-body text-sm text-charcoal focus:outline-none focus:border-terra-400 transition-colors rounded-sm" />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="block font-mono text-[9px] tracking-widest uppercase text-charcoal/40 mb-2">
                  {type === "guided" ? "Tell us about your dream trip *" : "Any questions or special requirements?"}
                </label>
                <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                  className="w-full px-4 py-3 border border-sand-200 bg-sand-50 font-body text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-terra-400 transition-colors rounded-sm resize-none"
                  placeholder={type === "guided"
                    ? "Tell us your interests, travel style, budget, and any places you'd love to see..."
                    : "Pets, special requirements, route ideas, questions about the van..."
                  } />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button onClick={handleSubmit}
                  className="w-full py-4 bg-terra-500 text-cream font-body font-medium text-sm tracking-wide hover:bg-terra-600 active:scale-[0.99] transition-all rounded-sm">
                  Send Request →
                </button>
                <p className="mt-3 font-mono text-[9px] tracking-wide text-charcoal/35 text-center">
                  No payment required. We will reply within 24 hours at {contactInfo.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

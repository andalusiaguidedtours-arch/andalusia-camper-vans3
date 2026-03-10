import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ — Campervan Rental Andalusia",
  description:
    "Everything you need to know about renting a campervan in Andalusia. Insurance, mileage, pets, Portugal, Morocco, deposits and more — answered honestly.",
};

export default function FaqPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-sand-50 border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body text-xs tracking-widest uppercase text-terra-600 mb-4">FAQ</p>
          <h1 className="font-display text-5xl lg:text-6xl font-light text-charcoal max-w-2xl leading-tight">
            Honest answers to<br />real questions.
          </h1>
          <p className="font-body text-base text-charcoal/60 mt-5 max-w-xl leading-relaxed">
            We've tried to answer the questions we actually get — not a list of softball softballs. If you can't find what you're looking for, just send us a message.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-px">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-sand-50 border border-sand-200 open:bg-white open:border-sand-300">
                <summary className="flex items-start justify-between px-6 py-5 cursor-pointer list-none gap-4">
                  <span className="font-display text-xl font-light text-charcoal leading-snug">{faq.q}</span>
                  <span className="text-terra-500 font-body text-xl group-open:rotate-45 transition-transform mt-0.5 shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 p-8 bg-terra-50 border border-terra-200 text-center">
            <p className="font-display text-2xl text-charcoal mb-2">Still have questions?</p>
            <p className="font-body text-sm text-charcoal/60 mb-5">Drop us a message — we respond within a few hours on weekdays.</p>
            <Link
              href="/contact"
              className="inline-block bg-terra-600 text-cream font-body text-xs tracking-widest uppercase px-6 py-3 hover:bg-terra-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

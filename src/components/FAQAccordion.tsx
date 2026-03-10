"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-sand-200">
      {items.map((faq, i) => (
        <div key={i} className="py-5">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-6 text-left group"
          >
            <span className="font-body text-base font-medium text-charcoal group-hover:text-terra-500 transition-colors">
              {faq.question}
            </span>
            <span
              className="text-terra-500 text-xl flex-shrink-0 mt-0.5 leading-none transition-transform duration-300"
              style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </button>
          {open === i && (
            <p className="mt-4 font-body text-sm text-charcoal/65 leading-relaxed border-l-2 border-terra-200 pl-4">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

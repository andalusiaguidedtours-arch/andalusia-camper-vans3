import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Campervan Rental Andalusia — Explore Southern Spain by Campervan",
  description:
    "The ultimate guide to renting a campervan in Andalusia. Wild coast, white villages, Moorish cities, and mountain roads. Start in Seville or Málaga.",
  keywords: ["campervan rental Andalusia", "rent a campervan Andalusia", "campervan hire southern Spain"],
};

export default function AndalusiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body text-xs tracking-widest uppercase text-terra-400 mb-4">
            Campervan Rental Andalusia
          </p>
          <h1 className="font-display text-5xl lg:text-7xl font-light text-cream leading-tight max-w-4xl">
            Andalusia is not<br />
            a destination.<br />
            <em className="text-terra-400 not-italic">It's a feeling.</em>
          </h1>
          <p className="font-body text-base text-cream/60 mt-6 max-w-2xl leading-relaxed">
            Southern Spain's largest region stretches from the Atlantic to the Mediterranean, from Europe's highest peaks to its driest desert. A campervan is the only way to do it justice.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="inline-block bg-terra-600 text-cream font-body text-sm font-medium tracking-widest uppercase px-8 py-4 hover:bg-terra-700 transition-colors">
              Book a Campervan
            </Link>
            <Link href="/road-trips" className="inline-block border border-cream/30 text-cream font-body text-sm font-medium tracking-widest uppercase px-8 py-4 hover:border-cream/60 transition-colors">
              Road Trip Ideas
            </Link>
          </div>
        </div>
      </section>

      {/* Image strip */}
      <div className="h-64 lg:h-80 bg-sand-200 flex items-center justify-center">
        {/* REPLACE: Wide panoramic of Andalusian landscape — ideally Las Alpujarras or the Ronda mountains */}
        <div className="text-center text-sand-400">
          <div className="text-5xl mb-2">🏔️</div>
          <p className="font-body text-xs uppercase tracking-widest">Andalusia landscape — photo placeholder</p>
        </div>
      </div>

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Why Andalusia by campervan"
                heading="A region built for the open road"
              />
              <div className="mt-8 space-y-4 font-body text-base text-charcoal/70 leading-relaxed">
                <p>
                  Andalusia covers nearly 90,000 square kilometres — larger than many European countries. It contains 8 provinces, 4 UNESCO World Heritage Sites, and more natural parks than any other region in Spain. Public transport barely scratches the surface. With a campervan, you scratch it all.
                </p>
                <p>
                  The roads here are genuinely good. The campsite infrastructure is well-developed. The wild camping laws are relatively tolerant. And the weather — an average of over 300 sunny days a year — makes campervan travel a genuine year-round proposition, not just a summer option.
                </p>
                <p>
                  In spring, the landscape explodes with wildflowers. In autumn, the light turns the olive groves golden. In winter, you can ski the Sierra Nevada in the morning and be on a warm Mediterranean beach by afternoon. This is not an exaggeration.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: "8 provinces", desc: "Seville, Málaga, Granada, Córdoba, Almería, Jaén, Cádiz, Huelva" },
                { title: "6 national parks", desc: "Doñana, Sierra Nevada, Cabo de Gata, and more — all accessible by road" },
                { title: "300+ sunny days", desc: "One of Europe's sunniest regions — campervan travel is genuinely year-round" },
                { title: "3,000+ km of coastline", desc: "Atlantic and Mediterranean — two entirely different characters" },
                { title: "17,000+ km of roads", desc: "From motorways to mountain passes — well-maintained and lightly travelled" },
                { title: "Rich culture", desc: "Flamenco, Moorish architecture, olive oil, sherry, jamón — a civilisation in every town" },
              ].map((stat) => (
                <div key={stat.title} className="flex gap-4 p-4 border border-sand-200 bg-sand-50">
                  <span className="text-terra-500 mt-1">◦</span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-charcoal">{stat.title}</h3>
                    <p className="font-body text-sm text-charcoal/60 mt-0.5">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Provinces */}
      <section className="py-20 bg-sand-50 border-t border-sand-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Where to go" heading="Eight provinces, eight personalities" center />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { prov: "Seville", icon: "🌹", note: "Flamenco, Semana Santa, Doñana wetlands" },
              { prov: "Málaga", icon: "☀️", note: "Picasso's city, Costa del Sol, Caminito del Rey" },
              { prov: "Granada", icon: "🏰", note: "Alhambra, Sierra Nevada, Alpujarras villages" },
              { prov: "Córdoba", icon: "🕌", note: "The Mezquita, Roman bridge, caliphate gardens" },
              { prov: "Cádiz", icon: "🌊", note: "Atlantic beaches, white villages, Roman ruins" },
              { prov: "Almería", icon: "🌵", note: "Volcanic coast, desert landscapes, crystal coves" },
              { prov: "Jaén", icon: "🫒", note: "Olive oil capital, Renaissance cities, Cazorla park" },
              { prov: "Huelva", icon: "🦩", note: "Doñana, Columbus heritage, strawberries & seafood" },
            ].map((p) => (
              <div key={p.prov} className="bg-white border border-sand-200 p-6 text-center hover:border-terra-300 transition-colors">
                <div className="text-3xl mb-2">{p.icon}</div>
                <h3 className="font-display text-xl font-medium text-charcoal mb-1">{p.prov}</h3>
                <p className="font-body text-xs text-charcoal/55 leading-relaxed">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pickup options */}
      <section className="py-16 bg-cream border-t border-sand-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Getting started" heading="Two great places to begin" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <Link href="/seville" className="block p-6 border border-sand-200 hover:border-terra-400 transition-colors group">
              <h3 className="font-display text-2xl font-medium text-charcoal group-hover:text-terra-700 mb-2">Seville</h3>
              <p className="font-body text-sm text-charcoal/60">Gateway to western Andalusia. White villages, Doñana, Atlantic coast, Cádiz.</p>
              <span className="font-body text-xs tracking-widest uppercase text-terra-600 mt-3 inline-block">Learn more →</span>
            </Link>
            <Link href="/malaga" className="block p-6 border border-sand-200 hover:border-terra-400 transition-colors group">
              <h3 className="font-display text-2xl font-medium text-charcoal group-hover:text-terra-700 mb-2">Málaga</h3>
              <p className="font-body text-sm text-charcoal/60">Gateway to eastern Andalusia. Alhambra, Cabo de Gata, Sierra Nevada, Tropical Coast.</p>
              <span className="font-body text-xs tracking-widest uppercase text-terra-600 mt-3 inline-block">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-terra-600 text-cream text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-4">Ready to explore Andalusia?</h2>
          <p className="font-body text-sm text-cream/70 mb-8">Book your campervan rental and discover the real southern Spain.</p>
          <Link href="/contact" className="inline-block bg-cream text-terra-700 font-body text-sm font-medium tracking-widest uppercase px-8 py-4 hover:bg-sand-100 transition-colors">
            Request a Booking
          </Link>
        </div>
      </section>
    </>
  );
}

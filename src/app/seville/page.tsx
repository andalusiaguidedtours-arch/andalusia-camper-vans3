import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Campervan Rental Seville — Explore Andalusia from the West",
  description:
    "Rent a campervan in Seville and discover western Andalusia at your own pace. Pickup near Seville Airport. White villages, Doñana, Atlantic coast and more.",
  keywords: ["campervan rental Seville", "rent a campervan Seville", "campervan hire Seville Spain"],
};

export default function SevillePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 60% 40%, #dc5530 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body text-xs tracking-widest uppercase text-terra-400 mb-4">
            Campervan Rental Seville
          </p>
          <h1 className="font-display text-5xl lg:text-7xl font-light text-cream leading-tight max-w-3xl">
            Seville: the soul<br />
            of <em className="text-terra-400 not-italic">Andalusia.</em>
          </h1>
          <p className="font-body text-base text-cream/60 mt-6 max-w-2xl leading-relaxed">
            Rent a campervan in Seville and you're immediately in the beating heart of southern Spain. The flamenco, the tapas, the orange blossoms — and then, just beyond the city limits, some of the most extraordinary landscapes in Europe.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="inline-block bg-terra-600 text-cream font-body text-sm font-medium tracking-widest uppercase px-8 py-4 hover:bg-terra-700 transition-colors">
              Book Seville Pickup
            </Link>
            <Link href="/campers" className="inline-block border border-cream/30 text-cream font-body text-sm font-medium tracking-widest uppercase px-8 py-4 hover:border-cream/60 transition-colors">
              View Fleet
            </Link>
          </div>
        </div>
      </section>

      {/* Image placeholder for Seville */}
      <div className="h-64 lg:h-96 bg-sand-200 flex items-center justify-center">
        {/* REPLACE: Aerial photo of Seville — ideally the Giralda tower or the Alcázar gardens */}
        <div className="text-center text-sand-400">
          <div className="text-5xl mb-2">🌆</div>
          <p className="font-body text-xs uppercase tracking-widest">Seville cityscape — photo placeholder</p>
        </div>
      </div>

      {/* Why Seville */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Why start in Seville"
              heading="Western Andalusia at its most spectacular"
            />
            <div className="mt-8 space-y-4 font-body text-base text-charcoal/70 leading-relaxed">
              <p>
                Seville sits at the gateway to an extraordinary sweep of southern Spain. To the west, the Doñana National Park — one of Europe's most important wetlands, home to lynx, flamingos, and ancient cork forests. To the south, the chalky hills of Jerez and the fino sherry bodegas. Beyond that, the rugged white villages of the Sierra de Cádiz, the cathedral city of Cádiz itself, and the windswept Atlantic beaches around Tarifa.
              </p>
              <p>
                Our Seville pickup location is a 10-minute drive from Seville Airport (SVQ). Fly in, collect your van, and you can be rolling through the Andalusian countryside within the hour. We recommend spending one night in Seville before departing — the city rewards a late evening wander along the Triana riverbank.
              </p>
            </div>
          </div>

          {/* Destinations grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { place: "Doñana National Park", dist: "70 km", note: "Flamingos, lynx, Europe's largest wetland reserve" },
              { place: "Ronda", dist: "130 km", note: "Dramatic gorge, clifftop old town, incredible views" },
              { place: "Jerez de la Frontera", dist: "100 km", note: "Sherry bodegas, Andalusian horses, flamenco cradle" },
              { place: "Cádiz", dist: "130 km", note: "Europe's oldest city, golden beaches, carnival spirit" },
              { place: "Arcos de la Frontera", dist: "90 km", note: "Clifftop white village, spectacular views, medieval streets" },
              { place: "Tarifa & Bolonia", dist: "190 km", note: "The end of Europe, Roman ruins, Atlantic energy" },
            ].map((d) => (
              <div key={d.place} className="p-5 border border-sand-200 bg-sand-50">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-display text-lg font-medium text-charcoal">{d.place}</h3>
                  <span className="font-body text-xs text-terra-500 ml-2 shrink-0">{d.dist}</span>
                </div>
                <p className="font-body text-sm text-charcoal/60">{d.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical info */}
      <section className="py-16 lg:py-20 bg-sand-50 border-t border-sand-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Practical info" heading="Seville pickup — what to know" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {[
              { label: "Airport", value: "Seville Airport (SVQ) — 10 min from pickup point" },
              { label: "Pickup hours", value: "Monday–Saturday, 8:00–17:00" },
              { label: "Airport transfer", value: "We can meet you at arrivals — let us know your flight" },
              { label: "One-way rentals", value: "Pickup in Seville, return in Málaga available (fee applies)" },
            ].map((info) => (
              <div key={info.label} className="flex flex-col gap-1">
                <p className="font-body text-xs uppercase tracking-widest text-charcoal/40">{info.label}</p>
                <p className="font-body text-sm text-charcoal">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-terra-600 text-cream text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-4">Start your trip in Seville</h2>
          <p className="font-body text-sm text-cream/70 mb-8">Book your campervan rental in Seville and we'll take care of the rest.</p>
          <Link href="/contact" className="inline-block bg-cream text-terra-700 font-body text-sm font-medium tracking-widest uppercase px-8 py-4 hover:bg-sand-100 transition-colors">
            Book Seville Pickup
          </Link>
        </div>
      </section>
    </>
  );
}

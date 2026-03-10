import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { roadTrips } from "@/lib/data";

export const metadata: Metadata = {
  title: "Andalusia Road Trip Ideas",
  description:
    "Four iconic campervan road trips in Andalusia — white villages, wild coasts, the Alhambra, and the end of Europe. Find your perfect Andalusia itinerary.",
};

export default function RoadTripsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-olive-800 text-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body text-xs tracking-widest uppercase text-terra-300 mb-4">Route inspiration</p>
          <h1 className="font-display text-5xl lg:text-7xl font-light text-cream leading-tight">
            Four roads worth<br />
            <em className="text-terra-300 not-italic">every kilometre.</em>
          </h1>
          <p className="font-body text-base text-cream/60 mt-6 max-w-xl leading-relaxed">
            Andalusia rewards those who get off the beaten path. These four curated routes take you through the heart of southern Spain — from Atlantic cliffs to Mediterranean deserts, from Moorish palaces to cowboy film sets.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          {roadTrips.map((trip, i) => (
            <article
              key={trip.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-sand-200 overflow-hidden"
            >
              {/* Image placeholder — alternating sides */}
              <div
                className={`aspect-[4/3] lg:aspect-auto bg-sand-100 relative min-h-64 flex items-center justify-center ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                {/* REPLACE: Landscape photography for each route 
                    Route 0: White village hillside, Ronda gorge
                    Route 1: Cabo de Gata volcanic beach
                    Route 2: Tarifa kite beach or Cádiz old town
                    Route 3: Alhambra with Sierra Nevada backdrop */}
                <div className="text-center text-sand-400">
                  <div className="text-6xl mb-3">🗺️</div>
                  <p className="font-body text-xs uppercase tracking-widest">{trip.title}</p>
                  <p className="font-body text-xs text-sand-300 mt-1">Photo placeholder</p>
                </div>
                <div className="absolute top-4 left-4 bg-charcoal/80 text-cream px-3 py-1">
                  <span className="font-body text-xs tracking-widest uppercase">{trip.difficulty}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`p-8 lg:p-12 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-body text-xs text-terra-600 tracking-widest uppercase font-medium">{trip.days}</span>
                  <span className="w-4 h-px bg-sand-300" />
                  <span className="font-body text-xs text-charcoal/40 tracking-widest uppercase">{trip.distance}</span>
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-light text-charcoal mb-1">{trip.title}</h2>
                <p className="font-body text-sm uppercase tracking-widest text-olive-600 mb-4">{trip.subtitle}</p>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed mb-5">{trip.description}</p>

                <div className="mb-5">
                  <p className="font-body text-xs uppercase tracking-widest text-charcoal/40 mb-2">Route highlights</p>
                  <ul className="space-y-1">
                    {trip.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 font-body text-sm text-charcoal/70">
                        <span className="text-terra-400 text-xs">◦</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="font-body text-xs uppercase tracking-widest text-charcoal/40 mb-1">Best for</p>
                  <p className="font-body text-sm text-charcoal/70">{trip.bestFor}</p>
                </div>

                <div className="mb-6">
                  <p className="font-body text-xs uppercase tracking-widest text-charcoal/40 mb-1">Start / End</p>
                  <p className="font-body text-sm text-charcoal/70">{trip.startEnd}</p>
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-charcoal text-cream font-body text-xs tracking-widest uppercase px-6 py-3 hover:bg-terra-600 transition-colors self-start"
                >
                  Plan This Trip →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-terra-600 text-cream text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-4">Ready to hit the road?</h2>
          <p className="font-body text-sm text-cream/70 mb-8 leading-relaxed">
            Pick a route, choose your camper, and we'll handle the rest. Pickup in Seville or Málaga — your adventure starts the moment you turn the key.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-cream text-terra-700 font-body text-sm font-medium tracking-widest uppercase px-8 py-4 hover:bg-sand-100 transition-colors"
          >
            Book Your Camper
          </Link>
        </div>
      </section>
    </>
  );
}

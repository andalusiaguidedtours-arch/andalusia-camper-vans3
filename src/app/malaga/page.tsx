import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Campervan Rental Málaga — Gateway to Eastern Andalusia",
  description:
    "Rent a campervan in Málaga and explore the Alhambra, Cabo de Gata, Sierra Nevada and the Tropical Coast. Pickup near Málaga Airport. Unlimited mileage included.",
  keywords: ["campervan rental Malaga", "rent a campervan Malaga", "campervan hire Malaga Spain"],
};

export default function MalagaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-olive-800 text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle at 40% 60%, #7d8d4a 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body text-xs tracking-widest uppercase text-terra-300 mb-4">
            Campervan Rental Málaga
          </p>
          <h1 className="font-display text-5xl lg:text-7xl font-light text-cream leading-tight max-w-3xl">
            Málaga: coast,<br />
            culture, and<br />
            <em className="text-terra-300 not-italic">mountain magic.</em>
          </h1>
          <p className="font-body text-base text-cream/60 mt-6 max-w-2xl leading-relaxed">
            Málaga Airport is one of Europe's busiest gateways — but most visitors drive straight to the beach. Rent a campervan in Málaga and you'll discover what they're all missing: the Alhambra an hour inland, Europe's last tropical coast, and the wildest desert in continental Europe.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="inline-block bg-terra-600 text-cream font-body text-sm font-medium tracking-widest uppercase px-8 py-4 hover:bg-terra-700 transition-colors">
              Book Málaga Pickup
            </Link>
            <Link href="/campers" className="inline-block border border-cream/30 text-cream font-body text-sm font-medium tracking-widest uppercase px-8 py-4 hover:border-cream/60 transition-colors">
              View Fleet
            </Link>
          </div>
        </div>
      </section>

      {/* Image placeholder */}
      <div className="h-64 lg:h-96 bg-sand-200 flex items-center justify-center">
        {/* REPLACE: Aerial or landscape photo of Málaga — ideally the port and Alcazaba, or mountain backdrop */}
        <div className="text-center text-sand-400">
          <div className="text-5xl mb-2">⛵</div>
          <p className="font-body text-xs uppercase tracking-widest">Málaga harbour — photo placeholder</p>
        </div>
      </div>

      {/* Why Málaga */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="Why start in Málaga" heading="Eastern Andalusia, wide open" />
            <div className="mt-8 space-y-4 font-body text-base text-charcoal/70 leading-relaxed">
              <p>
                Málaga is one of Europe's most connected airports, with direct flights from across the UK, US, Canada, and northern Europe. It also happens to be the perfect launchpad for some of Andalusia's most dramatic landscapes. Within an hour of pickup, you can be standing in front of the Alhambra in Granada, navigating the hairpin bends of the Serrania de Ronda, or watching flamingos at the Fuente de Piedra lagoon.
              </p>
              <p>
                Go east and the landscape transforms into something almost extra-terrestrial — the volcanic coast of Cabo de Gata, the clay badlands of Tabernas, and the mango and avocado groves of Spain's subtropical Axarquía. Few European regions pack this much variety into such a driveable area.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { place: "Granada & Alhambra", dist: "130 km", note: "Moorish palace complex, Albaicín quarter, flamenco caves" },
              { place: "Cabo de Gata", dist: "200 km", note: "Europe's driest region, volcanic beaches, crystal-clear water" },
              { place: "Ronda", dist: "100 km", note: "Clifftop city split by an 18th-century gorge bridge" },
              { place: "Las Alpujarras", dist: "150 km", note: "Berber villages at altitude, hiking, mountain springs" },
              { place: "Sierra Nevada", dist: "160 km", note: "Spain's highest peak, skiing in winter, wildflowers in spring" },
              { place: "Tropical Coast", dist: "80 km", note: "Chirimoyas, sugarcane, the warmest coast in Europe" },
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
          <SectionHeading eyebrow="Practical info" heading="Málaga pickup — what to know" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {[
              { label: "Airport", value: "Málaga Airport (AGP) — 15 min from pickup point" },
              { label: "Pickup hours", value: "Monday–Saturday, 8:00–17:00" },
              { label: "Airport transfer", value: "Arrivals meet & greet available — tell us your flight details" },
              { label: "One-way rentals", value: "Pickup in Málaga, return in Seville available (fee applies)" },
            ].map((info) => (
              <div key={info.label} className="flex flex-col gap-1">
                <p className="font-body text-xs uppercase tracking-widest text-charcoal/40">{info.label}</p>
                <p className="font-body text-sm text-charcoal">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-terra-600 text-cream text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light mb-4">Start your adventure in Málaga</h2>
          <p className="font-body text-sm text-cream/70 mb-8">Book your campervan rental in Málaga — we'll be waiting at arrivals.</p>
          <Link href="/contact" className="inline-block bg-cream text-terra-700 font-body text-sm font-medium tracking-widest uppercase px-8 py-4 hover:bg-sand-100 transition-colors">
            Book Málaga Pickup
          </Link>
        </div>
      </section>
    </>
  );
}

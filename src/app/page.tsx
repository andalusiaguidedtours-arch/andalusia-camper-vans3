import Link from "next/link";
import Image from "next/image";
import { campers, products, roadTrips, faqs } from "@/lib/data";
import FAQAccordion from "@/components/FAQAccordion";

const van = campers[0];

// Unsplash — free for commercial use, no attribution required
const PHOTOS = {
  // Hero: campervan parked on open road, sunny landscape
  hero: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1920&q=80",
  // Van section: white motorhome on road
  vanExterior: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=80",
  // Interior: cosy campervan interior
  vanInterior: "https://images.unsplash.com/photo-1563198804-b144dfc1661c?w=900&q=80",
  // Road trips
  whiteVillages: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",   // white village Spain
  caboDegata:   "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",   // clear blue water beach
  tarifa:       "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",   // coastal road
  granada:      "https://images.unsplash.com/photo-1553701939-9d9b36d32c6c?w=800&q=80",      // Alhambra Granada
  // Why us section
  seville:      "https://images.unsplash.com/photo-1579282240050-352db0a14c21?w=900&q=80",   // Seville Plaza de España
};

const tripPhotos = [
  PHOTOS.whiteVillages,
  PHOTOS.caboDegata,
  PHOTOS.tarifa,
  PHOTOS.granada,
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <Image
          src={PHOTOS.hero}
          alt="Open road through Andalusia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/10" />

        <div className="absolute top-32 right-6 md:right-12 text-right">
          <span className="font-mono text-[9px] tracking-widest text-cream/50 uppercase block">Pickup across</span>
          <span className="font-mono text-[9px] tracking-widest text-cream/70 uppercase">Andalusia</span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="block w-6 h-px bg-terra-400" />
              <span className="font-mono text-[10px] tracking-widest text-terra-400 uppercase">Southern Spain</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-cream mb-6">
              Andalusia,<br />
              <em className="italic text-sand-300">at your own pace.</em>
            </h1>
            <p className="font-body text-lg md:text-xl text-cream/75 font-light leading-relaxed max-w-xl mb-10">
              Rent a premium campervan and explore southern Spain freely —
              or travel with a local expert guide with 15 years on these roads.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-terra-500 text-cream font-body font-medium text-sm tracking-wide hover:bg-terra-600 transition-colors rounded-sm">
                Book the Van
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link href="/campers" className="inline-flex items-center gap-2 px-7 py-4 border border-cream/50 text-cream font-body font-medium text-sm tracking-wide hover:border-cream hover:bg-cream/10 transition-colors rounded-sm">
                See the Carabus
              </Link>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap gap-8 md:gap-16 border-t border-cream/15 pt-8">
            {[
              { value: "from €150", label: "per day" },
              { value: "4", label: "guests capacity" },
              { value: "∞", label: "mileage included" },
              { value: "15+", label: "years guiding Andalusia" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl text-cream font-light">{s.value}</div>
                <div className="font-mono text-[9px] tracking-widest text-cream/45 uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO PRODUCTS ─────────────────────────────────────────── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="block w-4 h-px bg-terra-500" />
            <span className="font-mono text-[10px] tracking-widest text-terra-500 uppercase">How it works</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal mb-12">
            Two ways to explore <em className="italic">Andalusia.</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.id} className={`p-8 border rounded-sm flex flex-col ${product.highlight ? "border-terra-300 bg-terra-50" : "border-sand-200 bg-sand-50"}`}>
                {product.highlight && (
                  <span className="inline-block mb-4 px-3 py-1 bg-terra-500 text-cream font-mono text-[9px] tracking-widest uppercase rounded-full self-start">Most popular</span>
                )}
                <h3 className="font-display text-3xl font-light text-charcoal mb-1">{product.name}</h3>
                <p className="font-mono text-[9px] tracking-widest text-terra-500 uppercase mb-4">{product.tagline}</p>
                <p className="font-body text-sm text-charcoal/65 leading-relaxed mb-6">{product.description}</p>
                <ul className="flex flex-col gap-2 mb-6">
                  {product.includes.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-terra-400 text-xs mt-0.5">✦</span>
                      <span className="font-body text-xs text-charcoal/70">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <div className="font-body text-sm font-medium text-charcoal mb-1">{product.pricing}</div>
                  <div className="font-mono text-[9px] text-charcoal/40 tracking-wide mb-4">
                    {product.id === "self-drive" ? "Minimum 5 nights · Unlimited mileage" : "Price varies by group size & itinerary"}
                  </div>
                  <Link href={product.ctaHref} className={`inline-flex items-center gap-2 px-6 py-3 font-body text-sm font-medium tracking-wide rounded-sm transition-colors ${product.highlight ? "bg-terra-500 text-cream hover:bg-terra-600" : "border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream"}`}>
                    {product.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE VAN ──────────────────────────────────────────────── */}
      <section className="py-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-rows-2 gap-4 h-[500px]">
              <div className="relative rounded-sm overflow-hidden">
                <Image src={PHOTOS.vanExterior} alt="Campervan exterior" fill className="object-cover" />
              </div>
              <div className="relative rounded-sm overflow-hidden">
                <Image src={PHOTOS.vanInterior} alt="Campervan interior" fill className="object-cover" />
              </div>
            </div>
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="block w-4 h-px bg-terra-500" />
                <span className="font-mono text-[10px] tracking-widest text-terra-500 uppercase">The van</span>
              </div>
              <h2 className="font-display text-4xl font-light text-charcoal mb-1">{van.name}</h2>
              <p className="font-mono text-[9px] tracking-widest text-terra-500 uppercase mb-5">{van.edition}</p>
              <p className="font-body text-base text-charcoal/65 leading-relaxed mb-7">{van.description}</p>
              <div className="grid grid-cols-2 gap-3 mb-7">
                {[
                  { label: "Sleeps", value: `${van.sleeps} guests` },
                  { label: "Seats", value: `${van.seats} passengers` },
                  { label: "Gearbox", value: van.transmission },
                  { label: "Shower & WC", value: "Included ✓" },
                  { label: "Air con", value: "Included ✓" },
                  { label: "Fridge", value: "95L compressor" },
                ].map((spec) => (
                  <div key={spec.label} className="border-l-2 border-terra-200 pl-3">
                    <div className="font-mono text-[8px] tracking-widest uppercase text-charcoal/35">{spec.label}</div>
                    <div className="font-body text-sm text-charcoal/70 mt-0.5">{spec.value}</div>
                  </div>
                ))}
              </div>
              {/* Pricing table */}
              <div className="bg-cream border border-sand-200 rounded-sm p-5 mb-6">
                <div className="font-mono text-[9px] tracking-widest uppercase text-charcoal/40 mb-3">Self-drive rental prices</div>
                <div className="flex flex-col gap-2">
                  {Object.values(van.pricing).map((p) => (
                    <div key={p.label} className="flex items-center justify-between py-1.5 border-b border-sand-100 last:border-0">
                      <span className="font-body text-sm text-charcoal/65">{p.label}</span>
                      <span className="font-display text-lg text-charcoal">€{p.price}<span className="font-mono text-[9px] text-charcoal/40">/day</span></span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 font-mono text-[9px] text-charcoal/40">Minimum {van.minNights} nights · Unlimited mileage</div>
              </div>
              <Link href="/campers" className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-cream font-body text-sm font-medium hover:bg-terra-500 transition-colors rounded-sm">
                Full van details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROAD TRIPS ───────────────────────────────────────────── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="block w-4 h-px bg-terra-500" />
                <span className="font-mono text-[10px] tracking-widest text-terra-500 uppercase">Itineraries</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal">
                Suggested <em className="italic text-terra-500">road trips.</em>
              </h2>
            </div>
            <Link href="/road-trips" className="mt-6 md:mt-0 font-body text-sm text-charcoal/60 hover:text-terra-500 transition-colors">All routes →</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {roadTrips.map((trip, i) => (
              <article key={trip.id} className="group relative border border-sand-200 rounded-sm overflow-hidden">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={tripPhotos[i]}
                    alt={trip.name}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="font-mono text-[9px] tracking-widest text-cream/50 uppercase">Route {String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl font-light text-cream mt-1">{trip.name}</h3>
                  <p className="font-mono text-[9px] tracking-widest text-terra-300 uppercase mt-1 mb-3">{trip.subtitle}</p>
                  <div className="flex gap-4 text-cream/60">
                    <span className="font-mono text-[10px]">⏱ {trip.days}</span>
                    <span className="font-mono text-[10px]">↩ {trip.startPoint}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────── */}
      <section className="py-24 bg-olive-900 text-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="block w-4 h-px bg-terra-400" />
                <span className="font-mono text-[10px] tracking-widest text-terra-400 uppercase">Why choose us</span>
              </div>
              <h2 className="font-display text-4xl font-light text-cream mb-6">
                Built for the trip<br /><em className="italic text-sand-300">you actually want.</em>
              </h2>
              <p className="font-body text-base text-cream/65 leading-relaxed mb-8">
                A premium campervan rental backed by 15 years of local expertise.
                Whether you drive yourself or go with a guide, you'll have the best
                possible support on the road.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "✦", title: "Unlimited mileage", desc: "Drive as far as you want" },
                  { icon: "○", title: "Pickup anywhere", desc: "Seville, Málaga, airports, custom" },
                  { icon: "◇", title: "Fully equipped", desc: "Bedding, kitchen, awning — just arrive" },
                  { icon: "△", title: "Portugal included", desc: "Cross the border at no extra cost" },
                  { icon: "□", title: "24/7 WhatsApp support", desc: "Always reachable on the road" },
                  { icon: "⬡", title: "Local expertise", desc: "15 years of Andalusian road trips" },
                ].map((r) => (
                  <div key={r.title} className="p-4 border border-cream/10 hover:border-cream/25 rounded-sm transition-all">
                    <span className="text-terra-400 text-sm mb-2 block">{r.icon}</span>
                    <h3 className="font-body font-medium text-sm text-cream mb-1">{r.title}</h3>
                    <p className="font-body text-xs text-cream/50">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image src={PHOTOS.seville} alt="Seville, Andalusia" fill className="object-cover" />
              <div className="absolute inset-0 bg-olive-900/30" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ PREVIEW ──────────────────────────────────────────── */}
      <section className="py-24 bg-sand-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-3 flex justify-center">
            <div className="flex items-center gap-2">
              <span className="block w-4 h-px bg-terra-500" />
              <span className="font-mono text-[10px] tracking-widest text-terra-500 uppercase">Questions</span>
            </div>
          </div>
          <h2 className="font-display text-4xl font-light text-charcoal text-center mb-10">Before you go.</h2>
          <FAQAccordion items={faqs.slice(0, 5)} />
          <div className="mt-8 text-center">
            <Link href="/faq" className="font-body text-sm text-charcoal/60 hover:text-terra-500 transition-colors">See all questions →</Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-28 bg-terra-500 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5" aria-hidden>
          <span className="font-display text-[20vw] font-light text-cream whitespace-nowrap">Andalusia</span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="font-mono text-[10px] tracking-widest uppercase text-cream/60 mb-4 block">Ready to go?</span>
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream mb-6 leading-tight">
            Your adventure<br /><em className="italic">awaits.</em>
          </h2>
          <p className="font-body text-base text-cream/75 leading-relaxed mb-10 max-w-lg mx-auto">
            Send us a booking request and we'll confirm availability within 24 hours. No payment required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cream text-charcoal font-body font-medium text-sm tracking-wide hover:bg-sand-100 transition-colors rounded-sm">
              Request a Booking →
            </Link>
            <Link href="/campers" className="inline-flex items-center gap-2 px-8 py-4 border border-cream/40 text-cream font-body font-medium text-sm tracking-wide hover:border-cream transition-colors rounded-sm">
              View the Carabus
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

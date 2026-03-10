import Image from "next/image";
import Link from "next/link";
import { campers } from "@/lib/data";

const van = campers[0];

// Unsplash — free for commercial use
const PHOTOS = {
  exterior1: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=80", // white campervan road
  exterior2: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=900&q=80", // coastal road camper
  interior:  "https://images.unsplash.com/photo-1563198804-b144dfc1661c?w=900&q=80",  // campervan interior
};

export default function CampersPage() {
  return (
    <>
      <div className="pt-32 pb-16 bg-sand-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="block w-4 h-px bg-terra-500" />
            <span className="font-mono text-[10px] tracking-widest text-terra-500 uppercase">The van</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-light text-charcoal mb-5">
            One van.<br /><em className="italic text-terra-500">Infinite routes.</em>
          </h1>
          <p className="font-body text-base text-charcoal/60 max-w-2xl leading-relaxed">
            We believe in one exceptional campervan, maintained to the highest standard,
            fully equipped for four people to live comfortably on the road for weeks.
          </p>
        </div>
      </div>

      <div className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">

          {/* Photo grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-16">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden md:col-span-2">
              <Image src={PHOTOS.exterior1} alt="Weinsberg CaraBus on the road" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative flex-1 rounded-sm overflow-hidden min-h-[150px]">
                <Image src={PHOTOS.interior} alt="CaraBus interior" fill className="object-cover" />
              </div>
              <div className="relative flex-1 rounded-sm overflow-hidden min-h-[150px]">
                <Image src={PHOTOS.exterior2} alt="Campervan coastal road" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-4xl font-light text-charcoal mb-1">{van.name}</h2>
              <p className="font-mono text-[9px] tracking-widest text-terra-500 uppercase mb-5">{van.edition}</p>
              <p className="font-body text-base text-charcoal/65 leading-relaxed mb-7">{van.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-7">
                {[
                  { label: "Sleeps", value: `${van.sleeps} guests` },
                  { label: "Seats", value: `${van.seats} passengers` },
                  { label: "Gearbox", value: van.transmission },
                  { label: "Engine", value: van.engine },
                  { label: "Length", value: van.length },
                  { label: "Fridge", value: "95L compressor" },
                  { label: "Beds", value: van.beds },
                  { label: "Kitchen", value: van.kitchen },
                  { label: "Shower & WC", value: "Private, included ✓" },
                  { label: "Air conditioning", value: "Included ✓" },
                  { label: "Heating", value: van.heating },
                  { label: "Extras", value: van.extras },
                ].map((spec) => (
                  <div key={spec.label} className="border-l-2 border-terra-200 pl-3">
                    <div className="font-mono text-[8px] tracking-widest uppercase text-charcoal/35">{spec.label}</div>
                    <div className="font-body text-sm text-charcoal/70 mt-0.5">{spec.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {van.highlights.map((h) => (
                  <span key={h} className="px-3 py-1 bg-sand-100 border border-sand-200 font-mono text-[9px] text-sand-800 tracking-wide rounded-full">{h}</span>
                ))}
              </div>
            </div>

            <div>
              {/* Self-drive pricing */}
              <div className="bg-sand-50 border border-sand-200 rounded-sm p-7 mb-6">
                <div className="font-mono text-[9px] tracking-widest uppercase text-charcoal/40 mb-5">Self-drive rental prices</div>
                <div className="flex flex-col divide-y divide-sand-200">
                  {Object.values(van.pricing).map((p) => (
                    <div key={p.label} className="flex items-center justify-between py-4">
                      <span className="font-body text-sm text-charcoal/70">{p.label}</span>
                      <div className="text-right">
                        <span className="font-display text-2xl text-charcoal">€{p.price}</span>
                        <span className="font-mono text-[9px] text-charcoal/40 ml-1">/day</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-sand-200 flex flex-col gap-1.5">
                  {["Minimum 5 nights", "Unlimited mileage included", "Portugal driving included", "Full equipment included", "24/7 WhatsApp support"].map((item) => (
                    <span key={item} className="font-mono text-[9px] text-charcoal/45">✦ {item}</span>
                  ))}
                </div>
              </div>

              {/* Guided tour pricing */}
              <div className="bg-olive-900 rounded-sm p-7 mb-6">
                <div className="font-mono text-[9px] tracking-widest uppercase text-terra-400 mb-3">Guided campervan tour</div>
                <div className="font-display text-3xl text-cream mb-1">
                  From €800<span className="font-mono text-[11px] text-cream/50">/day</span>
                </div>
                <p className="font-mono text-[9px] text-cream/40 tracking-wide mb-4">Price varies by group size and itinerary</p>
                <p className="font-body text-sm text-cream/65 leading-relaxed mb-5">
                  Van + expert local guide included. Fully custom itinerary built around your interests.
                  Every detail taken care of — you just show up and explore.
                </p>
                <Link href="/contact?type=guided" className="inline-flex items-center gap-2 px-5 py-2.5 border border-cream/30 text-cream font-body text-sm hover:border-cream/60 transition-colors rounded-sm">
                  Request a personalised quote →
                </Link>
              </div>

              <Link href="/contact" className="block w-full text-center py-4 bg-terra-500 text-cream font-body font-medium text-sm tracking-wide hover:bg-terra-600 transition-colors rounded-sm">
                Book the Carabus
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What's included */}
      <div className="py-16 bg-sand-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="block w-4 h-px bg-terra-500" />
            <span className="font-mono text-[10px] tracking-widest text-terra-500 uppercase">Included in every rental</span>
          </div>
          <h2 className="font-display text-3xl font-light text-charcoal mb-8">Everything you need. Nothing extra to buy.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🛏", title: "Fresh bedding", desc: "Duvet, pillows, fitted sheets and towels" },
              { icon: "🍳", title: "Full kitchen kit", desc: "Pots, pans, crockery, cutlery and utensils" },
              { icon: "🪑", title: "Camping gear", desc: "Two camp chairs and a folding table" },
              { icon: "⛺", title: "Awning", desc: "Full-size awning for shade and shelter" },
              { icon: "⚡", title: "Power", desc: "USB charging, inverter and leisure battery" },
              { icon: "🗺", title: "Andalusia guide", desc: "Our printed road trip guide with insider tips" },
              { icon: "🔧", title: "Safety kit", desc: "First aid, high-vis vests, warning triangle" },
              { icon: "🧹", title: "Cleaning supplies", desc: "Washing up liquid, sponges and bin bags" },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-cream border border-sand-200 rounded-sm">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="font-body font-medium text-sm text-charcoal mb-1">{item.title}</h3>
                <p className="font-body text-xs text-charcoal/55">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-terra-500 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <span className="font-display text-[20vw] font-light text-cream whitespace-nowrap">Book</span>
        </div>
        <div className="relative z-10 max-w-xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light text-cream mb-4">Ready to hit the road?</h2>
          <p className="font-body text-base text-cream/75 mb-8">Send us your dates and we'll confirm availability within 24 hours.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cream text-charcoal font-body font-medium text-sm hover:bg-sand-100 transition-colors rounded-sm">
            Request a Booking →
          </Link>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";

interface CamperCardProps {
  name: string;
  tagline: string;
  sleeps: number;
  transmission: string;
  kitchen: string;
  shower: boolean;
  storage: string;
  idealFor: string;
  priceFrom: number;
  imagePlaceholder: string;
}

export default function CamperCard({
  name, tagline, sleeps, transmission, kitchen,
  shower, storage, idealFor, priceFrom, imagePlaceholder,
}: CamperCardProps) {
  return (
    <div className="bg-white border border-sand-200 group hover:border-terra-300 transition-all duration-300 hover:shadow-lg hover:shadow-terra-100">
      <div className="aspect-[4/3] bg-sand-100 relative overflow-hidden">
        {/* REPLACE: Real campervan photography — warm natural light, ideally outdoors in Andalusia */}
        <div className="absolute inset-0 flex items-center justify-center text-sand-400">
          <div className="text-center">
            <div className="text-5xl mb-2">🚐</div>
            <p className="font-body text-xs uppercase tracking-widest">{imagePlaceholder}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-terra-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="font-display text-2xl font-medium text-charcoal">{name}</h3>
            <p className="font-body text-sm text-charcoal/50 mt-0.5">{tagline}</p>
          </div>
          <div className="text-right">
            <span className="font-display text-2xl font-medium text-terra-600">€{priceFrom}</span>
            <p className="font-body text-xs text-charcoal/40">per day</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 mb-5">
          {[
            { label: "Sleeps", value: `${sleeps} people` },
            { label: "Transmission", value: transmission },
            { label: "Kitchen", value: kitchen },
            { label: "Shower & Toilet", value: shower ? "Included" : "Not included" },
            { label: "Storage", value: storage },
            { label: "Ideal for", value: idealFor },
          ].map((spec) => (
            <div key={spec.label}>
              <p className="font-body text-xs uppercase tracking-widest text-charcoal/40">{spec.label}</p>
              <p className="font-body text-sm text-charcoal mt-0.5">{spec.value}</p>
            </div>
          ))}
        </div>
        <Link
          href="/contact"
          className="block w-full text-center bg-charcoal text-cream font-body text-xs tracking-widest uppercase py-3 px-4 hover:bg-terra-600 transition-colors"
        >
          Request This Camper
        </Link>
      </div>
    </div>
  );
}

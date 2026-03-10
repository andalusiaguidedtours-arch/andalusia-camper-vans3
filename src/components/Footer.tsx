import Link from "next/link";

const footerLinks = {
  Explore: [
    { href: "/campers", label: "The Carabus" },
    { href: "/road-trips", label: "Road Trips" },
    { href: "/andalusia", label: "Andalusia Region" },
  ],
  Destinations: [
    { href: "/seville", label: "Campervan Rental Seville" },
    { href: "/malaga", label: "Campervan Rental Málaga" },
    { href: "/andalusia", label: "Campervan Rental Andalusia" },
  ],
  Info: [
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Book the Van" },
    { href: "/contact?type=guided", label: "Guided Tours" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/60">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col leading-none mb-5">
              <span className="font-display text-2xl font-light text-cream">Andalusia</span>
              <span className="font-mono text-[10px] tracking-widest text-terra-400 uppercase mt-0.5">Camper Vans</span>
            </Link>
            <p className="font-body text-sm leading-relaxed text-cream/50 max-w-xs">
              Premium campervan rental across Andalusia. Drive yourself or travel with a local expert guide — 15 years guiding southern Spain.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-olive-400" />
                <span className="font-mono text-xs tracking-wide text-cream/40">Pickup across Andalusia</span>
              </div>
              <a
                href="mailto:hola@andalusiacampervans.com"
                className="font-mono text-xs tracking-wide text-cream/40 hover:text-cream/70 transition-colors"
              >
                hola@andalusiacampervans.com
              </a>
              <a
                href="https://www.andalusiaguidedtours.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-wide text-terra-400 hover:text-terra-300 transition-colors"
              >
                andalusiaguidedtours.com ↗
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-mono text-[10px] tracking-widest uppercase text-terra-400 mb-4">{category}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="font-body text-sm text-cream/50 hover:text-cream transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-cream/10" />

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-cream/30">
          © {new Date().getFullYear()} Andalusia Camper Vans · our team
        </p>
        <p className="font-mono text-xs text-cream/30">Seville · Málaga · Andalusia · Southern Spain</p>
      </div>
    </footer>
  );
}

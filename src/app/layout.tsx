import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Andalusia Camper Vans — Premium Campervan Rentals in Southern Spain",
    template: "%s | Andalusia Camper Vans",
  },
  description:
    "Rent a campervan in Andalusia and explore southern Spain at your own pace. Pick up in Seville or Malaga. Handpicked fleet, full support, unforgettable roads.",
  keywords: [
    "campervan rental Andalusia",
    "campervan rental Seville",
    "campervan rental Malaga",
    "rent a campervan Spain",
    "road trip southern Spain",
  ],
  openGraph: {
    siteName: "Andalusia Camper Vans",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

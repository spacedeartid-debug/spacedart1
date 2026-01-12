import type { Metadata } from "next";
import { Rajdhani, Inter } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spacedart.co.in"),
  title: "Space D Art | Interior Design Studio",
  description: "Futuristic architectural studio in Rajkot. Specializing in bespoke 3D modelling, interior planning, and visionary concepts.",
  keywords: ["Interior Design", "Architecture", "Rajkot", "3D Modelling", "Luxury Interiors", "Space Planning", "Modern Design"],
  openGraph: {
    title: "Space D Art | Interior Design Studio",
    description: "Futuristic architectural studio in Rajkot. Specializing in bespoke 3D modelling, interior planning, and visionary concepts.",
    images: ["/assets/hero-image.jpg"],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Space D Art | Interior Design Studio",
    description: "Futuristic architectural studio in Rajkot.",
    images: ["/assets/hero-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Space D Art",
    "image": "https://spacedart.co.in/logo.svg",
    "description": "Premium architectural & interior design studio crafting futuristic spaces.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "401, Adarsh Plaza, near Raiya Telephone exchange, 150ft Ring Road",
      "addressLocality": "Rajkot",
      "addressRegion": "Gujarat",
      "postalCode": "360007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.2916,
      "longitude": 70.7932
    },
    "url": "https://spacedart.co.in",
    "telephone": "+919265738487",
    "priceRange": "$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/space_d__art/",
      "https://www.facebook.com/Spacedeartt/",
      "https://x.com/spacedartstudio",
      "https://www.linkedin.com/in/vishal-shingadia/"
    ]
  };

  return (
    <html lang="en">
      <body
        className={`${rajdhani.variable} ${inter.variable} antialiased bg-background text-foreground font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

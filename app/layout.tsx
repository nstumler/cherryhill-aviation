import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cherry Hill Aviation | Learn to fly in Indiana",
  description:
    "Flight school serving Bedford, Seymour, and North Vernon, Indiana. Private Pilot, Instrument, Commercial, CFI training, discovery flights, and aircraft rental.",
  keywords: [
    "Cherry Hill Aviation",
    "flight school",
    "pilot training",
    "private pilot",
    "instrument rating",
    "commercial pilot",
    "CFI",
    "discovery flight",
    "aircraft rental",
    "Bedford IN",
    "Seymour IN",
    "North Vernon IN",
    "Indiana flight training",
  ],
  openGraph: {
    title: "Cherry Hill Aviation | Learn to fly in Indiana",
    description:
      "Professional flight training in Bedford, Seymour, and North Vernon, Indiana. Private, Instrument, Commercial, CFI, and discovery flights.",
    url: "/",
    siteName: "Cherry Hill Aviation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/view.png",
        width: 1200,
        height: 630,
        alt: "Cherry Hill Aviation – Learn to fly in Indiana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cherry Hill Aviation | Flight Training in Southern Indiana",
    description:
      "Flight school serving Bedford, Seymour, and North Vernon, Indiana. Private, Instrument, Tailwheel, Commercial, and CFI training.",
    images: ["/view.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.className} ${playfairDisplay.variable} bg-primary min-h-screen`}>{children}</body>
    </html>
  );
}

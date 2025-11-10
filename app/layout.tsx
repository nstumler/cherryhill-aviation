import type { Metadata } from "next";
import Script from "next/script";
import { config } from "@/lib/config";
import "./globals.css";

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
      <body className="font-serif bg-primary min-h-screen">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${config.googleAnalyticsId}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

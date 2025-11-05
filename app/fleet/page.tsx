'use client'

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

const aircraftData = [
  {
    title: "Cessna 172 - N3870S",
    description: "Our Cessna 172 Skyhawk (N3870S) is a four-seat, single-engine, high-wing aircraft, making it an excellent choice for flight training and personal use. This reliable trainer offers excellent visibility and forgiving flight characteristics.",
    imgSrc: "/N3870S.jpg",
    specifications: "- Seats: 4\n- Engine: Lycoming IO-360-L2A\n- Cruise Speed: 122 knots\n- Range: 696 nautical miles\n- Tail Number: N3870S"
  },
  {
    title: "Cessna 172P - N53065",
    description: "Our Cessna 172P (N53065) is a four-seat, single-engine, high-wing aircraft. IFR certified with modern Garmin avionics and ADS-B In/Out, perfect for flight training and cross-country flights.",
    imgSrc: "/N53065.jpg",
    specifications: "- Seats: 4\n- Engine: Lycoming O-320\n- Cruise Speed: 122 knots\n- Range: 696 nautical miles\n- Tail Number: N53065"
  },
  {
    title: "Piper Cherokee",
    description: "The Piper Cherokee is a four-seat, single-engine, low-wing aircraft, known for its affordability and simplicity, making it a popular choice for flight training and personal use.",
    imgSrc: "/coming-soon.svg",
    specifications: "- Seats: 4\n- Engine: Lycoming O-320-D3G\n- Cruise Speed: 115 knots\n- Range: 620 nautical miles\n- Image Coming Soon"
  }
];

const heroImages = ["/N3870S.jpg", "/N53065.jpg"];

export default function Fleet() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % aircraftData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + aircraftData.length) % aircraftData.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Header />
      <section className="relative h-[80vh] w-full overflow-hidden">
        {heroImages.map((src, index) => (
          <Image 
            key={src}
            src={src} 
            alt="Cherry Hill Aviation Fleet" 
            fill
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === heroImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0}
          />
        ))}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-primary to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary to-transparent z-10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-primary z-20">
          <h1 className="text-5xl font-bold tracking-tight lg:text-7xl drop-shadow-lg">Explore Our Fleet</h1>
          <p className="mt-4 max-w-2xl text-xl lg:text-2xl drop-shadow-md">
            Experience the thrill of flight with our diverse range of aircraft.
          </p>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">Our Aircraft</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              Discover the aircraft that will take your flying experience to new heights.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aircraftData.map((aircraft, index) => (
              <Card key={index} className="group mx-auto max-w-md bg-white border-0 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="bg-gradient-to-r from-accent-dark to-accent text-primary rounded-t-2xl px-6 py-5">
                  <CardTitle className="font-bold text-xl tracking-wide">{aircraft.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative w-full h-72 bg-gray-100 overflow-hidden">
                    <Image 
                      src={aircraft.imgSrc} 
                      alt={aircraft.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="mb-6 p-5 bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl border border-accent/20">
                      <p className="text-sm font-semibold text-accent-dark uppercase tracking-wider mb-3">Rates</p>
                      <div className="space-y-2">
                        <p className="text-2xl font-bold text-gray-900">
                          $175<span className="text-base font-semibold text-gray-600">/hr</span>
                          <span className="text-sm font-normal text-gray-500 ml-2">(wet)</span>
                        </p>
                        <p className="text-lg font-semibold text-gray-700">
                          $165<span className="text-sm font-normal text-gray-600">/hr (prepay)</span>
                        </p>
                        <div className="pt-2 border-t border-accent/20">
                          <p className="text-base font-semibold text-gray-800">
                            Instruction: <span className="text-accent-dark font-bold">$60/hr</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">{aircraft.description}</p>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Specifications</p>
                        <ul className="space-y-2">
                          {aircraft.specifications.split('\n').map((line, idx) => {
                            const parts = line.replace(/^-\s*/, '').split(':');
                            if (parts.length === 2) {
                              return (
                                <li key={idx} className="flex justify-between items-start text-sm">
                                  <span className="text-gray-600 font-medium">{parts[0]}:</span>
                                  <span className="text-gray-900 font-semibold text-right ml-4">{parts[1]}</span>
                                </li>
                              );
                            }
                            return (
                              <li key={idx} className="text-sm text-gray-600">{line.replace(/^-\s*/, '')}</li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

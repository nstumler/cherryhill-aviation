'use client'

import { useState } from "react";
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

export default function Fleet() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
        <Image 
          src="/N3870S.jpg" 
          alt="Cherry Hill Aviation Fleet" 
          fill
          className="absolute inset-0 h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-primary">
          <h1 className="text-5xl font-bold tracking-tight lg:text-7xl">Explore Our Fleet</h1>
          <p className="mt-4 max-w-2xl text-xl lg:text-2xl">
            Experience the thrill of flight with our diverse range of aircraft.
          </p>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">Our Aircraft</h2>
          <p className="mt-4 max-w-3xl text-xl text-gray-500">
            Discover the aircraft that will take your flying experience to new heights.
          </p>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {aircraftData.map((aircraft, index) => (
              <Card key={index} className="mx-auto max-w-md bg-white border border-gray-200 shadow-lg rounded-lg">
                <CardHeader className="bg-accent-dark text-primary rounded-t-lg">
                  <CardTitle className="font-bold">{aircraft.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="relative w-full h-64 mb-4 bg-gray-100 rounded-md overflow-hidden">
                    <Image src={aircraft.imgSrc} alt={aircraft.title} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-gray-500">{aircraft.description}</p>
                    <p className="mt-2 text-gray-500">
                      Specifications:
                      <br />
                      {aircraft.specifications.split('\n').map((line, index) => (
                        <span key={index}>{line}<br /></span>
                      ))}
                    </p>
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

'use client'

import { useState } from "react"
import Image from "next/image"
import { DiscoveryFlightModal } from "@/components/discovery-flight-modal"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <DiscoveryFlightModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/view.png"
        alt="Cherry Hill Aviation - Flight training with scenic mountain views"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 via-black/50 to-black/60 z-10" />
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-primary via-primary/80 via-primary/50 via-primary/20 to-transparent z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-primary via-primary/70 via-primary/30 to-transparent z-20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-primary z-30">
        <div className="container max-w-4xl px-4">
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Learn to fly at <br></br>Cherry Hill Aviation
          </h1>
          <p className="mb-8 text-xl font-medium text-gray-200 md:text-2xl lg:text-2xl max-w-3xl mx-auto">
          Soar to new heights with our premier flight training. Professional instruction, modern aircraft, and personalized learning. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-10 py-4 text-lg font-semibold text-primary shadow-xl hover:bg-accent-dark transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Book a Discovery Flight
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

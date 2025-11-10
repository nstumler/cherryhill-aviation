'use client'

import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Instructors() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Header />
      <main className="flex-1">
        <section className="py-24">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto mb-16 text-center">
              <h2 className="text-4xl font-bold tracking-tighter text-black">Our Instructors</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Meet the experienced pilots who will guide you on your journey to becoming a skilled aviator.
              </p>
            </div>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2 justify-center">
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <div className="relative pt-[100%]">
                  <Image
                    src="/image.png"
                    alt="Noah Stumler Photo"
                    fill
                    className="absolute inset-0 object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    quality={75}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-black">Noah Stumler</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Certified Flight Instructor</p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-500">
                    With extensive experience and a passion for aviation, Noah brings dedication to safety and excellence to every flight lesson. His commitment to personalized instruction ensures that every student feels confident and prepared for their aviation journey.
                  </p>
                  <div className="mt-6 flex gap-3">
                    <Link
                      href="https://noahstumler.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-accent text-primary hover:bg-accent-dark transition-colors"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <div className="relative pt-[100%]">
                  <Image
                    src="/coming-soon.svg"
                    alt="Riley Scruggs Photo - Coming Soon"
                    fill
                    className="absolute inset-0 object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    quality={75}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-black">Riley Scruggs</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Certified Flight Instructor</p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-500">
                    With extensive experience and a passion for aviation, Riley brings dedication to safety and excellence to every flight lesson. His commitment to personalized instruction ensures that every student feels confident and prepared for their aviation journey.
                  </p>
                  <div className="mt-6 flex gap-3">
                    <Link
                      href="/contact"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-accent text-primary hover:bg-accent-dark transition-colors"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 text-center">
            
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

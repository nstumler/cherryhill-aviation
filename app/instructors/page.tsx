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
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <div className="relative pt-[100%]">
                  <Image
                    src="/placeholder.svg"
                    alt="Instructor Photo"
                    fill
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-black">John Doe</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Chief Flight Instructor</p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-500">
                    With over 20 years of experience, John is a true master of the skies. His passion for aviation is
                    infectious, and his dedication to safety and excellence is unparalleled.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <div className="relative pt-[100%]">
                  <Image
                    src="/placeholder.svg"
                    alt="Instructor Photo"
                    fill
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-black">Jane Smith</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Commercial Pilot Instructor</p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-500">
                    Jane&#39;s expertise in commercial aviation is second to none. With a wealth of knowledge and a calm
                    demeanor, she ensures that every student feels confident and prepared.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-md">
                <div className="relative pt-[100%]">
                  <Image
                    src="/placeholder.svg"
                    alt="Instructor Photo"
                    fill
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-black">Michael Johnson</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Instrument Rating Instructor</p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-500">
                    Michael&#39;s expertise in instrument flight rules (IFR) is unmatched. His attention to detail and ability
                    to teach complex concepts make him an invaluable asset to our team.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md shadow bg-accent text-primary hover:bg-accent/90"
              >
                Contact Our Instructors
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

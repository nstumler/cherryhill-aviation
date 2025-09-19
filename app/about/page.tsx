'use client'

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-black">
                    Soar to New Heights with Cherry Hill Aviation
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Experience the thrill of flight with our comprehensive flight training programs. From private pilot
                    lessons to commercial pilot certification, we have the expertise to help you achieve your aviation
                    goals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-accent-dark px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-dark disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore Programs
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary border-t border-gray-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">
                  Explore Our Flight Training Programs
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
                  From private pilot lessons to commercial pilot certification, we offer a wide range of flight training
                  programs to help you achieve your aviation goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div>
                  <h3 className="text-xl font-heading font-bold text-black">Private Pilot</h3>
                  <p className="mt-2 text-gray-500">
                    Earn your private pilot certificate and take to the skies. Our comprehensive training program covers
                    all the essential skills and knowledge you need.
                  </p>
                </div>
                <Link
                  href="#"
                  className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-accent-dark px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-dark disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
              <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div>
                  <h3 className="text-xl font-heading font-bold text-black">Instrument Rating</h3>
                  <p className="mt-2 text-gray-500">
                    Take your flying skills to the next level with an instrument rating. Our program will teach you to
                    fly safely in instrument meteorological conditions.
                  </p>
                </div>
                <Link
                  href="#"
                  className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-accent-dark px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-dark disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
              <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div>
                  <h3 className="text-xl font-heading font-bold text-black">Commercial Pilot</h3>
                  <p className="mt-2 text-gray-500">
                    Earn your commercial pilot certificate and open up a world of career opportunities. Our program
                    covers advanced flying techniques and prepares you for a professional pilot role.
                  </p>
                </div>
                <Link
                  href="#"
                  className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-accent-dark px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-dark disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
              <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div>
                  <h3 className="text-xl font-heading font-bold text-black">Flight Instructor</h3>
                  <p className="mt-2 text-gray-500">
                    Become a certified flight instructor and share your passion for aviation with the next generation of
                    pilots. Our program covers all the skills and knowledge you need to teach others to fly.
                  </p>
                </div>
                <Link
                  href="#"
                  className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-accent-dark px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-dark disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
              <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div>
                  <h3 className="text-xl font-bold text-black">Multi-Engine Rating</h3>
                  <p className="mt-2 text-gray-500">
                    Take your flying skills to the next level with a multi-engine rating. Our program will teach you to
                    safely operate aircraft with two or more engines.
                  </p>
                </div>
                <Link
                  href="#"
                  className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-accent-dark px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-dark disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
              <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div>
                  <h3 className="text-xl font-bold text-black">Tailwheel Endorsement</h3>
                  <p className="mt-2 text-gray-500">
                    Expand your flying skills with a tailwheel endorsement. Our program will teach you to safely operate
                    aircraft with a tailwheel configuration.
                  </p>
                </div>
                <Link
                  href="#"
                  className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-accent-dark px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-dark disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">Our Locations</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
                  Cherry Hill Aviation has three convenient locations in Indiana to serve your flight training needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div>
                  <h3 className="text-xl font-bold text-black">Bedford Airport</h3>
                  <p className="mt-2 text-gray-500">1234 Airport Rd, Bedford, IN 47421</p>
                  <p className="mt-2 text-gray-500">Phone: (812) 555-1234</p>
                </div>
                <Link
                  href="#"
                  className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-accent-dark px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-dark disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Directions
                </Link>
              </div>
              <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div>
                  <h3 className="text-xl font-bold text-black">Seymour Airport</h3>
                  <p className="mt-2 text-gray-500">5678 Airport Rd, Seymour, IN 47274</p>
                  <p className="mt-2 text-gray-500">Phone: (812) 555-5678</p>
                </div>
                <Link
                  href="#"
                  className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-accent-dark px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-dark disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Directions
                </Link>
              </div>
              <div className="flex flex-col justify-between rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div>
                  <h3 className="text-xl font-bold text-black">North Vernon Airport</h3>
                  <p className="mt-2 text-gray-500">9012 Airport Rd, North Vernon, IN 47265</p>
                  <p className="mt-2 text-gray-500">Phone: (812) 555-9012</p>
                </div>
                <Link
                  href="#"
                  className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-accent-dark px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-dark disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

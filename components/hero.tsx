import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-black">
                Learn to fly with Cherry Hill Aviation
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Soar to new heights with our premier flight training. Professional instruction, modern aircraft, and personalized learning to help you achieve your aviation dreams.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-accent-dark px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-dark disabled:pointer-events-none disabled:opacity-50"
              >
                Start Flying Today
              </Link>
              <Link
                href="/fleet"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              >
                View Our Fleet
              </Link>
            </div>
          </div>
          <Image
            src="/view.png"
            alt="Cherry Hill Aviation - Flight training with scenic mountain views"
            width={600}
            height={400}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            priority
            quality={90}
          />
        </div>
      </div>
    </section>
  )
}

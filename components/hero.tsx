import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/view.png"
        alt="Cherry Hill Aviation - Flight training with scenic mountain views"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-primary">
        <div className="container max-w-4xl px-4">
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Learn to fly at <br></br>Cherry Hill Aviation
          </h1>
          <p className="mb-8 text-xl font-medium text-gray-200 md:text-2xl lg:text-2xl max-w-3xl mx-auto">
            Soar to new heights with our premier flight training. Professional instruction, modern aircraft, and personalized learning to help you achieve your aviation dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              className="inline-flex items-center justify-center rounded-lg bg-accent px-10 py-4 text-lg font-semibold text-primary shadow-xl hover:bg-accent-dark transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              href="/contact"
            >
              Book a Discovery Flight
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

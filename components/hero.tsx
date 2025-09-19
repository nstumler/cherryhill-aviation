import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="bg-primary">
      {/* Hero Content - Mobile First */}
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl font-heading font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Cherry Hill</span>
              <span className="block text-accent">Aviation</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 sm:text-xl md:text-xl lg:text-lg xl:text-xl max-w-lg mx-auto lg:mx-0">
              Soar to new heights with our premier flight training. Professional instruction, modern aircraft, and personalized learning.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-base font-medium text-primary shadow-lg hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                href="/contact"
              >
                Start Flying Today
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-lg border-2 border-accent px-8 py-3 text-base font-medium text-accent hover:bg-accent hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                href="/fleet"
              >
                View Our Fleet
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/view.png"
                alt="Cherry Hill Aviation - Flight training with scenic mountain views"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                priority
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

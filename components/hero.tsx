import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/view.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/70" />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center text-primary">
        <div className="container max-w-2xl px-4">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">Cherry Hill Aviation</h1>
          <p className="mb-8 text-lg font-medium text-gray-200 md:text-xl lg:text-2xl">
            Soar to new heights with our premier flight training.
          </p>
          <Link
            className="inline-flex items-center justify-center rounded-md bg-accent-dark px-8 py-3 text-base font-medium text-primary shadow-sm hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            href="#"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}

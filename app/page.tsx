import Link from "next/link";
import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { Footer } from '../components/footer'
import { AirportMap } from '../components/airport-map'
import './globals.css' // Correct path to your global styles

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Header />
      <main className="flex-1">
        <Hero />
        
        {/* Flight Training Options Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary border-t border-gray-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">
                  Flight Training Options
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
                  From private pilot lessons to commercial pilot certification, we offer a wide range of flight training
                  options to help you achieve your aviation goals.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-6xl py-12 lg:columns-3 lg:gap-10 md:columns-2 columns-1 space-y-8">
              <div className="rounded-xl bg-stone-50 p-8 shadow-lg border border-stone-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white cursor-pointer break-inside-avoid">
                <h3 className="text-2xl font-bold text-black mb-4">Private Pilot</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Begin your aviation journey with our comprehensive Private Pilot License program. Learn fundamental flight skills, navigation, weather interpretation, and federal aviation regulations. This foundational course covers everything from basic aircraft systems to cross-country flight planning.
                </p>
                <div className="space-y-3 text-sm text-gray-500">
                  <p><span className="font-semibold text-accent">Requirements:</span> 40 hours minimum flight time</p>
                  <p><span className="font-semibold text-accent">Duration:</span> 3-6 months typical completion</p>
                  <p><span className="font-semibold text-accent">Aircraft:</span> Cessna 172, Cherokee</p>
                  <p><span className="font-semibold text-accent">Ground School:</span> Aerodynamics, regulations, weather</p>
                </div>
              </div>
              
              <div className="rounded-xl bg-stone-50 p-8 shadow-lg border border-stone-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white cursor-pointer break-inside-avoid">
                <h3 className="text-2xl font-bold text-black mb-4">Instrument Rating</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Master precision flying in all weather conditions. Learn to navigate using instruments alone, interpret approach plates, and execute precise approaches in low visibility conditions.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p><span className="font-semibold text-accent">Requirements:</span> Private Pilot License, 50 hours cross-country</p>
                  <p><span className="font-semibold text-accent">Duration:</span> 2-4 months typical completion</p>
                  <p><span className="font-semibold text-accent">Training:</span> Hood work, simulator, actual IMC</p>
                </div>
              </div>
              
              <div className="rounded-xl bg-stone-50 p-8 shadow-lg border border-stone-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white cursor-pointer break-inside-avoid">
                <h3 className="text-2xl font-bold text-black mb-4">Commercial Pilot</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Turn your passion into a profession. Develop advanced flight skills, complex aircraft operations, and the precision required for commercial aviation operations. Master advanced maneuvers and emergency procedures while building the experience needed for a career in aviation.
                </p>
                <div className="space-y-3 text-sm text-gray-500">
                  <p><span className="font-semibold text-accent">Requirements:</span> 250 hours total time, instrument rating</p>
                  <p><span className="font-semibold text-accent">Duration:</span> 4-8 months typical completion</p>
                  <p><span className="font-semibold text-accent">Focus:</span> Advanced maneuvers, commercial operations</p>
                  <p><span className="font-semibold text-accent">Career Path:</span> Airlines, charter, corporate aviation</p>
                </div>
              </div>
              
              <div className="rounded-xl bg-stone-50 p-8 shadow-lg border border-stone-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white cursor-pointer break-inside-avoid">
                <h3 className="text-2xl font-bold text-black mb-4">Flight Instructor</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Share your aviation knowledge and build flight time as a Certified Flight Instructor. Learn teaching techniques, lesson planning, and advanced flight instruction methods. This rating opens doors to building hours while earning income and sharing your passion for aviation.
                </p>
                <div className="space-y-3 text-sm text-gray-500">
                  <p><span className="font-semibold text-accent">Requirements:</span> Commercial license, written exam</p>
                  <p><span className="font-semibold text-accent">Duration:</span> 2-3 months typical completion</p>
                  <p><span className="font-semibold text-accent">Benefits:</span> Build hours while earning income</p>
                  <p><span className="font-semibold text-accent">Specializations:</span> Instrument, multi-engine, tailwheel</p>
                </div>
              </div>
              
              <div className="rounded-xl bg-stone-50 p-8 shadow-lg border border-stone-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white cursor-pointer break-inside-avoid">
                <h3 className="text-2xl font-bold text-black mb-4">Tailwheel Endorsement</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Master the art of flying conventional gear aircraft. Develop superior rudder skills, crosswind techniques, and experience the pure joy of flying classic tailwheel aircraft.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p><span className="font-semibold text-accent">Requirements:</span> Private Pilot License or higher</p>
                  <p><span className="font-semibold text-accent">Duration:</span> 10-15 hours typical completion</p>
                  <p><span className="font-semibold text-accent">Aircraft:</span> Classic tailwheel training aircraft</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full border-t border-stone-300 opacity-50"></div>

        {/* Our Locations Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">Our Locations</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl">
                  Cherry Hill Aviation has three convenient locations in Indiana to serve your flight training needs.
                </p>
              </div>
            </div>
            
            {/* Interactive Map */}
            <div className="w-full max-w-6xl mx-auto">
              <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <AirportMap />
              </div>
            </div>

            {/* Location Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="flex flex-col text-center bg-white rounded-lg p-8 shadow-lg border border-gray-200 min-h-[200px]">
                <h3 className="text-xl font-bold text-black mb-3">Virgil I. Grissom Municipal Airport</h3>
                <p className="text-gray-600 text-sm mb-1">3213 Tunnelton Rd</p>
                <p className="text-gray-600 text-sm mb-6 flex-grow">Bedford, IN 47421</p>
                <Link
                  href="https://maps.google.com/?q=3213+Tunnelton+Rd,+Bedford,+IN+47421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border-2 border-accent rounded-md hover:bg-gray-50 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  Get Directions
                </Link>
              </div>
              <div className="flex flex-col text-center bg-white rounded-lg p-8 shadow-lg border border-gray-200 min-h-[200px]">
                <h3 className="text-xl font-bold text-black mb-3">Freeman Municipal Airport</h3>
                <p className="text-gray-600 text-sm mb-1">1025 A Ave</p>
                <p className="text-gray-600 text-sm mb-6 flex-grow">Seymour, IN 47274</p>
                <Link
                  href="https://maps.google.com/?q=1025+A+Ave,+Seymour,+IN+47274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border-2 border-accent rounded-md hover:bg-gray-50 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                >
                  Get Directions
                </Link>
              </div>
              <div className="flex flex-col text-center bg-white rounded-lg p-8 shadow-lg border border-gray-200 min-h-[200px]">
                <h3 className="text-xl font-bold text-black mb-3">North Vernon Muni Airport-Ovo</h3>
                <p className="text-gray-600 text-sm mb-1">645 E County Rd 450 N</p>
                <p className="text-gray-600 text-sm mb-6 flex-grow">North Vernon, IN 47265</p>
                <Link
                  href="https://maps.google.com/?q=645+E+County+Rd+450+N,+North+Vernon,+IN+47265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border-2 border-accent rounded-md hover:bg-gray-50 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
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
  )
}

export default Home

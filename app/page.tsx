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
            <div className="mx-auto max-w-6xl py-12">
              {/* First row - 3 cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="group rounded-xl bg-white p-8 shadow-md border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:bg-gray-50">
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-accent transition-colors duration-300">Private Pilot</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    Begin your aviation journey with our comprehensive Private Pilot License program. Learn fundamental flight skills, navigation, weather interpretation, and federal aviation regulations. 
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    <p><span className="font-semibold text-accent">Requirements:</span> 40 hours minimum flight time</p>
                    <p><span className="font-semibold text-accent">Duration:</span> 3-6 months typical completion</p>
                    <p><span className="font-semibold text-accent">Aircraft:</span> Cessna 172, Cherokee</p>
                  </div>
                </div>
                
                <div className="group rounded-xl bg-white p-8 shadow-md border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:bg-gray-50">
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-accent transition-colors duration-300">Instrument Rating</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    Master precision flying in all weather conditions. Learn to navigate using instruments alone, interpret approach plates, and execute precise approaches in low visibility conditions.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    <p><span className="font-semibold text-accent">Requirements:</span> Private Pilot License, 50 hours cross-country</p>
                    <p><span className="font-semibold text-accent">Duration:</span> 2-4 months typical completion</p>
                    <p><span className="font-semibold text-accent">Training:</span> Hood work, simulator, actual IMC</p>
                  </div>
                </div>
                
                <div className="group rounded-xl bg-white p-8 shadow-md border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:bg-gray-50">
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-accent transition-colors duration-300">Commercial Pilot</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    Turn your passion into a profession. Develop advanced flight skills, complex aircraft operations, and the precision required for commercial aviation operations.
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    <p><span className="font-semibold text-accent">Requirements:</span> 250 hours total time, instrument rating</p>
                    <p><span className="font-semibold text-accent">Duration:</span> 4-8 months typical completion</p>
                    <p><span className="font-semibold text-accent">Focus:</span> Advanced maneuvers, commercial operations</p>
                  </div>
                </div>
              </div>
              
              {/* Second row - 2 cards centered */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
                  <div className="group rounded-xl bg-white p-8 shadow-md border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:bg-gray-50">
                    <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-accent transition-colors duration-300">Flight Instructor</h3>
                    <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      Share your aviation knowledge and build flight time as a Certified Flight Instructor. Learn teaching techniques, lesson planning, and advanced flight instruction methods.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <p><span className="font-semibold text-accent">Requirements:</span> Commercial license, written exam</p>
                      <p><span className="font-semibold text-accent">Duration:</span> 2-3 months typical completion</p>
                      <p><span className="font-semibold text-accent">Benefits:</span> Build hours while earning income</p>
                    </div>
                  </div>
                  
                  <div className="group rounded-xl bg-white p-8 shadow-md border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:bg-gray-50">
                    <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-accent transition-colors duration-300">Tailwheel Endorsement</h3>
                    <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      Master the art of flying conventional gear aircraft. Develop superior rudder skills, crosswind techniques, and experience the pure joy of flying classic tailwheel aircraft.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      <p><span className="font-semibold text-accent">Requirements:</span> Private Pilot License or higher</p>
                      <p><span className="font-semibold text-accent">Duration:</span> 10-15 hours typical completion</p>
                      <p><span className="font-semibold text-accent">Aircraft:</span> Classic tailwheel training aircraft</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-black mb-2">Bedford Airport</h3>
                <p className="text-gray-600 text-sm mb-1">3213 Tunnelton Rd</p>
                <p className="text-gray-600 text-sm mb-3">Bedford, IN 47421</p>
                <Link
                  href="https://maps.google.com/?q=3213+Tunnelton+Rd,+Bedford,+IN+47421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-accent font-medium text-sm hover:text-accent-dark transition-colors"
                >
                  Get Directions
                </Link>
              </div>
              <div className="text-center bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-black mb-2">Seymour Airport</h3>
                <p className="text-gray-600 text-sm mb-1">1025 A Ave</p>
                <p className="text-gray-600 text-sm mb-3">Seymour, IN 47274</p>
                <Link
                  href="https://maps.google.com/?q=1025+A+Ave,+Seymour,+IN+47274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-accent font-medium text-sm hover:text-accent-dark transition-colors"
                >
                  Get Directions
                </Link>
              </div>
              <div className="text-center bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-black mb-2">North Vernon Airport</h3>
                <p className="text-gray-600 text-sm mb-1">645 E County Rd 450 N</p>
                <p className="text-gray-600 text-sm mb-3">North Vernon, IN 47265</p>
                <Link
                  href="https://maps.google.com/?q=645+E+County+Rd+450+N,+North+Vernon,+IN+47265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-accent font-medium text-sm hover:text-accent-dark transition-colors"
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

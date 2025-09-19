'use client'

import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, MailIcon, ClockIcon } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-black mb-4">
                Contact Us
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl mx-auto">
                Ready to start your aviation journey? Get in touch with our team and let's get you flying.
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-black mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        id="first-name" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white transition-colors" 
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        id="last-name" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white transition-colors" 
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white transition-colors" 
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white transition-colors" 
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      What can we help you with today?
                    </label>
                    <select id="service" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white transition-colors">
                      <option value="">Select a service...</option>
                      <option>Private Pilot License</option>
                      <option>Instrument Rating</option>
                      <option>Commercial Pilot License</option>
                      <option>Flight Instructor Certification</option>
                      <option>Aircraft Rental</option>
                      <option>Discovery Flight</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Preferred contact method:</label>
                    <div className="flex flex-wrap gap-4">
                      {['Phone', 'Email', 'Text'].map((pref) => (
                        <label key={pref} className="flex items-center cursor-pointer">
                          <input 
                            type="radio" 
                            name="contact-preference" 
                            value={pref.toLowerCase()}
                            className="mr-2 text-accent focus:ring-accent focus:ring-2" 
                          />
                          <span className="text-sm text-gray-700 font-medium">{pref}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white transition-colors resize-none"
                      placeholder="Tell us more about your aviation goals and how we can help..."
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full p-3 bg-accent hover:bg-accent-dark text-primary font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Info Cards */}
                <div className="grid gap-4">
                  <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <PhoneIcon className="w-6 h-6 text-accent" />
                      <div>
                        <h3 className="font-bold text-black">Call Us</h3>
                        <p className="text-gray-600">615-669-5117</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <MailIcon className="w-6 h-6 text-accent" />
                      <div>
                        <h3 className="font-bold text-black">Email Us</h3>
                        <p className="text-gray-600">fly@cherryhillaviation.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                    <div className="flex items-center space-x-3">
                      <ClockIcon className="w-6 h-6 text-accent" />
                      <div>
                        <h3 className="font-bold text-black">Hours</h3>
                        <p className="text-gray-600">Mon - Sun: 8am - 5pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

// ... (Icon components remain unchanged)

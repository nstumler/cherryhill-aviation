'use client'

import Link from "next/link";
import { PhoneIcon, MailIcon, ClockIcon } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Header />
      <main className="flex flex-1 flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative">
          <img src="/view.png" alt="Plane" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-5xl font-heading font-bold text-white mb-8 text-center">Contact Us</h1>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-primary p-8 shadow-lg border border-gray-200">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input type="text" id="first-name" className="w-full p-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent bg-white" />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input type="text" id="last-name" className="w-full p-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent bg-white" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent bg-white" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input type="tel" id="phone" className="w-full p-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent bg-white" />
              </div>
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                What can we help you with today?
              </label>
              <select id="service" className="w-full p-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent bg-white">
                <option>Flight Instruction</option>
                <option>Aircraft Rental</option>
                <option>Scenic Flights</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact preference:</label>
              <div className="flex items-center space-x-4">
                {['Phone', 'Email', 'Text'].map((pref) => (
                  <div key={pref} className="flex items-center">
                    <input type="radio" id={`${pref.toLowerCase()}-preference`} name="contact-preference" className="mr-2 text-accent focus:ring-accent" />
                    <label htmlFor={`${pref.toLowerCase()}-preference`} className="text-sm text-gray-700">
                      {pref}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent bg-white"
                placeholder="Tell us more about how we can help..."
              />
            </div>
            <button type="submit" className="w-full p-3 bg-accent hover:bg-accent-dark text-white rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1">
              Submit
            </button>
          </form>
        </div>
      </main>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-800 text-primary">
        {[
          { icon: PhoneIcon, title: "CALL US", content: "Tel: 615-669-5117" },
          { icon: MailIcon, title: "EMAIL US", content: "fly@classbravoair.com" },
          { icon: ClockIcon, title: "OPENING HOURS", content: "Mon - Sun: 8am - 5pm" },
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-3 justify-center">
            <item.icon className="w-8 h-8 text-accent" />
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

// ... (Icon components remain unchanged)

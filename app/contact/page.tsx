'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, MailIcon, ClockIcon } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { config } from "@/lib/config";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('first-name') as string;
    const lastName = formData.get('last-name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const contactPreference = formData.get('contact-preference') as string;
    const message = formData.get('message') as string;
    
    // Create email body
    const emailBody = `Hello Cherry Hill Aviation,

I would like to get in touch with you.

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service Interest: ${service || 'Not specified'}
Preferred Contact Method: ${contactPreference || 'Not specified'}

Message:
${message || 'No message provided'}

Please contact me at your earliest convenience.

Thank you!`;
    
    // Open mailto link
    const mailtoLink = `mailto:${config.contactEmail}?subject=Contact Form Submission from ${firstName} ${lastName}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    setSubmitStatus('success');
    setTimeout(() => {
      setSubmitStatus('idle');
      ;(e.target as HTMLFormElement).reset();
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-8 pb-12 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-black mb-4">
                Contact Us
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl mx-auto">
                Ready to start your aviation journey? Get in touch with our team and let&#39;s get you flying.
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-black mb-6">Send us a message</h2>
                {submitStatus === 'success' ? (
                  <div className="py-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">Message Prepared!</h3>
                    <p className="text-gray-600">Your email client should open with your message ready to send.</p>
                  </div>
                ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        id="first-name" 
                        name="first-name"
                        required
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
                        name="last-name"
                        required
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
                        name="email"
                        required
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
                        name="phone"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white transition-colors" 
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      What can we help you with today?
                    </label>
                    <select id="service" name="service" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white transition-colors">
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
                      name="message"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent bg-white transition-colors resize-none"
                      placeholder="Tell us more about your aviation goals and how we can help..."
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full p-3 bg-accent hover:bg-accent-dark text-primary font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Preparing Email...' : 'Send Message'}
                  </button>
                </form>
                )}
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
                        <a href={`mailto:${config.contactEmail}`} className="text-gray-600 hover:text-accent transition-colors">
                          {config.contactEmail}
                        </a>
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

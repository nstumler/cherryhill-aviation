'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { config } from '@/lib/config'

interface DiscoveryFlightModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DiscoveryFlightModal({ isOpen, onClose }: DiscoveryFlightModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const date = formData.get('date') as string
    const message = formData.get('message') as string
    
    // Create email body
    const emailBody = `Hello,

I would like to book a discovery flight.

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Preferred Date/Time: ${date || 'Not specified'}

Additional Information:
${message || 'None'}

Please contact me to schedule.`
    
    // Open mailto link
    const mailtoLink = `mailto:${config.contactEmail}?subject=Discovery Flight Booking Request&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
    
    setSubmitStatus('success')
    setTimeout(() => {
      onClose()
      setSubmitStatus('idle')
      ;(e.target as HTMLFormElement).reset()
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-black mb-2">Book Your Discovery Flight</h2>
          <p className="text-gray-600 mb-6">Experience the thrill of flying! Contact us directly or fill out the form below.</p>
          
          {/* Direct Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
              href={`mailto:${config.contactEmail}?subject=Discovery Flight Booking Request&body=Hello,%0D%0A%0D%0AI would like to book a discovery flight.%0D%0A%0D%0APlease contact me to schedule.`}
              className="flex-1 px-6 py-3 bg-accent hover:bg-accent-dark text-primary font-semibold rounded-lg transition-colors text-center"
            >
              Email Us Directly
            </a>
            <a
              href={config.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-primary font-semibold rounded-lg transition-colors text-center"
            >
              Schedule on Calendly
            </a>
          </div>
          
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or fill out the form below</span>
            </div>
          </div>

          {submitStatus === 'success' ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Request Sent!</h3>
              <p className="text-gray-600">We&apos;ll contact you soon to schedule your discovery flight.</p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit} 
              className="space-y-4"
              name="discovery-flight"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="discovery-flight" />
              <input type="hidden" name="subject" value="Discovery Flight Booking Request" />
              <div className="hidden">
                <input name="bot-field" />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                  Preferred Date/Time
                </label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  placeholder="e.g., Next Saturday morning"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
                  placeholder="Any questions or special requests?"
                />
              </div>

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">Something went wrong. Please try again or call us directly.</p>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-accent hover:bg-accent-dark text-primary font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Book Now'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}


"use client";

import { useState, FormEvent } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-brand mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a question about a vehicle or interested in our consignment
            program? Reach out — we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-dark-800 border border-brand/30 rounded-lg p-8 text-center">
                <div className="text-brand text-4xl mb-4">&#10003;</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400">
                  Thanks for reaching out. We&apos;ll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-brand hover:text-brand-light text-sm transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full bg-dark-700 border border-dark-600 text-white rounded px-4 py-3 placeholder-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full bg-dark-700 border border-dark-600 text-white rounded px-4 py-3 placeholder-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    className="w-full bg-dark-700 border border-dark-600 text-white rounded px-4 py-3 placeholder-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                  />
                  <select
                    defaultValue=""
                    className="w-full bg-dark-700 border border-dark-600 text-white rounded px-4 py-3 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors"
                  >
                    <option value="" disabled className="text-gray-500">
                      Subject
                    </option>
                    <option>General Inquiry</option>
                    <option>Vehicle Question</option>
                    <option>Consignment Interest</option>
                    <option>Other</option>
                  </select>
                </div>
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="w-full bg-dark-700 border border-dark-600 text-white rounded px-4 py-3 placeholder-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-brand hover:bg-brand-light text-dark-900 font-semibold py-3.5 rounded transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <a
                href="tel:+15551234567"
                className="text-gray-400 hover:text-brand transition-colors"
              >
                (555) 123-4567
              </a>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a
                href="mailto:info@berlinmotors.com"
                className="text-gray-400 hover:text-brand transition-colors"
              >
                info@berlinmotors.com
              </a>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-400">
                123 Auto Drive<br />
                Suite 100<br />
                Your City, ST 12345
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Hours</h3>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Monday – Friday: 9:00 AM – 7:00 PM</p>
                <p>Saturday: 10:00 AM – 5:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

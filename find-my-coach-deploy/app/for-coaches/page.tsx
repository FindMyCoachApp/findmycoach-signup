import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FiUsers, FiCalendar, FiDollarSign, FiTrendingUp, FiShield, FiBarChart2 } from 'react-icons/fi'

export default function ForCoaches() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent-500 to-accent-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Grow Your Coaching Business with Zero Hassle
          </h1>
          <p className="text-xl text-accent-50 mb-8">
            Reach more clients. Manage bookings & payments easily. Build your professional brand.
          </p>
          <Link
            href="/#waitlist"
            className="inline-block px-8 py-4 bg-white text-accent-600 rounded-lg font-medium hover:bg-accent-50 transition-colors"
          >
            Become a Coach — Join Waitlist
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white text-center mb-12">
            Why Coaches Choose Find My Coach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center">
                  <FiUsers className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Reach More Clients
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get discovered by thousands of athletes looking for quality coaching. Build your client base effortlessly.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <FiCalendar className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Manage Bookings Easily
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Set your availability and let the system handle bookings. Get instant notifications for new sessions.
                </p>
              </div>
            </div>


            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <FiTrendingUp className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Grow Your Income
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Set your own rates and fill your schedule. Maximize your earning potential with flexible pricing.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center">
                  <FiShield className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Build Your Brand
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Showcase your expertise, certifications, and achievements. Stand out with a professional profile.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <FiBarChart2 className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Track Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Monitor your bookings, earnings, and reviews. Get insights to optimize your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Monthly Visibility Fee
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Pay a small monthly fee to be visible to athletes in your area
              </p>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Keep 100% of Your Earnings
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Find My Coach takes <strong>zero commission</strong> from your lessons. You keep everything you earn.
              </p>
            </div>

            <div className="bg-accent-50 dark:bg-accent-900/20 rounded-lg p-6 mt-8">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>No hidden fees.</strong> No surprise charges. Just a simple monthly fee for visibility and you keep 100% of your lesson earnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join our waitlist and start reaching more athletes today.
          </p>
          <Link
            href="/#waitlist"
            className="inline-block px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-medium transition-colors"
          >
            Join as a Coach
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FiSearch, FiMapPin, FiDollarSign, FiShield, FiStar, FiClock } from 'react-icons/fi'

export default function ForAthletes() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Train Smarter with Verified Coaches Near You
          </h1>
          <p className="text-xl text-primary-50 mb-8">
            Browse hundreds of local coaches. Book sessions instantly. Build a personalized training plan.
          </p>
          <Link
            href="/#waitlist"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
          >
            Join Waitlist for Early Access
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white text-center mb-12">
            Why Athletes Love Find My Coach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <FiSearch className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Browse Hundreds of Coaches
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Find certified coaches across multiple sports including tennis, swimming, badminton, and more. Filter by location, price, and ratings.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center">
                  <FiClock className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Book Sessions Instantly
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No more phone calls or back-and-forth emails. Book a session in seconds with real-time availability.
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
                  Verified Coaches Only
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  All coaches undergo verification and background checks. Your safety and security are our top priority.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <FiDollarSign className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Competitive Pricing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Coaches keep 100% of their earnings, so they can offer you better rates without platform fees.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <FiStar className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Read Real Reviews
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  See what other athletes say about their experience. Make informed decisions based on authentic feedback.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center">
                  <FiMapPin className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Coaches Near You
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Find coaches in your area with our location-based search. Training locations throughout Kuala Lumpur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start Training?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join our waitlist and get early access to Find My Coach when we launch.
          </p>
          <Link
            href="/#waitlist"
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
          >
            Join Waitlist
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

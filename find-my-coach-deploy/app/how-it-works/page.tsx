import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FiSearch, FiUser, FiCalendar, FiMessageCircle, FiDollarSign, FiUsers } from 'react-icons/fi'

export default function HowItWorks() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Simple, fast, and secure. Get started in minutes.
          </p>
        </div>
      </section>

      {/* For Athletes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full font-medium mb-4">
              For Athletes
            </div>
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Find and book your perfect coach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiSearch className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">1. Search</div>
              <p className="text-gray-600 dark:text-gray-300">
                Browse hundreds of certified coaches in your area. Filter by sport, price, ratings, and availability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUser className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">2. View Profile</div>
              <p className="text-gray-600 dark:text-gray-300">
                Check coach ratings, experience, specializations, and read reviews from other athletes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCalendar className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">3. Book & Chat</div>
              <p className="text-gray-600 dark:text-gray-300">
                Book a session instantly and chat with your coach to coordinate details and goals.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/for-athletes"
              className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
            >
              Learn More About Our Features
            </Link>
          </div>
        </div>
      </section>

      {/* For Coaches */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-400 rounded-full font-medium mb-4">
              For Coaches
            </div>
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Grow your coaching business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="w-8 h-8 text-accent-600 dark:text-accent-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">1. Create Profile</div>
              <p className="text-gray-600 dark:text-gray-300">
                Sign up and create your professional profile. List your expertise, experience, and availability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMessageCircle className="w-8 h-8 text-accent-600 dark:text-accent-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">2. Receive Bookings</div>
              <p className="text-gray-600 dark:text-gray-300">
                Athletes will discover and book your sessions. Manage your calendar and availability easily.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiDollarSign className="w-8 h-8 text-accent-600 dark:text-accent-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">3. Get Paid</div>
              <p className="text-gray-600 dark:text-gray-300">
                Secure payments are processed automatically. Build your client base and earn more.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/for-coaches"
              className="inline-block px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-medium transition-colors"
            >
              Join as a Coach
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            Join our waitlist and be among the first to experience Find My Coach.
          </p>
          <Link
            href="/#waitlist"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
          >
            Join Waitlist Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

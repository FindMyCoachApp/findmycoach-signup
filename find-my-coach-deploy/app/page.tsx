import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WaitlistForm from '@/components/WaitlistForm'
import CountdownTimer from '@/components/CountdownTimer'
import AppPhotoCarousel from '@/components/AppPhotoCarousel'
import Link from 'next/link'
import { FiSearch, FiCalendar, FiMessageCircle, FiShield, FiMapPin, FiAward, FiClock, FiUsers } from 'react-icons/fi'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Find your perfect coach.
                <span className="block text-primary-600 dark:text-primary-400">
                  Anytime. Anywhere in KL.
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Connect with certified sports coaches in Kuala Lumpur. Book training sessions, chat with coaches, and grow your athletic skills all in one app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScsacqoQMduWuLd3_ESdPxxeDIxZ3ua82yrTwjTM-sjaMEHjQ/viewform?usp=sharing&ouid=114685778671999585553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-center transition-colors shadow-lg"
                >
                  Join Waitlist
                </a>
                <Link
                  href="/how-it-works"
                  className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg font-medium text-center transition-colors hover:border-primary-600"
                >
                  How It Works
                </Link>
              </div>
            </div>
            <div className="relative">
              <AppPhotoCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <CountdownTimer />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Coaches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-300">Sports</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">70+</div>
              <div className="text-gray-600 dark:text-gray-300">Athletes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Find My Coach?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to find and book your perfect coach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                <FiSearch className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Search Nearby
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Find certified coaches in your area with real-time availability
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                <FiCalendar className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Book Instantly
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Schedule sessions in seconds with our seamless booking system
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                <FiMessageCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Chat Directly
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Communicate with coaches before and after sessions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Athletes & Coaches */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For Athletes */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">For Athletes</h2>
              <p className="text-primary-50 mb-6">
                Train smarter with verified coaches near you. Browse hundreds of local coaches, book sessions instantly, and build a personalized training plan.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <FiMapPin className="w-5 h-5 flex-shrink-0" />
                  <span>Browse coaches nearby</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiClock className="w-5 h-5 flex-shrink-0" />
                  <span>Book anytime, anywhere</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiAward className="w-5 h-5 flex-shrink-0" />
                  <span>Easy to navigate and filter to match with the perfect coach</span>
                </li>
              </ul>
              <Link
                href="/for-athletes"
                className="inline-block px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* For Coaches */}
            <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">For Coaches</h2>
              <p className="text-accent-50 mb-6">
                Grow your coaching business with zero hassle. Reach more clients, manage bookings & payments easily, and build your professional brand.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <FiUsers className="w-5 h-5 flex-shrink-0" />
                  <span>Reach more clients</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiClock className="w-5 h-5 flex-shrink-0" />
                  <span>Manage schedules easily</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiMessageCircle className="w-5 h-5 flex-shrink-0" />
                  <span>In App Chatting for Coaches</span>
                </li>
              </ul>
              <Link
                href="/for-coaches"
                className="inline-block px-6 py-3 bg-white text-accent-600 rounded-lg font-medium hover:bg-accent-50 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Be the first to experience the app
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Join our waitlist and get early access to Find My Coach when we launch
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScsacqoQMduWuLd3_ESdPxxeDIxZ3ua82yrTwjTM-sjaMEHjQ/viewform?usp=sharing&ouid=114685778671999585553"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium text-center transition-colors shadow-lg"
          >
            Join Waitlist on Google Forms
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

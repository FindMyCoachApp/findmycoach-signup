import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi'

export default function About() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            About Find My Coach
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Making quality sports training accessible for everyone in Kuala Lumpur
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300">
              Established by Miko, a dedicated athlete and entrepreneur in Kuala Lumpur, Malaysia, the platform originated as a means to link athletes with certified coaches in the region. Having encountered the difficulties of locating an appropriate coach, ranging from insufficient visibility of available coaches to intricate booking procedures, Miko identified an opportunity to transform the sports coaching sector.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-6">
                <FiTarget className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                To make quality sports training accessible for everyone by connecting athletes with certified coaches through innovative technology.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mb-6">
                <FiEye className="w-8 h-8 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                To empower coaches and athletes through technology, creating a thriving community where sports excellence is achievable for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-12 text-center">
            What We Believe In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiHeart className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quality First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We only work with certified and verified coaches to ensure the highest quality training experience.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiHeart className="w-8 h-8 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Everyone deserves access to quality sports coaching, regardless of location or background.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiHeart className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building a supportive community of athletes and coaches who share a passion for sports excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-display font-bold mb-6">
            Join Us on This Journey
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            Be part of the future of sports training in Kuala Lumpur.
          </p>
          <Link
            href="/#waitlist"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
          >
            Join Waitlist
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

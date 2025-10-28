import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FiMail, FiMapPin, FiInstagram, FiClock, FiMessageCircle } from 'react-icons/fi'

export default function Contact() {
    return (
        <main className="min-h-screen pt-16">
            <Navbar />

            {/* Hero */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-12 text-center">
                        Get in Touch
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Email Contact */}
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center">
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FiMail className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Email Us
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Send us an email and we'll get back to you within 24 hours.
                            </p>
                            <a
                                href="mailto:findmycoach.contact@gmail.com"
                                className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
                            >
                                findmycoach.contact@gmail.com
                            </a>
                        </div>

                        {/* Instagram DM */}
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center">
                            <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FiInstagram className="w-8 h-8 text-accent-600 dark:text-accent-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Instagram DM
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Send us a direct message on Instagram for quick responses.
                            </p>
                            <a
                                href="https://www.instagram.com/findmycoach.official/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-medium transition-colors"
                            >
                                @findmycoach.official
                            </a>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-12 text-center">
                        <div className="flex items-center justify-center space-x-8 text-gray-600 dark:text-gray-300">
                            <div className="flex items-center space-x-2">
                                <FiMapPin className="w-5 h-5" />
                                <span>Kuala Lumpur, Malaysia</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FiClock className="w-5 h-5" />
                                <span>24h response time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ CTA */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                        Need Quick Answers?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Check out our FAQ section for answers to common questions.
                    </p>
                    <Link
                        href="/faq"
                        className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
                    >
                        <FiMessageCircle className="w-5 h-5 mr-2" />
                        View FAQ
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}

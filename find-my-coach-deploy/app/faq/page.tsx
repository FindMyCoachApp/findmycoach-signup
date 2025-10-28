'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const faqs = [
  {
    question: 'How do I sign up?',
    answer: 'Simply join our waitlist by filling out the form on our home page. We\'ll notify you as soon as the app launches so you can create your account.',
  },
  {
    question: 'Is there a fee for coaches to join?',
    answer: 'Coaches who sign up for the waitlist first before the app launches will get 2 months free access to the app.',
  },
  {
    question: 'Which sports are supported?',
    answer: 'We support a wide range of sports including tennis, swimming, badminton, football, basketball, and many more. Check our website for the complete list of sports available in your area.',
  },
  {
    question: 'When will the app launch?',
    answer: 'We\'re working hard to bring you the best experience possible. Join our waitlist to be among the first to know when we launch!',
  },
  {
    question: 'Is it available outside Malaysia?',
    answer: 'Currently, we\'re focusing on Kuala Lumpur, Malaysia. However, we plan to expand to other cities in the future. Stay tuned!',
  },
  {
    question: 'How do I verify a coach?',
    answer: 'All coaches on our platform go through a rigorous verification process, including background checks and certification verification. You can see their verified status on their profile.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept various payment methods including credit cards, debit cards, and digital wallets. All transactions are secure and protected.',
  },
  {
    question: 'Can I book a session for someone else?',
    answer: 'Yes! You can book sessions as a gift or for a family member. Simply indicate the name of the person when making the booking.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <span className="text-left font-medium text-gray-900 dark:text-white">{question}</span>
        {isOpen ? (
          <FiChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
        ) : (
          <FiChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about Find My Coach
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We're here to help! Reach out to us at{' '}
            <a
              href="mailto:findmycoach.contact@gmail.com"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              findmycoach.contact@gmail.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

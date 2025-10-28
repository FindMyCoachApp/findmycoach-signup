import Link from 'next/link'
import Image from 'next/image'
import { FiMail, FiMapPin, FiTwitter, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo/findmycoachlogo.jpg"
                alt="Find My Coach Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-display font-bold text-xl text-white">
                Find My Coach
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Connecting athletes with certified sports coaches in Kuala Lumpur.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/findmycoach.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/for-athletes" className="hover:text-white transition-colors">
                  For Athletes
                </Link>
              </li>
              <li>
                <Link href="/for-coaches" className="hover:text-white transition-colors">
                  For Coaches
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <FiMail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:findmycoach.contact@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  findmycoach.contact@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <FiMapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Kuala Lumpur, Malaysia
                </span>
              </li>
            </ul>

            {/* App Stores */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Download the app</p>
              <div className="flex space-x-2">
                <div className="w-32 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-xs">
                  App Store (Soon)
                </div>
                <div className="w-32 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-xs">
                  Play Store (Soon)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Find My Coach. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Find My Coach - Find Your Perfect Coach in KL',
  description: 'Connect with certified sports coaches in Kuala Lumpur. Book training sessions, chat with coaches, and grow your athletic skills with Find My Coach.',
  keywords: 'sports coach KL, tennis coach Malaysia, swimming lessons KL, badminton trainer, sports training app',
  authors: [{ name: 'Find My Coach' }],
  openGraph: {
    title: 'Find My Coach - Find Your Perfect Coach',
    description: 'Connect with certified sports coaches in Kuala Lumpur',
    type: 'website',
    locale: 'en_MY',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

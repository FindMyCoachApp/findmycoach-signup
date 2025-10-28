'use client'

import { useState, useEffect } from 'react'
import { FiClock } from 'react-icons/fi'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isLaunched, setIsLaunched] = useState(false)

  useEffect(() => {
    // Set launch date to December 6th, 2025
    const launchDate = new Date('December 6, 2025 00:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = launchDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setIsLaunched(true)
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (isLaunched) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <FiClock className="w-8 h-8 mr-3" />
          <h3 className="text-2xl font-bold">🎉 We're Live!</h3>
        </div>
        <p className="text-green-100 text-lg">
          Find My Coach is now available! Download the app and start your journey.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-8">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <FiClock className="w-8 h-8 mr-3" />
          <h3 className="text-2xl font-bold">App Launch Countdown</h3>
        </div>
        <p className="text-primary-100 text-lg">
          Get ready! Find My Coach launches on December 6th, 2025
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
          <div className="text-3xl md:text-4xl font-bold text-white mb-1">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <div className="text-primary-100 text-sm font-medium">
            {timeLeft.days === 1 ? 'Day' : 'Days'}
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
          <div className="text-3xl md:text-4xl font-bold text-white mb-1">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <div className="text-primary-100 text-sm font-medium">
            {timeLeft.hours === 1 ? 'Hour' : 'Hours'}
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
          <div className="text-3xl md:text-4xl font-bold text-white mb-1">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-primary-100 text-sm font-medium">
            {timeLeft.minutes === 1 ? 'Minute' : 'Minutes'}
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
          <div className="text-3xl md:text-4xl font-bold text-white mb-1">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <div className="text-primary-100 text-sm font-medium">
            {timeLeft.seconds === 1 ? 'Second' : 'Seconds'}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-primary-100 text-sm">
          Join the waitlist to be notified when we launch!
        </p>
      </div>
    </div>
  )
}

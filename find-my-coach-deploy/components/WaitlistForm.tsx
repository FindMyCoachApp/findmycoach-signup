'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { FiCheckCircle } from 'react-icons/fi'

const waitlistSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  role: z.enum(['athlete', 'coach'], {
    required_error: 'Please select your role',
  }),
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

export default function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  })

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true)
    
    try {
      // Here you would send data to your API
      // For now, we'll just simulate it
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Waitlist signup:', data)
      
      // You can integrate with your backend here
      // Example: await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify(data) })
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-md mx-auto">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mb-4">
            <FiCheckCircle className="w-8 h-8 text-accent-600 dark:text-accent-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            You're on the list!
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Thanks for joining us. We'll notify you as soon as the app launches.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            Sign up another person →
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Full Name
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            I am a...
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-primary-500 dark:hover:border-primary-500 transition-colors has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50 dark:has-[:checked]:bg-primary-900/20">
              <input
                {...register('role')}
                type="radio"
                value="athlete"
                className="sr-only"
              />
              <div className="flex-1 text-center">
                <div className="font-medium text-gray-900 dark:text-white">Athlete</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Looking for a coach</div>
              </div>
            </label>
            <label className="flex items-center p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-primary-500 dark:hover:border-primary-500 transition-colors has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50 dark:has-[:checked]:bg-primary-900/20">
              <input
                {...register('role')}
                type="radio"
                value="coach"
                className="sr-only"
              />
              <div className="flex-1 text-center">
                <div className="font-medium text-gray-900 dark:text-white">Coach</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Want to teach</div>
              </div>
            </label>
          </div>
          {errors.role && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.role.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors"
        >
          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        </button>
      </div>
    </form>
  )
}

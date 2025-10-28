'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const appPhotos = [
    '/images/App-Photo-1.png',
    '/images/App-Photo-2.png',
    '/images/App-Photo-3.png',
    '/images/App-Photo-4.png',
    '/images/App-Photo-5.png',
]

export default function AppPhotoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Auto-rotate every 3 seconds
    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % appPhotos.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? appPhotos.length - 1 : prevIndex - 1
        )
        setIsAutoPlaying(false) // Stop auto-play when user manually navigates
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % appPhotos.length)
        setIsAutoPlaying(false) // Stop auto-play when user manually navigates
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false) // Stop auto-play when user manually navigates
    }

    return (
        <div className="relative w-full max-w-sm mx-auto">
            {/* Main Image Container */}
            <div className="relative aspect-[9/16] bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl shadow-2xl overflow-hidden">
                <Image
                    src={appPhotos[currentIndex]}
                    alt={`Find My Coach App Preview ${currentIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                />

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Previous image"
                >
                    <FiChevronLeft className="w-5 h-5" />
                </button>

                <button
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Next image"
                >
                    <FiChevronRight className="w-5 h-5" />
                </button>

                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                    {currentIndex + 1} / {appPhotos.length}
                </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
                {appPhotos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex
                                ? 'bg-primary-600'
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>

            {/* Auto-play Toggle */}
            <div className="flex justify-center mt-2">
                <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
                >
                    {isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation
                </button>
            </div>
        </div>
    )
}

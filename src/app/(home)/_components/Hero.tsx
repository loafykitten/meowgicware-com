'use client'

import Image from 'next/image'
import { useState } from 'react'

const slides = [
    {
        mainText: 'WHAT ROLE WILL YOU PLAY?',
        subText:
            'CREATING WORLDS OF ADVENTURE, CONFLICT, AND COMPANIONSHIP THAT INSPIRE YOU TO BECOME THE HERO OF YOUR STORY',
        ctaText: 'BROWSE CURRENT OPENINGS',
    },
    {
        mainText: 'EXPLORE NEW WORLDS',
        subText:
            'JOURNEY THROUGH VAST LANDSCAPES AND UNCOVER ANCIENT SECRETS IN OUR LATEST ADVENTURES',
        ctaText: 'DISCOVER GAMES',
    },
    {
        mainText: 'JOIN THE COMMUNITY',
        subText: 'CONNECT WITH FELLOW PLAYERS AND SHARE YOUR EPIC STORIES',
        ctaText: 'JOIN OUR FORUMS',
    },
    {
        mainText: 'SHAPE YOUR LEGACY',
        subText:
            'YOUR CHOICES MATTER. FORGE YOUR OWN PATH AND LEAVE AN UNFORGETTABLE MARK',
        ctaText: 'LEARN MORE',
    },
]

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const handleSlideClick = (index: number) => {
        setCurrentSlide(index)
    }

    const currentSlideContent = slides[currentSlide]
    const imageUrl = `https://picsum.photos/seed/${currentSlide}/1920/1080` // Dynamic image based on slide index

    return (
        <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden min-h-[800px]">
            {/* Background Image using Next.js Image component */}
            <Image
                src={imageUrl}
                alt={`Hero background for slide ${currentSlide + 1}`}
                fill
                priority
                className="object-cover"
            />

            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 uppercase leading-tight">
                    {currentSlideContent.mainText}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                    {currentSlideContent.subText}
                </p>
                <div className="flex flex-col items-center">
                    <button className="border-2 border-zinc-300 bg-black/70 text-white py-3 px-8 text-lg uppercase font-semibold hover:bg-white hover:text-black transition-colors duration-300">
                        {currentSlideContent.ctaText}
                    </button>

                    {/* Slide indicators */}
                    <div className="mt-8 flex space-x-3">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full border border-white ${
                                    currentSlide === index
                                        ? 'bg-white'
                                        : 'bg-transparent'
                                }`}
                                onClick={() => handleSlideClick(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

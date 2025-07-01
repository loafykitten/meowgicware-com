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

    return (
        <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden min-h-[400px] md:min-h-[800px]">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        currentSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {/* Background Image using Next.js Image component */}
                    <Image
                        src={`https://picsum.photos/seed/${index}/1920/1080`}
                        alt={`Hero background for slide ${index + 1}`}
                        fill
                        priority={index === 0} // Only prioritize the first image
                        className="object-cover"
                    />

                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>

                    <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center h-full">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 uppercase leading-tight">
                            {slide.mainText}
                        </h1>
                        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
                            {slide.subText}
                        </p>
                        <button className="border-2 border-zinc-300 bg-black/70 text-white py-3 px-8 text-lg uppercase font-semibold hover:bg-white hover:text-black transition-colors duration-300">
                            {slide.ctaText}
                        </button>
                    </div>
                </div>
            ))}

            {/* Slide indicators - positioned outside the individual slide divs */}
            <div className="absolute bottom-8 z-20 flex space-x-3">
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
        </section>
    )
}

export default Hero

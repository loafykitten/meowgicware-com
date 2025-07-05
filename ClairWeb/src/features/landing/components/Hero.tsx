'use client'

import { HeroSlides } from '@/constants/hero-slides'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % HeroSlides.length)
        }, 5000)
    }

    const stopInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }
    }

    useEffect(() => {
        startInterval()
        return () => stopInterval()
    }, [])

    const handleSlideClick = (index: number) => {
        stopInterval()
        setCurrentSlide(index)
    }

    const handleCtaClick = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden min-h-[400px] md:min-h-[800px]">
            {HeroSlides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        currentSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {/* Background Image using Next.js Image component */}
                    <Image
                        src={slide.ctaImage}
                        alt={`Hero background for slide ${index + 1}`}
                        fill
                        priority={index === 0} // Only prioritize the first image
                        className="object-cover blur-[2px]"
                    />

                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-black opacity-70"></div>

                    <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center h-full">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 uppercase leading-tight text-shadow-md">
                            {slide.mainText}
                        </h1>
                        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-shadow-sm">
                            {slide.subText}
                        </p>
                        <button
                            className="border-1 border-zinc-400 bg-black/70 text-white py-3 px-8 text-lg uppercase font-semibold hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
                            onClick={() => handleCtaClick(slide.ctaUrl)}
                        >
                            {slide.ctaText}
                        </button>
                    </div>
                </div>
            ))}

            {/* Slide indicators - positioned outside the individual slide divs */}
            <div className="absolute bottom-8 z-20 flex space-x-3">
                {HeroSlides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-6 h-6 rounded-full border border-white ${
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

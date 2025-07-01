'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header className="bg-slate-900 text-white p-4 shadow-md">
            <nav className="container mx-auto flex items-center justify-between flex-wrap">
                {/* Desktop View */}
                <div className="hidden md:flex items-center flex-grow">
                    <Link
                        href="/"
                        className="text-2xl font-bold text-white mr-auto"
                    >
                        MeowgicWare
                    </Link>
                    <div className="flex space-x-4">
                        <Link href="/games" className="hover:text-gray-300">
                            Games
                        </Link>
                        <Link href="/about" className="hover:text-gray-300">
                            About
                        </Link>
                        <Link href="/merch" className="hover:text-gray-300">
                            Merch
                        </Link>
                        <Link href="/blog" className="hover:text-gray-300">
                            Blog
                        </Link>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="md:hidden flex items-center justify-between w-full">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                    <Link
                        href="/"
                        className="text-2xl font-bold text-white mx-auto"
                    >
                        MeowgicWare
                    </Link>
                    <div></div>{' '}
                    {/* Placeholder for right alignment in mobile */}
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-slate-800 mt-2 py-2 px-4 rounded-md">
                    <Link
                        href="/games"
                        className="block py-2 hover:bg-slate-700"
                    >
                        Games
                    </Link>
                    <Link
                        href="/about"
                        className="block py-2 hover:bg-slate-700"
                    >
                        About
                    </Link>
                    <Link
                        href="/merch"
                        className="block py-2 hover:bg-slate-700"
                    >
                        Merch
                    </Link>
                    <Link
                        href="/blog"
                        className="block py-2 hover:bg-slate-700"
                    >
                        Blog
                    </Link>
                </div>
            )}
        </header>
    )
}

export default Header

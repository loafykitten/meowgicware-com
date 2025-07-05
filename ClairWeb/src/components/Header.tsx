'use client'

import { NavLinks } from '@/constants/nav-links'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header className="bg-zinc-950 md:bg-zinc-950/90 text-white px-6 md:px-48 py-6 shadow-md fixed w-full z-50">
            <nav className="flex items-center justify-between flex-wrap">
                {/* Desktop View */}
                <div className="hidden md:flex items-center flex-grow">
                    <Link href="/" className="mr-auto">
                        <Image
                            src="/logo-text-white.png"
                            alt="MeowgicWare Logo"
                            height={40}
                            width={150}
                            className="h-10 w-auto"
                        />
                    </Link>
                    <div className="flex space-x-4">
                        {NavLinks.map((link, index) =>
                            link.local ? (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="hover:text-gray-300"
                                >
                                    {link.text}
                                </Link>
                            ) : (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="hover:text-gray-300"
                                >
                                    {link.text}
                                </a>
                            )
                        )}
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
                    <Link href="/" className="mx-auto">
                        <Image
                            src="/logo-text-white.png"
                            alt="MeowgicWare Logo"
                            height={40}
                            width={150}
                            className="h-10 w-auto"
                        />
                    </Link>
                    <div></div>{' '}
                    {/* Placeholder for right alignment in mobile */}
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-slate-800 mt-2 py-2 px-4 rounded-md">
                    {NavLinks.map((link, index) =>
                        link.local ?
                            (<Link key={index} href={link.href} className="block py-2 hover:bg-slate-700">{link.text}</Link>) :
                            (<a key={index} href={link.href} className="block py-2 hover:bg-slate-700">{link.text}</a>)
                    )}
                </div>
            )}
        </header>
    )
}

export default Header

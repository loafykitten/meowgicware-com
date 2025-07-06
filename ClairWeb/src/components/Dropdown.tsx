'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'

interface NavLink {
    text: string
    href?: string
    dropdown?: NavLink[]
    local: boolean
}

interface DropdownProps {
    link: NavLink
}

const Dropdown: React.FC<DropdownProps> = ({ link }) => {
    const [isOpen, setIsOpen] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setIsOpen(true)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false)
        }, 200) // 200ms delay
    }

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className="hover:text-gray-300 focus:outline-none">
                {link.text}
            </button>
            {isOpen && link.dropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-zinc-900 rounded-md shadow-lg z-10">
                    {link.dropdown.map((subLink, subIndex) =>
                        subLink.local ? (
                            <Link
                                key={subIndex}
                                href={subLink.href || '#'}
                                className="block px-4 py-2 text-sm text-white hover:bg-zinc-700"
                            >
                                {subLink.text}
                            </Link>
                        ) : (
                            <a
                                key={subIndex}
                                href={subLink.href || '#'}
                                className="block px-4 py-2 text-sm text-white hover:bg-zinc-700"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {subLink.text}
                            </a>
                        )
                    )}
                </div>
            )}
        </div>
    )
}

export default Dropdown

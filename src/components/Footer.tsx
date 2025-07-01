import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="bg-zinc-900 text-gray-400 py-12 px-6 md:px-48 mt-auto flex-grow flex flex-col justify-start">
            <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-baseline">
                {/* Left Section: Company Logo and Legal Links */}
                <div className="flex flex-col items-start space-y-4">
                    {/* MeowgicWare Logo */}
                    <Image
                        src="/logo-text.png"
                        alt="MeowgicWare Logo"
                        height={40}
                        width={150}
                        className="h-10 w-auto"
                    />

                    {/* Legal Links */}
                    <div className="flex flex-wrap text-sm space-x-4">
                        <Link href="#" className="hover:underline">
                            Legal & Privacy
                        </Link>
                        <Link href="#" className="hover:underline">
                            User Agreement
                        </Link>
                        <Link href="#" className="hover:underline">
                            Privacy & Cookie Policy
                        </Link>
                    </div>

                    {/* Copyright and Privacy Choices */}
                    <div className="text-xs mt-2">
                        <p>©2025 MeowgicWare LLC.</p>
                        <p className="flex items-center mt-1">
                            <span className="mr-1">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20Z"
                                        fill="#4CAF50"
                                    />
                                    <path
                                        d="M16.5303 8.46967C16.8232 8.76256 16.8232 9.23744 16.5303 9.53033L10.5303 15.5303C10.2374 15.8232 9.76256 15.8232 9.46967 15.5303L7.46967 13.5303C7.17678 13.2374 7.17678 12.7626 7.46967 12.4697C7.76256 12.1768 8.23744 12.1768 8.53033 12.4697L10 13.9393L15.4697 8.46967C15.7626 8.17678 16.2374 8.17678 16.5303 8.46967Z"
                                        fill="#4CAF50"
                                    />
                                </svg>
                            </span>
                            Your Privacy Choices
                        </p>
                    </div>
                </div>

                {/* Right Section: Social and Store Links */}
                <div className="mb-12 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
                    {/* Social Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4">SOCIAL</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="hover:underline">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">
                                    Threads
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">
                                    Bluesky
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">
                                    YouTube
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Store Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4">STORE</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="hover:underline">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">
                                    Merchandise
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline">
                                    Games
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

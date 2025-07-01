import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'MeowgicWare - Dreamy Lofi | Enchating Games | Meaningful Stories',
    description:
        'MeowgicWare, founded by Ember (@loafykitten), blends software engineering with imaginative game design and heartfelt interactive experiences. Explore immersive digital projects and meaningful stories.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} antialiased flex flex-col min-h-screen`}
            >
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}

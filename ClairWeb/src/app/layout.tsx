import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/global.css'
import type { Metadata } from 'next'
import { DM_Sans, Roboto, Zain } from 'next/font/google'

import ConsentManagement from '@/features/consent/components/consent-management'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
config.autoAddCss = false
library.add(fab)
library.add(fas)

const dmSans = DM_Sans({
    variable: '--font-dm-sans',
    subsets: ['latin'],
})

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin'],
})

const zain = Zain({
    weight: ['400', '800'],
    variable: '--font-zain',
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://meowgicware.com'),
    title: 'MeowgicWare - Enchanting Games | Meaningful Stories | Kind Worlds',
    description:
        'MeowgicWare, founded by Ember (loafykitten), builds thoughtful games and welcoming digital experiences with heart.',
    openGraph: {
        title: 'MeowgicWare - Enchanting Games | Meaningful Stories | Kind Worlds',
        description:
            'MeowgicWare builds thoughtful games and welcoming digital experiences with heart.',
        url: 'https://meowgicware.com',
        siteName: 'MeowgicWare',
        images: [
            {
                url: '/images/logo-text.png',
                width: 1200,
                height: 630,
                alt: 'MeowgicWare',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'MeowgicWare',
        description: 'Enchanting Games, Meaningful Stories, Kind Worlds.',
        images: ['/images/logo-text.png'],
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${dmSans.variable} ${roboto.variable} ${zain.variable} antialiased flex flex-col min-h-screen`}
            >
                <Header />
                <main>{children}</main>
                <Footer />
                <ConsentManagement />
            </body>
        </html>
    )
}

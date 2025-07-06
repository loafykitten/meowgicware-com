import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/global.css'
import type { Metadata } from 'next'
import { DM_Sans, Roboto, Zain } from 'next/font/google'

import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
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
    display: 'swap'
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
                className={`${dmSans.variable} ${roboto.variable} ${zain.variable} antialiased flex flex-col min-h-screen`}
            >
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}

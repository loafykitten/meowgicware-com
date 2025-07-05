import { ProjectLogos } from '@/constants/project-logos'
import Image from 'next/image'

const GameLogos = () => {
    return (
        <section className="bg-zinc-300 py-16">
            <div className="container mx-auto flex flex-col items-center space-y-8 md:flex-row md:justify-around md:space-y-0">
                {ProjectLogos.map((logo, index) => (
                    <a key={index} href={logo.href} target="_blank">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={200}
                            height={200}
                            className="h-auto max-w-full"
                        />
                    </a>
                ))}
            </div>
        </section>
    )
}

export default GameLogos

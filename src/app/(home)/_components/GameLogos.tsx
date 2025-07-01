import Image from 'next/image'

const GameLogos = () => {
    return (
        <section className="bg-zinc-700 py-16">
            <div className="container mx-auto flex justify-around items-center">
                {/* Placeholder for Dragon Age logo */}
                <Image
                    src="/next.svg" // Using next.svg as a placeholder
                    alt="Dragon Age: The Veilguard"
                    width={150}
                    height={150}
                    className="h-auto max-w-full"
                />
                {/* Placeholder for Mass Effect logo */}
                <Image
                    src="/next.svg" // Using next.svg as a placeholder
                    alt="Mass Effect: Legendary Edition"
                    width={150}
                    height={150}
                    className="h-auto max-w-full"
                />
                {/* Placeholder for Anthem logo */}
                <Image
                    src="/next.svg" // Using next.svg as a placeholder
                    alt="Anthem"
                    width={150}
                    height={150}
                    className="h-auto max-w-full"
                />
            </div>
        </section>
    )
}

export default GameLogos

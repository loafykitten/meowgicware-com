// TODO: Clean up by adding proper typing

interface HeroSlide {
    mainText: string;
    subText: string;
    ctaText: string;
    ctaUrl: string;
    ctaImage: string; // The '?' makes it optional, allowing for slides without an image
}

export const HeroSlides: HeroSlide[] = [
    {
        mainText: 'FIND YOUR HOME',
        subText:
            'THROUGH EMOTIONALLY CRAFTED GAMES, SHARED COMMUNITY, AND A WORLD OF MAGIC',
                ctaImage: '/images/hero-1.png',
    },
    {
        mainText: 'MEANINGFUL STORIES',
        subText:
            'AN ATTEMPT AT CAPTURING SOMETHING HOPEFUL THROUGH THE WORLDS WE BUILD',
        ctaText: 'DISCOVER MUSIC',
        ctaUrl: 'https://loafykitten.cafe',
        ctaImage: '/images/hero-2.png',
    },
    {
        mainText: 'CRAFT A SAFE PLACE',
        subText: 'TWO (OR TWENTY) MEOWGICIANS ARE STRONGER THAN JUST ONE',
        ctaText: 'VIBE ON TWITCH',
        ctaUrl: 'https://twitch.tv/loafykitten',
        ctaImage: '/images/hero-3.png',
    },
    {
        mainText: 'SHAPE OUR LEGACY',
        subText: 'EMBRACE THE ART AND VISIONS YOU WANT TO SEE IN YOUR WORLD',
        ctaText: 'LEARN MORE',
        ctaUrl: 'https://meowgicware.com',
        ctaImage: '/images/hero-4.png',
    },
]

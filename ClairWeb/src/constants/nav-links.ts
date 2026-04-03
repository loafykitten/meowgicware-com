interface NavLink {
    text: string
    href?: string
    dropdown?: NavLink[]
    local: boolean
}

export const NavLinks: NavLink[] = [
    {
        text: 'About',
        href: '/about',
        local: true,
    },
    {
        text: 'News',
        href: '/news',
        local: true,
    },
    {
        text: 'About',
        href: '/about',
        local: true,
    },
    {
        text: 'Be a Supporter',
        local: true,
        dropdown: [
            {
                text: 'Help Fund MeowgicWare!',
                href: 'https://ko-fi.com/loafykitten',
                local: false,
            },
            {
                text: 'Become a Patron!',
                href: 'https://patreon.com/loafykitten',
                local: false,
            },
        ],
    },
]

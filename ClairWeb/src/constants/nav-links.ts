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
        text: 'Support the Work',
        local: true,
        dropdown: [
            {
                text: 'Learn More',
                href: '/about',
                local: true,
            },
            {
                text: 'Read Our Story',
                href: '/about',
                local: true,
            },
        ],
    },
]

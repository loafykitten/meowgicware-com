interface NavLink {
    text: string
    href?: string
    dropdown?: NavLink[]
    local: boolean
}

export const NavLinks: NavLink[] = [
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
                text: 'Ko-fi',
                href: 'https://ko-fi.com/loafykitten',
                local: false,
            },
            {
                text: 'Patreon',
                href: 'https://patreon.com/c/loafykitten',
                local: false,
            },
        ],
    },
]

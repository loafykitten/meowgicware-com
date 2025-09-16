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
        text: 'Be A Supporter',
        local: true,
        dropdown: [
            {
                text: 'Help Fund Me!',
                href: '//ko-fi.com/loafykitten',
                local: false,
            },
            {
                text: 'Become a Patron!',
                href: '//patreon.com/loafykitten',
                local: false,
            },
        ],
    },
    {
        text: '【 PROJECT: loafykitten 】',
        href: '//loafykitten.cafe',
        local: false,
    },
]

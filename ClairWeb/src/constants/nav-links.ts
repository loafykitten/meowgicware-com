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
        local: true
    },
    {
        text: 'News',
        href: '/news',
        local: true
    },
    {
        text: 'About',
        href: '/about',
        local: true
    },
    {
        text: 'Support Us',
        local: true,
        dropdown: [
            {
                text: 'Help Fund Us!',
                href: '//ko-fi.com/meowgicware',
                local: false
            },
            {
                text: 'Become a Patron!',
                href: '//patreon.com/meowgicware',
                local: false
            },
        ]
    },
    {
        text: '【 PROJECT: loafykitten 】',
        href: '//loafykitten.cafe',
        local: false
    },
]
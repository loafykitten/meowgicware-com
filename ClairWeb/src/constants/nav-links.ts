interface NavLink {
    text: string
    href: string
    local: boolean
}

export const NavLinks: NavLink[] = [
    {
        text: 'Merch',
        href: '#',
        local: true
    },
    {
        text: 'Blog',
        href: '#',
        local: true
    },
    {
        text: '【 PROJECT: loafykitten 】',
        href: '//loafykitten.cafe',
        local: false
    },
]
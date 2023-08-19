
export interface INavItem {
  name: string
  href: string
  mobileOnly: boolean
}

export const navs: INavItem[] = [
  {
    name: "About",
    href: "/",
    mobileOnly: true,
  },
  {
    name: "Projects",
    href: "/projects",
    mobileOnly: false
  },
  {
    name: "Contact",
    href: "/contact",
    mobileOnly: false
  },
]
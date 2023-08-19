import Image from "next/image"
import Hamburger from "./hamburger"
import { ThemeToggleButton } from "./theme-toggle-button"
import { navs } from "@/constants/nav.config"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { appConfig } from "@/constants/app.config"

const Navbar = () => {
  return (
    <header className="fixed top-0 flex justify-center w-full backdrop-blur-2xl ">
      <div className="flex items-center w-full max-w-3xl px-4 py-1 space-x-10 h-14">
        <Link href="/" className="group flex items-center cursor-pointer">
          <Image
            src="/logo.png"
            alt="Logo"
            className="relative w-10 h-10 rounded-sm group-hover:scale-105 group-hover:rotate-6 transition-all"
            width={100}
            height={100}
          />
          <h1 className="ml-1 sm:text-xl text-md font-bold text-gray-700 dark:text-gray-200 font-main">
            {appConfig.name}
          </h1>
        </Link>
        <nav className="hidden ml-auto md:block font-body">
          <ul className="flex items-center space-x-4">
            {
              navs.filter(nav => !nav.mobileOnly).map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="text-gray-700 hover:underline hover:text-gray-950 dark:text-gray-200 dark:hover:text-white">
                    {item.name}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
        <div className="flex justify-end space-x-2 grow">
          <Link href={appConfig.socials.github} target="_blank">
            <Button variant="outline" size="icon">
              <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Github icon</span>
            </Button>
          </Link>
          <ThemeToggleButton />
          <div className="md:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
    </header >
  )
}
export default Navbar
"use client"

import { HamburgerMenuIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { navs } from "@/constants/nav.config"
import Link from "next/link"
import { appConfig } from "@/constants/app.config"
import { Icons } from "./Icons"

const Hamburger = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="md:hidden" align="end">
        {
          navs.map((item, index) => (
            <Link key={index} href={item.href}>
              <DropdownMenuItem className="cursor-pointer" >
                {item.name}
              </DropdownMenuItem>
            </Link>
          ))
        }
        <Link className="sm:hidden" href={appConfig.socials.github} target="_blank" >
          <DropdownMenuItem className="cursor-pointer justify-between flex flex-row" >
            <span className="underline">Github</span>
            <Icons.share className="h-4 w-4" />
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default Hamburger
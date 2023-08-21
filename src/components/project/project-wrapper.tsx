"ues client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import React from "react"


type ProjectWrapperProps = {
  className?: string
  background: string
  logo: React.ReactNode
  title: string
  description: string
  href: string
}

const ProjectWrapper = ({
  className,
  background,
  logo,
  title,
  description,
  href
}: ProjectWrapperProps) => {
  return (
    <div className={cn("flex flex-col space-y-2", className)}>
      <Link href={href} className="flex justify-center rounded-md group ">
        <Image alt="sss" src={background}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto border rounded-md"
        />
        {logo}
      </Link>
      <div className="flex flex-col space-y-1">
        <div className="flex">
          <Link href={href} className="font-bold text-center  sm:text-left hover:underline">
            {title}
          </Link>
        </div>
        <p className="text-sm text-justify">
          {description}
        </p>
      </div>
    </div>

  )
}
export default ProjectWrapper
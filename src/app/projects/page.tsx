"use client"
import ProjectWrapper from "@/components/project/project-wrapper"
import { Avatar } from "@/components/ui/avatar"
import PageWrapper from "@/components/ui/page-wrapper"
import { Skeleton } from "@/components/ui/skeleton"
import { AvatarFallback } from "@radix-ui/react-avatar"
import Image from "next/image"
import Link from "next/link"

const Projects = () => {
  return (
    <PageWrapper className="flex flex-col mt-8">
      <h1 className="h-8 mb-8 text-xl font-bold text-gray-700 border-b border-gray-400 dark:border-gray-500 dark:text-gray-200">
        Projects
      </h1>
      <div className="flex flex-col space-y-10">
        <ProjectWrapper
          title="STC channels"
          description="Created a web-based Trouble Ticketing system, CRM, and call management system through design and development. "
          href="/projects/stc-channels"
          background="/project/stc-channels/main.svg"
          logo={<div className="absolute flex items-center justify-center h-12 mt-1 transition-all w-28 md:mt-0 md:h-16 md:w-36 group-hover:scale-110">
            <Image alt="sss" src="/logo/stc_channels_filled.svg"
              width="0"
              height="0"
              sizes="10vw"
              className="w-full h-auto "
            />
          </div>}
        />
        <ProjectWrapper
          title="Enset School ERP"
          description="Design and development of a software application based on a microservices architecture to manage my school&apos;s deliberations"
          href="/projects/enset-erp"
          background="/project/enset-erp/main.svg"
          logo={<div className="absolute flex items-center justify-center w-32 h-12 transition-all md:w-40 md:h-16 group-hover:scale-110">
            <Image alt="sss" src="/logo/enset.svg"
              width="0"
              height="0"
              sizes="10vw"
              className="w-full h-auto "
            />
          </div>}
        />
        <ProjectWrapper
          title="Intern Management System"
          description="Successfully implemented an absence management system that enabled
          the HR department to keep track of employee vacations and certification
          requests, etc."
          href="/projects/intern-management"
          background="/project/intern-management/main.svg"
          logo={<div className="absolute flex items-center justify-center w-24 h-12 transition-all md:w-32 md:h-16 group-hover:scale-110">
            <Image alt="sss" src="/logo/moaj.svg"
              width="0"
              height="0"
              sizes="10vw"
              className="w-full h-auto "
            />
          </div>}
        />

      </div>


    </PageWrapper>
  )
}
export default Projects
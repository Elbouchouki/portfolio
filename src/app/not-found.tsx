"use client"

import { Button } from "@/components/ui/button"
import { AlertTriangleIcon, HomeIcon, MoveLeftIcon } from "lucide-react"
import { useRouter } from "next/navigation"

const NotFound = () => {

  const router = useRouter()

  return (
    <div className="container flex items-center px-6 py-12 mx-auto">
      <div className="flex flex-col items-center max-w-sm mx-auto text-center">
        <p className="p-3 text-sm font-medium  rounded-full bg-blue-50 dark:bg-gray-800">
          <AlertTriangleIcon />
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">The page you are looking for doesn&apos;t exist.</p>
        <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 justify-center">
          <Button variant="secondary" onClick={() => router.back()}>
            <MoveLeftIcon className="mr-2 w-4 h-4" />
            Go back
          </Button>
          <Button onClick={() => router.replace("/")} >
            <HomeIcon className="mr-2 w-4 h-4" />
            Home
          </Button>
        </div>
      </div>
    </div>
  )
}
export default NotFound
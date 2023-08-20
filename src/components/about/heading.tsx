import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { appConfig } from "@/constants/app.config"
import Link from "next/link"

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import DownloadButton from "../ui/download-button"
import { cn } from "@/lib/utils"

interface HeadingSectionProps {
  className?: string
}

const Heading = ({ className }: HeadingSectionProps) => {
  return (
    <div className={cn("flex flex-col my-3 sm:items-center sm:flex-row sm:space-x-4", className)}>
      <div className="flex justify-center order-last mt-4 sm:mt-0 sm:order-1">
        <Dialog>
          <DialogTrigger>
            <Avatar className="transition-all delay-100 rotate-0 rounded-lg w-36 h-36 hover:scale-105 sm:rotate-2 hover:-rotate-2">
              <AvatarImage src={appConfig.picture} />
              <AvatarFallback className="rounded-lg">
                <Skeleton className="w-full h-full" />
              </AvatarFallback>
            </Avatar>
          </DialogTrigger>
          <DialogContent>
            <div className="flex items-end justify-end w-full h-full">
              <Avatar className="w-full h-full rounded-lg">
                <AvatarImage src={appConfig.picture} />
                <AvatarFallback className="rounded-lg">
                  <Skeleton className="w-full h-full" />
                </AvatarFallback>
              </Avatar>
              <DownloadButton
                size="sm"
                className="absolute m-2"
                defaultText="Download picture"
                downloadedText="Picture downloaded"
                filename="elbouchouki_picture.png"
                filepath="/img/elbouchouki.png"
                redownloadText="Redownload picture"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="order-2">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-200 font-body">
          {appConfig.name}
        </h1>
        <h3 className="text-xl tracking-tight whitespace-pre-wrap font-body">
          {appConfig.currentRole.name}
        </h3>
        {appConfig.currentRole.showLocation &&
          <span>{` @ `}<Link target="_blank" className="font-semibold text-blue-600 dark:text-blue-300 hover:underline" href={appConfig.currentRole.link}>{appConfig.currentRole.location}</Link></span>
        }
      </div>
    </div>
  )
}
export default Heading
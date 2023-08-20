import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { LucideFacebook } from "lucide-react"
import { appConfig } from "@/constants/app.config"

const SocialIcons = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="flex-col justify-center hidden space-y-2 sm:flex sm:space-y-0 sm:space-x-4 sm:flex-row">
        <Link href={appConfig.socials.github} target="_blank">
          <Button variant="ghost">
            <GitHubLogoIcon className="w-4 h-4 mr-2" />
            Github
          </Button>
        </Link>
        <Link href={appConfig.socials.facebook} target="_blank">
          <Button variant="ghost">
            <LucideFacebook className="w-4 h-4 mr-2" />
            Facebook
          </Button>
        </Link>
        <Link href={appConfig.socials.linkedin} target="_blank">
          <Button variant="ghost">
            <LinkedInLogoIcon className="w-4 h-4 mr-2" />
            Linkedin
          </Button>
        </Link>
      </div>
      <div className="flex flex-row justify-center space-x-4 sm:hidden">
        <Link href={appConfig.socials.github} target="_blank">
          <Button variant="ghost" size="icon"  >
            <GitHubLogoIcon className="w-4 h-4" />
          </Button>
        </Link>
        <Link href={appConfig.socials.facebook} target="_blank">
          <Button variant="ghost" size="icon" >
            <LucideFacebook className="w-4 h-4" />
          </Button>
        </Link>
        <Link href={appConfig.socials.linkedin} target="_blank">
          <Button variant="ghost" size="icon" >
            <LinkedInLogoIcon className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
export default SocialIcons
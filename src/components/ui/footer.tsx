import { appConfig } from "@/constants/app.config"

const Footer = () => {
  return (
    <footer className="w-full my-6 text-sm text-center text-gray-700 dark:text-gray-400">
      {`© ${new Date().getFullYear()} ${appConfig.name}. All Rights Reserved.`}
    </footer>
  )
}
export default Footer
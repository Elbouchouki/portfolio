import { HeadingSection, Heading } from "@/components/about";
import { appConfig } from "@/constants/app.config";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="mb-4">
        <Heading />
      </div>
      <div className="flex flex-col space-y-8">
        <HeadingSection title="Summary">
          <p className="text-justify text-gray-700 dark:text-gray-200 indent-8">
            I am a software engineering student at <Link
              className="font-semibold text-blue-600 dark:text-blue-300 hover:underline"
              href="https://www.enset-media.ac.ma/"
              target="_blank">
              ENSET Mohammedia
            </Link>, I am passionate about web development and I am always looking to learn new technologies and improve my skills. I am a currently a liferay developer at <Link
              className="font-semibold text-blue-600 dark:text-blue-300 hover:underline"
              href="https://www.gwenod.ma/"
              target="_blank">
              GWENOD
            </Link>.
          </p>
        </HeadingSection>
        <HeadingSection title="Bio">
          <div className="flex flex-col">
            <div></div>
          </div>
        </HeadingSection>

      </div>
    </main>
  )
}

import { HeadingSection, Heading } from "@/components/about";
import DownloadResumeButton from "@/components/ui/download-resume-button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Home | Elbouchouki Ahmed',
  description: 'Elbouchouki Ahmed\'s homepage',
  icons: [
    {
      url: '/favicon.ico',
      rel: 'icon',
    },
    {
      url: '/favicon.ico',
      rel: 'shortcut icon',
    },
    {
      url: '/favicon.ico',
      rel: 'apple-touch-icon',
    },
  ],
}



interface BioItemProps {
  date: string;
  children?: React.ReactNode;
}

const BioItem = ({ date, children }: BioItemProps) => {
  return <div className="flex flex-row space-x-5">
    <span className="font-semibold">{date}</span>
    <span className="text-justify">{children}</span>
  </div>
}

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
          <div className="flex flex-col space-y-1">
            <BioItem date="2001" >
              Born in Marrakech, Morocco
            </BioItem>
            <BioItem date="2021" >
              Completed Advanced Technician Certificate in Information Systems Development Completed Advanced Technician Certificate in Information Systems Development at <Link
                className="font-semibold text-blue-600 dark:text-blue-300 hover:underline"
                href="https://btshassan2.com/"
                target="_blank">
                Hassan 2 Qualifying High School
              </Link>
            </BioItem>
            <BioItem date="2024" >
              Will graduate from <Link
                className="font-semibold text-blue-600 dark:text-blue-300 hover:underline"
                href="https://www.enset-media.ac.ma/"
                target="_blank">
                ENSET Mohammedia
              </Link> with a Bachelor&apos;s degree in Software Engineering and Distributed Systems
            </BioItem>
            <div className="flex justify-center py-4">
              <DownloadResumeButton />
            </div>
          </div>

        </HeadingSection>

      </div>
    </main>
  )
}

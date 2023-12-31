import { HeadingSection, Heading } from "@/components/about";
import GwenodIcon from "@/components/logo/gwenod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BioItem from "@/components/ui/bio-item";
import DownloadButton from "@/components/ui/download-button";
import PageWrapper from "@/components/ui/page-wrapper";
import { Skeleton } from "@/components/ui/skeleton";
import SocialIcons from "@/components/ui/social-icons";
import WorkItem from "@/components/ui/work-item";
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

export default function Home() {
  return (
    <PageWrapper>
      <Heading className="mb-4" />
      <div className="flex flex-col space-y-8">
        <HeadingSection title="Summary" className="text-justify text-gray-700 dark:text-gray-200 indent-8">
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
        </HeadingSection>
        <HeadingSection title="Bio" className="flex flex-col space-y-1">
          <BioItem date="2001" >
            Born in Marrakech (مراكش), Morocco (المغرب)
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
          <div className="flex justify-center pt-4">
            <DownloadButton
              defaultText="Download full resume"
              downloadedText="Resume downloaded"
              filename="elbouchouki-resume.pdf"
              filepath="/resume/resume_eng.pdf"
              redownloadText="Redownload resume"
            />
          </div>
        </HeadingSection>
        <HeadingSection title="Work" className="flex flex-col my-2 space-y-4">
          <WorkItem
            company="GWENOD"
            jobTitle="Liferay Developer"
            from="July 2021"
            to="Present"
            badge="Internship"
            href="https://gwenod.ma/"
            icon={
              <Avatar className="w-16 h-16 p-2 transition-all delay-100 rounded-lg hover:p-3 ">
                <GwenodIcon className="w-full h-full aspect-square" />
                <AvatarFallback className="rounded-lg">
                  <Skeleton className="w-full h-full" />
                </AvatarFallback>
              </Avatar>
            }
          />
          <WorkItem
            company="MOAJ"
            jobTitle="Full-stack Developer"
            from="July 2022"
            href="https://moaj.info/"
            badge="Internship"
            icon={
              <Avatar className="w-16 h-16 p-2 transition-all delay-100 rounded-lg hover:p-3 ">
                <AvatarImage src="/work/moaj.svg" />
                <AvatarFallback className="rounded-lg">
                  <Skeleton className="w-full h-full" />
                </AvatarFallback>
              </Avatar>
            }
          />
          <WorkItem
            company="Flouka"
            jobTitle="Mobile Developer"
            from="June 2021"
            badge="Internship"
            href="https://moaj.info/"
            icon={
              <Avatar className="w-16 h-16 p-2 transition-all delay-100 rounded-lg hover:p-3 ">
                <AvatarImage src="/work/flouka.svg" />
                <AvatarFallback className="rounded-lg">
                  <Skeleton className="w-full h-full" />
                </AvatarFallback>
              </Avatar>
            }
          />
        </HeadingSection>
        <HeadingSection title="I ♥" className="text-justify text-gray-700 dark:text-gray-200 indent-8">
          Judo, Video Games, Web Development, Cooking, TV Shows & Movies.
        </HeadingSection>
        <HeadingSection title="Socials">
          <SocialIcons />
        </HeadingSection>
      </div>
    </PageWrapper>
  )
}

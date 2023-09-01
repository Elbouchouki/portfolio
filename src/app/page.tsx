import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BioItem from "@/components/home/bio-item";
import DownloadButton from "@/components/download-button";
import PageWrapper from "@/components/page-wrapper";
import { Skeleton } from "@/components/ui/skeleton";
import SocialIcons from "@/components/social-icons";
import WorkItem from "@/components/home/work-item";
import { Metadata } from "next";
import Link from "next/link";
import HeadingSection from "@/components/home/heading-section";
import Heading from "@/components/home/heading";
import { Icons } from "@/components/Icons";

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
            className="font-semibold text-link hover:underline"
            href="https://www.enset-media.ac.ma/"
            target="_blank">
            ENSET Mohammedia
          </Link>, I am passionate about web development and I am always looking to learn new technologies and improve my skills.
        </HeadingSection>
        <HeadingSection title="Bio" className="flex flex-col space-y-1">
          <BioItem date="2001" >
            Born in Marrakech (مراكش), Morocco (المغرب)
          </BioItem>
          <BioItem date="2021" >
            Completed Advanced Technician Certificate in Information Systems Development Completed Advanced Technician Certificate in Information Systems Development at <Link
              className="font-semibold text-link hover:underline"
              href="https://btshassan2.com/"
              target="_blank">
              Hassan 2 Qualifying High School
            </Link>
          </BioItem>
          <BioItem date="2024" >
            Will graduate from <Link
              className="font-semibold text-link hover:underline"
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
            from="Jul 2023"
            to="Aug 2023"
            badge="Internship"
            href="https://gwenod.ma/"
            icon={
              <Avatar className="w-16 h-16 p-2 transition-all delay-100 rounded-lg hover:p-3 ">
                <Icons.gwenod className="w-full h-full aspect-square" />
                <AvatarFallback className="rounded-lg">
                  <Skeleton className="w-full h-full" />
                </AvatarFallback>
              </Avatar>
            }
          />
          <WorkItem
            company="MOAJ"
            jobTitle="Full-stack Developer"
            from="Jul 2022"
            href="https://moaj.info/"
            badge="Internship"
            icon={
              <Avatar className="w-16 h-16 p-2 transition-all delay-100 rounded-lg hover:p-3 ">
                <AvatarImage src="/logo/moaj.svg" />
                <AvatarFallback className="rounded-lg">
                  <Skeleton className="w-full h-full" />
                </AvatarFallback>
              </Avatar>
            }
          />
          <WorkItem
            company="Flouka"
            jobTitle="Mobile Developer"
            from="Jun 2021"
            badge="Internship"
            href="https://moaj.info/"
            icon={
              <Avatar className="w-16 h-16 p-2 transition-all delay-100 rounded-lg hover:p-3 ">
                <AvatarImage src="/logo/flouka.svg" />
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

"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2Icon, DownloadIcon } from "lucide-react"
import { useEffect, useState } from "react";
import useDownloader from "react-use-downloader";

const DownloadResumeButton = () => {

  const { download } = useDownloader();

  const [downloaded, setDownloaded] = useState(false)

  const [downloadCount, setDownloadCount] = useState(0)

  const downloadResume = () => {
    if (downloaded) return
    download("/resume/resume_eng.pdf", "elbouchouki-resume.pdf").then(() => {
      setDownloaded(true)
      setDownloadCount(downloadCount + 1)
    })
  }

  useEffect(() => {
    if (downloaded) {
      setTimeout(() => {
        setDownloaded(false)
      }, 5000);
    }
  }, [downloaded]);

  return (
    <Button disabled={downloaded} onClick={() => downloadResume()}>
      {downloaded ?
        <>
          <CheckCircle2Icon className="w-4 h-4 mr-2 text-green-500" />
          Resume downloaded
        </> :
        <>
          <DownloadIcon className="w-4 h-4 mr-2 " />
          {
            downloadCount === 0 ?
              "Download full resume" :
              "Redownload resume"
          }
        </>
      }
    </Button>
  )
}
export default DownloadResumeButton
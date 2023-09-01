"use client"

import { Button, ButtonProps } from "@/components/ui/button"
import { CheckCircle2Icon, DownloadIcon } from "lucide-react"
import { useEffect, useState } from "react";
import useDownloader from "react-use-downloader";


interface DownloadButtonProps extends ButtonProps {
  filepath: string;
  filename: string;
  defaultText: string;
  downloadedText: string;
  redownloadText: string;

}

const DownloadButton = ({
  filepath,
  filename,
  defaultText,
  downloadedText,
  redownloadText,
  className, variant, size,
  ...props
}: DownloadButtonProps) => {

  const { download } = useDownloader();

  const [downloaded, setDownloaded] = useState(false)

  const [downloadCount, setDownloadCount] = useState(0)

  const handleDownload = () => {
    if (downloaded) return
    download(filepath, filename).then(() => {
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
    <Button
      variant={variant}
      size={size}
      className={className}
      disabled={downloaded} onClick={() => handleDownload()}
      {...props}
    >
      {downloaded ?
        <>
          <CheckCircle2Icon className="w-4 h-4 mr-2 text-green-500" />
          {downloadedText}
        </> :
        <>
          <DownloadIcon className="w-4 h-4 mr-2 " />
          {
            downloadCount === 0 ? defaultText : redownloadText
          }
        </>
      }
    </Button>
  )
}
export default DownloadButton
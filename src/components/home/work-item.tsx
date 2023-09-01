import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";



interface WorkItemProps {
  company: string
  jobTitle: string
  from: string
  to?: string
  icon: React.ReactNode,
  href: string,
  badge?: string
}

const WorkItem = ({
  company,
  jobTitle,
  from,
  to,
  icon,
  href,
  badge
}: WorkItemProps) => {
  return (
    <div className="flex w-full gap-3 ">
      <Link href={href} target="_blank">
        <Card >
          {icon}
        </Card>
      </Link>
      <div className="flex flex-col justify-center grow gap-1">
        <div className="flex items-center justify-between  ">
          <Link href={href} target="_blank">
            <h3 className="font-bold hover:underline">{company}</h3>
          </Link>
          <h5 className="flex items-center justify-end text-sm text-muted-foreground grow">{from}{to !== null && to !== undefined ? <Minus className="w-4 h-4 mx-1" /> : null} {to}</h5>
        </div>
        <div className="flex gap-2">
          <h4 className="text-sm">{jobTitle}</h4>
          {badge !== null && badge !== undefined ? <Badge variant="outline" className="rounded-sm text-[0.6rem] px-2" >
            {badge}
          </Badge> : null
          }
        </div>
      </div>
    </div>
  )
}
export default WorkItem
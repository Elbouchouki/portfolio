
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

export default BioItem
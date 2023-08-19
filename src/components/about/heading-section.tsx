import React from 'react';

interface HeadingSectionProps {
  title: string;
  children?: React.ReactNode;
}

const HeadingSection = ({
  title,
  children,
}: HeadingSectionProps) => {
  return (
    <div className="flex flex-col" >
      <div className="flex mb-4">
        <h1 className="text-lg font-semibold text-gray-700 border-b-4 border-gray-700 dark:border-gray-200 dark:text-gray-200">
          {title}
        </h1>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
export default HeadingSection
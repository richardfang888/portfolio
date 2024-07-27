import React from 'react';
import classNames from 'classnames';

interface MarkdownHeaderProps {
  headingLevel: number;
  className?: string;
  text: string;
}

const MarkdownHeader: React.FC<MarkdownHeaderProps> = ({ headingLevel, className, text }) => {
  const Tag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  const defaultClasses = "text-purple";
  const mergedClasses = classNames(defaultClasses, className);

  return (
    <Tag className={mergedClasses}>
      {`${"#".repeat(headingLevel)} ${text}`}
    </Tag>
  );
}

export default MarkdownHeader;

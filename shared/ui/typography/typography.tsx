import { cn } from '@/shared/lib';
import React, { type PropsWithChildren } from 'react';

export const Typography = ({
  children,
  className,
  ...rest
}: PropsWithChildren<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
>) => {
  return (
    <p {...rest} className={cn('font-inter', className)}>
      {children}
    </p>
  );
};

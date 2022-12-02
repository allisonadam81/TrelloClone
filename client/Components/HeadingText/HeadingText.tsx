import React from 'react';

type Props = {
  headingText: string,
  size: 'small' | 'medium' | 'large'
}

export const HeadingText = ({ headingText, size }: Props) => {

  const headingSizes = {
    small: <h6>{headingText}</h6>,
    medium: <h3>{headingText}</h3>,
    large: <h1>{headingText}</h1>,
  };

  return headingSizes[size];
};

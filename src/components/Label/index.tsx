import React from "react";

interface IProps {
  htmlFor: string
  children: React.ReactNode
}

export const Label: React.FC<IProps> = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor} style={{display: 'block', marginBottom: '2px'}}>{children}</label>;
}

export default Label;

import React from "react";

interface IProps {
  text: string;
}

export const Label: React.FC<IProps> = ({ text }) => {
// export function Label({ text }): IProps {
  return <label style={{display: 'block'}}>{text}</label>;
}

export default Label;

import React, { CSSProperties } from "react";

interface IProps {
  id: string
  type: string
  value: string
  placeholder: string
  onChange: () => {}
  onFocus: () => void
  onBlur: () => {}
  className: string
  style: CSSProperties
}

export const Input: React.FC<IProps> = ({ id, type, value, placeholder, onChange, onFocus, onBlur, className, style }) => {
  return <input
    id={id}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    className={className}
    style={style}
  />
}

export default Input;

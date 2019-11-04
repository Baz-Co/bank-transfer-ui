import React, { CSSProperties } from "react";

import './Input.css'

interface IInputProps {
  id: string
  type: string
  value: string
  placeholder?: string
  onChange: (e:React.FormEvent<HTMLInputElement>) => void
  onFocus?: () => void
  onBlur?: () => void
  className?: string
  style?: CSSProperties
}

export const Input: React.FC<IInputProps> = ({ id, type, value, placeholder, onChange, onFocus, onBlur, className, style }) => {
  
  return <input
    id={id}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    className={`width100pct ${className}`}
    style={style}
  />
}

export default Input;

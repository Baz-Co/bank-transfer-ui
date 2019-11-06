import React, { CSSProperties } from "react";

import './Input.css'

interface IInputProps {
  id: string
  type: string
  // pattern?: string
  value: string
  placeholder?: string
  onChange: (e:React.FormEvent<HTMLInputElement>) => void
  onFocus?: () => void
  onBlur?: () => void
  className?: string
  style?: CSSProperties,
  icon?: any
}

export const Input: React.FC<IInputProps> = ({ id, type, value, placeholder, onChange, onFocus, onBlur, className, style, icon }) => {
  
  return (
    <div style={{display: 'flex'}}>
      <input
        id={id}
        type={type}
        // pattern={pattern}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`width100pct ${className}`}
        style={style}
        autoComplete='off'
      />
      {icon}
    </div>)
}

export default Input;

import React from 'react'

const Button = ({
    children,
    type="",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) => {
  return (
    <button className={`x-4 py-2 px-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button

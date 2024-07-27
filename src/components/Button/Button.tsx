import { buttonProps } from '@/types'
import clsx from 'clsx'
import React from 'react'

const Button = ({ type, text, onClick, actionButton, bgColor, ...props }: buttonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          "font-medium rounded-lg text-base px-5 py-4 focus:outline-none transition-all duration-300 ease-in-out", 
          actionButton ? "text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300" : `${bgColor} hover:opacity-90`
        )}
        {...props}
      >
        {text}
      </button>
    </div>
  )
}

export default Button;

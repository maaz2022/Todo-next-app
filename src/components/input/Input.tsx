import { inputProps } from "@/types"
import React from "react"

const Input = ({ name, type, placeholder, value, ...props }: inputProps) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className="block w-full p-4 mx-2 border rounded-lg text-base bg-green-100 border-gray-300 placeholder-gray-600 text-black focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
        {...props}
      />
    </div>
  )
}

export default Input;

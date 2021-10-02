import React from 'react'

export type IButton = React.DetailedHTMLProps<
   React.ButtonHTMLAttributes<HTMLButtonElement>,
   HTMLButtonElement
>

export const Button: React.FC<IButton> = ({
   className = '',
   children,
   ...rest
}) => {
   return (
      <button
         className={`m-auto md:m-0 md:my-auto w-48 md:h-24 my-3 py-4 px-2 md:px-6 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none ring-opacity-75 ring-blue-400 focus:ring text-white text-4xl ${className}`}
         {...rest}
      >
         {children}
      </button>
   )
}

import { Logo } from '@components'
import React from 'react'

export const Header: React.FC = () => {
   return (
      <div className="flex flex-col justify-between md:flex-row my-4 md:px-12 md:text-left bg-white">
         <Logo />
         <button>
            <h1 className="m-auto my-2 md:m-0 md:my-auto text-5xl text-indigo-400 hover:text-indigo-700 ring-opacity-75 focus:ring focus:outline-none ">
               Slideshow
            </h1>
         </button>
      </div>
   )
}

import Link from 'next/link'
import React from 'react'

export const Logo: React.FC = () => {
   return (
      <Link href="/">
         <img
            className="m-auto md:m-0 h-2/3 w-2/3 md:h-1/4 md:w-1/4"
            src="/icons/Poke.png"
            alt="Pokemon logo"
         />
      </Link>
   )
}

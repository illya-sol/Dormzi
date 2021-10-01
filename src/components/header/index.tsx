import { Logo } from '@components'
import React from 'react'

export const Header: React.FC = () => {
   return (
      <div className="pl-24 text-left bg-gray-800">
         <Logo />
      </div>
   )
}

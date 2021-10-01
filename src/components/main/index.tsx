import { Button } from '@components'
import React from 'react'

export const Main: React.FC = () => {
   return (
      <div className="text-center font-light py-5 bg-gray-700">
         <div className="container mx-auto">
            <h1 className="text-white text-7xl mb-2">Made using SuperPlate</h1>
            <p className="text-xl text-white mb-3">
               Awesome boilerplate i prepaired for Dormzi
            </p>
            <a href="https://dormzi.com/" target="_blank">
               <Button type="button">
                  <p className="text-3xl">Dormzi Url</p>
               </Button>
            </a>
         </div>
      </div>
   )
}

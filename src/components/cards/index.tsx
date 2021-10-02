import { Button } from '@components/button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'
import { pokeContext } from '../card-container'

type Ipokemon = {
   picture: string
   id: number
   name: string
}

type Iprops = {
   data: []
}

export const Cards: React.FC<Iprops> = ({ data }: Iprops) => {
   const [pageIndex, setPageIndex] = useState(0)
   const pokeNumber = useContext(pokeContext)
   const router = useRouter()

   const pageChange = (change: number) => {
      if (pageIndex + change != -1) {
         setPageIndex(pageIndex + change)
         window.scrollTo(0, 400)
      }
   }

   return (
      <div className="flex-1 container mt-8 mx-auto pt-5">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data
               .slice(
                  pokeNumber * pageIndex,
                  pokeNumber + pokeNumber * pageIndex,
               )
               .map((pokemon: Ipokemon) => (
                  <Link
                     href={{
                        pathname: '/pokedex',
                        query: { id: pokemon.id },
                     }}
                     key={pokemon.id + pokemon.name}
                  >
                     <div
                        key={pokemon.id + pokemon.name}
                        className="col-span-1 rounded-md border border-yellow-500 hover:border-blue-500 p-5"
                     >
                        <div className="flex justify-between">
                           <h2 className="text-2xl font-semibold mb-2">
                              {pokemon.name}
                           </h2>
                           <h2 className="text-md font-semibold mb-2">
                              id#{pokemon.id}
                           </h2>
                        </div>
                        <img
                           src={pokemon.picture}
                           onError={(e: any) => {
                              e.target.onerror = null
                              e.target.src = 'icons/noImage.png'
                              e.target.alt = 'no image available'
                           }}
                           alt={pokemon.name + ' picture'}
                        />
                     </div>
                  </Link>
               ))}
         </div>
         <div className="flex flex-col my-10 md:flex-row justify-between text-3xl md:text-5xl">
            <Button onClick={() => pageChange(-1)}>Previous</Button>
            <Button onClick={() => pageChange(1)}>Next</Button>
         </div>
      </div>
   )
}

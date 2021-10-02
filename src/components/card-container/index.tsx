import { Cards } from '@components'
import axios from 'axios'
import React, { useState } from 'react'
import useSWR from 'swr'

export const pokeContext = React.createContext(9)

export const CardsContainer: React.FC = () => {
   const [pokeNum, setPokeNum] = useState(9)
   const { data, error } = useSWR(
      'http://pokemon.test.dormzi.com/pokemon',
      axios,
   )

   if (!data || error)
      return (
         <div className="flex flex-row justify-center m-auto">
            <img src="/icons/Loading.gif" alt="loading" />
         </div>
      )

   return (
      <div className="flex flex-col">
         <pokeContext.Provider value={pokeNum}>
            <input
               onChange={(e) => {
                  console.log(pokeNum)
                  setPokeNum(parseInt(e.target.value))
               }}
               min="1"
               max="128"
               defaultValue="9"
               className="mt-8 mr-16 ml-auto w-24 text-3xl border-2 outline-none border-blue-600 rounded-xl focus:ring-3"
               type="number"
            ></input>
            <Cards data={data.data} />
         </pokeContext.Provider>
      </div>
   )
}

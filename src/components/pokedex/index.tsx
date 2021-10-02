import { Button } from '@components/button'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'

type IpokemonDetailed = {
   base: {
      Attack: number
      Defense: number
      HP: number
      'Sp.Atk': number
      'Sp.Def': number
      Speed: number
   }
   cname: string
   ename: string
   id: number
   jname: string
   skills: {
      egg: number[]
      level_up: number[]
      'pre-evolution': number[]
      tm: number[]
      transfer: number[]
      tutor: number[]
   }
   type: string[]
   picture: string
   name: string
}

export const PokedexPage: React.FC = () => {
   const router = useRouter()
   const { data, error } = useSWR(
      'http://pokemon.test.dormzi.com/pokemon/' + router.query.id,
      axios,
   )
   console.log(data)

   if (error)
      return (
         <div className="flex flex-col md:pl-16 pt-8">
            <h1 className="text-6xl md:text-9xl text-center">
               Could not find that pokemon
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 align-center justify-items-stretch">
               <img
                  className="rounded-lg p-4 md:p-16"
                  src="/icons/noImage.png"
                  alt="no image found"
               />

               <div className="flex my-auto mx-4 md:pr-12 md:justify-between text-xl md:text-3xl">
                  <Link
                     href={{
                        pathname: '/pokedex',
                        query: { id: router.query.id + 1 },
                     }}
                  >
                     <Button className="mt-max">Next</Button>
                  </Link>
                  <Link
                     href={{
                        pathname: '/pokedex',
                        query: { id: router.query.id - 1 },
                     }}
                  >
                     <Button className="mt-max">Previous</Button>
                  </Link>
               </div>
            </div>
         </div>
      )

   if (!data)
      return (
         <div className="flex flex-row justify-center pt-64 m-auto">
            <img src="/icons/Loading.gif" alt="loading" />
         </div>
      )

   if (data.data === '')
      return (
         <div className="flex flex-col md:pl-16 pt-8">
            <h1 className="text-6xl md:text-9xl text-center">
               Could not find that pokemon
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 align-center justify-items-stretch">
               <img
                  className="rounded-lg p-4 md:p-16"
                  src="/icons/noImage.png"
                  alt="no image found"
               />

               <div className="flex my-auto mx-4 md:pr-12 md:justify-between text-xl md:text-3xl">
                  <Link
                     href={{
                        pathname: '/pokedex',
                        query: { id: router.query.id + 1 },
                     }}
                  >
                     <Button className="mt-max">Next</Button>
                  </Link>
                  <Link
                     href={{
                        pathname: '/pokedex',
                        query: { id: router.query.id - 1 },
                     }}
                  >
                     <Button className="mt-max">Previous</Button>
                  </Link>
               </div>
            </div>
         </div>
      )

   const typedData: IpokemonDetailed = data!.data
   return (
      <div className="flex flex-col md:pl-16 pt-8">
         <h1 className="text-6xl md:text-9xl text-center">{typedData.ename}</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 align-center justify-items-stretch">
            <img
               className="rounded-lg p-4 md:p-16"
               onError={(e: any) => {
                  e.target.onerror = null
                  e.target.src = 'icons/noImage.png'
                  e.target.alt = 'no image available'
               }}
               alt={typedData.name + ' picture'}
               src={typedData.picture}
            />
            <div className="flex flex-col">
               <table className="table-auto mt-12 h-96 text-lg md:text-3xl">
                  <tbody>
                     <tr>
                        <th>National No:</th>
                        <td className="text-black">{typedData.id}</td>
                     </tr>
                     <tr>
                        <th>Type:</th>
                        {typedData.type.map((pokeType) => (
                           <td className="text-black" key={pokeType}>
                              {pokeType}
                           </td>
                        ))}
                     </tr>
                     <tr>
                        <th>Aliases:</th>
                        <td className="text-black">{typedData.cname} </td>
                        <td className="text-black">{typedData.jname}</td>
                     </tr>
                     <tr>
                        <th>HP:</th>
                        <td>{typedData.base.HP}</td>
                     </tr>
                     <tr>
                        <th>Defense:</th>
                        <td>{typedData.base.Attack}</td>
                     </tr>
                     <tr>
                        <th>Sp-Atk:</th>
                        <td>{typedData.base['Sp.Atk']}</td>
                     </tr>
                     <tr>
                        <th>Sp-Def:</th>
                        <td>{typedData.base['Sp.Def']}</td>
                     </tr>
                     <tr>
                        <th>Speed:</th>
                        <td>{typedData.base.Speed}</td>
                     </tr>
                  </tbody>
               </table>
               <div className="flex my-auto md:mx-4 md:pr-12 md:justify-between text-xl md:text-3xl">
                  <Link
                     href={{
                        pathname: '/pokedex',
                        query: { id: typedData.id + 1 },
                     }}
                  >
                     <Button className="mr-8 md:mr-0 mt-max bg-yellow-500">
                        Next
                     </Button>
                  </Link>
                  <Link
                     href={{
                        pathname: '/pokedex',
                        query: { id: typedData.id - 1 },
                     }}
                  >
                     <Button className="mt-max">Previous</Button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

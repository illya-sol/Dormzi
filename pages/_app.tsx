import '@styles/fonts.css'
import '@styles/global.css'
import { AppProps } from 'next/app'
import React from 'react'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
   return <Component {...pageProps} />
}

export default MyApp

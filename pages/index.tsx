import { Cards, Container, Footer, Header, Main } from '@components'
import React from 'react'

const Home: React.FC = () => {
   return (
      <Container>
         <Header />
         <Main />
         <Cards />
         <Footer />
      </Container>
   )
}

export default Home

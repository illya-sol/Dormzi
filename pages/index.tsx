import { CardsContainer, Container, Header, Main } from '@components'
import React from 'react'

const Home: React.FC = () => {
   return (
      <Container>
         <Header />
         <Main />
         <CardsContainer />
      </Container>
   )
}

export default Home

import React from 'react'
import styled from 'styled-components'
import Body from '../components/Body'
import Head from '../components/Header'
import Sub from '../components/Sub'
import Tail from '../components/Tail'
const Container=styled.div`
background-color: #191A1D;;

`;

function Main() {
  return (
    <Container>
        <Head/>
        <Body/>
        <Sub/>
        <Tail/>
    </Container>
  )
}

export default Main
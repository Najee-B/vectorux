import React, { useState } from 'react'
import styled from 'styled-components'
import back from '../assets/bg.png'
import resbg from '../assets/resbg.png'
import Nav from './Navbar'
const Container=styled.div`
padding:0px;
  .img_div{
  background: url(${back}),lightgray 50% / cover no-repeat;
  background-size:100% 100% ;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-repeat: no-repeat;
  }
  Nav{
    margin-left: 300px;
  }
  .logo{
    color: white;
    font-family:Arial, Helvetica, sans-serif;
    font-size: 80px;
    font-weight: bold;
    margin:200px auto auto 80px;
}
span{
    color: #00fefe;
}
.logo2{
    color: white;
    font-family:Merienda;
    font-size: 40px;
    font-weight: 200;
  }
  
    @media screen and (max-width:600px) {

      .logo1{
        font-size: 40px;
        margin: auto;
        
      }
      .logo2{
        font-size: 20px;
        margin: auto;
      }
      .logo{
        margin:120px auto auto auto;
      }
      .img_div{
        height: 90vh;
        background: url(${resbg}),lightgray 50% / cover no-repeat;
        background-size:100% 100% ;
        background-repeat: no-repeat;
        
      }
    }

`;

function Header() {
  return (
    <Container>
        <div className="img_div">
        <Nav/>
        <div className="logo">
            <div className="logo1">
            VECTOR<span>UX</span>
            </div>
            <div className="logo2">
                we ideate, create <span className='sp2'>&</span> innovate
            </div>
           </div>
           
        </div>
      
    </Container>
  )
}

export default Header
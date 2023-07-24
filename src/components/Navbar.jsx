import React, { useState } from 'react'
import styled from 'styled-components'
const Container=styled.div`
position: relative;


.main{
    margin-top: 40px;
    color:white;
    display: flex;
    
    
}

.links{
    display: flex;
    flex-direction: row;
    font-family:Arial, Helvetica, sans-serif;
    margin-left: auto;
    margin-top:0px;
}
.link1{
    font-size: 20px;
    margin-right:80px;
}
.icon{
    margin-right: 30px;
    display: none;
    height: 10px;
    width: 10px;
}
i{
    color: white;
    font-size:40px;
    
}
a{
    color: white;
    text-decoration: none;
    
}

@media screen and (max-width: 600px){

    .icon{
        display: flex;
        margin-left:auto;
    }
    .links{
        display:none;
    }
    .main{
        margin-top: 10px;
    }

    
}
.sidenav{
    transform:translateY(${props=>props.value?"0px":"-100px"});
    transition:all 1s ease;
    background-color: #212020;
    height: 3vh;
    width:20%;
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    
}
.sidelinks{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin:10px 10px;
    font-size: 17px;

}
.link{
    margin:0px 10px 20px 0px;
    border: solid;
    border-color:#00fefe ;
    border-radius: 50px;
    padding: 7px;
    
}
`;

function Navbar() {
    const [state,setState]=useState(false);
  return (
    <Container value={state}>
          <div className="main">
              <div className="links">
                <div className="link1"><a href="#home">HOME</a></div>
                <div className="link1"><a href="#about">ABOUT</a></div>
                <div className="link1"><a href="#contact">CONTACT</a></div>
              </div>
              <div className="icon" onClick={()=>setState(!state)}>
              <i className='fa-solid fa-bars'></i>
              </div>
          </div>
          <div className="sidenav">
          <div className="sidelinks">
                <div className="link"><a href="#home">HOME</a></div>
                <div className="link"><a href="#about">ABOUT</a></div>
                <div className="link"><a href="#contact">CONTACT</a></div>
              </div>
          </div>
        

    </Container>
  )
}

export default Navbar
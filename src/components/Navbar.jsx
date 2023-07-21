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
}
i{
    color: white;
    font-size:30px;
    
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
        margin-top: 20px;
    }

    
}
.sidenav{
    transform:translateX(${props=>props.value?"0px":"-3000px"});
    transition:all 1s ease;
    background-color: #212020;
    height: 7vh;
    width:100%;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    margin-top:50px;
}
.sidelinks{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    margin:10px 10px;
    font-size: 15px;

}
.link{
    margin-bottom: 40px;
}
`;

function Navbar() {
    const [state,setState]=useState(false);
  return (
    <Container value={state}>
          <div className="main">
              <div className="links">
                <div className="link1">HOME</div>
                <div className="link1">ABOUT</div>
                <div className="link1">CONTACT</div>
              </div>
              <div className="icon" onClick={()=>setState(!state)}>
              <i className='fa-solid fa-bars'></i>
              </div>
          </div>
          <div className="sidenav">
          <div className="sidelinks">
                <div className="link">HOME</div>
                <div className="link">ABOUT</div>
                <div className="link">CONTACT</div>
              </div>
          </div>
        

    </Container>
  )
}

export default Navbar
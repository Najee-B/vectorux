import React, { useState } from 'react'
import p1 from '../assets/p1.svg'
import p2 from '../assets/p2.svg'
import p3 from '../assets/p3.svg'
import styled from 'styled-components'
const Container = styled.div`
display: flex;
flex-direction: column;
.main-top{
    display: flex;
    flex-direction: row;
    transition:all 1s ease;
}
img{
    height: 85px;
    width: 85px;
}
.left{
    display: flex;
    flex-direction: column;
    margin-top: 200px;
    margin-left: 100px;
}
.logo{
    display: flex;
    flex-direction: column;
    margin-left:100px;
    align-items: center;
}
.head{
    display: flex;
    flex-direction: column;
    align-items:center;
    color: white;
    font-size: 30px;
    font-weight:bold;
    transform: translateY(-100px);
}
.sp1{
    font-size: 8px;
}
.temp{
    display: flex;
    justify-content: space-between;
}
.im{
   margin-left:3px;
   height: 80px;
}
.bottom{
    display: flex;
    justify-content: space-between;
    margin-left: 100px;
}
#txt{
    border-radius: 50px 50px 0px 50px;
    padding-left: 20px;
    height: 40px;
    border: solid;
    border-color: white;
    border-width:1px;
    background-color: #191A1D;
    margin-right: 20px;
}
#btn{
    width: 80px;
    border-radius:50px 50px 50px 0px;
    background-color: #63E7DA;
    color: white;
}
.right{
    color: white;
    margin: 200px 100px auto auto;
    display: flex;
    flex-direction: column;
    font-size: 25px;
}
.d1{
    font-size: 35px;
    width: 350px;
    margin-bottom: 20px;
}
.d2{
    width: 400px;
    color: #D9D9D9;
    margin-bottom:10px;
}
.d3{
    color: #63E7DA;
}
.sp2{
    color: #63E7DA;;
}
.main-bottom{
    margin-left:auto;
}
.last{
    width: 250px;
    font-size: 30px;
    color: white;
    margin: 300px 50px 50px auto;
}

@media screen and (max-width:600px) {
    .main-top{
        flex-direction: column;
    }
    img{
        height: 60px;
        width: 60px;
    }
    .im{
        height: 60px;
    }
    .left{
        margin-top:80px;
        margin-left: 10px;
    }
    .right{
        margin: 80px auto auto;
    }
    .logo{
        margin-left:0px;
    }
    .head{
        font-size: 25px;
        transform: translateY(-80px);

    }
    .bottom{
        margin:auto;
    }
    .top{
        margin-left:0px;
    }
    #txt{
        height: 35px;
        margin-right:10px;
        font-size: 12px;
    }
    #btn{
      width  :60px ;
    }
    .sp1{
        font-size: 12px;
    }
    .d1{
        font-size: 25px;
        width: 100%;
    }
    .d2{
        font-size: 15px;
        width: 300px;
        margin-bottom:20px;
        
    }
    .d3{
        
        font-size: 18px;
        margin:auto;
    }
    .last{
        font-size: 15px;
        width: 130px;
        margin: 180px 5px 10px auto;
    }
}

`;

function Tail() {
  return (
    <Container>
        <div className="main-top" id='contact'>
        <div className="left">
            <div className="top">
                <div className="logo">
                    <div className="temp">
                    <img src={p1} alt="" /><img src={p2} alt="" />
                        </div>
                        <img className='im' src={p3} alt="" />
                        <div className="head">VECTOR UX<span className='sp1'>we ideate, innovate and create </span></div>
                        </div>
                
            </div>
            <div className="bottom">
                    <input type="text" id='txt' placeholder='write a message' />
                    <input type="submit" value="send" id="btn" />
            
            </div>
        </div>
        <div className="right">
            <div className="d1">
            Let's <span className='sp2'>talk</span> something special. 
            </div>
            <div className="d2">
            We seek to push the limitations of creativity to create high-engaging, user-friendly and memorable interactive experiences.
            </div>
            <div className="d3">
            vectorux0@gmail.com
            </div>
        </div></div>
        <div className="main-bottom">
            <div className="last">
            Let's <span className='sp2'>connect</span> there
            </div>
        </div>
    </Container>
  )
}

export default Tail
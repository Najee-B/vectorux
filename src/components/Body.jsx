import React, { useState } from 'react'
import styled from 'styled-components'
import i1 from '../assets/icon1.png'
import i2 from '../assets/icon2.png'
import i3 from '../assets/icon3.png'
import i4 from '../assets/icon4.png'
import comp from '../assets/computer.png'
const Container = styled.div`

.boxes{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* transform: translateY(-50px); */
    margin:20px 70px;
    flex-wrap:wrap;
}
.box{
    display: flex;
    flex-direction:column;
    height: 240px;
    width: 200px;
    background:#3C3C3C;
    border-radius: 0px 20px 0px 20px ;
    padding:60px 10px 10px 10px;
    border-style: solid;
    border-color: #63E7DA;
}
.head{
    background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.27) 100%);
    background-clip: text;
    font-family: Montserrat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight:bolder;
    font-size: 22px;

}
.icon img{
    height: 40px;
    width: 40px;
    margin:20px auto 5px 0px;
}
.cont{
    color: #8F8F8F;
    font-family: Montserrat;
    margin-top:10px;
    
}
.lines{
    margin-top:230px;
}
.line{
    height: 1px;
    background-color: #63E7DA;
    display: flex;
    flex-direction: row;
}
.chld1{
    height: 7px;
    width: 90px;
    background-color:#63E7DA;
    margin-left:129px;
    border-radius: 50px;

}
.chld2{
    height: 7px;
    width: 120px;
    background-color:#63E7DA;
    margin-left:280px;
    border-radius: 50px;
}
.image img{
    height: 300px;
    width: 300px;
    transform:rotate(-10deg);
    
    
}
.image{
    margin-left:auto;
    margin-right:30px;
    width:300px ;
    transform: translateY(-180px);

}
@media screen and (max-width:600px) {
    
    
    .boxes{
        margin: 10px;
        /* transform: translateY(140px); */
        padding-top: 30px;
        
    }
    .box{
        height:200px;
        width: 150px;
        font-size: 17px;
        padding: 20px 5px 10px 5px;
        margin: 20px 10px auto 10px;
    }
    .head{
        font-size: 20px;
    }
    .icon img{
        height: 35px;
        width: 35px;
        margin:20px auto 5px 0px;
    }
    .lines{
        margin-top: 200px;
    }
    .chld1{
        margin-left:40px;
        width:40px;
        height: 3px;
    }
    .chld2{
        margin-left:120px;
        width:50px;
        height: 3px;
    }
    .image{
        width: 170px;
        transform: translateY(-80px);
        margin-right:0px;
    }
    .image img{
        margin-right:0px;
        height: 150px;
        width: 150px;
       
    }
}

`;

function Body() {
    const [state,setState]=useState(false);
    return (
        <Container value={state}>
            <div className="boxes" id='home'>
                <div className="box" onClick={()=>setState(!state)}><div className="icon"><img src={i1} alt="" /></div><div className="head">UI & UX</div><div className="cont">
                    Designing interfaces that are intuitive, efficient, and enjoyable to use.</div></div>
                <div className="box"><div className="icon"><img src={i2} alt="" /></div><div className="head">Web & Mobile App</div><div className="cont">
                    Transforming ideas into exceptional web and mobile app experiences.</div></div>
                <div className="box"><div className="icon"><img src={i3} alt="" /></div><div className="head">Design & Creative</div><div className="cont">
                    Crafting visually stunning designs that connect with your audience.</div></div>
                <div className="box"><div className="icon"><img src={i4} alt="" /></div><div className="head">Development</div><div className="cont">
                    Bringing your vision to life with the latest technology and design trends.</div></div>
            </div>
            <div className="lines">
            <div className="chld1"></div>
                <div className="line"></div>
                   
                <div className="chld2"></div>
                </div>
                    
                
                <div className="image">
                    <img src={comp} alt="" />
                    </div>

            
        </Container>
    )
}

export default Body
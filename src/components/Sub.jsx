import React, { useState } from 'react'
import styled from 'styled-components'
const Container = styled.div`
.main{
display: flex;
flex-direction:column;
}
.top{
    font-family: Atma;
    width: 400px;
    font-size: 60px;
    font-style: normal;
    font-weight: 60;
    background: linear-gradient(90deg, #FFF 0%, #515151 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left:300px;
    margin-bottom: 40px;
    margin-top:200px
}
.down{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:0px 60px;

    
}
.d{
   // background-color: red;
    width: 230px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.num{
    margin: auto;
    display: flex;
    justify-content: center;
    color: #515151;
    border-radius: 50%;
    background-color: #63E7DA;
    height: 100px;
    width: 100px;
    align-items: center;
    font-size: 60px;
    

    }
.head{
    background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
    background-clip: text;
    text-align: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 20px;
    margin-top:15px;
    font-weight:bold;
}
.cont{
    color: #6D6D6D;
    text-align: center;
    font-size:15px;
    font-family: Montserrat;
    margin-top:10px;
    
}
@media screen and (max-width:600px) {
    .top{
        margin-left:20px;
        font-size: 50px;
        margin-bottom: 20px;
        width: 350px;
        margin-top:20px;
        
    }
    .down{
        padding: 0px 20px;
        flex-direction:column;
        justify-content: center;
    }
    .d{
        width: 200px;
        height: 180px;
        margin: auto;
    }
    .num{
        height: 70px;
        width: 70px;
        font-size:30px ;
    }
    .head{
        font-size: 20px;
        margin-top: 9px;
    }
    .cont{
        font-size: 16px;
    }
    
}

`;

function Sub() {
    return (
        <Container>
            <div className="main" id='about'>
            <div className="top">
                What we offer?
            </div>
            <div className="down">
                <div className="d">
                    <div className="num">1</div>
                    <div className="head">24/7 Customer Support.</div>
                    <div className="cont">If you have any queries don't wait, we are here for you 24/7.</div>
                </div>
                <div className="d">
                    <div className="num">2</div>
                    <div className="head">Perfection</div>
                    <div className="cont">Perfect Design With Responsive Pages</div>
                </div>
                <div className="d">
                    <div className="num">3</div>
                    <div className="head">Dedication</div>
                    <div className="cont">Our highly dedicated team ensures the on time completion and delivery of the project.</div>
                </div>
            </div></div>
        </Container>
    )
}

export default Sub
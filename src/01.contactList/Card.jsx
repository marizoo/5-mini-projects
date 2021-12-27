import React from 'react'
import styled from 'styled-components';
import { centerIt, columnIt } from '../globalStyle';

const CardWrapper = styled.div`
width: 410px;
height: 150px;
background-color: #2f92f0;     
${centerIt};
border-radius: 10px;
`

const Left = styled.div`
flex: 35%;
${centerIt}
width: 100%;
height: 100%;
`
const Img = styled.img`
width: 85%;
height: 85%;
object-fit: cover;
border-radius: 10px;

`

const Right = styled.div`
flex: 65%;
${columnIt};
justify-content: space-around;
height: 90%;
`

const Desc = styled.h4`
color: white;
`

const Button = styled.button`
padding: 5px;
width: 35%;
border: 0;
background-color: #51bce6;
color: white;
font-size: 13px;
font-weight: 500;
${centerIt};
border-radius: 5px;
cursor: pointer;
`

const Card = () => {
    return (
        <CardWrapper>
            <Left>
                <Img src='https://via.placeholder.com/150'/>
            </Left>
            <Right>
                <Desc>Name: Sheryl Crow</Desc>
                <Desc>Email: chickencoop@notreal.com</Desc>
                <Desc>Age: 37</Desc>
                <Button>show age</Button>
            </Right>
        </CardWrapper>
    )
}

export default Card

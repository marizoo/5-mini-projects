import React, {useState} from 'react'
import styled from 'styled-components';
import { centerIt, columnIt } from '../globalStyle';

const CardWrapper = styled.div`
width: 450px;
height: 150px;
background-color: #2f92f0;     
${centerIt};
border-radius: 10px;
margin-bottom: 18px;
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
height: 90%;
`

const Desc = styled.h4`
color: white;
margin-bottom: 8px;
font-weight: 500;
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
margin-bottom: 8px;

`

const Card = ({data}) => {
    const[showAge, setShowAge] = useState(false)
   

    return (
        <CardWrapper>
            <Left>
                {/* <Img src='https://via.placeholder.com/150'/> */}
                <Img src={data.picture.large}/>
            </Left>
            <Right>
                <Desc>Name: {data.name.first} {data.name.last}</Desc>
                <Desc>Email: {data.email}</Desc>
                {showAge &&  <Button onClick={() => setShowAge(!showAge)}>hide age</Button>}
                {!showAge && <Button onClick={() => setShowAge(!showAge)}>show age</Button>}
                
                {showAge && <Desc>Age: {data.dob.age}</Desc> }
                
            </Right>
        </CardWrapper>
    )
}

export default Card

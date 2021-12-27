import React from 'react'
import styled from 'styled-components';
import { centerIt, columnIt, mainColor } from '../globalStyle';

const Wrapper = styled.div`
color: white;
`

const Card = styled.div`
width: 400px;
min-height: 300px;
height: min-content;
${columnIt};
align-items: center;
background-color: ${mainColor};
color: white;
border-radius: 20px;
border: 2px solid white;
`

const Top = styled.div`
height: 30%;
width: 100%;
${columnIt};
justify-content: center;
align-items: center;
border-bottom: 2px solid white;
`

const Title = styled.h2`
margin-top: 15px;
`

const AddItemCont = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 40px;
width: 90%;
border: 1px solid white;
border-radius: 10px;
margin: 15px 0;
`
const InputItem = styled.input`
border: 0;
padding-left: 10px;
background: 0;
color: white;
font-size: 16px;
font-weight: 700;
&:focus {
    outline: none;
}
`

const InputButton = styled.button`
font-size: 30px;
font-weight: 500;
border: 0;
background: none;
padding-right: 10px;
color: white;
cursor: pointer;
`

const Bottom = styled.div`
height: 70%;
width: 100%;
${columnIt};
justify-content: center;
align-items: center;
`

const BottomTitle = styled.h2`
margin: 15px 0;

`

const ItemCont = styled.div`
width: 100%;
`
const UL = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
align-items: center;
`


const LI = styled.li`
height: 40px;
border: 1px solid white;
border-radius: 10px;
width: 90%;
display: flex;
align-items: center;
font-size: 16px;
padding-left: 10px;

`

const Delete = styled.button`
flex: 10%;
font-weight: 500;
border: 0;
background: none;
font-size: 20px;
color: white;
cursor: pointer;
`

const TheItems = styled.div`
flex: 70%
`

const QuantityCont = styled.div`
flex: 20%;
display:flex;
`
const Quantity = styled.span`
font-size: 22px;
font-weight: 700;
margin: 10px;
`
const Decrease = styled.button`
font-weight: 500;
border: 0;
background: none;
font-size: 40px;
color: white;
cursor: pointer;
`
const Increase = styled.button`
/* border: 1px solid white;
border-radius: 50%;
width: 30px;
height: 30px; */
font-weight: 500;
background: none;
border: 0;
font-size: 25px;
color: white;
cursor: pointer;
`


const TotalCont = styled.div`
margin: 25px 0;
height: 40px;
width: 90%;
display: flex;
justify-content: end;
align-items: end;
`
const TotalValue = styled.h2`
font-weight: 400;
span {
    font-size: 40px;
    margin-right: 5px;
}
`


const ShoppingList = () => {
    return (
        <Wrapper>
            <Card>
                <Top>
                    <Title>Shopping List</Title>
                    <AddItemCont>
                        <InputItem 
                        name='inputItem' 
                        type='text'
                        placeholder='Add Items'
                        />
                        <InputButton>+</InputButton>
                    </AddItemCont>
                </Top>
                <Bottom>
                    <BottomTitle>Your List Items</BottomTitle>
                    <ItemCont>
                        <UL>
                            <LI>
                                <Delete>x</Delete>
                                <TheItems>
                                Sayur bayam
                                Sayur bayam
                                </TheItems>
                                
                                <QuantityCont>
                                    <Decrease>-</Decrease>
                                    <Quantity>2</Quantity>
                                    <Increase>+</Increase>
                                </QuantityCont>
                            </LI>
                        </UL>
                    </ItemCont>
                    <TotalCont>
                        <TotalValue>Total : <span>6</span></TotalValue>
                    </TotalCont>
                </Bottom>
            </Card>
        </Wrapper>
    )
}

export default ShoppingList

import React, {useState} from 'react'
import styled from 'styled-components';
import { columnIt, mainColor } from '../globalStyle';


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

const AddItemCont = styled.form`
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
margin-bottom: 5px;
`

const Strike = styled.button`
flex: 10%;
font-weight: 500;
border: 0;
background: none;
font-size: 20px;
color: white;
cursor: pointer;
`

const TheItems = styled.div`
flex: 70%;
font-weight: 500;
`
const TheItemsStrike = styled.div`
flex: 70%;
font-weight: 300;
text-decoration: line-through;
opacity: .5;
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

// const DUMMY_DATAS = [
//     {itemName: 'bawang bombay', quantity: 3, isSelected: true, id: '01'},
//     {itemName: 'rinso pink', quantity: 1, isSelected: false, id: '02'},
// ]


const ShoppingList = () => {
    const [itemData, setItemData] = useState([]);
    const [newInput, setNewInput] = useState('');
    const [totalQuantity, setTotalQuantity] = useState(0);

    const submitData = (ev) => {
        ev.preventDefault()

        const newItem = {
            itemName: newInput,
            quantity: 1,
            isSelected: false,
            id: Math.floor(Math.random() * 10000)
        }

        const newItems = [...itemData, newItem];
        setItemData(newItems);

        setNewInput('')
        const quantityStart = totalQuantity + 1;
        setTotalQuantity(quantityStart);
    }

    const handleQuantityDecrease = (index) => {
        const itemQuantity = 
        itemData[index].quantity --;
        setTotalQuantity(itemQuantity);
        handleTotalQuantity();

    }

    const handleQuantityIncrease = (index) => {
        const itemQuantity = itemData[index].quantity ++;
        setTotalQuantity(itemQuantity);
        handleTotalQuantity();
    }

    const handleTotalQuantity = () => {
        const addAllTotal = 
        itemData.reduce((total, item) => {
            return total + item.quantity; 
        },0)
        setTotalQuantity(addAllTotal)
    }

   const toggleStrike = (index) => {
       const newItems = [...itemData];

       newItems[index].isSelected = !newItems[index].isSelected;
       setItemData(newItems);
   }

    // const handleDelete = (clickedId) => {
    //     setItemData(itemData.filter(item => item.id !== clickedId))
    //     const quantityCount = totalQuantity - itemData.id.quantity;
    //     setTotalQuantity(quantityCount);
    // }
   
    return (
        <Wrapper>
            <Card>
                <Top>
                    <Title>Shopping List</Title>
                    <AddItemCont onSubmit={submitData}>
                        
                        <InputItem 
                        name='inputItem' 
                        type='text'
                        placeholder='Add Items'
                        required
                        value={newInput}
                        onChange={(ev) => setNewInput(ev.target.value)}
                        />
                        <InputButton type='submit'>+</InputButton>
                        
                    </AddItemCont>
                </Top>
                <Bottom>
                    <BottomTitle>Your List Items</BottomTitle>
                    <ItemCont>
                        <UL>
                            {itemData.map((item, index) => (
                                <LI key={item.id}>
                                    <Strike onClick={()=>toggleStrike(index)}>
                                        x
                                    </Strike>
                                    {!item.isSelected &&
                                        <TheItems>
                                        {item.itemName}
                                        </TheItems>
                                    }
                                    {item.isSelected &&
                                        <TheItemsStrike>
                                            {item.itemName}
                                        </TheItemsStrike>
                                    }
                                    

                                    <QuantityCont>
                                        <Decrease onClick={()=> handleQuantityDecrease(index)}>-</Decrease>
                                        <Quantity>{item.quantity}</Quantity>
                                        <Increase onClick={()=> handleQuantityIncrease(index)}>+</Increase>
                                    </QuantityCont>
                                </LI>                                
                            ))}
                           
                        </UL>
                    </ItemCont>
                    <TotalCont>
                        <TotalValue>Total : <span>{totalQuantity}</span></TotalValue>
                    </TotalCont>
                </Bottom>
            </Card>
        </Wrapper>
    )
}

export default ShoppingList

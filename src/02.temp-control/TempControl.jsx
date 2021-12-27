import React,{useState} from 'react'
import styled from 'styled-components';
import { centerIt, columnIt } from '../globalStyle';

const Wrapper = styled.div`
width: 90%;
height: 90%;
${centerIt};
align-items: start;
`

const Card = styled.div`
width: 300px;
height: 450px;
${columnIt};
align-items: center;
background-color: #006b00;
color: white;
border-radius: 20px;
`

const Top = styled.div`
flex: 65%;
width: 100%;
${centerIt}
`

const TopCircle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
border: 5px solid white;
${centerIt};
font-size: 60px;
transition: all 1s ease;

&.cold {
    background-color: #3bbae4;
}

&.hot {
    background-color: crimson;
}
`

const Bottom = styled.div`
flex: 35%;
width: 100%;
${centerIt}
`

const BottomLeft = styled.div`
flex: 1;
height: 100%;
${centerIt};
`
const LeftButton = styled.button`
width: 120px;
height: 120px;
border-radius: 50%;
border: 4px solid white;
${centerIt};
font-size: 50px;
background-color: transparent;
color: white;
`

const BottomRight = styled.div`
flex: 1;
height: 100%;
${centerIt};
`

const RightButton = styled.button`
width: 120px;
height: 120px;
border-radius: 50%;
border: 4px solid white;
${centerIt};
font-size: 70px;
background-color: transparent;
color: white;
`


const TempControl = () => {
    const [tempValue, setTempValue] = useState(23)
    const [tempColor, setTempColor] = useState('cold')

    const addTemp = () => {
        const newTempValue = tempValue + 1
        if(newTempValue >= 35) return;

        if (newTempValue >= 26) {
            setTempColor('hot')
        }

        setTempValue(newTempValue)
    }
    
    const reduceTemp = () => {
        const newTempValue = tempValue - 1
        if(newTempValue <= 14) return;
        if(newTempValue < 24){
            setTempColor('cold')
        }
        setTempValue(newTempValue)
    }
    

    return (
        <Wrapper>
            <Card>
                <Top>
                    <TopCircle
                    className={`${tempColor} === true ? 'cold' : 'hot'`}
                    >{tempValue} {'\u00b0'}c</TopCircle>
                </Top>
                <Bottom>
                    <BottomLeft>
                        <LeftButton onClick={addTemp}>+</LeftButton>
                    </BottomLeft>
                    <BottomRight>
                        <RightButton onClick={reduceTemp}>-</RightButton>
                    </BottomRight>
                </Bottom>
            </Card>
        </Wrapper>
    )
}

export default TempControl

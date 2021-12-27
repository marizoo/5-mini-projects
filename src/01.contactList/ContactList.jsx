import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import { columnIt } from '../globalStyle'
import Card from './Card'

const Wrapper = styled.div`
${columnIt}
align-items: center;
width: 85%;
height: 80%;
`

const ContactList = () => {
    const [results, setResults] = useState([])

    useEffect( () => {
        fetch('https://randomuser.me/api/?results=4')
        .then(response => response.json())
        .then(data => 
            setResults(data.results)
            // console.log(data.results)

            )
        .catch(err => {console.log(err.message)})
    },[])

    return (
        <Wrapper>
            {results.map((result, index) => (
                <Card key={index} data={result}/>
            ))}
            
        </Wrapper>
    )
}

export default ContactList

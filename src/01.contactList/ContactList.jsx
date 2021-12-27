import React from 'react'
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
    return (
        <Wrapper>
            <Card />
        </Wrapper>
    )
}

export default ContactList

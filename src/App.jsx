import React from 'react'
import styled from 'styled-components';
import ContactList from './01.contactList/ContactList';
import { centerIt } from './globalStyle';

const AppContainer = styled.div`
width: 100vw;
height: 100vh;
${centerIt};
background-color: #1d1d1d;
`

const App = () => {
  return (
    <AppContainer>
      <ContactList />
    </AppContainer>
  )
}

export default App

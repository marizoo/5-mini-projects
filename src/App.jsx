import React from 'react'
import styled from 'styled-components';
import ContactList from './01.contactList/ContactList';
import TempControl from './02.temp-control/TempControl';
import BasicForm from './03.basic-form/BasicForm';
import Quiz from './04.quiz/Quiz';
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
      <Quiz />
    </AppContainer>
  )
}

export default App

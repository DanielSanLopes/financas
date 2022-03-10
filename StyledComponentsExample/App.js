/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text,  View,} from 'react-native';

//Styled Components
import { Container, Title, Nome, EnterButton } from './src/styles'; 
const App = () => {

  

  return(
    <Container >
      <Title >Programador</Title>
      <Nome color = "#FFFFFF">Hello Mathew</Nome>

      <EnterButton onPress={() => alert('Hi!')}>
        <Nome>Entrar</Nome>
      </EnterButton>

      


    </Container>

  )
  
}



export default App;

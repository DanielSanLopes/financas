/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text,  View, StatusBar, LogBox} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import Routes from './src/routes';
import app from './src/services/FirebaseConfig';
import AuthProvider from './src/contexts/auth';

//Styled Components
//----------------------------------------------------------------
//----------------------------------------------------------------

LogBox.ignoreAllLogs()

const App = () => {

  
  return(
    <NavigationContainer>
      <AuthProvider>

        <StatusBar backgroundColor="#131313" barStyle = 'light-content'/>
        <Routes/>
        
      </AuthProvider>
      
      
    </NavigationContainer>
  )
 
  
}



export default App;

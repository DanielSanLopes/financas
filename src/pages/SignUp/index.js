import { NavigationContainer } from '@react-navigation/native'
import React, {useState, useContext} from 'react'
import { View, Text, Platform } from 'react-native'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'
import { useNavigation } from '@react-navigation/native'

import {AuthContext} from '../../contexts/auth'

import {Backgorund, Container, Logo, AreaInput, InputText, SubmitButton, Label, Link} from '../SignIn/styles'

const firestore = require("firebase/firestore")




function SignUp (){

    const navigation = useNavigation()


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')


    const {signUp} = useContext(AuthContext)   

    function handleSignUp(){
        signUp(email, pass, name)
    }
    

    return(

        <Backgorund style={{borderTopWidth:1, borderColor: '#00b94a'}}>
           
            
            <Container behaviour={Platform.OS === 'ios'?'padding':''} enabled>


                <AreaInput>

                    <InputText
                    placeholder = 'Nome'
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    value={name}
                    onChangeText={(text)=>setName(text)}/>
                </AreaInput>
                
                <AreaInput>

                    <InputText 
                    placeholder="Email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={(text)=>setEmail(text)}/>
                </AreaInput>

                <AreaInput>
                    <InputText 
                    placeholder="Password"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value ={pass}
                    onChangeText={(text)=>setPass(text)}/>
                </AreaInput>

                <SubmitButton onPress = {handleSignUp}>
                    <Label>Cadastrar</Label>
                </SubmitButton>
                 
            </Container>
        </Backgorund>
    )
}


export default SignUp

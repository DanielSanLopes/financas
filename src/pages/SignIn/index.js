import React, {useState, useContext} from 'react'
import { View, Text, Platform } from 'react-native'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'
import { useNavigation } from '@react-navigation/native'
import {AuthContext} from '../../contexts/auth'

import {Backgorund, Container, Logo, AreaInput, InputText, SubmitButton, Label, Link} from './styles'


function SignIn (){

    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    

    const {user, signIn} = useContext(AuthContext)

    async function handleLogin(){


       
        
        await signIn(email, pass)

       return( console.log ("Response: " + user.name))
    }

    return(
        <Backgorund>
            
            <Container behaviour={Platform.OS === 'ios'?'padding':''} enabled>
                <Logo source = {require("../../assets/logo/Logo.png")}/>


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

                <SubmitButton onPress={handleLogin}>
                    <Label>Login</Label>
                </SubmitButton>

                <Link onPress={()=>navigation.navigate("SignUp")}>
                    <Label>Criar uma conta</Label>
                </Link>
                 
            </Container>
        </Backgorund>
    )
}


export default SignIn

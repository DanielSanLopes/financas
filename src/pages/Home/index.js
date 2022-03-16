import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {useContext, useState, useEffect} from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../../contexts/auth'




function Home (){

    const {user, SignOut, setLoading} = useContext (AuthContext)
    
    

    return(
        <View>
            <Text>{user && user.email}</Text>
            <Button title='Sair' onPress={()=>SignOut()}/>
       
        </View>
    )
}


export default Home
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {useContext, useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { AuthContext } from '../../contexts/auth'




function Home (){

    const {user} = useContext (AuthContext)
    
    

    return(
        <View>
            <Text>{user && user.email}</Text>
       
        </View>
    )
}


export default Home
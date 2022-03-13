import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import { AuthContext } from '../../contexts/auth'



function Home (){

    const {user} = useContext (AuthContext)

    return(
        <View>
            <Text>{user.email}</Text>
        </View>
    )
}


export default Home
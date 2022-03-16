import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from '../pages/Home'
import { createStackNavigator } from '@react-navigation/stack';


const AppDrawer = createDrawerNavigator();
const AppStack = createStackNavigator()

function AppRoutes(){
    return(
        <AppDrawer.Navigator 
        screenOptions={{drawerStyle:{
            backgroundColor:'#171717'
        }, 
        drawerLabelStyle:{
            fontWeight:'bold'
        },
        drawerActiveTintColor:'#FFF',
        drawerActiveBackgroundColor:'#00b94a',
        drawerInactiveBackgroundColor:'#000' ,
        drawerInactiveTintColor: '#DDD',
        drawerItemStyle:{
            marginVertical:5
        }    }}>
            
            <AppDrawer.Screen name = "Home" component ={Home}/>
        </AppDrawer.Navigator>

        
        
    )
}

export default AppRoutes
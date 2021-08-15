import React from 'react';

//import bibliotecas de navegação
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//stack
const Stack = createStackNavigator();

//telas
import Home from './Pages/Home';
import Consult from './Pages/Consult';


const Routes = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen 
                name="Home" 
                component={Home}
                options={{headerShown: false}}/>
                
                <Stack.Screen 
                name="Consult" 
                component={Consult}
                options={{headerShown: false}}/>
            
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
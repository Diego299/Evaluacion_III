import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pantalla1 from '../screens/Pantalla1';
import Pantalla2 from '../screens/Pantalla2';
import Pantalla3 from '../screens/Pantalla3';
import Pantalla4 from '../screens/Pantalla4';
import Pantalla5 from '../screens/Pantalla5';



const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Screen1">
                <Stack.Screen name="Pantalla1" component={Pantalla1} />
                <Stack.Screen name="Pantalla2" component={Pantalla2} />
                <Stack.Screen name="Pantalla3" component={Pantalla3} />
                <Stack.Screen name="Pantalla4" component={Pantalla4} />
                <Stack.Screen name="Pantalla5" component={Pantalla5} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
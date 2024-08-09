import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/types';
import { styles } from '../theme/styles';

type Pantalla1NavigationProp = StackNavigationProp<RootStackParamList, 'Pantalla1'>;
type Props = {navigation: Pantalla1NavigationProp;};
export default function Pantalla1({ navigation }: Props) {


    return (
        <View style={styles.container}>
            <Text style ={styles.title}>BIENVENIDOS</Text>


            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pantalla2')}>
            <Text>Ir Imagen 1</Text>


            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pantalla3')}>
            <Text>Ir Imagen 2</Text>


            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pantalla4')}>
            <Text>Mayor o Igual</Text>


            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pantalla5')}>
            <Text>Menor o Igual</Text>

            
            </TouchableOpacity>
        </View>
    );
}
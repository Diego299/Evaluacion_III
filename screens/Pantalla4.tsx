import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../theme/styles';


export default function Pantalla4() {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [resultado, setResultado] = useState('');

    const comparaciondeNumeros = () => {
        if (parseInt(n1) >= parseInt(n2)) {
            setResultado('Número mayor o igual');
        } else {
            setResultado('Número menor');
        }
    };



    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ingrese su primer Número"
                keyboardType="numeric"
                onChangeText={setN1}
                value={n1}
            />


            <TextInput
                style={styles.input}
                placeholder="Ingrese su segundo Número"
                keyboardType="numeric"
                onChangeText={setN2}
                value={n2}
            />

            
            <TouchableOpacity style={styles.button} onPress={comparaciondeNumeros}>
                <Text>Calcular Valor</Text>
            </TouchableOpacity>
            <Text>{resultado}</Text>
        </View>
    );
}
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from '../styles';

type Boton = {
    title: string;
    onPress: () => void;
    style?: object;
};

const Boton: React.FC<Boton> = ({ title, onPress, style }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={[styles.button]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Boton;
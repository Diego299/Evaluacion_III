import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { styles } from '../styles';

type etiqueta = {
    text: string;
    style?: object;
};

const Etiqueta: React.FC<etiqueta> = ({ text, style }) => {
    return <Text style={[styles.input, style]}>{text}</Text>;
};
export default Etiqueta;
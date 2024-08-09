import React from 'react';
import { View, Image } from 'react-native';
import { styles } from '../theme/styles';


export default function Pantalla2() {
    return (
        <View style={styles.container}>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4lpUSe6-WYW5WPS4rSJUmMBXeR3FEt8N1ng&s' }} style={styles.image} />
        </View>
    );
}
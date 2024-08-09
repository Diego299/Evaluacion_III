import React from 'react';
import { View, Image } from 'react-native';
import { styles } from '../theme/styles';


export default function Pantalla3() {
    return (
        <View style={styles.container}>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfzz8C99ISwKJ76z-4vGllZNxmewqpP5E3vTBthpqzj8eqaEbYabNMKr3JuzzaU6el3yg&usqp=CAU' }} style={styles.image} />
        </View>
    );
}
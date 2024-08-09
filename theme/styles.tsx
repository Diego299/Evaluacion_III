import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    button: {
        backgroundColor: '#28A1DB',
        padding: 5,
        margin: 15,
        borderRadius: 50,
    },
    input: {
        borderWidth: 2,
        borderColor: '#28A1DB',
        padding: 5,
        margin: 5,
        width: 400,
        borderRadius: 5,
    },
    image: {
        width: 480,
        height: 1000,
    },

    title:{
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    top: -200,
    }
});
import React from 'react'
import { Image, StyleSheet, Text, View, } from 'react-native'
import TextField from '../Componentes/TextField'
import MyButton from '../Componentes/Button'

export default function Review() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: 'https://i.pinimg.com/564x/fb/55/33/fb553309af3b1e60ca4d8a85972d4c11.jpg' }}
            />
            <Text style={styles.title}>The Batman</Text>
            <Text style={styles.question}>After two years prowling the streets as Batman, Bruce Wayne finds himself in the darkest depths of Gotham City. With few reliable allies, the lone vigilante establishes himself as the personification of revenge for the population.</Text>
            <TextField />
            <TextField />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    image: {
        marginTop: 3,
        width: 410,
        height: 300,
    },
    title: {
        marginTop: 10,
        marginLeft: 15,
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15
    },
    question: {
        color: 'gray',
        marginTop: 1,
        marginLeft: 15,
    },

    containerText: {
        justifyContent: "flex-start",
        flexDirection: "row",
    }
})

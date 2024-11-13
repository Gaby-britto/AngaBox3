import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const imgUser = 'https://i.pinimg.com/564x/13/12/d2/1312d287e7de2dde6a6ccb8f4e3ddcd3.jpg'
const imgNotification = 'https://i.pinimg.com/564x/ca/3a/d8/ca3ad807aacfa006e9df2a76eb30dbb8.jpg'

export default function Header() {
  return (
    <View style={styles.container}>
        <Image
         style={styles.imageUser}
         source={{uri: imgUser }}
        />
        <Text style={styles.nameUser}>Hi, Gaby Bea</Text>
        <Ionicons name="search-outline" size={30} color="#ccc" style={styles.iconSearch} />
        <Ionicons name="notifications-outline" size={30} color="#000" style={styles.iconNotification}/>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        justifyContent: "flex-start",
        flexDirection: "row",
    },
    imageUser: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        marginLeft: 10
    },
    nameUser: {
        marginTop: 15,
        marginLeft: 10,
        fontSize: 16,
        fontWeight: "bold"
    },
    iconSearch: {
        color: '#9400D3',
        marginLeft: 130,
        marginTop:10
    },
    iconNotification:{
        color: '#9400D3',
        marginLeft:14,
        marginTop:10
    }
});

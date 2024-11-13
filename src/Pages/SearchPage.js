import React from 'react'
import { ScrollView, View } from 'react-native'
import Header from '../Componentes/Header'
import Search from '../Componentes/Search'
import CardMovie from '../Componentes/CardMovie'
import Footer from '../Componentes/Footer'
import { NavigationContainer } from '@react-navigation/native'


export default function SearchPage() {
  
  return (
    <View>
      <ScrollView>
        <Header />
        <Search />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
      </ScrollView>
      <NavigationContainer>
        <Footer/>
      </NavigationContainer>
    </View>
  )
}
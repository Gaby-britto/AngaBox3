import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import Home from './src/Pages/Home';
import Login from './src/Pages/Login';
import Register from './src/Pages/Register';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SearchPage"> 
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

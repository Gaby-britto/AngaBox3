import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="home-outline" size={26} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Register')}
      >
        <Ionicons name="search-outline" size={30} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Ionicons name="person-outline" size={26} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    width: '100%',
    position: 'absolute', // Garante que o footer está fixo
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

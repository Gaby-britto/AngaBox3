import React from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function TextField(props) {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    height: 50,
    width: 330,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 5,
    fontFamily: 'Montserrat_400Regular',
  },
});

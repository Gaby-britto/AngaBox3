import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const img = 'https://i.pinimg.com/564x/66/e9/b7/66e9b7196a589c361ecca8c6672deed9.jpg';

export default function Banner() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBanner}
        source={{ uri: img }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 370,
    borderRadius: 10,
    marginTop: 20,
    shadowRadius: 1.41,
    alignSelf: 'center',
  },
  imageBanner: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  
});

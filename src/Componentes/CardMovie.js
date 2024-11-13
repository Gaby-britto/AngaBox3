import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = 'https://i.pinimg.com/564x/e1/0b/19/e10b1920526f880c589ff7e2e2df6641.jpg';

export default function CardMovie() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBanner}
        source={{ uri: image }}
        imageStyle={styles.imageStyle}
      />
      <Text style={styles.title}>Rio 2</Text>
      <Text style={styles.subTitle}>Adventure, Brazil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    marginTop: 30,
    marginLeft: 10,
  },
  imageBanner: {
    width: '100%',
    height: 200,
  },
  imageStyle: {
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
  },
  subTitle: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 8,
  },
});

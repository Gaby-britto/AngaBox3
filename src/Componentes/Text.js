import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Texts({ title = "Recommended for You" , subTitle = "See All"}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center", 
  },
  title: {
    fontSize: 22,
    marginLeft: 5,
    fontWeight: "bold"
  },
  subTitle: {
    marginTop: 5,
    marginLeft: 90,
    fontSize: 15,
    color: 'purple',
  },
});

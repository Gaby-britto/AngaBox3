import React, { useState } from "react";
import { Image, Text, View, Alert, StyleSheet, ActivityIndicator, Button } from "react-native";
import TextField from "../Componentes/TextField";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function Register() {
  // Carregamento de fontes
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  const initialForm = {
    nameUser: "",
    email: "",
    passWord: "",
  };

  const [formState, setFormState] = useState(initialForm);

  // Função para atualizar o estado de um campo específico
  const handleChange = (name, value) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleRegister = async () => {
    console.log("Valores dos campos:", formState);

    try {
      const response = await fetch("http://10.92.198.32:8080/api/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      console.log("Dados enviados:", formState);

      const responseData = await response.json(); // Captura a resposta JSON
      
      console.log("Resposta da API:", responseData);

      if (response.ok) {
        Alert.alert("Sucesso", "Registro realizado com sucesso!");
      } else {
        console.log("Erro na resposta:", responseData);
        Alert.alert("Erro", "Falha ao registrar. Verifique os dados e tente novamente.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      Alert.alert("Erro", "Falha ao registrar. Tente novamente.");
    }
  };

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../Assets/Images/logoImage.png")}
      />
      <Text style={styles.logo}>SIGN UP</Text>
      <TextField
        placeholder="Name"
        value={formState.nameUser}
        onChangeText={(text) => handleChange("nameUser", text)}
      />
      <TextField
        placeholder="Email"
        value={formState.email}
        onChangeText={(text) => handleChange("email", text)}
      />
      <TextField
        placeholder="Password"
        value={formState.passWord}
        onChangeText={(text) => handleChange("passWord", text)}
        secureTextEntry
      />
      <Button
        title="Register"
        onPress={handleRegister}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    marginTop: 60,
    width: 300,
    height: 300,
  },
  logo: {
    marginTop: 10,
    fontSize: 26,
    marginBottom: 25,
    color: "black",
    fontFamily: "Montserrat_400Regular",
  },
  question: {
    color: "gray",
    marginTop: 20,
    fontFamily: "Montserrat_400Regular",
  },
  login: {
    marginTop: 20,
    marginLeft: 5,
    color: "#9400D3",
    fontFamily: "Montserrat_400Regular",
  },
  containerText: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});

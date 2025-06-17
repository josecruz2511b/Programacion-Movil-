import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-web";
import React, { useState } from "react";

const Texto = ({ style }) => {
  const [contenido, setContenido] = useState("Hola Mundo");
  const actualizarTexto = () => {
    setContenido("State Modificado");
  };
  return (
    <Text style={[styles.text, style]} onPress={actualizarTexto}>
      {" "}
      {contenido}{" "}
    </Text>
  );
};

export default function App() {
  const [contenido, setContenido] = useState("Aque no me tocas");
  const actualizarBoton = () => {
    setContenido("Aplastado");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Texto style={styles.azul}></Texto>
      <Texto style={styles.verde}></Texto>
      <Texto style={styles.morado}></Texto>
      <Button onPress={actualizarBoton} title={contenido}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  text: {
    color: "white",
    fontSize: 28,
    width: 100,
    height: 100,
  },
  azul: { backgroundColor: "blue" },
  morado: { backgroundColor: "purple" },
  verde: { backgroundColor: "green" },
});
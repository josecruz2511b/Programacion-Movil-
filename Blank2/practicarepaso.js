
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, ActivityIndicator, TextInput, Button,Switch, Alert, SafeAreaView, Platform } from 'react-native';


export default function App() {
  const [loading, setloading] = useState(true);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [terminosAceptados, setTerminosAceptados] = useState(false); // Estado para términos y condiciones

  useEffect(() => {
    setTimeout(() => setloading(false), 3000);
  }, []);

  const mostrarAlerta = () => {
    if (!nombre || !email) {
      if (Platform.OS === "web") {
        window.alert("Por favor, completa todos los campos obligatorios.");
      } else {
        Alert.alert(
          "Error",
          "Por favor, completa todos los campos obligatorios.",
          [{ text: "OK" }]
        );
      }
    } else if (!terminosAceptados) {
      if (Platform.OS === "web") {
        window.alert("Debes aceptar los términos y condiciones para continuar.");
      } else {
        Alert.alert(
          "Error",
          "Debes aceptar los términos y condiciones para continuar.",
          [{ text: "OK" }]
        );
      }
    } else {
      if (Platform.OS === "web") {
        window.alert(`Registro exitoso\nNombre: ${nombre}\nEmail: ${email}`);
        limpiarFormulario();
      } else {
        Alert.alert("Registro exitoso", `Nombre: ${nombre}\nEmail: ${email}`, [
          { text: "OK", onPress: () => limpiarFormulario() },
        ]);
      }
    }
  };

  const limpiarFormulario = () => {
    setNombre("");
    setEmail("");
    setTerminosAceptados(false);
  };

  const cambiarTerminos = () => {
    setTerminosAceptados(prev => !prev);
  };

  if (loading) {
    return (
      <View style={styles.splash}>
        <Text style={styles.splashText}>Cargando...</Text>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Registro de Usuario</Text>
          
          <View style={styles.formulario}>
    
            
            <TextInput
              style={styles.input}
              placeholder="Nombre completo *"
              value={nombre}
              onChangeText={setNombre}
            />
    
            
            <TextInput
              style={styles.input}
              placeholder="Email *"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            
            <View style={styles.section}>
              <View style={styles.terminosContainer}>
                <Switch onValueChange={cambiarTerminos} value={terminosAceptados} />
                <Text style={styles.terminosText}>Acepto los términos y condiciones</Text>
              </View>
            </View>
    
            
            <Button title="Registrarse" onPress={mostrarAlerta} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  splash: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center'
  },
  splashText: {
    color: 'white',
    fontSize: 28,
    marginBottom: 20
  },
  background: {
    flex: 1,
    justifyContent: 'center'
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  formulario: {
    width: '100%',
    maxWidth: 300,
  },
  titulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  section: {
    marginBottom: 20,
    alignItems: 'center',
  },
  terminosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  terminosText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 10,
    flex: 1,
  },
});
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, Platform } from "react-native";
import { Button } from "react-native-web";
import React, { useState } from "react";


const showAlert = (message) =>{
    if (Platform.OS === 'web'){
        window.alert(message);
    }else{
        Alert.alert('Alert', message)
    }
}

export default function App(){
    return(

        <View style={styles.container}>
            <Text style={styles.title}>Reac Native Button Test</Text>
            <View style={styles.section}>
                <Text style={styles.description}>Boton Basico</Text>
                <Button
                    title="Presioname"
                    onPress={() => showAlert("Boton Presionado")}/>   
            </View>

            <View style={styles.section}>
                <Text style={styles.description}>Boton de color:</Text>
                <Button
                    title="Boton de color"
                    color="purple"
                    onPress={() => showAlert("Boton de color Presionado")}/>
            </View>

            <View style={styles.section}>
                <Text style={styles.description}>Boton deshabilitado:</Text>
                <Button
                    title="Deshabilitado"
                    disabled
                    onPress={() => showAlert('No funciona:(')}/>
            </View>

            <View style={styles.section}>
                <Text style={styles.description}>Two Buttons: </Text>
                <View style={style.buttonRow}>
                    <Button
                    title="Izquierda"
                    onPress={() => showAlert("Boton Izquierdo Presionado")}
                    />
                    <View style={styles.buttonSpacer} />
                    <Button
                    title="derecha"
                    onPress={() => showAlert("Boton Derecho Presionado")}
                    />
                </View>
            </View>

            <StatusBar style="auto"/>

            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    section: {
        marginVertical: 10,
        width: '80%',
    },
    description: {
        fontSize: 18,
        marginBottom: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonSpacer: {
        width: 10,
    }
});
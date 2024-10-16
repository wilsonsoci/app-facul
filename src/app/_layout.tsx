import "../styles/global.css"
import { Slot } from "expo-router";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font"
import { Text, View, StyleSheet } from "react-native";

const loadFonts = async () => {
  await Font.loadAsync({
    'Poppins-Regular': require("../../assets/fonts/Poppins-Regular.ttf"),
    'Poppins-Bold': require("../../assets/fonts/Poppins-Bold.ttf")
  })
}

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true))
  }, [])

  if(!fontsLoaded) {
    return <View><Text>Carregando...</Text></View>
  }

  return (
    <View style={styles.container}>
      <Slot/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins-Regular"
  }
})
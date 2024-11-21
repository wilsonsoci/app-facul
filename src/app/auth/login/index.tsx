import { View, SafeAreaView, Text, Pressable, StyleSheet } from "react-native";

import { InputEmail, InputPassword } from "../../../components/textInput";
import { Button } from "../../../components/button";

import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={[styles.centered, { marginTop: statusBarHeight + 8 }]}>
        <Text style={styles.title}>LOGIN</Text>
      </View>

      
      <View style={[styles.centered, { marginTop: 128 }]}>
        <InputEmail />
        <InputPassword />
        <Button title="Entrar" action={() => console.log("Login concluído!")} />
      </View>

      
      <View style={[styles.centered, { marginTop: 80 }]}>
        <Pressable onPress={() => console.log("Esqueci minha senha!")}>
          <Text style={styles.link}>Esqueceu sua senha?</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3E2D3F", // Fundo da tela
    width: "100%", // Equivalente a w-full do Tailwind
  },
  centered: {
    width: "100%",
    alignItems: "center", // Centraliza no eixo horizontal
    justifyContent: "center", // Centraliza no eixo vertical
  },
  title: {
    fontSize: 32,
    color: "#FFFFFF", 
    fontWeight: "bold",
    marginTop: 40,
  },
  link: {
    textDecorationLine: "underline", // Equivalente a underline do Tailwind
    color: "#8460B8",
    fontSize: 16,
    fontWeight: "500",
  },
});

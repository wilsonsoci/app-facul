import { View, SafeAreaView, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";

import { InputEmail, InputPassword } from "../../../components/textInput";
import { Button } from "../../../components/button";

import Constants from "expo-constants";
import { fonts } from "@/src/utils/fonts";

const statusBarHeight = Constants.statusBarHeight;

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>

      <View>
        <Text style={styles.title}>LOGIN</Text>
      </View>

      <View style={styles.centered}>
        <InputEmail />
        <InputPassword />

          <Button title="Entrar" action={() => console.log("Login concluído!")}/>
      </View>

      
      <View style={[styles.centered, { marginTop: 80}]}>
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
    backgroundColor: "#3E2D3F",
  },
  centered: {
    width: "100%",
    alignItems: "center", 
    justifyContent: "center",
    position: 'absolute',
    bottom: 70
  },
  title: {
    fontSize: 32,
    color: "#FFFFFF",
    marginTop: 40,
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 570,
    fontFamily: fonts.Popcat
  },
  link: {
    textDecorationLine: "underline", // Equivalente a underline do Tailwind
    color: "#8460B8",
    fontSize: 16,
    fontWeight: "500",
  },
});

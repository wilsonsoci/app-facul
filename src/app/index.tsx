import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { router } from "expo-router";

import { Button } from "../components/button"

import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  function goToLogin() {
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>APP-FACUL</Text>
        <Text style={styles.subtitle}>Bem-vindo ao app!</Text>
      </View>

      <View style={styles.buttonContainer}>
          <Button title="Criar conta" action={() => router.push("auth/register" as any)} />
          <Button title="Entrar" action={() => router.push("auth/login" as any)} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>APP-FACUL™ 2024 </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3E2D3F",
  },
  backgroundImage: {
    flex: 1,
  },
  header: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: statusBarHeight + 8,
  },
  title: {
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginTop: 40,
  },
  subtitle: {
    fontSize: 18,
    color: "#B3B3B3",
    fontWeight: "bold",
    marginTop: 8,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 64,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  footerText: {
    color: "#7A7A7A",
  },
});

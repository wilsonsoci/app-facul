import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export function InputEmail() {
  return (
    <View style={styles.inputContainer}>
      <Feather name="mail" size={24} color="#7E7A93" />
      <TextInput
        style={styles.input}
        placeholder="Insira seu e-mail"
        placeholderTextColor="#7E7A93"
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </View>
  );
}

export function InputPassword() {
    return (
      <View style={styles.inputContainer}>
        <Feather name="lock" size={24} color="#7E7A93" />
        <TextInput
          style={styles.input}
          placeholder="Insira sua senha"
          placeholderTextColor="#7E7A93"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  inputContainer: {
    width: "94%",
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    borderRadius: 999,
    paddingHorizontal: 24,
    marginBottom: 40,
    backgroundColor: "#1B1732",
    gap: 10,
  },
  input: {
    flex: 1,
    color: "#D3D3D3",
    fontSize: 16,
  },
});

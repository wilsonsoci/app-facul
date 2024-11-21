import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface IProps {
  title: string;
  action: () => void;
}

export function Button({ title, action }: IProps) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={action}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 999,
    marginBottom: 32,
    backgroundColor: "#612FCC",
    shadowColor: "#2A1A56",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 24, // equivalente a text-2xl Tailwind
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

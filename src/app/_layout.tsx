import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Início", headerStyle: { backgroundColor: "#3E2D3F" }, headerTintColor: "#fff" }} />
      <Stack.Screen name="auth/login/index" options={{ headerTitle: "Login", headerStyle: { backgroundColor: "#3E2D3F" }, headerTintColor: "#fff" }} />
      <Stack.Screen name="auth/register/index" options={{ headerTitle: "Criar Conta", headerStyle: { backgroundColor: "#3E2D3F" }, headerTintColor: "#fff" }} />
    </Stack>
  );
}

import { SplashScreen, Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { useEffect } from "react";

export default function RootLayout() {

  const [loaded] = useFonts({
    ShineBubble: require('../fonts/Shine-Bubble.ttf'),
    Popcat: require('../fonts/Popcat.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "CURSOS", headerStyle: { backgroundColor: "#ae34eb" }, headerTintColor: "#000", headerTitleAlign: 'center'}}/>
      <Stack.Screen name="auth/login/index" options={{ headerTitle: "Login", headerStyle: { backgroundColor: "#3E2D3F" }, headerTintColor: "#fff" }} />
      <Stack.Screen name="auth/register/index" options={{ headerTitle: "Criar Conta", headerStyle: { backgroundColor: "#3E2D3F" }, headerTintColor: "#fff" }} />
    </Stack>
  );
}

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
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
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="forget/index" options={{ headerShown: false }} />
        <Stack.Screen name="forget/final" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="home/index" options={{ headerShown: false }} />
        <Stack.Screen name="home/scan" options={{ headerShown: false }} />
        <Stack.Screen name="home/control" options={{ headerShown: false }} />
        <Stack.Screen name="home/single" options={{ headerShown: false }} />
        <Stack.Screen name="home/temperature" options={{ headerShown: false }} />
        <Stack.Screen name="home/schedule" options={{ headerShown: false }} />
        <Stack.Screen name="home/log" options={{ headerShown: false }} />
        <Stack.Screen name="home/logs" options={{ headerShown: false }} />
        <Stack.Screen name="home/profile" options={{ headerShown: false }} />
        <Stack.Screen name="home/notification" options={{ headerShown: false }} />
        <Stack.Screen name="home/filter" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

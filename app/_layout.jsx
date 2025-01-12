import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Slot } from 'expo-router'
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { tokenCache } from './login/cache.js'



export default function RootLayout() {

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

  useFonts({
    Outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Medium": require("./../assets/fonts/Outfit-Medium.ttf"),
    "Outfit-Bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });
  return (
    <ClerkProvider publishableKey={publishableKey}>
 
    <Stack>
      <Stack.Screen tokenCache={tokenCache} name="index" />
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
    </Stack>
      
   </ClerkProvider>
  );
}

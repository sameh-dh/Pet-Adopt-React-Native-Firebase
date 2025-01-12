import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Slot } from 'expo-router'
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import * as SecureStore from 'expo-secure-store'


const createTokenCache =  TokenCache => {
  return {
    getToken: async () => {
      try {
        const item = await SecureStore.getItemAsync(key)
        if (item) {
          console.log(`${key} was used 🔐 \n`)
        } else {
          console.log('No values stored under key: ' + key)
        }
        return item
      } catch (error) {
        console.error('secure store get item error: ', error)
        await SecureStore.deleteItemAsync(key)
        return null
      }
    },
    saveToken: (key, token) => {
      return SecureStore.setItemAsync(key, token)
    },
  }
}

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
      <Stack.Screen name="index" />
      <Stack.Screen name="login/index" options={{ headerShown: false }} />
    </Stack>
      
   </ClerkProvider>
  );
}

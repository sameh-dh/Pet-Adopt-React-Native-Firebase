import { Image, View, Text, Pressable } from "react-native";
import React from "react";
import Colors from "../../constants/colors.js";
import LogIn from "./logIn.jsx";
import * as WebBrowser from 'expo-web-browser'
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'


export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()
export default function LogInScreen() {
  useWarmUpBrowser()
// if you want to use facebook just change oauth_google to oauth_facebook
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/home', { scheme: 'myapp' }),
      })

      // If sign in was successful, set the active session
      if (createdSessionId) {
        
      } else {
        // Use signIn or signUp returned from startOAuthFlow
        // for next steps, such as MFA
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }, [])
  return (
    <View style={{ backgroundColor: Colors.WHITE, height: "100%" }}>
      <Image
        source={require("./../../assets/images/login.png")}
        style={{
          width: "100%",
          height: "60%",
        }}
      />
      <View style={{ padding: 20, display: "flex", alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "Outfit-Bold",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          Ready to make new freind ?
        </Text>
        <Text
          style={{
            fontFamily: "Outfit",
            fontSize: 18,
            textAlign: "center",
            color: Colors.GRAY,
          }}
        >
          Let's adopt the pet wish you like and make there life happy again
        </Text>
        <Pressable onPress={onPress}
          style={{
            backgroundColor: Colors.PRIMARY,
            width: "100%",
            height: "fit",
            padding: 14,
            borderRadius: 14,
            marginTop: 10,
            fontSize: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Outfit-Bold",
              textAlign: "center",
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

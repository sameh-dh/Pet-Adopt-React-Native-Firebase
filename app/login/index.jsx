import { Image, View, Text, Pressable } from "react-native";
import React from "react";
// import Colors from "../../constants/colors.js";
import * as WebBrowser from 'expo-web-browser'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking';
import { customStyle } from "./style";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'

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

// WebBrowser.maybeCompleteAuthSession() is a function provided by the expo-web-browser library. This function ensures the smooth handling of redirects after authentication by completing any ongoing web browser session. It is often used alongside expo-auth-session for OAuth2-based login flows.
WebBrowser.maybeCompleteAuthSession()

export default function LogInScreen() {
  //useWarmUpBrowser used to improve the user experience by reducing the time it takes to open the browser when you call
  useWarmUpBrowser()
   // if you want to use facebook just change oauth_google to oauth_facebook
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })
const onPress = React.useCallback(async () => {
  
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
      })
     console.log()
      // If sign in was successful, set the active session
      if (createdSessionId) { 
        setActive({ session: createdSessionId })
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
    
    <View style={customStyle.MainView}>
      <Image
        source={require("./../../assets/images/login.png")}
        style={customStyle.Image}
      />
      <View style={customStyle.ViewText}>
        <Text
          style={customStyle.Question}
        >
          Ready to make new freind ?
        </Text>
        <Text
          style={customStyle.Description}
        >
          Let's adopt the pet wish you like and make there life happy again
        </Text>
        <Pressable onPress={onPress}
          style={customStyle.GetstartedPressable}
        >
          <Text
            style={customStyle.GetstartedText}
          >
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

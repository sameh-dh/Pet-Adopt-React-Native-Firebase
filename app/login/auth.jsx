 import React from "react"
 import * as WebBrowser from 'expo-web-browser'
 import { useOAuth } from '@clerk/clerk-expo'
 import * as Linking from 'expo-linking'
import { View } from 'react-native-web'
 
 
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
 // if you want to use facebook just change oauth_google to oauth_facebook
 export const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

 export const onPress = React.useCallback(async () => {
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

  export default Auth = () =>{
    return (
      <View></View>
    )
  }
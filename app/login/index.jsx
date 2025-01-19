import { Image, View, Text, Pressable } from "react-native";
import React from "react";
import Colors from "../../constants/colors.js";
import * as WebBrowser from 'expo-web-browser'
import { useWarmUpBrowser } from "./auth.jsx";
import { onPress } from "./auth.jsx";
import { customStyle } from "./style";
// WebBrowser.maybeCompleteAuthSession() is a function provided by the expo-web-browser library. This function ensures the smooth handling of redirects after authentication by completing any ongoing web browser session. It is often used alongside expo-auth-session for OAuth2-based login flows.
WebBrowser.maybeCompleteAuthSession()

export default function LogInScreen() {
  //useWarmUpBrowser used to improve the user experience by reducing the time it takes to open the browser when you call
  useWarmUpBrowser()

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

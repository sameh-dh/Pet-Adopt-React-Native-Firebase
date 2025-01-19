import { Image, View, Text, Pressable } from "react-native";
import React from "react";
import Colors from "../../constants/colors.js";
import * as WebBrowser from 'expo-web-browser'
import { useWarmUpBrowser } from "./auth.jsx";
import { onPress } from "./auth.jsx";

// WebBrowser.maybeCompleteAuthSession() is a function provided by the expo-web-browser library. This function ensures the smooth handling of redirects after authentication by completing any ongoing web browser session. It is often used alongside expo-auth-session for OAuth2-based login flows.
WebBrowser.maybeCompleteAuthSession()

export default function LogInScreen() {
  //useWarmUpBrowser used to improve the user experience by reducing the time it takes to open the browser when you call
  useWarmUpBrowser()

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

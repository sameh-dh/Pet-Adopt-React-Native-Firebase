import { Image, View, Text, Pressable } from "react-native";
import React from "react";
import Colors from "../../constants/colors.js";
export default function LogInScreen() {
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
        <Pressable
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

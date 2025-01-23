import { Pressable,Text, View } from "react-native";
import {Link, Redirect} from "expo-router"
import { useUser } from "@clerk/clerk-expo";
export default function Index() {

  const {user} = useUser();
  console.log(user)
  return(
    <View
      style={{
       
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    {user ? <Redirect href={'/(tabs)/login'} /> : <Redirect href={'/login'} />}
    </View>
  );
}

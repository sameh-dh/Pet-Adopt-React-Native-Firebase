import { Pressable,Text, View } from "react-native";
import {Link} from "expo-router"
export default function Index() {
  return (
    <View
      style={{
       
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <Link href={'/login'}>
      <Text> Go to login Screen</Text>
     </Link>
    </View>
  );
}

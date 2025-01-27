import { Pressable,Text, View } from "react-native";
import {Link, Redirect} from "expo-router"
import { useUser , useAuth, SignedIn} from "@clerk/clerk-expo";
import { useEffect } from "react";
export default function Index() {
 
  const { isLoaded, isSignedIn, user } = useUser()
  const {  userId, sessionId } = useAuth()

  useEffect(() => {
    console.log("user", user?.firstName)
    console.log("user only", user)
    console.log(isLoaded)
    console.log(userId)

   });
   console.log(useUser())
  
  return  (
    <View
      style={{
       
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href='./login'>  go home </Link>
    {/* {user  && isSignedIn ? <Redirect href={'/(tabs)/home'} /> : <Redirect href={'/login'} />} */}
    {/* {user ? <Redirect href={'/(tabs)/login'} /> : <Redirect href={'/login'} />} */}

    </View>
  );
}

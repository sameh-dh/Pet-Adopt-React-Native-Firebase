import { Image,View, Text } from 'react-native'
import React from 'react'

export default function LogInScreen() {
  return (
    <View>
      <Image source={require('./../../assets/images/login.png')}
      style={{
        width:'100%',
        height:'500'
      }}
      />
      <View style={{padding:20,display:'flex',alignItems:'center'}}>
        <Text style={{fontFamily:'Outfit-Bold',fontSize:30,textAlign:'center'}}>
            Ready to make new freind ?
        </Text>
        <Text style={{fontFamily:"Outfit", fontSize:18 ,textAlign:"center"}}>Let's adopt the pet wish you like and make there life happy again</Text>
      </View>
    </View>
  )
}
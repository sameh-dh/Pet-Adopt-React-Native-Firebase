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
        <Text style={{fontFamily:'Outfit-Bold',fontSize:30}}>
            Ready to make new freind ?
        </Text>
      </View>
    </View>
  )
}
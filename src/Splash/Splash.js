import React from 'react'
import { View, StyleSheet, StatusBar, Image} from 'react-native';


export default function Splash () {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <View style ={styles.logoContainer}>
        <Image source={require('../../assets/image/splash_image.png')} style={styles.image}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    width : '100%',
    height : '100%',  
    backgroundColor : '#FFCBCB',
    justifyContent : 'center',
    alignItems : 'center'
  },
  logoContainer : {
    alignItems : 'center',
    justifyContent : 'center',
    width : 163,
    height : 154
  },
  image :{
    width : '100%',
    height : '100%',
  }
})

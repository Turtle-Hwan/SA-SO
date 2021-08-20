import React from 'react'
import { View, StyleSheet, StatusBar, Text} from 'react-native';


export default function Splash () {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <View style ={styles.logoContainer}>
        <Text style={styles.logoName}>사소</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    width : '100%',
    height : '100%',  
    backgroundColor : '#4C6BFD',
    justifyContent : 'center',
    alignItems : 'center'
  },
  logoContainer : {
    alignItems : 'center',
    justifyContent : 'center',
    width : 70,
    height : 70
  },
  logoName :{
    fontSize : 30
  }
})

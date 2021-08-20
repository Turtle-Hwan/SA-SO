import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Main() {
  return(
    <View style={styles.container}>
      <Text>김家네</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container :{
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }
})

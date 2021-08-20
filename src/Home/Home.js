import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MonthCalendar from './MonthCalendar';

export default function Home() {
  return(
    <View style={styles.container}>
      <MonthCalendar></MonthCalendar>
    </View>
  )
}


const styles = StyleSheet.create({
  container :{
    flex: 1,
    width: '100%',
    alignItems : 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  }
})

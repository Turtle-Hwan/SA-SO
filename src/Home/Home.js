import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import WeekCalender from './Calender/WeekCalender';

export default function Home() {
  return(
    <View style={styles.container}>
      <WeekCalender/>
    </View>
  )
}


const styles = StyleSheet.create({
  container :{
    flex : 1,
    alignItems : 'center',
  }
})

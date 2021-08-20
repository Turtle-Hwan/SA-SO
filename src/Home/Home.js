import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MonthCalendar from './MonthCalendar';

import WeekCalender from './Calender/WeekCalender';

export default function Home() {
  return(
    <View style={styles.container}>
      <MonthCalendar></MonthCalendar>
      <WeekCalender/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MonthCalendar from './Calender/MonthCalendar';
import WeekCalender from './Calender/WeekCalender';

const Tab = createMaterialTopTabNavigator();

const CalenderTab = () => {
  return (
    <Tab.Navigator initialRouteName="MonthCalender"
      style={{backgroundColor: '#ffffff', }}
    screenOptions={{
      tabBarActiveTintColor: '#000000',
      tabBarInactiveTintColor: '#B4B4B4',
      tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
      tabBarIndicatorStyle: {borderBottomColor:'#FFBDBD', borderBottomWidth: 30,borderRadius: 4},
      tabBarStyle: {
        marginHorizontal: '42.5%',
        width: 70,
        height: 40, 
        backgroundColor: '#ffffff',
        shadowColor: "#ffffff",
        marginTop: 14,
        marginBottom: 22,
      }
  }}>
  <Tab.Screen name="월" component={MonthCalendar} />
  <Tab.Screen name="주" component={WeekCalender} />
  </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function Home() {
  return(
      <Stack.Navigator initialRouteName="CalenderTab" screenOptions={{headerShown: false}}>
          <Stack.Screen name="CalenderTab" component={CalenderTab} ></Stack.Screen>
      </Stack.Navigator>
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

import React, { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Splash from './Splash/Splash';

import Home from './Home/Home';
import Todo from './Social/Social';
import Profile from './Profile/Profile';

const Tab = createBottomTabNavigator();

export default function TabNav() {

  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions = {{
          tabBarStyle: {
            height: 70, 
            backgroundColor: '#ffffff',
            shadowColor: "#ffffff",
            paddingBottom: 9,
          },
          tabBarLabelStyle: { fontSize: 11, fontWeight: 'bold' },
          tabBarActiveTintColor: '#FF9A9A',
          tabBarInactiveTintColor: '#B4B4B4',
        }}
        >
      <Tab.Screen name="Todo" component={Todo} options={{
          headerShown: false,
          tabBarLabel: '게시판',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='document-text-outline' color={color} size={25}></Ionicons>
          ) }}/>
        <Tab.Screen name="Home" component={Home} options={{
          headerShown: false,
          tabBarLabel: '홈',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name='home' color={color} size={25}></SimpleLineIcons>
          ) }}/>
        <Tab.Screen name="Profile" component={Profile} options={{
          headerShown: false,
          tabBarLabel: '마이',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person-outline' color={color} size={25} />
          ) }}/>
      </Tab.Navigator>
  );
}
